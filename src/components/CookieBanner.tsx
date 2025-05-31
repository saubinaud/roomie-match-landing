
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const cookieConsent = localStorage.getItem('rentleCookieConsent');
    if (!cookieConsent) {
      setIsVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('rentleCookieConsent', 'accepted');
    setIsVisible(false);
  };

  const rejectCookies = () => {
    localStorage.setItem('rentleCookieConsent', 'rejected');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 z-50 md:left-auto md:max-w-md">
      <Card className="border-0 shadow-2xl">
        <CardContent className="p-6">
          <h3 className="font-bold text-gray-900 mb-2">🍪 Cookies</h3>
          <p className="text-sm text-gray-600 mb-4">
            Usamos cookies para mejorar tu experiencia y analizar el uso del sitio. 
            Al continuar navegando, aceptas nuestra política de cookies.
          </p>
          <div className="flex gap-2">
            <Button 
              onClick={acceptCookies}
              size="sm"
              className="bg-primary hover:bg-primary/90 text-white flex-1"
            >
              Aceptar
            </Button>
            <Button 
              onClick={rejectCookies}
              variant="outline"
              size="sm"
              className="border-gray-300 text-gray-700 hover:bg-gray-50"
            >
              Rechazar
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CookieBanner;
