import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { GuidelineCard } from '@/components/guidelines/GuidelineCard';
import { NoiseGuideline } from '@/types';
import { BookOpen, Clock, AlertTriangle, Phone } from 'lucide-react';

const guidelines: NoiseGuideline[] = [
  {
    id: '1',
    title: 'Residential Areas - Daytime',
    description: 'Noise regulations for residential zones during daytime hours',
    maxDecibels: 55,
    timeRestrictions: '7:00 AM - 10:00 PM',
    category: 'residential',
    penalties: 'First offense: Warning, Second offense: $100 fine, Subsequent: $200-500 fine'
  },
  {
    id: '2',
    title: 'Residential Areas - Nighttime',
    description: 'Stricter noise regulations for residential zones during nighttime hours',
    maxDecibels: 45,
    timeRestrictions: '10:00 PM - 7:00 AM',
    category: 'residential',
    penalties: 'First offense: $150 fine, Subsequent: $300-750 fine'
  },
  {
    id: '3',
    title: 'Commercial Districts',
    description: 'Noise regulations for business and commercial areas',
    maxDecibels: 65,
    timeRestrictions: '6:00 AM - 11:00 PM',
    category: 'commercial',
    penalties: 'First offense: $200 fine, Subsequent: $500-1000 fine'
  },
  {
    id: '4',
    title: 'Industrial Zones',
    description: 'Noise regulations for industrial and manufacturing areas',
    maxDecibels: 75,
    timeRestrictions: '24 hours (with restrictions near residential)',
    category: 'industrial',
    penalties: 'First offense: $500 fine, Subsequent: $1000-2500 fine'
  },
  {
    id: '5',
    title: 'Construction Activities',
    description: 'Special regulations for construction and renovation work',
    maxDecibels: 80,
    timeRestrictions: 'Monday-Friday: 7:00 AM - 6:00 PM, Saturday: 8:00 AM - 5:00 PM, Sunday: Prohibited',
    category: 'construction',
    penalties: 'First offense: $300 fine, Work stoppage order, Subsequent: $750-2000 fine'
  },
  {
    id: '6',
    title: 'Special Events',
    description: 'Noise regulations for permitted events and gatherings',
    maxDecibels: 70,
    timeRestrictions: 'As specified in event permit (typically until 11:00 PM)',
    category: 'event',
    penalties: 'Permit revocation, $250-1000 fine depending on violation severity'
  }
];

export function GuidelinesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div 
        className="relative bg-cover bg-center h-64 flex items-center justify-center"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1920&h=600&fit=crop)'
        }}
      >
        <div className="text-center text-white max-w-3xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Noise Guidelines & Regulations
          </h1>
          <p className="text-xl">
            Understanding noise limits, restrictions, and penalties in your community
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Quick Reference */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <BookOpen className="h-5 w-5" />
              <span>Quick Reference Guide</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-blue-50 rounded-lg">
                <Clock className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="font-semibold text-blue-900 mb-2">Time Matters</h3>
                <p className="text-sm text-blue-700">
                  Noise limits are stricter during nighttime hours (10 PM - 7 AM) to protect sleep and rest.
                </p>
              </div>
              
              <div className="text-center p-6 bg-green-50 rounded-lg">
                <AlertTriangle className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="font-semibold text-green-900 mb-2">Know Your Zone</h3>
                <p className="text-sm text-green-700">
                  Different areas have different noise limits. Residential areas have the strictest regulations.
                </p>
              </div>
              
              <div className="text-center p-6 bg-purple-50 rounded-lg">
                <Phone className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <h3 className="font-semibent text-purple-900 mb-2">Report Violations</h3>
                <p className="text-sm text-purple-700">
                  Use our complaint system to report noise violations. Multiple complaints may result in increased penalties.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Guidelines Grid */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-6">Detailed Noise Regulations</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {guidelines.map((guideline) => (
              <GuidelineCard key={guideline.id} guideline={guideline} />
            ))}
          </div>
        </div>

        {/* Additional Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Measurement Standards</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-medium mb-2">How Noise is Measured</h4>
                <p className="text-sm text-gray-600 mb-3">
                  Noise levels are measured in decibels (dB) using calibrated sound level meters. 
                  Measurements are typically taken at property boundaries.
                </p>
              </div>
              
              <div>
                <h4 className="font-medium mb-2">Measurement Periods</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Daytime: 7:00 AM - 10:00 PM</li>
                  <li>• Nighttime: 10:00 PM - 7:00 AM</li>
                  <li>• Measurements taken over 10-minute periods</li>
                  <li>• Peak levels also considered for violations</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-medium mb-2">Exemptions</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Emergency vehicles and services</li>
                  <li>• Public safety announcements</li>
                  <li>• Permitted special events</li>
                  <li>• Some agricultural activities</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Enforcement Process</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-medium mb-2">Investigation Process</h4>
                <ol className="text-sm text-gray-600 space-y-2">
                  <li>1. Complaint received and logged</li>
                  <li>2. Officer dispatched for investigation</li>
                  <li>3. Noise measurements taken if needed</li>
                  <li>4. Warning or citation issued</li>
                  <li>5. Follow-up monitoring if required</li>
                </ol>
              </div>
              
              <div>
                <h4 className="font-medium mb-2">Appeal Process</h4>
                <p className="text-sm text-gray-600 mb-2">
                  Citations can be appealed within 30 days. Appeals are heard by the 
                  Environmental Court or designated hearing officer.
                </p>
              </div>
              
              <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                <h4 className="font-medium text-yellow-800 mb-2">Important Note</h4>
                <p className="text-sm text-yellow-700">
                  Repeat violations may result in increased penalties, equipment seizure, 
                  or court injunctions to prevent future violations.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* Contact Information */}
        <Card className="mt-8 bg-blue-50 border-blue-200">
          <CardContent className="p-6">
            <div className="text-center">
              <h3 className="text-lg font-semibold text-blue-900 mb-4">
                Questions About Noise Regulations?
              </h3>
              <p className="text-blue-700 mb-4">
                Contact our Environmental Services Department for clarification on noise regulations, 
                permit requirements, or to report violations.
              </p>
              <div className="flex flex-col md:flex-row justify-center items-center space-y-2 md:space-y-0 md:space-x-6">
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4 text-blue-600" />
                  <span className="text-blue-800 font-medium">(555) 123-NOISE</span>
                </div>
                <div className="text-blue-700">
                  noise@citywatch.gov
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}