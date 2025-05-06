
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
      title: "Iris Classification Project",
      description: "Implémentation et comparaison entre plusieurs algorithmes de machine learning pour classifier le célèbre dataset Iris flower.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
      technologies: ["Python", "Jupyter Notebook", "scikit-learn"],
      category: ["ml", "data"],
      githubUrl: "https://github.com/Yeto4president/Iris-Classification-Project"
    },
    {
      id: 2,
      title: "Agenda",
      description: "Projet de gestion de calendrier avec recherche et organisation optimisées.",
      image: "https://images.unsplash.com/photo-1506784365847-bbad939e9335?q=80&w=2068&auto=format&fit=crop",
      technologies: ["C"],
      category: ["app"],
      githubUrl: "https://github.com/Yeto4president/Agenda"
    },
    {
      id: 3,
      title: "Projet Vector Text-based Editor",
      description: "Projet de dessin pour ajouter, afficher et manipuler des formes géométriques à l'aide de commandes.",
      image: "https://images.unsplash.com/photo-1596495577886-d920f1fb7238?q=80&w=1974&auto=format&fit=crop",
      technologies: ["C"],
      category: ["app"],
      githubUrl: "https://github.com/Yeto4president/Projet_Vector-_Text_based_Editor"
    },
    {
      id: 4,
      title: "Tournoi JDP",
      description: "Un système de base de données robuste pour organiser et suivre des tournois de jeux de société.",
      image: "https://images.unsplash.com/photo-1610890716171-6b1bb98ffd09?q=80&w=2071&auto=format&fit=crop",
      technologies: ["SQL", "Database Design"],
      category: ["db"],
      githubUrl: "https://github.com/Yeto4president/Tournoi_JDP-"
    },
    {
      id: 5,
      title: "Ybox",
      description: "Application web pour le streaming de musique.",
      image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=2070&auto=format&fit=crop",
      technologies: ["HTML", "CSS", "JavaScript"],
      category: ["web"],
      githubUrl: "https://github.com/Yeto4president/Ybox"
    },
    {
      id: 6,
      title: "Data Analysis Project",
      description: "Utilisation de l'ACP pour analyser la production de protéines animales en Éthiopie, les émissions de GES et l'intensité des émissions.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
      technologies: ["Python", "Jupyter Notebook", "Data Analysis", "PCA"],
      category: ["data", "ml"],
      githubUrl: "https://github.com/Yeto4president/Data-analysis-project"
    },
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
