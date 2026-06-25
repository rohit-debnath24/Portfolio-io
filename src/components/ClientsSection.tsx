'use client'

import React from 'react'

export default function ClientsSection() {
  return (
    <div className="relative w-full max-w-6xl mx-auto z-10 my-12 animate-fade-in">
      
      {/* 1. Affiliations & Experience Section */}
      <div id="clients" className="w-full relative mb-12">
        
        {/* Section Header */}
        <div className="flex justify-between items-center mb-6 px-1 select-none">
          <span className="font-mono text-xs uppercase tracking-widest text-[#00ff88] font-bold">
            AFFILIATIONS & EXPERIENCE
          </span>
          <div className="flex items-center gap-4 text-xs font-mono">
            <button className="text-[#a0b0a8]/40 hover:text-[#00ff88] transition-colors">[&lt;]</button>
            <button className="text-[#a0b0a8]/40 hover:text-[#00ff88] transition-colors">[&gt;]</button>
            <a href="mailto:Rohitkumardebnath02@gmail.com" className="text-[#00ff88] hover:text-white transition-colors">
              [CONTACT]
            </a>
          </div>
        </div>

        {/* 3-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1: HIVE DYNAMICS */}
          <div className="border border-white/5 bg-[#0c120f]/30 p-6 flex flex-col justify-between min-h-[280px] relative group hover:border-[#00ff88]/20 transition-all duration-300">
            <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-[#00ff88]/40 group-hover:border-[#00ff88]" />
            <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-[#00ff88]/40 group-hover:border-[#00ff88]" />
            <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-[#00ff88]/40 group-hover:border-[#00ff88]" />
            <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-[#00ff88]/40 group-hover:border-[#00ff88]" />

            <div>
              <span className="font-mono text-[9px] text-[#00ff88] uppercase block mb-1">
                March 2026 - PRESENT
              </span>
              
              {/* Logo Box */}
              <div className="w-full h-24 flex items-center justify-center bg-black/10 border border-white/[0.02] rounded-lg mb-6 select-none">
                <div className="flex items-center gap-3">
                  {/* Hexagonal Hive Dynamics symbol */}
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className="text-[#00ff88]">
                    <path d="M16 2l12 7v14l-12 7-12-7V9l12-7z" stroke="currentColor" strokeWidth="2" />
                    <path d="M16 8l7 4v8l-7 4-7-4v-8l7-4z" stroke="currentColor" strokeWidth="1.2" strokeDasharray="2 2" />
                  </svg>
                  <span className="font-display font-black text-lg text-white tracking-tight uppercase">
                    Hive Dynamics
                  </span>
                </div>
              </div>
            </div>

            <div>
              <p className="text-[11px] font-mono text-[#a0b0a8] leading-relaxed mb-2">
                SDE Intern. Architecting containerized video analytics tracking, Person ReID, and VLM workflow decoders.
              </p>
              <span className="text-[9px] font-mono text-[#00ff88]/50 uppercase tracking-widest block">// ML & COMPUTER VISION</span>
            </div>
          </div>

          {/* Card 2: HERITAGE INSTITUTE */}
          <div className="border border-white/5 bg-[#0c120f]/30 p-6 flex flex-col justify-between min-h-[280px] relative group hover:border-[#00ff88]/20 transition-all duration-300">
            <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-[#00ff88]/40 group-hover:border-[#00ff88]" />
            <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-[#00ff88]/40 group-hover:border-[#00ff88]" />
            <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-[#00ff88]/40 group-hover:border-[#00ff88]" />
            <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-[#00ff88]/40 group-hover:border-[#00ff88]" />

            <div>
              <span className="font-mono text-[9px] text-[#00ff88] uppercase block mb-1">
                July 2024 - PRESENT
              </span>
              
              {/* Logo Box */}
              <div className="w-full h-24 flex items-center justify-center bg-black/10 border border-white/[0.02] rounded-lg mb-6 select-none">
                <div className="flex items-center gap-2">
                  {/* Classical Arches Heritage symbol */}
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className="text-[#00ff88]">
                    <path d="M4 28V12l12-8 12 8v16H4z" stroke="currentColor" strokeWidth="1.5" />
                    <circle cx="16" cy="15" r="4" stroke="currentColor" strokeWidth="1.5" />
                  </svg>
                  <span className="font-display font-black text-base text-white tracking-tight uppercase">
                    Heritage Inst
                  </span>
                </div>
              </div>
            </div>

            <div>
              <p className="text-[11px] font-mono text-[#a0b0a8] leading-relaxed mb-2">
                B.Tech in Computer Science and Engineering. Current YGPA: 9.35. Focused on AI algorithms & smart ledgers.
              </p>
              <span className="text-[9px] font-mono text-[#00ff88]/50 uppercase tracking-widest block">// EDUCATION</span>
            </div>
          </div>

          {/* Card 3: DIVERSION HACKATHON */}
          <div className="border border-white/5 bg-[#0c120f]/30 p-6 flex flex-col justify-between min-h-[280px] relative group hover:border-[#00ff88]/20 transition-all duration-300">
            <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-[#00ff88]/40 group-hover:border-[#00ff88]" />
            <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-[#00ff88]/40 group-hover:border-[#00ff88]" />
            <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-[#00ff88]/40 group-hover:border-[#00ff88]" />
            <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-[#00ff88]/40 group-hover:border-[#00ff88]" />

            <div>
              <span className="font-mono text-[9px] text-[#00ff88] uppercase block mb-1">
                COMPETITION WIN
              </span>
              
              {/* Logo Box */}
              <div className="w-full h-24 flex items-center justify-center bg-black/10 border border-white/[0.02] rounded-lg mb-6 select-none">
                <div className="flex items-center gap-3">
                  {/* Hackathon trophy symbol */}
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className="text-[#00ff88]">
                    <path d="M6 8h20v8c0 4-4 8-10 8s-10-4-10-8V8zm10 16v6m-6 0h12" stroke="currentColor" strokeWidth="1.8" />
                  </svg>
                  <span className="font-display font-black text-lg text-white tracking-tighter uppercase">
                    Diversion 26
                  </span>
                </div>
              </div>
            </div>

            <div>
              <p className="text-[11px] font-mono text-[#a0b0a8] leading-relaxed mb-2">
                Double Winner at the Diversion 2026 Hackathon, showcasing CUDA, Algorand networks, and AI track achievements.
              </p>
              <span className="text-[9px] font-mono text-[#00ff88]/50 uppercase tracking-widest block">// AWARDS</span>
            </div>
          </div>

        </div>

      </div>

      {/* 2. Services Section */}
      <div id="services" className="w-full relative">
        
        {/* Section Header */}
        <div className="flex justify-between items-center mb-6 px-1 select-none">
          <span className="font-mono text-xs uppercase tracking-widest text-[#00ff88] font-bold">
            SERVICES & EXPERTISE
          </span>
          <div className="flex items-center gap-4 text-xs font-mono">
            <button className="text-[#a0b0a8]/40 hover:text-[#00ff88] transition-colors">[&lt;]</button>
            <button className="text-[#a0b0a8]/40 hover:text-[#00ff88] transition-colors">[&gt;]</button>
            <a href="mailto:Rohitkumardebnath02@gmail.com" className="text-[#00ff88] hover:text-white transition-colors">
              [SEE ALL]
            </a>
          </div>
        </div>

        {/* 3-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1: Vision & AI */}
          <div className="border border-white/5 bg-[#0c120f]/30 p-6 flex flex-col justify-between min-h-[240px] relative group hover:border-[#00ff88]/20 transition-all duration-300">
            <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-[#00ff88]/40 group-hover:border-[#00ff88]" />
            <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-[#00ff88]/40 group-hover:border-[#00ff88]" />
            <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-[#00ff88]/40 group-hover:border-[#00ff88]" />
            <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-[#00ff88]/40 group-hover:border-[#00ff88]" />

            <div>
              <h3 className="font-display font-black text-sm text-[#f4fff8] tracking-wider uppercase mb-3">
                VISION & AI ENGINEERING
              </h3>
              <p className="text-[11px] font-mono text-[#a0b0a8] leading-relaxed mb-6">
                Refining YOLO and OpenCV pipelines for body detection and human activity tracking. Integrating ArcFace ReID models and Multimodal AI (VLMs).
              </p>
            </div>

            {/* Tags */}
            <div className="flex gap-2">
              {['OpenCV', 'YOLO', 'ArcFace', 'VLMs'].map(tag => (
                <span key={tag} className="text-[9px] font-mono px-2 py-0.5 border border-white/5 text-[#a0b0a8]/60 bg-white/[0.005]">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Card 2: Full-Stack Systems */}
          <div className="border border-white/5 bg-[#0c120f]/30 p-6 flex flex-col justify-between min-h-[240px] relative group hover:border-[#00ff88]/20 transition-all duration-300">
            <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-[#00ff88]/40 group-hover:border-[#00ff88]" />
            <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-[#00ff88]/40 group-hover:border-[#00ff88]" />
            <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-[#00ff88]/40 group-hover:border-[#00ff88]" />
            <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-[#00ff88]/40 group-hover:border-[#00ff88]" />

            <div>
              <h3 className="font-display font-black text-sm text-[#f4fff8] tracking-wider uppercase mb-3">
                FRONTEND & FULL-STACK
              </h3>
              <p className="text-[11px] font-mono text-[#a0b0a8] leading-relaxed mb-6">
                Developing responsive, fast-loading user interfaces and robust web server backends with Next.js, Express.js, Node.js, and Docker environments.
              </p>
            </div>

            {/* Tags */}
            <div className="flex gap-2">
              {['ReactJS', 'NextJS', 'Nodejs', 'Docker'].map(tag => (
                <span key={tag} className="text-[9px] font-mono px-2 py-0.5 border border-white/5 text-[#a0b0a8]/60 bg-white/[0.005]">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Card 3: Blockchain & DeFi */}
          <div className="border border-white/5 bg-[#0c120f]/30 p-6 flex flex-col justify-between min-h-[240px] relative group hover:border-[#00ff88]/20 transition-all duration-300">
            <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-[#00ff88]/40 group-hover:border-[#00ff88]" />
            <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-[#00ff88]/40 group-hover:border-[#00ff88]" />
            <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-[#00ff88]/40 group-hover:border-[#00ff88]" />
            <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-[#00ff88]/40 group-hover:border-[#00ff88]" />

            <div>
              <h3 className="font-display font-black text-sm text-[#f4fff8] tracking-wider uppercase mb-3">
                WEB3 & LEDGER SYSTEMS
              </h3>
              <p className="text-[11px] font-mono text-[#a0b0a8] leading-relaxed mb-6">
                Developing smart contracts, tokenizing fractional assets on decentralized finance ledgers, and building secure platforms on Solidity and Algorand.
              </p>
            </div>

            {/* Tags */}
            <div className="flex gap-2">
              {['Solidity', 'Hardhat', 'Algorand', 'CUDA'].map(tag => (
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
