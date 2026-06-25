'use client'

import { motion } from 'framer-motion'
import { Mail, Compass, MessageSquare, ArrowUpRight } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="relative section-padding bg-transparent border-t border-white/5 overflow-hidden z-10">
      {/* Background Radial Glow */}
      <div className="absolute inset-x-0 bottom-0 h-[500px] bg-[radial-gradient(circle_at_bottom,rgba(255,59,48,0.05)_0%,transparent_70%)] pointer-events-none" />

      <div className="container-custom relative">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          
          {/* Left Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6"
          >
            <span className="text-[#ff3b30] font-mono text-xs uppercase tracking-widest block mb-4">// Get In Touch</span>
            <h2 className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-8">
              Let's create something cool.
            </h2>
            <p className="text-lg text-[#c0b0b8] font-light leading-relaxed mb-12">
              Have a project in mind, looking for a freelance consultant, or just want to say hello? 
              Feel free to send a message. I'll get back to you as soon as possible.
            </p>

            <div className="space-y-4">
              {[
                { icon: Mail, title: 'Email', value: 'hello@yourdomain.com', href: 'mailto:hello@yourdomain.com' },
                { icon: MessageSquare, title: 'LinkedIn', value: 'connect/yourprofile', href: 'https://linkedin.com' },
                { icon: Compass, title: 'Location', value: 'Gujarat, India', href: '#' },
              ].map((item) => (
                <motion.a
                  key={item.title}
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="flex items-center gap-5 p-5 bg-white/[0.01] border border-white/5 rounded-2xl hover:border-[#ff3b30]/30 transition-all duration-300 group"
                  whileHover={{ x: 4 }}
                >
                  <div className="w-12 h-12 bg-white/[0.03] border border-white/5 rounded-xl flex items-center justify-center text-[#c0b0b8] group-hover:bg-[#ff3b30]/10 group-hover:text-[#ff3b30] transition-colors">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase font-mono tracking-wider text-[#c0b0b8]/50">{item.title}</p>
                    <p className="font-medium text-white group-hover:text-[#ff3b30] transition-colors">{item.value}</p>
                  </div>
                  <ArrowUpRight className="ml-auto w-5 h-5 text-[#c0b0b8]/30 group-hover:text-[#ff3b30] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Right Form */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-6 bg-white/[0.01] border border-white/5 rounded-3xl p-8 lg:p-12 relative overflow-hidden"
          >
            <form
              onSubmit={(e) => {
                e.preventDefault()
                alert('Thank you! This is a mock form submission.')
              }}
              className="space-y-6"
            >
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-xs font-mono uppercase tracking-wider text-[#c0b0b8] mb-2 font-medium">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3.5 bg-white/[0.02] border border-white/5 rounded-xl text-white placeholder-white/20 focus:outline-none focus:border-[#ff3b30] focus:ring-1 focus:ring-[#ff3b30] transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs font-mono uppercase tracking-wider text-[#c0b0b8] mb-2 font-medium">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3.5 bg-white/[0.02] border border-white/5 rounded-xl text-white placeholder-white/20 focus:outline-none focus:border-[#ff3b30] focus:ring-1 focus:ring-[#ff3b30] transition-all"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-xs font-mono uppercase tracking-wider text-[#c0b0b8] mb-2 font-medium">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  className="w-full px-4 py-3.5 bg-white/[0.02] border border-white/5 rounded-xl text-white placeholder-white/20 focus:outline-none focus:border-[#ff3b30] focus:ring-1 focus:ring-[#ff3b30] transition-all"
                  placeholder="Consultancy Request"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-mono uppercase tracking-wider text-[#c0b0b8] mb-2 font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="w-full px-4 py-3.5 bg-white/[0.02] border border-white/5 rounded-xl text-white placeholder-white/20 focus:outline-none focus:border-[#ff3b30] focus:ring-1 focus:ring-[#ff3b30] transition-all resize-none"
                  placeholder="Describe your design or tool needs..."
                />
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#ff3b30] text-white font-semibold rounded-full hover:bg-white hover:text-black hover:scale-[1.02] transition-all duration-300 shadow-[0_4px_20px_rgba(255,59,48,0.15)] hover:shadow-none"
              >
                Send Message
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  )
}