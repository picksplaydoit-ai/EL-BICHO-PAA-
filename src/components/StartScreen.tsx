import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Trophy, Play, Info, User } from 'lucide-react';

interface StartScreenProps {
  onStart: (name: string) => void;
}

export default function StartScreen({ onStart }: StartScreenProps) {
  const [name, setName] = useState('');

  const handleStart = () => {
    onStart(name.trim() || 'Crack');
  };

  return (
    <div className="flex flex-col items-center justify-start py-12 min-h-screen stadium-gradient px-4 text-center overflow-y-auto">
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="mb-8"
      >
        <Trophy className="w-24 h-24 text-yellow-400 mx-auto mb-4 drop-shadow-[0_0_15px_rgba(250,204,21,0.5)]" />
        <h1 className="text-5xl md:text-7xl font-black italic tracking-tighter text-white drop-shadow-lg">
          BICHO<span className="text-red-500">CR7</span>
          <br />
          <span className="text-3xl md:text-5xl not-italic font-bold text-yellow-400">PENALES DE ADMISIÓN</span>
        </h1>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3 }}
        className="max-w-md w-full bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8 mb-8"
      >
        <div className="mb-6">
          <label className="block text-sm font-bold text-gray-300 uppercase tracking-widest mb-2 text-left px-2">
            ¿Quién ayuda al Bicho hoy?
          </label>
          <div className="relative">
            <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Tu nombre aquí..."
              className="w-full bg-black/30 border border-white/20 rounded-2xl py-4 pl-12 pr-4 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500 transition-all font-bold text-lg"
            />
          </div>
        </div>

        <h2 className="text-xl font-bold mb-4 flex items-center justify-center gap-2 text-yellow-400">
          <Info className="w-5 h-5" />
          Reglas del Juego
        </h2>
        <ul className="text-left space-y-2 text-base mb-8 text-gray-200">
          <li>⚽ Responde preguntas de admisión.</li>
          <li>🎯 Cada respuesta es un penal.</li>
          <li>⚡ Logra 800 puntos para ser admitido.</li>
          <li>❤️ Tienes 3 balones (vidas).</li>
        </ul>

        <button
          onClick={handleStart}
          className="w-full bg-red-600 hover:bg-red-500 text-white font-black py-4 px-8 rounded-full text-2xl flex items-center justify-center gap-3 transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(220,38,38,0.4)]"
        >
          <Play className="fill-current" />
          INICIAR PARTIDO
        </button>
      </motion.div>

      <div className="text-sm text-gray-400">
        Resuelve los reactivos y logra que el Bicho sea admitido
      </div>
    </div>
  );
}
