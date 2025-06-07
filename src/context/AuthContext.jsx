import axios from 'axios';
import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Check if user is logged in on initial load
  useEffect(() => {
    const token = localStorage.getItem('token');
    const userString = localStorage.getItem('user');

    if (token && userString) {
      try {
        setCurrentUser(JSON.parse(userString));
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      } catch (e) {
        console.error('Failed to parse user from localStorage', e);
        localStorage.removeItem('token');
        localStorage.removeItem('user');
      }
    }
    setLoading(false);
  }, []);

  const loginUser = async (email, password) => {
    try {
      const response = await axios.post('/api/auth/login', { email, password });
      const { token, user } = response.data;

      if (!token) {
        throw new Error('Login response did not include a token.');
      }

      localStorage.setItem('token', token);
      if (user) {
        localStorage.setItem('user', JSON.stringify(user));
        setCurrentUser(user);
      } else {
        localStorage.removeItem('user');
        setCurrentUser(null);
      }
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

      return { success: true, user };
    } catch (error) {
      console.error('Login error:', error);
      const errorData = error.response?.data;
      let message = 'Login failed. Please try again.';
      if (errorData?.errors && Array.isArray(errorData.errors)) {
        message = errorData.errors.map((e) => e.msg).join(', ');
      } else if (errorData?.msg) {
        message = errorData.msg;
      }
      return { success: false, message };
    }
  };

  const registerUser = async (username, email, password) => {
    try {
      await axios.post('/api/auth/register', { username, email, password });
      return await loginUser(email, password);
    } catch (error) {
      console.error('Registration error:', error);
      const errorData = error.response?.data;
      let message = 'Registration failed. Please try again.';
      if (errorData?.errors && Array.isArray(errorData.errors)) {
        message = errorData.errors.map((e) => e.msg).join(', ');
      } else if (errorData?.msg) {
        message = errorData.msg;
      }
      return { success: false, message };
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    delete axios.defaults.headers.common['Authorization'];
    setCurrentUser(null);
  };

  const value = {
    currentUser,
    isAuthenticated: !!currentUser && !!localStorage.getItem('token'),
    loginUser,
    registerUser,
    logout,
    loading,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export default AuthContext;
