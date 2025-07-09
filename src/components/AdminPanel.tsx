
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import { 
  Shield, 
  Users, 
  FileText, 
  Settings, 
  LogOut, 
  Eye, 
  Edit, 
  Trash2,
  Plus,
  BarChart3,
  Mail,
  Phone,
  Home,
  Wrench,
  Paintbrush,
  Landmark,
  Hammer,
  Save,
  X,
  Upload,
  Building
} from 'lucide-react';

interface AdminPanelProps {
  onLogout: () => void;
}

// Mock data structures
interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
  features: string[];
  image: string;
}

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  year: string;
  location: string;
  image: string;
}

interface Rental {
  id: number;
  title: string;
  type: string;
  price: number;
  bedrooms: number;
  bathrooms: number;
  area: number;
  location: string;
  image: string;
  features: string[];
}

export const AdminPanel: React.FC<AdminPanelProps> = ({ onLogout }) => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<any>(null);
  const [editingType, setEditingType] = useState<'service' | 'project' | 'rental' | null>(null);

  const form = useForm();

  // Mock data - in real app, this would come from your backend/database
  const [services, setServices] = useState<Service[]>([
    {
      id: 1,
      title: 'House Construction & Engineering',
      description: 'End-to-end construction solutions using modern techniques and expert engineering guidance.',
      icon: 'Hammer',
      features: ['Customized Residential Plans', 'Modern Architecture & Design', 'Structural Engineering & Supervision', 'Earthquake Resistant Buildings'],
      image: '../images/house-constructionan.jpg'
    },
    {
      id: 2,
      title: 'Land Buying & Selling',
      description: 'Transparent and verified land trading service ensuring legality, valuation, and documentation.',
      icon: 'Landmark',
      features: ['Land Ownership Verification', 'Fair Market Valuation', 'Secure Legal Transfers', 'Urban & Rural Property Deals'],
      image: '../images/land-selling.jpg'
    }
  ]);

  const [projects, setProjects] = useState<Project[]>([
    {
      id: 1,
      title: 'Luxury Residential Complex',
      category: 'construction',
      description: 'Modern 50-unit residential complex with premium amenities',
      year: '2023',
      location: 'Downtown District',
      image: 'photo-1487958449943-2429e8be8625'
    },
    {
      id: 2,
      title: 'Historic Building Restoration',
      category: 'renovation',
      description: 'Complete restoration of a 19th-century heritage building',
      year: '2023',
      location: 'Heritage Quarter',
      image: 'photo-1518005020951-eccb494ad742'
    }
  ]);

  const [rentals, setRentals] = useState<Rental[]>([
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
    }
  ]);

  const stats = [
    { label: 'Total Users', value: '1,234', icon: Users, color: 'bg-blue-500' },
    { label: 'Active Projects', value: projects.length.toString(), icon: FileText, color: 'bg-green-500' },
    { label: 'Total Services', value: services.length.toString(), icon: Wrench, color: 'bg-yellow-500' },
    { label: 'Available Rentals', value: rentals.length.toString(), icon: Home, color: 'bg-purple-500' },
  ];

  const handleEdit = (item: any, type: 'service' | 'project' | 'rental') => {
    setEditingItem(item);
    setEditingType(type);
    form.reset(item);
    setIsEditModalOpen(true);
  };

  const handleDelete = (id: number, type: 'service' | 'project' | 'rental') => {
    if (confirm('Are you sure you want to delete this item?')) {
      switch (type) {
        case 'service':
          setServices(services.filter(s => s.id !== id));
          break;
        case 'project':
          setProjects(projects.filter(p => p.id !== id));
          break;
        case 'rental':
          setRentals(rentals.filter(r => r.id !== id));
          break;
      }
    }
  };

  const handleSave = (data: any) => {
    if (!editingType) return;

    if (editingItem) {
      // Update existing item
      switch (editingType) {
        case 'service':
          setServices(services.map(s => s.id === editingItem.id ? { ...s, ...data } : s));
          break;
        case 'project':
          setProjects(projects.map(p => p.id === editingItem.id ? { ...p, ...data } : p));
          break;
        case 'rental':
          setRentals(rentals.map(r => r.id === editingItem.id ? { ...r, ...data } : r));
          break;
      }
    } else {
      // Add new item
      const newId = Date.now();
      switch (editingType) {
        case 'service':
          setServices([...services, { ...data, id: newId, features: data.features?.split(',') || [] }]);
          break;
        case 'project':
          setProjects([...projects, { ...data, id: newId }]);
          break;
        case 'rental':
          setRentals([...rentals, { ...data, id: newId, features: data.features?.split(',') || [] }]);
          break;
      }
    }
    setIsEditModalOpen(false);
    setEditingItem(null);
    setEditingType(null);
  };

  const handleAddNew = (type: 'service' | 'project' | 'rental') => {
    setEditingItem(null);
    setEditingType(type);
    form.reset({});
    setIsEditModalOpen(true);
  };

  return (
    <div className="fixed inset-0 bg-white z-50 overflow-auto">
      {/* Header */}
      <div className="bg-gradient-to-r from-emerald-600 to-green-600 text-white p-4 shadow-lg">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
              <Shield className="w-5 h-5" />
            </div>
            <div>
              <h1 className="text-xl font-bold">Admin Dashboard</h1>
              <p className="text-emerald-100 text-sm">Real Estate Crafters Management</p>
            </div>
          </div>
          <Button
            onClick={onLogout}
            variant="outline"
            className="bg-white/10 border-white/20 text-white hover:bg-white/20"
          >
            <LogOut className="w-4 h-4 mr-2" />
            Logout
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto p-6">
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-5 mb-6">
            <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
            <TabsTrigger value="services">Services</TabsTrigger>
            <TabsTrigger value="projects">Projects</TabsTrigger>
            <TabsTrigger value="rentals">Rentals</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>

          <TabsContent value="dashboard" className="space-y-6">
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {stats.map((stat, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-600">{stat.label}</p>
                        <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                      </div>
                      <div className={`w-12 h-12 ${stat.color} rounded-full flex items-center justify-center`}>
                        <stat.icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Button onClick={() => handleAddNew('service')} className="bg-emerald-600 hover:bg-emerald-700">
                    <Plus className="w-4 h-4 mr-2" />
                    Add New Service
                  </Button>
                  <Button onClick={() => handleAddNew('project')} className="bg-blue-600 hover:bg-blue-700">
                    <Plus className="w-4 h-4 mr-2" />
                    Add New Project
                  </Button>
                  <Button onClick={() => handleAddNew('rental')} className="bg-purple-600 hover:bg-purple-700">
                    <Plus className="w-4 h-4 mr-2" />
                    Add New Rental
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="services" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">Services Management</h2>
              <Button onClick={() => handleAddNew('service')} className="bg-emerald-600 hover:bg-emerald-700">
                <Plus className="w-4 h-4 mr-2" />
                Add Service
              </Button>
            </div>
            
            <Card>
              <CardContent className="p-6">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Title</TableHead>
                      <TableHead>Description</TableHead>
                      <TableHead>Features</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {services.map((service) => (
                      <TableRow key={service.id}>
                        <TableCell className="font-medium">{service.title}</TableCell>
                        <TableCell className="max-w-md truncate">{service.description}</TableCell>
                        <TableCell>
                          <Badge variant="outline">{service.features.length} features</Badge>
                        </TableCell>
                        <TableCell>
                          <div className="flex gap-2">
                            <Button size="sm" variant="outline" onClick={() => handleEdit(service, 'service')}>
                              <Edit className="w-4 h-4" />
                            </Button>
                            <Button size="sm" variant="outline" className="text-red-600 hover:text-red-700" onClick={() => handleDelete(service.id, 'service')}>
                              <Trash2 className="w-4 h-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="projects" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">Projects Management</h2>
              <Button onClick={() => handleAddNew('project')} className="bg-emerald-600 hover:bg-emerald-700">
                <Plus className="w-4 h-4 mr-2" />
                Add Project
              </Button>
            </div>
            
            <Card>
              <CardContent className="p-6">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Title</TableHead>
                      <TableHead>Category</TableHead>
                      <TableHead>Location</TableHead>
                      <TableHead>Year</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {projects.map((project) => (
                      <TableRow key={project.id}>
                        <TableCell className="font-medium">{project.title}</TableCell>
                        <TableCell>
                          <Badge variant="outline">{project.category}</Badge>
                        </TableCell>
                        <TableCell>{project.location}</TableCell>
                        <TableCell>{project.year}</TableCell>
                        <TableCell>
                          <div className="flex gap-2">
                            <Button size="sm" variant="outline" onClick={() => handleEdit(project, 'project')}>
                              <Edit className="w-4 h-4" />
                            </Button>
                            <Button size="sm" variant="outline" className="text-red-600 hover:text-red-700" onClick={() => handleDelete(project.id, 'project')}>
                              <Trash2 className="w-4 h-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="rentals" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">Rentals Management</h2>
              <Button onClick={() => handleAddNew('rental')} className="bg-emerald-600 hover:bg-emerald-700">
                <Plus className="w-4 h-4 mr-2" />
                Add Rental
              </Button>
            </div>
            
            <Card>
              <CardContent className="p-6">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Title</TableHead>
                      <TableHead>Type</TableHead>
                      <TableHead>Price</TableHead>
                      <TableHead>Location</TableHead>
                      <TableHead>Details</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {rentals.map((rental) => (
                      <TableRow key={rental.id}>
                        <TableCell className="font-medium">{rental.title}</TableCell>
                        <TableCell>
                          <Badge variant="outline">{rental.type}</Badge>
                        </TableCell>
                        <TableCell>NPR {rental.price.toLocaleString()}</TableCell>
                        <TableCell>{rental.location}</TableCell>
                        <TableCell>
                          <div className="text-sm text-gray-600">
                            {rental.bedrooms}BR • {rental.bathrooms}BA • {rental.area}sq ft
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex gap-2">
                            <Button size="sm" variant="outline" onClick={() => handleEdit(rental, 'rental')}>
                              <Edit className="w-4 h-4" />
                            </Button>
                            <Button size="sm" variant="outline" className="text-red-600 hover:text-red-700" onClick={() => handleDelete(rental.id, 'rental')}>
                              <Trash2 className="w-4 h-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="settings" className="space-y-6">
            <h2 className="text-2xl font-bold">Website Settings</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Company Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Company Name</label>
                    <Input defaultValue="Real Estate Crafters International Pvt. Ltd." />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Phone</label>
                    <Input defaultValue="9807362231" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <Input defaultValue="realestatecrafters1@gmail.com" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Address</label>
                    <Textarea defaultValue="Dhanusha District, Janakpurdham, Nepal" />
                  </div>
                  <Button className="bg-emerald-600 hover:bg-emerald-700">
                    <Save className="w-4 h-4 mr-2" />
                    Save Changes
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Website Statistics</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Years of Experience</label>
                    <Input defaultValue="5" type="number" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Total Projects</label>
                    <Input defaultValue="50" type="number" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Happy Clients</label>
                    <Input defaultValue="70" type="number" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Success Rate</label>
                    <Input defaultValue="100" type="number" />
                  </div>
                  <Button className="bg-emerald-600 hover:bg-emerald-700">
                    <Save className="w-4 h-4 mr-2" />
                    Update Stats
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Edit/Add Modal */}
      <Dialog open={isEditModalOpen} onOpenChange={setIsEditModalOpen}>
        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>
              {editingItem ? 'Edit' : 'Add'} {editingType?.charAt(0).toUpperCase() + editingType?.slice(1)}
            </DialogTitle>
          </DialogHeader>
          
          <Form {...form}>
            <form onSubmit={form.handleSubmit(handleSave)} className="space-y-4">
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Title</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Description</FormLabel>
                    <FormControl>
                      <Textarea {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {editingType === 'service' && (
                <>
                  <FormField
                    control={form.control}
                    name="features"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Features (comma-separated)</FormLabel>
                        <FormControl>
                          <Textarea 
                            {...field} 
                            value={Array.isArray(field.value) ? field.value.join(', ') : field.value}
                            placeholder="Feature 1, Feature 2, Feature 3"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="image"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Image URL</FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </>
              )}

              {editingType === 'project' && (
                <>
                  <div className="grid grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="category"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Category</FormLabel>
                          <FormControl>
                            <Input {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="year"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Year</FormLabel>
                          <FormControl>
                            <Input {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <FormField
                    control={form.control}
                    name="location"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Location</FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="image"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Image URL</FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </>
              )}

              {editingType === 'rental' && (
                <>
                  <div className="grid grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="type"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Type</FormLabel>
                          <FormControl>
                            <Input {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="price"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Price (NPR)</FormLabel>
                          <FormControl>
                            <Input {...field} type="number" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    <FormField
                      control={form.control}
                      name="bedrooms"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Bedrooms</FormLabel>
                          <FormControl>
                            <Input {...field} type="number" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="bathrooms"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Bathrooms</FormLabel>
                          <FormControl>
                            <Input {...field} type="number" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="area"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Area (sq ft)</FormLabel>
                          <FormControl>
                            <Input {...field} type="number" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <FormField
                    control={form.control}
                    name="location"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Location</FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="features"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Features (comma-separated)</FormLabel>
                        <FormControl>
                          <Textarea 
                            {...field} 
                            value={Array.isArray(field.value) ? field.value.join(', ') : field.value}
                            placeholder="Feature 1, Feature 2, Feature 3"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="image"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Image URL</FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </>
              )}

              <div className="flex justify-end gap-2 pt-4">
                <Button type="button" variant="outline" onClick={() => setIsEditModalOpen(false)}>
                  <X className="w-4 h-4 mr-2" />
                  Cancel
                </Button>
                <Button type="submit" className="bg-emerald-600 hover:bg-emerald-700">
                  <Save className="w-4 h-4 mr-2" />
                  Save
                </Button>
              </div>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
    </div>
  );
};
