import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { NoiseGuideline } from '@/types';
import { Volume2, Clock, AlertTriangle } from 'lucide-react';

interface GuidelineCardProps {
  guideline: NoiseGuideline;
}

const categoryColors: Record<string, string> = {
  residential: 'bg-green-100 text-green-800',
  commercial: 'bg-blue-100 text-blue-800',
  industrial: 'bg-purple-100 text-purple-800',
  construction: 'bg-orange-100 text-orange-800',
  event: 'bg-pink-100 text-pink-800'
};

export function GuidelineCard({ guideline }: GuidelineCardProps) {
  return (
    <Card className="hover:shadow-md transition-shadow">
      <CardHeader className="pb-3">
        <div className="flex justify-between items-start">
          <CardTitle className="text-lg">{guideline.title}</CardTitle>
          <Badge className={categoryColors[guideline.category] || 'bg-gray-100 text-gray-800'}>
            {guideline.category.charAt(0).toUpperCase() + guideline.category.slice(1)}
          </Badge>
        </div>
        <p className="text-gray-600 text-sm">{guideline.description}</p>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <div className="bg-blue-50 p-3 rounded-lg">
          <div className="flex items-center space-x-2 mb-1">
            <Volume2 className="h-4 w-4 text-blue-600" />
            <span className="text-sm font-medium text-blue-800">Maximum Noise Level</span>
          </div>
          <p className="text-2xl font-bold text-blue-700">{guideline.maxDecibels} dB</p>
        </div>
        
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <Clock className="h-4 w-4 text-gray-500" />
            <span className="text-sm font-medium">Time Restrictions:</span>
          </div>
          <p className="text-sm text-gray-700 pl-6">{guideline.timeRestrictions}</p>
        </div>
        
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <AlertTriangle className="h-4 w-4 text-gray-500" />
            <span className="text-sm font-medium">Penalties for Violations:</span>
          </div>
          <p className="text-sm text-gray-700 pl-6">{guideline.penalties}</p>
        </div>
      </CardContent>
    </Card>
  );
}