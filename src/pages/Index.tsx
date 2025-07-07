
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Award, Users, Calendar, CheckCircle } from 'lucide-react';

const Index = () => {
  const services = [
    {
      title: 'Construction',
      description: 'Premium construction services with modern techniques and quality materials.',
      image: 'photo-1487958449943-2429e8be8625'
    },
    {
      title: 'House Rentals',
      description: 'Find your perfect home with our curated rental properties.',
      image: 'photo-1518005020951-eccb494ad742'
    },
    {
      title: 'Renovations',
      description: 'Transform your space with our expert renovation services.',
      image: 'photo-1433832597046-4f10e10ac764'
    },
    {
      title: 'Engineering',
      description: 'Professional engineering solutions for all your construction needs.',
      image: 'photo-1493397212122-2b85dda8106b'
    }
  ];

  const stats = [
    { icon: Award, value: '500+', label: 'Projects Completed' },
    { icon: Users, value: '250+', label: 'Happy Clients' },
    { icon: Calendar, value: '15+', label: 'Years Experience' },
    { icon: CheckCircle, value: '100%', label: 'Success Rate' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen bg-gradient-to-br from-navy-900 via-navy-800 to-navy-700 overflow-hidden">
        <div className="absolute inset-0 bg-black/30"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=1920&h=1080&fit=crop')`
          }}
        ></div>
        
        <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
          <div className="max-w-3xl animate-fade-in">
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Building Dreams,
              <span className="text-gold-400 block">Crafting Excellence</span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-200 mb-8 leading-relaxed">
              Your trusted partner in construction, house rentals, renovations, 
              and engineering services. We turn visions into reality.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/quote">
                <Button className="bg-gold-600 hover:bg-gold-700 text-white px-8 py-4 text-lg rounded-full transition-all duration-300 hover:scale-105 shadow-xl">
                  Get Free Quote
                  <ArrowRight className="ml-2" size={20} />
                </Button>
              </Link>
              <Link to="/projects">
                <Button variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-navy-800 px-8 py-4 text-lg rounded-full transition-all duration-300 hover:scale-105">
                  View Projects
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Animated scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="bg-gold-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4 group-hover:bg-gold-200 transition-colors">
                  <stat.icon className="text-gold-600" size={24} />
                </div>
                <div className="text-3xl lg:text-4xl font-bold text-navy-800 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-navy-800 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer comprehensive solutions for all your real estate and construction needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0 overflow-hidden">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={`https://images.unsplash.com/${service.image}?w=400&h=400&fit=crop`}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-navy-800 mb-3">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/services">
              <Button className="bg-navy-800 hover:bg-navy-900 text-white px-8 py-3 rounded-full transition-all duration-300 hover:scale-105">
                View All Services
                <ArrowRight className="ml-2" size={18} />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-navy-800 to-navy-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Let's discuss your vision and create something extraordinary together
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button className="bg-gold-600 hover:bg-gold-700 text-white px-8 py-4 text-lg rounded-full transition-all duration-300 hover:scale-105">
                Contact Us
              </Button>
            </Link>
            <Link to="/quote">
              <Button variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-navy-800 px-8 py-4 text-lg rounded-full transition-all duration-300 hover:scale-105">
                Get Quote
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
