import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { useComplaintsStore } from '@/store/useComplaintsStore';
import { NoiseComplaint } from '@/types';
import { toast } from 'sonner';

const complaintSchema = z.object({
  title: z.string().min(5, 'Title must be at least 5 characters'),
  description: z.string().min(20, 'Description must be at least 20 characters'),
  location: z.string().min(3, 'Location is required'),
  address: z.string().min(5, 'Address is required'),
  submittedBy: z.string().min(2, 'Name is required'),
  email: z.string().email('Valid email is required'),
  phone: z.string().optional(),
  category: z.enum(['construction', 'traffic', 'neighbor', 'business', 'event', 'other']),
  priority: z.enum(['low', 'medium', 'high', 'urgent']),
  timeOfIncident: z.string().min(1, 'Time of incident is required'),
  decibels: z.string().optional(),
  notes: z.string().optional()
});

type ComplaintFormData = z.infer<typeof complaintSchema>;

interface ComplaintFormProps {
  onSubmit?: () => void;
}

export function ComplaintForm({ onSubmit }: ComplaintFormProps) {
  const { addComplaint } = useComplaintsStore();
  
  const { register, handleSubmit, formState: { errors }, setValue, reset } = useForm<ComplaintFormData>({
    resolver: zodResolver(complaintSchema)
  });

  const onFormSubmit = (data: ComplaintFormData) => {
    const complaint: Omit<NoiseComplaint, 'id' | 'dateSubmitted'> = {
      ...data,
      timeOfIncident: new Date(data.timeOfIncident),
      decibels: data.decibels ? parseInt(data.decibels) : undefined,
      status: 'pending',
      priority: data.priority
    };
    
    addComplaint(complaint);
    toast.success('Complaint submitted successfully!');
    reset();
    onSubmit?.();
  };

  return (
    <Card className="max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>Submit Noise Complaint</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onFormSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="submittedBy">Your Name</Label>
              <Input
                id="submittedBy"
                {...register('submittedBy')}
                placeholder="John Doe"
              />
              {errors.submittedBy && (
                <p className="text-sm text-red-600">{errors.submittedBy.message}</p>
              )}
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                type="email"
                {...register('email')}
                placeholder="john@example.com"
              />
              {errors.email && (
                <p className="text-sm text-red-600">{errors.email.message}</p>
              )}
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number (Optional)</Label>
              <Input
                id="phone"
                {...register('phone')}
                placeholder="(555) 123-4567"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="timeOfIncident">Time of Incident</Label>
              <Input
                id="timeOfIncident"
                type="datetime-local"
                {...register('timeOfIncident')}
              />
              {errors.timeOfIncident && (
                <p className="text-sm text-red-600">{errors.timeOfIncident.message}</p>
              )}
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="title">Complaint Title</Label>
            <Input
              id="title"
              {...register('title')}
              placeholder="Brief description of the noise issue"
            />
            {errors.title && (
              <p className="text-sm text-red-600">{errors.title.message}</p>
            )}
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="description">Detailed Description</Label>
            <Textarea
              id="description"
              {...register('description')}
              placeholder="Provide a detailed description of the noise complaint..."
              rows={4}
            />
            {errors.description && (
              <p className="text-sm text-red-600">{errors.description.message}</p>
            )}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="location">Location/Area</Label>
              <Input
                id="location"
                {...register('location')}
                placeholder="Downtown District"
              />
              {errors.location && (
                <p className="text-sm text-red-600">{errors.location.message}</p>
              )}
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="address">Specific Address</Label>
              <Input
                id="address"
                {...register('address')}
                placeholder="123 Main Street"
              />
              {errors.address && (
                <p className="text-sm text-red-600">{errors.address.message}</p>
              )}
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label>Category</Label>
              <Select onValueChange={(value) => setValue('category', value as any)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="construction">🏗️ Construction</SelectItem>
                  <SelectItem value="traffic">🚗 Traffic</SelectItem>
                  <SelectItem value="neighbor">🏠 Neighbor</SelectItem>
                  <SelectItem value="business">🏢 Business</SelectItem>
                  <SelectItem value="event">🎉 Event</SelectItem>
                  <SelectItem value="other">📢 Other</SelectItem>
                </SelectContent>
              </Select>
              {errors.category && (
                <p className="text-sm text-red-600">{errors.category.message}</p>
              )}
            </div>
            
            <div className="space-y-2">
              <Label>Priority</Label>
              <Select onValueChange={(value) => setValue('priority', value as any)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select priority" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="low">Low</SelectItem>
                  <SelectItem value="medium">Medium</SelectItem>
                  <SelectItem value="high">High</SelectItem>
                  <SelectItem value="urgent">Urgent</SelectItem>
                </SelectContent>
              </Select>
              {errors.priority && (
                <p className="text-sm text-red-600">{errors.priority.message}</p>
              )}
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="decibels">Noise Level (dB) - Optional</Label>
              <Input
                id="decibels"
                type="number"
                {...register('decibels')}
                placeholder="75"
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="notes">Additional Notes (Optional)</Label>
            <Textarea
              id="notes"
              {...register('notes')}
              placeholder="Any additional information that might be helpful..."
              rows={3}
            />
          </div>
          
          <Button type="submit" className="w-full">
            Submit Complaint
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}