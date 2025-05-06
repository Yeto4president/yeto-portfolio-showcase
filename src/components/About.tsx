
import React from 'react';
import { Code, User, Briefcase } from 'lucide-react';

const About = () => {
  const skills = [
    { category: "Programmation", items: ["Java", "Python", "JavaScript", "TypeScript", "HTML/CSS"] },
    { category: "Technologies", items: ["React", "Node.js", "Django", "Discord.js", "JavaFX"] },
    { category: "Outils", items: ["Git", "GitHub", "VS Code", "Docker", "SQLite", "PostgreSQL"] },
  ];

  return (
    <section id="about" className="py-20 px-6 bg-theme-dark/50">
      <div className="container mx-auto">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold mb-2">
            À propos <span className="text-gradient">de moi</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-theme-primary to-theme-secondary mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="glass-effect rounded-lg p-6">
            <div className="flex items-center mb-4">
              <div className="bg-theme-primary rounded-full p-2 mr-4">
                <User size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-bold">Qui je suis</h3>
            </div>
            <p className="text-gray-300">
              Je suis un développeur passionné spécialisé dans la création d'applications web, de bots Discord
              et de logiciels desktop. Mon parcours en programmation a commencé par des projets simples et s'est 
              développé vers la création d'applications complexes qui résolvent des problèmes réels.
            </p>
          </div>

          <div className="glass-effect rounded-lg p-6">
            <div className="flex items-center mb-4">
              <div className="bg-theme-primary rounded-full p-2 mr-4">
                <Code size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-bold">Ce que je fais</h3>
            </div>
            <p className="text-gray-300">
              Je me spécialise dans le développement d'applications web, de bots Discord et de solutions logicielles variées.
              Je mets l'accent sur la création de code propre et efficace qui offre une expérience utilisateur optimale.
              J'aime relever des défis techniques qui me permettent de perfectionner mes compétences.
            </p>
          </div>

          <div className="glass-effect rounded-lg p-6">
            <div className="flex items-center mb-4">
              <div className="bg-theme-primary rounded-full p-2 mr-4">
                <Briefcase size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-bold">Mon expérience</h3>
            </div>
            <p className="text-gray-300">
              J'ai travaillé sur divers projets, allant des applications personnelles aux efforts collaboratifs.
              Chaque projet a contribué à mon développement en tant que programmeur et a élargi ma compréhension
              des différentes technologies et pratiques de développement.
            </p>
          </div>
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-bold mb-6 text-center">Mes compétences</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {skills.map((skillGroup, index) => (
              <div key={index} className="glass-effect rounded-lg p-6">
                <h4 className="text-xl font-bold mb-4 text-theme-primary">{skillGroup.category}</h4>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex} 
                      className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
