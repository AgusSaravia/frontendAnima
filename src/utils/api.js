/**
 * API Client Configuration and Utilities
 * 
 * API Response Format:
 * All API endpoints return a consistent response format:
 * {
 *   success: boolean,
 *   data: object | null,
 *   message: string | null
 * }
 */

import axios from 'axios';

// Create axios instance with base configuration
const api = axios.create({
  baseURL: 'http://localhost:3000/api',
  headers: {
    'Content-Type': 'application/json'
  }
});

// Add authorization header with JWT token if available
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Handle response errors globally
api.interceptors.response.use(
  (response) => {
    // Check for the new standard response format
    if (response.data && typeof response.data.success === 'boolean') {
      // If response indicates failure, reject the promise
      if (!response.data.success) {
        return Promise.reject({
          response: {
            status: response.status,
            data: response.data
          }
        });
      }
    }
    return response;
  },
  (error) => {
    // Handle 401 Unauthorized responses
    if (error.response && error.response.status === 401) {
      // Clear authentication data if token is invalid
      if (error.config.url !== '/auth/login') {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        localStorage.removeItem('tokenExpiry');
      }
    }
    return Promise.reject(error);
  }
);

// Authentication API methods
export const authAPI = {
  /**
   * Login user
   * @param {string} email - User email
   * @param {string} password - User password
   * @returns {Promise} - Response with success, message, and data containing token, user info and expiresIn
   */
  login: async (email, password) => {
    try {
      // Minimal non-sensitive logging
      console.log('Login attempt initiated');
      
      const requestData = { email, password };
      const response = await api.post('/auth/login', requestData);
      
      // Check for the new standard response format
      if (response.data && response.data.success) {
        // Store authentication info only if login was successful
        const { token, user, expiresIn } = response.data.data;
        
        if (token && user) {
          localStorage.setItem('token', token);
          localStorage.setItem('user', JSON.stringify(user));
          
          // Store token expiration time (in milliseconds)
          if (expiresIn) {
            const expiryTime = Date.now() + expiresIn * 1000;
            localStorage.setItem('tokenExpiry', expiryTime.toString());
          }
          
          console.log('Login successful');
        }
      }
      
      return {
        success: response.data.success,
        message: response.data.message,
        data: response.data.data
      };
    } catch (error) {
      // Minimal error logging - no sensitive data
      console.error('Login error:', {
        status: error.response?.status,
        message: error.response?.data?.message
      });
      
      return { 
        success: false, 
        data: null,
        message: error.response?.data?.message || 'Login failed. Please try again.'
      };
    }
  },
  
  /**
   * Register user
   * @param {object} userData - User registration data
   * @returns {Promise} - Response with success, message, and data
   */
  register: async (userData) => {
    try {
      console.log('Registration attempt initiated');
      
      const response = await api.post('/auth/register', userData);
      
      // Check for the new standard response format
      if (response.data && response.data.success) {
        // Store authentication info only if registration was successful
        const { token, user, expiresIn } = response.data.data;
        
        if (token && user) {
          localStorage.setItem('token', token);
          localStorage.setItem('user', JSON.stringify(user));
          
          // Store token expiration time (in milliseconds)
          if (expiresIn) {
            const expiryTime = Date.now() + expiresIn * 1000;
            localStorage.setItem('tokenExpiry', expiryTime.toString());
          }
          
          console.log('Registration successful');
        }
      }
      
      return {
        success: response.data.success,
        message: response.data.message,
        data: response.data.data
      };
    } catch (error) {
      console.error('Registration error:', {
        status: error.response?.status,
        message: error.response?.data?.message
      });
      
      return { 
        success: false, 
        data: null,
        message: error.response?.data?.message || 'Registration failed. Please try again.'
      };
    }
  },
  
  /**
   * Validate JWT token
   * @returns {Promise<object>} - Object with validation result
   */
  validateToken: async () => {
    try {
      const response = await api.get('/auth/validate');
      return {
        success: response.data.success,
        data: response.data.data,
        message: response.data.message
      };
    } catch (error) {
      return {
        success: false,
        data: null,
        message: 'Token validation failed'
      };
    }
  },
  
  /**
   * Client-side logout - clears local authentication data
   */
  logout: () => {
    // Clear all authentication data from local storage
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    localStorage.removeItem('tokenExpiry');
    console.log('User logged out locally');
  },
  
  /**
   * Server-side logout - calls the logout endpoint to invalidate token
   * @returns {Promise<object>} - Response from server
   */
  serverLogout: async () => {
    try {
      const response = await api.post('/auth/logout');
      return {
        success: response.data.success,
        message: response.data.message
      };
    } catch (error) {
      console.error('Server logout error:', {
        status: error.response?.status,
        message: error.response?.data?.message
      });
      return {
        success: false,
        message: 'Server logout failed'
      };
    }
  }
};

// User API methods
export const userAPI = {
  /**
   * Get user profile
   * @returns {Promise} - User profile data
   */
  getProfile: async () => {
    try {
      const response = await api.get('/users/me');
      return {
        success: response.data.success,
        data: response.data.data,
        message: response.data.message
      };
    } catch (error) {
      return { 
        success: false, 
        data: null,
        message: error.response?.data?.message || 'Failed to get profile'
      };
    }
  }
};

// Generic API methods for protected routes
export const apiRequest = {
  get: async (url) => {
    try {
      const response = await api.get(url);
      return {
        success: response.data.success,
        data: response.data.data,
        message: response.data.message
      };
    } catch (error) {
      return { 
        success: false, 
        data: null,
        message: error.response?.data?.message || 'Request failed'
      };
    }
  },
  post: async (url, data) => {
    try {
      const response = await api.post(url, data);
      return {
        success: response.data.success,
        data: response.data.data,
        message: response.data.message
      };
    } catch (error) {
      return { 
        success: false, 
        data: null,
        message: error.response?.data?.message || 'Request failed'
      };
    }
  }
};

export default api;
