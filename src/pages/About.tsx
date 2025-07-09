
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Award, Users, Target, Heart, MapPin } from 'lucide-react';

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

  const areas = ['Janakpur', 'Bardibas', 'Lalbandi', 'Hetauda', 'Kathmandu'];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-emerald-600 via-green-600 to-teal-600 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.1),transparent)] animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.05),transparent)] animate-pulse delay-700"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 drop-shadow-lg animate-slide-in-down">About Us</h1>
            <p className="text-xl text-emerald-50 leading-relaxed max-w-3xl mx-auto animate-fade-in delay-500">
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
            <div className="animate-slide-in-left">
              <h2 className="text-4xl font-bold text-gray-900 mb-6 animate-slide-in-left delay-200">Our Story</h2>
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p className="text-lg animate-fade-in delay-400">
                  Founded in 2009, Real Estate Crafters International began as a small 
                  construction company with a big vision: to transform the way people 
                  experience construction and real estate services.
                </p>
                <p className="text-lg animate-fade-in delay-600">
                  Over the years, we've grown into a comprehensive service provider, 
                  offering everything from residential construction to commercial projects, 
                  house rentals, renovations, and engineering consultancy.
                </p>
                <p className="text-lg animate-fade-in delay-800">
                  Our commitment to excellence, innovation, and customer satisfaction 
                  has made us a trusted name in the industry, with over 500 successful 
                  projects and countless satisfied clients.
                </p>
              </div>
            </div>
            <div className="relative animate-slide-in-right delay-300">
              <div className="absolute -inset-4 bg-gradient-to-r from-emerald-200 to-green-200 rounded-2xl blur-xl opacity-50 animate-pulse"></div>
              <img
                src="../images/Realestate.jpg"
                alt="Our Story"
                className="relative rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-to-b from-emerald-50 to-green-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 animate-slide-in-up">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in delay-300">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white border-0 animate-fade-in" style={{animationDelay: `${index * 200}ms`}}>
                <CardContent className="p-8">
                  <div className="bg-gradient-to-br from-emerald-100 to-green-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-6 group-hover:from-emerald-200 group-hover:to-green-200 transition-all duration-500 shadow-lg group-hover:shadow-xl group-hover:scale-110 animate-scale-in" style={{animationDelay: `${index * 300}ms`}}>
                    <value.icon className="text-emerald-600 transition-transform duration-300 group-hover:rotate-12" size={24} />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-emerald-600 transition-colors duration-300">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-4 animate-slide-in-up">Our Leadership</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in delay-300">
              Meet the visionary leading our company forward.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-emerald-100 to-green-50 p-10 rounded-3xl shadow-2xl text-center group hover:shadow-emerald-200 transition-all duration-500 animate-scale-in delay-500">
              <div className="relative mb-10 w-60 h-60 mx-auto">
                <div className="absolute -inset-2 bg-gradient-to-tr from-emerald-300 to-green-300 rounded-full blur-xl opacity-50 group-hover:opacity-70 transition-opacity duration-500 animate-pulse"></div>
                <img
                  src="../images/logo.png"
                  alt="Md Araman Husen"
                  className="relative w-60 h-60 rounded-full object-cover border-4 border-white shadow-xl transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <h3 className="text-3xl font-extrabold text-gray-900 mb-2 animate-fade-in delay-700">Md Araman Husen</h3>
              <p className="text-emerald-700 font-semibold text-lg mb-3 animate-fade-in delay-800">Managing Director</p>
              <p className="text-gray-500 mb-1 animate-fade-in delay-900">Janakpurdham, Nepal</p>
              <p className="text-gray-700 font-semibold text-lg animate-fade-in delay-1000">📞 9706255843</p>
            </div>
          </div>
        </div>
      </section>

      {/* Areas We Deal Section */}
      <section className="py-20 bg-gradient-to-b from-green-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 animate-slide-in-up">Areas We Deal In</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in delay-300">
              Our services are available across major cities in Nepal.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              { name: 'Janakpur', image: '../images/cities/janakpur.jpg' },
              { name: 'Bardibas', image: '../images/cities/bardibas.gif' },
              { name: 'Lalbandi', image: '../images/cities/lalbandi.jpg' },
              { name: 'Hetauda', image: '../images/cities/hetauda.jpg' },
              { name: 'Kathmandu', image: '../images/cities/kathmandu.avif' },
              { name: 'Pokhara', image: '../images/cities/pokhara.jpg' }
            ].map((city, index) => (
              <Card
                key={index}
                className="overflow-hidden group shadow hover:shadow-lg transition-all duration-500 hover:-translate-y-2 bg-white border-0 animate-fade-in"
                style={{animationDelay: `${index * 150}ms`}}
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={city.image}
                    alt={city.name}
                    className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700"
                    onError={(e) => {
                      e.currentTarget.src =
                        'https://images.unsplash.com/photo-1509228627159-6452b3f743d4?auto=format&fit=crop&w=600&h=300';
                    }}
                  />
                  <div className="absolute inset-0 bg-black/30 flex items-end p-4 group-hover:bg-black/40 transition-colors duration-300">
                    <h3 className="text-white text-xl font-semibold group-hover:scale-110 transition-transform duration-300">{city.name}</h3>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
