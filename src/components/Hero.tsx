import React from 'react';
import { Button } from '@/components/ui/button';
const Hero = () => {
  const handleTestClick = () => {
    const shareId = localStorage.getItem('rentleShareId') || Math.random().toString(36).substr(2, 9);
    localStorage.setItem('rentleShareId', shareId);
    window.open(`https://rentle-tli.com/roomie-mvp/index.html?share_id=${shareId}`, '_blank');
  };
  return <section className="hero-gradient pt-24 pb-16 lg:pb-24">
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
              <Button onClick={handleTestClick} size="lg" className="text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 bg-[#eebb51]">
                Hacer el test gratis
              </Button>
              <Button variant="outline" size="lg" className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300" onClick={() => document.getElementById('como-funciona')?.scrollIntoView({
              behavior: 'smooth'
            })}>
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
              <div className="w-80 h-80 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center">
                <div className="w-64 h-64 bg-white rounded-full shadow-2xl flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl font-bold gradient-text mb-2">94%</div>
                    <div className="text-gray-600 font-medium">Compatible</div>
                    <div className="text-sm text-gray-500 mt-2">con tu roomie ideal</div>
                  </div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-accent rounded-full flex items-center justify-center shadow-lg">
                <span className="text-2xl">🏠</span>
              </div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-primary rounded-full flex items-center justify-center shadow-lg">
                <span className="text-2xl">👥</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;