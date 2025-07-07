
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { PhoneCall, ChevronUp } from 'lucide-react';

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
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleCallClick = () => {
    window.location.href = 'tel:+1234567890';
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
      {/* Click to Call Button */}
      <Button
        onClick={handleCallClick}
        className="w-14 h-14 rounded-full bg-gold-600 hover:bg-gold-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
        size="icon"
      >
        <PhoneCall className="w-6 h-6" />
      </Button>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <Button
          onClick={scrollToTop}
          className="w-14 h-14 rounded-full bg-green-700 hover:bg-green-800 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 animate-fade-in"
          size="icon"
        >
          <ChevronUp className="w-6 h-6" />
        </Button>
      )}
    </div>
  );
};
