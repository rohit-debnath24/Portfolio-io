'use client'

import { motion } from 'framer-motion'
import { ArrowDown, Sparkles, MoveRight } from 'lucide-react'
import Magnetic from '@/components/Magnetic'
import AnimatedText from '@/components/AnimatedText'

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
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,136,0.06)_0%,transparent_60%)] pointer-events-none" />

      {/* Decorative Interactive Frame Lines */}
      <div className="absolute inset-x-6 top-24 bottom-6 border border-white/[0.03] pointer-events-none md:block hidden">
        {/* Corners plus marks */}
        <span className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 text-white/20 text-xs font-light">+</span>
        <span className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 text-white/20 text-xs font-light">+</span>
        <span className="absolute bottom-0 left-0 -translate-x-1/2 translate-y-1/2 text-white/20 text-xs font-light">+</span>
        <span className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 text-white/20 text-xs font-light">+</span>
      </div>

      <div className="container-custom relative">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-5xl"
        >
          {/* Badge */}
          <motion.div
            variants={childVariants}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/5 rounded-full mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00ff88] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00ff88]"></span>
            </span>
            <span className="text-xs font-mono tracking-wider text-[#8f94a6] uppercase flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#00ff88]" />
              Available for Freelance & Contract
            </span>
          </motion.div>

          {/* Heading with split animated text */}
          <h1 className="font-display text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.05] text-white mb-8">
            <span className="block overflow-hidden">
              <AnimatedText text="CRAFTING" delay={0.2} />
            </span>
            <span className="block overflow-hidden">
              <AnimatedText 
                text="DIGITAL SHAPES" 
                className="text-gradient" 
                delay={0.4} 
              />
            </span>
            <span className="block overflow-hidden">
              <AnimatedText text="FOR BRANDS." delay={0.6} />
            </span>
          </h1>

          {/* Subheading */}
          <motion.p
            variants={childVariants}
            className="text-lg sm:text-xl md:text-2xl text-[#8f94a6] max-w-3xl leading-relaxed mb-12 font-light"
          >
            An independent creative designer and frontend engineer developing interactive, 
            award-winning experiences using Next.js, Framer Motion, and fine typography.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={childVariants}
            className="flex flex-wrap gap-5 items-center"
          >
            <Magnetic range={50} strength={0.3}>
              <a
                href="#work"
                className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#00ff88] text-black font-semibold rounded-full hover:bg-white hover:scale-105 active:scale-95 transition-all duration-300 shadow-[0_4px_20px_rgba(0,255,136,0.25)] hover:shadow-none"
              >
                Explore Work
                <MoveRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform duration-300" />
              </a>
            </Magnetic>
            
            <Magnetic range={40} strength={0.3}>
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-4 border border-white/10 hover:border-white/20 bg-white/5 hover:bg-white/10 text-white font-medium rounded-full transition-all duration-300 hover:scale-105"
              >
                Let's Talk
              </a>
            </Magnetic>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating Side Indicators */}
      <div className="absolute right-12 bottom-12 z-10 md:flex hidden flex-col items-center gap-6">
        <span className="font-mono text-[10px] tracking-[0.2em] text-[#8f94a6]/50 uppercase vertical-text select-none">
          SCROLL DOWN
        </span>
        <Magnetic range={30} strength={0.4}>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
            className="p-2 border border-white/10 rounded-full text-white/50 cursor-pointer"
          >
            <ArrowDown className="w-4 h-4 text-[#00ff88]" />
          </motion.div>
        </Magnetic>
      </div>
      
      <style jsx global>{`
        .vertical-text {
          writing-mode: vertical-rl;
          text-orientation: mixed;
        }
      `}</style>
    </section>
  )
}