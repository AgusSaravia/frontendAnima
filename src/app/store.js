import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    // Add other reducers here as your application grows
  },
  // Middleware can be added here if needed, e.g., for logging
  // devTools: process.env.NODE_ENV !== 'production', // Enable DevTools in development
});

export default store;
