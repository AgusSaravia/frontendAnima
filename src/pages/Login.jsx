// src/components/LoginPage.jsx
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const LoginPage = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { loginUser } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    if (!formData.email || !formData.password) {
      setError('Email y contraseña son obligatorios');
      return;
    }
    try {
      setIsLoading(true);
      const result = await loginUser(formData.email, formData.password);
      if (result.success) {
        const user = JSON.parse(localStorage.getItem('user'));
        navigate(user?.role === 'admin' ? '/dashboard' : '/');
      } else {
        setError(result.message || 'Error al iniciar sesión. Intenta nuevamente.');
      }
    } catch (err) {
      setError('Ocurrió un error inesperado. Intenta nuevamente.');
      console.error('Login error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      <div
        className="w-full md:w-1/2 flex items-center justify-center p-6 md:p-8"
        style={{ backgroundColor: '#3D520D' }}
      >
        <h1 className="text-white text-5xl md:text-7xl font-extrabold">Suby!</h1>
      </div>
      <div className="w-full md:w-1/2 flex items-center justify-center bg-gray-50 p-6 md:p-8">
        <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-6 md:p-8">
          <h2 className="text-2xl md:text-3xl font-bold text-[#3D520D] mb-6 text-center">
            Inicia sesión
          </h2>
          {error && (
            <div className="mb-4 bg-red-50 border-l-4 border-red-400 p-4">
              <div className="flex">
                <div className="flex-shrink-0">
                  <svg
                    className="h-5 w-5 text-red-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-sm text-red-700">{error}</p>
                </div>
              </div>
            </div>
          )}
          <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="email" className="sr-only">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none rounded-t-md block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-[#3D520D] focus:border-[#3D520D] focus:z-10 sm:text-sm bg-gray-100"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  disabled={isLoading}
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">Contraseña</label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="appearance-none rounded-b-md block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-[#3D520D] focus:border-[#3D520D] focus:z-10 sm:text-sm bg-gray-100"
                  placeholder="Contraseña"
                  value={formData.password}
                  onChange={handleChange}
                  disabled={isLoading}
                />
              </div>
            </div>
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-[#3D520D] focus:ring-[#3D520D] border-gray-300 rounded"
                  disabled={isLoading}
                />
                <label htmlFor="remember-me" className="ml-2 text-gray-900">
                  Recuérdame
                </label>
              </div>
              <div>
                <a href="#" className="font-medium text-[#3D520D] hover:text-green-700">
                  ¿Olvidaste tu contraseña?
                </a>
              </div>
            </div>
            <button
              type="submit"
              disabled={isLoading}
              className="w-full flex justify-center py-2 px-4 border border-transparent text-sm md:text-base font-medium rounded-full text-white bg-[#3D520D] hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#3D520D] disabled:opacity-50 disabled:cursor-not-allowed transition"
            >
              {isLoading ? (
                <svg
                  className="animate-spin h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
              ) : (
                'Inicia sesión'
              )}
            </button>
          </form>
          <p className="mt-4 md:mt-6 text-center text-sm text-gray-600">
            ¿No tienes cuenta?{' '}
            <Link to="/register" className="font-medium text-[#3D520D] hover:text-green-700">
              Crear cuenta
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
