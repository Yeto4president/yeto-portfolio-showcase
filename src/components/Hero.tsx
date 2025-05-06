
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 pb-12 px-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div 
            className="order-2 lg:order-1 flex flex-col items-start space-y-6"
            style={{animation: 'fade-in 0.7s ease-out'}}
          >
            <div>
              <p className="text-theme-primary font-medium mb-2">Bonjour, je suis</p>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-2">
                Yeto
              </h1>
              <h2 className="text-3xl sm:text-4xl text-theme-secondary font-bold mb-4">
                Développeur Logiciel
              </h2>
              <p className="text-gray-300 text-lg max-w-xl">
                Je crée des applications web réactives, des bots Discord et d'autres solutions logicielles. 
                Consultez mes projets ci-dessous pour voir ce que j'ai développé.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <Button className="bg-theme-primary hover:bg-theme-primary/90 text-white">
                <a href="#projects" className="flex items-center gap-2">
                  Voir mes projets <ArrowRight size={16} />
                </a>
              </Button>
              <Button variant="outline" className="border-theme-primary text-theme-primary hover:bg-theme-primary/10">
                <a href="#contact">Me contacter</a>
              </Button>
            </div>
          </div>
          
          <div 
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
            style={{animation: 'fade-in 1s ease-out'}}
          >
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-theme-primary/20">
              <div className="absolute inset-0 bg-gradient-to-br from-theme-primary/40 to-theme-secondary/40 backdrop-blur-sm"></div>
              <div className="absolute inset-0 flex items-center justify-center text-6xl font-bold text-white">Y</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
