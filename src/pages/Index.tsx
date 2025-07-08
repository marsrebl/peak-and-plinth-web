
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Award, Users, Calendar, CheckCircle, Sparkles, Building, Home, Wrench, Calculator } from 'lucide-react';

const Index = () => {
  const services = [
    {
      title: 'Construction',
      description: 'Premium construction services with modern techniques and quality materials.',
      image: '/images/construction.jpg',
      icon: Building
    },
    {
      title: 'House Rentals',
      description: 'Find your perfect home with our curated rental properties.',
      image: '/images/house-rental.jpg',
      icon: Home
    },
    {
      title: 'Renovations',
      description: 'Transform your space with our expert renovation services.',
      image: '/images/renovation.jpg',
      icon: Wrench
    },
    {
      title: 'Engineering',
      description: 'Professional engineering solutions for all your construction needs.',
      image: '/images/engineering.jpg',
      icon: Calculator
    }
  ];

  const stats = [
    { icon: Award, value: '500+', label: 'Projects Completed' },
    { icon: Users, value: '250+', label: 'Happy Clients' },
    { icon: Calendar, value: '15+', label: 'Years Experience' },
    { icon: CheckCircle, value: '100%', label: 'Success Rate' }
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#9EB3C2' }}>
      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden" style={{ backgroundColor: '#9EB3C2' }}>
        {/* Decorative Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-green-200/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-green-300/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-green-100/20 rounded-full blur-3xl"></div>
        </div>
        
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage: `url('/images/tree-branches.jpg')`
          }}
        ></div>
        
        <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
          <div className="max-w-4xl animate-fade-in">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex items-center gap-2 px-4 py-2 rounded-full border-2 border-green-500" style={{ backgroundColor: '#E2E8CE' }}>
                <Sparkles className="w-4 h-4 text-green-600" />
                <span className="text-green-700 text-sm font-medium">Premium Real Estate Solutions</span>
              </div>
            </div>
            
            <h1 className="text-5xl lg:text-8xl font-bold text-gray-900 mb-8 leading-tight">
              Your Dreams,
              <span className="text-transparent bg-gradient-to-r from-green-600 via-green-700 to-green-800 bg-clip-text block">
               Our Builds
              </span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-gray-800 mb-10 leading-relaxed max-w-3xl">
              Your trusted partner in construction, house rentals, renovations, 
              and engineering services. We turn visions into reality with precision and care.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6">
              <Link to="/quote">
                <Button className="group bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-10 py-6 text-lg rounded-2xl transition-all duration-300 hover:scale-105 shadow-2xl hover:shadow-green-500/25 border border-green-400/20">
                  Get Free Quote
                  <ArrowRight className="ml-3 group-hover:translate-x-1 transition-transform" size={20} />
                </Button>
              </Link>
              
              <Link to="/projects">
                <Button className="group relative overflow-hidden border-2 border-green-500 text-green-800 hover:text-green-900 px-10 py-6 text-lg rounded-2xl transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-green-200/50" style={{ backgroundColor: '#E2E8CE' }}>
                  <div className="absolute inset-0 bg-gradient-to-r from-green-100/20 to-green-200/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="relative flex items-center gap-3 font-semibold">
                    View Projects
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  </span>
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-12 border-2 border-green-500 rounded-full flex justify-center relative">
            <div className="w-1 h-4 bg-gradient-to-b from-green-500 to-transparent rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24" style={{ backgroundColor: '#E2E8CE' }}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="bg-gradient-to-br from-green-100 to-green-200 w-20 h-20 mx-auto rounded-2xl flex items-center justify-center mb-6 group-hover:from-green-200 group-hover:to-green-300 transition-all duration-300 shadow-lg group-hover:shadow-xl group-hover:scale-110">
                  <stat.icon className="text-green-600" size={28} />
                </div>
                <div className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-green-700 to-green-600 bg-clip-text text-transparent mb-3">{stat.value}</div>
                <div className="text-gray-700 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24" style={{ backgroundColor: '#9EB3C2' }}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 border-2 border-green-500" style={{ backgroundColor: '#E2E8CE' }}>
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-green-700 font-medium">Our Services</span>
            </div>
            <h2 className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-6">
              Excellence in Every Service
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              We offer comprehensive solutions for all your real estate and construction needs with unmatched quality and professionalism
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border-0 overflow-hidden backdrop-blur-sm" style={{ backgroundColor: '#E2E8CE' }}>
                <div className="aspect-square overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10"></div>
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    onError={(e) => {
                      e.currentTarget.src = `https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=400&h=400&fit=crop`;
                    }}
                  />
                  <div className="absolute bottom-4 left-4 z-20">
                    <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center shadow-lg">
                      <service.icon className="text-white" size={20} />
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link to="/services">
              <Button className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-10 py-4 rounded-2xl transition-all duration-300 hover:scale-105 shadow-xl">
                View All Services
                <ArrowRight className="ml-3" size={18} />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-green-600 via-green-700 to-green-800 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.1),transparent)]"></div>
          <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.05),transparent)]"></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
            Ready to Start Your
            <span className="text-green-100 block">
              Dream Project?
            </span>
          </h2>
          <p className="text-xl text-green-50 mb-12 max-w-3xl mx-auto leading-relaxed">
            Let's discuss your vision and create something extraordinary together. Our team is ready to bring your dreams to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link to="/contact">
              <Button className="text-green-600 hover:bg-green-50 px-10 py-6 text-lg rounded-2xl transition-all duration-300 hover:scale-105 shadow-2xl font-semibold" style={{ backgroundColor: '#E2E8CE' }}>
                Contact Us Today
              </Button>
            </Link>
            <Link to="/quote">
              <Button className="bg-green-500/20 backdrop-blur-md hover:bg-green-500/30 border-2 border-white/30 hover:border-white/50 text-white px-10 py-6 text-lg rounded-2xl transition-all duration-300 hover:scale-105">
                Get Free Quote
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
