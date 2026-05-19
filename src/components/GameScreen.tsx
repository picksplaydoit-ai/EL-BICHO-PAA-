import React, { useState, useEffect } from 'react';
import { Question } from '../data/questions';
import { motion, AnimatePresence } from 'motion/react';
import { Circle, Timer as TimerIcon } from 'lucide-react';
import BichoCR7 from './BichoCR7';
import Portero from './Portero';

interface GameScreenProps {
  questions: Question[];
  onGameOver: (score: number, total: number) => void;
  onGameWin: (score: number, total: number) => void;
}

export default function GameScreen({ questions, onGameOver, onGameWin }: GameScreenProps) {
  const getInitialTime = () => 30;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [lives, setLives] = useState(3);
  const [timeLeft, setTimeLeft] = useState(() => getInitialTime());
  const [gameState, setGameState] = useState<'thinking' | 'kicking' | 'result'>('thinking');
  const [result, setResult] = useState<'goal' | 'miss' | null>(null);
  const [lastSelected, setLastSelected] = useState<number | null>(null);

  const playSiuuu = () => {
    const audio = new Audio('https://www.myinstants.com/media/sounds/cristiano-ronaldo-siuuu-victory-sound-effect-original.mp3');
    audio.volume = 0.5;
    audio.play().catch(err => console.log('Audio play failed:', err));
  };
  const [goalieState, setGoalieState] = useState<'idle' | 'jump-left' | 'jump-right' | 'failed' | 'saved'>('idle');
  const [bichoAction, setBichoAction] = useState<'idle' | 'kick' | 'celebrate' | 'sad'>('idle');

  const currentQuestion = questions[currentIndex];

  useEffect(() => {
    if (gameState === 'thinking' && timeLeft > 0) {
      const timer = setInterval(() => setTimeLeft(prev => prev - 1), 1000);
      return () => clearInterval(timer);
    } else if (timeLeft === 0 && gameState === 'thinking') {
      handleAnswer(-1); // Time out
    }
  }, [timeLeft, gameState]);

  const handleAnswer = (optionIndex: number) => {
    if (gameState !== 'thinking') return;

    setLastSelected(optionIndex);
    setGameState('kicking');
    setBichoAction('kick');

    const isCorrect = optionIndex === currentQuestion.correctAnswer;
    
    // Animate ball and goalie
    setTimeout(() => {
      if (isCorrect) {
        setResult('goal');
        setScore(prev => prev + 50);
        playSiuuu();
        setGoalieState(Math.random() > 0.5 ? 'jump-left' : 'jump-right');
        setBichoAction('celebrate');
      } else {
        setResult('miss');
        setLives(prev => prev - 1);
        setGoalieState('saved');
        setBichoAction('sad');
      }
      setGameState('result');
    }, 800);
  };

  const nextQuestion = () => {
    if (lives <= 0) {
      onGameOver(score, 800);
      return;
    }

    if (score >= 800) {
      onGameWin(score, 800);
      return;
    }

    if (currentIndex + 1 >= questions.length) {
      // Reached end of questions without 800 points
      onGameOver(score, 800);
      return;
    }

    const nextQ = questions[currentIndex + 1];
    setCurrentIndex(prev => prev + 1);
    setTimeLeft(getInitialTime());
    setGameState('thinking');
    setResult(null);
    setLastSelected(null);
    setGoalieState('idle');
    setBichoAction('idle');
  };

  const cornerLabels = ['A', 'B', 'C', 'D'];

  return (
    <div className="relative min-h-screen grass-field flex flex-col overflow-hidden">
      {/* Scoreboard - Optimized for Mobile */}
      <div className="absolute top-2 left-0 right-0 z-30 px-2 flex justify-center items-center gap-2 max-w-4xl mx-auto w-full">
        <div className="bg-black/80 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/20 flex flex-col items-center min-w-[100px] md:min-w-[140px]">
          <div className="text-[9px] md:text-[10px] uppercase text-yellow-400 font-bold tracking-wider">Puntos</div>
          <div className="text-lg md:text-2xl font-black text-yellow-500 leading-none">{score} / 800</div>
        </div>

        <div className="bg-black/80 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/20 flex flex-col items-center min-w-[100px] md:min-w-[140px]">
          <div className="text-[9px] md:text-[10px] uppercase text-gray-400 font-bold mb-0.5 tracking-wider">Vidas</div>
          <div className="flex gap-1 md:gap-1.5 px-1">
            {[...Array(3)].map((_, i) => (
              <motion.div 
                key={i}
                animate={i < lives ? { opacity: 1, scale: 1 } : { opacity: 0.3, scale: 0.8 }}
              >
                <div className={`w-4 h-4 md:w-5 md:h-5 rounded-full border-2 ${i < lives ? 'bg-white border-gray-300 shadow-[0_0_8px_white]' : 'bg-transparent border-gray-600'}`} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Stadium & Pitch Area */}
      <div className="flex-1 flex flex-col items-center justify-center pt-16 md:pt-24 pb-40 md:pb-48 relative">
        {/* Goal Post - Scaled for Mobile */}
        <div className="w-full max-w-[90%] md:max-w-2xl h-48 md:h-64 border-4 md:border-8 border-b-0 border-white relative rounded-t-lg shadow-[0_-10px_20px_rgba(255,255,255,0.2)]">
          {/* Net structure simplified */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff1a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff1a_1px,transparent_1px)] bg-[size:15px_15px] md:bg-[size:20px_20px]" />
          
          {/* Goalie */}
          <div className="absolute inset-0 flex items-end justify-center pb-2 md:pb-4">
            <div className="scale-75 md:scale-100 origin-bottom">
              <Portero state={goalieState} />
            </div>
          </div>

          {/* Correct Answer Hint (only shown if failed) */}
          <AnimatePresence>
            {result === 'miss' && (
               <motion.div 
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 w-[80%]"
               >
                 <div className="bg-red-600 text-white p-3 md:p-4 rounded-xl font-bold shadow-2xl border-2 border-white text-center text-sm md:text-base">
                   ¡FALLASTE!<br />
                   La correcta era: {currentQuestion.options[currentQuestion.correctAnswer]}
                 </div>
               </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Character and Ball - Adjusted and Scaled for Mobile */}
        <div className="absolute bottom-32 md:bottom-40 flex flex-col items-center z-20">
            <div className="scale-[0.65] md:scale-100 origin-bottom">
              <BichoCR7 action={bichoAction} />
            </div>
            
            {/* The Ball */}
            <motion.div 
              className="w-8 h-8 md:w-10 md:h-10 bg-white rounded-full border-2 border-gray-300 relative mt-0 md:mt-4 shadow-xl"
              animate={
                gameState === 'kicking' ? { 
                  y: -200, 
                  x: result === 'goal' ? (Math.random() > 0.5 ? 80 : -80) : 0,
                  scale: 0.4,
                  opacity: result === 'miss' ? 0.8 : 1
                } : { y: 0, x: 0, scale: 1 }
              }
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <div className="absolute inset-0 border-[2px] md:border-[3px] border-black/10 rounded-full" />
              <div className="absolute top-1 left-2 w-2 h-2 md:w-3 md:h-3 bg-black/20 rounded-full" />
            </motion.div>
        </div>

        {/* Question Panel */}
        <AnimatePresence mode='wait'>
          {gameState === 'thinking' && (
            <motion.div
              layoutId="question"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="absolute bottom-4 left-4 right-4 z-40 bg-white/10 backdrop-blur-xl border border-white/20 p-4 md:p-6 rounded-3xl shadow-2xl"
            >
              <div className="flex items-center gap-3 md:gap-4 mb-2 md:mb-4">
                <div className="w-14 h-12 md:w-20 md:h-16 rounded-full border-4 border-yellow-500 flex items-center justify-center text-lg md:text-2xl font-black shrink-0">
                  {timeLeft > 60 ? `${Math.floor(timeLeft / 60)}:${(timeLeft % 60).toString().padStart(2, '0')}` : timeLeft}
                </div>
                <h3 className="text-base md:text-2xl font-bold leading-tight">
                  {currentQuestion.text}
                </h3>
              </div>
              
              <div className="text-[10px] md:text-xs uppercase text-gray-300 font-bold tracking-widest text-center">
                Presiona una esquina para rematar
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Answer Corners - Optimized spacing */}
      <div className="absolute inset-0 p-3 md:p-6 pointer-events-none grid grid-cols-2 grid-rows-2 h-full z-10 pt-20 md:pt-28 pb-10 md:pb-16">
        {currentQuestion.options.map((option, idx) => (
          <div key={idx} className={`flex items-start ${idx % 2 !== 0 ? 'justify-end' : ''} ${idx >= 2 ? 'items-end' : ''}`}>
            <motion.button
              disabled={gameState !== 'thinking'}
              onClick={() => handleAnswer(idx)}
              className={`
                pointer-events-auto
                w-full max-w-[140px] md:max-w-[250px]
                corner-btn
                relative
                ${gameState !== 'thinking' ? 'opacity-50' : 'opacity-100'}
                ${lastSelected === idx && result === 'miss' ? 'bg-red-500/40 border-red-500' : ''}
                ${gameState === 'result' && idx === currentQuestion.correctAnswer ? 'bg-green-500/40 border-green-500' : ''}
              `}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.1 * idx }}
            >
              <div className="absolute -top-2 -left-2 md:-top-3 md:-left-3 w-6 h-6 md:w-8 md:h-8 bg-yellow-500 rounded-full flex items-center justify-center text-black font-black text-xs md:text-sm shadow-lg">
                {cornerLabels[idx]}
              </div>
              <span className="text-center leading-tight line-clamp-3 text-xs md:text-base">
                {option}
              </span>
            </motion.button>
          </div>
        ))}
      </div>

      {/* Result Layer */}
      <AnimatePresence>
        {gameState === 'result' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm z-50 flex flex-col items-center justify-center px-4"
          >
            <motion.div
              initial={{ scale: 0, rotate: -20 }}
              animate={{ scale: 1, rotate: 0 }}
              className="text-center"
            >
              {result === 'goal' ? (
                <>
                  <h2 className="text-7xl md:text-9xl font-black italic text-yellow-400 drop-shadow-[0_0_30px_rgba(250,204,21,0.5)] mb-4">
                    ¡GOOOOL!
                  </h2>
                  <p className="text-2xl font-bold mb-8">¡Qué definición del Bicho!</p>
                </>
              ) : (
                <>
                  <h2 className="text-7xl md:text-9xl font-black italic text-red-500 drop-shadow-[0_0_30px_rgba(239,68,68,0.5)] mb-4">
                    ¡FALLO!
                  </h2>
                  <p className="text-2xl font-bold mb-8 italic text-gray-300">"Siuuu... no puede ser"</p>
                </>
              )}

              <button
                onClick={nextQuestion}
                className="bg-white text-black font-black py-4 px-12 rounded-full text-2xl hover:scale-105 active:scale-95 transition-transform"
              >
                SIGUIENTE PENAL
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
