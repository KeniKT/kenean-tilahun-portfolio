import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'HOME', path: '/' },
    { name: 'ABOUT', path: '/about' },
    { name: 'SKILLS', path: '/skills' },
    { name: 'EXPERIENCE', path: '/experience' },
    { name: 'PROJECTS', path: '/projects' },
    { name: 'CONTACT', path: '/contact' },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-slate-900 text-white py-4 px-6 relative z-50 flex-shrink-0 shadow-lg border-b border-slate-800/50 backdrop-blur-sm" style={{ minHeight: 'auto' }}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-3 flex-shrink-0 group">
          <div className="w-12 h-12 bg-gradient-to-r from-red-900 to-red-800 flex items-center justify-center rounded-lg flex-shrink-0 shadow-lg transform transition-all duration-300 group-hover:scale-105 group-hover:shadow-red-900/50 group-hover:shadow-xl">
            <span className="text-white font-bold text-xl transition-transform duration-300 group-hover:scale-110">KT</span>
          </div>
          <span className="text-xl font-bold whitespace-nowrap transition-colors duration-300 group-hover:text-red-300">KENEAN TILAHUN</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-2 flex-shrink-0">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 whitespace-nowrap rounded-lg group overflow-hidden ${
                location.pathname === item.path
                  ? 'text-red-400 bg-red-900/20 shadow-inner'
                  : 'text-white hover:text-red-300 hover:bg-slate-800/50'
              }`}
            >
              {/* Background hover effect */}
              <span className="absolute inset-0 bg-gradient-to-r from-red-900/10 to-red-800/10 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              
              {/* Active indicator */}
              {location.pathname === item.path && (
                <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-6 h-0.5 bg-gradient-to-r from-red-400 to-red-500 rounded-full"></span>
              )}
              
              {/* Text */}
              <span className="relative z-10">{item.name}</span>
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden w-12 h-12 bg-gradient-to-r from-red-900 to-red-800 flex items-center justify-center rounded-lg flex-shrink-0 shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-red-900/50 hover:shadow-xl active:scale-95"
        >
          <div className="relative w-6 h-6">
            <Menu 
              className={`w-6 h-6 text-white absolute inset-0 transition-all duration-300 ${
                isMenuOpen ? 'opacity-0 rotate-180 scale-50' : 'opacity-100 rotate-0 scale-100'
              }`} 
            />
            <X 
              className={`w-6 h-6 text-white absolute inset-0 transition-all duration-300 ${
                isMenuOpen ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 rotate-180 scale-50'
              }`} 
            />
          </div>
        </button>

        {/* Mobile Menu */}
        <div className={`absolute top-full left-0 right-0 bg-slate-800/95 md:hidden z-50 border-t border-slate-700/50 backdrop-blur-sm shadow-2xl transition-all duration-300 ${
          isMenuOpen 
            ? 'opacity-100 translate-y-0 visible' 
            : 'opacity-0 -translate-y-4 invisible'
        }`}>
          <div className="py-4 px-6">
            {navItems.map((item, index) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className={`block py-3 px-4 text-sm font-medium transition-all duration-300 rounded-lg mb-1 last:mb-0 transform ${
                  location.pathname === item.path
                    ? 'text-red-400 bg-red-900/20 shadow-inner translate-x-2'
                    : 'text-white hover:text-red-300 hover:bg-slate-700/50 hover:translate-x-2'
                } ${isMenuOpen ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'}`}
                style={{
                  transitionDelay: isMenuOpen ? `${index * 50}ms` : '0ms'
                }}
              >
                <span className="flex items-center">
                  {location.pathname === item.path && (
                    <span className="w-2 h-2 bg-red-400 rounded-full mr-3 animate-pulse"></span>
                  )}
                  {item.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile menu backdrop */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/20 backdrop-blur-sm md:hidden z-40 transition-opacity duration-300"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </nav>
  );
};

export default Navbar;

