import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Menu, X, ShoppingBag, User, MapPin } from 'lucide-react';
import { Button } from './ui/button';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Menu', path: '/menu', submenu: [
      { name: 'Coffee & Drinks', path: '/menu' },
      { name: 'Breakfast', path: '/breakfast' },
      { name: 'Dinner', path: '/dinner' }
    ]},
    { name: 'Rewards', path: '/rewards' },
    { name: 'Blog', path: '/blog' },
    { name: 'About', path: '/about' },
    { name: 'Locations', path: '/locations' }
  ];

  const handleNavClick = (path) => {
    navigate(path);
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 0);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg' 
          : 'bg-white/80 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <img 
              src="https://customer-assets.emergentagent.com/job_local-sip/artifacts/l6mm4os6_Happy-Logo-1920w.webp" 
              alt="Happy Place Coffee & Eats"
              className="h-14 w-auto transition-transform duration-300 group-hover:scale-105"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <button
                key={link.path}
                onClick={() => handleNavClick(link.path)}
                className="px-4 py-2 text-gray-700 hover:text-amber-700 font-medium transition-colors relative group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-600 group-hover:w-full transition-all duration-300"></span>
              </button>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-3">
            <Button
              variant="ghost"
              size="icon"
              className="hidden sm:flex text-gray-700 hover:text-amber-700 hover:bg-amber-50"
              onClick={() => handleNavClick('/locations')}
            >
              <MapPin className="h-5 w-5" />
            </Button>
            
            <Button
              variant="ghost"
              size="icon"
              className="hidden sm:flex text-gray-700 hover:text-amber-700 hover:bg-amber-50"
              onClick={() => handleNavClick('/rewards')}
            >
              <User className="h-5 w-5" />
            </Button>

            <Button
              className="hidden sm:flex bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => handleNavClick('/menu')}
            >
              <ShoppingBag className="h-5 w-5 mr-2" />
              Order Now
            </Button>

            {/* Mobile Menu Toggle */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden text-gray-700"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-xl">
          <div className="px-4 py-6 space-y-3">
            {navLinks.map((link) => (
              <button
                key={link.path}
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  handleNavClick(link.path);
                }}
                className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-amber-50 hover:text-amber-700 rounded-lg font-medium transition-colors"
              >
                {link.name}
              </button>
            ))}
            <Button
              className="w-full bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white shadow-lg"
              onClick={() => {
                setIsMobileMenuOpen(false);
                handleNavClick('/menu');
              }}
            >
              <ShoppingBag className="h-5 w-5 mr-2" />
              Order Now
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
