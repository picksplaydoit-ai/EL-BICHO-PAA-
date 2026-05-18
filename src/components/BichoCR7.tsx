import React from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface CharacterProps {
  action: 'idle' | 'kick' | 'celebrate' | 'sad';
}

export default function BichoCR7({ action }: CharacterProps) {
  // Simple stylized character using SVG/CSS
  return (
    <div className="relative w-40 h-56 flex flex-col items-center">
      {/* Celebration Text */}
      <AnimatePresence>
        {action === 'celebrate' && (
          <motion.div
            initial={{ opacity: 0, scale: 0, y: 0 }}
            animate={{ opacity: 1, scale: [0, 1.5, 1], y: -100 }}
            exit={{ opacity: 0 }}
            className="absolute top-0 text-5xl font-black text-white italic drop-shadow-[0_0_15px_rgba(255,255,255,0.8)] z-50 pointer-events-none"
          >
            SIUUUUU!
          </motion.div>
        )}
      </AnimatePresence>

      {/* BIG HEAD (Cabezón style) */}
      <motion.div 
        className="w-24 h-24 bg-[#ffdbac] rounded-[2rem] relative z-20 shadow-xl border-b-4 border-black/10"
        animate={
          action === 'celebrate' ? { 
            y: [0, -40, 0],
            rotate: [0, 360, 720] 
          } : 
          action === 'sad' ? { y: 10, rotate: [10, -10, 10] } :
          { 
            y: [0, -3, 0],
            rotate: [-5, 5, -5] 
          }
        }
        transition={
          action === 'celebrate' ? { duration: 1, ease: "easeOut" } : 
          action === 'sad' ? { repeat: Infinity, duration: 1.5 } :
          { repeat: Infinity, duration: 3, ease: "easeInOut" }
        }
      >
        {/* Hair - CR7 Signature Style */}
        <div className="absolute top-0 w-full h-8 bg-slate-950 rounded-t-[2rem] overflow-hidden">
             <div className="w-full h-2 bg-slate-800 mt-1 opacity-50" />
        </div>
        <div className="absolute -top-3 right-4 w-6 h-10 bg-slate-950 rounded-full rotate-45" />

        {/* Brows for personality */}
        <div className="absolute top-10 left-4 w-6 h-1 bg-slate-900 -rotate-12 rounded-full" />
        <div className="absolute top-10 right-4 w-6 h-1 bg-slate-900 rotate-12 rounded-full" />

        {/* Eyes */}
        <div className="absolute top-12 left-6 w-3 h-3 bg-slate-900 rounded-full" />
        <div className="absolute top-12 right-6 w-3 h-3 bg-slate-900 rounded-full" />
        
        {/* Mouth */}
        <motion.div 
          className="absolute bottom-4 left-1/2 -translate-x-1/2 w-6 h-2 bg-red-900/40 rounded-full"
          animate={action === 'celebrate' ? { scaleY: 4, height: 4 } : { scaleY: 1 }}
        />
      </motion.div>

      {/* Body / Shirt (Smaller for emphasis on head) */}
      <motion.div 
        className="w-16 h-20 bg-red-600 rounded-t-lg relative -mt-4 shadow-inner flex flex-col items-center pt-2 z-10"
        animate={
          action === 'kick' ? { rotate: [0, -15, 30, 0], transition: { duration: 0.4 } } : 
          action === 'celebrate' ? { y: [0, -40, 0], scale: [1, 1.1, 1] } : {}
        }
      >
        <span className="text-white text-[10px] font-black leading-none opacity-80">BICHO</span>
        <span className="text-white text-2xl font-black leading-none -mt-1 drop-shadow-md">7</span>
      </motion.div>

      {/* Arms */}
      <motion.div 
        className="absolute left-6 top-24 w-4 h-14 bg-red-600 rounded-full origin-top z-0"
        animate={
          action === 'celebrate' ? { rotate: [-20, -160, -160], x: [-5, -15, -15], y: [0, -40, 0] } : 
          action === 'kick' ? { rotate: 60 } : { rotate: 10 }
        }
      />
      <motion.div 
        className="absolute right-6 top-24 w-4 h-14 bg-red-600 rounded-full origin-top z-0"
        animate={
          action === 'celebrate' ? { rotate: [20, 160, 160], x: [5, 15, 15], y: [0, -40, 0] } : 
          action === 'kick' ? { rotate: -60 } : { rotate: -10 }
        }
      />

      {/* Legs */}
      <div className="flex gap-4 -mt-2">
        <motion.div 
          className="w-6 h-12 bg-white border-t-8 border-red-600 rounded-b-lg origin-top"
          animate={
            action === 'kick' ? { rotate: [0, 90, -10], transition: { duration: 0.4 } } : 
            action === 'celebrate' ? { y: [0, -40, 0], rotate: [0, 0, 20] } : 
            action === 'sad' ? { rotate: 15 } : {}
          }
        />
        <motion.div 
          className="w-6 h-12 bg-white border-t-8 border-red-600 rounded-b-lg origin-top"
          animate={
            action === 'celebrate' ? { y: [0, -40, 0], rotate: [0, 0, -20] } : 
            action === 'sad' ? { rotate: -15 } : {}
          }
        />
      </div>
    </div>
  );
}

