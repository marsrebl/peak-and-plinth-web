import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
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
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 transform shadow-md ${
        showNavbar ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
      } ${
        isScrolled || location.pathname !== '/'
          ? 'bg-[conic-gradient(at_top_left,_#059669,_#10b981,_#047857)] animate-gradient-x backdrop-blur-md border-b border-emerald-700'
          : 'bg-transparent'
      }`}
      style={{ height: '80px' }} // increased header height
    >
      <style>
        {`
          @keyframes gradient-x {
            0%, 100% {
              background-position: left;
            }
            50% {
              background-position: right;
            }
          }
          .animate-gradient-x {
            background-size: 400% 400%;
            animation: gradient-x 10s ease infinite;
          }
        `}
      </style>

      <div className="container mx-auto px-6 h-full flex items-center">
        <div className="flex items-center justify-between w-full">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-4 group">
            <img
              src="/images/logo.png"
              alt="Real Estate Crafters Logo"
              className="h-48 w-auto transition-transform group-hover:scale-110" // bigger logo height (24 = 6rem)
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-10">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`relative text-sm font-semibold uppercase tracking-wide transition-all duration-300 px-2 py-1 ${
                  location.pathname === link.to
                    ? 'text-white border-b-2 border-white'
                    : 'text-white hover:text-emerald-100'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link to="/quote">
              <Button className="bg-white text-emerald-700 hover:bg-emerald-100 px-6 py-2 rounded-full font-medium shadow-md transition duration-300">
                Get Quote
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-2 rounded-md border border-transparent hover:border-emerald-300 transition"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className={`w-6 h-6 ${isScrolled || location.pathname !== '/' ? 'text-white' : 'text-white'}`} />
            ) : (
              <Menu className={`w-6 h-6 ${isScrolled || location.pathname !== '/' ? 'text-white' : 'text-white'}`} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-gradient-to-br from-emerald-600 via-green-600 to-emerald-700 rounded-lg mt-3 p-4 shadow-xl border border-emerald-200">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`block py-2 px-3 text-sm font-semibold rounded-md transition-colors ${
                location.pathname === link.to ? 'text-white bg-emerald-700' : 'text-white hover:bg-emerald-800'
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link to="/quote" onClick={() => setIsMobileMenuOpen(false)}>
            <Button className="w-full mt-4 bg-white text-emerald-700 hover:bg-emerald-100 py-2 rounded-full">
              Get Quote
            </Button>
          </Link>
        </div>
      )}
    </nav>
  );
};
