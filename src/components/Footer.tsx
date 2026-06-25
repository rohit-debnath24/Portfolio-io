import { Github, Linkedin, Twitter, Mail, Heart } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative bg-transparent border-t border-white/5 z-10 py-12">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Copyright */}
          <div className="flex flex-col md:items-start items-center gap-2">
            <span className="font-display font-bold text-lg text-white">
              MARTIAN<span className="text-[#ff3b30]">.</span>
            </span>
            <p className="text-xs text-[#c0b0b8]/50">
              &copy; {currentYear} Developer Portfolio. All rights reserved.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex gap-4">
            {[
              { icon: Github, href: 'https://github.com', label: 'GitHub' },
              { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
              { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
              { icon: Mail, href: 'mailto:hello@yourdomain.com', label: 'Email' },
            ].map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="w-10 h-10 bg-white/[0.02] border border-white/5 rounded-full flex items-center justify-center text-[#c0b0b8] hover:bg-[#ff3b30]/10 hover:text-[#ff3b30] hover:border-[#ff3b30]/20 transition-all duration-300 hover:scale-105"
              >
                <social.icon className="w-4 h-4" />
              </a>
            ))}
          </div>

          {/* Heart Sig */}
          <div className="flex items-center gap-1.5 text-xs text-[#c0b0b8]/50">
            <span>Crafted with</span>
            <Heart className="w-3.5 h-3.5 text-[#ff3b30] fill-[#ff3b30]/20" />
            <span>and creative engineering</span>
          </div>
        </div>
      </div>
    </footer>
  )
}