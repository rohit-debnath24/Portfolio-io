'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Play, ShieldAlert } from 'lucide-react'

// Arrays for Slider Value Mappings to match Evil Martians screenshots exactly
const arrValues = ['≈$5K', '≈$50K', '≈$500K', '≈$5M', '≈$10M']
const timeToValueValues = ['Instant', '1-3 days', '1-2 weeks', '1 month', '3+ months']
const retentionValues = ['<15%', '15-30%', '30-45%', '45-60%', '>60%']
const organicSignupValues = ['<20%', '20-40%', '40-50%', '50-70%', '>70%']
const conversionValues = ['<1%', '1-3%', '3-6%', '6-10%', '>10%']
const nrrValues = ['<100%', '100-110%', '110-120%', '120-130%', '>130%']

export default function MartianConsole() {
  // Category State
  const [category, setCategory] = useState('Infrastructure')
  // Go to market motion State
  const [gtm, setGtm] = useState('Product-led growth')

  // Slider Index States (0 to 4)
  const [arr, setArr] = useState(0)
  const [timeToValue, setTimeToValue] = useState(1)
  const [retention, setRetention] = useState(0)
  const [organic, setOrganic] = useState(3)
  const [conversion, setConversion] = useState(1)
  const [nrr, setNrr] = useState(0)

  // Modal State
  const [showResult, setShowResult] = useState(false)
  const [pmfScore, setPmfScore] = useState(0)

  // Function to calculate PMF score based on selected sliders and categories
  const calculatePMF = () => {
    // Simple math formula to compute a score out of 100
    let score = 30 // Base
    score += (4 - arr) * 5 // Higher score for earlier ARR scaling (mock valuation check)
    score += (4 - timeToValue) * 8 // Faster time to value is better
    score += retention * 8 // Higher retention is better
    score += organic * 6 // Higher organic signup is better
    score += conversion * 5
    score += nrr * 8 // Higher NRR is better

    if (category === 'Infrastructure' && gtm === 'Product-led growth') {
      score += 15 // Perfect fit bonus
    } else if (category === 'Dev Products' && gtm === 'Product-led growth') {
      score += 10
    }

    score = Math.min(Math.max(score, 10), 100)
    setPmfScore(score)
    setShowResult(true)
  }

  // Constellation math: coordinates of points from center (250, 250)
  // Each point's distance is scaled by its corresponding slider value
  const center = { x: 250, y: 250 }

  const getCoordinates = (angleDegrees: number, valueIndex: number) => {
    const angleRad = (angleDegrees * Math.PI) / 180
    // Radius goes from 50px (value index 0) to 150px (value index 4)
    const radius = 55 + valueIndex * 24
    return {
      x: center.x + radius * Math.cos(angleRad),
      y: center.y + radius * Math.sin(angleRad),
    }
  }

  // Node Positions
  const nodeArr = getCoordinates(0, arr)
  const nodeTTV = getCoordinates(60, timeToValue)
  const nodeRet = getCoordinates(120, retention)
  const nodeOrg = getCoordinates(180, organic)
  const nodeConv = getCoordinates(240, conversion)
  const nodeNrr = getCoordinates(300, nrr)

  const nodes = [nodeArr, nodeTTV, nodeRet, nodeOrg, nodeConv, nodeNrr]

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
              HOW YOU CAN
              <br />
              <span className="text-[#00ff88]">ACHIEVE PMF</span>
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
              SECTOR_4
            </span>
            <span className="font-mono text-[9px] text-[#a0b0a8] uppercase">
              // ACTIVE RADAR ACTIVE
            </span>
          </div>
        </div>

        {/* Right Column: Calculator Sliders & Selectors */}
        <div className="lg:col-span-7 p-8 flex flex-col justify-between">
          <div className="space-y-6">
            
            {/* Category Selectors */}
            <div>
              <span className="block font-mono text-[10px] uppercase tracking-wider text-[#a0b0a8]/60 mb-2.5">
                Category
              </span>
              <div className="grid grid-cols-3 border border-white/5 overflow-hidden">
                {['Dev Products', 'Infrastructure', 'Cybersecurity'].map((cat) => (
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

            {/* Go-to-market motion Selectors */}
            <div>
              <span className="block font-mono text-[10px] uppercase tracking-wider text-[#a0b0a8]/60 mb-2.5">
                Go to market motion
              </span>
              <div className="grid grid-cols-3 border border-white/5 overflow-hidden">
                {['Product-led growth', 'Sales-assisted', 'Enterprise'].map((motionItem) => (
                  <button
                    key={motionItem}
                    type="button"
                    onClick={() => setGtm(motionItem)}
                    className={`py-2 px-3 text-[10px] font-mono uppercase tracking-wider text-center border-r border-white/5 last:border-r-0 transition-colors ${
                      gtm === motionItem
                        ? 'bg-[#00ff88] text-black font-bold'
                        : 'bg-transparent text-[#a0b0a8] hover:bg-white/[0.02]'
                    }`}
                  >
                    {motionItem}
                  </button>
                ))}
              </div>
            </div>

            {/* Range Sliders */}
            <div className="space-y-4 pt-2">
              {/* ARR */}
              <div>
                <div className="flex justify-between text-[11px] font-mono uppercase text-[#a0b0a8] mb-1.5">
                  <span>Annual recurring revenue</span>
                  <span className="text-[#00ff88] font-bold">{arrValues[arr]}</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="4"
                  step="1"
                  value={arr}
                  onChange={(e) => setArr(parseInt(e.target.value))}
                  className="martian-slider w-full py-1"
                />
              </div>

              {/* Time to value */}
              <div>
                <div className="flex justify-between text-[11px] font-mono uppercase text-[#a0b0a8] mb-1.5">
                  <span>Time to first value</span>
                  <span className="text-[#00ff88] font-bold">{timeToValueValues[timeToValue]}</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="4"
                  step="1"
                  value={timeToValue}
                  onChange={(e) => setTimeToValue(parseInt(e.target.value))}
                  className="martian-slider w-full py-1"
                />
              </div>

              {/* Retention */}
              <div>
                <div className="flex justify-between text-[11px] font-mono uppercase text-[#a0b0a8] mb-1.5">
                  <span>Day 7 retention</span>
                  <span className="text-[#00ff88] font-bold">{retentionValues[retention]}</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="4"
                  step="1"
                  value={retention}
                  onChange={(e) => setRetention(parseInt(e.target.value))}
                  className="martian-slider w-full py-1"
                />
              </div>

              {/* Organic Signup */}
              <div>
                <div className="flex justify-between text-[11px] font-mono uppercase text-[#a0b0a8] mb-1.5">
                  <span>Organic signup</span>
                  <span className="text-[#00ff88] font-bold">{organicSignupValues[organic]}</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="4"
                  step="1"
                  value={organic}
                  onChange={(e) => setOrganic(parseInt(e.target.value))}
                  className="martian-slider w-full py-1"
                />
              </div>

              {/* Conversion */}
              <div>
                <div className="flex justify-between text-[11px] font-mono uppercase text-[#a0b0a8] mb-1.5">
                  <span>Free to paid conversion</span>
                  <span className="text-[#00ff88] font-bold">{conversionValues[conversion]}</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="4"
                  step="1"
                  value={conversion}
                  onChange={(e) => setConversion(parseInt(e.target.value))}
                  className="martian-slider w-full py-1"
                />
              </div>

              {/* NRR */}
              <div>
                <div className="flex justify-between text-[11px] font-mono uppercase text-[#a0b0a8] mb-1.5">
                  <span>Net revenue retention</span>
                  <span className="text-[#00ff88] font-bold">{nrrValues[nrr]}</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="4"
                  step="1"
                  value={nrr}
                  onChange={(e) => setNrr(parseInt(e.target.value))}
                  className="martian-slider w-full py-1"
                />
              </div>
            </div>

          </div>

          {/* Calculate Button */}
          <div className="mt-8 pt-6 border-t border-white/5 text-center">
            <button
              onClick={calculatePMF}
              className="px-6 py-2 border border-dashed border-[#00ff88]/40 text-[#00ff88] hover:text-black hover:bg-[#00ff88]/10 hover:border-[#00ff88]/65 text-xs font-mono uppercase tracking-widest transition-all rounded"
            >
              [CALCULATE PMF]
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
                  // READOUT METRICS COMPLETED
                </span>
                
                <h3 className="font-display font-black text-2xl text-white mb-6 uppercase">
                  PMF VALIDATION SCORE
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
                      animate={{ strokeDashoffset: 339.29 - (339.29 * pmfScore) / 100 }}
                      transition={{ duration: 1.2, ease: 'easeOut' }}
                    />
                  </svg>
                  <span className="font-display text-4xl font-black text-white">
                    {pmfScore}<span className="text-[#00ff88] text-sm font-light">%</span>
                  </span>
                </div>

                {/* Text Assessment */}
                <div className="p-4 bg-white/[0.01] border border-white/5 rounded-xl text-left mb-6">
                  <span className="font-mono text-[9px] text-[#00ff88] block mb-1">
                    STATUS ASSESSMENT:
                  </span>
                  <p className="text-xs text-[#a0b0a8] leading-relaxed">
                    {pmfScore > 75
                      ? `STRONG PRODUCT-MARKET FIT POTENTIAL. Your ${category} category aligns excellently with a ${gtm} GTM model. Scalable infrastructure channels are recommended.`
                      : pmfScore > 50
                      ? 'MODERATE TRACTION. Core features are functioning, but optimizing organic retention or time-to-first-value yields are critical to secure reliable expansion.'
                      : 'EARLY VALIDATION PHASE. Focus heavily on minimizing Time-to-First-Value metrics and boosting user retention channels before establishing marketing scales.'}
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
