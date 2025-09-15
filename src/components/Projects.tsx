
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Github, Link } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  category: string[];
  githubUrl: string;
  liveUrl?: string;
}

const Projects = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: "BinVision Monitor - La Ploubelle",
      description: "Plateforme IA de gestion des déchets utilisant l'analyse d'images pour surveiller le niveau de remplissage des poubelles publiques et prévenir les dépôts illégaux.",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=2070&auto=format&fit=crop",
      technologies: ["Python", "Computer Vision", "AI", "Machine Learning"],
      category: ["ml", "data", "app"],
      githubUrl: "https://github.com/Yeto4president/binvision-monitor-La-Ploubelle-"
    },
    {
      id: 2,
      title: "ANSSI Vulnerability Intelligence",
      description: "Collecte automatisée, enrichissement et visualisation des bulletins de vulnérabilités ANSSI. Extraction des CVE, récupération des scores EPSS et génération d'insights priorisés par risque.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2070&auto=format&fit=crop",
      technologies: ["Jupyter Notebook", "Data Analysis", "Security", "Python"],
      category: ["data", "ml"],
      githubUrl: "https://github.com/Yeto4president/Anssi-vulnerability-intelligence"
    },
    {
      id: 3,
      title: "SahelSafe",
      description: "Projet de machine learning visant à prédire les zones et périodes à haut risque d'attentats terroristes au Burkina Faso, utilisant les données ouvertes ACLED.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
      technologies: ["HTML", "Machine Learning", "Data Analysis", "Python"],
      category: ["ml", "data"],
      githubUrl: "https://github.com/Yeto4president/SahelSafe"
    },
    {
      id: 4,
      title: "BasketStatIQ",
      description: "Débloquer les insights de la NBA grâce à la data science. Analyse avancée des statistiques NBA avec visualisations interactives.",
      image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=2070&auto=format&fit=crop",
      technologies: ["Jupyter Notebook", "Data Science", "Python", "Pandas"],
      category: ["data", "ml"],
      githubUrl: "https://github.com/Yeto4president/BasketStatIQ"
    },
    {
      id: 5,
      title: "AI Game Algorithms",
      description: "Implémentation d'IA de jeux avancées utilisant Minimax avec élagage Alpha-Beta pour créer des adversaires intelligents.",
      image: "https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?q=80&w=2070&auto=format&fit=crop",
      technologies: ["Python", "AI", "Algorithms", "Game Theory"],
      category: ["ml", "app"],
      githubUrl: "https://github.com/Yeto4president/AI-Game-Algorithms"
    },
    {
      id: 6,
      title: "Weather Data Pipeline",
      description: "Pipeline pour récupérer et afficher les données météorologiques avec traitement en temps réel et visualisations.",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?q=80&w=2070&auto=format&fit=crop",
      technologies: ["Python", "Data Pipeline", "API", "Real-time"],
      category: ["data", "app"],
      githubUrl: "https://github.com/Yeto4president/weather-data-pipeline"
    },
    {
      id: 7,
      title: "The Board Game Challenge",
      description: "Plateforme interactive pour les jeux de société avec gestion des tournois et statistiques avancées.",
      image: "https://images.unsplash.com/photo-1610890716171-6b1bb98ffd09?q=80&w=2071&auto=format&fit=crop",
      technologies: ["JavaScript", "Web Development", "Interactive UI"],
      category: ["web", "app"],
      githubUrl: "https://github.com/Yeto4president/The-Board-Game-Challenge"
    },
    {
      id: 8,
      title: "Finite Automata & Rational Expressions",
      description: "Projet d'automates finis : lecture, vérification, standardisation, déterminisation, minimisation et reconnaissance de mots.",
      image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=2070&auto=format&fit=crop",
      technologies: ["Python", "Computer Science", "Algorithms", "Theory"],
      category: ["app"],
      githubUrl: "https://github.com/Yeto4president/Finite-Automata-and-Rational-Expressions-project"
    },
    {
      id: 9,
      title: "Scheduling Graph",
      description: "Analyse et ordonnancement de tâches utilisant un tableau de contraintes. Construction de graphe orienté, détection de circuits, calcul du chemin critique et visualisation.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
      technologies: ["Python", "Graph Theory", "Algorithms", "Optimization"],
      category: ["data", "app"],
      githubUrl: "https://github.com/Yeto4president/Scheduling_Graph"
    },
    {
      id: 10,
      title: "Data Analysis Project - Ethiopia",
      description: "Utilisation de l'ACP pour analyser la production de protéines animales en Éthiopie, les émissions de GES et l'intensité des émissions de 2010-2020.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
      technologies: ["Jupyter Notebook", "Python", "PCA", "Data Analysis"],
      category: ["data", "ml"],
      githubUrl: "https://github.com/Yeto4president/Data-analysis-project"
    },
    {
      id: 11,
      title: "Iris Classification Project",
      description: "Implémentation et comparaison entre plusieurs algorithmes de machine learning pour classifier le célèbre dataset Iris flower.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop",
      technologies: ["Jupyter Notebook", "Python", "scikit-learn", "ML"],
      category: ["ml", "data"],
      githubUrl: "https://github.com/Yeto4president/Iris-Classification-Project"
    }
  ];

  const categories = ["all", "data", "ml", "web", "app", "db"];
  const [activeCategory, setActiveCategory] = useState("all");
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const filteredProjects = activeCategory === "all"
    ? projects
    : projects.filter(project => project.category.includes(activeCategory));

  return (
    <section id="projects" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold mb-2">
            Mes <span className="text-gradient">Projets</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-theme-primary to-theme-secondary mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Voici quelques-uns des projets sur lesquels j'ai travaillé. Chaque projet m'a aidé à développer
            mes compétences et à explorer différentes technologies.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              className={`capitalize ${
                activeCategory === category 
                  ? "bg-theme-primary hover:bg-theme-primary/90" 
                  : "border-theme-primary text-theme-primary hover:bg-theme-primary/10"
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category === "ml" ? "Machine Learning" : 
               category === "db" ? "Base de données" :
               category === "all" ? "Tous" : 
               category === "data" ? "Analyse de données" : 
               category === "app" ? "Applications" : 
               category === "web" ? "Web" : category}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id}
              className="glass-effect rounded-lg overflow-hidden transition-transform duration-300 hover:scale-[1.02]"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 ease-in-out"
                  style={{
                    transform: hoveredProject === project.id ? 'scale(1.1)' : 'scale(1)'
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-theme-dark to-transparent"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4 line-clamp-3">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index} 
                      className="px-2 py-1 bg-theme-primary/10 border border-theme-primary/20 rounded-full text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <a 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-sm text-theme-primary hover:text-theme-secondary transition"
                  >
                    <Github size={16} /> Code
                  </a>
                  {project.liveUrl && (
                    <a 
                      href={project.liveUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-sm text-theme-primary hover:text-theme-secondary transition"
                    >
                      <Link size={16} /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
