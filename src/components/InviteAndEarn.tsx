
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';

const InviteAndEarn = () => {
  const [inviteCount, setInviteCount] = useState(0);
  const [shareUrl, setShareUrl] = useState('');
  const { toast } = useToast();

  useEffect(() => {
    // Get invite count
    const storedCount = localStorage.getItem('rentleInviteCount');
    if (storedCount) {
      setInviteCount(parseInt(storedCount));
    }

    // Generate simple share URL without invite codes
    setShareUrl('https://rentle-match.vercel.app/');
  }, []);

  const copyInviteLink = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      toast({
        title: "¡Enlace copiado!",
        description: "Ahora compártelo con tu amigo para que ambos obtengan el Informe Premium gratis",
      });
    } catch (err) {
      toast({
        title: "Error",
        description: "No se pudo copiar el enlace. Inténtalo de nuevo.",
        variant: "destructive"
      });
    }
  };

  const progressPercentage = (inviteCount / 1) * 100;

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
                    Tu progreso
                  </h3>
                  <div className="mb-6">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-gray-700">Amigos invitados</span>
                      <span className="text-sm font-bold text-primary">{inviteCount}/1</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-primary to-green-600 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${progressPercentage}%` }}
                      ></div>
                    </div>
                  </div>
                  
                  {inviteCount >= 1 ? (
                    <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg">
                      <strong>¡Felicitaciones!</strong> Has desbloqueado el Informe Premium
                    </div>
                  ) : (
                    <Button 
                      onClick={copyInviteLink}
                      size="lg"
                      className="bg-accent hover:bg-accent/90 text-gray-900 px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 w-full md:w-auto"
                    >
                      📎 Copiar enlace para compartir
                    </Button>
                  )}
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
            Simplemente comparte el enlace con tu amigo. Cuando complete el test, 
            ambos recibirán automáticamente el Informe Premium.
          </p>
        </div>
      </div>
    </section>
  );
};

export default InviteAndEarn;
