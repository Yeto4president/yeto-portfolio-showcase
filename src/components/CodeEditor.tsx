import React, { useState, useEffect } from 'react';
import { Play, FileCode, Zap } from 'lucide-react';

const CodeEditor = () => {
  const [currentCode, setCurrentCode] = useState('');
  const [isRunning, setIsRunning] = useState(false);
  const [output, setOutput] = useState('');
  const [currentExample, setCurrentExample] = useState(0);

  const codeExamples = [
    {
      language: 'Python',
      code: `import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier

# Load and prepare data
df = pd.read_csv('basketball_stats.csv')
X = df[['points', 'rebounds', 'assists']]
y = df['mvp_candidate']

# Train model
X_train, X_test, y_train, y_test = train_test_split(X, y)
model = RandomForestClassifier(n_estimators=100)
model.fit(X_train, y_train)

print(f"Accuracy: {model.score(X_test, y_test):.2%}")`,
      output: `Model training complete! 🏀
Accuracy: 94.7%
Top features: ['points', 'assists', 'rebounds']
Next: Deploy to production pipeline`
    },
    {
      language: 'SQL',
      code: `-- Basketball analytics query
SELECT 
  player_name,
  AVG(points) as avg_points,
  AVG(rebounds) as avg_rebounds,
  AVG(assists) as avg_assists,
  COUNT(*) as games_played
FROM game_stats 
WHERE season = '2023-24'
  AND position = 'PG'
GROUP BY player_name
HAVING games_played > 20
ORDER BY avg_points DESC
LIMIT 10;`,
      output: `Query executed successfully! 📊
10 rows returned
Execution time: 0.043s
Top PG: Stephen Curry (29.5 PPG)`
    },
    {
      language: 'JavaScript',
      code: `// Real-time data pipeline
const analyzeGameData = async (gameData) => {
  const predictions = await model.predict({
    playerStats: gameData.stats,
    matchup: gameData.opponent,
    venue: gameData.home ? 'home' : 'away'
  });
  
  const insights = {
    winProbability: predictions.winChance,
    keyPlayers: findKeyPlayers(gameData),
    strategy: generateStrategy(predictions)
  };
  
  return insights;
};

console.log('🔥 Pipeline ready for game analysis!');`,
      output: `Pipeline initialized! 🚀
Processing real-time data...
Win probability: 76.3%
Key insight: Focus on 3-point defense`
    }
  ];

  useEffect(() => {
    let charIndex = 0;
    const currentExampleCode = codeExamples[currentExample].code;
    
    const typeCode = () => {
      if (charIndex < currentExampleCode.length) {
        setCurrentCode(currentExampleCode.slice(0, charIndex + 1));
        charIndex++;
        setTimeout(typeCode, 30);
      }
    };

    setCurrentCode('');
    setTimeout(typeCode, 500);
  }, [currentExample]);

  const runCode = () => {
    if (isRunning) return;
    
    setIsRunning(true);
    setOutput('Executing...');
    
    setTimeout(() => {
      setOutput(codeExamples[currentExample].output);
      setIsRunning(false);
    }, 1500);
  };

  const nextExample = () => {
    setCurrentExample((prev) => (prev + 1) % codeExamples.length);
    setOutput('');
  };

  return (
    <div className="glass-effect rounded-lg p-6 mt-8">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-bold flex items-center gap-2">
          <FileCode className="text-theme-primary" />
          Live Code Demo
        </h3>
        <div className="flex gap-2">
          <button
            onClick={nextExample}
            className="px-3 py-1 text-xs bg-theme-primary/20 text-theme-primary rounded hover:bg-theme-primary/30 transition-colors"
          >
            {codeExamples[currentExample].language}
          </button>
        </div>
      </div>

      {/* Code Editor */}
      <div className="bg-gray-900 rounded-lg p-4 font-mono text-sm">
        <div className="flex items-center gap-2 mb-3">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
          <span className="text-gray-400 ml-2">{codeExamples[currentExample].language}</span>
        </div>
        
        <pre className="text-gray-300 whitespace-pre-wrap min-h-[200px]">
          {currentCode}
          <span className="animate-pulse">|</span>
        </pre>
      </div>

      {/* Controls */}
      <div className="flex items-center gap-4 mt-4">
        <button
          onClick={runCode}
          disabled={isRunning}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
            isRunning 
              ? 'bg-gray-600 cursor-not-allowed' 
              : 'bg-theme-primary hover:bg-theme-primary/90'
          } text-white`}
        >
          {isRunning ? (
            <Zap className="animate-spin" size={16} />
          ) : (
            <Play size={16} />
          )}
          {isRunning ? 'Running...' : 'Execute'}
        </button>
        
        <button
          onClick={nextExample}
          className="px-4 py-2 border border-theme-primary text-theme-primary rounded-lg hover:bg-theme-primary/10 transition-colors"
        >
          Next Example
        </button>
      </div>

      {/* Output */}
      {output && (
        <div className="mt-4 bg-gray-800 rounded-lg p-4">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-green-400 text-sm font-mono">Output:</span>
          </div>
          <pre className="text-green-300 font-mono text-sm whitespace-pre-wrap">
            {output}
          </pre>
        </div>
      )}
    </div>
  );
};

export default CodeEditor;