'use client'

import { motion } from 'framer-motion'
import { Code, Cpu, Layout, Layers } from 'lucide-react'

const stats = [
  { value: '5+', label: 'Years Experience' },
  { value: '40+', label: 'Completed Projects' },
  { value: '15+', label: 'Happy Clients' },
  { value: '10+', label: 'Design Awards' },
]

const features = [
  { 
    icon: Code, 
    title: 'Frontend Architecture', 
    desc: 'Developing fast, accessible, responsive React & Next.js applications using TypeScript.' 
  },
  { 
    icon: Cpu, 
    title: 'Creative Coding & WebGL', 
    desc: 'Designing rich interactive visuals and smooth micro-animations using Framer Motion and canvas engines.' 
  },
  { 
    icon: Layout, 
    title: 'UI/UX Craftsmanship', 
    desc: 'Detail-oriented user interfaces focused on typography, grid alignment, and motion dynamics.' 
  },
  { 
    icon: Layers, 
    title: 'Full-Stack Integration', 
    desc: 'Connecting frontends to serverless backends, GraphQL endpoints, and performant databases.' 
  },
]

export default function About() {
  return (
    <section id="about" className="relative section-padding bg-transparent border-t border-white/5 overflow-hidden z-10">
      <div className="container-custom">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          
          {/* Left Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6"
          >
            <span className="text-[#00ff88] font-mono text-xs uppercase tracking-widest block mb-4">// Who I Am</span>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-8">
              Fusing Code with Digital Design
            </h2>
            <div className="space-y-6 text-[#8f94a6] font-light leading-relaxed">
              <p>
                I am a multidisciplinary engineer specializing in building high-end interfaces and digital products. 
                My focus lies at the intersection of pixel-perfect design systems, creative coding, and modern web application stacks.
              </p>
              <p>
                Driven by curiosity, I aim to transform ideas into tangible web products. 
                I write semantic, clean TypeScript, structure robust rendering workflows, and focus heavily on motion design 
                to ensure applications feel responsive and organic.
              </p>
              <p>
                Whether designing smooth user flows, wiring up microservices, or building custom shader visuals, 
                I treat development as a craft.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4 mt-12">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="p-6 bg-white/[0.02] border border-white/5 rounded-2xl flex flex-col justify-between"
                >
                  <span className="font-display text-3xl sm:text-4xl font-bold text-[#00ff88] block mb-2">
                    {stat.value}
                  </span>
                  <span className="text-xs uppercase tracking-wider text-[#8f94a6]">
                    {stat.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Cards/Features */}
          <div className="lg:col-span-6 space-y-6">
            {features.map((feature, i) => {
              const Icon = feature.icon
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.6 }}
                  className="glass-card rounded-2xl p-8 flex gap-6"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-white/[0.03] border border-white/5 flex items-center justify-center text-[#00ff88]">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-bold text-white mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-[#8f94a6] leading-relaxed font-light">
                      {feature.desc}
                    </p>
                  </div>
                </motion.div>
              )
            })}
          </div>

        </div>
      </div>
    </section>
  )
}