import React, { useState, useEffect } from 'react';
import { Terminal } from 'lucide-react';

interface CodeTerminalProps {
  className?: string;
}

const CodeTerminal: React.FC<CodeTerminalProps> = ({ className = '' }) => {
  const [currentCommand, setCurrentCommand] = useState(0);
  const [currentChar, setCurrentChar] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  
  const commands = [
    { cmd: "git clone https://github.com/Yeto4president", output: "Cloning into 'portfolio'..." },
    { cmd: "cd portfolio && ls -la", output: "binvision-monitor  SahelSafe  BasketStatIQ  AI-Game-Algorithms" },
    { cmd: "python analyze_data.py", output: "🚀 Data pipeline initialized..." },
    { cmd: "jupyter notebook", output: "Opening Jupyter Lab on localhost:8888" },
    { cmd: "docker-compose up", output: "Starting ML services... ✓ Ready!" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentChar < commands[currentCommand].cmd.length) {
        setCurrentChar(prev => prev + 1);
      } else {
        setTimeout(() => {
          setCurrentCommand(prev => (prev + 1) % commands.length);
          setCurrentChar(0);
        }, 2000);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [currentCommand, currentChar, commands]);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);
    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <div className={`glass-effect rounded-lg p-4 ${className}`}>
      <div className="flex items-center mb-3">
        <Terminal className="text-theme-primary mr-2" size={20} />
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
      </div>
      
      <div className="font-mono text-sm">
        <div className="text-theme-primary mb-1">
          $ {commands[currentCommand].cmd.slice(0, currentChar)}
          {showCursor && <span className="bg-theme-primary text-theme-dark">█</span>}
        </div>
        {currentChar >= commands[currentCommand].cmd.length && (
          <div className="text-gray-300 pl-2 animate-fade-in">
            {commands[currentCommand].output}
          </div>
        )}
      </div>
    </div>
  );
};

export default CodeTerminal;