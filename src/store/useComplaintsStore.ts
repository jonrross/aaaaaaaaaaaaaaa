import { create } from 'zustand';
import { NoiseComplaint, NoiseReport } from '@/types';

interface ComplaintsState {
  complaints: NoiseComplaint[];
  reports: NoiseReport[];
  isLoading: boolean;
  addComplaint: (complaint: Omit<NoiseComplaint, 'id' | 'dateSubmitted'>) => void;
  updateComplaintStatus: (id: string, status: NoiseComplaint['status'], notes?: string) => void;
  getComplaintsByStatus: (status: NoiseComplaint['status']) => NoiseComplaint[];
  searchComplaints: (query: string) => NoiseComplaint[];
}

// Mock data
const mockComplaints: NoiseComplaint[] = [
  {
    id: '1',
    title: 'Loud Construction Work',
    description: 'Construction site operating heavy machinery beyond permitted hours',
    location: 'Downtown District',
    address: '123 Main Street',
    submittedBy: 'Sarah Johnson',
    email: 'sarah.j@email.com',
    phone: '(555) 123-4567',
    dateSubmitted: new Date('2024-01-15'),
    status: 'investigating',
    priority: 'high',
    category: 'construction',
    timeOfIncident: new Date('2024-01-15T06:30:00'),
    decibels: 85,
    assignedOfficer: 'Officer Smith',
    notes: 'Multiple complaints from nearby residents'
  },
  {
    id: '2',
    title: 'Neighbor Party Noise',
    description: 'Loud music and shouting from apartment next door',
    location: 'Residential Area North',
    address: '456 Oak Avenue',
    submittedBy: 'Michael Chen',
    email: 'michael.chen@email.com',
    dateSubmitted: new Date('2024-01-16'),
    status: 'pending',
    priority: 'medium',
    category: 'neighbor',
    timeOfIncident: new Date('2024-01-15T23:00:00'),
    decibels: 75
  },
  {
    id: '3',
    title: 'Traffic Noise from Highway',
    description: 'Increased traffic noise due to construction detour',
    location: 'Quiet Residential Zone',
    address: '789 Pine Street',
    submittedBy: 'Emma Wilson',
    email: 'emma.wilson@email.com',
    dateSubmitted: new Date('2024-01-14'),
    status: 'resolved',
    priority: 'low',
    category: 'traffic',
    timeOfIncident: new Date('2024-01-14T07:00:00'),
    decibels: 70,
    assignedOfficer: 'Officer Davis',
    resolutionNotes: 'Traffic rerouted back to main highway',
    resolvedDate: new Date('2024-01-16')
  }
];

const mockReports: NoiseReport[] = [
  {
    id: '1',
    location: 'Downtown District',
    averageDecibels: 68,
    peakDecibels: 85,
    timeRange: '6 AM - 10 PM',
    complaints: 12,
    status: 'elevated',
    lastUpdated: new Date()
  },
  {
    id: '2',
    location: 'Residential Area North',
    averageDecibels: 55,
    peakDecibels: 75,
    timeRange: '24 hours',
    complaints: 3,
    status: 'normal',
    lastUpdated: new Date()
  },
  {
    id: '3',
    location: 'Business District',
    averageDecibels: 72,
    peakDecibels: 90,
    timeRange: '7 AM - 11 PM',
    complaints: 8,
    status: 'high',
    lastUpdated: new Date()
  }
];

export const useComplaintsStore = create<ComplaintsState>((set, get) => ({
  complaints: mockComplaints,
  reports: mockReports,
  isLoading: false,
  
  addComplaint: (complaint) => {
    const newComplaint: NoiseComplaint = {
      ...complaint,
      id: Date.now().toString(),
      dateSubmitted: new Date(),
      status: 'pending'
    };
    
    set((state) => ({
      complaints: [newComplaint, ...state.complaints]
    }));
  },
  
  updateComplaintStatus: (id, status, notes) => {
    set((state) => ({
      complaints: state.complaints.map(complaint => 
        complaint.id === id 
          ? { 
              ...complaint, 
              status, 
              resolutionNotes: notes,
              resolvedDate: status === 'resolved' ? new Date() : complaint.resolvedDate
            }
          : complaint
      )
    }));
  },
  
  getComplaintsByStatus: (status) => {
    return get().complaints.filter(complaint => complaint.status === status);
  },
  
  searchComplaints: (query) => {
    const { complaints } = get();
    const lowercaseQuery = query.toLowerCase();
    
    return complaints.filter(complaint => 
      complaint.title.toLowerCase().includes(lowercaseQuery) ||
      complaint.description.toLowerCase().includes(lowercaseQuery) ||
      complaint.location.toLowerCase().includes(lowercaseQuery) ||
      complaint.submittedBy.toLowerCase().includes(lowercaseQuery)
    );
  }
}));