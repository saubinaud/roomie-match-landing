
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const HowItWorks = () => {
  const steps = [
    {
      number: "1",
      title: "Elige con quién comparar",
      description: "Escribe el nombre de tu amigo, familiar o conocido con quien planeas convivir.",
      icon: "👤",
      color: "from-blue-500 to-blue-600"
    },
    {
      number: "2", 
      title: "Responde el test",
      description: "Contesta preguntas sobre personalidad, hábitos y preferencias. Solo toma 7 minutos.",
      icon: "📝",
      color: "from-primary to-green-600"
    },
    {
      number: "3",
      title: "Recibe tu resultado",
      description: "Obtén tu porcentaje de compatibilidad con explicaciones detalladas y consejos.",
      icon: "📊",
      color: "from-accent to-yellow-500"
    }
  ];

  return (
    <section id="como-funciona" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            ¿Cómo funciona?
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            En solo 3 pasos simples, descubre si eres compatible con tu futuro roomie
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <Card key={index} className={`relative overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 animate-fade-in animate-delay-${(index + 1) * 100}`}>
              <CardContent className="p-8 text-center">
                <div className={`w-16 h-16 bg-gradient-to-r ${step.color} rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6`}>
                  {step.number}
                </div>
                <div className="text-4xl mb-4">{step.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </CardContent>
              
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute -right-4 top-1/2 transform -translate-y-1/2 z-10">
                  <div className="w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center">
                    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
