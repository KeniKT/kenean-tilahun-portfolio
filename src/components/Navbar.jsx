import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="relative z-50 backdrop-blur-md">
      <div className="max-w-[1920px] mx-auto px-8 sm:px-12 lg:px-20 xl:px-32">
        <div className="flex items-center justify-between h-20">
          {/* Logo/Name */}
          <Link 
            to="/" 
            className="text-white text-xl font-semibold hover:text-red-400 transition-colors duration-300"
            style={{ fontFamily: "'Courier Prime', 'Courier New', monospace" }}
          >
            Kenean T.
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`text-sm font-medium transition-colors duration-300 ${
                  location.pathname === item.path
                    ? 'text-white'
                    : 'text-gray-300 hover:text-red-400'
                }`}
                style={{ fontFamily: "'Courier Prime', 'Courier New', monospace" }}
              >
                {item.name}
              </Link>
            ))}
            
            {/* Contact Button */}
            <Link
              to="/contact"
              className="px-6 py-2.5 rounded-full text-sm font-medium text-white transition-all duration-300 hover:scale-105 hover:shadow-lg bg-gradient-to-r from-red-900 to-red-800 hover:from-red-800 hover:to-red-700"
              style={{ fontFamily: "'Courier Prime', 'Courier New', monospace" }}
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden w-10 h-10 flex items-center justify-center text-white hover:text-red-400 transition-colors duration-300"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          isMenuOpen 
            ? 'max-h-96 opacity-100' 
            : 'max-h-0 opacity-0'
        }`}>
          <div className="py-4 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className={`block py-3 px-4 text-sm font-medium transition-colors duration-300 rounded-lg ${
                  location.pathname === item.path
                    ? 'text-white bg-red-950/30'
                    : 'text-gray-300 hover:text-red-400 hover:bg-red-950/20'
                }`}
                style={{ fontFamily: "'Courier Prime', 'Courier New', monospace" }}
              >
                {item.name}
              </Link>
            ))}
            
            <Link
              to="/contact"
              onClick={() => setIsMenuOpen(false)}
              className="block w-full px-6 py-3 rounded-full text-sm font-medium text-white text-center transition-all duration-300 bg-gradient-to-r from-red-900 to-red-800 hover:from-red-800 hover:to-red-700"
              style={{ fontFamily: "'Courier Prime', 'Courier New', monospace" }}
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;