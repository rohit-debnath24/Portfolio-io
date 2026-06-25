'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import Magnetic from '@/components/Magnetic'

export default function PostCSSSection() {
  return (
    <div className="relative w-full max-w-6xl mx-auto z-10 my-12 animate-fade-in">
      
      {/* 1. PostCSS Core Block */}
      <div id="opensource" className="border border-white/5 bg-[#0c120f]/40 relative grid lg:grid-cols-12 gap-0 overflow-hidden mb-6">
        
        {/* Decorative corner indicators in neon green */}
        <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-[#00ff88] z-20" />
        <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-[#00ff88] z-20" />
        <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-[#00ff88] z-20" />
        <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-[#00ff88] z-20" />

        {/* Left Column: Title */}
        <div className="lg:col-span-5 p-8 border-r border-white/5 flex flex-col justify-between min-h-[380px] relative">
          
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none select-none">
            <svg width="100%" height="100%">
              <circle cx="200" cy="150" r="120" stroke="#00ff88" strokeWidth="1" fill="none" strokeDasharray="3 6" />
              <line x1="200" y1="150" x2="50" y2="50" stroke="#00ff88" strokeWidth="1" />
            </svg>
          </div>

          <div className="relative z-10">
            <h2 className="font-display font-black text-2xl tracking-widest text-[#f4fff8] uppercase leading-none">
              OUR OPEN
              <br />
              SOURCE
              <br />
              <span className="text-[#00ff88]">POSTCSS</span>
            </h2>
          </div>

          <div className="pt-4 flex items-center gap-3 relative z-10">
            <span className="font-mono text-[9px] text-[#00ff88] px-2 py-1 border border-[#00ff88]/20 uppercase">
              SECTOR_6
            </span>
            <span className="font-mono text-[9px] text-[#a0b0a8] uppercase">
              // DOWNLOAD_METRICS ACTIVE
            </span>
          </div>
        </div>

        {/* Right Column: High-fidelity download comparison chart */}
        <div className="lg:col-span-7 p-8 flex flex-col justify-between bg-black/20 min-h-[380px] relative">
          
          <div className="w-full flex-grow flex flex-col justify-center space-y-8 relative">
            
            {/* 1.9x Callout Overlay */}
            <div className="absolute right-12 top-6 text-right z-10 select-none">
              <span className="font-display text-5xl font-black text-[#d1f5e2] leading-none drop-shadow-[0_0_15px_rgba(0,255,136,0.2)] block">
                1.9
              </span>
              <span className="font-mono text-[9px] uppercase tracking-wider text-[#00ff88] block">
                MORE DOWNLOADS<br />THAN REACT
              </span>
            </div>

            {/* Chart Bars */}
            <div className="space-y-6 pt-12 pr-16">
              
              {/* PostCSS Bar */}
              <div className="relative">
                <div className="flex justify-between text-xs font-mono mb-2">
                  <div className="flex flex-col">
                    <span className="font-bold text-white">PostCSS</span>
                    <span className="text-[9px] text-[#a0b0a8]">by Evil Martians</span>
                  </div>
                  <span className="text-white font-bold self-end">150M</span>
                </div>
                {/* Horizontal bar track */}
                <div className="w-full h-1.5 bg-white/5 relative">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: '100%' }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: 'easeOut' }}
                    className="h-full bg-[#00ff88] shadow-[0_0_8px_rgba(0,255,136,0.6)]"
                  />
                </div>
              </div>

              {/* React Bar */}
              <div className="relative">
                <div className="flex justify-between text-xs font-mono mb-2">
                  <div className="flex flex-col">
                    <span className="font-bold text-[#a0b0a8]">React</span>
                    <span className="text-[9px] text-[#a0b0a8]/60">by Meta</span>
                  </div>
                  <span className="text-[#a0b0a8] font-bold self-end">80M</span>
                </div>
                {/* Horizontal bar track */}
                <div className="w-full h-1.5 bg-white/5 relative">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: '53.3%' }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: 'easeOut', delay: 0.1 }}
                    className="h-full bg-[#a0b0a8]/35"
                  />
                </div>
              </div>

            </div>

            {/* Chart X Axis Scale Labels */}
            <div className="flex justify-between text-[8px] font-mono text-[#a0b0a8]/40 pt-4 border-t border-white/5 pr-16 select-none">
              <span>0</span>
              <span>50M</span>
              <span>100M</span>
              <span>150M</span>
            </div>

            <div className="text-[8px] font-mono text-[#a0b0a8]/40 text-right pr-16 select-none">
              Downloads per week. As of March 2026. [Source]
            </div>

          </div>

          {/* Bottom details block inside column */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center pt-6 border-t border-white/5 mt-6">
            
            {/* Logo left */}
            <div className="md:col-span-2 flex items-center justify-start">
              {/* PostCSS red/green stylized circular logo symbol */}
              <div className="w-12 h-12 rounded-full border border-[#00ff88]/30 flex items-center justify-center relative overflow-hidden bg-[#00ff88]/5">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-[#00ff88]">
                  <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
                  <polygon points="12,5 17,14 7,14" stroke="currentColor" strokeWidth="1.2" fill="none" />
                  <circle cx="12" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.2" />
                </svg>
              </div>
            </div>

            {/* Description Center */}
            <div className="md:col-span-8 text-left">
              <p className="text-[11px] font-mono text-[#a0b0a8] leading-relaxed">
                The #2 most popular CSS tool on the web, used by ≈0.4% of all web pages. Google, Facebook, and GitHub use PostCSS in their products.
              </p>
            </div>

            {/* Link right */}
            <div className="md:col-span-2 text-right">
              <Magnetic range={30} strength={0.3}>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1 text-[10px] font-mono uppercase tracking-wider text-[#00ff88] hover:text-white transition-colors duration-300"
                >
                  [READ MORE]
                </a>
              </Magnetic>
            </div>

          </div>

        </div>

      </div>

      {/* 2. Other Open Source Projects Sliding Section */}
      <div id="products" className="w-full relative">
        
        {/* Section Header with slide controls */}
        <div className="flex justify-between items-center mb-6 px-1 select-none">
          <span className="font-mono text-xs uppercase tracking-widest text-[#00ff88] font-bold">
            OTHER OPEN SOURCE PROJECTS
          </span>
          <div className="flex items-center gap-4 text-xs font-mono">
            <button className="text-[#a0b0a8]/40 hover:text-[#00ff88] transition-colors">[&lt;]</button>
            <button className="text-[#a0b0a8]/40 hover:text-[#00ff88] transition-colors">[&gt;]</button>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-[#00ff88] hover:text-white transition-colors">
              [SEE ALL]
            </a>
          </div>
        </div>

        {/* 3-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1: IMGPROXY */}
          <div className="border border-white/5 bg-[#0c120f]/30 p-6 flex flex-col justify-between min-h-[300px] relative group hover:border-[#00ff88]/20 transition-all duration-300">
            <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-[#00ff88]/40 group-hover:border-[#00ff88]" />
            <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-[#00ff88]/40 group-hover:border-[#00ff88]" />
            <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-[#00ff88]/40 group-hover:border-[#00ff88]" />
            <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-[#00ff88]/40 group-hover:border-[#00ff88]" />

            <div>
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="font-display font-black text-sm text-[#f4fff8] tracking-wider uppercase leading-none">
                    IMGPROXY
                  </h3>
                  <span className="font-mono text-[9px] text-[#00ff88] uppercase block mt-1">
                    ⚡ 32M
                  </span>
                </div>
                <span className="font-mono text-[10px] text-[#a0b0a8]/20">01</span>
              </div>

              {/* Graphic Icon SVG (image frames + plus sign) */}
              <div className="w-full h-24 flex items-center justify-center bg-black/10 border border-white/[0.02] rounded-lg mb-6 group-hover:border-[#00ff88]/10 transition-colors">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" className="text-[#00ff88] opacity-75 group-hover:opacity-100 transition-opacity">
                  {/* Canvas border */}
                  <rect x="10" y="10" width="28" height="28" rx="2" stroke="currentColor" strokeWidth="1.5" />
                  {/* Cursor or cross */}
                  <path d="M20 24h8M24 20v8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  {/* Outer bracket arrow */}
                  <path d="M35 32l3 3m0 0l-2-4m2 4l-4-2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </div>
            </div>

            <p className="text-[11px] font-mono text-[#a0b0a8] leading-relaxed">
              Fast and secure on-the-fly image optimization server.
            </p>
          </div>

          {/* Card 2: ANYCABLE */}
          <div className="border border-white/5 bg-[#0c120f]/30 p-6 flex flex-col justify-between min-h-[300px] relative group hover:border-[#00ff88]/20 transition-all duration-300">
            <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-[#00ff88]/40 group-hover:border-[#00ff88]" />
            <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-[#00ff88]/40 group-hover:border-[#00ff88]" />
            <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-[#00ff88]/40 group-hover:border-[#00ff88]" />
            <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-[#00ff88]/40 group-hover:border-[#00ff88]" />

            <div>
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="font-display font-black text-sm text-[#f4fff8] tracking-wider uppercase leading-none">
                    ANYCABLE
                  </h3>
                  <span className="font-mono text-[9px] text-[#00ff88] uppercase block mt-1">
                    🔥 9M
                  </span>
                </div>
                <span className="font-mono text-[10px] text-[#a0b0a8]/20">02</span>
              </div>

              {/* Graphic Icon SVG (3D Socket Dice) */}
              <div className="w-full h-24 flex items-center justify-center bg-black/10 border border-white/[0.02] rounded-lg mb-6 group-hover:border-[#00ff88]/10 transition-colors">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" className="text-[#00ff88] opacity-75 group-hover:opacity-100 transition-opacity">
                  {/* Isometric box outline */}
                  <path d="M24 8l14 8v16L24 40 10 32V16L24 8z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                  <path d="M10 16l14 8 14-8M24 24v16" stroke="currentColor" strokeWidth="1.5" />
                  {/* Socket points */}
                  <circle cx="17" cy="24" r="1.5" fill="currentColor" />
                  <circle cx="17" cy="30" r="1.5" fill="currentColor" />
                  <circle cx="31" cy="24" r="1.5" fill="currentColor" />
                  <circle cx="31" cy="30" r="1.5" fill="currentColor" />
                </svg>
              </div>
            </div>

            <p className="text-[11px] font-mono text-[#a0b0a8] leading-relaxed">
              Realtime server powering realtime features.
            </p>
          </div>

          {/* Card 3: LEFTHOOK */}
          <div className="border border-white/5 bg-[#0c120f]/30 p-6 flex flex-col justify-between min-h-[300px] relative group hover:border-[#00ff88]/20 transition-all duration-300">
            <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-[#00ff88]/40 group-hover:border-[#00ff88]" />
            <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-[#00ff88]/40 group-hover:border-[#00ff88]" />
            <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-[#00ff88]/40 group-hover:border-[#00ff88]" />
            <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-[#00ff88]/40 group-hover:border-[#00ff88]" />

            <div>
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="font-display font-black text-sm text-[#f4fff8] tracking-wider uppercase leading-none">
                    LEFTHOOK
                  </h3>
                  <span className="font-mono text-[9px] text-[#00ff88] uppercase block mt-1">
                    📦 1.2M/WK
                  </span>
                </div>
                <span className="font-mono text-[10px] text-[#a0b0a8]/20">03</span>
              </div>

              {/* Graphic Icon SVG (rolled hook anchor) */}
              <div className="w-full h-24 flex items-center justify-center bg-black/10 border border-white/[0.02] rounded-lg mb-6 group-hover:border-[#00ff88]/10 transition-colors">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" className="text-[#00ff88] opacity-75 group-hover:opacity-100 transition-opacity">
                  {/* Hook structure */}
                  <path d="M14 20h20v6c0 6-4 10-10 10s-10-4-10-10v-6z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  <path d="M24 12v8M20 12h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  <circle cx="24" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.5" />
                </svg>
              </div>
            </div>

            <p className="text-[11px] font-mono text-[#a0b0a8] leading-relaxed">
              Git hooks manager for Node.js, Ruby, or any other type of projects.
            </p>
          </div>

        </div>

      </div>

    </div>
  )
}
