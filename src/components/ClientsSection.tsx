'use client'

import React from 'react'

export default function ClientsSection() {
  return (
    <div className="relative w-full max-w-6xl mx-auto z-10 my-12 animate-fade-in">
      
      {/* 1. More Happy Clients Section */}
      <div id="clients" className="w-full relative mb-12">
        
        {/* Section Header */}
        <div className="flex justify-between items-center mb-6 px-1 select-none">
          <span className="font-mono text-xs uppercase tracking-widest text-[#00ff88] font-bold">
            MORE HAPPY CLIENTS
          </span>
          <div className="flex items-center gap-4 text-xs font-mono">
            <button className="text-[#a0b0a8]/40 hover:text-[#00ff88] transition-colors">[&lt;]</button>
            <button className="text-[#a0b0a8]/40 hover:text-[#00ff88] transition-colors">[&gt;]</button>
            <a href="#contact" className="text-[#00ff88] hover:text-white transition-colors">
              [SEE ALL]
            </a>
          </div>
        </div>

        {/* 3-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1: LAGO */}
          <div className="border border-white/5 bg-[#0c120f]/30 p-6 flex flex-col justify-between min-h-[280px] relative group hover:border-[#00ff88]/20 transition-all duration-300">
            <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-[#00ff88]/40 group-hover:border-[#00ff88]" />
            <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-[#00ff88]/40 group-hover:border-[#00ff88]" />
            <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-[#00ff88]/40 group-hover:border-[#00ff88]" />
            <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-[#00ff88]/40 group-hover:border-[#00ff88]" />

            <div>
              <span className="font-mono text-[9px] text-[#00ff88] uppercase block mb-1">
                $22M TOTAL FUNDING
              </span>
              
              {/* Logo Box */}
              <div className="w-full h-24 flex items-center justify-center bg-black/10 border border-white/[0.02] rounded-lg mb-6 select-none">
                <div className="flex items-center gap-3">
                  {/* Curved concentric arches Lago symbol */}
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className="text-[#00ff88]">
                    <path d="M6 26c0-11 9-20 20-20M12 26c0-7.7 6.3-14 14-14M18 26c0-4.4 3.6-8 8-8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                  </svg>
                  <span className="font-display font-black text-2xl text-white tracking-tight">
                    Lago
                  </span>
                </div>
              </div>
            </div>

            <div>
              <p className="text-[11px] font-mono text-[#a0b0a8] leading-relaxed mb-2">
                Scaled engineering team to ramp up feature delivery.
              </p>
              <span className="text-[9px] font-mono text-[#00ff88]/50 uppercase tracking-widest block">// DEVTOOL</span>
            </div>
          </div>

          {/* Card 2: WALLARM */}
          <div className="border border-white/5 bg-[#0c120f]/30 p-6 flex flex-col justify-between min-h-[280px] relative group hover:border-[#00ff88]/20 transition-all duration-300">
            <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-[#00ff88]/40 group-hover:border-[#00ff88]" />
            <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-[#00ff88]/40 group-hover:border-[#00ff88]" />
            <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-[#00ff88]/40 group-hover:border-[#00ff88]" />
            <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-[#00ff88]/40 group-hover:border-[#00ff88]" />

            <div>
              <span className="font-mono text-[9px] text-[#00ff88] uppercase block mb-1">
                $75M TOTAL FUNDING
              </span>
              
              {/* Logo Box */}
              <div className="w-full h-24 flex items-center justify-center bg-black/10 border border-white/[0.02] rounded-lg mb-6 select-none">
                <div className="flex items-center gap-2">
                  {/* Stairs/wall Wallarm symbol */}
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className="text-[#00ff88]">
                    <path d="M6 22h8v4H6v-4zm6-6h8v4h-8v-4zm6-6h8v4h-8v-4z" fill="currentColor" opacity="0.8" />
                  </svg>
                  <span className="font-display font-black text-xl text-white tracking-tight lowercase">
                    wallarm
                  </span>
                </div>
              </div>
            </div>

            <div>
              <p className="text-[11px] font-mono text-[#a0b0a8] leading-relaxed mb-2">
                Rebuilt Go event pipeline securing 20,000+ apps and APIs.
              </p>
              <span className="text-[9px] font-mono text-[#00ff88]/50 uppercase tracking-widest block">// CYBERSECURITY</span>
            </div>
          </div>

          {/* Card 3: DAYLIGHT */}
          <div className="border border-white/5 bg-[#0c120f]/30 p-6 flex flex-col justify-between min-h-[280px] relative group hover:border-[#00ff88]/20 transition-all duration-300">
            <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-[#00ff88]/40 group-hover:border-[#00ff88]" />
            <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-[#00ff88]/40 group-hover:border-[#00ff88]" />
            <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-[#00ff88]/40 group-hover:border-[#00ff88]" />
            <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-[#00ff88]/40 group-hover:border-[#00ff88]" />

            <div>
              <span className="font-mono text-[9px] text-[#00ff88] uppercase block mb-1">
                $40M TOTAL FUNDING
              </span>
              
              {/* Logo Box */}
              <div className="w-full h-24 flex items-center justify-center bg-black/10 border border-white/[0.02] rounded-lg mb-6 select-none">
                <span className="font-display font-black text-2xl text-white tracking-tighter uppercase">
                  daylight
                </span>
              </div>
            </div>

            <div>
              <p className="text-[11px] font-mono text-[#a0b0a8] leading-relaxed mb-2">
                Rebuilt 5 core user workflows into a scalable design system.
              </p>
              <span className="text-[9px] font-mono text-[#00ff88]/50 uppercase tracking-widest block">// CYBERSECURITY</span>
            </div>
          </div>

        </div>

      </div>

      {/* 2. Services Section */}
      <div id="services" className="w-full relative">
        
        {/* Section Header */}
        <div className="flex justify-between items-center mb-6 px-1 select-none">
          <span className="font-mono text-xs uppercase tracking-widest text-[#00ff88] font-bold">
            SERVICES
          </span>
          <div className="flex items-center gap-4 text-xs font-mono">
            <button className="text-[#a0b0a8]/40 hover:text-[#00ff88] transition-colors">[&lt;]</button>
            <button className="text-[#a0b0a8]/40 hover:text-[#00ff88] transition-colors">[&gt;]</button>
            <a href="#contact" className="text-[#00ff88] hover:text-white transition-colors">
              [SEE ALL]
            </a>
          </div>
        </div>

        {/* 3-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1: Performance & Scale */}
          <div className="border border-white/5 bg-[#0c120f]/30 p-6 flex flex-col justify-between min-h-[240px] relative group hover:border-[#00ff88]/20 transition-all duration-300">
            <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-[#00ff88]/40 group-hover:border-[#00ff88]" />
            <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-[#00ff88]/40 group-hover:border-[#00ff88]" />
            <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-[#00ff88]/40 group-hover:border-[#00ff88]" />
            <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-[#00ff88]/40 group-hover:border-[#00ff88]" />

            <div>
              <h3 className="font-display font-black text-sm text-[#f4fff8] tracking-wider uppercase mb-3">
                PERFORMANCE & SCALE
              </h3>
              <p className="text-[11px] font-mono text-[#a0b0a8] leading-relaxed mb-6">
                Handle explosive growth without re-architecting: database scaling, background jobs, and the profiling to know where it hurts.
              </p>
            </div>

            {/* Tags */}
            <div className="flex gap-2">
              {['Rails', 'Go', 'Rust'].map(tag => (
                <span key={tag} className="text-[9px] font-mono px-2 py-0.5 border border-white/5 text-[#a0b0a8]/60 bg-white/[0.005]">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Card 2: Agent Experience */}
          <div className="border border-white/5 bg-[#0c120f]/30 p-6 flex flex-col justify-between min-h-[240px] relative group hover:border-[#00ff88]/20 transition-all duration-300">
            <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-[#00ff88]/40 group-hover:border-[#00ff88]" />
            <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-[#00ff88]/40 group-hover:border-[#00ff88]" />
            <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-[#00ff88]/40 group-hover:border-[#00ff88]" />
            <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-[#00ff88]/40 group-hover:border-[#00ff88]" />

            <div>
              <h3 className="font-display font-black text-sm text-[#f4fff8] tracking-wider uppercase mb-3">
                AGENT EXPERIENCE
              </h3>
              <p className="text-[11px] font-mono text-[#a0b0a8] leading-relaxed mb-6">
                Build Agent Experience for your product: discovery optimization, agent-friendly APIs and CLIs, and security guardrails against abuse.
              </p>
            </div>

            {/* Tags */}
            <div className="flex gap-2">
              {['CLI', 'AX', 'MCP'].map(tag => (
                <span key={tag} className="text-[9px] font-mono px-2 py-0.5 border border-white/5 text-[#a0b0a8]/60 bg-white/[0.005]">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Card 3: Product Development */}
          <div className="border border-white/5 bg-[#0c120f]/30 p-6 flex flex-col justify-between min-h-[240px] relative group hover:border-[#00ff88]/20 transition-all duration-300">
            <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-[#00ff88]/40 group-hover:border-[#00ff88]" />
            <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-[#00ff88]/40 group-hover:border-[#00ff88]" />
            <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-[#00ff88]/40 group-hover:border-[#00ff88]" />
            <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-[#00ff88]/40 group-hover:border-[#00ff88]" />

            <div>
              <h3 className="font-display font-black text-sm text-[#f4fff8] tracking-wider uppercase mb-3">
                PRODUCT DEVELOPMENT
              </h3>
              <p className="text-[11px] font-mono text-[#a0b0a8] leading-relaxed mb-6">
                Forward-deployed engineers who ship your product from PoC to PMF: embedded in your repo, your stack, your cadence.
              </p>
            </div>

            {/* Tags */}
            <div className="flex gap-2">
              {['Rails', 'TypeScript', 'Go'].map(tag => (
                <span key={tag} className="text-[9px] font-mono px-2 py-0.5 border border-white/5 text-[#a0b0a8]/60 bg-white/[0.005]">
                  {tag}
                </span>
              ))}
            </div>
          </div>

        </div>

      </div>

    </div>
  )
}
