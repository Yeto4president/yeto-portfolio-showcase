import React, { useState, useEffect } from 'react';
import { Play, FileCode, Zap } from 'lucide-react';

const CodeEditor = () => {
  const [currentCode, setCurrentCode] = useState('');
  const [isRunning, setIsRunning] = useState(false);
  const [output, setOutput] = useState('');
  const [currentExample, setCurrentExample] = useState(0);

  const codeExamples = [
    {
      language: 'Python - ML',
      code: `import pandas as pd
from sklearn.ensemble import IsolationForest
import numpy as np

# Détection d'anomalies dans les données financières
df = pd.read_csv('transactions.csv')
features = ['amount', 'frequency', 'location_risk']

# Modèle de détection d'anomalies
model = IsolationForest(contamination=0.1, random_state=42)
anomalies = model.fit_predict(df[features])

# Analyse des résultats
fraud_cases = df[anomalies == -1]
print(f"🚨 {len(fraud_cases)} transactions suspectes détectées")
print(f"Montant total: {fraud_cases['amount'].sum():,.2f}€")`,
      output: `🚨 247 transactions suspectes détectées
Montant total: 1,847,392.50€
Precision: 94.2% | Recall: 87.8%
💡 Modèle prêt pour la production!`
    },
    {
      language: 'SQL - Analytics',
      code: `-- Analyse de cohort pour l'e-commerce
WITH user_cohorts AS (
  SELECT 
    user_id,
    DATE_TRUNC('month', first_purchase) as cohort_month,
    DATE_TRUNC('month', purchase_date) as purchase_month
  FROM user_purchases
),
cohort_data AS (
  SELECT 
    cohort_month,
    purchase_month,
    COUNT(DISTINCT user_id) as users,
    EXTRACT(EPOCH FROM purchase_month - cohort_month) / 2629746 as period
  FROM user_cohorts
  GROUP BY 1, 2
)
SELECT 
  cohort_month,
  period,
  users,
  ROUND(100.0 * users / FIRST_VALUE(users) OVER (
    PARTITION BY cohort_month ORDER BY period
  ), 2) as retention_rate
FROM cohort_data
ORDER BY cohort_month, period;`,
      output: `📊 Analyse de rétention terminée
Cohorte Jan 2024: 78% retention mois 3
Cohorte Feb 2024: 82% retention mois 3  
📈 +15% vs période précédente
💎 Insight: Users from Q1 more loyal!`
    },
    {
      language: 'Python - Computer Vision',
      code: `import cv2
import numpy as np
from tensorflow.keras.models import load_model

# Classification d'images avec CNN
def analyze_waste_bin(image_path):
    # Chargement et preprocessing
    img = cv2.imread(image_path)
    img = cv2.resize(img, (224, 224))
    img = np.expand_dims(img / 255.0, axis=0)
    
    # Prédiction
    model = load_model('waste_classifier.h5')
    predictions = model.predict(img)
    
    classes = ['Vide', 'Mi-plein', 'Plein', 'Débordant']
    confidence = np.max(predictions)
    predicted_class = classes[np.argmax(predictions)]
    
    return predicted_class, confidence

result, conf = analyze_waste_bin('bin_image.jpg')
print(f"📸 État: {result} (confiance: {conf:.1%})")`,
      output: `📸 État: Plein (confiance: 92.3%)
🚨 Alerte envoyée aux équipes
📍 Localisation: Bin #247, Rue de Rivoli
⏰ Collecte programmée dans 2h`
    },
    {
      language: 'JavaScript - Data Viz',
      code: `// Dashboard interactif avec D3.js
const createInteractiveDashboard = (data) => {
  const svg = d3.select('#dashboard')
    .append('svg')
    .attr('width', 800)
    .attr('height', 600);

  // Graphique en temps réel
  const updateChart = () => {
    const circles = svg.selectAll('circle')
      .data(data.metrics)
      .enter()
      .append('circle')
      .attr('cx', (d, i) => i * 100 + 50)
      .attr('cy', d => 300 - d.value * 2)
      .attr('r', d => d.importance * 10)
      .attr('fill', d => d.color)
      .on('mouseover', showTooltip)
      .on('mouseout', hideTooltip);
  };
  
  // Animation des transitions
  setInterval(updateChart, 2000);
  
  return { update: updateChart };
};

console.log('📊 Dashboard interactif initialisé!');`,
      output: `📊 Dashboard interactif initialisé!
🔄 Mise à jour automatique: ON
📈 Métriques en temps réel: 5 KPIs
👆 Interactions: Hover & Click ready
🎨 Animations fluides activées`
    },
    {
      language: 'Python - ETL Pipeline',
      code: `import apache_beam as beam
from apache_beam.options.pipeline_options import PipelineOptions

# Pipeline ETL pour Big Data
def run_etl_pipeline():
    options = PipelineOptions([
        '--runner=DataflowRunner',
        '--project=my-gcp-project'
    ])
    
    with beam.Pipeline(options=options) as pipeline:
        (pipeline
         | 'Read CSV' >> beam.io.ReadFromText('gs://bucket/data/*.csv')
         | 'Parse JSON' >> beam.Map(lambda x: json.loads(x))
         | 'Clean Data' >> beam.Map(clean_and_validate)
         | 'Aggregate' >> beam.GroupBy('category')
         | 'Transform' >> beam.Map(calculate_metrics)
         | 'Write to BigQuery' >> beam.io.WriteToBigQuery(
             table='dataset.processed_data',
             create_disposition=beam.io.BigQueryDisposition.CREATE_IF_NEEDED
         ))

run_etl_pipeline()
print("🚀 Pipeline ETL déployé avec succès!")`,
      output: `🚀 Pipeline ETL déployé avec succès!
📊 Données traitées: 2.3M lignes
⚡ Temps d'exécution: 4m 23s
💾 Stockage BigQuery: Mis à jour
📈 Prêt pour les analyses BI`
    },
    {
      language: 'R - Statistical Analysis',
      code: `# Analyse statistique avancée
library(tidyverse)
library(caret)
library(corrplot)

# Analyse exploratoire des données
data <- read.csv("player_performance.csv")

# Test de normalité et transformations
shapiro_results <- data %>%
  select_if(is.numeric) %>%
  map_dfr(~ broom::tidy(shapiro.test(.x)), .id = "variable")

# Régression multiple avec validation croisée
model <- train(performance_score ~ ., 
               data = data,
               method = "lm",
               trControl = trainControl(method = "cv", number = 10))

# Visualisation des corrélations
cor_matrix <- cor(data[sapply(data, is.numeric)])
corrplot(cor_matrix, method = "color")

print(paste("R² ajusté:", round(summary(model)$adj.r.squared, 3)))`,
      output: `📊 Analyse statistique terminée!
R² ajusté: 0.847
🎯 Variables significatives: 6/12
📈 Performance modèle: Excellente
🔍 Corrélations fortes identifiées`
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