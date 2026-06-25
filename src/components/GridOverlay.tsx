import React from 'react'

function TargetBracket() {
  return (
    <div className="w-3.5 h-3.5 relative opacity-35">
      <div className="absolute top-0 left-0 w-1 h-1 border-t border-l border-[#00ff88]" />
      <div className="absolute top-0 right-0 w-1 h-1 border-t border-r border-[#00ff88]" />
      <div className="absolute bottom-0 left-0 w-1 h-1 border-b border-l border-[#00ff88]" />
      <div className="absolute bottom-0 right-0 w-1 h-1 border-b border-r border-[#00ff88]" />
    </div>
  )
}

export default function GridOverlay() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none">
      {/* Vertical grid lines */}
      <div className="absolute inset-y-0 left-[15%] w-px bg-[#00ff88]/[0.025] md:block hidden" />
      <div className="absolute inset-y-0 left-[35%] w-px bg-[#00ff88]/[0.025]" />
      <div className="absolute inset-y-0 left-[65%] w-px bg-[#00ff88]/[0.025]" />
      <div className="absolute inset-y-0 left-[85%] w-px bg-[#00ff88]/[0.025] md:block hidden" />
      
      {/* Horizontal grid lines */}
      <div className="absolute inset-x-0 top-[20%] h-px bg-[#00ff88]/[0.025]" />
      <div className="absolute inset-x-0 top-[50%] h-px bg-[#00ff88]/[0.025]" />
      <div className="absolute inset-x-0 top-[80%] h-px bg-[#00ff88]/[0.025]" />
      
      {/* Target brackets at intersections */}
      {/* Row 1 (20%) */}
      <div className="absolute top-[20%] left-[15%] -translate-x-1/2 -translate-y-1/2 md:flex hidden"><TargetBracket /></div>
      <div className="absolute top-[20%] left-[35%] -translate-x-1/2 -translate-y-1/2 flex"><TargetBracket /></div>
      <div className="absolute top-[20%] left-[65%] -translate-x-1/2 -translate-y-1/2 flex"><TargetBracket /></div>
      <div className="absolute top-[20%] left-[85%] -translate-x-1/2 -translate-y-1/2 md:flex hidden"><TargetBracket /></div>

      {/* Row 2 (50%) */}
      <div className="absolute top-[50%] left-[15%] -translate-x-1/2 -translate-y-1/2 md:flex hidden"><TargetBracket /></div>
      <div className="absolute top-[50%] left-[35%] -translate-x-1/2 -translate-y-1/2 flex"><TargetBracket /></div>
      <div className="absolute top-[50%] left-[65%] -translate-x-1/2 -translate-y-1/2 flex"><TargetBracket /></div>
      <div className="absolute top-[50%] left-[85%] -translate-x-1/2 -translate-y-1/2 md:flex hidden"><TargetBracket /></div>

      {/* Row 3 (80%) */}
      <div className="absolute top-[80%] left-[15%] -translate-x-1/2 -translate-y-1/2 md:flex hidden"><TargetBracket /></div>
      <div className="absolute top-[80%] left-[35%] -translate-x-1/2 -translate-y-1/2 flex"><TargetBracket /></div>
      <div className="absolute top-[80%] left-[65%] -translate-x-1/2 -translate-y-1/2 flex"><TargetBracket /></div>
      <div className="absolute top-[80%] left-[85%] -translate-x-1/2 -translate-y-1/2 md:flex hidden"><TargetBracket /></div>
    </div>
  )
}
