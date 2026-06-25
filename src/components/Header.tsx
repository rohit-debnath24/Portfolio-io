'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ArrowUpRight } from 'lucide-react'
import Magnetic from '@/components/Magnetic'

const navLinks = [
  { label: 'Work', href: '#work' },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className={`fixed top-0 inset-x-0 z-40 transition-all duration-500 border-b ${
          scrolled
            ? 'bg-[#18000f]/80 backdrop-blur-md py-4 border-white/5'
            : 'bg-transparent py-6 border-transparent'
        }`}
      >
        <div className="container-custom flex items-center justify-between">
          {/* Logo */}
          <Magnetic range={30} strength={0.25}>
            <a href="#" className="flex items-center gap-2.5 group relative z-50 py-2">
              {/* Retro Space Invader SVG */}
              <svg width="20" height="20" viewBox="0 0 16 16" fill="currentColor" className="text-[#ff3b30] group-hover:scale-110 transition-transform duration-300">
                <path fillRule="evenodd" clipRule="evenodd" d="M3 2h2v2H3V2zm8 0h2v2h-2V2zM1 5h14v2H1V5zm2 3h10v2H3V8zm-2 3h2v2H1v-2zm12 0h2v2h-2v-2zm-8 1h6v2H5v-2z" />
              </svg>
              <span className="font-display font-black text-xl tracking-wider text-white group-hover:text-[#ff3b30] transition-colors duration-300">
                MARTIAN<span className="text-[#ff3b30]">.</span>
              </span>
            </a>
          </Magnetic>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-10">
            <ul className="flex items-center gap-6">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Magnetic range={40} strength={0.3}>
                    <a
                      href={link.href}
                      className="text-sm font-mono tracking-wider uppercase text-[#c0b0b8] hover:text-[#f5d1ea] transition-colors duration-300 nav-link-anim relative py-2 px-3 block"
                    >
                      {link.label}
                    </a>
                  </Magnetic>
                </li>
              ))}
            </ul>
            <Magnetic range={50} strength={0.35}>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/5 border border-white/10 rounded-full hover:border-[#ff3b30]/50 hover:bg-[#ff3b30]/5 text-sm font-mono tracking-wider uppercase text-white transition-all duration-300 hover:scale-105"
              >
                Transmit
                <ArrowUpRight className="w-4 h-4 text-[#ff3b30]" />
              </a>
            </Magnetic>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden flex items-center justify-center p-2 rounded-full border border-white/10 text-white hover:border-[#ff3b30]/50 transition-colors z-50"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-[#18000f] z-30 md:hidden flex flex-col justify-center px-8"
          >
            {/* Grid Lines in Menu */}
            <div className="absolute inset-y-0 left-[35%] w-px bg-white/[0.02]" />
            <div className="absolute inset-y-0 left-[65%] w-px bg-white/[0.02]" />
            <div className="absolute inset-x-0 top-[50%] h-px bg-white/[0.02]" />

            <nav className="relative z-10">
              <ul className="space-y-6">
                {navLinks.map((link, i) => (
                  <motion.li
                    key={link.label}
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -50, opacity: 0 }}
                    transition={{ delay: i * 0.1, duration: 0.5, ease: 'easeOut' }}
                  >
                    <a
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="font-display text-4xl font-bold text-white hover:text-[#ff3b30] transition-colors duration-300 flex items-center justify-between group"
                    >
                      {link.label}
                      <span className="text-sm font-mono text-[#ff3b30] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        // 0{i + 1}
                      </span>
                    </a>
                  </motion.li>
                ))}
              </ul>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ delay: 0.4 }}
                className="mt-16 pt-8 border-t border-white/5 space-y-4"
              >
                <span className="text-xs uppercase tracking-wider text-white/45 block">
                  Enquiries
                </span>
                <a
                  href="mailto:hello@yourdomain.com"
                  className="font-display text-lg text-white hover:text-[#ff3b30] transition-colors block"
                >
                  hello@yourdomain.com
                </a>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
