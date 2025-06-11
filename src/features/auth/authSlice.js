import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { authAPI } from '../../utils/api';
import axios from 'axios';

// Helper to get initial state from localStorage
const getInitialAuthState = () => {
  const token = localStorage.getItem('token');
  const userString = localStorage.getItem('user');
  const tokenExpiryString = localStorage.getItem('tokenExpiry');

  if (token && userString && tokenExpiryString) {
    const user = JSON.parse(userString);
    const tokenExpiry = parseInt(tokenExpiryString, 10);

    // Add a small buffer (e.g., 10 seconds) to expiry check for safety
    if (tokenExpiry > Date.now() + 10000) { 
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      return {
        currentUser: user,
        token: token,
        tokenExpiryTime: tokenExpiry,
        isAuthenticated: true,
        isLoading: false, // Set to false if token is valid and loaded
        error: null,
      };
    }
  }
  // Clear any potentially stale data if not valid
  localStorage.removeItem('token');
  localStorage.removeItem('user');
  localStorage.removeItem('tokenExpiry');
  delete axios.defaults.headers.common['Authorization'];
  return {
    currentUser: null,
    token: null,
    tokenExpiryTime: null,
    isAuthenticated: false,
    isLoading: true, // Start with loading true to allow initial validation if no valid token found
    error: null,
  };
};

const initialState = getInitialAuthState();

// Async Thunks
export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const result = await authAPI.login(email, password);
      if (result.success && result.data) {
        const { token, user, expiresIn } = result.data;
        const expiryTime = Date.now() + expiresIn * 1000;
        localStorage.setItem('token', token);
        localStorage.setItem('user', JSON.stringify(user));
        localStorage.setItem('tokenExpiry', expiryTime.toString());
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        return { token, user, expiryTime };
      }
      return rejectWithValue(result.message || 'Login failed');
    } catch (error) {
      console.error(`[AuthSlice] Login Error: ${error.message}`);
      return rejectWithValue(error.message || 'An unexpected error occurred during login');
    }
  }
);

export const validateUserToken = createAsyncThunk(
  'auth/validateUserToken',
  async (_, { getState, rejectWithValue, dispatch }) => {
    const { token, tokenExpiryTime, currentUser: existingUser } = getState().auth; 

    if (!token || !tokenExpiryTime) {
      dispatch(logoutUser()); // Ensure state is cleared if no token/expiry
      return rejectWithValue('No token or expiry time found for validation');
    }

    if (tokenExpiryTime <= Date.now() + 10000) { // Check expiry with buffer
        dispatch(logoutUser()); // Ensure state is cleared if token expired locally
        return rejectWithValue('Token expired based on local expiry time');
    }

    try {
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`; // Ensure header is set
      const result = await authAPI.validateToken(); 
      if (result.success && result.data) {
        const user = result.data.user || existingUser; 
        const newToken = result.data.token || token; 
        const newExpiresIn = result.data.expiresIn;
        let newExpiryTime = tokenExpiryTime;

        if (newExpiresIn) {
            newExpiryTime = Date.now() + newExpiresIn * 1000;
        }
        
        localStorage.setItem('token', newToken);
        localStorage.setItem('user', JSON.stringify(user));
        localStorage.setItem('tokenExpiry', newExpiryTime.toString());
        axios.defaults.headers.common['Authorization'] = `Bearer ${newToken}`;

        return { token: newToken, user, expiryTime: newExpiryTime };
      }
      dispatch(logoutUser()); // If backend validation fails, logout
      return rejectWithValue(result.message || 'Token validation failed by backend');
    } catch (error) {
      console.error(`[AuthSlice] Validate Token Error: ${error.message}`);
      dispatch(logoutUser()); // If API call fails, logout
      return rejectWithValue(error.message || 'Token validation API call failed');
    }
  }
);

export const logoutUser = createAsyncThunk(
  'auth/logoutUser',
  async (_, { dispatch }) => {
    try {
      // await authAPI.logout(); // Call this if you have a backend logout endpoint
    } catch (error) {
      console.error('[AuthSlice] Backend logout failed, proceeding with client-side logout:', error);
    }
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    localStorage.removeItem('tokenExpiry');
    delete axios.defaults.headers.common['Authorization'];
    return; 
  }
);

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    clearAuthError: (state) => {
      state.error = null;
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      // Login
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isAuthenticated = true;
        state.currentUser = action.payload.user;
        state.token = action.payload.token;
        state.tokenExpiryTime = action.payload.expiryTime;
        state.error = null;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isAuthenticated = false;
        state.currentUser = null;
        state.token = null;
        state.tokenExpiryTime = null;
        state.error = action.payload;
      })
      // Validate Token
      .addCase(validateUserToken.pending, (state) => {
        // isLoading is already true from initialState or if previous validation failed
        // Only set to true if it was false, to avoid flicker if already loading.
        if (!state.isLoading) state.isLoading = true; 
      })
      .addCase(validateUserToken.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isAuthenticated = true;
        state.currentUser = action.payload.user;
        state.token = action.payload.token;
        state.tokenExpiryTime = action.payload.expiryTime;
        state.error = null;
      })
      .addCase(validateUserToken.rejected, (state, action) => {
        state.isLoading = false;
        state.isAuthenticated = false;
        state.currentUser = null;
        state.token = null;
        state.tokenExpiryTime = null;
        state.error = action.payload;
        // localStorage and axios header are cleared by the thunk itself before rejecting
      })
      // Logout
      .addCase(logoutUser.fulfilled, (state) => {
        state.currentUser = null;
        state.token = null;
        state.isAuthenticated = false;
        state.isLoading = false; // Set loading to false on logout
        state.error = null;
        state.tokenExpiryTime = null;
      });
  },
});

export const { clearAuthError, setLoading } = authSlice.actions;

export default authSlice.reducer;
