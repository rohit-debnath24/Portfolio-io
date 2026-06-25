'use client'

import { useRef } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { Monitor, Cpu, Paintbrush, Compass } from 'lucide-react'
import AnimatedText from '@/components/AnimatedText'

const services = [
  {
    icon: Paintbrush,
    title: 'Brand Design & Direction',
    desc: 'Designing premium visual systems, typography guidelines, and digital brand identities that make interfaces stand out.',
    skills: ['Figma', 'Design Systems', 'Typography', 'Prototyping', 'Art Direction'],
  },
  {
    icon: Monitor,
    title: 'Frontend Engineering',
    desc: 'Developing high-performance, responsive single-page apps and server-rendered sites using modern React & Next.js frameworks.',
    skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Semantic HTML'],
  },
  {
    icon: Cpu,
    title: 'Interactive Web & Motion',
    desc: 'Building immersive layouts and smooth micro-interactions using animation physics, state machines, and canvas libraries.',
    skills: ['Framer Motion', 'Three.js', 'CSS Physics', 'GSAP', 'WebGL'],
  },
  {
    icon: Compass,
    title: 'Full-Stack Systems',
    desc: 'Integrating frontends with serverless environments, designing robust REST/GraphQL APIs, and structuring databases.',
    skills: ['Node.js', 'PostgreSQL', 'MongoDB', 'GraphQL', 'REST APIs', 'Vercel'],
  },
]

interface Service {
  icon: React.ComponentType<{ className?: string }>
  title: string
  desc: string
  skills: string[]
}

function ServiceCard({ service, index }: { service: Service; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null)
  
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  // Gentle 3D Tilt for services
  const tiltX = useMotionValue(0)
  const tiltY = useMotionValue(0)

  const springConfig = { damping: 30, stiffness: 120, mass: 0.8 }
  const rotateX = useSpring(useTransform(tiltY, [-0.5, 0.5], [6, -6]), springConfig)
  const rotateY = useSpring(useTransform(tiltX, [-0.5, 0.5], [-6, 6]), springConfig)

  function handleMouseMove(e: React.MouseEvent) {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    
    const relativeX = e.clientX - rect.left
    const relativeY = e.clientY - rect.top
    mouseX.set(relativeX)
    mouseY.set(relativeY)

    const pctX = (e.clientX - rect.left) / rect.width - 0.5
    const pctY = (e.clientY - rect.top) / rect.height - 0.5
    tiltX.set(pctX)
    tiltY.set(pctY)
  }

  function handleMouseLeave() {
    tiltX.set(0)
    tiltY.set(0)
  }

  const Icon = service.icon

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 45 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
      }}
      className="glass-card rounded-2xl p-8 lg:p-12 flex flex-col justify-between group min-h-[420px] relative overflow-hidden"
    >
      {/* Spotlight overlay (crimson glow) */}
      <motion.div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{
          background: useTransform(
            [mouseX, mouseY],
            ([xVal, yVal]) => `radial-gradient(350px circle at ${xVal}px ${yVal}px, rgba(255, 59, 48, 0.08), transparent 80%)`
          ),
        }}
      />

      <div style={{ transform: 'translateZ(20px)' }}>
        <div className="flex items-start justify-between mb-8">
          <div className="w-14 h-14 rounded-2xl bg-white/[0.02] border border-white/5 flex items-center justify-center text-[#ff3b30] group-hover:scale-110 transition-transform duration-300">
            <Icon className="w-7 h-7" />
          </div>
          <span className="font-mono text-sm text-[#c0b0b8]/20">0{index + 1}</span>
        </div>
        
        <h3 className="font-display text-2xl font-bold text-white mb-4">
          {service.title}
        </h3>
        
        <p className="text-[#c0b0b8] font-light leading-relaxed mb-8">
          {service.desc}
        </p>
      </div>

      <div style={{ transform: 'translateZ(30px)' }}>
        <h4 className="text-[9px] font-mono uppercase tracking-wider text-white/35 mb-3 font-semibold">
          // Core Technologies
        </h4>
        <div className="flex flex-wrap gap-2">
          {service.skills.map((skill) => (
            <span
              key={skill}
              className="px-3 py-1.5 rounded-full bg-white/[0.01] border border-white/5 text-xs text-[#c0b0b8] group-hover:border-[#ff3b30]/20 group-hover:text-white transition-all duration-300"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default function Services() {
  return (
    <section id="services" className="relative section-padding bg-transparent border-t border-white/5 overflow-hidden z-10">
      <div className="container-custom">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-[#ff3b30] font-mono text-xs uppercase tracking-widest block mb-4">// Capabilities</span>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
            <AnimatedText text="Services & Expertise" />
          </h2>
          <p className="text-lg text-[#c0b0b8] font-light">
            Bringing technical precision and creative direction together to build exceptional products for the web.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>

      </div>
    </section>
  )
}
