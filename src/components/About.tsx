
import React from 'react';
import { Code, User, Briefcase } from 'lucide-react';

const About = () => {
  const skills = [
    { category: "Frontend", items: ["React", "JavaScript", "TypeScript", "HTML/CSS", "Tailwind CSS"] },
    { category: "Backend", items: ["Node.js", "Express", "Python", "Java"] },
    { category: "Tools", items: ["Git", "GitHub", "VS Code", "Discord API"] },
  ];

  return (
    <section id="about" className="py-20 px-6 bg-theme-dark/50">
      <div className="container mx-auto">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold mb-2">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-theme-primary to-theme-secondary mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="glass-effect rounded-lg p-6">
            <div className="flex items-center mb-4">
              <div className="bg-theme-primary rounded-full p-2 mr-4">
                <User size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-bold">Who I Am</h3>
            </div>
            <p className="text-gray-300">
              I'm a passionate software developer with a keen interest in creating useful applications
              and tools. My journey in coding started with small projects and has evolved into
              building complex applications that solve real-world problems.
            </p>
          </div>

          <div className="glass-effect rounded-lg p-6">
            <div className="flex items-center mb-4">
              <div className="bg-theme-primary rounded-full p-2 mr-4">
                <Code size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-bold">What I Do</h3>
            </div>
            <p className="text-gray-300">
              I specialize in building web applications, Discord bots, and other software solutions.
              My focus is on creating clean, efficient code that delivers a seamless user experience. 
              I enjoy taking on challenging projects that push my skills to new heights.
            </p>
          </div>

          <div className="glass-effect rounded-lg p-6">
            <div className="flex items-center mb-4">
              <div className="bg-theme-primary rounded-full p-2 mr-4">
                <Briefcase size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-bold">My Experience</h3>
            </div>
            <p className="text-gray-300">
              I've worked on a variety of projects, from personal applications to collaborative efforts.
              Each project has contributed to my growth as a developer and expanded my understanding
              of different technologies and development practices.
            </p>
          </div>
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-bold mb-6 text-center">My Skills</h3>
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
