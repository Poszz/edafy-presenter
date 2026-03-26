import React from 'react';
import { AfedLogo } from '../AfedLogo';
interface ConversationalSlideProps {
  isActive: boolean;
}
export function ConversationalSlide({ isActive }: ConversationalSlideProps) {
  return (
    <section
      className="slide relative overflow-hidden"
      style={{
        backgroundImage:
        'url(/bg-slide-plan.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
      
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-purple-950/40 pointer-events-none" />

      {/* Background orb */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute w-[35vw] h-[35vw] rounded-full opacity-10 animate-orb"
          style={{
            background:
            'radial-gradient(circle, rgba(139,92,246,0.3) 0%, transparent 70%)',
            top: '15%',
            right: '10%',
            animationDelay: '0.5s'
          }} />
        
      </div>

      {/* Top-left logo */}
      <div
        className={`absolute top-6 left-6 md:top-8 md:left-8 z-20 ${isActive ? 'animate-fade-in-up' : 'opacity-0'}`}>
        
        <AfedLogo size="sm" />
      </div>

      <div
        className="slide-content relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12"
        style={{
          padding: 'var(--slide-padding)'
        }}>
        
        {/* Left Content */}
        <div
          className={`${`${`${`${`${`w-full md:w-1/2 flex flex-col gap-6 ${isActive ? 'animate-fade-in-left delay-200' : 'opacity-0'}`} ml-[100px] mr-[100px]`} ml-[200px] mr-[0px]`} ml-[170px]`} ml-[180px]`} ml-[0px] mr-[0px]`}>
          
          <h2
            className="font-inter font-extrabold text-white leading-tight ml-[0px] mr-[0px]"
            style={{
              fontSize: 'var(--title-size)'
            }}>
            
            Conversational Intelligence &amp;
            <br />
            <span className="text-purple-300">Auto-Reporting</span>
          </h2>

          <ul className="flex flex-col gap-6 mt-2">
            <li className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2.5 shrink-0" />
              <p
                className="font-inter text-white/70 leading-relaxed"
                style={{
                  fontSize: 'var(--body-size)'
                }}>
                
                <strong className="text-white font-bold">
                  Natural Language Search:
                </strong>{' '}
                Query the database in plain English. Responses return in under 3
                seconds.
              </p>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2.5 shrink-0" />
              <p
                className="font-inter text-white/70 leading-relaxed"
                style={{
                  fontSize: 'var(--body-size)'
                }}>
                
                <strong className="text-white font-bold">
                  Instant Reporting:
                </strong>{' '}
                Weekly status reports, decision gate packs, and risk registers
                generated automatically on configurable schedules.
              </p>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2.5 shrink-0" />
              <p
                className="font-inter text-white/70 leading-relaxed"
                style={{
                  fontSize: 'var(--body-size)'
                }}>
                
                <strong className="text-white font-bold">
                  Actionable Interventions:
                </strong>{' '}
                AI provides specific implementation steps alongside impact
                analysis and confidence levels.
              </p>
            </li>
          </ul>
        </div>

        {/* Right Mockup - Phone UI */}
        <div
          className={`w-full md:w-[55%] flex justify-center ${isActive ? 'animate-fade-in-scale delay-400' : 'opacity-0'}`}>
          
          <div className="w-[320px] h-[520px] rounded-[2.5rem] border-[6px] border-white/10 glass-strong p-4 flex flex-col relative overflow-hidden shadow-2xl shadow-purple-900/50 bg-white/5">
            {/* Phone Notch */}
            <div className="w-24 h-5 bg-white/10 rounded-b-2xl absolute top-0 left-1/2 -translate-x-1/2 backdrop-blur-md" />

            {/* Chat Area */}
            <div className="flex-1 mt-8 flex flex-col gap-5 overflow-hidden">
              {/* User Query Bubble */}
              <div className="self-end bg-white/20 backdrop-blur-md text-white p-3.5 rounded-2xl rounded-tr-sm text-xs max-w-[85%] shadow-lg">
                Which FDP studies exceeded budget in 2025?
              </div>

              {/* Table Response */}
              <div className="self-start bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4 w-full shadow-lg relative overflow-hidden">
                {/* Top accent line */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-400 to-teal-400" />

                <table className="w-full text-[11px] text-white">
                  <thead>
                    <tr className="border-b border-white/20 text-left text-white/70">
                      <th className="pb-2 font-semibold">Study Name</th>
                      <th className="pb-2 text-right font-semibold">
                        Budget Variance
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-white/10">
                      <td className="py-2.5">Study A (Block B)</td>
                      <td className="py-2.5 text-right text-emerald-400 font-bold">
                        +$1.2M
                      </td>
                    </tr>
                    <tr>
                      <td className="py-2.5">Study C (North Field)</td>
                      <td className="py-2.5 text-right text-emerald-400 font-bold">
                        +$0.5M
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Action Card */}
              <div className="self-start bg-emerald-500/10 border border-emerald-500/30 rounded-xl p-4 w-full shadow-lg relative overflow-hidden">
                <p className="text-[11px] text-emerald-50 mb-3 leading-relaxed">
                  Reallocate 2 geoscientists from Block A to accelerate Field B
                  appraisal. Reduces delay risk by 40%.
                </p>
                <div className="flex justify-end">
                  <button className="bg-emerald-500 text-white text-[10px] font-bold px-4 py-2 rounded-lg hover:bg-emerald-400 transition-colors shadow-lg shadow-emerald-500/20">
                    Execute
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-400/30 to-transparent" />
    </section>);

}