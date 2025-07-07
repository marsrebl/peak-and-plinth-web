
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Hammer, Home, Wrench, Calculator, ArrowRight } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Hammer,
      title: 'Construction Services',
      description: 'Complete construction solutions from residential to commercial projects.',
      features: ['Residential Construction', 'Commercial Buildings', 'Infrastructure Development', 'Project Management'],
      image: 'photo-1487958449943-2429e8be8625'
    },
    {
      icon: Home,
      title: 'House Rentals',
      description: 'Premium rental properties in prime locations with excellent amenities.',
      features: ['Luxury Apartments', 'Family Homes', 'Furnished Options', '24/7 Support'],
      image: 'photo-1518005020951-eccb494ad742'
    },
    {
      icon: Wrench,
      title: 'Renovations',
      description: 'Transform your existing space with our expert renovation services.',
      features: ['Kitchen Remodeling', 'Bathroom Upgrades', 'Interior Design', 'Structural Changes'],
      image: 'photo-1433832597046-4f10e10ac764'
    },
    {
      icon: Calculator,
      title: 'Engineering Services',
      description: 'Professional engineering consultancy and structural design services.',
      features: ['Structural Engineering', 'Design Consultation', 'Safety Assessment', 'Technical Support'],
      image: 'photo-1493397212122-2b85dda8106b'
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-navy-900 to-navy-700">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">Our Services</h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              Comprehensive solutions for all your construction and real estate needs
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-300 border-0 overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-2">
                  <div className="aspect-square md:aspect-auto">
                    <img
                      src={`https://images.unsplash.com/${service.image}?w=400&h=300&fit=crop`}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="p-8 flex flex-col justify-center">
                    <div className="bg-gold-100 w-12 h-12 rounded-full flex items-center justify-center mb-6">
                      <service.icon className="text-gold-600" size={20} />
                    </div>
                    <h3 className="text-2xl font-semibold text-navy-800 mb-4">{service.title}</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="text-gray-600 flex items-center">
                          <div className="w-2 h-2 bg-gold-500 rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-navy-800 mb-4">Our Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              How we deliver exceptional results for every project
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Consultation', description: 'Understanding your needs and vision' },
              { step: '02', title: 'Planning', description: 'Detailed project planning and design' },
              { step: '03', title: 'Execution', description: 'Professional implementation and construction' },
              { step: '04', title: 'Delivery', description: 'Final inspection and project handover' }
            ].map((process, index) => (
              <div key={index} className="text-center group">
                <div className="bg-gold-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-6 group-hover:bg-gold-200 transition-colors">
                  <span className="text-gold-600 font-bold text-lg">{process.step}</span>
                </div>
                <h3 className="text-xl font-semibold text-navy-800 mb-3">{process.title}</h3>
                <p className="text-gray-600">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-navy-800 to-navy-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Contact us today to discuss your project and get a free consultation
          </p>
          <Link to="/quote">
            <Button className="bg-gold-600 hover:bg-gold-700 text-white px-8 py-4 text-lg rounded-full transition-all duration-300 hover:scale-105">
              Get Free Quote
              <ArrowRight className="ml-2" size={20} />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;
