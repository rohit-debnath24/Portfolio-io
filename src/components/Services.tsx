'use client'

import { motion } from 'framer-motion'
import { Monitor, Cpu, Paintbrush, Compass } from 'lucide-react'

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

export default function Services() {
  return (
    <section id="services" className="relative section-padding bg-transparent border-t border-white/5 overflow-hidden z-10">
      <div className="container-custom">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <span className="text-[#00ff88] font-mono text-xs uppercase tracking-widest block mb-4">// Capabilities</span>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
            Services & Expertise
          </h2>
          <p className="text-lg text-[#8f94a6] font-light">
            Bringing technical precision and creative direction together to build exceptional products for the web.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, i) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 45 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="glass-card rounded-2xl p-8 lg:p-12 flex flex-col justify-between group"
              >
                <div>
                  {/* Icon & Title */}
                  <div className="flex items-start justify-between mb-8">
                    <div className="w-14 h-14 rounded-2xl bg-white/[0.03] border border-white/5 flex items-center justify-center text-[#00ff88] group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-7 h-7" />
                    </div>
                    <span className="font-mono text-sm text-[#8f94a6]/30">0{i + 1}</span>
                  </div>
                  
                  <h3 className="font-display text-2xl font-bold text-white mb-4">
                    {service.title}
                  </h3>
                  
                  <p className="text-[#8f94a6] font-light leading-relaxed mb-8">
                    {service.desc}
                  </p>
                </div>

                {/* Tech Skills Tags */}
                <div>
                  <h4 className="text-[10px] uppercase tracking-wider text-white/40 mb-3 font-semibold">
                    Core Technologies
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {service.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1.5 rounded-full bg-white/[0.02] border border-white/5 text-xs text-[#8f94a6] group-hover:border-[#00ff88]/20 group-hover:text-white transition-all duration-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

              </motion.div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
