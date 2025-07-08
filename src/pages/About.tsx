
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Award, Users, Target, Heart, Zap, Shield } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Target,
      title: 'Precision',
      description: 'Every detail matters. We deliver perfection through meticulous attention to detail.',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Users,
      title: 'Partnership',
      description: 'Building lasting relationships through collaboration and transparent communication.',
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: Zap,
      title: 'Innovation',
      description: 'Pioneering tomorrow\'s solutions with cutting-edge technology and creative thinking.',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Shield,
      title: 'Trust',
      description: 'Reliability and integrity form the foundation of every relationship we build.',
      color: 'from-teal-500 to-teal-600'
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 gradient-mixed relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.1),transparent)]"></div>
          <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.05),transparent)]"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 drop-shadow-lg">About Us</h1>
            <p className="text-xl text-white/90 leading-relaxed max-w-3xl mx-auto">
              Fifteen years of unwavering commitment to excellence, innovation, and creating spaces that inspire and endure.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-slate-800 mb-6">Our Journey</h2>
              <div className="space-y-6 text-slate-600 leading-relaxed">
                <p className="text-lg">
                  What started as a vision in 2009 has evolved into a legacy of architectural excellence. 
                  Real Estate Crafters International was born from the belief that every space should 
                  tell a story and every structure should stand as a testament to human ingenuity.
                </p>
                <p className="text-lg">
                  Today, we stand as industry leaders, having transformed skylines, renovated dreams, 
                  and engineered solutions that seemed impossible. Our portfolio spans residential 
                  masterpieces, commercial landmarks, and engineering marvels.
                </p>
                <p className="text-lg">
                  With over 500 successful projects and a growing family of satisfied clients, 
                  we continue to push boundaries and redefine what's possible in construction and real estate.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-200 to-orange-200 rounded-2xl blur-xl opacity-50"></div>
              <img
                src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=600&h=400&fit=crop"
                alt="Our Journey"
                className="relative rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-to-b from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Our Core Values</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              The principles that drive our passion and guide our success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white border-0">
                <CardContent className="p-8">
                  <div className={`bg-gradient-to-br ${value.color} w-16 h-16 mx-auto rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg`}>
                    <value.icon className="text-white" size={24} />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-800 mb-4">{value.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{value.description}</p>
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
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Leadership Excellence</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Meet the visionaries behind our success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { name: 'John Anderson', role: 'CEO & Founder', image: 'photo-1507003211169-0a1dd7228f2d', color: 'from-blue-500 to-blue-600' },
              { name: 'Sarah Johnson', role: 'Head of Construction', image: 'photo-1494790108755-2616c6fe904', color: 'from-orange-500 to-orange-600' },
              { name: 'Michael Chen', role: 'Chief Engineer', image: 'photo-1472099645785-5658abf4ff4e', color: 'from-purple-500 to-purple-600' }
            ].map((member, index) => (
              <Card key={index} className="text-center group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white border-0">
                <CardContent className="p-8">
                  <div className="relative mb-6">
                    <div className={`absolute -inset-1 bg-gradient-to-r ${member.color} rounded-full blur opacity-50`}></div>
                    <img
                      src={`https://images.unsplash.com/${member.image}?w=200&h=200&fit=crop&crop=face`}
                      alt={member.name}
                      className="relative w-32 h-32 mx-auto rounded-full object-cover shadow-xl"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-800 mb-2">{member.name}</h3>
                  <p className="text-blue-600 font-medium">{member.role}</p>
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
