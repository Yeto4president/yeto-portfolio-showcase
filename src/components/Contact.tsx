
import React from 'react';
import { Mail, Linkedin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6 bg-theme-dark/50">
      <div className="container mx-auto">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold mb-2">
            Contact<span className="text-gradient">ez-moi</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-theme-primary to-theme-secondary mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Passionné par l'innovation et l'impact technologique, je suis toujours ouvert 
            aux discussions sur les projets data, l'intelligence artificielle et les opportunités de collaboration.
          </p>
        </div>

        <div className="glass-effect rounded-lg p-8 max-w-xl mx-auto">
          <h3 className="text-2xl font-bold mb-6">Mes coordonnées</h3>
          <p className="text-gray-300 mb-8">
            Toujours curieux d'apprendre et de relever de nouveaux défis. Du notebook Python aux projets full-stack, 
            je vois chaque défi comme une opportunité de grandir et d'innover.
          </p>

          <div className="space-y-6">
            <div className="flex items-start">
              <div className="bg-theme-primary rounded-full p-2 mr-4 mt-1">
                <Mail size={20} className="text-white" />
              </div>
              <div>
                <h4 className="font-medium mb-1">Email</h4>
                <a href="mailto:jonathan.ayeto@efrei.net" className="text-gray-300 hover:text-theme-primary transition">
                  jonathan.ayeto@efrei.net
                </a>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-theme-primary rounded-full p-2 mr-4 mt-1">
                <Linkedin size={20} className="text-white" />
              </div>
              <div>
                <h4 className="font-medium mb-1">LinkedIn</h4>
                <a 
                  href="https://www.linkedin.com/in/jonathan-a-255b93268" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-theme-primary transition"
                >
                  in/jonathan-a-255b93268
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
