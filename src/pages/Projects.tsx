
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'construction', label: 'Construction' },
    { id: 'renovation', label: 'Renovation' },
    { id: 'commercial', label: 'Commercial' }
  ];

  const projects = [
    {
      id: 1,
      title: 'Luxury Residential Complex',
      category: 'construction',
      image: 'photo-1487958449943-2429e8be8625',
      description: 'Modern 50-unit residential complex with premium amenities',
      year: '2023',
      location: 'Downtown District'
    },
    {
      id: 2,
      title: 'Historic Building Restoration',
      category: 'renovation',
      image: 'photo-1518005020951-eccb494ad742',
      description: 'Complete restoration of a 19th-century heritage building',
      year: '2023',
      location: 'Heritage Quarter'
    },
    {
      id: 3,
      title: 'Corporate Office Tower',
      category: 'commercial',
      image: 'photo-1433832597046-4f10e10ac764',
      description: '25-story modern office tower with sustainable design',
      year: '2022',
      location: 'Business District'
    },
    {
      id: 4,
      title: 'Modern Villa Complex',
      category: 'construction',
      image: 'photo-1493397212122-2b85dda8106b',
      description: 'Exclusive villa development with contemporary architecture',
      year: '2022',
      location: 'Suburban Hills'
    },
    {
      id: 5,
      title: 'Shopping Center Renovation',
      category: 'renovation',
      image: 'photo-1487252665478-49b61b47f302',
      description: 'Complete modernization of existing shopping complex',
      year: '2021',
      location: 'City Center'
    },
    {
      id: 6,
      title: 'Industrial Warehouse',
      category: 'commercial',
      image: 'photo-1487958449943-2429e8be8625',
      description: 'State-of-the-art logistics and distribution center',
      year: '2021',
      location: 'Industrial Zone'
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

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
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 drop-shadow-lg">Our Projects</h1>
            <p className="text-xl text-emerald-50 leading-relaxed max-w-3xl mx-auto">
              Showcasing our commitment to excellence through completed projects
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {filters.map((filter) => (
              <Button
                key={filter.id}
                variant={activeFilter === filter.id ? "default" : "outline"}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-6 py-2 rounded-full transition-all duration-300 ${
                  activeFilter === filter.id
                    ? 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg'
                    : 'border-emerald-300 text-emerald-700 hover:bg-emerald-50'
                }`}
              >
                {filter.label}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-gradient-to-b from-emerald-50 to-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <Card key={project.id} className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0 overflow-hidden bg-white">
                <div className="aspect-video overflow-hidden relative">
                  <img
                    src={`https://images.unsplash.com/${project.image}?w=400&h=300&fit=crop`}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                </div>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <span className="text-sm text-emerald-600 font-medium uppercase tracking-wider bg-emerald-100 px-2 py-1 rounded-full">
                      {project.category}
                    </span>
                    <span className="text-sm text-gray-500">{project.year}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{project.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">{project.location}</span>
                    <Button variant="ghost" className="text-emerald-600 hover:text-emerald-700 p-0 font-medium">
                      View Details →
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-green-600">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { value: '500+', label: 'Projects Completed' },
              { value: '50M+', label: 'Sq Ft Built' },
              { value: '250+', label: 'Happy Clients' },
              { value: '15+', label: 'Years Experience' }
            ].map((stat, index) => (
              <div key={index}>
                <div className="text-4xl lg:text-5xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-emerald-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
