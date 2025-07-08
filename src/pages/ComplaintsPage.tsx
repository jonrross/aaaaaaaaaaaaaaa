import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { useComplaintsStore } from '@/store/useComplaintsStore';
import { ComplaintCard } from '@/components/complaints/ComplaintCard';
import { ComplaintForm } from '@/components/complaints/ComplaintForm';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Search, Filter, Plus, FileText } from 'lucide-react';
import { NoiseComplaint } from '@/types';

export function ComplaintsPage() {
  const { complaints, updateComplaintStatus, searchComplaints } = useComplaintsStore();
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [priorityFilter, setPriorityFilter] = useState<string>('all');
  const [isFormOpen, setIsFormOpen] = useState(false);

  const filteredComplaints = React.useMemo(() => {
    let filtered = searchQuery ? searchComplaints(searchQuery) : complaints;
    
    if (statusFilter !== 'all') {
      filtered = filtered.filter(c => c.status === statusFilter);
    }
    
    if (priorityFilter !== 'all') {
      filtered = filtered.filter(c => c.priority === priorityFilter);
    }
    
    return filtered.sort((a, b) => 
      new Date(b.dateSubmitted).getTime() - new Date(a.dateSubmitted).getTime()
    );
  }, [complaints, searchQuery, statusFilter, priorityFilter, searchComplaints]);

  const handleStatusUpdate = (id: string, status: NoiseComplaint['status']) => {
    updateComplaintStatus(id, status);
  };

  const statusCounts = {
    pending: complaints.filter(c => c.status === 'pending').length,
    investigating: complaints.filter(c => c.status === 'investigating').length,
    resolved: complaints.filter(c => c.status === 'resolved').length,
    dismissed: complaints.filter(c => c.status === 'dismissed').length
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-8">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Noise Complaints</h1>
              <p className="text-gray-600">Manage and track noise complaints in your community</p>
            </div>
            <Dialog open={isFormOpen} onOpenChange={setIsFormOpen}>
              <DialogTrigger asChild>
                <Button className="bg-blue-600 hover:bg-blue-700">
                  <Plus className="mr-2 h-4 w-4" />
                  New Complaint
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle>Submit New Complaint</DialogTitle>
                </DialogHeader>
                <ComplaintForm onSubmit={() => setIsFormOpen(false)} />
              </DialogContent>
            </Dialog>
          </div>

          {/* Status Overview */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-yellow-800">Pending</span>
                <Badge className="bg-yellow-100 text-yellow-800">{statusCounts.pending}</Badge>
              </div>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-blue-800">Investigating</span>
                <Badge className="bg-blue-100 text-blue-800">{statusCounts.investigating}</Badge>
              </div>
            </div>
            <div className="bg-green-50 p-4 rounded-lg border border-green-200">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-green-800">Resolved</span>
                <Badge className="bg-green-100 text-green-800">{statusCounts.resolved}</Badge>
              </div>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-800">Dismissed</span>
                <Badge className="bg-gray-100 text-gray-800">{statusCounts.dismissed}</Badge>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Filters */}
        <div className="bg-white p-6 rounded-lg shadow-sm border mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search complaints..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            
            <div className="flex gap-4">
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="w-40">
                  <Filter className="mr-2 h-4 w-4" />
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="pending">Pending</SelectItem>
                  <SelectItem value="investigating">Investigating</SelectItem>
                  <SelectItem value="resolved">Resolved</SelectItem>
                  <SelectItem value="dismissed">Dismissed</SelectItem>
                </SelectContent>
              </Select>
              
              <Select value={priorityFilter} onValueChange={setPriorityFilter}>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Priority" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Priority</SelectItem>
                  <SelectItem value="low">Low</SelectItem>
                  <SelectItem value="medium">Medium</SelectItem>
                  <SelectItem value="high">High</SelectItem>
                  <SelectItem value="urgent">Urgent</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {/* Complaints List */}
        {filteredComplaints.length === 0 ? (
          <div className="text-center py-12">
            <FileText className="mx-auto h-12 w-12 text-gray-400 mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No complaints found</h3>
            <p className="text-gray-600 mb-4">
              {searchQuery || statusFilter !== 'all' || priorityFilter !== 'all'
                ? "Try adjusting your search or filter criteria."
                : "No complaints have been submitted yet."}
            </p>
            <Dialog open={isFormOpen} onOpenChange={setIsFormOpen}>
              <DialogTrigger asChild>
                <Button>
                  <Plus className="mr-2 h-4 w-4" />
                  Submit First Complaint
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle>Submit New Complaint</DialogTitle>
                </DialogHeader>
                <ComplaintForm onSubmit={() => setIsFormOpen(false)} />
              </DialogContent>
            </Dialog>
          </div>
        ) : (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <p className="text-gray-600">
                Showing {filteredComplaints.length} complaint{filteredComplaints.length !== 1 ? 's' : ''}
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {filteredComplaints.map((complaint) => (
                <ComplaintCard
                  key={complaint.id}
                  complaint={complaint}
                  onStatusUpdate={handleStatusUpdate}
                  showActions={true}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}