import React, { useState, useEffect } from 'react';
import { BarChart3, TrendingUp, Database, Cpu } from 'lucide-react';

const DataVisualization = () => {
  const [activeMetric, setActiveMetric] = useState(0);
  const [animatedValues, setAnimatedValues] = useState([0, 0, 0, 0]);

  const metrics = [
    { icon: Database, label: "Projets GitHub", value: 20, unit: "+", color: "bg-blue-500" },
    { icon: BarChart3, label: "Langages Maîtrisés", value: 7, unit: "", color: "bg-green-500" },
    { icon: TrendingUp, label: "Commits cette année", value: 340, unit: "", color: "bg-purple-500" },
    { icon: Cpu, label: "Années d'études", value: 3, unit: "", color: "bg-orange-500" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveMetric(prev => (prev + 1) % metrics.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const animateValues = () => {
      metrics.forEach((metric, index) => {
        let start = 0;
        const end = metric.value;
        const duration = 2000;
        const increment = end / (duration / 50);

        const timer = setInterval(() => {
          start += increment;
          if (start >= end) {
            start = end;
            clearInterval(timer);
          }
          setAnimatedValues(prev => {
            const newValues = [...prev];
            newValues[index] = start;
            return newValues;
          });
        }, 50);
      });
    };

    animateValues();
  }, []);

  return (
    <div className="glass-effect rounded-lg p-6 mt-8">
      <h3 className="text-xl font-bold mb-6 text-center flex items-center justify-center gap-2">
        <BarChart3 className="text-theme-primary" />
        Statistiques personnelles
      </h3>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {metrics.map((metric, index) => {
          const IconComponent = metric.icon;
          const isActive = activeMetric === index;
          
          return (
            <div
              key={index}
              className={`relative p-4 rounded-lg border transition-all duration-500 cursor-pointer ${
                isActive 
                  ? 'border-theme-primary bg-theme-primary/10 scale-105' 
                  : 'border-gray-600 hover:border-theme-primary/50'
              }`}
              onMouseEnter={() => setActiveMetric(index)}
            >
              <div className="flex flex-col items-center space-y-2">
                <div className={`p-2 rounded-full ${metric.color} ${isActive ? 'animate-pulse' : ''}`}>
                  <IconComponent size={20} className="text-white" />
                </div>
                <div className="text-center">
                  <div className={`text-2xl font-bold transition-all duration-500 ${
                    isActive ? 'text-theme-primary' : 'text-white'
                  }`}>
                    {animatedValues[index].toFixed(metric.unit === '%' ? 1 : 0)}{metric.unit}
                  </div>
                  <div className="text-xs text-gray-400">{metric.label}</div>
                </div>
              </div>
              
              {/* Animated progress bar */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-700 rounded-b-lg overflow-hidden">
                <div 
                  className={`h-full ${metric.color} transition-all duration-2000 ${
                    isActive ? 'w-full' : 'w-0'
                  }`}
                />
              </div>
            </div>
          );
        })}
      </div>

      {/* Animated data flow */}
      <div className="mt-6 flex items-center justify-center space-x-2">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="w-2 h-2 bg-theme-primary rounded-full animate-pulse"
            style={{ animationDelay: `${i * 0.2}s` }}
          />
        ))}
      </div>
    </div>
  );
};

export default DataVisualization;