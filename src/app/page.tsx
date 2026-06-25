'use client'

import React, { useState } from 'react'
import { Search, Github, Linkedin, Youtube, Twitter, Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { DrawCircleText } from '@/components/DrawCircleText'
import MartianConsole from '@/components/MartianConsole'
import BoltNewSection from '@/components/BoltNewSection'
import PostCSSSection from '@/components/PostCSSSection'
import ClientsSection from '@/components/ClientsSection'
import Magnetic from '@/components/Magnetic'

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Clients', href: '#clients' },
  { label: 'Products', href: '#products' },
  { label: 'Open Source', href: '#opensource' },
  { label: 'Blog', href: '#blog' },
  { label: 'Events', href: '#events' },
  { label: 'Podcast', href: '#podcast' },
  { label: 'Careers', href: '#careers' },
]

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      {/* 1. Left Sidebar (Fixed on Desktop) */}
      <aside className="fixed left-0 top-0 bottom-0 w-64 h-screen border-r border-white/5 bg-[#040806]/85 p-8 flex flex-col justify-between hidden lg:flex z-30 select-none">
        
        {/* Top Logo */}
        <div className="flex flex-col gap-1 items-start">
          <a href="#" className="flex flex-col items-start gap-2 group">
            {/* Pixel Invaders (Double invader icons matching the screenshot) */}
            <div className="flex gap-2 text-[#00ff88] group-hover:scale-105 transition-transform duration-300">
              <svg width="24" height="24" viewBox="0 0 16 16" fill="currentColor">
                <path fillRule="evenodd" clipRule="evenodd" d="M3 2h2v2H3V2zm8 0h2v2h-2V2zM1 5h14v2H1V5zm2 3h10v2H3V8zm-2 3h2v2H1v-2zm12 0h2v2h-2v-2zm-8 1h6v2H5v-2z" />
              </svg>
              <svg width="24" height="24" viewBox="0 0 16 16" fill="currentColor">
                <path fillRule="evenodd" clipRule="evenodd" d="M3 2h2v2H3V2zm8 0h2v2h-2V2zM1 5h14v2H1V5zm2 3h10v2H3V8zm-2 3h2v2H1v-2zm12 0h2v2h-2v-2zm-8 1h6v2H5v-2z" />
              </svg>
            </div>
            <span className="font-display font-black text-[10px] tracking-[0.2em] text-white uppercase leading-tight">
              ROHIT DEBNATH
            </span>
          </a>
        </div>

        {/* Center Vertical Menu */}
        <nav>
          <ul className="space-y-4">
            {navLinks.map((link) => (
              <li key={link.label}>
                <Magnetic range={30} strength={0.25}>
                  <a
                    href={link.href}
                    className="font-mono text-xs uppercase tracking-wider text-[#a0b0a8]/60 hover:text-white hover:text-glow transition-all duration-300 py-1 block"
                  >
                    {link.label}
                  </a>
                </Magnetic>
              </li>
            ))}
          </ul>
        </nav>

        {/* Bottom Event circular badge with rotating radar sweep */}
        <div>
          <div className="relative border border-white/5 rounded-full w-36 h-36 flex flex-col justify-center items-start p-6 overflow-hidden bg-white/[0.005]">
            <span className="text-[10px] font-mono text-[#00ff88] uppercase tracking-widest block mb-0.5">2026</span>
            <span className="text-4xl font-black text-white leading-none">WIN</span>
            <p className="text-[9px] text-[#a0b0a8]/75 leading-snug mt-2 font-light">
              Double Winner at Diversion 2026 Hackathon
            </p>
            {/* Embedded glowing green sweep circle overlay */}
            <div className="absolute inset-0 rounded-full border border-[#00ff88]/5 pointer-events-none" />
          </div>
        </div>

      </aside>

      {/* 2. Right Sidebar (Fixed on Desktop) */}
      <aside className="fixed right-0 top-0 bottom-0 w-24 h-screen border-l border-white/5 bg-[#040806]/85 py-8 px-4 flex flex-col justify-between items-center hidden xl:flex z-30 select-none">
        
        {/* Top Button */}
        <div className="w-full">
          <Magnetic range={35} strength={0.3}>
            <a
              href="mailto:Rohitkumardebnath02@gmail.com"
              className="w-full py-3 bg-[#00ff88] hover:bg-white text-black font-mono text-[9px] font-bold uppercase tracking-widest text-center block rounded transition-colors duration-300 shadow-[0_0_12px_rgba(0,255,136,0.2)] hover:shadow-none"
            >
              Hire Rohit
            </a>
          </Magnetic>
        </div>

        {/* Center/Bottom Social Links */}
        <div className="flex flex-col items-center gap-6 text-[#a0b0a8]/50">
          <Magnetic range={25} strength={0.25}>
            <Search className="w-4 h-4 hover:text-[#00ff88] cursor-pointer transition-colors duration-300" />
          </Magnetic>
          <Magnetic range={25} strength={0.25}>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <Twitter className="w-4 h-4 hover:text-[#00ff88] cursor-pointer transition-colors duration-300" />
            </a>
          </Magnetic>
          <Magnetic range={25} strength={0.25}>
            <a href="https://linkedin.com/in/rohitkumardebnath02" target="_blank" rel="noopener noreferrer">
              <Linkedin className="w-4 h-4 hover:text-[#00ff88] cursor-pointer transition-colors duration-300" />
            </a>
          </Magnetic>
          <Magnetic range={25} strength={0.25}>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <Github className="w-4 h-4 hover:text-[#00ff88] cursor-pointer transition-colors duration-300" />
            </a>
          </Magnetic>
          <Magnetic range={25} strength={0.25}>
            <Youtube className="w-4 h-4 hover:text-[#00ff88] cursor-pointer transition-colors duration-300" />
          </Magnetic>
        </div>

      </aside>

      {/* Mobile Top Navbar (Collapsed sidebars on mobile viewports) */}
      <header className="fixed top-0 inset-x-0 h-16 border-b border-white/5 bg-[#040806]/90 backdrop-blur-md flex items-center justify-between px-6 lg:hidden z-40 select-none">
        <div className="flex items-center gap-2">
          <svg width="18" height="18" viewBox="0 0 16 16" fill="currentColor" className="text-[#00ff88]">
            <path d="M3 2h2v2H3V2zm8 0h2v2h-2V2zM1 5h14v2H1V5zm2 3h10v2H3V8zm-2 3h2v2H1v-2zm12 0h2v2h-2v-2zm-8 1h6v2H5v-2z" />
          </svg>
          <span className="font-display font-black text-sm tracking-widest text-white">
            ROHIT
          </span>
        </div>
        
        <div className="flex items-center gap-3">
          <a
            href="mailto:Rohitkumardebnath02@gmail.com"
            className="px-3.5 py-1.5 bg-[#00ff88] text-black font-mono text-[9px] font-bold uppercase tracking-wider rounded"
          >
            Hire Rohit
          </a>
          
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2 border border-white/5 rounded text-[#a0b0a8] hover:text-[#00ff88] transition-colors"
            aria-label="Toggle menu"
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </header>

      {/* Mobile Menu Drawer Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', ease: 'easeOut', duration: 0.3 }}
            className="fixed inset-y-0 right-0 w-80 bg-[#040806]/98 backdrop-blur-xl border-l border-white/5 p-8 flex flex-col justify-between lg:hidden z-50 select-none shadow-2xl"
          >
            {/* Top Row */}
            <div className="flex items-center justify-between">
              <span className="font-display font-black text-xs tracking-wider text-[#00ff88] uppercase">
                // SYSTEM MENU
              </span>
              <button
                onClick={() => setMenuOpen(false)}
                className="p-2 border border-white/5 hover:border-[#00ff88]/20 rounded text-[#a0b0a8] hover:text-white transition-colors"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Menu Links */}
            <nav className="my-10">
              <ul className="space-y-6">
                {navLinks.map((link, idx) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      onClick={() => setMenuOpen(false)}
                      className="group flex items-baseline gap-3 py-1 font-display font-black text-2xl uppercase tracking-wider text-[#a0b0a8] hover:text-white transition-all duration-300"
                    >
                      <span className="font-mono text-xs text-[#00ff88]/40 group-hover:text-[#00ff88]">
                        0{idx + 1}
                      </span>
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Bottom Section */}
            <div className="space-y-6 border-t border-white/5 pt-6">
              <a
                href="mailto:Rohitkumardebnath02@gmail.com"
                className="w-full py-3 bg-[#00ff88] text-black font-mono text-xs font-bold uppercase tracking-widest text-center block rounded transition-colors duration-300 shadow-[0_0_12px_rgba(0,255,136,0.15)]"
              >
                Hire Rohit
              </a>
              <div className="flex justify-center gap-6 text-[#a0b0a8]/40">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#00ff88] transition-colors">
                  <Github className="w-5 h-5" />
                </a>
                <a href="https://linkedin.com/in/rohitkumardebnath02" target="_blank" rel="noopener noreferrer" className="hover:text-[#00ff88] transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#00ff88] transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 3. Center Main Workspace Content Area */}
      <main className="min-h-screen lg:pl-64 xl:pr-24 p-6 sm:p-12 relative z-10 pt-24 lg:pt-12 flex flex-col gap-12 max-w-7xl mx-auto w-full overflow-y-auto">
        <DrawCircleText />
        <MartianConsole />
        <BoltNewSection />
        <PostCSSSection />
        <ClientsSection />
      </main>
    </>
  )
}