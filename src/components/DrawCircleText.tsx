'use client'

import React from 'react'
import { motion } from 'framer-motion'

export const DrawCircleText = () => {
  return (
    <div className="relative w-full max-w-6xl mx-auto z-10 animate-fade-in mb-6">
      {/* Console frame borders */}
      <div className="border border-white/5 bg-[#0c120f]/40 relative p-8 md:p-16 flex flex-col items-center justify-center overflow-hidden min-h-[220px]">
        
        {/* Corner indicators */}
        <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-[#00ff88] z-20" />
        <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-[#00ff88] z-20" />
        <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-[#00ff88] z-20" />
        <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-[#00ff88] z-20" />

        {/* Background grid details */}
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none select-none">
          <svg width="100%" height="100%">
            <circle cx="50%" cy="50%" r="150" stroke="#00ff88" strokeWidth="1" fill="none" strokeDasharray="3 6" />
          </svg>
        </div>

        {/* Text and animated SVG loop */}
        <h1 className="max-w-2xl text-center font-display font-black text-3xl md:text-5xl leading-snug text-white uppercase relative z-10 select-none">
          Scale your{" "}
          <span className="relative inline-block px-2">
            <span className="text-[#00ff88]">Marketing</span>
            <svg
              viewBox="0 0 286 73"
              fill="none"
              className="absolute -left-2 -right-2 -top-2 bottom-0 translate-y-2 w-[110%] h-[110%]"
            >
              <motion.path
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 1.5,
                  ease: "easeInOut",
                  delay: 0.2
                }}
                d="M142.293 1C106.854 16.8908 6.08202 7.17705 1.23654 43.3756C-2.10604 68.3466 29.5633 73.2652 122.688 71.7518C215.814 70.2384 316.298 70.689 275.761 38.0785C230.14 1.37835 97.0503 24.4575 52.9384 1"
                stroke="#00ff88"
                strokeWidth="3.5"
                strokeLinecap="round"
              />
            </svg>
          </span>{" "}
          with Simple AI Tools
        </h1>

        <div className="absolute bottom-4 left-6 flex items-center gap-2">
          <span className="font-mono text-[9px] text-[#00ff88]/40 uppercase">// SYSTEM INITIALIZED</span>
        </div>
      </div>
    </div>
  )
}
