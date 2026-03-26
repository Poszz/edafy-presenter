import React, { Fragment } from 'react';
import { XIcon, CheckIcon, LayersIcon, NetworkIcon } from 'lucide-react';
const platforms = [
{
  label: 'Platform A',
  angle: -90,
  protocol: 'OSDU'
},
{
  label: 'Platform C',
  angle: -30,
  protocol: 'OSDU'
},
{
  label: 'Platform F',
  angle: 10,
  protocol: 'OSDU'
},
{
  label: 'Platform B',
  angle: 50,
  protocol: 'PPDM'
},
{
  label: 'Platform G',
  angle: 90,
  protocol: 'PPDM'
},
{
  label: 'Platform E',
  angle: 150,
  protocol: 'PPDM'
},
{
  label: 'Platform D',
  angle: 190,
  protocol: 'OSDU'
}];

export function SolutionsSlide() {
  return (
    <section
      className="slide text-white"
      style={{
        backgroundImage:
        'url(/bg-slide-main.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
      
      <div className="slide-content container flex flex-col h-full py-6 gap-3">
        {/* Header */}
        <div className="w-full text-center animate-slide-up z-10 shrink-0">
          <h2 className="font-display text-fluid-h2 font-bold text-white tracking-tight leading-tight">
            EDAFY DATA – Connecting the Subsurface Ecosystem
          </h2>
          <p className="font-display text-purple-300 italic font-medium text-fluid-small mt-1">
            Transforming the Subsurface Data Landscape
          </p>
        </div>

        {/* Two-Column Layout */}
        <div className="flex flex-col md:flex-row gap-4 flex-1 min-h-0 z-10">
          {/* Left Column — Content Cards */}
          <div className="w-full md:w-[45%] flex flex-col gap-2 animate-slide-in-left">
            {/* Description */}
            <div className="glass-subtle p-2.5 border-l-2 border-purple-400/50">
              <p className="font-body text-xs text-white/80 leading-snug">
                A central platform that integrates, governs, and monitors
                subsurface data flows across the enterprise.
              </p>
            </div>

            {/* Problem Section */}
            <div className="glass-strong p-2.5 flex flex-col gap-1.5 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:animate-shimmer pointer-events-none" />
              <h3 className="font-display text-xs font-bold text-white flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-red-400 shrink-0" />
                Problem Today: Fragmented Subsurface Data
              </h3>
              <div className="flex flex-col gap-1">
                {[
                'Manual data transfers between systems',
                'Duplicate datasets across platforms',
                'Limited visibility into data origin',
                'Integration complexity across tools'].
                map((item) =>
                <div key={item} className="flex items-start gap-2">
                    <XIcon className="w-3.5 h-3.5 text-red-400 shrink-0 mt-0.5" />
                    <span className="font-body text-xs text-white/70 leading-snug">
                      {item}
                    </span>
                  </div>
                )}
              </div>
              <div className="flex flex-wrap gap-1.5 mt-0.5">
                {[
                'Interpretation tools',
                'Seismic systems',
                'Well databases',
                'External data providers'].
                map((tag) =>
                <span
                  key={tag}
                  className="font-body text-[9px] text-purple-300/70 italic">
                  
                    {tag}
                  </span>
                )}
              </div>
            </div>

            {/* Supported Ecosystem */}
            <div className="interactive-card p-2.5 flex flex-col gap-1 group">
              <h3 className="font-display text-xs font-bold text-white flex items-center gap-2">
                <NetworkIcon className="w-3.5 h-3.5 text-blue-300" />
                Supported Ecosystem
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {[
                'JewelSuite',
                'Paleoscan',
                'OSDU',
                'PPDM',
                '3rd Party Apps'].
                map((tool) =>
                <span
                  key={tool}
                  className="font-body text-[11px] px-2 py-0.5 rounded-full bg-white/10 text-white/80 border border-white/10 hover:bg-purple-500/20 hover:border-purple-400/30 transition-colors cursor-default">
                  
                    {tool}
                  </span>
                )}
              </div>
            </div>

            {/* Outcomes */}
            <div className="interactive-card p-2.5 flex flex-col gap-1 group">
              <h3 className="font-display text-xs font-bold text-white flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 shrink-0" />
                Outcomes
              </h3>
              <div className="flex flex-col gap-0.5">
                {[
                'Unified data connectivity',
                'Consistent schemes & CRS standards',
                'Transparent data flows across systems'].
                map((item) =>
                <div key={item} className="flex items-start gap-2">
                    <CheckIcon className="w-3.5 h-3.5 text-green-400 shrink-0 mt-0.5" />
                    <span className="font-body text-xs text-white/70 leading-snug">
                      {item}
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Right Column — Platform Connectivity Diagram */}
          <div className="w-full md:w-[55%] flex items-center justify-center animate-slide-in-right delay-200 min-h-0">
            <div className="relative w-full max-w-[min(100%,50vh)] aspect-square mx-auto">
              {/* Outer orbit ring */}
              <div className="absolute inset-[5%] rounded-full border border-white/10" />
              {/* Inner orbit ring */}
              <div className="absolute inset-[25%] rounded-full border border-purple-500/20" />

              {/* Central EDAFY Hub */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                <div className="glass-strong p-3 md:p-4 flex flex-col items-center gap-1.5 animate-pulse-glow cursor-pointer hover:scale-110 transition-transform duration-300">
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center shadow-[0_0_25px_rgba(251,191,36,0.5)]">
                    <LayersIcon className="w-6 h-6 md:w-7 md:h-7 text-white" />
                  </div>
                  <span className="font-display text-xs md:text-sm font-bold text-white whitespace-nowrap">
                    EDAFY
                  </span>
                </div>
              </div>

              {/* SVG Connection Lines — matches CSS node positions exactly */}
              <svg
                className="absolute inset-0 w-full h-full z-0 pointer-events-none"
                viewBox="0 0 100 100"
                preserveAspectRatio="none">
                
                {platforms.map((p) => {
                  const rad = p.angle * Math.PI / 180;
                  const r = 44;
                  const x2 = 50 + r * Math.cos(rad);
                  const y2 = 50 + r * Math.sin(rad);
                  const color =
                  p.protocol === 'OSDU' ?
                  'rgba(52,211,153,0.5)' :
                  'rgba(96,165,250,0.5)';
                  return (
                    <line
                      key={p.label}
                      x1="50"
                      y1="50"
                      x2={x2}
                      y2={y2}
                      stroke={color}
                      strokeWidth="0.3"
                      strokeDasharray="1.5 1" />);


                })}
              </svg>

              {/* Protocol Labels on inner ring */}
              <div className="absolute top-[18%] left-1/2 -translate-x-1/2 z-10">
                <span className="font-body text-[10px] md:text-xs font-semibold text-emerald-300/80 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                  OSDU
                </span>
              </div>
              <div className="absolute bottom-[18%] left-1/2 -translate-x-1/2 z-10">
                <span className="font-body text-[10px] md:text-xs font-semibold text-blue-300/80 bg-blue-500/10 px-2 py-0.5 rounded-full border border-blue-500/20">
                  PPDM
                </span>
              </div>

              {/* Platform Nodes */}
              {platforms.map((p, idx) => {
                const rad = p.angle * Math.PI / 180;
                const radius = 44;
                const x = 50 + radius * Math.cos(rad);
                const y = 50 + radius * Math.sin(rad);
                const isOSDU = p.protocol === 'OSDU';
                return (
                  <div
                    key={p.label}
                    className="absolute z-10 -translate-x-1/2 -translate-y-1/2"
                    style={{
                      left: `${x}%`,
                      top: `${y}%`,
                      animationDelay: `${idx * 80}ms`
                    }}>
                    
                    <div className="flex flex-col items-center gap-1 group cursor-pointer animate-slide-up">
                      <div
                        className={`w-8 h-8 md:w-10 md:h-10 rounded-full border-2 ${isOSDU ? 'border-emerald-400/50 shadow-[0_0_10px_rgba(52,211,153,0.3)]' : 'border-blue-400/50 shadow-[0_0_10px_rgba(96,165,250,0.3)]'} bg-gray-900/80 flex items-center justify-center group-hover:scale-125 transition-transform duration-300`}>
                        
                        <div
                          className={`w-3 h-3 md:w-4 md:h-4 rounded-full ${isOSDU ? 'bg-amber-400' : 'bg-amber-400'} shadow-inner`} />
                        
                      </div>
                      <span className="font-body text-[9px] md:text-[11px] font-semibold text-white/70 whitespace-nowrap group-hover:text-white transition-colors">
                        {p.label}
                      </span>
                    </div>
                  </div>);

              })}

              {/* Decorative floating orbs */}
              <div className="absolute top-[35%] left-[30%] w-10 h-10 rounded-full bg-purple-500/5 blur-xl animate-float pointer-events-none" />
              <div
                className="absolute bottom-[30%] right-[25%] w-14 h-14 rounded-full bg-blue-500/5 blur-xl animate-float pointer-events-none"
                style={{
                  animationDelay: '3s'
                }} />
              
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="w-full text-center animate-slide-up delay-400 z-10 shrink-0">
          <p className="font-body text-xs text-white/40 tracking-wider">
            © 2026 AFED Digital. All rights reserved.
          </p>
        </div>
      </div>
    </section>);

}