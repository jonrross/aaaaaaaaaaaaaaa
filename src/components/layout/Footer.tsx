import React from 'react';
import { Volume2, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Volume2 className="h-8 w-8 text-blue-400" />
              <span className="text-xl font-bold">NoiseWatch</span>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Your trusted platform for reporting and managing noise complaints. 
              Working together to create quieter, more peaceful communities.
            </p>
            <div className="flex space-x-4">
              <div className="flex items-center space-x-2 text-sm text-gray-300">
                <Phone className="h-4 w-4" />
                <span>(555) 123-NOISE</span>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="/complaints" className="hover:text-white transition-colors">File Complaint</a></li>
              <li><a href="/reports" className="hover:text-white transition-colors">Noise Reports</a></li>
              <li><a href="/guidelines" className="hover:text-white transition-colors">Noise Guidelines</a></li>
              <li><a href="/contact" className="hover:text-white transition-colors">Emergency Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3 text-sm text-gray-300">
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>123 City Hall Drive<br />Metropolitan City, MC 12345</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>noise@citywatch.gov</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2024 NoiseWatch. All rights reserved. | Privacy Policy | Terms of Service</p>
        </div>
      </div>
    </footer>
  );
}