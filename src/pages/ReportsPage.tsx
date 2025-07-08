import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useComplaintsStore } from '@/store/useComplaintsStore';
import { NoiseReportCard } from '@/components/reports/NoiseReportCard';
import { BarChart3, TrendingUp, AlertTriangle, Volume2, MapPin } from 'lucide-react';

export function ReportsPage() {
  const { reports, complaints } = useComplaintsStore();
  
  const totalComplaints = complaints.length;
  const avgDecibels = Math.round(reports.reduce((acc, r) => acc + r.averageDecibels, 0) / reports.length);
  const criticalAreas = reports.filter(r => r.status === 'critical').length;
  const highNoiseAreas = reports.filter(r => r.status === 'high' || r.status === 'critical').length;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div 
        className="relative bg-cover bg-center h-64 flex items-center justify-center"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(https://images.unsplash.com/photo-1551808525-51a94da548ce?w=1920&h=600&fit=crop)'
        }}
      >
        <div className="text-center text-white max-w-3xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Noise Level Reports
          </h1>
          <p className="text-xl">
            Real-time monitoring and analysis of noise levels across different areas
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Overview Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <Card className="bg-blue-50 border-blue-200">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-blue-800">Total Complaints</p>
                  <p className="text-3xl font-bold text-blue-900">{totalComplaints}</p>
                </div>
                <BarChart3 className="h-8 w-8 text-blue-600" />
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-green-50 border-green-200">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-green-800">Avg. Noise Level</p>
                  <p className="text-3xl font-bold text-green-900">{avgDecibels} dB</p>
                </div>
                <Volume2 className="h-8 w-8 text-green-600" />
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-orange-50 border-orange-200">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-orange-800">High Noise Areas</p>
                  <p className="text-3xl font-bold text-orange-900">{highNoiseAreas}</p>
                </div>
                <TrendingUp className="h-8 w-8 text-orange-600" />
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
                <AlertTriangle className="h-8 w-8 text-red-600" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Noise Level Guide */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Volume2 className="h-5 w-5" />
              <span>Noise Level Reference Guide</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                <div className="flex items-center space-x-2 mb-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="font-medium text-green-800">Normal (0-55 dB)</span>
                </div>
                <p className="text-sm text-green-700">Quiet residential areas, libraries</p>
              </div>
              
              <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                <div className="flex items-center space-x-2 mb-2">
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <span className="font-medium text-yellow-800">Elevated (56-70 dB)</span>
                </div>
                <p className="text-sm text-yellow-700">Normal conversation, office environments</p>
              </div>
              
              <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
                <div className="flex items-center space-x-2 mb-2">
                  <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                  <span className="font-medium text-orange-800">High (71-85 dB)</span>
                </div>
                <p className="text-sm text-orange-700">City traffic, busy restaurants</p>
              </div>
              
              <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                <div className="flex items-center space-x-2 mb-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <span className="font-medium text-red-800">Critical (86+ dB)</span>
                </div>
                <p className="text-sm text-red-700">Heavy machinery, potential hearing damage</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Area Reports */}
        <div className="mb-8">
          <div className="flex items-center space-x-2 mb-6">
            <MapPin className="h-6 w-6 text-gray-600" />
            <h2 className="text-2xl font-bold">Area Noise Reports</h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {reports.map((report) => (
              <NoiseReportCard key={report.id} report={report} />
            ))}
          </div>
        </div>

        {/* Additional Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Monitoring Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                <div>
                  <p className="font-medium">Real-time Monitoring</p>
                  <p className="text-sm text-gray-600">Noise levels are monitored continuously using strategically placed sensors throughout the city.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                <div>
                  <p className="font-medium">Data Collection</p>
                  <p className="text-sm text-gray-600">Reports are updated every 15 minutes and include average, peak, and complaint data.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                <div>
                  <p className="font-medium">Alert System</p>
                  <p className="text-sm text-gray-600">Automatic alerts are sent to authorities when noise levels exceed safe thresholds.</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Health Impact Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                <h4 className="font-medium text-yellow-800 mb-2">Prolonged Exposure (70+ dB)</h4>
                <p className="text-sm text-yellow-700">May cause stress, sleep disturbance, and concentration issues.</p>
              </div>
              
              <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                <h4 className="font-medium text-red-800 mb-2">Dangerous Levels (85+ dB)</h4>
                <p className="text-sm text-red-700">Risk of permanent hearing damage with extended exposure.</p>
              </div>
              
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                <h4 className="font-medium text-blue-800 mb-2">Protection Recommended</h4>
                <p className="text-sm text-blue-700">Use hearing protection in areas consistently above 85 dB.</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}