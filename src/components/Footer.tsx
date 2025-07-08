
import React from 'react';
import { Link } from 'react-router-dom';
import { Logo } from './Logo';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_25%_25%,rgba(59,130,246,0.3),transparent)]"></div>
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_75%_75%,rgba(249,115,22,0.2),transparent)]"></div>
      </div>
      
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <Logo className="h-8" />
              <div>
                <div className="text-lg font-bold text-white">Real Estate Crafters</div>
                <div className="text-sm text-blue-300">International Pvt. Ltd.</div>
              </div>
            </div>
            <p className="text-slate-300 mb-6 leading-relaxed">
              Building tomorrow's world today. Your trusted partner in construction, 
              rentals, renovations, and engineering excellence.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors duration-300 p-2 rounded-lg hover:bg-slate-700">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors duration-300 p-2 rounded-lg hover:bg-slate-700">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-slate-400 hover:text-orange-400 transition-colors duration-300 p-2 rounded-lg hover:bg-slate-700">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors duration-300 p-2 rounded-lg hover:bg-slate-700">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-blue-300 relative">
              Quick Links
              <div className="absolute bottom-0 left-0 w-8 h-0.5 bg-blue-400 rounded-full"></div>
            </h3>
            <ul className="space-y-3">
              <li><Link to="/" className="text-slate-300 hover:text-blue-300 transition-colors duration-300 hover:translate-x-1 transform inline-block">Home</Link></li>
              <li><Link to="/about" className="text-slate-300 hover:text-blue-300 transition-colors duration-300 hover:translate-x-1 transform inline-block">About Us</Link></li>
              <li><Link to="/services" className="text-slate-300 hover:text-blue-300 transition-colors duration-300 hover:translate-x-1 transform inline-block">Services</Link></li>
              <li><Link to="/projects" className="text-slate-300 hover:text-blue-300 transition-colors duration-300 hover:translate-x-1 transform inline-block">Projects</Link></li>
              <li><Link to="/rentals" className="text-slate-300 hover:text-blue-300 transition-colors duration-300 hover:translate-x-1 transform inline-block">Rentals</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-orange-300 relative">
              Services
              <div className="absolute bottom-0 left-0 w-8 h-0.5 bg-orange-400 rounded-full"></div>
            </h3>
            <ul className="space-y-3">
              <li className="text-slate-300 flex items-center">
                <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                Premium Construction
              </li>
              <li className="text-slate-300 flex items-center">
                <div className="w-2 h-2 bg-orange-400 rounded-full mr-3"></div>
                Luxury Rentals
              </li>
              <li className="text-slate-300 flex items-center">
                <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                Expert Renovations
              </li>
              <li className="text-slate-300 flex items-center">
                <div className="w-2 h-2 bg-teal-400 rounded-full mr-3"></div>
                Smart Engineering
              </li>
              <li className="text-slate-300 flex items-center">
                <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                Project Management
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-blue-300 relative">
              Contact Info
              <div className="absolute bottom-0 left-0 w-8 h-0.5 bg-blue-400 rounded-full"></div>
            </h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3 group">
                <div className="bg-slate-700 p-2 rounded-lg group-hover:bg-blue-600 transition-colors duration-300">
                  <MapPin className="text-blue-400 group-hover:text-white" size={16} />
                </div>
                <div className="text-slate-300">
                  123 Business District<br />
                  Innovation Plaza<br />
                  City, State 12345
                </div>
              </div>
              <div className="flex items-center space-x-3 group">
                <div className="bg-slate-700 p-2 rounded-lg group-hover:bg-orange-600 transition-colors duration-300">
                  <Phone className="text-orange-400 group-hover:text-white" size={16} />
                </div>
                <span className="text-slate-300">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3 group">
                <div className="bg-slate-700 p-2 rounded-lg group-hover:bg-blue-600 transition-colors duration-300">
                  <Mail className="text-blue-400 group-hover:text-white" size={16} />
                </div>
                <span className="text-slate-300">info@realestatecrafter.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-12 pt-8 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-slate-400">
              © 2024 Real Estate Crafters International Pvt. Ltd. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors duration-300">Privacy Policy</a>
              <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors duration-300">Terms of Service</a>
              <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors duration-300">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
