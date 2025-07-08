import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Home, Wrench, Paintbrush, Landmark, Hammer, ArrowRight } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Hammer,
      title: 'House Construction & Engineering',
      description: 'End-to-end construction solutions using modern techniques and expert engineering guidance.',
      features: [
        'Customized Residential Plans',
        'Modern Architecture & Design',
        'Structural Engineering & Supervision',
        'Earthquake Resistant Buildings'
      ],
      image: '../images/house-constructionan.jpg'
    },
    {
      icon: Landmark,
      title: 'Land Buying & Selling',
      description: 'Transparent and verified land trading service ensuring legality, valuation, and documentation.',
      features: [
        'Land Ownership Verification',
        'Fair Market Valuation',
        'Secure Legal Transfers',
        'Urban & Rural Property Deals'
      ],
      image: '../images/land-selling.jpg'
    },
    {
      icon: Wrench,
      title: 'Electricians & Plumbing Services',
      description: 'Certified experts to handle residential and commercial electrical and plumbing needs.',
      features: [
        'House Wiring & Safety Checks',
        'Inverter & Generator Setup',
        'Water Pipeline & Motor Installation',
        'Bathroom & Kitchen Plumbing'
      ],
      image: '../images/plumbing-electrical.jpg'
    },
    {
      icon: Paintbrush,
      title: 'House Painting Services',
      description: 'Transform your home’s appearance with premium paint jobs and aesthetic consultations.',
      features: [
        'Interior & Exterior Painting',
        'Weatherproof & Eco-Friendly Paints',
        'Custom Color Consultations',
        'Texture & Finish Options'
      ],
      image: '../images/house-painting.jpg'
    },
    {
      icon: Home,
      title: 'Property Management & Renovation',
      description: 'Hassle-free management of properties and complete renovation services for increased value.',
      features: [
        'Rental Management',
        'Maintenance & Repairs',
        'Old Home Renovation',
        'Property Inspection & Valuation'
      ],
      image: '../images/property-management.jpg'
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-emerald-600 via-green-600 to-teal-600 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.1),transparent)]"></div>
          <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.05),transparent)]"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 drop-shadow-lg">Our Services</h1>
            <p className="text-xl text-emerald-50 leading-relaxed max-w-3xl mx-auto">
              One-stop solutions for construction, maintenance, and property management.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gradient-to-b from-emerald-50 to-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-300 border-0 overflow-hidden bg-white">
                <div className="grid grid-cols-1 md:grid-cols-2">
                  <div className="aspect-square md:aspect-auto relative overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/20 to-transparent"></div>
                  </div>
                  <CardContent className="p-8 flex flex-col justify-center">
                    <div className="bg-gradient-to-br from-emerald-100 to-green-100 w-12 h-12 rounded-full flex items-center justify-center mb-6 shadow-lg">
                      <service.icon className="text-emerald-600" size={20} />
                    </div>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-4">{service.title}</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="text-gray-600 flex items-center">
                          <div className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Link to="/contact">
                      <Button className="mt-4 bg-emerald-600 text-white hover:bg-emerald-700 transition-all duration-300">
                        Contact Us <ArrowRight className="ml-2" size={16} />
                      </Button>
                    </Link>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-green-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
            Contact us today to discuss your project and get a free consultation
          </p>
          <Link to="/quote">
            <Button className="bg-white text-emerald-600 hover:bg-emerald-50 px-8 py-4 text-lg rounded-full transition-all duration-300 hover:scale-105 font-semibold shadow-xl">
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
