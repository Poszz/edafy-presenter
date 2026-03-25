import React from 'react';
export function ChallengeSlide() {
  return (
    <section className="slide slide-bg-hub">
      <div className="slide-content container max-w-[1200px] h-full flex flex-col justify-center">
        {/* Header */}
        <div className="mb-4 animate-slide-up">
          <h2 className="font-display text-3xl md:text-5xl font-medium text-white mb-1 drop-shadow-md">
            Capacitance-Resistance Model (CRM)
          </h2>
          <p className="font-body text-xl md:text-2xl italic drop-shadow-sm text-[#e9d5ff]">
            A Data-Driven Approach to Reservoir Connectivity
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 flex-1 min-h-0">
          {/* Left Column */}
          <div className="w-full lg:w-3/5 flex flex-col gap-4 animate-slide-up delay-100">
            {/* 1. Description — what CRM does */}
            <div className="glass rounded-xl p-4 hover:bg-white/10 transition-colors duration-300">
              <p className="font-body text-lg md:text-xl text-white/90 leading-relaxed">
                CRM analyzes how production responds to injection changes to
                infer inter-well connectivity.
              </p>
            </div>

            {/* 2. Equation — the mathematical model */}
            <div className="flex justify-center py-4 px-4 overflow-x-auto glass-subtle rounded-xl hover:bg-white/10 transition-colors duration-300">
              <div className="text-xl md:text-2xl font-serif whitespace-nowrap text-white drop-shadow-md">
                <span className="italic text-[#2dd4bf]">
                  q<sub>j</sub>
                </span>
                (t) ={' '}
                <span className="italic text-[#2dd4bf]">
                  q<sub>j</sub>
                </span>
                (t - 1)e
                <sup>
                  -Δt/
                  <span className="text-[#fbbf24]">
                    τ<sub>j</sub>
                  </span>
                </sup>{' '}
                + (1 - e
                <sup>
                  -Δt/
                  <span className="text-[#fbbf24]">
                    τ<sub>j</sub>
                  </span>
                </sup>
                )
                <span className="text-4xl align-middle mx-1 font-sans font-light text-white/50">
                  (
                </span>
                <span className="italic text-[#2dd4bf]">
                  q<sub>j0</sub>
                </span>{' '}
                +{' '}
                <span className="text-3xl align-middle text-purple-300">Σ</span>
                <sub>i</sub>{' '}
                <span className="italic text-[#fbbf24]">
                  f<sub>ij</sub>
                </span>{' '}
                <span className="italic text-[#2dd4bf]">
                  I<sub>i</sub>
                </span>
                (t)
                <span className="text-4xl align-middle mx-1 font-sans font-light text-white/50">
                  )
                </span>
              </div>
            </div>

            {/* 3. Parameter Table — decode the symbols */}
            <div className="overflow-hidden glass rounded-xl">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-purple-600/60 backdrop-blur-md text-white border-b border-white/20">
                    <th className="p-3 font-bold text-base border-r border-white/20 w-1/3">
                      Parameter
                    </th>
                    <th className="p-3 font-bold text-base">Meaning</th>
                  </tr>
                </thead>
                <tbody className="text-white/90 text-base">
                  <tr className="bg-white/5 border-b border-white/10 hover:bg-white/20 hover:shadow-[inset_0_0_20px_rgba(168,85,247,0.3)] transition-all duration-300 cursor-pointer">
                    <td className="p-3 font-serif italic text-center border-r border-white/10 text-[#fbbf24]">
                      f<sub>ij</sub>
                    </td>
                    <td className="p-3">Injector-producer connectivity</td>
                  </tr>
                  <tr className="bg-white/10 border-b border-white/10 hover:bg-white/20 hover:shadow-[inset_0_0_20px_rgba(168,85,247,0.3)] transition-all duration-300 cursor-pointer">
                    <td className="p-3 font-serif italic text-center border-r border-white/10 text-[#fbbf24]">
                      τ<sub>j</sub>
                    </td>
                    <td className="p-3">Reservoir response time</td>
                  </tr>
                  <tr className="bg-white/5 border-b border-white/10 hover:bg-white/20 hover:shadow-[inset_0_0_20px_rgba(168,85,247,0.3)] transition-all duration-300 cursor-pointer">
                    <td className="p-3 font-serif italic text-center border-r border-white/10 text-[#2dd4bf]">
                      I<sub>i</sub>
                    </td>
                    <td className="p-3">Injection rate</td>
                  </tr>
                  <tr className="bg-white/10 hover:bg-white/20 hover:shadow-[inset_0_0_20px_rgba(168,85,247,0.3)] transition-all duration-300 cursor-pointer">
                    <td className="p-3 font-serif italic text-center border-r border-white/10 text-[#2dd4bf]">
                      q<sub>j</sub>
                    </td>
                    <td className="p-3">Producer rate</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* 4. Key Parameters — summary of what CRM extracts */}
            <div className="glass rounded-xl p-4 hover:bg-white/10 transition-colors duration-300">
              <p className="font-body text-base md:text-lg text-white mb-2 font-medium">
                Key parameters extracted from production data:
              </p>
              <ul className="list-disc pl-8 space-y-1 text-base md:text-lg text-white/80">
                <li>
                  Injector-producer connectivity (
                  <span className="italic text-[#fbbf24]">
                    f<sub>ij</sub>
                  </span>
                  )
                </li>
                <li>
                  Reservoir response time (
                  <span className="italic text-[#fbbf24]">
                    τ<sub>j</sub>
                  </span>
                  )
                </li>
                <li>Dynamic production response to injection</li>
              </ul>
            </div>
          </div>

          {/* Right Column - Diagram */}
          <div className="w-full lg:w-2/5 flex flex-col items-center justify-center animate-slide-up delay-300">
            <div className="w-full max-w-sm mb-6 rounded-xl border border-purple-400/30 backdrop-blur-md px-5 py-4 shadow-[0_0_20px_rgba(168,85,247,0.15)] bg-[#E9B54D7C]">
              <p className="text-lg md:text-xl text-white leading-relaxed text-center font-medium">
                CRM transforms production data into reservoir connectivity
                insight.
              </p>
            </div>
            <div className="relative w-full max-w-sm aspect-square flex flex-col items-center justify-center">
              {/* Top Injectors */}
              <div className="flex justify-between w-full px-8 mb-2">
                <div className="text-center flex flex-col items-center">
                  <span className="text-sm font-medium text-[#2dd4bf] drop-shadow-md">
                    Injector I1
                  </span>
                  {/* Arrow pointing top-left to bottom-right (↘) — same style as Producer arrows */}

                  <div className="w-px h-8 bg-white/60 mx-auto mt-1 transform -rotate-45 origin-top relative">
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-2 border-b-2 border-l-2 border-white/60 transform -rotate-45"></div>
                  </div>
                </div>
                <div className="text-center flex flex-col items-center">
                  <span className="text-sm font-medium text-[#2dd4bf] drop-shadow-md">
                    Injector I2
                  </span>
                  {/* Arrow pointing top-right to bottom-left (↙) — same style as Producer arrows */}
                  <div className="w-px h-8 bg-white/60 mx-auto mt-1 transform rotate-45 origin-top relative">
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-2 border-b-2 border-r-2 border-white/60 transform rotate-45"></div>
                  </div>
                </div>
              </div>

              {/* Reservoir Box */}
              <div className="w-full h-32 glass flex flex-col items-center justify-start pt-3 relative z-10 hover:shadow-[0_0_30px_rgba(168,85,247,0.4)] hover:scale-105 transition-all duration-500 cursor-pointer">
                <span className="font-bold text-sm text-white tracking-widest uppercase">
                  Reservoir
                </span>

                {/* Internal Arrows */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col gap-3">
                  <div className="w-12 h-0.5 bg-[#fbbf24] relative ml-4 shadow-[0_0_5px_rgba(251,191,36,0.8)]">
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 border-t-2 border-r-2 border-[#fbbf24] transform rotate-45"></div>
                  </div>
                  <div className="w-12 h-0.5 bg-[#fbbf24] relative mr-4 shadow-[0_0_5px_rgba(251,191,36,0.8)]">
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 border-t-2 border-r-2 border-[#fbbf24] transform rotate-45"></div>
                  </div>
                </div>
              </div>

              {/* Bottom Producers */}
              <div className="flex justify-between w-full px-12 mt-2">
                <div className="text-center flex flex-col items-center">
                  <div className="w-px h-8 bg-white/60 mx-auto mb-1 transform rotate-45 origin-top relative">
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-2 border-b-2 border-r-2 border-white/60 transform rotate-45"></div>
                  </div>
                  <span className="text-sm font-medium drop-shadow-md text-[#D9B3FF]">
                    Producer P1
                  </span>
                </div>
                <div className="text-center flex flex-col items-center">
                  <div className="w-px h-8 bg-white/60 mx-auto mb-1 transform -rotate-45 origin-top relative">
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-2 border-b-2 border-l-2 border-white/60 transform -rotate-45"></div>
                  </div>
                  <span className="text-sm font-medium drop-shadow-md text-[#D9B3FF]">
                    Producer P2
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>);

}