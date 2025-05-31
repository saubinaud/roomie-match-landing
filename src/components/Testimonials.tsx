
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Andrea M.",
      age: "23 años",
      text: "El test me salvó de una convivencia terrible. Mi amiga y yo teníamos 45% de compatibilidad... decidimos seguir siendo amigas pero vivir por separado 😅",
      avatar: "👩‍🎓"
    },
    {
      name: "Carlos R.",
      age: "26 años", 
      text: "Pensé que era puro marketing, pero el análisis fue súper certero. Mi roomie y yo tenemos 89% y llevamos 8 meses viviendo sin dramas.",
      avatar: "👨‍💼"
    },
    {
      name: "Sofía L.",
      age: "21 años",
      text: "Lo hice con 3 amigas diferentes. Los resultados me ayudaron a elegir con quién mudarme. 10/10 recomendado para universitarios.",
      avatar: "👩‍🎨"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Lo que dicen nuestros usuarios
          </h2>
          <p className="text-xl text-gray-700">
            Historias reales de jóvenes que tomaron mejores decisiones
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className={`border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 animate-fade-in animate-delay-${(index + 1) * 100}`}>
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center text-2xl mr-4">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.age}</p>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed italic">
                  "{testimonial.text}"
                </p>
                <div className="flex mt-4 text-accent">
                  {[...Array(5)].map((_, i) => (
                    <span key={i}>⭐</span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
