
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { MapPin, Bed, Bath, Square, Heart, Search } from 'lucide-react';

const Rentals = () => {
  const [favorites, setFavorites] = useState<number[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [priceRange, setPriceRange] = useState('all');
  const [propertyType, setPropertyType] = useState('all');

  const properties = [
    {
      id: 1,
      title: 'Modern Downtown Apartment',
      type: 'apartment',
      price: 2500,
      bedrooms: 2,
      bathrooms: 2,
      area: 1200,
      location: 'Downtown District',
      image: 'photo-1518005020951-eccb494ad742',
      features: ['Furnished', 'Parking', 'Gym Access', 'Pet Friendly']
    },
    {
      id: 2,
      title: 'Luxury Family Villa',
      type: 'house',
      price: 4500,
      bedrooms: 4,
      bathrooms: 3,
      area: 2800,
      location: 'Suburban Hills',
      image: 'photo-1487958449943-2429e8be8625',
      features: ['Garden', 'Garage', 'Swimming Pool', 'Security']
    },
    {
      id: 3,
      title: 'Cozy Studio Loft',
      type: 'studio',
      price: 1800,
      bedrooms: 1,
      bathrooms: 1,
      area: 650,
      location: 'Arts Quarter',
      image: 'photo-1433832597046-4f10e10ac764',
      features: ['Furnished', 'High Ceilings', 'Natural Light', 'Modern Kitchen']
    },
    {
      id: 4,
      title: 'Executive Penthouse',
      type: 'apartment',
      price: 6000,
      bedrooms: 3,
      bathrooms: 3,
      area: 1800,
      location: 'Business District',
      image: 'photo-1493397212122-2b85dda8106b',
      features: ['City View', 'Balcony', 'Concierge', 'Premium Finishes']
    },
    {
      id: 5,
      title: 'Charming Townhouse',
      type: 'house',
      price: 3200,
      bedrooms: 3,
      bathrooms: 2,
      area: 1600,
      location: 'Historic District',
      image: 'photo-1487252665478-49b61b47f302',
      features: ['Patio', 'Fireplace', 'Walk-in Closets', 'Updated Kitchen']
    },
    {
      id: 6,
      title: 'Modern Condo',
      type: 'apartment',
      price: 2200,
      bedrooms: 2,
      bathrooms: 1,
      area: 950,
      location: 'Riverside',
      image: 'photo-1518005020951-eccb494ad742',
      features: ['River View', 'Balcony', 'In-unit Laundry', 'Storage']
    }
  ];

  const toggleFavorite = (id: number) => {
    setFavorites(prev => 
      prev.includes(id) ? prev.filter(fav => fav !== id) : [...prev, id]
    );
  };

  const filteredProperties = properties.filter(property => {
    const matchesSearch = property.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         property.location.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesPrice = priceRange === 'all' || 
                        (priceRange === 'under-2000' && property.price < 2000) ||
                        (priceRange === '2000-4000' && property.price >= 2000 && property.price <= 4000) ||
                        (priceRange === 'over-4000' && property.price > 4000);
    
    const matchesType = propertyType === 'all' || property.type === propertyType;
    
    return matchesSearch && matchesPrice && matchesType;
  });

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-navy-900 to-navy-700">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">Premium Rentals</h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              Find your perfect home from our curated collection of premium rental properties
            </p>
          </div>
        </div>
      </section>

      {/* Search & Filters */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-4 items-center">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <Input
                type="text"
                placeholder="Search by location or property name..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            
            <Select value={priceRange} onValueChange={setPriceRange}>
              <SelectTrigger className="w-full lg:w-48">
                <SelectValue placeholder="Price Range" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Prices</SelectItem>
                <SelectItem value="under-2000">Under $2,000</SelectItem>
                <SelectItem value="2000-4000">$2,000 - $4,000</SelectItem>
                <SelectItem value="over-4000">Over $4,000</SelectItem>
              </SelectContent>
            </Select>

            <Select value={propertyType} onValueChange={setPropertyType}>
              <SelectTrigger className="w-full lg:w-48">
                <SelectValue placeholder="Property Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                <SelectItem value="apartment">Apartment</SelectItem>
                <SelectItem value="house">House</SelectItem>
                <SelectItem value="studio">Studio</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </section>

      {/* Properties Grid */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProperties.map((property) => (
              <Card key={property.id} className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0 overflow-hidden">
                <div className="relative aspect-video">
                  <img
                    src={`https://images.unsplash.com/${property.image}?w=400&h=300&fit=crop`}
                    alt={property.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <button
                    onClick={() => toggleFavorite(property.id)}
                    className="absolute top-4 right-4 p-2 bg-white/90 rounded-full hover:bg-white transition-colors"
                  >
                    <Heart 
                      className={`w-5 h-5 ${favorites.includes(property.id) ? 'fill-red-500 text-red-500' : 'text-gray-600'}`} 
                    />
                  </button>
                  <div className="absolute bottom-4 left-4 bg-navy-900/90 text-white px-3 py-1 rounded-full">
                    <span className="text-lg font-bold">${property.price.toLocaleString()}</span>
                    <span className="text-sm">/month</span>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-navy-800 mb-2">{property.title}</h3>
                  
                  <div className="flex items-center text-gray-600 mb-4">
                    <MapPin size={16} className="mr-1" />
                    <span className="text-sm">{property.location}</span>
                  </div>

                  <div className="flex items-center gap-4 mb-4 text-gray-600 text-sm">
                    <div className="flex items-center">
                      <Bed size={16} className="mr-1" />
                      <span>{property.bedrooms}</span>
                    </div>
                    <div className="flex items-center">
                      <Bath size={16} className="mr-1" />
                      <span>{property.bathrooms}</span>
                    </div>
                    <div className="flex items-center">
                      <Square size={16} className="mr-1" />
                      <span>{property.area} sq ft</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {property.features.slice(0, 2).map((feature, index) => (
                      <span key={index} className="text-xs bg-gold-100 text-gold-700 px-2 py-1 rounded-full">
                        {feature}
                      </span>
                    ))}
                    {property.features.length > 2 && (
                      <span className="text-xs text-gray-500">+{property.features.length - 2} more</span>
                    )}
                  </div>

                  <div className="flex gap-2">
                    <Button className="flex-1 bg-gold-600 hover:bg-gold-700 text-white">
                      View Details
                    </Button>
                    <Button variant="outline" className="border-navy-300 text-navy-700 hover:bg-navy-50">
                      Contact
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredProperties.length === 0 && (
            <div className="text-center py-16">
              <h3 className="text-2xl font-semibold text-navy-800 mb-4">No properties found</h3>
              <p className="text-gray-600">Try adjusting your search criteria</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-navy-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Can't Find What You're Looking For?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Our team can help you find the perfect rental property that meets all your requirements
          </p>
          <Button className="bg-gold-600 hover:bg-gold-700 text-white px-8 py-4 text-lg rounded-full transition-all duration-300 hover:scale-105">
            Contact Our Rental Team
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Rentals;
