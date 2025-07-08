
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Award, Users, Calendar, CheckCircle, Star, Building, Home, Wrench, Calculator, Zap, Shield } from 'lucide-react';

const Index = () => {
  const services = [
    {
      title: 'Premium Construction',
      description: 'State-of-the-art construction services with innovative techniques and premium materials.',
      image: '/images/construction.jpg',
      icon: Building,
      color: 'from-blue-500 to-blue-600'
    },
    {
      title: 'Luxury Rentals',
      description: 'Discover exceptional rental properties in prime locations with premium amenities.',
      image: '/images/house-rental.jpg',
      icon: Home,
      color: 'from-orange-500 to-orange-600'
    },
    {
      title: 'Expert Renovations',
      description: 'Transform your space with our award-winning renovation and interior design services.',
      image: '/images/renovation.jpg',
      icon: Wrench,
      color: 'from-purple-500 to-purple-600'
    },
    {
      title: 'Smart Engineering',
      description: 'Cutting-edge engineering solutions powered by the latest technology and innovation.',
      image: '/images/engineering.jpg',
      icon: Calculator,
      color: 'from-teal-500 to-teal-600'
    }
  ];

  const stats = [
    { icon: Award, value: '500+', label: 'Awards Won', color: 'text-blue-600' },
    { icon: Users, value: '1000+', label: 'Happy Clients', color: 'text-orange-600' },
    { icon: Calendar, value: '15+', label: 'Years Excellence', color: 'text-purple-600' },
    { icon: CheckCircle, value: '100%', label: 'Success Rate', color: 'text-teal-600' }
  ];

  const features = [
    { icon: Zap, title: 'Lightning Fast', description: 'Quick turnaround times without compromising quality' },
    { icon: Shield, title: 'Quality Assured', description: 'Rigorous quality control and lifetime warranties' },
    { icon: Star, title: 'Premium Service', description: '24/7 support and dedicated project managers' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 gradient-mixed opacity-90"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/5 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-5xl mx-auto animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full border border-white/30 mb-8">
              <Star className="w-5 h-5 text-white" />
              <span className="text-white font-medium">Award-Winning Excellence Since 2009</span>
            </div>
            
            <h1 className="text-6xl lg:text-8xl font-bold text-white mb-8 leading-tight">
              Crafting
              <span className="block text-transparent bg-gradient-to-r from-white to-blue-200 bg-clip-text">
                Tomorrow's World
              </span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-white/90 mb-12 leading-relaxed max-w-4xl mx-auto">
              Experience the future of construction, real estate, and engineering. 
              We don't just build structures—we create experiences that last generations.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link to="/quote">
                <Button className="group bg-white text-blue-600 hover:bg-blue-50 px-12 py-6 text-lg rounded-2xl transition-all duration-300 hover:scale-105 shadow-2xl font-semibold">
                  Start Your Project
                  <ArrowRight className="ml-3 group-hover:translate-x-1 transition-transform" size={20} />
                </Button>
              </Link>
              
              <Link to="/projects">
                <Button className="group bg-white/10 backdrop-blur-md border-2 border-white/30 text-white hover:bg-white/20 px-12 py-6 text-lg rounded-2xl transition-all duration-300 hover:scale-105 shadow-xl">
                  Explore Portfolio
                  <div className="ml-3 w-2 h-2 bg-white rounded-full animate-pulse"></div>
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-12 border-2 border-white/50 rounded-full flex justify-center relative">
            <div className="w-1 h-4 bg-gradient-to-b from-white to-transparent rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {features.map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="bg-gradient-to-br from-blue-100 to-orange-100 w-16 h-16 mx-auto rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
                  <feature.icon className="text-blue-600" size={28} />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">{feature.title}</h3>
                <p className="text-slate-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-gradient-to-r from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="bg-white w-20 h-20 mx-auto rounded-3xl flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-300 shadow-xl">
                  <stat.icon className={stat.color} size={28} />
                </div>
                <div className={`text-4xl lg:text-5xl font-bold ${stat.color} mb-3`}>{stat.value}</div>
                <div className="text-slate-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-orange-100 px-6 py-3 rounded-full mb-8">
              <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></div>
              <span className="text-slate-700 font-medium">Our Expertise</span>
            </div>
            <h2 className="text-5xl lg:text-6xl font-bold text-slate-800 mb-6">
              Services That Define
              <span className="block text-transparent bg-gradient-to-r from-blue-600 to-orange-600 bg-clip-text">
                Excellence
              </span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              From concept to completion, we deliver unmatched quality and innovation across all our services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border-0 overflow-hidden bg-white">
                <div className="aspect-square overflow-hidden relative">
                  <div className={`absolute inset-0 bg-gradient-to-t ${service.color} opacity-80 z-10`}></div>
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    onError={(e) => {
                      e.currentTarget.src = `https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=400&h=400&fit=crop`;
                    }}
                  />
                  <div className="absolute bottom-4 left-4 z-20">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
                      <service.icon className="text-slate-700" size={20} />
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-slate-800 mb-3">{service.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link to="/services">
              <Button className="gradient-mixed text-white px-10 py-4 rounded-2xl transition-all duration-300 hover:scale-105 shadow-xl">
                Discover All Services
                <ArrowRight className="ml-3" size={18} />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 gradient-primary relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.1),transparent)]"></div>
          <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.05),transparent)]"></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
            Ready to Build
            <span className="text-blue-200 block">
              Something Amazing?
            </span>
          </h2>
          <p className="text-xl text-blue-100 mb-12 max-w-3xl mx-auto leading-relaxed">
            Join thousands of satisfied clients who chose excellence. Let's create something extraordinary together.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link to="/contact">
              <Button className="bg-white text-blue-600 hover:bg-blue-50 px-12 py-6 text-lg rounded-2xl transition-all duration-300 hover:scale-105 shadow-2xl font-semibold">
                Get Started Today
              </Button>
            </Link>
            <Link to="/quote">
              <Button className="bg-blue-400/20 backdrop-blur-md hover:bg-blue-400/30 border-2 border-white/30 hover:border-white/50 text-white px-12 py-6 text-lg rounded-2xl transition-all duration-300 hover:scale-105">
                Free Consultation
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
