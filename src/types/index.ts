export interface NoiseComplaint {
  id: string;
  title: string;
  description: string;
  location: string;
  address: string;
  submittedBy: string;
  email: string;
  phone?: string;
  dateSubmitted: Date;
  status: 'pending' | 'investigating' | 'resolved' | 'dismissed';
  priority: 'low' | 'medium' | 'high' | 'urgent';
  category: 'construction' | 'traffic' | 'neighbor' | 'business' | 'event' | 'other';
  timeOfIncident: Date;
  decibels?: number;
  images?: string[];
  notes?: string;
  assignedOfficer?: string;
  resolutionNotes?: string;
  resolvedDate?: Date;
}

export interface NoiseReport {
  id: string;
  location: string;
  averageDecibels: number;
  peakDecibels: number;
  timeRange: string;
  complaints: number;
  status: 'normal' | 'elevated' | 'high' | 'critical';
  lastUpdated: Date;
}

export interface NoiseGuideline {
  id: string;
  title: string;
  description: string;
  maxDecibels: number;
  timeRestrictions: string;
  category: string;
  penalties: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: 'citizen' | 'officer' | 'admin';
  avatar?: string;
}