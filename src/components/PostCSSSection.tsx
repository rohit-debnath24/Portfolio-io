'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import Magnetic from '@/components/Magnetic'

export default function PostCSSSection() {
  return (
    <div className="relative w-full max-w-6xl mx-auto z-10 my-12 animate-fade-in">
      
      {/* 1. NanoBonds DeFi Block */}
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
              OUR DEFI
              <br />
              PLATFORM
              <br />
              <span className="text-[#00ff88]">NANOBONDS</span>
            </h2>
          </div>

          <div className="pt-4 flex items-center gap-3 relative z-10">
            <span className="font-mono text-[9px] text-[#00ff88] px-2 py-1 border border-[#00ff88]/20 uppercase">
              SECTOR_6
            </span>
            <span className="font-mono text-[9px] text-[#a0b0a8] uppercase">
              // FINANCIAL_LEDGER ACTIVE
            </span>
          </div>
        </div>

        {/* Right Column: Yield comparison chart */}
        <div className="lg:col-span-7 p-8 flex flex-col justify-between bg-black/20 min-h-[380px] relative">
          
          <div className="w-full flex-grow flex flex-col justify-center space-y-8 relative">
            
            {/* 2.1x Callout Overlay */}
            <div className="absolute right-12 top-6 text-right z-10 select-none">
              <span className="font-display text-5xl font-black text-[#d1f5e2] leading-none drop-shadow-[0_0_15px_rgba(0,255,136,0.2)] block">
                2.1
              </span>
              <span className="font-mono text-[9px] uppercase tracking-wider text-[#00ff88] block">
                MORE RETURN<br />THAN BANK RATES
              </span>
            </div>

            {/* Chart Bars */}
            <div className="space-y-6 pt-12 pr-16">
              
              {/* NanoBonds Bar */}
              <div className="relative">
                <div className="flex justify-between text-xs font-mono mb-2">
                  <div className="flex flex-col">
                    <span className="font-bold text-white">NanoBonds Yield</span>
                    <span className="text-[9px] text-[#a0b0a8]">via Stablecoin Pools</span>
                  </div>
                  <span className="text-white font-bold self-end">6.5%</span>
                </div>
                {/* Horizontal bar track */}
                <div className="w-full h-1.5 bg-white/5 relative">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: '86.6%' }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: 'easeOut' }}
                    className="h-full bg-[#00ff88] shadow-[0_0_8px_rgba(0,255,136,0.6)]"
                  />
                </div>
              </div>

              {/* Traditional Bank Bar */}
              <div className="relative">
                <div className="flex justify-between text-xs font-mono mb-2">
                  <div className="flex flex-col">
                    <span className="font-bold text-[#a0b0a8]">Standard Bank Deposit</span>
                    <span className="text-[9px] text-[#a0b0a8]/60">Average rate</span>
                  </div>
                  <span className="text-[#a0b0a8] font-bold self-end">3.0%</span>
                </div>
                {/* Horizontal bar track */}
                <div className="w-full h-1.5 bg-white/5 relative">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: '40%' }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: 'easeOut', delay: 0.1 }}
                    className="h-full bg-[#a0b0a8]/35"
                  />
                </div>
              </div>

            </div>

            {/* Chart X Axis Scale Labels */}
            <div className="flex justify-between text-[8px] font-mono text-[#a0b0a8]/40 pt-4 border-t border-white/5 pr-16 select-none">
              <span>0%</span>
              <span>2.5%</span>
              <span>5.0%</span>
              <span>7.5%</span>
            </div>

            <div className="text-[8px] font-mono text-[#a0b0a8]/40 text-right pr-16 select-none">
              Yield comparisons as of January 2026.
            </div>

          </div>

          {/* Bottom details block inside column */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center pt-6 border-t border-white/5 mt-6">
            
            {/* Logo left */}
            <div className="md:col-span-2 flex items-center justify-start">
              <div className="w-12 h-12 rounded-full border border-[#00ff88]/30 flex items-center justify-center relative overflow-hidden bg-[#00ff88]/5">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-[#00ff88]">
                  <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M8 12h8M12 8v8" stroke="currentColor" strokeWidth="1.5" />
                </svg>
              </div>
            </div>

            {/* Description Center */}
            <div className="md:col-span-8 text-left">
              <p className="text-[11px] font-mono text-[#a0b0a8] leading-relaxed">
                NanoBonds is a decentralized finance (DeFi) platform built on Solidity that democratizes access to government bonds using stablecoins and fractional assets.
              </p>
            </div>

            {/* Link right */}
            <div className="md:col-span-2 text-right">
              <Magnetic range={30} strength={0.3}>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[10px] font-mono uppercase tracking-wider text-[#00ff88] hover:text-white transition-colors duration-300"
                >
                  [VIEW DEFI]
                </a>
              </Magnetic>
            </div>

          </div>

        </div>

      </div>

      {/* 2. Other Core Technical Systems Section */}
      <div className="w-full relative">
        
        {/* Section Header with slide controls */}
        <div className="flex justify-between items-center mb-6 px-1 select-none">
          <span className="font-mono text-xs uppercase tracking-widest text-[#00ff88] font-bold">
            OTHER PROJECTS & ENGINE PIPELINES
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
          
          {/* Card 1: HIVE VISION */}
          <div className="border border-white/5 bg-[#0c120f]/30 p-6 flex flex-col justify-between min-h-[300px] relative group hover:border-[#00ff88]/20 transition-all duration-300">
            <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-[#00ff88]/40 group-hover:border-[#00ff88]" />
            <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-[#00ff88]/40 group-hover:border-[#00ff88]" />
            <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-[#00ff88]/40 group-hover:border-[#00ff88]" />
            <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-[#00ff88]/40 group-hover:border-[#00ff88]" />

            <div>
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="font-display font-black text-sm text-[#f4fff8] tracking-wider uppercase leading-none">
                    HIVE VISION
                  </h3>
                  <span className="font-mono text-[9px] text-[#00ff88] uppercase block mt-1">
                    🤖 OpenCV / YOLO
                  </span>
                </div>
                <span className="font-mono text-[10px] text-[#a0b0a8]/20">01</span>
              </div>

              {/* Graphic Icon SVG (image frames + plus sign) */}
              <div className="w-full h-24 flex items-center justify-center bg-black/10 border border-white/[0.02] rounded-lg mb-6 group-hover:border-[#00ff88]/10 transition-colors">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" className="text-[#00ff88] opacity-75 group-hover:opacity-100 transition-opacity">
                  {/* Camera lens framing */}
                  <rect x="8" y="12" width="32" height="24" rx="2" stroke="currentColor" strokeWidth="1.5" />
                  <circle cx="24" cy="24" r="5" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M12 16h4M32 16h4" stroke="currentColor" strokeWidth="1.5" />
                </svg>
              </div>
            </div>

            <p className="text-[11px] font-mono text-[#a0b0a8] leading-relaxed">
              Refined YOLO & OpenCV pipelines for multi-camera video tracking and body detection models.
            </p>
          </div>

          {/* Card 2: BOND PROTOCOL */}
          <div className="border border-white/5 bg-[#0c120f]/30 p-6 flex flex-col justify-between min-h-[300px] relative group hover:border-[#00ff88]/20 transition-all duration-300">
            <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-[#00ff88]/40 group-hover:border-[#00ff88]" />
            <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-[#00ff88]/40 group-hover:border-[#00ff88]" />
            <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-[#00ff88]/40 group-hover:border-[#00ff88]" />
            <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-[#00ff88]/40 group-hover:border-[#00ff88]" />

            <div>
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="font-display font-black text-sm text-[#f4fff8] tracking-wider uppercase leading-none">
                    BOND LEDGER
                  </h3>
                  <span className="font-mono text-[9px] text-[#00ff88] uppercase block mt-1">
                    💎 Solidity Smart Contracts
                  </span>
                </div>
                <span className="font-mono text-[10px] text-[#a0b0a8]/20">02</span>
              </div>

              {/* Graphic Icon SVG (3D Socket Dice / nodes) */}
              <div className="w-full h-24 flex items-center justify-center bg-black/10 border border-white/[0.02] rounded-lg mb-6 group-hover:border-[#00ff88]/10 transition-colors">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" className="text-[#00ff88] opacity-75 group-hover:opacity-100 transition-opacity">
                  {/* Ledger nodes connection */}
                  <rect x="8" y="8" width="10" height="10" rx="1" stroke="currentColor" strokeWidth="1.5" />
                  <rect x="30" y="8" width="10" height="10" rx="1" stroke="currentColor" strokeWidth="1.5" />
                  <rect x="19" y="30" width="10" height="10" rx="1" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M18 13h12M13 18l6 12M35 18l-6 12" stroke="currentColor" strokeWidth="1.5" strokeDasharray="2 2" />
                </svg>
              </div>
            </div>

            <p className="text-[11px] font-mono text-[#a0b0a8] leading-relaxed">
              Designed smart contract tokenization protocol representing government bonds in decentralized finance.
            </p>
          </div>

          {/* Card 3: MLOPS INGEST */}
          <div className="border border-white/5 bg-[#0c120f]/30 p-6 flex flex-col justify-between min-h-[300px] relative group hover:border-[#00ff88]/20 transition-all duration-300">
            <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-[#00ff88]/40 group-hover:border-[#00ff88]" />
            <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-[#00ff88]/40 group-hover:border-[#00ff88]" />
            <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-[#00ff88]/40 group-hover:border-[#00ff88]" />
            <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-[#00ff88]/40 group-hover:border-[#00ff88]" />

            <div>
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="font-display font-black text-sm text-[#f4fff8] tracking-wider uppercase leading-none">
                    MLOPS INGEST
                  </h3>
                  <span className="font-mono text-[9px] text-[#00ff88] uppercase block mt-1">
                    🐳 Docker / HLS
                  </span>
                </div>
                <span className="font-mono text-[10px] text-[#a0b0a8]/20">03</span>
              </div>

              {/* Graphic Icon SVG (rolled hook anchor) */}
              <div className="w-full h-24 flex items-center justify-center bg-black/10 border border-white/[0.02] rounded-lg mb-6 group-hover:border-[#00ff88]/10 transition-colors">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" className="text-[#00ff88] opacity-75 group-hover:opacity-100 transition-opacity">
                  {/* Container Stack */}
                  <path d="M12 14h24v6H12v-6zm0 10h24v6H12v-6zm0 10h24v6H12v-6z" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M16 14v20M32 14v20" stroke="currentColor" strokeWidth="1.5" />
                </svg>
              </div>
            </div>

            <p className="text-[11px] font-mono text-[#a0b0a8] leading-relaxed">
              Optimized container pipelines utilizing streaming protocols and Vector DBs for sub-millisecond similarity matching.
            </p>
          </div>

        </div>

      </div>

    </div>
  )
}
