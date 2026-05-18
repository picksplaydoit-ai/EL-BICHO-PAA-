import React, { useState, useEffect } from 'react';
import StartScreen from './components/StartScreen';
import GameScreen from './components/GameScreen';
import FinalScreen from './components/FinalScreen';
import { QUESTIONS, Question } from './data/questions';

type AppState = 'start' | 'game' | 'final';

export default function App() {
  const [gameState, setGameState] = useState<AppState>('start');
  const [playerName, setPlayerName] = useState('');
  const [gameQuestions, setGameQuestions] = useState<Question[]>([]);
  const [finalResult, setFinalResult] = useState<{ score: number; total: number; won: boolean }>({
    score: 0,
    total: 0,
    won: false,
  });

  const startGame = (name: string) => {
    // Fisher-Yates shuffle for better randomness
    const shuffled = [...QUESTIONS];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    
    setPlayerName(name);
    setGameQuestions(shuffled);
    setGameState('game');
  };

  const handleGameOver = (score: number, total: number) => {
    setFinalResult({ score, total, won: false });
    setGameState('final');
  };

  const handleGameWin = (score: number, total: number) => {
    setFinalResult({ score, total, won: true });
    setGameState('final');
  };

  return (
    <div className="min-h-screen w-full bg-slate-900 font-sans text-white">
      {gameState === 'start' && <StartScreen onStart={startGame} />}
      
      {gameState === 'game' && (
        <GameScreen 
          questions={gameQuestions} 
          onGameOver={handleGameOver} 
          onGameWin={handleGameWin} 
        />
      )}

      {gameState === 'final' && (
        <FinalScreen 
          playerName={playerName}
          score={finalResult.score} 
          total={finalResult.total} 
          won={finalResult.won} 
          onRestart={() => setGameState('start')} 
        />
      )}
    </div>
  );
}
