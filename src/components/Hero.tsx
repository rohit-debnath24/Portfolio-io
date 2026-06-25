'use client'

import { motion } from 'framer-motion'
import { ArrowDown, Sparkles, MoveRight } from 'lucide-react'
import Magnetic from '@/components/Magnetic'
import AnimatedText from '@/components/AnimatedText'

// Small bracket wrapper for targeting marks in the radar
function RadarBracket() {
  return (
    <div className="w-3.5 h-3.5 relative opacity-40">
      <div className="absolute top-0 left-0 w-1 h-1 border-t border-l border-[#ff3b30]" />
      <div className="absolute top-0 right-0 w-1 h-1 border-t border-r border-[#ff3b30]" />
      <div className="absolute bottom-0 left-0 w-1 h-1 border-b border-l border-[#ff3b30]" />
      <div className="absolute bottom-0 right-0 w-1 h-1 border-b border-r border-[#ff3b30]" />
    </div>
  )
}

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const childVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-36 pb-20 z-10">
      {/* Background Radial Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,59,48,0.04)_0%,transparent_60%)] pointer-events-none" />

      {/* Decorative Interactive Frame Lines */}
      <div className="absolute inset-x-6 top-24 bottom-6 border border-white/[0.02] pointer-events-none md:block hidden">
        {/* Corners bracket marks */}
        <span className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 text-[#ff3b30]/30 text-xs font-mono">[+]</span>
        <span className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 text-[#ff3b30]/30 text-xs font-mono">[+]</span>
        <span className="absolute bottom-0 left-0 -translate-x-1/2 translate-y-1/2 text-[#ff3b30]/30 text-xs font-mono">[+]</span>
        <span className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 text-[#ff3b30]/30 text-xs font-mono">[+]</span>
      </div>

      <div className="container-custom relative">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Column */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 z-10"
          >
            {/* Badge */}
            <motion.div
              variants={childVariants}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/5 rounded-full mb-8"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ff3b30] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#ff3b30]"></span>
              </span>
              <span className="text-xs font-mono tracking-wider text-[#c0b0b8] uppercase flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#ff3b30]" />
                // TRANSMISSION SECTOR: MARS_ORBIT
              </span>
            </motion.div>

            {/* Heading with split animated text */}
            <h1 className="font-display text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight leading-[1.02] text-white mb-8">
              <span className="block overflow-hidden">
                <AnimatedText text="DEVELOPING" delay={0.2} />
              </span>
              <span className="block overflow-hidden">
                <AnimatedText 
                  text="MARTIAN TOOLS" 
                  className="text-gradient" 
                  delay={0.4} 
                />
              </span>
              <span className="block overflow-hidden">
                <AnimatedText text="FOR CREATIVES." delay={0.6} />
              </span>
            </h1>

            {/* Subheading */}
            <motion.p
              variants={childVariants}
              className="text-lg sm:text-xl md:text-2xl text-[#c0b0b8] max-w-3xl leading-relaxed mb-12 font-light"
            >
              Consulting startup builders and creative agencies to ship highly-interactive 
              interfaces, WebGL layouts, and robust backend architectures.
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={childVariants}
              className="flex flex-wrap gap-5 items-center"
            >
              <Magnetic range={50} strength={0.3}>
                <a
                  href="#work"
                  className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#ff3b30] text-white font-semibold rounded-full hover:bg-white hover:text-black hover:scale-105 active:scale-95 transition-all duration-300 shadow-[0_4px_20px_rgba(255,59,48,0.25)] hover:shadow-none"
                >
                  Inspect Work
                  <MoveRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform duration-300" />
                </a>
              </Magnetic>
              
              <Magnetic range={40} strength={0.3}>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center px-8 py-4 border border-white/10 hover:border-white/20 bg-white/5 hover:bg-white/10 text-white font-medium rounded-full transition-all duration-300 hover:scale-105"
                >
                  Establish Link
                </a>
              </Magnetic>
            </motion.div>
          </motion.div>

          {/* Right Graphical SVG Column (Evil Martians Radar) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
            className="lg:col-span-5 hidden lg:flex items-center justify-center relative select-none pointer-events-none"
          >
            {/* Smooth Floating Container */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut' }}
              className="w-full flex items-center justify-center relative aspect-square max-w-[450px]"
            >
              {/* Conic sweep overlay (CSS gradient) */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 4, ease: 'linear' }}
                style={{
                  position: 'absolute',
                  width: '80%',
                  height: '80%',
                  borderRadius: '50%',
                  background: 'conic-gradient(from 270deg, transparent 0%, rgba(255, 59, 48, 0.01) 70%, rgba(255, 59, 48, 0.08) 95%, rgba(255, 59, 48, 0.18) 100%)',
                  pointerEvents: 'none',
                  zIndex: 5,
                }}
              >
                {/* Sweep indicator line */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-1/2 bg-[#ff3b30] opacity-60" />
              </motion.div>

              {/* Grid Lines within graphic boundary */}
              <svg width="450" height="450" viewBox="0 0 500 500" fill="none" className="w-full h-auto max-w-[450px] relative z-10">
                <defs>
                  {/* Glowing background */}
                  <radialGradient id="martianGlow" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#ff3b30" stopOpacity="0.18" />
                    <stop offset="100%" stopColor="#18000f" stopOpacity="0" />
                  </radialGradient>
                </defs>

                {/* Radar glow center */}
                <circle cx="250" cy="250" r="220" fill="url(#martianGlow)" />

                {/* Concentric grid circles */}
                <circle cx="250" cy="250" r="200" stroke="rgba(255, 59, 48, 0.08)" strokeWidth="1" />
                <circle cx="250" cy="250" r="140" stroke="rgba(255, 59, 48, 0.08)" strokeWidth="1" />
                <circle cx="250" cy="250" r="80"  stroke="rgba(255, 59, 48, 0.08)" strokeWidth="1" />

                {/* Crosshairs lines */}
                <line x1="50" y1="250" x2="450" y2="250" stroke="rgba(255, 59, 48, 0.06)" strokeWidth="1" />
                <line x1="250" y1="50" x2="250" y2="450" stroke="rgba(255, 59, 48, 0.06)" strokeWidth="1" />

                {/* Targeted Space Invader Mascot 1 */}
                <motion.g
                  initial={{ opacity: 0.2 }}
                  animate={{ opacity: [0.2, 0.8, 0.2] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                  transform="translate(130, 140)"
                >
                  {/* Mini Invader path */}
                  <path d="M4 2h2v2H4V2zm8 0h2v2h-2V2zM1 5h14v2H1V5zm2 3h10v2H3V8zm-2 3h2v2H1v-2zm12 0h2v2h-2v-2zm-8 1h6v2H5v-2z" fill="#ff3b30" transform="scale(0.8)" />
                </motion.g>

                {/* Targeted Space Invader Mascot 2 */}
                <motion.g
                  initial={{ opacity: 0.4 }}
                  animate={{ opacity: [0.4, 0.9, 0.4] }}
                  transition={{ repeat: Infinity, duration: 2.5, delay: 0.5 }}
                  transform="translate(320, 280)"
                >
                  <path d="M4 2h2v2H4V2zm8 0h2v2h-2V2zM1 5h14v2H1V5zm2 3h10v2H3V8zm-2 3h2v2H1v-2zm12 0h2v2h-2v-2zm-8 1h6v2H5v-2z" fill="#f5d1ea" transform="scale(0.8)" />
                </motion.g>

                {/* Pulsing Core */}
                <motion.circle
                  cx="250"
                  cy="250"
                  r="12"
                  fill="#ff3b30"
                  animate={{ scale: [1, 1.4, 1] }}
                  transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
                />
              </svg>

              {/* Target brackets around the invader icons */}
              <div className="absolute top-[32%] left-[29%] z-20"><RadarBracket /></div>
              <div className="absolute top-[60%] left-[67%] z-20"><RadarBracket /></div>
            </motion.div>
          </motion.div>

        </div>
      </div>

      {/* Floating Side Indicators */}
      <div className="absolute right-12 bottom-12 z-10 md:flex hidden flex-col items-center gap-6">
        <span className="font-mono text-[10px] tracking-[0.2em] text-[#c0b0b8]/50 uppercase select-none" style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}>
          SCROLL DOWN
        </span>
        <Magnetic range={30} strength={0.4}>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
            className="p-2 border border-white/10 rounded-full text-white/50 cursor-pointer"
          >
            <ArrowDown className="w-4 h-4 text-[#ff3b30]" />
          </motion.div>
        </Magnetic>
      </div>
    </section>
  )
}