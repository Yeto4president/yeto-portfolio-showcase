
import React from 'react';
import { Code, User, Briefcase, Laptop } from 'lucide-react';

const About = () => {
  const skills = [
    { category: "Langages", items: ["Python", "Java", "C", "JavaScript", "HTML/CSS", "SQL", "Bash"] },
    { category: "Technologies", items: ["React", "Node.js", "Express", "Vue.js", "scikit-learn", "MATLAB"] },
    { category: "Outils", items: ["Git", "MySQL", "MSSQL", "Linux", "Figma"] },
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
              Je suis Jonathan, un étudiant en 3ème année d'Ingénierie Informatique à EFREI Paris, passionné par 
              le Big Data et le Machine Learning. Curieux et motivé, j'aime transformer des données en informations 
              exploitables et construire des modèles prédictifs pour résoudre des problèmes concrets avec des solutions évolutives.
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
              Je me spécialise dans l'analyse de données, le développement de modèles d'apprentissage automatique et 
              la création de solutions logicielles. J'ai une solide base en programmation avec plusieurs langages et 
              technologies, avec une forte affinité pour Python et les bibliothèques d'analyse de données et de machine learning.
            </p>
          </div>

          <div className="glass-effect rounded-lg p-6">
            <div className="flex items-center mb-4">
              <div className="bg-theme-primary rounded-full p-2 mr-4">
                <Briefcase size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-bold">Mon parcours</h3>
            </div>
            <p className="text-gray-300">
              Actuellement en 3ème année à EFREI Paris, je recherche un stage de 20 semaines en Big Data et 
              Machine Learning débutant le 4 novembre 2025. Mon parcours académique m'a permis de développer des 
              compétences techniques solides et une passion pour l'exploitation des données à grande échelle.
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
