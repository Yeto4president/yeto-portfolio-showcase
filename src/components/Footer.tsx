
import React from 'react';
import { Github, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-theme-dark border-t border-white/5">
      <div className="container mx-auto py-10 px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <Link to="/" className="text-xl font-bold text-gradient mb-4 inline-block">Yeto</Link>
            <p className="text-gray-300">
              Développement de solutions logicielles innovantes et concrétisation d'idées à travers le code.
            </p>
            <div className="flex gap-4 mt-4">
              <a 
                href="https://github.com/Yeto4president" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-theme-primary transition"
              >
                <Github size={20} />
              </a>
              <a 
                href="mailto:contact@yeto.com" 
                className="text-gray-400 hover:text-theme-primary transition"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Liens rapides</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-theme-primary transition">Accueil</Link>
              </li>
              <li>
                <a href="#about" className="text-gray-300 hover:text-theme-primary transition">À propos</a>
              </li>
              <li>
                <a href="#projects" className="text-gray-300 hover:text-theme-primary transition">Projets</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-theme-primary transition">Contact</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Catégories de projets</h3>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-sm">Applications Web</span>
              <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-sm">Bots Discord</span>
              <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-sm">Jeux</span>
              <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-sm">Applications Java</span>
            </div>
          </div>
        </div>
        
        <div className="mt-10 pt-6 border-t border-white/5 text-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} Yeto. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
