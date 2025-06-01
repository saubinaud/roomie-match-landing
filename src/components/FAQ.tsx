import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "¿Cuánto tiempo toma completar el test?",
      answer: "El test toma menos de 10 minutos. Está diseñado para ser rápido pero completo, con preguntas directas sobre personalidad y hábitos de convivencia."
    },
    {
      question: "¿Es realmente confidencial?",
      answer: "Sí, completamente. No vendemos, compartimos ni almacenamos tu información personal. Solo usamos los datos para generar tu reporte de compatibilidad."
    },
    {
      question: "¿Qué incluye el Informe Premium?",
      answer: "El Informe Premium incluye análisis detallado de áreas de compatibilidad, consejos personalizados para mejorar la convivencia, estrategias para resolver conflictos comunes y recomendaciones de acuerdos de casa específicos para tu situación."
    },
    {
      question: "¿Puedo hacer el test varias veces con diferentes personas?",
      answer: "¡Por supuesto! Puedes hacer el test con tantas personas como quieras. Cada comparación es independiente y te ayuda a tomar mejores decisiones sobre con quién convivir."
    },
    {
      question: "¿Qué pasa si mi compatibilidad es baja?",
      answer: "Un porcentaje bajo no significa que no puedan convivir, sino que necesitarán más comunicación y acuerdos claros. El reporte te explica exactamente en qué áreas pueden surgir conflictos y cómo manejarlos."
    },
    {
      question: "¿El test funciona para cualquier tipo de relación?",
      answer: "Sí, funciona para amigos, parejas, familiares o conocidos. El algoritmo se adapta al tipo de relación que indiques al inicio del test."
    },
    {
      question: "¿Cómo obtengo el Informe Premium gratis?",
      answer: "Simplemente invita a un amigo a hacer el test compartiendo el enlace. Cuando tu amigo complete el test, ambos recibirán automáticamente acceso al Informe Premium sin costo alguno."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Preguntas frecuentes
          </h2>
          <p className="text-xl text-gray-700">
            Resolvemos las dudas más comunes sobre Rentle Match
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-white rounded-xl shadow-lg border-0 overflow-hidden animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <AccordionTrigger className="px-8 py-6 text-left font-semibold text-gray-900 hover:text-primary transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-8 pb-6 text-gray-700 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
