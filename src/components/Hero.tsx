
import React from 'react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const handleTestClick = () => {
    const shareId = localStorage.getItem('rentleShareId') || Math.random().toString(36).substr(2, 9);
    localStorage.setItem('rentleShareId', shareId);
    window.open(`https://rentle-tli.com/roomie-mvp/index.html?share_id=${shareId}`, '_blank');
  };

  return (
    <section className="hero-gradient pt-24 pb-16 lg:pb-24">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left animate-fade-in">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Descubre si podrías{' '}
              <span className="gradient-text">vivir en armonía</span>{' '}
              con ese amigo en menos de 7 minutos
            </h1>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Nuestro test gratuito de compatibilidad analiza personalidad, hábitos y estilo de vida 
              para darte un porcentaje claro.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <Button 
                onClick={handleTestClick}
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                🚀 Hacer el test gratis
              </Button>
              <Button 
                variant="outline"
                size="lg"
                className="border-2 border-accent text-accent hover:bg-accent hover:text-white px-8 py-4 text-lg font-semibold rounded-2xl transition-all duration-300"
                onClick={() => document.getElementById('como-funciona')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Ver cómo funciona
              </Button>
            </div>

            <div className="flex flex-wrap gap-6 text-sm text-gray-600 justify-center lg:justify-start">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>Basado en MBTI y Big Five</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <span>Resultado inmediato</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>100% confidencial</span>
              </div>
            </div>
          </div>

          <div className="flex justify-center animate-fade-in animate-delay-200">
            <div className="relative">
              <div className="w-80 h-80 bg-gradient-to-br from-primary/20 to-accent/15 rounded-full flex items-center justify-center shadow-2xl">
                <div className="w-64 h-64 bg-white rounded-full shadow-xl flex items-center justify-center border-4 border-primary/20">
                  <div className="text-center">
                    <div className="text-6xl font-bold gradient-text mb-2">94%</div>
                    <div className="text-gray-700 font-semibold text-lg">Compatible</div>
                    <div className="text-sm text-gray-500 mt-2">con tu roomie ideal</div>
                  </div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-20 h-20 youth-gradient rounded-full flex items-center justify-center shadow-xl border-4 border-white">
                <span className="text-3xl">🏠</span>
              </div>
              <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-gradient-to-br from-accent to-primary rounded-full flex items-center justify-center shadow-xl border-4 border-white">
                <span className="text-3xl">👥</span>
              </div>
              <div className="absolute top-8 -left-8 w-16 h-16 bg-primary/30 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-2xl">✨</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
