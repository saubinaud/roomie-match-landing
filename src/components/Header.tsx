
import React from 'react';

const Header = () => {
  return (
    <header className="fixed top-0 w-full z-50 glass-effect">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <img 
              src="https://rentle-tli.com/roomie-mvp/logos%20rentle-11.png" 
              alt="Rentle Logo" 
              className="h-8 w-auto"
            />
            <span className="text-xl font-bold text-gray-900">Rentle Match</span>
          </div>
          <nav className="hidden md:flex space-x-6">
            <a href="#como-funciona" className="text-gray-700 hover:text-primary transition-colors">Cómo funciona</a>
            <a href="#beneficios" className="text-gray-700 hover:text-primary transition-colors">Beneficios</a>
            <a href="#faq" className="text-gray-700 hover:text-primary transition-colors">FAQ</a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
