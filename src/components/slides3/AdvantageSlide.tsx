import React from 'react';
import { AfedLogo } from '../AfedLogo';
interface AdvantageSlideProps {
  isActive: boolean;
}
export function AdvantageSlide({ isActive }: AdvantageSlideProps) {
  const rows = [
  {
    dimension: 'Architecture',
    statusQuo: 'Generic PM tools adapted for energy',
    edafy: 'Purpose-built exclusively for upstream O&G'
  },
  {
    dimension: 'Intelligence',
    statusQuo: 'Retrospective reporting, bolted-on analytics',
    edafy: 'AI-native; predictive intelligence embedded in all modules'
  },
  {
    dimension: 'Data Flow',
    statusQuo: 'Siloed, manual data entry',
    edafy: 'Seamless ecosystem integration with Data, Asset and Insights'
  },
  {
    dimension: 'Compliance',
    statusQuo: 'Rigid, manual tracking',
    edafy: 'Configurable, automated tracking including Petronas TAG/TA'
  }];

  return (
    <section
      className="slide relative overflow-hidden"
      style={{
        backgroundImage:
        'url(https://cdn.magicpatterns.com/uploads/rDHXLm66BWR6q7Pi1g3oF3/7.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
      
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-purple-950/40 pointer-events-none" />

      {/* Background orb */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute w-[40vw] h-[40vw] rounded-full opacity-10 animate-orb"
          style={{
            background:
            'radial-gradient(circle, rgba(139,92,246,0.3) 0%, transparent 70%)',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            animationDelay: '1s'
          }} />
        
      </div>

      {/* Top-left logo */}
      <div
        className={`absolute top-6 left-6 md:top-8 md:left-8 z-20 ${isActive ? 'animate-fade-in-up' : 'opacity-0'}`}>
        
        <AfedLogo size="sm" />
      </div>

      <div
        className="slide-content relative z-10 flex flex-col items-center justify-center gap-8 md:gap-12"
        style={{
          padding: 'var(--slide-padding)'
        }}>
        
        {/* Title */}
        <h2
          className={`font-inter font-extrabold text-white text-center ${isActive ? 'animate-fade-in-up delay-200' : 'opacity-0'}`}
          style={{
            fontSize: 'var(--title-size)'
          }}>
          
          The EDAFY Advantage
        </h2>

        {/* Comparison Table */}
        <div
          className={`w-full max-w-5xl glass-strong rounded-2xl overflow-hidden flex flex-col shadow-2xl shadow-purple-900/40 ${isActive ? 'animate-fade-in-scale delay-400' : 'opacity-0'}`}>
          
          {/* Table Header */}
          <div className="grid grid-cols-1 md:grid-cols-[1fr_1.5fr_1.5fr] bg-white/10 border-b border-white/20">
            <div className="hidden md:block p-4 md:p-6 font-inter font-bold text-white text-center md:text-left text-lg">
              Dimension
            </div>
            <div className="p-4 md:p-6 font-inter font-bold text-white/60 text-center bg-black/20 text-lg">
              Status Quo
            </div>
            <div className="p-4 md:p-6 font-inter font-bold text-purple-300 text-center text-lg">
              EDAFY Plan
            </div>
          </div>

          {/* Table Rows */}
          <div className="flex flex-col">
            {rows.map((row, i) =>
            <div
              key={i}
              className="grid grid-cols-1 md:grid-cols-[1fr_1.5fr_1.5fr] border-b border-white/10 last:border-0">
              
                {/* Dimension (Mobile shows as a small header, Desktop as first column) */}
                <div className="p-3 md:p-6 font-inter font-bold text-white flex items-center justify-center md:justify-start bg-white/5 md:bg-transparent text-sm md:text-base">
                  {row.dimension}
                </div>

                {/* Status Quo */}
                <div className="p-4 md:p-6 font-inter text-white/60 text-center flex items-center justify-center bg-black/20 text-sm md:text-base leading-relaxed">
                  {row.statusQuo}
                </div>

                {/* EDAFY Plan */}
                <div className="p-4 md:p-6 font-inter text-emerald-300 text-center flex items-center justify-center font-medium text-sm md:text-base leading-relaxed bg-emerald-900/10">
                  {row.edafy}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-400/30 to-transparent" />
    </section>);

}