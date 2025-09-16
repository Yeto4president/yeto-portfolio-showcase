
import React from 'react';
import { Code, User, Briefcase, Laptop } from 'lucide-react';
import InteractiveSkills from './InteractiveSkills';
import DataVisualization from './DataVisualization';
import CodeEditor from './CodeEditor';

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
              🎓 Étudiant en ingénierie informatique à l'EFREI Paris, en majeure Business Intelligence & Analytics, 
              je me spécialise dans l'exploitation des données pour en faire des leviers de décision et d'innovation.
              <br /><br />
              💡 J'aime transformer des volumes complexes d'informations en solutions concrètes et intelligentes, 
              alliant rigueur analytique et esprit critique — que ce soit pour prédire des résultats, concevoir des 
              pipelines évolutifs ou créer des tableaux de bord qui facilitent la prise de décision.
              <br /><br />
              🏀 En dehors de l'écran, vous me trouverez probablement sur un terrain de basket (Kobe forever 🐍), 
              derrière un piano 🎹, ou en train de relever de nouveaux défis qui me poussent hors de ma zone de confort.
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
              Mes expériences académiques et projets m'ont permis de travailler sur des problématiques variées : 
              analyse prédictive, data engineering, machine learning supervisé et non supervisé, computer vision 
              et visualisation de données. Découvrez mes réalisations sur mon{" "}
              <a href="https://github.com/Yeto4president" target="_blank" rel="noopener noreferrer" 
                 className="text-theme-primary hover:text-theme-secondary transition-colors underline">
                GitHub
              </a>.
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
              🌍 Je crois que la technologie n'est pas seulement du code — c'est de l'impact. J'aime construire 
              des solutions qui allient rigueur technique et besoins concrets.
              <br /><br />
              🚀 Toujours curieux, toujours en apprentissage. Des notebooks Python aux projets full-stack, 
              je vois chaque défi comme une opportunité de grandir et d'innover.
            </p>
          </div>
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-bold mb-6 text-center">Mon arsenal technique</h3>
          <InteractiveSkills />
        </div>

        {/* Interactive Data Demo */}
        <DataVisualization />
        
        {/* Live Code Editor */}
        <CodeEditor />
      </div>
    </section>
  );
};

export default About;
