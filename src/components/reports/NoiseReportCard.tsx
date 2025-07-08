import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { NoiseReport } from '@/types';
import { MapPin, Volume2, Clock, AlertTriangle } from 'lucide-react';
import { format } from 'date-fns';

interface NoiseReportCardProps {
  report: NoiseReport;
}

const statusColors = {
  normal: 'bg-green-100 text-green-800',
  elevated: 'bg-yellow-100 text-yellow-800',
  high: 'bg-orange-100 text-orange-800',
  critical: 'bg-red-100 text-red-800'
};

const statusIcons = {
  normal: '✅',
  elevated: '⚠️',
  high: '🔸',
  critical: '🚨'
};

export function NoiseReportCard({ report }: NoiseReportCardProps) {
  const getStatusDescription = (status: string) => {
    switch (status) {
      case 'normal': return 'Within acceptable limits';
      case 'elevated': return 'Slightly above normal';
      case 'high': return 'Significantly elevated';
      case 'critical': return 'Requires immediate attention';
      default: return 'Unknown status';
    }
  };

  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader className="pb-3">
        <div className="flex justify-between items-start">
          <div className="flex items-center space-x-2">
            <MapPin className="h-5 w-5 text-gray-500" />
            <CardTitle className="text-lg">{report.location}</CardTitle>
          </div>
          <Badge className={statusColors[report.status]}>
            <span className="mr-1">{statusIcons[report.status]}</span>
            {report.status.charAt(0).toUpperCase() + report.status.slice(1)}
          </Badge>
        </div>
        <p className="text-sm text-gray-600">{getStatusDescription(report.status)}</p>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-blue-50 p-3 rounded-lg">
            <div className="flex items-center space-x-2 mb-1">
              <Volume2 className="h-4 w-4 text-blue-600" />
              <span className="text-sm font-medium text-blue-800">Average Level</span>
            </div>
            <p className="text-2xl font-bold text-blue-700">{report.averageDecibels} dB</p>
          </div>
          
          <div className="bg-red-50 p-3 rounded-lg">
            <div className="flex items-center space-x-2 mb-1">
              <AlertTriangle className="h-4 w-4 text-red-600" />
              <span className="text-sm font-medium text-red-800">Peak Level</span>
            </div>
            <p className="text-2xl font-bold text-red-700">{report.peakDecibels} dB</p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
          <div className="flex items-center space-x-2">
            <Clock className="h-4 w-4 text-gray-500" />
            <span><strong>Time Range:</strong> {report.timeRange}</span>
          </div>
          
          <div className="flex items-center space-x-2">
            <AlertTriangle className="h-4 w-4 text-gray-500" />
            <span><strong>Complaints:</strong> {report.complaints}</span>
          </div>
        </div>
        
        <div className="pt-2 border-t">
          <p className="text-xs text-gray-500">
            Last updated: {format(report.lastUpdated, 'MMM dd, yyyy h:mm a')}
          </p>
        </div>
        
        {report.status === 'critical' && (
          <div className="bg-red-50 border-l-4 border-red-400 p-3 rounded">
            <div className="flex items-center space-x-2">
              <AlertTriangle className="h-4 w-4 text-red-600" />
              <p className="text-sm text-red-700 font-medium">
                Critical noise levels detected. Immediate action required.
              </p>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}