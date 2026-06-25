import React from 'react'

export default function GridOverlay() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none">
      {/* Vertical grid lines */}
      <div className="absolute inset-y-0 left-[15%] w-px bg-white/[0.02] md:block hidden" />
      <div className="absolute inset-y-0 left-[35%] w-px bg-white/[0.02]" />
      <div className="absolute inset-y-0 left-[65%] w-px bg-white/[0.02]" />
      <div className="absolute inset-y-0 left-[85%] w-px bg-white/[0.02] md:block hidden" />
      
      {/* Horizontal grid lines */}
      <div className="absolute inset-x-0 top-[20%] h-px bg-white/[0.02]" />
      <div className="absolute inset-x-0 top-[50%] h-px bg-white/[0.02]" />
      <div className="absolute inset-x-0 top-[80%] h-px bg-white/[0.02]" />
      
      {/* Plus signs at intersections */}
      {/* Row 1 (20%) */}
      <div className="absolute top-[20%] left-[15%] -translate-x-1/2 -translate-y-1/2 md:flex hidden items-center justify-center text-white/15 font-light text-[10px]">+</div>
      <div className="absolute top-[20%] left-[35%] -translate-x-1/2 -translate-y-1/2 flex items-center justify-center text-white/15 font-light text-[10px]">+</div>
      <div className="absolute top-[20%] left-[65%] -translate-x-1/2 -translate-y-1/2 flex items-center justify-center text-white/15 font-light text-[10px]">+</div>
      <div className="absolute top-[20%] left-[85%] -translate-x-1/2 -translate-y-1/2 md:flex hidden items-center justify-center text-white/15 font-light text-[10px]">+</div>

      {/* Row 2 (50%) */}
      <div className="absolute top-[50%] left-[15%] -translate-x-1/2 -translate-y-1/2 md:flex hidden items-center justify-center text-white/15 font-light text-[10px]">+</div>
      <div className="absolute top-[50%] left-[35%] -translate-x-1/2 -translate-y-1/2 flex items-center justify-center text-white/15 font-light text-[10px]">+</div>
      <div className="absolute top-[50%] left-[65%] -translate-x-1/2 -translate-y-1/2 flex items-center justify-center text-white/15 font-light text-[10px]">+</div>
      <div className="absolute top-[50%] left-[85%] -translate-x-1/2 -translate-y-1/2 md:flex hidden items-center justify-center text-white/15 font-light text-[10px]">+</div>

      {/* Row 3 (80%) */}
      <div className="absolute top-[80%] left-[15%] -translate-x-1/2 -translate-y-1/2 md:flex hidden items-center justify-center text-white/15 font-light text-[10px]">+</div>
      <div className="absolute top-[80%] left-[35%] -translate-x-1/2 -translate-y-1/2 flex items-center justify-center text-white/15 font-light text-[10px]">+</div>
      <div className="absolute top-[80%] left-[65%] -translate-x-1/2 -translate-y-1/2 flex items-center justify-center text-white/15 font-light text-[10px]">+</div>
      <div className="absolute top-[80%] left-[85%] -translate-x-1/2 -translate-y-1/2 md:flex hidden items-center justify-center text-white/15 font-light text-[10px]">+</div>
    </div>
  )
}
