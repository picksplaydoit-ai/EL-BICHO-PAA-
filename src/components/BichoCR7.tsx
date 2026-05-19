import React from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface CharacterProps {
  action: 'idle' | 'kick' | 'celebrate' | 'sad';
}

export default function BichoCR7({ action }: CharacterProps) {
  // Enhanced CR7 stylized character
  return (
    <div className="relative w-40 h-64 flex flex-col items-center">
      {/* Celebration Text */}
      <AnimatePresence>
        {action === 'celebrate' && (
          <motion.div
            initial={{ opacity: 0, scale: 0, y: 0 }}
            animate={{ opacity: 1, scale: [0, 1.8, 1], y: -120 }}
            exit={{ opacity: 0 }}
            className="absolute top-0 text-6xl font-black text-white italic drop-shadow-[0_0_20px_rgba(255,255,255,0.9)] z-50 pointer-events-none"
          >
            SIUUUUU!
          </motion.div>
        )}
      </AnimatePresence>

      {/* HEAD - More defined CR7 shape */}
      <motion.div 
        className="w-28 h-32 bg-[#eac086] rounded-[2.5rem] relative z-20 shadow-2xl border-b-8 border-black/20"
        animate={
          action === 'celebrate' ? { 
            y: [0, -60, 0],
            rotate: [0, 15, -15, 0],
            scale: [1, 1.1, 1]
          } : 
          action === 'sad' ? { y: 15, rotate: [5, -5, 5] } :
          { 
            y: [0, -4, 0],
            rotate: [-2, 2, -2] 
          }
        }
        transition={
          action === 'celebrate' ? { duration: 0.8, ease: "backOut" } : 
          action === 'sad' ? { repeat: Infinity, duration: 2 } :
          { repeat: Infinity, duration: 4, ease: "easeInOut" }
        }
      >
        {/* Hair - Signature Fade & Textured Top */}
        <div className="absolute -top-2 left-0 w-full h-14 bg-zinc-950 rounded-t-[2.5rem] overflow-hidden">
          {/* Spiky Top Texture */}
          <div className="absolute top-0 left-4 right-4 h-full flex justify-between">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="w-2 h-8 bg-zinc-900 rounded-full -mt-2" />
            ))}
          </div>
          {/* Part Line */}
          <div className="absolute top-6 left-6 w-12 h-0.5 bg-zinc-800 rotate-[15deg] opacity-70" />
        </div>

        {/* Ears */}
        <div className="absolute top-16 -left-3 w-4 h-6 bg-[#eac086] rounded-full" />
        <div className="absolute top-16 -right-3 w-4 h-6 bg-[#eac086] rounded-full flex items-center justify-center">
            {/* Diamond Earring */}
            <div className="w-1.5 h-1.5 bg-white rounded-full shadow-[0_0_5px_white] animate-pulse" />
        </div>

        {/* Brows - Sharp & Expressive */}
        <div className="absolute top-12 left-5 w-8 h-1.5 bg-zinc-900 -rotate-[10deg] rounded-full" />
        <div className="absolute top-12 right-5 w-8 h-1.5 bg-zinc-900 rotate-[10deg] rounded-full" />

        {/* Eyes - Deep Set */}
        <div className="absolute top-[3.75rem] left-8 w-4 h-4 bg-zinc-950 rounded-full border-b-2 border-white/20">
            <div className="absolute top-1 left-1 w-1 h-1 bg-white rounded-full opacity-60" />
        </div>
        <div className="absolute top-[3.75rem] right-8 w-4 h-4 bg-zinc-950 rounded-full border-b-2 border-white/20">
            <div className="absolute top-1 left-1 w-1 h-1 bg-white rounded-full opacity-60" />
        </div>
        
        {/* Nose - Defined */}
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-4 h-2 bg-[#d4a373] rounded-full opacity-40" />

        {/* Mouth - Iconic Smile during celebration */}
        <motion.div 
          className="absolute bottom-6 left-1/2 -translate-x-1/2 w-10 h-3 bg-[#8b5e3c]/30 rounded-full overflow-hidden flex items-center justify-center px-1"
          animate={action === 'celebrate' ? { height: 14, backgroundColor: '#ffffff' } : { height: 3 }}
        >
            {action === 'celebrate' && (
                <div className="w-full h-1 bg-gray-200" />
            )}
        </motion.div>
      </motion.div>

      {/* Neck */}
      <div className="w-8 h-6 bg-[#d4a373] -mt-2 z-10" />

      {/* Body / Shirt - Portugal Kit style */}
      <motion.div 
        className="w-20 h-24 bg-red-600 rounded-t-xl relative -mt-1 shadow-inner flex flex-col items-center pt-2 z-10 border-b-4 border-black/10"
        animate={
          action === 'kick' ? { rotate: [0, -20, 40, 0], transition: { duration: 0.3 } } : 
          action === 'celebrate' ? { y: [0, -60, 0], scale: [1, 1.2, 1] } : {}
        }
      >
        {/* Kit details */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-green-700 opacity-30" />
        <div className="flex flex-col items-center mt-1">
            <span className="text-white text-[9px] font-black tracking-[0.2em] leading-none opacity-90 drop-shadow-sm">RONALDO</span>
            <span className="text-white text-4xl font-black leading-none -mt-1 drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">7</span>
        </div>
        {/* Crest */}
        <div className="absolute top-6 left-2 w-3 h-4 bg-green-700 rounded-sm border border-yellow-400 rotate-12" />
      </motion.div>

      {/* Arms */}
      <motion.div 
        className="absolute left-4 top-36 w-5 h-16 bg-red-600 rounded-full origin-top z-0 border-r-2 border-black/5"
        animate={
          action === 'celebrate' ? { rotate: [-10, -170, -170], x: [-10, -20, -20], y: [0, -60, 0] } : 
          action === 'kick' ? { rotate: 80 } : { rotate: 5, y: [0, 2, 0] }
        }
      />
      <motion.div 
        className="absolute right-4 top-36 w-5 h-16 bg-red-600 rounded-full origin-top z-0 border-l-2 border-black/5"
        animate={
          action === 'celebrate' ? { rotate: [10, 170, 170], x: [10, 20, 20], y: [0, -60, 0] } : 
          action === 'kick' ? { rotate: -80 } : { rotate: -5, y: [0, 2, 0] }
        }
      />

      {/* Legs & Shorts */}
      <div className="flex gap-1 -mt-2">
        <motion.div 
          className="w-9 h-14 bg-green-800 border-t-8 border-red-600 rounded-b-md origin-top flex flex-col"
          animate={
            action === 'kick' ? { rotate: [0, 110, -20], transition: { duration: 0.3 } } : 
            action === 'celebrate' ? { y: [0, -60, 0], rotate: [0, -30, -30] } : 
            action === 'sad' ? { rotate: 10 } : {}
          }
        >
            <div className="h-full bg-white mt-auto rounded-b-md" />
        </motion.div>
        <motion.div 
          className="w-9 h-14 bg-green-800 border-t-8 border-red-600 rounded-b-md origin-top flex flex-col"
          animate={
            action === 'celebrate' ? { y: [0, -60, 0], rotate: [0, 30, 30] } : 
            action === 'sad' ? { rotate: -10 } : {}
          }
        >
             <div className="h-full bg-white mt-auto rounded-b-md" />
        </motion.div>
      </div>

      {/* Cleats */}
      <div className="flex gap-12 -mt-2 px-2">
        <motion.div 
            className="w-10 h-4 bg-zinc-900 rounded-full border-b-4 border-yellow-500" 
            animate={action === 'celebrate' ? { y: [0, -60, 0], rotate: [-20, -20] } : {}}
        />
        <motion.div 
            className="w-10 h-4 bg-zinc-900 rounded-full border-b-4 border-yellow-500" 
            animate={action === 'celebrate' ? { y: [0, -60, 0], rotate: [20, 20] } : {}}
        />
      </div>
    </div>
  );
}

