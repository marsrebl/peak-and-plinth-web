
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
    <div className="min-h-screen pt-20" style={{ backgroundColor: '#9EB3C2' }}>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-green-600 via-green-700 to-green-800 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.1),transparent)]"></div>
          <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.05),transparent)]"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 drop-shadow-lg">About Us</h1>
            <p className="text-xl text-green-50 leading-relaxed max-w-3xl mx-auto">
              With over 15 years of experience, Real Estate Crafters International has been 
              the cornerstone of quality construction and real estate services.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20" style={{ backgroundColor: '#E2E8CE' }}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p className="text-lg">
                  Founded in 2009, Real Estate Crafters International began as a small 
                  construction company with a big vision: to transform the way people 
                  experience construction and real estate services.
                </p>
                <p className="text-lg">
                  Over the years, we've grown into a comprehensive service provider, 
                  offering everything from residential construction to commercial projects, 
                  house rentals, renovations, and engineering consultancy.
                </p>
                <p className="text-lg">
                  Our commitment to excellence, innovation, and customer satisfaction 
                  has made us a trusted name in the industry, with over 500 successful 
                  projects and countless satisfied clients.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-green-200 to-green-300 rounded-2xl blur-xl opacity-50"></div>
              <img
                src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=600&h=400&fit=crop"
                alt="Our Story"
                className="relative rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20" style={{ backgroundColor: '#9EB3C2' }}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0" style={{ backgroundColor: '#E2E8CE' }}>
                <CardContent className="p-8">
                  <div className="bg-gradient-to-br from-green-100 to-green-200 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-6 group-hover:from-green-200 group-hover:to-green-300 transition-colors shadow-lg">
                    <value.icon className="text-green-600" size={24} />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{value.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20" style={{ backgroundColor: '#E2E8CE' }}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Leadership</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Meet the experienced professionals leading our company
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { name: 'John Anderson', role: 'CEO & Founder', image: 'photo-1507003211169-0a1dd7228f2d' },
              { name: 'Sarah Johnson', role: 'Head of Construction', image: 'photo-1494790108755-2616c6fe904' },
              { name: 'Michael Chen', role: 'Chief Engineer', image: 'photo-1472099645785-5658abf4ff4e' }
            ].map((member, index) => (
              <Card key={index} className="text-center group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0" style={{ backgroundColor: '#9EB3C2' }}>
                <CardContent className="p-8">
                  <div className="relative mb-6">
                    <div className="absolute -inset-1 bg-gradient-to-r from-green-200 to-green-300 rounded-full blur opacity-50"></div>
                    <img
                      src={`https://images.unsplash.com/${member.image}?w=200&h=200&fit=crop&crop=face`}
                      alt={member.name}
                      className="relative w-32 h-32 mx-auto rounded-full object-cover shadow-xl"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-green-600 font-medium">{member.role}</p>
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
