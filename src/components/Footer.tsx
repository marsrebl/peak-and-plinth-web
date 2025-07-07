
import React from 'react';
import { Link } from 'react-router-dom';
import { Logo } from './Logo';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-navy-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <Logo className="h-8" />
              <div>
                <div className="text-lg font-bold">Real Estate Crafters</div>
                <div className="text-sm text-gold-300">International Pvt. Ltd.</div>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Building dreams, crafting excellence. Your trusted partner in construction, 
              rentals, renovations, and engineering services.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-gold-400 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-gold-400 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-gold-400 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-gold-400 transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-gold-300">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link to="/" className="text-gray-300 hover:text-gold-300 transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-gold-300 transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-gold-300 transition-colors">Services</Link></li>
              <li><Link to="/projects" className="text-gray-300 hover:text-gold-300 transition-colors">Projects</Link></li>
              <li><Link to="/rentals" className="text-gray-300 hover:text-gold-300 transition-colors">Rentals</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-gold-300">Services</h3>
            <ul className="space-y-3">
              <li className="text-gray-300">Construction</li>
              <li className="text-gray-300">House Rentals</li>
              <li className="text-gray-300">Renovations</li>
              <li className="text-gray-300">Engineering</li>
              <li className="text-gray-300">Project Management</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-gold-300">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="text-gold-400 mt-1 flex-shrink-0" size={16} />
                <div className="text-gray-300">
                  123 Business District<br />
                  Construction Plaza<br />
                  City, State 12345
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="text-gold-400 flex-shrink-0" size={16} />
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="text-gold-400 flex-shrink-0" size={16} />
                <span className="text-gray-300">info@realestatecrafter.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Real Estate Crafters International Pvt. Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
