import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'sonner';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { HomePage } from '@/pages/HomePage';
import { ComplaintsPage } from '@/pages/ComplaintsPage';
import { ReportsPage } from '@/pages/ReportsPage';
import { GuidelinesPage } from '@/pages/GuidelinesPage';
import { ContactPage } from '@/pages/ContactPage';

function App() {
  const baseUrl = import.meta.env.BASE_URL || '/';

  return (
    <Router basename={baseUrl}>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/complaints" element={<ComplaintsPage />} />
            <Route path="/reports" element={<ReportsPage />} />
            <Route path="/guidelines" element={<GuidelinesPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
        <Toaster position="top-right" />
      </div>
    </Router>
  );
}

export default App;