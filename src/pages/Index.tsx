
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Award, Users, Calendar, CheckCircle, Sparkles } from 'lucide-react';

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
      <section className="relative h-screen bg-gradient-to-br from-green-900 via-green-800 to-emerald-900 overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-green-400/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-gold-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-green-300/5 rounded-full blur-3xl"></div>
        </div>
        
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-15"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=1920&h=1080&fit=crop')`
          }}
        ></div>
        
        <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
          <div className="max-w-4xl animate-fade-in">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex items-center gap-2 bg-gold-500/20 backdrop-blur-sm px-4 py-2 rounded-full border border-gold-400/30">
                <Sparkles className="w-4 h-4 text-gold-300" />
                <span className="text-gold-200 text-sm font-medium">Premium Real Estate Solutions</span>
              </div>
            </div>
            
            <h1 className="text-5xl lg:text-8xl font-bold text-white mb-8 leading-tight">
              Building Dreams,
              <span className="text-transparent bg-gradient-to-r from-gold-400 via-gold-300 to-gold-500 bg-clip-text block">
                Crafting Excellence
              </span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-green-100 mb-10 leading-relaxed max-w-3xl">
              Your trusted partner in construction, house rentals, renovations, 
              and engineering services. We turn visions into reality with precision and care.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6">
              <Link to="/quote">
                <Button className="group bg-gradient-to-r from-gold-600 to-gold-500 hover:from-gold-700 hover:to-gold-600 text-white px-10 py-6 text-lg rounded-2xl transition-all duration-300 hover:scale-105 shadow-2xl hover:shadow-gold-500/25 border border-gold-400/20">
                  Get Free Quote
                  <ArrowRight className="ml-3 group-hover:translate-x-1 transition-transform" size={20} />
                </Button>
              </Link>
              
              <Link to="/projects">
                <Button className="group bg-white/10 backdrop-blur-md hover:bg-white/20 border-2 border-white/30 hover:border-white/50 text-white px-10 py-6 text-lg rounded-2xl transition-all duration-300 hover:scale-105 shadow-2xl hover:shadow-white/10">
                  <span className="flex items-center gap-3">
                    View Projects
                    <div className="w-2 h-2 bg-green-300 rounded-full animate-pulse"></div>
                  </span>
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Enhanced scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-12 border-2 border-white/40 rounded-full flex justify-center relative">
            <div className="w-1 h-4 bg-gradient-to-b from-gold-300 to-transparent rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-gradient-to-b from-white to-green-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="bg-gradient-to-br from-gold-100 to-gold-50 w-20 h-20 mx-auto rounded-2xl flex items-center justify-center mb-6 group-hover:from-gold-200 group-hover:to-gold-100 transition-all duration-300 shadow-lg group-hover:shadow-xl group-hover:scale-110">
                  <stat.icon className="text-gold-600" size={28} />
                </div>
                <div className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-green-700 to-green-600 bg-clip-text text-transparent mb-3">{stat.value}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-gradient-to-b from-green-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-green-100 px-4 py-2 rounded-full mb-6">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-green-700 font-medium">Our Services</span>
            </div>
            <h2 className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-green-800 to-green-600 bg-clip-text text-transparent mb-6">
              Excellence in Every Service
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We offer comprehensive solutions for all your real estate and construction needs with unmatched quality and professionalism
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border-0 overflow-hidden bg-white/80 backdrop-blur-sm">
                <div className="aspect-square overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10"></div>
                  <img
                    src={`https://images.unsplash.com/${service.image}?w=400&h=400&fit=crop`}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute bottom-4 left-4 z-20">
                    <div className="w-12 h-12 bg-gold-500 rounded-full flex items-center justify-center">
                      <ArrowRight className="text-white" size={20} />
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold text-green-800 mb-3">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link to="/services">
              <Button className="bg-gradient-to-r from-green-700 to-green-600 hover:from-green-800 hover:to-green-700 text-white px-10 py-4 rounded-2xl transition-all duration-300 hover:scale-105 shadow-xl">
                View All Services
                <ArrowRight className="ml-3" size={18} />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-green-800 via-green-700 to-emerald-800 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(34,197,94,0.3),transparent)] "></div>
          <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_80%,rgba(251,191,36,0.2),transparent)]"></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
            Ready to Start Your
            <span className="text-transparent bg-gradient-to-r from-gold-400 to-gold-300 bg-clip-text block">
              Dream Project?
            </span>
          </h2>
          <p className="text-xl text-green-100 mb-12 max-w-3xl mx-auto leading-relaxed">
            Let's discuss your vision and create something extraordinary together. Our team is ready to bring your dreams to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link to="/contact">
              <Button className="bg-gradient-to-r from-gold-600 to-gold-500 hover:from-gold-700 hover:to-gold-600 text-white px-10 py-6 text-lg rounded-2xl transition-all duration-300 hover:scale-105 shadow-2xl">
                Contact Us Today
              </Button>
            </Link>
            <Link to="/quote">
              <Button className="bg-white/10 backdrop-blur-md hover:bg-white/20 border-2 border-white/30 hover:border-white/50 text-white px-10 py-6 text-lg rounded-2xl transition-all duration-300 hover:scale-105">
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
