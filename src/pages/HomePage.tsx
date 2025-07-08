import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useComplaintsStore } from '@/store/useComplaintsStore';
import { Volume2, FileText, BarChart3, AlertTriangle, Clock, TrendingUp } from 'lucide-react';
import { ComplaintCard } from '@/components/complaints/ComplaintCard';

export function HomePage() {
  const { complaints, reports } = useComplaintsStore();
  
  const recentComplaints = complaints.slice(0, 3);
  const pendingCount = complaints.filter(c => c.status === 'pending').length;
  const investigatingCount = complaints.filter(c => c.status === 'investigating').length;
  const resolvedCount = complaints.filter(c => c.status === 'resolved').length;
  const criticalAreas = reports.filter(r => r.status === 'high' || r.status === 'critical').length;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div 
        className="relative bg-cover bg-center h-96 flex items-center justify-center"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=1920&h=1080&fit=crop)'
        }}
      >
        <div className="text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            NoiseWatch
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Your voice for a quieter community. Report noise complaints and track resolutions.
          </p>
          <div className="space-x-4">
            <Link to="/complaints">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                <FileText className="mr-2 h-5 w-5" />
                File a Complaint
              </Button>
            </Link>
            <Link to="/reports">
              <Button size="lg" variant="outline" className="bg-white/10 border-white text-white hover:bg-white/20">
                <BarChart3 className="mr-2 h-5 w-5" />
                View Reports
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Statistics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <Card className="bg-yellow-50 border-yellow-200">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-yellow-800">Pending</p>
                  <p className="text-3xl font-bold text-yellow-900">{pendingCount}</p>
                </div>
                <Clock className="h-8 w-8 text-yellow-600" />
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-blue-50 border-blue-200">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-blue-800">Investigating</p>
                  <p className="text-3xl font-bold text-blue-900">{investigatingCount}</p>
                </div>
                <AlertTriangle className="h-8 w-8 text-blue-600" />
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-green-50 border-green-200">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-green-800">Resolved</p>
                  <p className="text-3xl font-bold text-green-900">{resolvedCount}</p>
                </div>
                <Volume2 className="h-8 w-8 text-green-600" />
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-red-50 border-red-200">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-red-800">Critical Areas</p>
                  <p className="text-3xl font-bold text-red-900">{criticalAreas}</p>
                </div>
                <TrendingUp className="h-8 w-8 text-red-600" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Link to="/complaints" className="block">
                <div className="p-6 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors cursor-pointer">
                  <FileText className="h-8 w-8 text-blue-600 mb-3" />
                  <h3 className="font-semibold text-blue-900 mb-2">Submit New Complaint</h3>
                  <p className="text-sm text-blue-700">Report a noise issue in your area</p>
                </div>
              </Link>
              
              <Link to="/reports" className="block">
                <div className="p-6 bg-green-50 rounded-lg hover:bg-green-100 transition-colors cursor-pointer">
                  <BarChart3 className="h-8 w-8 text-green-600 mb-3" />
                  <h3 className="font-semibold text-green-900 mb-2">View Noise Reports</h3>
                  <p className="text-sm text-green-700">Check noise levels in different areas</p>
                </div>
              </Link>
              
              <Link to="/guidelines" className="block">
                <div className="p-6 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors cursor-pointer">
                  <Volume2 className="h-8 w-8 text-purple-600 mb-3" />
                  <h3 className="font-semibold text-purple-900 mb-2">Noise Guidelines</h3>
                  <p className="text-sm text-purple-700">Learn about noise regulations and limits</p>
                </div>
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* Recent Complaints */}
        <div className="mb-12">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">Recent Complaints</h2>
            <Link to="/complaints">
              <Button variant="outline">View All Complaints</Button>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {recentComplaints.map((complaint) => (
              <ComplaintCard key={complaint.id} complaint={complaint} />
            ))}
          </div>
        </div>

        {/* Emergency Contact */}
        <Card className="bg-red-50 border-red-200">
          <CardContent className="p-6">
            <div className="flex items-center space-x-4">
              <AlertTriangle className="h-12 w-12 text-red-600" />
              <div>
                <h3 className="text-lg font-semibold text-red-900 mb-2">
                  Emergency Noise Issues?
                </h3>
                <p className="text-red-700 mb-3">
                  For urgent noise complaints that require immediate attention, please call our emergency hotline.
                </p>
                <div className="flex items-center space-x-4">
                  <Badge className="bg-red-600 text-white text-lg px-4 py-2">
                    📞 (555) 123-NOISE
                  </Badge>
                  <span className="text-sm text-red-600">Available 24/7</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}