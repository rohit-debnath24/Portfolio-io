'use client'

import { motion } from 'framer-motion'
import { Github, ExternalLink, ArrowUpRight } from 'lucide-react'

const projects = [
  {
    id: 1,
    title: 'E-Commerce Nexus',
    description: 'A premium Next.js 14 e-commerce framework with microservice endpoints, visual dashboards, and custom stripe checkout paths.',
    tags: ['Next.js 14', 'TypeScript', 'Stripe API', 'PostgreSQL', 'Tailwind CSS'],
    liveUrl: '#',
    repoUrl: '#',
    color: 'from-[#00ff88]/20 to-transparent',
    iconColor: 'text-[#00ff88]'
  },
  {
    id: 2,
    title: 'TaskFlow Architect',
    description: 'Real-time kanban workflow board featuring custom web sockets, workspaces, and team analytic reports.',
    tags: ['React', 'Node.js', 'Socket.io', 'MongoDB', 'Framer Motion'],
    liveUrl: '#',
    repoUrl: '#',
    color: 'from-blue-500/20 to-transparent',
    iconColor: 'text-blue-400'
  },
  {
    id: 3,
    title: 'Core Design Ledger',
    description: 'A component registry system documenting 60+ accessible web pieces, design token systems, and visual specs.',
    tags: ['Storybook', 'TypeScript', 'Tailwind', 'Rollup'],
    liveUrl: '#',
    repoUrl: '#',
    color: 'from-purple-500/20 to-transparent',
    iconColor: 'text-purple-400'
  },
  {
    id: 4,
    title: 'Quantum Analytics',
    description: 'Data analytics system using canvas engines, responsive graph widgets, and redis caching metrics.',
    tags: ['Next.js', 'D3.js', 'Redis', 'Tailwind CSS', 'TypeScript'],
    liveUrl: '#',
    repoUrl: '#',
    color: 'from-amber-500/20 to-transparent',
    iconColor: 'text-amber-400'
  },
]

export default function Work() {
  return (
    <section id="work" className="relative section-padding bg-transparent border-t border-white/5 overflow-hidden z-10">
      <div className="container-custom">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <span className="text-[#00ff88] font-mono text-xs uppercase tracking-widest block mb-4">// Selected Works</span>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
            Featured Projects
          </h2>
          <p className="text-lg text-[#8f94a6] font-light">
            A handpicked curation of digital applications showcasing code quality, UX motion, and system layout.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="glass-card rounded-2xl p-8 lg:p-12 flex flex-col justify-between group min-h-[480px] relative overflow-hidden"
            >
              {/* Background Glow on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />

              <div>
                {/* Visual Placeholder Panel */}
                <div className="w-full h-48 rounded-xl bg-white/[0.02] border border-white/5 flex items-center justify-center mb-8 relative overflow-hidden group-hover:border-[#00ff88]/20 transition-colors duration-300">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.01)_0%,transparent_70%)]" />
                  <div className="relative flex flex-col items-center gap-2">
                    <span className={`font-display text-3xl font-bold uppercase tracking-widest opacity-25 group-hover:opacity-60 transition-opacity duration-300 ${project.iconColor}`}>
                      {project.title.split(' ')[0]}
                    </span>
                    <span className="text-[10px] font-mono tracking-widest text-[#8f94a6]/40 uppercase">
                      SYSTEM INTEGRATION
                    </span>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-2.5 py-1 text-[10px] uppercase font-mono tracking-wider bg-white/[0.03] border border-white/5 text-[#8f94a6] rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-2xl font-bold text-white mb-3 flex items-center justify-between group-hover:text-[#00ff88] transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-sm text-[#8f94a6] font-light leading-relaxed mb-8">
                  {project.description}
                </p>
              </div>

              {/* Links */}
              <div className="flex items-center gap-6 mt-auto relative z-10">
                <a
                  href={project.liveUrl}
                  className="flex items-center gap-2 text-sm font-semibold text-white hover:text-[#00ff88] transition-colors duration-300 group/link"
                >
                  Live Demo
                  <ArrowUpRight className="w-4 h-4 text-[#00ff88] group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                </a>
                <a
                  href={project.repoUrl}
                  className="flex items-center gap-2 text-sm font-medium text-[#8f94a6] hover:text-white transition-colors duration-300"
                >
                  <Github className="w-4 h-4" />
                  Source Code
                </a>
              </div>
            </motion.article>
          ))}
        </div>

        {/* View All CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-white font-medium rounded-full transition-all duration-300 hover:scale-105"
          >
            See All Repositories on GitHub
            <ExternalLink className="w-4 h-4 text-[#00ff88]" />
          </a>
        </motion.div>

      </div>
    </section>
  )
}