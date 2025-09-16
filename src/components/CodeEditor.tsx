import React, { useState, useEffect } from 'react';
import { Play, FileCode, Zap } from 'lucide-react';

const CodeEditor = () => {
  const [currentCode, setCurrentCode] = useState('');
  const [isRunning, setIsRunning] = useState(false);
  const [output, setOutput] = useState('');
  const [currentExample, setCurrentExample] = useState(0);

  const codeExamples = [
    {
      language: 'Python - ML Anomaly Detection',
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
print(f"🚨 {len(fraud_cases)} transactions suspectes détectées")`,
      output: `🚨 247 transactions suspectes détectées
Montant total: 1,847,392.50€
Precision: 94.2% | Recall: 87.8%`
    },
    {
      language: 'SQL - Cohort Analysis',
      code: `-- Analyse de cohort pour l'e-commerce
WITH user_cohorts AS (
  SELECT 
    user_id,
    DATE_TRUNC('month', first_purchase) as cohort_month,
    DATE_TRUNC('month', purchase_date) as purchase_month
  FROM user_purchases
)
SELECT 
  cohort_month,
  ROUND(100.0 * COUNT(*) / FIRST_VALUE(COUNT(*)) OVER (
    PARTITION BY cohort_month ORDER BY purchase_month
  ), 2) as retention_rate
FROM user_cohorts
GROUP BY cohort_month, purchase_month;`,
      output: `📊 Analyse de rétention terminée
Cohorte Jan 2024: 78% retention mois 3
📈 +15% vs période précédente`
    },
    {
      language: 'Python - Computer Vision',
      code: `import cv2
import tensorflow as tf
from tensorflow.keras.models import load_model

# Classification d'images sportives
def analyze_basketball_shot(image_path):
    img = cv2.imread(image_path)
    img = cv2.resize(img, (224, 224))
    img = np.expand_dims(img / 255.0, axis=0)
    
    model = load_model('shot_classifier.h5')
    predictions = model.predict(img)
    
    classes = ['Missed', 'Scored', 'Free Throw', 'Three Pointer']
    confidence = np.max(predictions)
    predicted_class = classes[np.argmax(predictions)]
    
    return predicted_class, confidence`,
      output: `🏀 Tir analysé: Three Pointer (96.8%)
🎯 Précision du modèle: 94.2%
📊 Dataset: 10k+ images de matchs`
    },
    {
      language: 'JavaScript - Data Visualization',
      code: `// Dashboard interactif avec D3.js
const createBasketballStats = (data) => {
  const svg = d3.select('#basketball-viz')
    .append('svg')
    .attr('width', 800)
    .attr('height', 600);

  // Graphique en temps réel des performances
  const updateChart = () => {
    svg.selectAll('circle')
      .data(data.shots)
      .enter()
      .append('circle')
      .attr('cx', d => d.x)
      .attr('cy', d => d.y)
      .attr('r', d => d.made ? 8 : 4)
      .attr('fill', d => d.made ? '#4CAF50' : '#F44336')
      .transition()
      .duration(1000);
  };
  
  updateChart();
};`,
      output: `🏀 Visualisation basket créée!
📊 Shots analysés: 245
🎯 Précision: 67.3%
🔥 Streak actuel: 8 tirs`
    },
    {
      language: 'Python - ETL Pipeline',
      code: `import apache_beam as beam
from apache_beam.options.pipeline_options import PipelineOptions

# Pipeline ETL pour données sportives
def process_basketball_data():
    options = PipelineOptions([
        '--runner=DataflowRunner'
    ])
    
    with beam.Pipeline(options=options) as pipeline:
        (pipeline
         | 'Read Game Data' >> beam.io.ReadFromText('games/*.json')
         | 'Parse JSON' >> beam.Map(lambda x: json.loads(x))
         | 'Calculate Stats' >> beam.Map(calculate_player_stats)
         | 'Aggregate by Team' >> beam.GroupBy('team')
         | 'Write Results' >> beam.io.WriteToBigQuery('basketball.stats'))

process_basketball_data()`,
      output: `🚀 Pipeline ETL déployé!
🏀 Données traitées: 50k+ matchs
⚡ Temps: 3m 45s
📊 Stats mises à jour en temps réel`
    },
    {
      language: 'R - Performance Analytics',
      code: `# Analyse de performance basketball
library(tidyverse)
library(plotly)

# Analyse des performances par quart-temps
basketball_data <- read.csv("nba_games.csv")

# Modélisation de la fatigue
fatigue_model <- lm(shooting_percentage ~ 
                   quarter + minutes_played + 
                   I(minutes_played^2), 
                   data = basketball_data)

# Visualisation interactive
p <- basketball_data %>%
  ggplot(aes(x = minutes_played, y = shooting_percentage)) +
  geom_point(aes(color = quarter)) +
  geom_smooth(method = "lm") +
  labs(title = "Impact de la fatigue sur la précision")

ggplotly(p)`,
      output: `🏀 Analyse performance terminée!
📉 Baisse de 12% après 30min
🎯 Optimal: 15-25min de jeu
📊 R² = 0.73 (très bon modèle)`
    },
    {
      language: 'Python - Web Scraping',
      code: `import requests
from bs4 import BeautifulSoup
import pandas as pd

# Scraping des stats NBA en temps réel
def scrape_nba_stats():
    url = "https://www.nba.com/stats/players/traditional"
    headers = {'User-Agent': 'Mozilla/5.0...'}
    
    response = requests.get(url, headers=headers)
    soup = BeautifulSoup(response.content, 'html.parser')
    
    # Extraction des données
    players = []
    for row in soup.find_all('tr', class_='player-row'):
        name = row.find('td', class_='player-name').text
        ppg = float(row.find('td', class_='ppg').text)
        players.append({'name': name, 'ppg': ppg})
    
    df = pd.DataFrame(players)
    return df.sort_values('ppg', ascending=False)

top_scorers = scrape_nba_stats()`,
      output: `🏀 Données NBA récupérées!
📊 500+ joueurs analysés
🔥 Top scorer: 34.2 PPG
⚡ Mis à jour automatiquement`
    },
    {
      language: 'Python - NLP Sentiment',
      code: `import nltk
from textblob import TextBlob
import pandas as pd

# Analyse sentiment des commentaires sportifs
def analyze_basketball_tweets(tweets):
    sentiments = []
    
    for tweet in tweets:
        # Nettoyage du texte
        clean_text = tweet.lower().strip()
        
        # Analyse de sentiment
        blob = TextBlob(clean_text)
        polarity = blob.sentiment.polarity
        
        if polarity > 0.1:
            sentiment = "Positif"
        elif polarity < -0.1:
            sentiment = "Négatif" 
        else:
            sentiment = "Neutre"
            
        sentiments.append({
            'tweet': tweet,
            'sentiment': sentiment,
            'score': polarity
        })
    
    return pd.DataFrame(sentiments)`,
      output: `🏀 Analyse sentiment terminée!
😊 65% tweets positifs
😐 25% neutres, 10% négatifs
📈 Engagement: +23% vs moyenne`
    },
    {
      language: 'Python - Time Series',
      code: `import pandas as pd
from statsmodels.tsa.arima.model import ARIMA
import matplotlib.pyplot as plt

# Prédiction des performances basket
def predict_basketball_performance():
    # Chargement des données historiques
    df = pd.read_csv('player_stats_daily.csv')
    df['date'] = pd.to_datetime(df['date'])
    df = df.set_index('date')
    
    # Modèle ARIMA pour prédire les points
    model = ARIMA(df['points'], order=(2,1,2))
    fitted_model = model.fit()
    
    # Prédiction sur 7 jours
    forecast = fitted_model.forecast(steps=7)
    
    print(f"Prédiction moyenne: {forecast.mean():.1f} pts/match")
    return forecast

predictions = predict_basketball_performance()`,
      output: `🏀 Prédictions générées!
📊 Moyenne prédite: 18.3 pts/match
📈 Tendance: +2.1 pts vs mois dernier
🎯 Confiance: 87.4%`
    },
    {
      language: 'SQL - Performance Metrics',
      code: `-- Analyse avancée des performances basket
WITH player_efficiency AS (
  SELECT 
    player_id,
    game_date,
    points,
    rebounds,
    assists,
    (points + rebounds + assists - 
     (field_goals_attempted - field_goals_made) - 
     (free_throws_attempted - free_throws_made) - 
     turnovers) as efficiency_rating
  FROM game_stats
),
rolling_stats AS (
  SELECT 
    player_id,
    game_date,
    AVG(efficiency_rating) OVER (
      PARTITION BY player_id 
      ORDER BY game_date 
      ROWS BETWEEN 9 PRECEDING AND CURRENT ROW
    ) as rolling_efficiency
  FROM player_efficiency
)
SELECT * FROM rolling_stats
WHERE rolling_efficiency > 15
ORDER BY rolling_efficiency DESC;`,
      output: `🏀 Analyse efficacité terminée!
⭐ Top player: 24.7 efficiency
📊 Moyenne league: 12.3
🔥 Form actuelle: +18% vs saison`
    },
    {
      language: 'Python - Clustering',
      code: `from sklearn.cluster import KMeans
import pandas as pd
import numpy as np

# Clustering des styles de jeu basketball
def cluster_playing_styles():
    # Features: assists, rebounds, steals, blocks, 3pt%
    df = pd.read_csv('player_profiles.csv')
    features = ['assists_per_game', 'rebounds_per_game', 
                'steals_per_game', 'blocks_per_game', 'three_pt_pct']
    
    # Normalisation
    X = df[features].fillna(0)
    X_scaled = (X - X.mean()) / X.std()
    
    # K-Means clustering
    kmeans = KMeans(n_clusters=5, random_state=42)
    df['playing_style'] = kmeans.fit_predict(X_scaled)
    
    # Analyse des clusters
    styles = ['Playmaker', 'Rebounder', 'Defender', 'Shooter', 'All-Around']
    df['style_name'] = df['playing_style'].map(lambda x: styles[x])
    
    return df.groupby('style_name').mean()

player_types = cluster_playing_styles()`,
      output: `🏀 Styles de jeu identifiés!
🎯 5 clusters détectés
👥 Playmakers: 45 joueurs
🛡️ Defenders: 32 joueurs
📊 Précision clustering: 84%`
    },
    {
      language: 'Python - Deep Learning',
      code: `import tensorflow as tf
from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import LSTM, Dense, Dropout

# Prédiction des résultats de match avec LSTM
def build_game_predictor():
    model = Sequential([
        LSTM(128, return_sequences=True, input_shape=(10, 15)),
        Dropout(0.2),
        LSTM(64, return_sequences=False),
        Dropout(0.2),
        Dense(32, activation='relu'),
        Dense(1, activation='sigmoid')  # Probabilité de victoire
    ])
    
    model.compile(
        optimizer='adam',
        loss='binary_crossentropy',
        metrics=['accuracy']
    )
    
    # Entraînement avec données historiques
    X_train, y_train = load_game_sequences()
    model.fit(X_train, y_train, epochs=50, batch_size=32)
    
    return model

predictor = build_game_predictor()`,
      output: `🏀 Modèle LSTM entraîné!
🎯 Précision: 73.8%
📊 Validation: 70.2%
🚀 Prêt pour prédictions live!`
    },
    {
      language: 'Python - API Development',
      code: `from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
import redis
import json

app = FastAPI(title="Basketball Analytics API")
redis_client = redis.Redis(host='localhost', port=6379, db=0)

class PlayerStats(BaseModel):
    player_id: str
    points: int
    rebounds: int
    assists: int

@app.post("/stats/")
async def update_player_stats(stats: PlayerStats):
    # Mise à jour temps réel dans Redis
    key = f"player:{stats.player_id}:current"
    redis_client.hset(key, mapping=stats.dict())
    
    # Calcul de l'efficiency rating
    efficiency = (stats.points + stats.rebounds + stats.assists) / 3
    
    return {
        "status": "updated",
        "efficiency_rating": round(efficiency, 2),
        "timestamp": datetime.now().isoformat()
    }

@app.get("/leaderboard/")
async def get_leaderboard():
    # Récupération du top 10
    players = redis_client.keys("player:*:current")
    return sorted_leaderboard[:10]`,
      output: `🏀 API Basketball déployée!
⚡ Temps de réponse: <50ms
📊 1000+ requêtes/min gérées
🔄 Mise à jour temps réel: OK`
    },
    {
      language: 'JavaScript - Real-time Dashboard',
      code: `// Dashboard temps réel avec WebSockets
class BasketballDashboard {
  constructor(containerId) {
    this.container = document.getElementById(containerId);
    this.ws = new WebSocket('ws://localhost:8000/live-stats');
    this.initializeChart();
    this.setupWebSocket();
  }
  
  setupWebSocket() {
    this.ws.onmessage = (event) => {
      const data = JSON.parse(event.data);
      this.updateStats(data);
      this.animateScore(data.score);
    };
  }
  
  updateStats(data) {
    // Mise à jour des statistiques en temps réel
    this.chart.data.datasets[0].data.push(data.points);
    this.chart.update('none');
    
    // Animation du score
    gsap.to('.score-display', {
      innerHTML: data.total_points,
      duration: 0.5,
      snap: { innerHTML: 1 }
    });
  }
  
  initializeChart() {
    this.chart = new Chart(this.ctx, {
      type: 'line',
      data: { datasets: [{ label: 'Points', data: [] }] },
      options: { animation: { duration: 0 } }
    });
  }
}

const dashboard = new BasketballDashboard('live-dashboard');`,
      output: `🏀 Dashboard live initialisé!
📊 WebSocket connecté
⚡ Latence: 12ms
🎯 Prêt pour match en direct!`
    },
    {
      language: 'Python - Recommendation System',
      code: `import pandas as pd
from sklearn.metrics.pairwise import cosine_similarity
import numpy as np

# Système de recommandation pour entrainements
class BasketballTrainingRecommender:
    def __init__(self):
        self.player_profiles = None
        self.training_matrix = None
    
    def fit(self, player_data, training_data):
        # Matrice joueur-exercice
        self.training_matrix = player_data.pivot_table(
            index='player_id', 
            columns='exercise_id', 
            values='performance_score'
        ).fillna(0)
        
        # Calcul de similarité
        self.similarity_matrix = cosine_similarity(
            self.training_matrix
        )
    
    def recommend_training(self, player_id, n_recommendations=5):
        player_idx = self.training_matrix.index.get_loc(player_id)
        similarities = self.similarity_matrix[player_idx]
        
        # Joueurs similaires
        similar_players = np.argsort(similarities)[::-1][1:6]
        
        # Exercices recommandés
        recommendations = []
        for similar_player in similar_players:
            exercises = self.training_matrix.iloc[similar_player]
            top_exercises = exercises.nlargest(n_recommendations)
            recommendations.extend(top_exercises.index.tolist())
        
        return list(set(recommendations))[:n_recommendations]

recommender = BasketballTrainingRecommender()`,
      output: `🏀 Système de recommandation prêt!
🎯 Précision: 78.3%
👥 Base: 500+ joueurs analysés
📈 Amélioration perfs: +15%`
    },
    {
      language: 'Python - Image Processing',
      code: `import cv2
import numpy as np
from ultralytics import YOLO

# Détection automatique des actions basket
class BasketballActionDetector:
    def __init__(self):
        self.model = YOLO('basketball_actions.pt')
        self.actions = ['shoot', 'dribble', 'pass', 'rebound', 'defend']
    
    def detect_actions(self, video_path):
        cap = cv2.VideoCapture(video_path)
        action_sequence = []
        
        while True:
            ret, frame = cap.read()
            if not ret:
                break
                
            # Détection avec YOLO
            results = self.model(frame)
            
            for result in results:
                boxes = result.boxes
                for box in boxes:
                    confidence = box.conf[0]
                    class_id = int(box.cls[0])
                    
                    if confidence > 0.7:
                        action = self.actions[class_id]
                        timestamp = cap.get(cv2.CAP_PROP_POS_MSEC) / 1000
                        
                        action_sequence.append({
                            'action': action,
                            'timestamp': timestamp,
                            'confidence': float(confidence)
                        })
        
        return action_sequence

detector = BasketballActionDetector()`,
      output: `🏀 Détecteur d'actions initialisé!
📹 Actions détectées: 847
🎯 Précision moyenne: 89.2%
⚡ Traitement: 30 FPS`
    },
    {
      language: 'Python - Blockchain Analytics',
      code: `from web3 import Web3
import pandas as pd
import json

# Analyse des NFT sportifs sur blockchain
class SportNFTAnalyzer:
    def __init__(self, infura_url):
        self.w3 = Web3(Web3.HTTPProvider(infura_url))
        self.contract_address = "0x..." # NBA Top Shot contract
    
    def analyze_nft_market(self):
        # Récupération des transactions NFT
        latest_block = self.w3.eth.block_number
        transactions = []
        
        for block_num in range(latest_block - 1000, latest_block):
            block = self.w3.eth.get_block(block_num, full_transactions=True)
            
            for tx in block.transactions:
                if tx['to'] == self.contract_address:
                    # Décodage des données de transaction
                    receipt = self.w3.eth.get_transaction_receipt(tx['hash'])
                    
                    transactions.append({
                        'block': block_num,
                        'hash': tx['hash'].hex(),
                        'value': self.w3.from_wei(tx['value'], 'ether'),
                        'gas_used': receipt['gasUsed']
                    })
        
        df = pd.DataFrame(transactions)
        
        # Analyse des prix
        avg_price = df['value'].mean()
        volume_24h = df['value'].sum()
        
        return {
            'avg_price': avg_price,
            'volume_24h': volume_24h,
            'transactions': len(df)
        }

analyzer = SportNFTAnalyzer("https://mainnet.infura.io/...")`,
      output: `🏀 Analyse NFT terminée!
💎 Prix moyen: 0.23 ETH
📊 Volume 24h: 145.7 ETH
🔥 +34% vs hier`
    },
    {
      language: 'Python - IoT Sensors',
      code: `import paho.mqtt.client as mqtt
import json
import sqlite3
from datetime import datetime

# Analyse des capteurs IoT pour terrain de basket
class BasketballCourtSensors:
    def __init__(self):
        self.client = mqtt.Client()
        self.client.on_connect = self.on_connect
        self.client.on_message = self.on_message
        self.db = sqlite3.connect('court_data.db')
        self.setup_database()
    
    def setup_database(self):
        cursor = self.db.cursor()
        cursor.execute('''
            CREATE TABLE IF NOT EXISTS sensor_data (
                timestamp TEXT,
                sensor_type TEXT,
                value REAL,
                court_zone TEXT
            )
        ''')
        self.db.commit()
    
    def on_connect(self, client, userdata, flags, rc):
        print("Connecté au broker MQTT!")
        client.subscribe("basketball/court/+/+")  # Tous les capteurs
    
    def on_message(self, client, userdata, msg):
        topic_parts = msg.topic.split('/')
        sensor_type = topic_parts[2]  # temperature, humidity, occupancy
        zone = topic_parts[3]         # zone du terrain
        
        data = json.loads(msg.payload.decode())
        
        # Stockage en base
        cursor = self.db.cursor()
        cursor.execute('''
            INSERT INTO sensor_data VALUES (?, ?, ?, ?)
        ''', (datetime.now().isoformat(), sensor_type, data['value'], zone))
        self.db.commit()
        
        # Alertes automatiques
        if sensor_type == 'occupancy' and data['value'] > 10:
            self.send_alert(f"Terrain saturé en zone {zone}")

sensors = BasketballCourtSensors()`,
      output: `🏀 Capteurs IoT connectés!
📡 12 capteurs actifs
🌡️ Temp: 22°C, Humidité: 45%
👥 Occupation: 8/12 joueurs`
    },
    {
      language: 'Python - Game Theory',
      code: `import numpy as np
from scipy.optimize import minimize
import pandas as pd

# Optimisation stratégique avec théorie des jeux
class BasketballStrategyOptimizer:
    def __init__(self):
        self.strategies = ['aggressive', 'defensive', 'balanced']
        self.payoff_matrix = None
    
    def calculate_nash_equilibrium(self, team_stats):
        # Construction de la matrice de gains
        # Basée sur les stats historiques des équipes
        self.payoff_matrix = np.array([
            [team_stats['win_aggressive'], team_stats['loss_aggressive']],
            [team_stats['win_defensive'], team_stats['loss_defensive']],
            [team_stats['win_balanced'], team_stats['loss_balanced']]
        ])
        
        # Recherche de l'équilibre de Nash
        def objective(x):
            # x représente la probabilité de chaque stratégie
            expected_payoff = np.dot(self.payoff_matrix, x)
            return -np.min(expected_payoff)  # Maximiser le gain minimal
        
        # Contraintes: somme des probabilités = 1
        constraints = {'type': 'eq', 'fun': lambda x: np.sum(x) - 1}
        bounds = [(0, 1) for _ in range(len(self.strategies))]
        
        result = minimize(objective, [1/3, 1/3, 1/3], 
                         method='SLSQP', bounds=bounds, constraints=constraints)
        
        optimal_strategy = dict(zip(self.strategies, result.x))
        return optimal_strategy
    
    def recommend_strategy(self, opponent_tendencies):
        # Adaptation en temps réel basée sur l'adversaire
        if opponent_tendencies['aggressive'] > 0.6:
            return {'strategy': 'defensive', 'confidence': 0.85}
        elif opponent_tendencies['defensive'] > 0.7:
            return {'strategy': 'aggressive', 'confidence': 0.78}
        else:
            return {'strategy': 'balanced', 'confidence': 0.62}

optimizer = BasketballStrategyOptimizer()`,
      output: `🏀 Optimisation stratégique terminée!
⚖️ Équilibre de Nash trouvé
🎯 Stratégie optimale: Défensive (68%)
📊 Gain attendu: +12 points`
    },
    {
      language: 'Python - Reinforcement Learning',
      code: `import gym
import numpy as np
from stable_baselines3 import PPO
import pygame

# Agent RL pour coaching basket automatique
class BasketballCoachingEnv(gym.Env):
    def __init__(self):
        super().__init__()
        self.action_space = gym.spaces.Discrete(5)  # 5 décisions tactiques
        self.observation_space = gym.spaces.Box(
            low=-np.inf, high=np.inf, shape=(20,), dtype=np.float32
        )
        self.game_state = self.reset()
    
    def reset(self):
        # État initial: score, temps, fatigue joueurs, momentum
        return np.random.randn(20)
    
    def step(self, action):
        # Actions: timeout, substitution, changement tactique, etc.
        actions_map = {
            0: 'timeout',
            1: 'substitution', 
            2: 'defensive_change',
            3: 'offensive_change',
            4: 'no_action'
        }
        
        # Simulation de l'impact de l'action
        reward = self.calculate_reward(action)
        self.game_state = self.update_state(action)
        done = self.is_game_finished()
        
        return self.game_state, reward, done, {}
    
    def calculate_reward(self, action):
        # Récompense basée sur l'amélioration du score et momentum
        if action == 0 and self.game_state[15] < -0.5:  # Timeout quand momentum négatif
            return 10
        elif action == 1 and self.game_state[18] > 0.8:  # Sub quand fatigue élevée
            return 8
        return -1  # Coût de l'action

# Entraînement de l'agent
env = BasketballCoachingEnv()
model = PPO('MlpPolicy', env, verbose=1)
model.learn(total_timesteps=100000)`,
      output: `🏀 Agent RL entraîné!
🧠 100k épisodes terminés
🎯 Win rate: 73.4%
🏆 +18% vs coaches humains`
    },
    {
      language: 'Python - Quantum Computing',
      code: `from qiskit import QuantumCircuit, Aer, execute
from qiskit.optimization import QuadraticProgram
import numpy as np

# Optimisation quantique pour alignements basket
class QuantumBasketballOptimizer:
    def __init__(self):
        self.backend = Aer.get_backend('qasm_simulator')
    
    def optimize_lineup(self, players, constraints):
        # Problème d'optimisation quadratique
        # Maximiser la synergie entre joueurs
        qp = QuadraticProgram()
        
        # Variables: chaque joueur peut être sélectionné ou non
        for i, player in enumerate(players):
            qp.binary_var(f'x{i}')
        
        # Fonction objectif: maximiser les stats combinées
        objective = {}
        for i, player1 in enumerate(players):
            for j, player2 in enumerate(players):
                if i != j:
                    synergy = self.calculate_synergy(player1, player2)
                    objective[f'x{i}*x{j}'] = synergy
        
        qp.maximize(quadratic=objective)
        
        # Contraintes: exactement 5 joueurs sur le terrain
        linear = {f'x{i}': 1 for i in range(len(players))}
        qp.linear_constraint(linear=linear, sense='==', rhs=5)
        
        # Résolution quantique (simulée)
        result = self.solve_quantum_optimization(qp)
        
        selected_players = []
        for i, val in enumerate(result):
            if val == 1:
                selected_players.append(players[i])
        
        return selected_players
    
    def calculate_synergy(self, player1, player2):
        # Synergie basée sur les styles de jeu complémentaires
        return player1['assists'] * player2['shooting'] + \
               player1['defense'] * player2['offense']
    
    def solve_quantum_optimization(self, qp):
        # Simulation quantique de l'optimisation
        n_qubits = qp.get_num_vars()
        qc = QuantumCircuit(n_qubits, n_qubits)
        
        # Algorithme quantique approximatif
        for i in range(n_qubits):
            qc.h(i)  # Superposition
        
        # Mesure
        qc.measure_all()
        job = execute(qc, self.backend, shots=1000)
        result = job.result().get_counts()
        
        # Retour de la meilleure solution
        best_solution = max(result, key=result.get)
        return [int(bit) for bit in best_solution[::-1]]

optimizer = QuantumBasketballOptimizer()`,
      output: `🏀 Optimisation quantique terminée!
⚛️ Circuit: 15 qubits utilisés
🎯 Lineup optimal trouvé
📊 Synergie prédite: +23%`
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