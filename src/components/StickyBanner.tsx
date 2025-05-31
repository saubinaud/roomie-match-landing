
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

const StickyBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.querySelector('section');
      if (heroSection) {
        const heroBottom = heroSection.offsetTop + heroSection.offsetHeight;
        setIsVisible(window.scrollY > heroBottom);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleTestClick = () => {
    const shareId = localStorage.getItem('rentleShareId') || Math.random().toString(36).substr(2, 9);
    localStorage.setItem('rentleShareId', shareId);
    window.open(`https://rentle-tli.com/roomie-mvp/index.html?share_id=${shareId}`, '_blank');
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-2xl md:hidden">
      <div className="px-4 py-3">
        <Button 
          onClick={handleTestClick}
          className="w-full bg-primary hover:bg-primary/90 text-white py-4 text-lg font-semibold rounded-xl shadow-lg"
        >
          Hacer el test gratis ahora
        </Button>
      </div>
    </div>
  );
};

export default StickyBanner;
