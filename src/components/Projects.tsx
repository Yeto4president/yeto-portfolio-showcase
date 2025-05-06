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
      title: "CSC-Helper",
      description: "Un bot Discord qui aide les étudiants en informatique avec des ressources et des informations sur les cours CSC.",
      image: "https://images.unsplash.com/photo-1614680376593-902f74cf0d41?q=80&w=1974&auto=format&fit=crop",
      technologies: ["JavaScript", "Discord.js", "Node.js"],
      category: ["bot", "web"],
      githubUrl: "https://github.com/Yeto4president/CSC-Helper"
    },
    {
      id: 2,
      title: "LLM Bot",
      description: "Un bot utilisant les modèles de langage avancés pour fournir des réponses intelligentes aux utilisateurs.",
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1974&auto=format&fit=crop",
      technologies: ["Python", "API", "AI/ML"],
      category: ["bot", "ai"],
      githubUrl: "https://github.com/Yeto4president/LLM_Bot"
    },
    {
      id: 3,
      title: "ASPM",
      description: "Application de gestion de projets académiques pour les étudiants et professeurs.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2048&auto=format&fit=crop",
      technologies: ["Java", "JavaFX", "SQLite"],
      category: ["app", "desktop"],
      githubUrl: "https://github.com/Yeto4president/ASPM"
    },
    {
      id: 4,
      title: "Mexican-Standoff",
      description: "Un jeu multi-joueurs basé sur le concept du Mexican Standoff, développé en Java.",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=2070&auto=format&fit=crop",
      technologies: ["Java", "Game Development", "Multiplayer"],
      category: ["game"],
      githubUrl: "https://github.com/Yeto4president/Mexican-Standoff",
    },
    {
      id: 5,
      title: "Atlas-Global",
      description: "Application interactive pour explorer des données géographiques et culturelles du monde entier.",
      image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?q=80&w=2070&auto=format&fit=crop",
      technologies: ["JavaScript", "React", "API GIS"],
      category: ["web"],
      githubUrl: "https://github.com/Yeto4president/Atlas-Global",
    },
    {
      id: 6,
      title: "AOTP",
      description: "Plateforme d'apprentissage en ligne pour les étudiants en informatique.",
      image: "https://images.unsplash.com/photo-1587573089284-77b9e3e00c7e?q=80&w=2070&auto=format&fit=crop",
      technologies: ["Python", "Django", "PostgreSQL"],
      category: ["web", "fullstack"],
      githubUrl: "https://github.com/Yeto4president/AOTP",
    },
  ];

  const categories = ["all", "web", "game", "bot", "fullstack"];
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
              {category}
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
