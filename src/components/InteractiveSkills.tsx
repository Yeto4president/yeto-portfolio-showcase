import React, { useState } from 'react';
import { Code2, Database, Brain, BarChart3, Terminal, GitBranch } from 'lucide-react';

const InteractiveSkills = () => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const skillCategories = [
    {
      title: "Data Science",
      icon: Brain,
      color: "text-purple-400",
      bgColor: "bg-purple-400/10 border-purple-400/20",
      skills: ["Python", "Pandas", "NumPy", "Scikit-learn", "Jupyter"],
      description: "Machine Learning & Statistical Analysis"
    },
    {
      title: "Big Data",
      icon: Database,
      color: "text-blue-400", 
      bgColor: "bg-blue-400/10 border-blue-400/20",
      skills: ["Apache Spark", "Hadoop", "Kafka", "MongoDB", "PostgreSQL"],
      description: "Scalable Data Processing & Storage"
    },
    {
      title: "Development",
      icon: Code2,
      color: "text-green-400",
      bgColor: "bg-green-400/10 border-green-400/20", 
      skills: ["JavaScript", "React", "Node.js", "Docker", "FastAPI"],
      description: "Full-Stack & API Development"
    },
    {
      title: "Analytics",
      icon: BarChart3,
      color: "text-orange-400",
      bgColor: "bg-orange-400/10 border-orange-400/20",
      skills: ["Power BI", "Tableau", "Excel", "MATLAB", "R"],
      description: "Business Intelligence & Visualization"
    },
    {
      title: "DevOps",
      icon: Terminal,
      color: "text-cyan-400",
      bgColor: "bg-cyan-400/10 border-cyan-400/20",
      skills: ["Linux", "Bash", "Git", "Docker", "CI/CD"],
      description: "Infrastructure & Deployment"
    },
    {
      title: "Version Control",
      icon: GitBranch,
      color: "text-red-400",
      bgColor: "bg-red-400/10 border-red-400/20",
      skills: ["Git", "GitHub", "GitLab", "Code Review", "Branching"],
      description: "Collaborative Development"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {skillCategories.map((category, index) => {
        const IconComponent = category.icon;
        return (
          <div
            key={category.title}
            className={`glass-effect rounded-lg p-6 transition-all duration-300 hover:scale-105 cursor-pointer border ${
              hoveredSkill === category.title ? category.bgColor : 'border-white/10'
            }`}
            onMouseEnter={() => setHoveredSkill(category.title)}
            onMouseLeave={() => setHoveredSkill(null)}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="flex items-center mb-4">
              <div className={`${category.bgColor} rounded-lg p-3 mr-4`}>
                <IconComponent size={24} className={category.color} />
              </div>
              <div>
                <h4 className={`font-bold ${category.color}`}>{category.title}</h4>
                <p className="text-xs text-gray-400">{category.description}</p>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, skillIndex) => (
                <span
                  key={skill}
                  className={`px-3 py-1 rounded-full text-xs font-medium transition-all duration-200 ${
                    hoveredSkill === category.title
                      ? `${category.bgColor} ${category.color} border`
                      : 'bg-white/5 text-gray-300 border border-white/10'
                  }`}
                  style={{ animationDelay: `${skillIndex * 0.05}s` }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default InteractiveSkills;