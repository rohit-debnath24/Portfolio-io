'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Play, ArrowUpRight } from 'lucide-react'
import Magnetic from '@/components/Magnetic'

export default function BoltNewSection() {
  return (
    <div className="relative w-full max-w-6xl mx-auto z-10 my-12 animate-fade-in">
      {/* Outer container with double border and target brackets */}
      <div className="border border-white/5 bg-[#0c120f]/40 relative grid lg:grid-cols-12 gap-0 overflow-hidden">
        
        {/* Decorative corner indicators in neon green */}
        <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-[#00ff88] z-20" />
        <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-[#00ff88] z-20" />
        <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-[#00ff88] z-20" />
        <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-[#00ff88] z-20" />

        {/* Left Column: Title & SVG Constellation Background */}
        <div className="lg:col-span-5 p-8 border-r border-white/5 flex flex-col justify-between min-h-[380px] relative">
          
          {/* Background grid details */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none select-none">
            <svg width="100%" height="100%">
              <circle cx="50" cy="50" r="100" stroke="#00ff88" strokeWidth="1" fill="none" strokeDasharray="2 4" />
              <line x1="50" y1="50" x2="300" y2="300" stroke="#00ff88" strokeWidth="1" />
            </svg>
          </div>

          <div className="relative z-10">
            <h2 className="font-display font-black text-2xl tracking-widest text-[#f4fff8] uppercase leading-none">
              WE ARE
              <br />
              BUILDING
              <br />
              <span className="text-[#00ff88]">BOLT.NEW</span>
            </h2>
          </div>

          {/* Tbilisi events notice or active indicator */}
          <div className="pt-4 flex items-center gap-3 relative z-10">
            <span className="font-mono text-[9px] text-[#00ff88] px-2 py-1 border border-[#00ff88]/20 uppercase">
              SECTOR_5
            </span>
            <span className="font-mono text-[9px] text-[#a0b0a8] uppercase">
              // CASE_STUDY_01 ACTIVE
            </span>
          </div>
        </div>

        {/* Right Column: Video/Visual Panel Mockup */}
        <div className="lg:col-span-7 p-8 flex flex-col justify-between bg-black/20 min-h-[380px] relative group overflow-hidden">
          
          {/* Mock Video Container */}
          <div className="relative w-full h-64 border border-white/5 bg-[#040806] rounded-xl flex items-center justify-between p-6 overflow-hidden hover:border-[#00ff88]/20 transition-all duration-300">
            
            {/* Play Button Overlay */}
            <div className="absolute inset-0 flex items-center justify-center bg-black/40 z-20 group-hover:bg-black/20 transition-colors duration-300">
              <motion.button 
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="w-16 h-12 bg-[#00ff88] hover:bg-white text-black flex items-center justify-center rounded-2xl shadow-[0_0_20px_rgba(0,255,136,0.3)] transition-colors duration-300"
                aria-label="Play case study video"
              >
                <Play className="w-6 h-6 fill-current text-black ml-0.5" />
              </motion.button>
            </div>

            {/* Left side graphics inside mock player */}
            <div className="relative z-10 flex flex-col justify-between h-full w-1/2">
              <div className="flex flex-col gap-1">
                <span className="font-display font-black text-[9px] tracking-[0.25em] text-[#a0b0a8] uppercase">
                  EVIL MARTIANS
                </span>
                <span className="font-display font-black text-xl tracking-tight text-white uppercase">
                  bolt.new
                </span>
              </div>
              <div className="w-16 h-0.5 bg-[#00ff88] opacity-50" />
            </div>

            {/* Right side avatar inside mock player */}
            <div className="relative h-full w-1/2 flex flex-col justify-end items-end select-none">
              
              {/* Technical schematic abstract avatar replacing portrait */}
              <div className="absolute right-0 top-0 w-32 h-32 rounded-full border border-[#00ff88]/10 flex items-center justify-center">
                <div className="w-24 h-24 rounded-full border border-dashed border-[#00ff88]/20 flex items-center justify-center animate-[spin_40s_linear_infinite]">
                  <div className="w-16 h-16 rounded-full border border-[#00ff88]/30 flex items-center justify-center">
                    <div className="w-8 h-8 rounded-full bg-[#00ff88]/10 flex items-center justify-center">
                      {/* Nested details */}
                    </div>
                  </div>
                </div>
                {/* Horizontal center lines */}
                <div className="absolute w-full h-px bg-[#00ff88]/10" />
                <div className="absolute h-full w-px bg-[#00ff88]/10" />
              </div>

              {/* Subtext description at player bottom right */}
              <div className="text-right z-10">
                <span className="font-mono text-xs font-bold text-white block">
                  Albert Pai
                </span>
                <span className="font-mono text-[9px] text-[#a0b0a8] uppercase">
                  Co-Founder and CTO
                </span>
              </div>
            </div>

            {/* Space theme circular grid background */}
            <div className="absolute -right-16 -top-16 w-64 h-64 rounded-full bg-[radial-gradient(circle_at_center,rgba(0,255,136,0.02)_0%,transparent_70%)] pointer-events-none" />
          </div>

          {/* Bottom details block inside column */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center pt-6 border-t border-white/5 mt-4">
            
            {/* Logo text left */}
            <div className="md:col-span-3 flex items-center gap-1.5">
              <span className="font-display font-black text-lg text-[#00ff88] tracking-tighter">
                bolt<span className="text-white">.new</span>
              </span>
            </div>

            {/* Middle Description */}
            <div className="md:col-span-6 text-left">
              <span className="block font-mono text-[9px] uppercase tracking-wider text-[#00ff88] mb-0.5">
                $113M TOTAL FUNDING
              </span>
              <p className="text-[11px] font-mono text-[#a0b0a8] leading-relaxed">
                With Evil Martians, bolt.new scaled to 3M+ MAU and grew ARR to $40M in 5 months. <span className="text-white px-1 border border-white/10 text-[9px]">AI</span>
              </p>
            </div>

            {/* Right link button */}
            <div className="md:col-span-3 text-right">
              <Magnetic range={30} strength={0.3}>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1 text-[10px] font-mono uppercase tracking-wider text-[#00ff88] hover:text-white transition-colors duration-300"
                >
                  [READ CASE STUDY]
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </Magnetic>
            </div>

          </div>

        </div>

      </div>
    </div>
  )
}
