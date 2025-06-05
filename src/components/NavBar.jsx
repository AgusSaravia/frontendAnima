{/** Imports **/}
import { Link } from 'react-router-dom';
// import logoImg from '../assets/suby-logo.png';

{/** Component Definition **/}
export default function NavBar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/** Logo and Name **/}
        <Link to="/" className="flex items-center">
          <img src={"#"} alt="Suby!" className="h-8 w-auto" />
          <span className="ml-2 text-2xl font-bold text-[#3D520D]">Suby!</span>
        </Link>

        {/** Menu Links **/}
        <ul className="hidden md:flex space-x-6 text-gray-700 font-medium">
          <li>
            <Link to="/vigentes" className="hover:text-[#3D520D]">
              VIGENTES
            </Link>
          </li>
          <li>
            <Link to="/comprar" className="hover:text-[#3D520D]">
              Comprar
            </Link>
          </li>
          <li>
            <Link to="/vender" className="hover:text-[#3D520D]">
              Vender
            </Link>
          </li>
          <li>
            <Link to="/faq" className="hover:text-[#3D520D]">
              Preguntas Frecuentes
            </Link>
          </li>
          <li>
            <Link to="/sobre" className="hover:text-[#3D520D]">
              Sobre Nosotros
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-[#3D520D]">
              Contact Us
            </Link>
          </li>
        </ul>

        {/** Login Button **/}
        <div className="flex items-center space-x-4">
          <Link
            to="/login"
            className="px-4 py-2 bg-[#3D520D] text-white rounded-full hover:bg-opacity-90 transition"
          >
            Login
          </Link>
        </div>

        {/** Mobile Menu Button **/}
        <button className="md:hidden focus:outline-none">
          <svg
            className="w-6 h-6 text-gray-700"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </nav>
  );
}
