import React from 'react';
import { motion } from 'motion/react';
import { Trophy, RotateCcw, Frown, Sparkles } from 'lucide-react';

interface FinalScreenProps {
  playerName: string;
  score: number;
  total: number;
  won: boolean;
  onRestart: () => void;
}

export default function FinalScreen({ playerName, score, total, won, onRestart }: FinalScreenProps) {
  const percentage = Math.round((score / total) * 100);

  return (
    <div className={`flex flex-col items-center justify-center min-h-screen px-4 text-center ${won ? 'stadium-gradient' : 'bg-slate-950'}`}>
      {won && <Sparkles className="absolute inset-0 w-full h-full text-yellow-500/10 pointer-events-none" />}

      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="z-10"
      >
        {won ? (
          <>
            <motion.div 
              animate={{ rotateY: [0, 360] }} 
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              className="mb-6 inline-block"
            >
              <Trophy className="w-32 h-32 text-yellow-400 drop-shadow-[0_0_30px_rgba(250,204,21,0.5)]" />
            </motion.div>
            <h1 className="text-4xl md:text-6xl font-black italic mb-2 text-white uppercase">
              ¡ADMITIDO!
            </h1>
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white bg-red-600/50 px-6 py-2 rounded-full inline-block">
              ¡FELICIDADES, <span className="text-yellow-300">{playerName.toUpperCase()}</span>!
            </h2>
            <p className="text-xl font-bold mb-8 text-gray-200">
              Felicidades el bicho ha sido admitido con tu ayuda.
            </p>
          </>
        ) : (
          <>
            <Frown className="w-24 h-24 text-red-500 mx-auto mb-6" />
            <h1 className="text-5xl md:text-6xl font-black mb-4 text-white">
              ELIMINADO
            </h1>
            <p className="text-2xl font-bold mb-2 text-red-400">
              Lo sentimos, <span className="italic">{playerName}</span>.
            </p>
            <p className="text-xl font-bold mb-8 text-gray-400">
              Te quedaste sin balones. ¡Vuelve a entrenar!
            </p>
          </>
        )}

        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 mb-8 max-w-sm w-full mx-auto shadow-2xl">
          <div className="text-sm uppercase font-bold text-gray-400 mb-4 tracking-widest border-b border-white/10 pb-2">Resultados Finales</div>
          
          <div className="flex justify-around items-center mb-4">
             <div className="text-center">
                <div className="text-xs text-gray-400 uppercase mb-1 font-bold">Puntos</div>
                <div className="text-5xl font-black text-white">{score}</div>
             </div>
             <div className="text-3xl font-black text-gray-600">/</div>
             <div className="text-center">
                <div className="text-xs text-gray-400 uppercase mb-1 font-bold">Meta</div>
                <div className="text-5xl font-black text-gray-300">{total}</div>
             </div>
          </div>
          
          <div className="text-2xl font-black text-yellow-500 bg-black/40 py-2 rounded-xl border border-yellow-500/30">
            {percentage}% PRECISIÓN
          </div>
        </div>

        <button
          onClick={onRestart}
          className="bg-red-600 hover:bg-red-500 text-white font-black py-4 px-12 rounded-full text-2xl flex items-center justify-center gap-3 transition-all hover:scale-105 active:scale-95 shadow-xl mx-auto shadow-red-900/40"
        >
          <RotateCcw />
          {won ? 'REVALIDAR TÍTULO' : 'REINTENTAR'}
        </button>
      </motion.div>
    </div>
  );
}
