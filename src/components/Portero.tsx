import React from 'react';
import { motion } from 'motion/react';

interface GoalieProps {
  state: 'idle' | 'jump-left' | 'jump-right' | 'failed' | 'saved';
}

export default function Portero({ state }: GoalieProps) {
  return (
    <motion.div 
      className="relative w-24 h-36 flex flex-col items-center"
      animate={
        state === 'jump-left' ? { x: -150, y: -20, rotate: -45 } :
        state === 'jump-right' ? { x: 150, y: -20, rotate: 45 } :
        state === 'failed' ? { x: 0, y: 30, rotate: 0, opacity: 0.7 } :
        state === 'saved' ? { scale: 1.1 } :
        { x: [ -10, 10, -10 ], transition: { repeat: Infinity, duration: 2 } }
      }
    >
      {/* Head */}
      <div className="w-8 h-8 bg-[#d2b48c] rounded-full relative z-10" />
      
      {/* Body / Shirt */}
      <div className="w-14 h-16 bg-blue-500 rounded-t-xl -mt-1" />

      {/* Arms */}
      <div className="absolute left-2 top-8 w-12 h-4 bg-blue-400 rounded-full -rotate-45 origin-right" />
      <div className="absolute right-2 top-8 w-12 h-4 bg-blue-400 rounded-full rotate-45 origin-left" />

      {/* Legs */}
      <div className="flex gap-6 -mt-1">
        <div className="w-4 h-12 bg-black rounded-b-lg" />
        <div className="w-4 h-12 bg-black rounded-b-lg" />
      </div>
    </motion.div>
  );
}
