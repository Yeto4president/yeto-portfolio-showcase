
import React from 'react';
import { GitHub, Mail } from 'lucide-react';
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
              Building innovative software solutions and bringing ideas to life through code.
            </p>
            <div className="flex gap-4 mt-4">
              <a 
                href="https://github.com/Yeto4president" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-theme-primary transition"
              >
                <GitHub size={20} />
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
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-theme-primary transition">Home</Link>
              </li>
              <li>
                <a href="#about" className="text-gray-300 hover:text-theme-primary transition">About</a>
              </li>
              <li>
                <a href="#projects" className="text-gray-300 hover:text-theme-primary transition">Projects</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-theme-primary transition">Contact</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Project Categories</h3>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-sm">Web Apps</span>
              <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-sm">Discord Bots</span>
              <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-sm">Games</span>
              <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-sm">Fullstack</span>
            </div>
          </div>
        </div>
        
        <div className="mt-10 pt-6 border-t border-white/5 text-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} Yeto. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
