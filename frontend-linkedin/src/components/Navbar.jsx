


import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/auth';
import { LogOut, User, Home, LogIn, UserPlus, Menu, X } from 'lucide-react';

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="bg-white/30 backdrop-blur-md border-b border-white/20 shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500"
        >
          MiniLinkedIn
        </Link>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={toggleMenu}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-4 text-sm sm:text-base font-medium">
          <Link
            to="/"
            className="flex items-center gap-1 px-4 py-2 rounded-lg text-gray-700 hover:text-white hover:bg-gradient-to-r from-blue-500 to-purple-500 transition"
          >
            <Home size={18} />
            Home
          </Link>

          {user ? (
            <>
              <Link
                to={`/profile/${user._id}`}
                className="flex items-center gap-1 px-4 py-2 rounded-lg text-gray-700 hover:text-white hover:bg-gradient-to-r from-blue-500 to-purple-500 transition"
              >
                <User size={18} />
                Profile
              </Link>
              <button
                onClick={() => {
                  logout(navigate);
                  closeMenu();
                }}
                className="flex items-center gap-1 px-4 py-2 rounded-lg text-red-600 border border-red-300 hover:bg-red-600 hover:text-white transition"
              >
                <LogOut size={18} />
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="flex items-center gap-1 px-4 py-2 rounded-lg text-blue-600 border border-blue-300 hover:bg-blue-600 hover:text-white transition"
              >
                <LogIn size={18} />
                Login
              </Link>
              <Link
                to="/register"
                className="flex items-center gap-1 px-4 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 transition"
              >
                <UserPlus size={18} />
                Register
              </Link>
            </>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-6 pb-4 space-y-2">
          <Link
            to="/"
            onClick={closeMenu}
            className="block px-4 py-2 rounded-lg text-gray-700 hover:text-white hover:bg-gradient-to-r from-blue-500 to-purple-500 transition"
          >
            <Home size={18} className="inline mr-2" />
            Home
          </Link>

          {user ? (
            <>
              <Link
                to={`/profile/${user._id}`}
                onClick={closeMenu}
                className="block px-4 py-2 rounded-lg text-gray-700 hover:text-white hover:bg-gradient-to-r from-blue-500 to-purple-500 transition"
              >
                <User size={18} className="inline mr-2" />
                Profile
              </Link>

              <button
                onClick={() => {
                  logout(navigate);
                  closeMenu();
                }}
                className="w-full text-left px-4 py-2 rounded-lg text-red-600 border border-red-300 hover:bg-red-600 hover:text-white transition"
              >
                <LogOut size={18} className="inline mr-2" />
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                onClick={closeMenu}
                className="block px-4 py-2 rounded-lg text-blue-600 border border-blue-300 hover:bg-blue-600 hover:text-white transition"
              >
                <LogIn size={18} className="inline mr-2" />
                Login
              </Link>

              <Link
                to="/register"
                onClick={closeMenu}
                className="block px-4 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 transition"
              >
                <UserPlus size={18} className="inline mr-2" />
                Register
              </Link>
            </>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
