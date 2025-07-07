
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Award, Users, Target, Heart } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Target,
      title: 'Excellence',
      description: 'We strive for perfection in every project, ensuring the highest quality standards.'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Working closely with clients to understand their vision and bring it to life.'
    },
    {
      icon: Award,
      title: 'Innovation',
      description: 'Embracing cutting-edge technologies and modern construction techniques.'
    },
    {
      icon: Heart,
      title: 'Integrity',
      description: 'Building lasting relationships through trust, transparency, and reliability.'
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-navy-900 to-navy-700">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">About Us</h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              With over 15 years of experience, Real Estate Crafters International has been 
              the cornerstone of quality construction and real estate services.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-navy-800 mb-6">Our Story</h2>
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p>
                  Founded in 2009, Real Estate Crafters International began as a small 
                  construction company with a big vision: to transform the way people 
                  experience construction and real estate services.
                </p>
                <p>
                  Over the years, we've grown into a comprehensive service provider, 
                  offering everything from residential construction to commercial projects, 
                  house rentals, renovations, and engineering consultancy.
                </p>
                <p>
                  Our commitment to excellence, innovation, and customer satisfaction 
                  has made us a trusted name in the industry, with over 500 successful 
                  projects and countless satisfied clients.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=600&h=400&fit=crop"
                alt="Our Story"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-navy-800 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <CardContent className="p-8">
                  <div className="bg-gold-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-6 group-hover:bg-gold-200 transition-colors">
                    <value.icon className="text-gold-600" size={24} />
                  </div>
                  <h3 className="text-xl font-semibold text-navy-800 mb-4">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-navy-800 mb-4">Our Leadership</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet the experienced professionals leading our company
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { name: 'John Anderson', role: 'CEO & Founder', image: 'photo-1507003211169-0a1dd7228f2d' },
              { name: 'Sarah Johnson', role: 'Head of Construction', image: 'photo-1494790108755-2616c6fe904' },
              { name: 'Michael Chen', role: 'Chief Engineer', image: 'photo-1472099645785-5658abf4ff4e' }
            ].map((member, index) => (
              <Card key={index} className="text-center group hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8">
                  <img
                    src={`https://images.unsplash.com/${member.image}?w=200&h=200&fit=crop&crop=face`}
                    alt={member.name}
                    className="w-32 h-32 mx-auto rounded-full object-cover mb-6 shadow-lg"
                  />
                  <h3 className="text-xl font-semibold text-navy-800 mb-2">{member.name}</h3>
                  <p className="text-gold-600 font-medium">{member.role}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
