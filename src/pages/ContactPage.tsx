import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Phone, Mail, MapPin, Clock, AlertTriangle, MessageSquare } from 'lucide-react';

export function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div 
        className="relative bg-cover bg-center h-64 flex items-center justify-center"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1920&h=600&fit=crop)'
        }}
      >
        <div className="text-center text-white max-w-3xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Contact NoiseWatch
          </h1>
          <p className="text-xl">
            Get help with noise complaints, reporting violations, or general inquiries
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Emergency Contact */}
        <Card className="mb-12 bg-red-50 border-red-200">
          <CardContent className="p-6">
            <div className="flex items-center justify-center space-x-4">
              <AlertTriangle className="h-12 w-12 text-red-600" />
              <div className="text-center">
                <h2 className="text-2xl font-bold text-red-900 mb-2">
                  Emergency Noise Violations
                </h2>
                <p className="text-red-700 mb-4">
                  For urgent noise complaints requiring immediate attention
                </p>
                <div className="flex flex-col md:flex-row items-center justify-center space-y-2 md:space-y-0 md:space-x-4">
                  <Badge className="bg-red-600 text-white text-xl px-6 py-3">
                    📞 (555) 123-NOISE
                  </Badge>
                  <span className="text-red-600 font-medium">Available 24/7</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
              
              <div className="space-y-6">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <Phone className="h-6 w-6 text-blue-600 mt-1" />
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-2">Phone Support</h3>
                        <div className="space-y-1 text-sm">
                          <p><strong>General Inquiries:</strong> (555) 123-4567</p>
                          <p><strong>Noise Complaints:</strong> (555) 123-NOISE</p>
                          <p><strong>Department Direct:</strong> (555) 123-ENV1</p>
                        </div>
                        <div className="mt-3 flex items-center space-x-2">
                          <Clock className="h-4 w-4 text-gray-500" />
                          <span className="text-sm text-gray-600">Mon-Fri: 8 AM - 6 PM</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <Mail className="h-6 w-6 text-green-600 mt-1" />
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-2">Email Support</h3>
                        <div className="space-y-1 text-sm">
                          <p><strong>General:</strong> info@noisewatch.gov</p>
                          <p><strong>Complaints:</strong> noise@noisewatch.gov</p>
                          <p><strong>Technical:</strong> support@noisewatch.gov</p>
                        </div>
                        <p className="text-sm text-gray-600 mt-3">
                          Response within 24 hours during business days
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <MapPin className="h-6 w-6 text-purple-600 mt-1" />
                      <div>
                        <h3 className="font-semibent text-gray-900 mb-2">Office Location</h3>
                        <div className="text-sm space-y-1">
                          <p>Environmental Services Department</p>
                          <p>123 City Hall Drive, Suite 200</p>
                          <p>Metropolitan City, MC 12345</p>
                        </div>
                        <div className="mt-3">
                          <p className="text-sm text-gray-600">
                            <strong>Office Hours:</strong> Monday - Friday, 8:00 AM - 5:00 PM
                          </p>
                          <p className="text-sm text-gray-600">
                            <strong>Public Counter:</strong> 9:00 AM - 4:00 PM
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
            
            {/* Department Information */}
            <Card>
              <CardHeader>
                <CardTitle>Department Contacts</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <h4 className="font-medium text-blue-900 mb-2">Noise Enforcement</h4>
                    <p className="text-sm text-blue-700">Officer Sarah Martinez</p>
                    <p className="text-sm text-blue-700">ext. 2301</p>
                  </div>
                  
                  <div className="p-4 bg-green-50 rounded-lg">
                    <h4 className="font-medium text-green-900 mb-2">Environmental Health</h4>
                    <p className="text-sm text-green-700">Dr. Michael Chen</p>
                    <p className="text-sm text-green-700">ext. 2405</p>
                  </div>
                  
                  <div className="p-4 bg-purple-50 rounded-lg">
                    <h4 className="font-medium text-purple-900 mb-2">Permits & Licensing</h4>
                    <p className="text-sm text-purple-700">Emma Rodriguez</p>
                    <p className="text-sm text-purple-700">ext. 2156</p>
                  </div>
                  
                  <div className="p-4 bg-orange-50 rounded-lg">
                    <h4 className="font-medium text-orange-900 mb-2">Public Relations</h4>
                    <p className="text-sm text-orange-700">James Wilson</p>
                    <p className="text-sm text-orange-700">ext. 2089</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Contact Form */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <MessageSquare className="h-5 w-5" />
                  <span>Send us a Message</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">First Name</label>
                      <Input placeholder="Your first name" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Last Name</label>
                      <Input placeholder="Your last name" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Email Address</label>
                    <Input type="email" placeholder="your.email@example.com" />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Phone Number (Optional)</label>
                    <Input placeholder="(555) 123-4567" />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Subject</label>
                    <Input placeholder="Brief description of your inquiry" />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Message</label>
                    <Textarea 
                      placeholder="Please provide details about your inquiry or concern..."
                      rows={6}
                    />
                  </div>
                  
                  <Button className="w-full">
                    Send Message
                  </Button>
                </form>
                
                <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                  <p className="text-sm text-gray-600">
                    <strong>Note:</strong> For urgent noise complaints, please call our 24/7 hotline at 
                    (555) 123-NOISE instead of using this form.
                  </p>
                </div>
              </CardContent>
            </Card>
            
            {/* FAQ */}
            <Card className="mt-8">
              <CardHeader>
                <CardTitle>Frequently Asked Questions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-medium mb-2">How long does it take to respond to complaints?</h4>
                  <p className="text-sm text-gray-600">
                    Non-emergency complaints are typically investigated within 24-48 hours. 
                    Emergency situations receive immediate response.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-medium mb-2">Can I remain anonymous when filing a complaint?</h4>
                  <p className="text-sm text-gray-600">
                    Yes, you can file anonymous complaints, though providing contact information 
                    helps us follow up and provide updates on the resolution.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-medium mb-2">What information should I include in my complaint?</h4>
                  <p className="text-sm text-gray-600">
                    Include the exact location, time of incident, type of noise, and any other 
                    relevant details that can help our officers investigate effectively.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}