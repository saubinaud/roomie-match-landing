import React from 'react';
const Footer = () => {
  return <footer className="text-white bg-[#eebb51] py-[20px]">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <img src="https://rentle-tli.com/roomie-mvp/logos%20rentle-11.png" alt="Rentle Logo" className="h-8 w-auto brightness-0 invert" />
              
            </div>
            <p className="mb-6 max-w-md text-slate-50">
              El test de compatibilidad más preciso para jóvenes que buscan convivir sin conflictos. 
              Basado en ciencia, diseñado para la vida real.
            </p>
            
          </div>

          <div>
            <h3 className="font-bold mb-4">Enlaces</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#como-funciona" className="hover:text-white transition-colors">Cómo funciona</a></li>
              <li><a href="#beneficios" className="hover:text-white transition-colors">Beneficios</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contacto</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">Legal</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Política de Privacidad</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Términos de Uso</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Cookies</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 my-[13px] py-0">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-slate-50">
              © 2024 Rentle. Todos los derechos reservados.
            </p>
            <p className="text-sm mt-2 md:mt-0 text-slate-50">
              Hecho con ❤️ para la comunidad universitaria de Lima
            </p>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;