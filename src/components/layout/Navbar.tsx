import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useComplaintsStore } from '@/store/useComplaintsStore';
import { Volume2, FileText, BarChart3, BookOpen, Phone } from 'lucide-react';

export function Navbar() {
  const location = useLocation();
  const { complaints } = useComplaintsStore();
  const pendingCount = complaints.filter(c => c.status === 'pending').length;

  const navItems = [
    { path: '/', label: 'Home', icon: Volume2 },
    { path: '/complaints', label: 'Complaints', icon: FileText, badge: pendingCount },
    { path: '/reports', label: 'Reports', icon: BarChart3 },
    { path: '/guidelines', label: 'Guidelines', icon: BookOpen },
    { path: '/contact', label: 'Contact', icon: Phone }
  ];

  return (
    <nav className="bg-white shadow-lg border-b">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Volume2 className="h-8 w-8 text-blue-600" />
            <span className="text-xl font-bold text-gray-900">
              NoiseWatch
            </span>
          </Link>
          
          <div className="hidden md:flex space-x-1">
            {navItems.map(({ path, label, icon: Icon, badge }) => (
              <Link key={path} to={path}>
                <Button
                  variant={location.pathname === path ? 'default' : 'ghost'}
                  className="relative flex items-center space-x-2"
                >
                  <Icon className="h-4 w-4" />
                  <span>{label}</span>
                  {badge && badge > 0 && (
                    <Badge 
                      variant="destructive" 
                      className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs"
                    >
                      {badge}
                    </Badge>
                  )}
                </Button>
              </Link>
            ))}
          </div>
          
          <div className="md:hidden">
            <Button variant="ghost" size="sm">
              Menu
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}