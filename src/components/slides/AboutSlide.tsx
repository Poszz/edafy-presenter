import React, { Fragment } from 'react';
import { XIcon, CheckIcon } from 'lucide-react';
export function AboutSlide() {
  const platforms = [
  {
    label: 'Platform A',
    angle: 0
  },
  {
    label: 'Platform C',
    angle: 51
  },
  {
    label: 'Platform F',
    angle: 103
  },
  {
    label: 'Platform B',
    angle: 154
  },
  {
    label: 'Platform G',
    angle: 206
  },
  {
    label: 'Platform E',
    angle: 257
  },
  {
    label: 'Platform D',
    angle: 309
  }];

  return (
    <section
      className="slide text-white"
      style={{
        backgroundImage:
        'url(https://cdn.magicpatterns.com/uploads/oNo2BAMCGVU39vB2KQpoNK/image.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
      
      <div className="slide-content container">
        <div className="mb-8 animate-slide-up">
          <h2 className="font-display text-fluid-h2 text-white font-bold leading-tight">
            EDAFY – Connecting the Subsurface Ecosystem
          </h2>
          <p className="font-body text-purple-300 text-fluid-body italic mt-2">
            Transforming the Subsurface Data Landscape
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 h-full">
          {/* Left Column */}
          <div className="w-full lg:w-1/2 flex flex-col gap-4">
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-5 rounded-2xl shadow-lg hover:bg-white/20 hover:scale-[1.02] transition-all duration-300 cursor-pointer animate-slide-up delay-100">
              <p className="font-body text-white/90 font-medium">
                A central platform that integrates, governs, and monitors
                subsurface data flows across the enterprise.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-5 rounded-2xl shadow-lg hover:bg-white/20 hover:scale-[1.02] transition-all duration-300 cursor-pointer animate-slide-up delay-200">
              <h3 className="font-display text-white font-bold mb-3">
                Problem Today: Fragmented Subsurface Data
              </h3>
              <ul className="space-y-2 mb-4">
                {[
                'Manual data transfers between systems',
                'Duplicate datasets across platforms',
                'Limited visibility into data origin',
                'Integration complexity across tools'].
                map((item, i) =>
                <li
                  key={i}
                  className="flex items-start gap-2 text-white/80 text-sm">
                  
                    <XIcon className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                )}
              </ul>
              <p className="text-xs text-purple-300/80 font-medium">
                Interpretation tools, Seismic systems, Well databases, External
                data providers
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-5 rounded-2xl shadow-lg hover:bg-white/20 hover:scale-[1.02] transition-all duration-300 cursor-pointer animate-slide-up delay-300">
              <h3 className="font-display text-white font-bold mb-2">
                Supported Ecosystem
              </h3>
              <p className="font-body text-white/90 text-sm">
                JewelSuite, Paleoscan, OSDU, PPDM, 3rd Party Applications
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-5 rounded-2xl shadow-lg hover:bg-white/20 hover:scale-[1.02] transition-all duration-300 cursor-pointer animate-slide-up delay-400">
              <h3 className="font-display text-white font-bold mb-2">
                Outcomes
              </h3>
              <ul className="space-y-1">
                {[
                'Unified data connectivity',
                'Consistent schemes & CRS standards',
                'Transparent data flows across systems'].
                map((item, i) =>
                <li
                  key={i}
                  className="flex items-center gap-2 text-white/90 text-sm">
                  
                    <CheckIcon className="w-4 h-4 text-green-400 shrink-0" />
                    <span>{item}</span>
                  </li>
                )}
              </ul>
            </div>
          </div>

          {/* Right Column - Rotating Ecosystem Diagram */}
          <div className="w-full lg:w-1/2 relative min-h-[400px] flex items-center justify-center animate-slide-up delay-500">
            <div className="relative w-full max-w-md aspect-square">
              {/* Rotating outer ring with concentric circles */}
              <div className="absolute inset-0 animate-slow-rotate">
                {/* Concentric circles */}
                <div className="absolute inset-0 border border-white/10 rounded-full" />
                <div className="absolute inset-8 border border-white/10 rounded-full" />

                {/* Orbiting Platform Nodes */}
                {platforms.map((node, i) => {
                  const radius = 45;
                  const rad = node.angle * Math.PI / 180;
                  const x = 50 + radius * Math.cos(rad);
                  const y = 50 + radius * Math.sin(rad);
                  return (
                    <div
                      key={i}
                      className="absolute flex flex-col items-center gap-1"
                      style={{
                        top: `${y}%`,
                        left: `${x}%`,
                        transform: 'translate(-50%, -50%)'
                      }}>
                      
                      {/* Counter-rotate label so it stays upright */}
                      <div className="animate-counter-rotate flex flex-col items-center gap-1">
                        <span className="text-xs font-bold text-white whitespace-nowrap drop-shadow-[0_0_4px_rgba(0,0,0,0.8)]">
                          {node.label}
                        </span>
                        <div className="w-7 h-7 rounded-full bg-orange-500/80 border-2 border-yellow-300 shadow-[0_0_12px_rgba(249,115,22,0.6)]" />
                      </div>
                    </div>);

                })}

                {/* OSDU / PPDM labels on the ring */}
                <div className="absolute top-[30%] left-[35%] animate-counter-rotate">
                  <span className="text-xs font-bold text-blue-300 drop-shadow-[0_0_4px_rgba(0,0,0,0.8)]">
                    OSDU
                  </span>
                </div>
                <div className="absolute bottom-[30%] left-[35%] animate-counter-rotate">
                  <span className="text-xs font-bold text-blue-300 drop-shadow-[0_0_4px_rgba(0,0,0,0.8)]">
                    PPDM
                  </span>
                </div>
              </div>

              {/* Inner static ring */}
              <div className="absolute inset-20 border border-white/10 rounded-full" />

              {/* Center Node — stays static */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-yellow-400/90 rounded-full shadow-[0_0_40px_rgba(250,204,21,0.6)] flex items-center justify-center z-20 hover:scale-110 transition-transform duration-300 cursor-pointer">
                <span className="font-bold text-sm text-black">EDAFY</span>
              </div>

              {/* Connecting lines (static, subtle) */}
              <svg
                className="absolute inset-0 w-full h-full pointer-events-none z-10 opacity-30"
                style={{
                  overflow: 'visible'
                }}>
                
                {platforms.map((node, i) => {
                  const radius = 45;
                  const rad = node.angle * Math.PI / 180;
                  const x = 50 + radius * Math.cos(rad);
                  const y = 50 + radius * Math.sin(rad);
                  return (
                    <line
                      key={i}
                      x1="50%"
                      y1="50%"
                      x2={`${x}%`}
                      y2={`${y}%`}
                      stroke="#a78bfa"
                      strokeWidth="1"
                      strokeDasharray="3 3" />);


                })}
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>);

}