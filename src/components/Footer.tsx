
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
            <Link to="/" className="text-xl font-bold text-gradient mb-4 inline-block">Jonathan</Link>
            <p className="text-gray-300">
              Passionné par le Big Data et le Machine Learning, je cherche à transformer les données en insights et à résoudre des problèmes du monde réel.
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
                href="mailto:jonathan.ayeto@efrei.net" 
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
            <h3 className="text-lg font-bold mb-4">Domaines d'expertise</h3>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-sm">Big Data</span>
              <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-sm">Machine Learning</span>
              <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-sm">Data Analysis</span>
              <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-sm">Python</span>
              <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-sm">Web Dev</span>
            </div>
          </div>
        </div>
        
        <div className="mt-10 pt-6 border-t border-white/5 text-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} Jonathan. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
