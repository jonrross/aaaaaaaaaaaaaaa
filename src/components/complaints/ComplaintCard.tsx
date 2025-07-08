import React from 'react';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { NoiseComplaint } from '@/types';
import { Calendar, MapPin, User, Volume2, Clock } from 'lucide-react';
import { format } from 'date-fns';

interface ComplaintCardProps {
  complaint: NoiseComplaint;
  onStatusUpdate?: (id: string, status: NoiseComplaint['status']) => void;
  showActions?: boolean;
}

const statusColors = {
  pending: 'bg-yellow-100 text-yellow-800',
  investigating: 'bg-blue-100 text-blue-800',
  resolved: 'bg-green-100 text-green-800',
  dismissed: 'bg-gray-100 text-gray-800'
};

const priorityColors = {
  low: 'bg-gray-100 text-gray-800',
  medium: 'bg-yellow-100 text-yellow-800',
  high: 'bg-orange-100 text-orange-800',
  urgent: 'bg-red-100 text-red-800'
};

const categoryIcons = {
  construction: '🏗️',
  traffic: '🚗',
  neighbor: '🏠',
  business: '🏢',
  event: '🎉',
  other: '📢'
};

export function ComplaintCard({ complaint, onStatusUpdate, showActions = false }: ComplaintCardProps) {
  return (
    <Card className="hover:shadow-md transition-shadow">
      <CardHeader className="pb-3">
        <div className="flex justify-between items-start">
          <div className="flex-1">
            <div className="flex items-center space-x-2 mb-2">
              <span className="text-lg">{categoryIcons[complaint.category]}</span>
              <h3 className="font-semibold text-lg">{complaint.title}</h3>
            </div>
            <p className="text-gray-600 text-sm mb-3">{complaint.description}</p>
          </div>
          <div className="flex flex-col space-y-2 ml-4">
            <Badge className={statusColors[complaint.status]}>
              {complaint.status.charAt(0).toUpperCase() + complaint.status.slice(1)}
            </Badge>
            <Badge className={priorityColors[complaint.priority]}>
              {complaint.priority.charAt(0).toUpperCase() + complaint.priority.slice(1)}
            </Badge>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-3">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
          <div className="flex items-center space-x-2">
            <MapPin className="h-4 w-4 text-gray-500" />
            <span>{complaint.address}</span>
          </div>
          
          <div className="flex items-center space-x-2">
            <User className="h-4 w-4 text-gray-500" />
            <span>{complaint.submittedBy}</span>
          </div>
          
          <div className="flex items-center space-x-2">
            <Calendar className="h-4 w-4 text-gray-500" />
            <span>{format(complaint.dateSubmitted, 'MMM dd, yyyy')}</span>
          </div>
          
          <div className="flex items-center space-x-2">
            <Clock className="h-4 w-4 text-gray-500" />
            <span>{format(complaint.timeOfIncident, 'MMM dd, h:mm a')}</span>
          </div>
          
          {complaint.decibels && (
            <div className="flex items-center space-x-2">
              <Volume2 className="h-4 w-4 text-gray-500" />
              <span>{complaint.decibels} dB</span>
            </div>
          )}
          
          {complaint.assignedOfficer && (
            <div className="flex items-center space-x-2">
              <User className="h-4 w-4 text-gray-500" />
              <span>Assigned: {complaint.assignedOfficer}</span>
            </div>
          )}
        </div>
        
        {complaint.notes && (
          <div className="bg-gray-50 p-3 rounded-md">
            <p className="text-sm text-gray-700">
              <strong>Notes:</strong> {complaint.notes}
            </p>
          </div>
        )}
        
        {complaint.resolutionNotes && (
          <div className="bg-green-50 p-3 rounded-md">
            <p className="text-sm text-green-700">
              <strong>Resolution:</strong> {complaint.resolutionNotes}
            </p>
            {complaint.resolvedDate && (
              <p className="text-xs text-green-600 mt-1">
                Resolved on {format(complaint.resolvedDate, 'MMM dd, yyyy')}
              </p>
            )}
          </div>
        )}
        
        {showActions && onStatusUpdate && complaint.status !== 'resolved' && (
          <div className="flex space-x-2 pt-2">
            {complaint.status === 'pending' && (
              <Button
                size="sm"
                onClick={() => onStatusUpdate(complaint.id, 'investigating')}
              >
                Start Investigation
              </Button>
            )}
            {complaint.status === 'investigating' && (
              <Button
                size="sm"
                variant="outline"
                onClick={() => onStatusUpdate(complaint.id, 'resolved')}
              >
                Mark Resolved
              </Button>
            )}
            <Button
              size="sm"
              variant="destructive"
              onClick={() => onStatusUpdate(complaint.id, 'dismissed')}
            >
              Dismiss
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
}