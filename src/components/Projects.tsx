
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { GitHub, Link } from 'lucide-react';

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
      title: "Minecraft Clone",
      description: "A simplified Minecraft clone built using JavaScript and Three.js. Features block placement, removal, and movement in a 3D environment.",
      image: "https://images.unsplash.com/photo-1587573089284-77b9e3e00c7e?q=80&w=2070&auto=format&fit=crop",
      technologies: ["JavaScript", "Three.js", "HTML5", "CSS3"],
      category: ["web", "game"],
      githubUrl: "https://github.com/Yeto4president/minecraft-js"
    },
    {
      id: 2,
      title: "Discord Music Bot",
      description: "A discord music bot that allows users to play music in voice channels with various commands and features.",
      image: "https://images.unsplash.com/photo-1614680376593-902f74cf0d41?q=80&w=1974&auto=format&fit=crop",
      technologies: ["JavaScript", "Discord.js", "Node.js"],
      category: ["bot"],
      githubUrl: "https://github.com/Yeto4president/Music-Bot"
    },
    {
      id: 3,
      title: "Social Media App",
      description: "A full-stack social media application with user authentication, posting, commenting, and more.",
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1974&auto=format&fit=crop",
      technologies: ["React", "Node.js", "Express", "MongoDB"],
      category: ["web", "fullstack"],
      githubUrl: "https://github.com/Yeto4president/",
      liveUrl: "#"
    },
    {
      id: 4,
      title: "Portfolio Website",
      description: "A responsive portfolio website showcasing my projects and skills.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2048&auto=format&fit=crop",
      technologies: ["React", "TypeScript", "Tailwind CSS"],
      category: ["web"],
      githubUrl: "https://github.com/Yeto4president/",
      liveUrl: "#"
    },
    {
      id: 5,
      title: "E-commerce Platform",
      description: "An online store with product listings, cart functionality, and checkout process.",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=2070&auto=format&fit=crop",
      technologies: ["React", "Node.js", "Express", "MongoDB"],
      category: ["web", "fullstack"],
      githubUrl: "https://github.com/Yeto4president/",
    },
    {
      id: 6,
      title: "Weather App",
      description: "A weather application that provides current weather data and forecasts for locations worldwide.",
      image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?q=80&w=2070&auto=format&fit=crop",
      technologies: ["JavaScript", "React", "Weather API"],
      category: ["web"],
      githubUrl: "https://github.com/Yeto4president/",
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
            My <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-theme-primary to-theme-secondary mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Here are some of the projects I've worked on. Each project has helped me develop
            my skills and explore different technologies.
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
                    <GitHub size={16} /> Code
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
