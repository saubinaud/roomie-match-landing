
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const Benefits = () => {
  const benefits = [
    {
      icon: "💰",
      title: "Ahorra tiempo y dinero",
      description: "Evita convivencias fallidas que terminan en mudanzas costosas y conflictos innecesarios."
    },
    {
      icon: "🧠",
      title: "Basado en ciencia",
      description: "Utilizamos psicometría validada: MBTI, Big Five, Tríada Oscura y preferencias reales de vivienda."
    },
    {
      icon: "⚡",
      title: "Resultados inmediatos",
      description: "No esperes días. Recibe tu análisis completo al instante con explicaciones claras."
    },
    {
      icon: "🎯",
      title: "Consejos personalizados",
      description: "Con el Informe Premium obtienes tips específicos para mejorar la convivencia."
    },
    {
      icon: "🔒",
      title: "100% confidencial",
      description: "Tus datos están seguros. Sin spam, sin venta de información personal."
    },
    {
      icon: "📱",
      title: "Fácil de compartir",
      description: "Invita a tus amigos con un solo clic y desbloquea beneficios premium gratis."
    }
  ];

  return (
    <section id="beneficios" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            ¿Por qué es importante saber esto?
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Convivir no es solo dividir gastos. Es compartir espacios, hábitos y rutinas. 
            Mejor saber antes que lamentarse después.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Card key={index} className={`border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 animate-fade-in animate-delay-${(index % 3 + 1) * 100}`}>
              <CardContent className="p-8 text-center">
                <div className="text-5xl mb-6">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Evita el roche de pelear por la limpieza 🧽
            </h3>
            <p className="text-lg text-gray-700">
              Saber de antemano si son compatibles en orden, horarios y estilo de vida 
              te ahorra meses de tensión y discusiones.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
