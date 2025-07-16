import { useState, useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AuthContext } from '../context/Auth'; // Import AuthContext
import Logo from '../assets/logo.png';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { user, logoutUser } = useContext(AuthContext); // Get user and logout function from AuthContext

  const isActive = (path) => {
    return location.pathname === path ? "text-blue-600 md:border-b-2 md:border-blue-600" : "text-gray-900";
  };

  return (
    <nav className="sticky top-0 bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex items-center h-full">
            <Link to="/">
              <img src={Logo} alt="Logo" className="h-19 w-auto" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className={`hover:text-blue-600 ${isActive('/')}`}>Home</Link>
            <Link to="/tours" className={`hover:text-blue-600 ${isActive('/tours')}`}>Tours</Link>
            <Link to="/about" className={`hover:text-blue-600 ${isActive('/about')}`}>About</Link>
            <Link to="/contact" className={`hover:text-blue-600 ${isActive('/contact')}`}>Contact</Link>

            {user ? (
              <button 
                onClick={logoutUser} 
                className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-500 transition-colors"
              >
                Logout
              </button>
            ) : (
              <>
                <Link to="/login" className="px-4 py-2 hover:text-blue-600">Login</Link>
                <Link to="/signup" className="px-4 py-2 bg-blue-900 text-white rounded-lg hover:bg-blue-600 transition-colors">
                  Sign Up
                </Link>
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-900 hover:text-blue-900"
            >
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden bg-white`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link to="/" className={`block px-3 py-2 hover:text-blue-600 ${isActive('/')}`}>Home</Link>
          <Link to="/tours" className={`block px-3 py-2 hover:text-blue-600 ${isActive('/tours')}`}>Tours</Link>
          <Link to="/about" className={`block px-3 py-2 hover:text-blue-600 ${isActive('/about')}`}>About</Link>
          <Link to="/contact" className={`block px-3 py-2 hover:text-blue-600 ${isActive('/contact')}`}>Contact</Link>
          <hr />
          {user ? (
            <button 
              onClick={logoutUser} 
              className="block w-full text-center px-3 py-2 bg-red-600 text-white rounded-lg hover:bg-red-500 transition-colors"
            >
              Logout
            </button>
          ) : (
            <>
              <Link to="/login" className="block w-full text-center px-3 py-2 hover:text-blue-600">Login</Link>
              <div className="flex justify-center px-2">
                <Link to="/signup" className="block w-full max-w-xs px-3 py-2 bg-blue-900 text-white rounded-lg text-center hover:bg-blue-600 transition-colors">
                  Sign Up
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
