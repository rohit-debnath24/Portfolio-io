'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Cpu } from 'lucide-react'

// Arrays for Slider Value Mappings representing Developer-Project Fit parameters
const scopeValues = ['Landing Page', 'SaaS Core', 'Platform App', 'Distributed System', 'Global Scale']
const designValues = ['Clean Layout', 'Component Library', 'Premium Motion', 'Immersive WebGL', 'State-of-the-Art']
const timelineValues = ['Rush (<2 wks)', 'Fast (3-4 wks)', 'Standard (1-2 mo)', 'Strategic (3-6 mo)', 'Flexible']
const integrationValues = ['Static / Base', 'Simple CRUD', 'SaaS APIs & Pay', 'Third-Party Hub', 'Microservices / Web3']
const realtimeValues = ['None (Static)', 'Async Fetch', 'WebSockets Sync', 'Multiplayer / CRDTs', 'Agentic AI Loops']
const qualityValues = ['Manual check', 'Unit tests', 'CI/CD Pipelines', 'E2E Testing', 'Audit / Compliance']

export default function MartianConsole() {
  // Category State (Frontend / UI, Full-Stack / SaaS, AI / Web3)
  const [category, setCategory] = useState('Full-Stack / SaaS')
  // Project Complexity / Scale
  const [complexity, setComplexity] = useState('Scale / Growth')

  // Slider Index States (0 to 4)
  const [scope, setScope] = useState(1)
  const [design, setDesign] = useState(2)
  const [timeline, setTimeline] = useState(2)
  const [integration, setIntegration] = useState(2)
  const [realtime, setRealtime] = useState(1)
  const [quality, setQuality] = useState(2)

  // Modal State
  const [showResult, setShowResult] = useState(false)
  const [fitScore, setFitScore] = useState(0)

  // Function to calculate developer-project alignment score
  const calculateProjectFit = () => {
    let score = 55 // Base alignment

    // Custom calculation logic:
    // 1. High design fidelity and premium interactions align perfectly with our frontend/motion skills
    score += design * 6
    // 2. Interactive realtime sockets and microservices align with advanced backend skills
    score += realtime * 5
    score += integration * 3

    // 3. Category matching
    if (category === 'Full-Stack / SaaS' && complexity === 'Scale / Growth') {
      score += 15 // Perfect core alignment
    } else if (category === 'AI / Web3' && complexity === 'MVP Prototype') {
      score += 12 // Great experimental fit
    } else if (category === 'Frontend / UI' && design >= 2) {
      score += 10
    }

    // 4. Scope-timeline balance
    if (scope >= 3 && timeline <= 1) {
      score -= 15 // Penalty for massive projects on rush timelines (realistic consultation!)
    } else if (scope <= 1 && timeline <= 1) {
      score += 10 // Great fit for quick MVP delivery
    }

    score = Math.min(Math.max(score, 40), 100)
    setFitScore(score)
    setShowResult(true)
  }

  // Constellation math: coordinates of points from center (250, 250)
  // Each point's distance is scaled by its corresponding slider value
  const center = { x: 250, y: 250 }

  const getCoordinates = (angleDegrees: number, valueIndex: number) => {
    const angleRad = (angleDegrees * Math.PI) / 180
    // Radius goes from 55px (value index 0) to 151px (value index 4)
    const radius = 55 + valueIndex * 24
    return {
      x: center.x + radius * Math.cos(angleRad),
      y: center.y + radius * Math.sin(angleRad),
    }
  }

  // Node Positions based on current slider choices
  const nodeScope = getCoordinates(0, scope)
  const nodeDesign = getCoordinates(60, design)
  const nodeTimeline = getCoordinates(120, timeline)
  const nodeIntegration = getCoordinates(180, integration)
  const nodeRealtime = getCoordinates(240, realtime)
  const nodeQuality = getCoordinates(300, quality)

  const nodes = [nodeScope, nodeDesign, nodeTimeline, nodeIntegration, nodeRealtime, nodeQuality]

  return (
    <div className="relative w-full max-w-6xl mx-auto z-10">
      {/* Target Bracket corner lines for console panel */}
      <div className="border border-white/5 bg-[#0c120f]/40 relative grid lg:grid-cols-12 gap-0 overflow-hidden">
        
        {/* Decorative corner indicators */}
        <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-[#00ff88] z-20" />
        <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-[#00ff88] z-20" />
        <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-[#00ff88] z-20" />
        <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-[#00ff88] z-20" />

        {/* Left Column: Title & SVG Constellation */}
        <div className="lg:col-span-5 p-8 border-r border-white/5 flex flex-col justify-between min-h-[500px]">
          <div>
            <h2 className="font-display font-black text-2xl tracking-widest text-[#f4fff8] uppercase leading-none">
              LET'S EXPLORE
              <br />
              HOW WE CAN
              <br />
              <span className="text-[#00ff88]">ACHIEVE FIT</span>
            </h2>
          </div>

          {/* Connected Constellation SVG Map */}
          <div className="w-full flex items-center justify-center py-6 relative">
            <svg width="280" height="280" viewBox="0 0 500 500" fill="none" className="w-full h-auto max-w-[280px]">
              {/* Outer boundary circular tracks */}
              <circle cx="250" cy="250" r="175" stroke="rgba(0, 255, 136, 0.04)" strokeWidth="1" strokeDasharray="3 6" />
              <circle cx="250" cy="250" r="127" stroke="rgba(0, 255, 136, 0.04)" strokeWidth="1" strokeDasharray="3 6" />
              <circle cx="250" cy="250" r="79"  stroke="rgba(0, 255, 136, 0.04)" strokeWidth="1" strokeDasharray="3 6" />

              {/* Connecting grid line structures */}
              {nodes.map((node, i) => (
                <line
                  key={i}
                  x1={center.x}
                  y1={center.y}
                  x2={node.x}
                  y2={node.y}
                  stroke="rgba(0, 255, 136, 0.15)"
                  strokeWidth="1"
                />
              ))}

              {/* Star-constellation outer lines */}
              <polygon
                points={nodes.map(n => `${n.x},${n.y}`).join(' ')}
                stroke="rgba(209, 245, 226, 0.18)"
                strokeWidth="1.2"
                fill="rgba(0, 255, 136, 0.01)"
              />

              {/* Dynamic Outer Nodes */}
              {nodes.map((node, i) => (
                <circle
                  key={i}
                  cx={node.x}
                  cy={node.y}
                  r="6"
                  fill="#d1f5e2"
                  className="opacity-70 group-hover:opacity-100 transition-opacity"
                />
              ))}

              {/* Connected Center Core */}
              <circle cx="250" cy="250" r="22" fill="#0c120f" stroke="rgba(0, 255, 136, 0.25)" strokeWidth="1.5" />
              <motion.circle
                cx="250"
                cy="250"
                r="10"
                fill="#00ff88"
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
              />
            </svg>
          </div>

          {/* Tbilisi events notice */}
          <div className="pt-4 flex items-center gap-3">
            <span className="font-mono text-[9px] text-[#00ff88] px-2 py-1 border border-[#00ff88]/20 uppercase">
              RADAR_A
            </span>
            <span className="font-mono text-[9px] text-[#a0b0a8] uppercase">
              // ALIGNMENT SCORE RADAR
            </span>
          </div>
        </div>

        {/* Right Column: Calculator Sliders & Selectors */}
        <div className="lg:col-span-7 p-8 flex flex-col justify-between">
          <div className="space-y-6">
            
            {/* Category Selectors */}
            <div>
              <span className="block font-mono text-[10px] uppercase tracking-wider text-[#a0b0a8]/60 mb-2.5">
                Project Category
              </span>
              <div className="grid grid-cols-3 border border-white/5 overflow-hidden">
                {['Frontend / UI', 'Full-Stack / SaaS', 'AI / Web3'].map((cat) => (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setCategory(cat)}
                    className={`py-2 px-3 text-[10px] font-mono uppercase tracking-wider text-center border-r border-white/5 last:border-r-0 transition-colors ${
                      category === cat
                        ? 'bg-[#00ff88] text-black font-bold'
                        : 'bg-transparent text-[#a0b0a8] hover:bg-white/[0.02]'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Project Complexity Selectors */}
            <div>
              <span className="block font-mono text-[10px] uppercase tracking-wider text-[#a0b0a8]/60 mb-2.5">
                Target Project Phase
              </span>
              <div className="grid grid-cols-3 border border-white/5 overflow-hidden">
                {['MVP Prototype', 'Scale / Growth', 'Enterprise System'].map((compItem) => (
                  <button
                    key={compItem}
                    type="button"
                    onClick={() => setComplexity(compItem)}
                    className={`py-2 px-3 text-[10px] font-mono uppercase tracking-wider text-center border-r border-white/5 last:border-r-0 transition-colors ${
                      complexity === compItem
                        ? 'bg-[#00ff88] text-black font-bold'
                        : 'bg-transparent text-[#a0b0a8] hover:bg-white/[0.02]'
                    }`}
                  >
                    {compItem}
                  </button>
                ))}
              </div>
            </div>

            {/* Range Sliders */}
            <div className="space-y-4 pt-2">
              {/* Scope */}
              <div>
                <div className="flex justify-between text-[11px] font-mono uppercase text-[#a0b0a8] mb-1.5">
                  <span>Project Scope & Size</span>
                  <span className="text-[#00ff88] font-bold">{scopeValues[scope]}</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="4"
                  step="1"
                  value={scope}
                  onChange={(e) => setScope(parseInt(e.target.value))}
                  className="martian-slider w-full py-1"
                />
              </div>

              {/* Design Fidelity */}
              <div>
                <div className="flex justify-between text-[11px] font-mono uppercase text-[#a0b0a8] mb-1.5">
                  <span>Design & Motion Fidelity</span>
                  <span className="text-[#00ff88] font-bold">{designValues[design]}</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="4"
                  step="1"
                  value={design}
                  onChange={(e) => setDesign(parseInt(e.target.value))}
                  className="martian-slider w-full py-1"
                />
              </div>

              {/* Timeline */}
              <div>
                <div className="flex justify-between text-[11px] font-mono uppercase text-[#a0b0a8] mb-1.5">
                  <span>Target Delivery Timeline</span>
                  <span className="text-[#00ff88] font-bold">{timelineValues[timeline]}</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="4"
                  step="1"
                  value={timeline}
                  onChange={(e) => setTimeline(parseInt(e.target.value))}
                  className="martian-slider w-full py-1"
                />
              </div>

              {/* API Integrations */}
              <div>
                <div className="flex justify-between text-[11px] font-mono uppercase text-[#a0b0a8] mb-1.5">
                  <span>API & Integrations Depth</span>
                  <span className="text-[#00ff88] font-bold">{integrationValues[integration]}</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="4"
                  step="1"
                  value={integration}
                  onChange={(e) => setIntegration(parseInt(e.target.value))}
                  className="martian-slider w-full py-1"
                />
              </div>

              {/* Real-time */}
              <div>
                <div className="flex justify-between text-[11px] font-mono uppercase text-[#a0b0a8] mb-1.5">
                  <span>Real-Time & Sync Needs</span>
                  <span className="text-[#00ff88] font-bold">{realtimeValues[realtime]}</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="4"
                  step="1"
                  value={realtime}
                  onChange={(e) => setRealtime(parseInt(e.target.value))}
                  className="martian-slider w-full py-1"
                />
              </div>

              {/* Quality & Testing */}
              <div>
                <div className="flex justify-between text-[11px] font-mono uppercase text-[#a0b0a8] mb-1.5">
                  <span>Testing & Compliance Scope</span>
                  <span className="text-[#00ff88] font-bold">{qualityValues[quality]}</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="4"
                  step="1"
                  value={quality}
                  onChange={(e) => setQuality(parseInt(e.target.value))}
                  className="martian-slider w-full py-1"
                />
              </div>
            </div>

          </div>

          {/* Calculate Button */}
          <div className="mt-8 pt-6 border-t border-white/5 text-center">
            <button
              onClick={calculateProjectFit}
              className="px-6 py-2 border border-dashed border-[#00ff88]/40 text-[#00ff88] hover:text-black hover:bg-[#00ff88]/10 hover:border-[#00ff88]/65 text-xs font-mono uppercase tracking-widest transition-all rounded"
            >
              [CALCULATE PROJECT FIT]
            </button>
          </div>
        </div>

      </div>

      {/* Pop-up Results Modal */}
      <AnimatePresence>
        {showResult && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-[#040806]/95 z-50 flex items-center justify-center p-6"
          >
            {/* Modal target corner borders */}
            <div className="w-full max-w-md border border-[#00ff88]/20 bg-[#0c120f] p-8 rounded-2xl relative shadow-[0_10px_40px_rgba(0,0,0,0.8)]">
              <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-[#00ff88]" />
              <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-[#00ff88]" />
              <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-[#00ff88]" />
              <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-[#00ff88]" />

              <button
                onClick={() => setShowResult(false)}
                className="absolute top-4 right-4 p-1.5 border border-white/5 hover:border-[#00ff88]/40 rounded-full text-[#a0b0a8] hover:text-white transition-colors"
                aria-label="Close modal"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="text-center">
                <span className="font-mono text-[9px] text-[#00ff88] tracking-widest uppercase block mb-2">
                  // READOUT ALIGNMENT COMPLETED
                </span>
                
                <h3 className="font-display font-black text-2xl text-white mb-6 uppercase">
                  DEVELOPER ALIGNMENT SCORE
                </h3>

                {/* Score Circle */}
                <div className="relative w-32 h-32 mx-auto flex items-center justify-center mb-6">
                  {/* Outer spinning border */}
                  <svg className="absolute inset-0 w-full h-full transform -rotate-90">
                    <circle
                      cx="64"
                      cy="64"
                      r="54"
                      stroke="rgba(0, 255, 136, 0.1)"
                      strokeWidth="6"
                      fill="transparent"
                    />
                    <motion.circle
                      cx="64"
                      cy="64"
                      r="54"
                      stroke="#00ff88"
                      strokeWidth="6"
                      fill="transparent"
                      strokeDasharray="339.29"
                      initial={{ strokeDashoffset: 339.29 }}
                      animate={{ strokeDashoffset: 339.29 - (339.29 * fitScore) / 100 }}
                      transition={{ duration: 1.2, ease: 'easeOut' }}
                    />
                  </svg>
                  <span className="font-display text-4xl font-black text-white">
                    {fitScore}<span className="text-[#00ff88] text-sm font-light">%</span>
                  </span>
                </div>

                {/* Text Assessment */}
                <div className="p-4 bg-white/[0.01] border border-white/5 rounded-xl text-left mb-6">
                  <span className="font-mono text-[9px] text-[#00ff88] block mb-1">
                    STATUS ASSESSMENT:
                  </span>
                  <p className="text-xs text-[#a0b0a8] leading-relaxed font-mono">
                    {fitScore > 80
                      ? `STRONG FIT DETECTED. Your project category (${category}) and phase (${complexity}) perfectly align with my focus on building responsive full-stack apps, interactive motion systems, and custom integrations. Let's schedule a call!`
                      : fitScore > 60
                      ? `GOOD FEASIBILITY. The scope and timeline represent a solid build target. I recommend using standard component structures or custom Tailwind layers to optimize the delivery path.`
                      : `HIGH COMPLEXITY / RUSH CHALLENGE. Delivering a large-scale integration on a short timeline is high risk. I recommend restructuring the MVP scope to fit key priority features first.`}
                  </p>
                </div>

                {/* Action button */}
                <button
                  onClick={() => setShowResult(false)}
                  className="px-6 py-2.5 bg-[#00ff88] hover:bg-white text-black hover:text-black text-xs font-mono uppercase tracking-widest transition-colors rounded-full font-bold shadow-[0_4px_15px_rgba(0,255,136,0.25)]"
                >
                  Recalibrate
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
