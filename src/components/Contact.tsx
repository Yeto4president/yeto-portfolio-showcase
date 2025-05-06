
import React from 'react';
import { Mail, Linkedin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6 bg-theme-dark/50">
      <div className="container mx-auto">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold mb-2">
            Contactez-<span className="text-gradient">moi</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-theme-primary to-theme-secondary mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            N'hésitez pas à me contacter si vous cherchez un développeur spécialisé en Big Data et Machine Learning, avez une question ou souhaitez simplement échanger sur le domaine.
          </p>
        </div>

        <div className="glass-effect rounded-lg p-8 max-w-xl mx-auto">
          <h3 className="text-2xl font-bold mb-6">Mes coordonnées</h3>
          <p className="text-gray-300 mb-8">
            Je suis actuellement à la recherche d'un stage de 20 semaines en Big Data et Machine Learning à partir du 4 novembre 2025.
            Si mon profil vous intéresse ou si vous souhaitez discuter, n'hésitez pas à me contacter.
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
