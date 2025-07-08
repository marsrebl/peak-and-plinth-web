
import React, { useState, useEffect } from 'react';
import { Phone, ChevronUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const FloatingButtons = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCall = () => {
    window.location.href = 'tel:+15551234567';
  };

  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-40">
      {/* Call Button */}
      <Button
        onClick={handleCall}
        className="w-14 h-14 rounded-full gradient-mixed text-white shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 hover:scale-110 flex items-center justify-center"
        title="Call us now"
      >
        <Phone size={20} />
      </Button>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <Button
          onClick={scrollToTop}
          className="w-14 h-14 rounded-full bg-slate-800 hover:bg-slate-900 text-white shadow-2xl transition-all duration-300 hover:scale-110 flex items-center justify-center animate-fade-in"
          title="Scroll to top"
        >
          <ChevronUp size={20} />
        </Button>
      )}
    </div>
  );
};
