
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const InviteAndEarn = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Invita y gana
          </h2>
          <p className="text-xl text-gray-700 mb-12">
            Invita a un amigo a hacer el test y 
            <span className="font-bold text-primary"> ambos obtienen el Informe Premium gratis</span>
          </p>

          <Card className="border-0 shadow-2xl overflow-hidden animate-scale-in">
            <CardContent className="p-8 lg:p-12">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="text-center md:text-left">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    ¿Cómo funciona?
                  </h3>
                  <div className="space-y-4 text-left">
                    <div className="flex items-start gap-3">
                      <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm flex-shrink-0">
                        1
                      </div>
                      <p className="text-gray-700">Comparte Rentle Match con tu amigo</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm flex-shrink-0">
                        2
                      </div>
                      <p className="text-gray-700">Tu amigo completa el test de compatibilidad</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm flex-shrink-0">
                        ✓
                      </div>
                      <p className="text-gray-700 font-semibold">¡Ambos obtienen el Informe Premium gratis!</p>
                    </div>
                  </div>
                </div>

                <div className="text-center">
                  <div className="bg-gradient-to-br from-primary to-green-600 rounded-2xl p-8 text-white">
                    <div className="text-4xl mb-4">🎁</div>
                    <h4 className="text-xl font-bold mb-2">Informe Premium</h4>
                    <p className="text-primary-foreground/90 mb-4">Valor regular: €3</p>
                    <ul className="text-left text-sm space-y-2">
                      <li className="flex items-center gap-2">
                        <span className="text-accent">✓</span>
                        Análisis profundo de compatibilidad
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-accent">✓</span>
                        Consejos personalizados de convivencia
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-accent">✓</span>
                        Estrategias para resolver conflictos
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-accent">✓</span>
                        Recomendaciones de acuerdos de casa
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <p className="text-gray-600 mt-8">
            Es así de simple: comparte, que tu amigo haga el test, y ambos disfrutan del Informe Premium 
            sin costo alguno.
          </p>
        </div>
      </div>
    </section>
  );
};

export default InviteAndEarn;
