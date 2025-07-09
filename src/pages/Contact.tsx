
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you soon.",
    });
    setFormData({ name: '', email: '', phone: '', service: '', message: '' });
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

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
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 drop-shadow-lg animate-slide-in-down">Contact Us</h1>
            <p className="text-xl text-emerald-50 leading-relaxed max-w-3xl mx-auto animate-fade-in delay-500">
              Ready to start your project? Get in touch with our expert team today
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-b from-emerald-50 to-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <Card className="border-0 shadow-xl bg-white animate-slide-in-left">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 animate-slide-in-up delay-200">Send us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="animate-slide-in-up delay-300">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Name *
                      </label>
                      <Input
                        required
                        value={formData.name}
                        onChange={(e) => handleChange('name', e.target.value)}
                        placeholder="Your full name"
                        className="border-emerald-200 focus:border-emerald-500 transition-colors duration-300"
                      />
                    </div>
                    <div className="animate-slide-in-up delay-400">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone *
                      </label>
                      <Input
                        required
                        value={formData.phone}
                        onChange={(e) => handleChange('phone', e.target.value)}
                        placeholder="Your phone number"
                        className="border-emerald-200 focus:border-emerald-500 transition-colors duration-300"
                      />
                    </div>
                  </div>

                  <div className="animate-slide-in-up delay-500">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <Input
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleChange('email', e.target.value)}
                      placeholder="your.email@example.com"
                      className="border-emerald-200 focus:border-emerald-500 transition-colors duration-300"
                    />
                  </div>

                  <div className="animate-slide-in-up delay-600">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Service of Interest
                    </label>
                    <Select value={formData.service} onValueChange={(value) => handleChange('service', value)}>
                      <SelectTrigger className="border-emerald-200 focus:border-emerald-500 transition-colors duration-300">
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="construction">Construction</SelectItem>
                        <SelectItem value="rentals">House Rentals</SelectItem>
                        <SelectItem value="renovation">Renovation</SelectItem>
                        <SelectItem value="engineering">Engineering</SelectItem>
                        <SelectItem value="consultation">Consultation</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="animate-slide-in-up delay-700">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <Textarea
                      required
                      rows={6}
                      value={formData.message}
                      onChange={(e) => handleChange('message', e.target.value)}
                      placeholder="Tell us about your project..."
                      className="resize-none border-emerald-200 focus:border-emerald-500 transition-colors duration-300"
                    />
                  </div>

                  <Button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 rounded-full text-lg font-medium transition-all duration-300 hover:scale-105 shadow-lg animate-slide-in-up delay-800">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8 animate-slide-in-right">
              <div className="animate-slide-in-up delay-200">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Get in Touch</h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  We're here to help bring your vision to life. Contact us through any of the 
                  following methods, and we'll respond within 24 hours.
                </p>
              </div>

              <div className="space-y-6">
                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white animate-scale-in delay-300">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-gradient-to-br from-emerald-100 to-green-100 p-3 rounded-full shadow-lg animate-scale-in delay-400">
                        <MapPin className="text-emerald-600" size={24} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-2">Address</h3>
                        <p className="text-gray-600">
                          Dhanusha District<br />
                          Janakpurdham<br />
                          Nepal
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white animate-scale-in delay-500">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-gradient-to-br from-emerald-100 to-green-100 p-3 rounded-full shadow-lg animate-scale-in delay-600">
                        <Phone className="text-emerald-600" size={24} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-2">Phone</h3>
                        <p className="text-gray-600">
                          Main:9707362231<br />
                          Alternative:9806255843
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white animate-scale-in delay-700">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-gradient-to-br from-emerald-100 to-green-100 p-3 rounded-full shadow-lg animate-scale-in delay-800">
                        <Mail className="text-emerald-600" size={24} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-2">Email</h3>
                        <p className="text-gray-600">
                          General:realestatecrafters1@gmail.com<br />
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white animate-scale-in delay-900">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-gradient-to-br from-emerald-100 to-green-100 p-3 rounded-full shadow-lg animate-scale-in delay-1000">
                        <Clock className="text-emerald-600" size={24} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-2">Business Hours</h3>
                        <p className="text-gray-600">
                          Sunday - Friday: 8:00 AM - 6:00 PM<br />
                          Saturday: Emergencies<br />
                        
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 animate-slide-in-up">Visit Our Office</h2>
            <p className="text-xl text-gray-600 animate-slide-in-up delay-200">
              Located in the heart of Nepal ,dhanusha district
            </p>
          </div>

          <div className="bg-white rounded-lg overflow-hidden shadow-xl animate-scale-in delay-400">
            <iframe
              title="Janakpurdham Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.636621522495!2d85.92754381506192!3d26.72893648200892!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ec1f352a75941f%3A0xd76307e18e2169a1!2sJanakpur!5e0!3m2!1sen!2snp!4v1689140242800!5m2!1sen!2snp"
              width="100%"
              height="480"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-[480px] border-0"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
