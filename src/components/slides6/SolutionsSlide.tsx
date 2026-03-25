import React from 'react';
import { ArrowDownIcon } from 'lucide-react';
export function SolutionsSlide() {
  return (
    <section className="slide slide-bg-hub">
      <div className="slide-content container max-w-[1200px] h-full flex flex-col justify-center">
        {/* Header */}
        <div className="mb-8 animate-slide-up">
          <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-medium text-white leading-tight max-w-4xl drop-shadow-md">
            Why CRM is Used in Modern Reservoir Management
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 flex-1 min-h-0">
          {/* Left Column - Bullets */}
          <div className="w-full lg:w-3/5 animate-slide-up delay-100">
            <div className="glass rounded-xl p-6 flex flex-col gap-5 hover:bg-white/10 transition-colors duration-300">
              <div className="flex items-start gap-3">
                <span className="text-[#2dd4bf] text-2xl mt-1 drop-shadow-[0_0_5px_rgba(45,212,191,0.8)]">
                  •
                </span>
                <p className="font-body text-xl md:text-2xl text-white leading-relaxed font-medium drop-shadow-sm">
                  CRM provides fast reservoir insight using only production and
                  injection data.
                </p>
              </div>

              <ul className="space-y-4 pl-8">
                {[
                'Fast calibration (minutes instead of weeks)',
                'Minimal data requirements',
                'Field-scale applicability for large assets',
                'Supports real-time reservoir surveillance',
                'Enables rapid injection optimization',
                'Applications: waterflood optimization, connectivity analysis, forecasting'].
                map((item, i) =>
                <li key={i} className="flex items-start gap-3 group">
                    <span className="text-purple-400 text-xl mt-1 group-hover:text-purple-300 transition-colors">
                      •
                    </span>
                    <span className="font-body text-lg md:text-xl text-white/80 leading-relaxed group-hover:text-white transition-colors">
                      {item}
                    </span>
                  </li>
                )}
              </ul>
            </div>
          </div>

          {/* Right Column - Flow Diagram */}
          <div className="w-full lg:w-2/5 flex flex-col items-center justify-center animate-slide-up delay-300">
            <div className="flex flex-col items-center gap-4 w-full max-w-xs">
              {/* Box 1 */}
              <div className="glass py-4 px-6 text-center w-full hover:bg-white/20 hover:scale-105 hover:shadow-[0_0_25px_rgba(168,85,247,0.4)] transition-all duration-300 cursor-pointer bg-[#5A206253]">
                <p className="text-white font-medium text-sm md:text-base leading-relaxed tracking-wide">
                  Production Data
                  <br />
                  Injection Data
                  <br />
                  Pressure Data
                </p>
              </div>

              <ArrowDownIcon
                className="w-6 h-6 text-white/60 drop-shadow-[0_0_5px_rgba(255,255,255,0.5)]"
                strokeWidth={2} />
              

              {/* Box 2 */}
              <div className="glass py-3 px-6 text-center w-full hover:bg-white/20 hover:scale-105 hover:shadow-[0_0_25px_rgba(168,85,247,0.4)] transition-all duration-300 cursor-pointer bg-[#5A206253]">
                <p className="text-white font-medium text-sm md:text-base tracking-wide">
                  CRM Calibration
                </p>
              </div>

              <ArrowDownIcon
                className="w-6 h-6 text-white/60 drop-shadow-[0_0_5px_rgba(255,255,255,0.5)]"
                strokeWidth={2} />
              

              {/* Box 3 */}
              <div className="glass py-3 px-6 text-center w-full hover:bg-white/20 hover:scale-105 hover:shadow-[0_0_25px_rgba(168,85,247,0.4)] transition-all duration-300 cursor-pointer bg-[#5A206253]">
                <p className="text-[#2dd4bf] font-medium text-sm md:text-base tracking-wide drop-shadow-sm">
                  Connectivity + Time Constants
                </p>
              </div>

              <ArrowDownIcon
                className="w-6 h-6 text-white/60 drop-shadow-[0_0_5px_rgba(255,255,255,0.5)]"
                strokeWidth={2} />
              

              {/* Box 4 */}
              <div className="glass py-3 px-6 text-center w-full hover:bg-white/20 hover:scale-105 hover:shadow-[0_0_25px_rgba(168,85,247,0.4)] transition-all duration-300 cursor-pointer bg-[#5A206253]">
                <p className="text-[#fbbf24] font-medium text-sm md:text-base tracking-wide drop-shadow-sm">
                  Production Forecast
                </p>
              </div>

              <ArrowDownIcon
                className="w-6 h-6 text-white/30"
                strokeWidth={2} />
              
            </div>
          </div>
        </div>
      </div>
    </section>);

}