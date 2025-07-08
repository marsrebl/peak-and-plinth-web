
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Logo } from './Logo';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }

      setLastScrollY(currentScrollY);
      setIsScrolled(currentScrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About Us' },
    { to: '/services', label: 'Services' },
    { to: '/projects', label: 'Projects' },
    { to: '/rentals', label: 'Rentals' },
    { to: '/contact', label: 'Contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 transform ${
      showNavbar ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
    } ${isScrolled ? 'bg-white/95 backdrop-blur-xl shadow-xl border-b border-blue-100' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <Logo className="h-8 lg:h-10 transition-transform group-hover:scale-105" />
            <div className="flex flex-col">
              <span className={`text-lg lg:text-xl font-bold transition-colors ${
                isScrolled ? 'text-slate-800' : 'text-white drop-shadow-lg'
              }`}>
                Real Estate Crafters
              </span>
              <span className={`text-xs lg:text-sm transition-colors ${
                isScrolled ? 'text-blue-600' : 'text-blue-200 drop-shadow-lg'
              }`}>
                International Pvt. Ltd.
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`text-sm font-medium transition-all duration-200 hover:text-blue-600 relative ${
                  location.pathname === link.to
                    ? (isScrolled ? 'text-blue-600 font-semibold' : 'text-blue-200 font-semibold')
                    : (isScrolled ? 'text-slate-700' : 'text-white drop-shadow-lg')
                } hover:scale-105`}
              >
                {link.label}
                {location.pathname === link.to && (
                  <span className={`absolute -bottom-1 left-0 w-full h-0.5 rounded-full ${
                    isScrolled ? 'bg-blue-600' : 'bg-blue-200'
                  }`}></span>
                )}
              </Link>
            ))}
            <Link to="/quote">
              <Button className="gradient-mixed text-white px-6 py-2 rounded-full font-medium transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl">
                Get Quote
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className={`w-6 h-6 ${isScrolled ? 'text-slate-800' : 'text-white drop-shadow-lg'}`} />
            ) : (
              <Menu className={`w-6 h-6 ${isScrolled ? 'text-slate-800' : 'text-white drop-shadow-lg'}`} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white/95 backdrop-blur-md rounded-lg mt-2 p-4 shadow-xl border border-blue-100">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`block py-3 text-sm font-medium transition-colors ${
                  location.pathname === link.to ? 'text-blue-600 font-semibold' : 'text-slate-700'
                } hover:text-blue-600`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link to="/quote" onClick={() => setIsMobileMenuOpen(false)}>
              <Button className="w-full mt-3 gradient-mixed text-white rounded-full hover:shadow-lg">
                Get Quote
              </Button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};
