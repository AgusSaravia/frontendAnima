import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const LogoutButton = ({ className = '' }) => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <button
      onClick={handleLogout}
      className={`px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-900 ${className}`}
    >
      Sign out
    </button>
  );
};

export default LogoutButton;
