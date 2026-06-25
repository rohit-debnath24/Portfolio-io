'use client'

import { useRef } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { Github, ExternalLink, ArrowUpRight } from 'lucide-react'
import Magnetic from '@/components/Magnetic'
import AnimatedText from '@/components/AnimatedText'

const projects = [
  {
    id: 1,
    title: 'E-Commerce Nexus',
    description: 'A premium Next.js 14 e-commerce framework with microservice endpoints, visual dashboards, and custom stripe checkout paths.',
    tags: ['Next.js 14', 'TypeScript', 'Stripe API', 'PostgreSQL', 'Tailwind CSS'],
    liveUrl: '#',
    repoUrl: '#',
    glowColor: 'rgba(0, 255, 136, 0.12)',
    iconColor: 'text-[#00ff88]'
  },
  {
    id: 2,
    title: 'TaskFlow Architect',
    description: 'Real-time kanban workflow board featuring custom web sockets, workspaces, and team analytic reports.',
    tags: ['React', 'Node.js', 'Socket.io', 'MongoDB', 'Framer Motion'],
    liveUrl: '#',
    repoUrl: '#',
    glowColor: 'rgba(59, 130, 246, 0.12)',
    iconColor: 'text-blue-400'
  },
  {
    id: 3,
    title: 'Core Design Ledger',
    description: 'A component registry system documenting 60+ accessible web pieces, design token systems, and visual specs.',
    tags: ['Storybook', 'TypeScript', 'Tailwind', 'Rollup'],
    liveUrl: '#',
    repoUrl: '#',
    glowColor: 'rgba(168, 85, 247, 0.12)',
    iconColor: 'text-purple-400'
  },
  {
    id: 4,
    title: 'Quantum Analytics',
    description: 'Data analytics system using canvas engines, responsive graph widgets, and redis caching metrics.',
    tags: ['Next.js', 'D3.js', 'Redis', 'Tailwind CSS', 'TypeScript'],
    liveUrl: '#',
    repoUrl: '#',
    glowColor: 'rgba(245, 158, 11, 0.12)',
    iconColor: 'text-amber-400'
  },
]

interface Project {
  id: number
  title: string
  description: string
  tags: string[]
  liveUrl: string
  repoUrl: string
  glowColor: string
  iconColor: string
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null)

  // Spotlight Mouse Values
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  // Tilt Mouse Values
  const tiltX = useMotionValue(0)
  const tiltY = useMotionValue(0)

  const springConfig = { damping: 25, stiffness: 180, mass: 0.5 }
  const rotateX = useSpring(useTransform(tiltY, [-0.5, 0.5], [10, -10]), springConfig)
  const rotateY = useSpring(useTransform(tiltX, [-0.5, 0.5], [-10, 10]), springConfig)

  function handleMouseMove(e: React.MouseEvent) {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    
    // Relative coordinates for spotlight
    const relativeX = e.clientX - rect.left
    const relativeY = e.clientY - rect.top
    mouseX.set(relativeX)
    mouseY.set(relativeY)

    // Percentage coordinates for 3D tilt (-0.5 to 0.5)
    const pctX = (e.clientX - rect.left) / rect.width - 0.5
    const pctY = (e.clientY - rect.top) / rect.height - 0.5
    tiltX.set(pctX)
    tiltY.set(pctY)
  }

  function handleMouseLeave() {
    tiltX.set(0)
    tiltY.set(0)
  }

  return (
    <motion.article
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ delay: index * 0.1, duration: 0.8 }}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
      }}
      className="glass-card rounded-2xl p-8 lg:p-12 flex flex-col justify-between group min-h-[480px] relative overflow-hidden cursor-none"
    >
      {/* Spotlight Overlay */}
      <motion.div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{
          background: useTransform(
            [mouseX, mouseY],
            ([xVal, yVal]) => `radial-gradient(450px circle at ${xVal}px ${yVal}px, ${project.glowColor}, transparent 80%)`
          ),
        }}
      />

      <div style={{ transform: 'translateZ(30px)' }}>
        {/* Visual Showcase Box */}
        <div className="w-full h-48 rounded-xl bg-white/[0.01] border border-white/5 flex items-center justify-center mb-8 relative overflow-hidden group-hover:border-[#00ff88]/20 transition-colors duration-300">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.01)_0%,transparent_70%)]" />
          <div className="relative flex flex-col items-center gap-2">
            <span className={`font-display text-3xl font-bold uppercase tracking-widest opacity-20 group-hover:opacity-60 transition-all duration-300 ${project.iconColor} group-hover:scale-105`}>
              {project.title.split(' ')[0]}
            </span>
            <span className="text-[9px] font-mono tracking-widest text-[#8f94a6]/30 uppercase">
              // PROJECT ENGINE
            </span>
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <span key={tag} className="px-2.5 py-1 text-[10px] uppercase font-mono tracking-wider bg-white/[0.02] border border-white/5 text-[#8f94a6] rounded-full">
              {tag}
            </span>
          ))}
        </div>

        <h3 className="text-2xl font-display font-bold text-white mb-3 flex items-center justify-between group-hover:text-[#00ff88] transition-colors duration-300">
          {project.title}
        </h3>
        
        <p className="text-sm text-[#8f94a6] font-light leading-relaxed mb-8">
          {project.description}
        </p>
      </div>

      {/* Links */}
      <div className="flex items-center gap-6 mt-auto relative z-10" style={{ transform: 'translateZ(40px)' }}>
        <Magnetic range={40} strength={0.4}>
          <a
            href={project.liveUrl}
            className="flex items-center gap-2 text-sm font-semibold text-white hover:text-[#00ff88] transition-colors duration-300 group/link py-2 px-1"
          >
            Live Demo
            <ArrowUpRight className="w-4 h-4 text-[#00ff88] group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
          </a>
        </Magnetic>
        <Magnetic range={40} strength={0.4}>
          <a
            href={project.repoUrl}
            className="flex items-center gap-2 text-sm font-medium text-[#8f94a6] hover:text-white transition-colors duration-300 py-2 px-1"
          >
            <Github className="w-4 h-4" />
            Source Code
          </a>
        </Magnetic>
      </div>
    </motion.article>
  )
}

export default function Work() {
  return (
    <section id="work" className="relative section-padding bg-transparent border-t border-white/5 overflow-hidden z-10">
      <div className="container-custom">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-[#00ff88] font-mono text-xs uppercase tracking-widest block mb-4">// Selected Works</span>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
            <AnimatedText text="Featured Projects" />
          </h2>
          <p className="text-lg text-[#8f94a6] font-light">
            A handpicked curation of digital applications showcasing code quality, UX motion, and system layout.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        {/* View All CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Magnetic range={60} strength={0.25}>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-white font-medium rounded-full transition-all duration-300 hover:scale-105"
            >
              See All Repositories on GitHub
              <ExternalLink className="w-4 h-4 text-[#00ff88]" />
            </a>
          </Magnetic>
        </motion.div>

      </div>
    </section>
  )
}