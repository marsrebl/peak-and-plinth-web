
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Calculator, CheckCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Quote = () => {
  const { toast } = useToast();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Step 1 - Project Type
    projectType: '',
    serviceType: '',
    
    // Step 2 - Project Details
    propertyType: '',
    projectSize: '',
    timeline: '',
    budget: '',
    
    // Step 3 - Additional Services
    additionalServices: [] as string[],
    
    // Step 4 - Contact Information
    name: '',
    email: '',
    phone: '',
    address: '',
    description: ''
  });

  const handleNext = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Quote Request Submitted!",
      description: "We'll prepare your detailed quote and contact you within 24 hours.",
    });
    // Reset form
    setFormData({
      projectType: '', serviceType: '', propertyType: '', projectSize: '',
      timeline: '', budget: '', additionalServices: [], name: '', email: '',
      phone: '', address: '', description: ''
    });
    setCurrentStep(1);
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const toggleService = (service: string) => {
    setFormData(prev => ({
      ...prev,
      additionalServices: prev.additionalServices.includes(service)
        ? prev.additionalServices.filter(s => s !== service)
        : [...prev.additionalServices, service]
    }));
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-4">What type of project do you have?</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { value: 'new-construction', label: 'New Construction', desc: 'Build from ground up' },
                  { value: 'renovation', label: 'Renovation', desc: 'Update existing property' },
                  { value: 'rental', label: 'Rental Inquiry', desc: 'Find rental property' },
                  { value: 'engineering', label: 'Engineering', desc: 'Technical consultation' }
                ].map((option) => (
                  <Card
                    key={option.value}
                    className={`cursor-pointer transition-all ${
                      formData.projectType === option.value
                        ? 'ring-2 ring-gold-500 bg-gold-50'
                        : 'hover:shadow-md'
                    }`}
                    onClick={() => handleChange('projectType', option.value)}
                  >
                    <CardContent className="p-4">
                      <h4 className="font-semibold">{option.label}</h4>
                      <p className="text-sm text-gray-600">{option.desc}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {formData.projectType && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Specific Service Needed
                </label>
                <Select value={formData.serviceType} onValueChange={(value) => handleChange('serviceType', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select specific service" />
                  </SelectTrigger>
                  <SelectContent>
                    {formData.projectType === 'new-construction' && (
                      <>
                        <SelectItem value="residential">Residential Construction</SelectItem>
                        <SelectItem value="commercial">Commercial Construction</SelectItem>
                        <SelectItem value="custom-home">Custom Home Building</SelectItem>
                      </>
                    )}
                    {formData.projectType === 'renovation' && (
                      <>
                        <SelectItem value="kitchen">Kitchen Remodeling</SelectItem>
                        <SelectItem value="bathroom">Bathroom Renovation</SelectItem>
                        <SelectItem value="whole-house">Whole House Renovation</SelectItem>
                        <SelectItem value="addition">Home Addition</SelectItem>
                      </>
                    )}
                    {formData.projectType === 'rental' && (
                      <>
                        <SelectItem value="apartment">Apartment Rental</SelectItem>
                        <SelectItem value="house">House Rental</SelectItem>
                        <SelectItem value="commercial">Commercial Space</SelectItem>
                      </>
                    )}
                    {formData.projectType === 'engineering' && (
                      <>
                        <SelectItem value="structural">Structural Engineering</SelectItem>
                        <SelectItem value="consultation">Design Consultation</SelectItem>
                        <SelectItem value="inspection">Property Inspection</SelectItem>
                      </>
                    )}
                  </SelectContent>
                </Select>
              </div>
            )}
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold mb-4">Project Details</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Property Type
                </label>
                <Select value={formData.propertyType} onValueChange={(value) => handleChange('propertyType', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select property type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="single-family">Single Family Home</SelectItem>
                    <SelectItem value="condo">Condominium</SelectItem>
                    <SelectItem value="townhouse">Townhouse</SelectItem>
                    <SelectItem value="apartment">Apartment Building</SelectItem>
                    <SelectItem value="commercial">Commercial Building</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Project Size
                </label>
                <Select value={formData.projectSize} onValueChange={(value) => handleChange('projectSize', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select project size" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="small">Small (Under 1000 sq ft)</SelectItem>
                    <SelectItem value="medium">Medium (1000-3000 sq ft)</SelectItem>
                    <SelectItem value="large">Large (3000-5000 sq ft)</SelectItem>
                    <SelectItem value="extra-large">Extra Large (5000+ sq ft)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Preferred Timeline
                </label>
                <Select value={formData.timeline} onValueChange={(value) => handleChange('timeline', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select timeline" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="asap">ASAP</SelectItem>
                    <SelectItem value="1-3-months">1-3 Months</SelectItem>
                    <SelectItem value="3-6-months">3-6 Months</SelectItem>
                    <SelectItem value="6-12-months">6-12 Months</SelectItem>
                    <SelectItem value="flexible">Flexible</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Budget Range
                </label>
                <Select value={formData.budget} onValueChange={(value) => handleChange('budget', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select budget range" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="under-50k">Under $50,000</SelectItem>
                    <SelectItem value="50k-100k">$50,000 - $100,000</SelectItem>
                    <SelectItem value="100k-250k">$100,000 - $250,000</SelectItem>
                    <SelectItem value="250k-500k">$250,000 - $500,000</SelectItem>
                    <SelectItem value="over-500k">Over $500,000</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold mb-4">Additional Services</h3>
            <p className="text-gray-600 mb-6">Select any additional services you might need:</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                'Interior Design',
                'Landscaping',
                'Smart Home Integration',
                'Energy Efficiency Upgrades',
                'Project Management',
                'Permit Assistance',
                'Property Management',
                'Maintenance Services'
              ].map((service) => (
                <div key={service} className="flex items-center space-x-3">
                  <Checkbox
                    id={service}
                    checked={formData.additionalServices.includes(service)}
                    onCheckedChange={() => toggleService(service)}
                  />
                  <label htmlFor={service} className="text-sm font-medium text-gray-700 cursor-pointer">
                    {service}
                  </label>
                </div>
              ))}
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name *
                </label>
                <Input
                  required
                  value={formData.name}
                  onChange={(e) => handleChange('name', e.target.value)}
                  placeholder="Your full name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <Input
                  value={formData.phone}
                  onChange={(e) => handleChange('phone', e.target.value)}
                  placeholder="Your phone number"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email Address *
              </label>
              <Input
                type="email"
                required
                value={formData.email}
                onChange={(e) => handleChange('email', e.target.value)}
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Property Address
              </label>
              <Input
                value={formData.address}
                onChange={(e) => handleChange('address', e.target.value)}
                placeholder="Where is your project located?"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Additional Details
              </label>
              <Textarea
                rows={4}
                value={formData.description}
                onChange={(e) => handleChange('description', e.target.value)}
                placeholder="Tell us more about your project, specific requirements, or any questions you have..."
                className="resize-none"
              />
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-navy-900 to-navy-700">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Calculator className="mx-auto text-gold-400 mb-6" size={64} />
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">Get Your Quote</h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              Tell us about your project and we'll provide you with a detailed, personalized quote
            </p>
          </div>
        </div>
      </section>

      {/* Quote Form */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Progress Indicator */}
            <div className="mb-12">
              <div className="flex items-center justify-between mb-4">
                {[1, 2, 3, 4].map((step) => (
                  <div key={step} className="flex items-center">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
                      step <= currentStep
                        ? 'bg-gold-600 text-white'
                        : 'bg-gray-300 text-gray-600'
                    }`}>
                      {step < currentStep ? <CheckCircle size={20} /> : step}
                    </div>
                    {step < 4 && (
                      <div className={`flex-1 h-1 mx-4 ${
                        step < currentStep ? 'bg-gold-600' : 'bg-gray-300'
                      }`} />
                    )}
                  </div>
                ))}
              </div>
              <div className="text-center">
                <p className="text-gray-600">
                  Step {currentStep} of 4: {
                    currentStep === 1 ? 'Project Type' :
                    currentStep === 2 ? 'Project Details' :
                    currentStep === 3 ? 'Additional Services' :
                    'Contact Information'
                  }
                </p>
              </div>
            </div>

            <Card className="border-0 shadow-xl">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit}>
                  {renderStep()}

                  <div className="flex justify-between mt-8">
                    <Button
                      type="button"
                      variant="outline"
                      onClick={handleBack}
                      disabled={currentStep === 1}
                      className="px-6"
                    >
                      Back
                    </Button>
                    
                    {currentStep < 4 ? (
                      <Button
                        type="button"
                        onClick={handleNext}
                        className="bg-gold-600 hover:bg-gold-700 text-white px-6"
                        disabled={
                          (currentStep === 1 && (!formData.projectType || !formData.serviceType)) ||
                          (currentStep === 2 && (!formData.propertyType || !formData.projectSize))
                        }
                      >
                        Next
                      </Button>
                    ) : (
                      <Button
                        type="submit"
                        className="bg-gold-600 hover:bg-gold-700 text-white px-8"
                        disabled={!formData.name || !formData.email}
                      >
                        Submit Quote Request
                      </Button>
                    )}
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-navy-800 mb-4">Why Request a Quote?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { title: 'Accurate Pricing', desc: 'Get detailed, transparent pricing for your specific project' },
              { title: 'Expert Consultation', desc: 'Receive professional advice and recommendations' },
              { title: 'Fast Response', desc: 'Get your personalized quote within 24-48 hours' }
            ].map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="bg-gold-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                  <CheckCircle className="text-gold-600" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-navy-800 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Quote;
