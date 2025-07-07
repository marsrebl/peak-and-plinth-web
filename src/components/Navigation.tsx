
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Logo } from './Logo';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About Us' },
    { to: '/services', label: 'Services' },
    { to: '/projects', label: 'Projects' },
    { to: '/rentals', label: 'Rentals' },
    { to: '/contact', label: 'Contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <Logo className="h-8 lg:h-10 transition-transform group-hover:scale-105" />
            <div className="flex flex-col">
              <span className={`text-lg lg:text-xl font-bold transition-colors ${
                isScrolled ? 'text-navy-800' : 'text-white'
              }`}>
                Real Estate Crafters
              </span>
              <span className={`text-xs lg:text-sm transition-colors ${
                isScrolled ? 'text-gold-600' : 'text-gold-300'
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
                className={`text-sm font-medium transition-all duration-200 hover:text-gold-500 ${
                  location.pathname === link.to
                    ? isScrolled ? 'text-gold-600' : 'text-gold-300'
                    : isScrolled ? 'text-navy-700' : 'text-white'
                } hover:scale-105`}
              >
                {link.label}
              </Link>
            ))}
            <Link to="/quote">
              <Button className="bg-gold-600 hover:bg-gold-700 text-white px-6 py-2 rounded-full font-medium transition-all duration-200 hover:scale-105 shadow-lg">
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
              <X className={`w-6 h-6 ${isScrolled ? 'text-navy-800' : 'text-white'}`} />
            ) : (
              <Menu className={`w-6 h-6 ${isScrolled ? 'text-navy-800' : 'text-white'}`} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white/95 backdrop-blur-md rounded-lg mt-2 p-4 shadow-xl">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`block py-3 text-sm font-medium transition-colors ${
                  location.pathname === link.to ? 'text-gold-600' : 'text-navy-700'
                } hover:text-gold-500`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link to="/quote" onClick={() => setIsMobileMenuOpen(false)}>
              <Button className="w-full mt-3 bg-gold-600 hover:bg-gold-700 text-white rounded-full">
                Get Quote
              </Button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};
