import React from 'react';
import { AfedLogo } from '../AfedLogo';
import { BarChart2Icon, MoreHorizontalIcon, LockIcon } from 'lucide-react';
interface RiskSlideProps {
  isActive: boolean;
}
export function RiskSlide({ isActive }: RiskSlideProps) {
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
            'radial-gradient(circle, rgba(239,68,68,0.3) 0%, transparent 70%)',
            top: '20%',
            right: '-5%',
            animationDelay: '1s'
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
          className={`w-full md:w-1/2 flex flex-col gap-6 ${isActive ? 'animate-fade-in-left delay-200' : 'opacity-0'}`}>
          
          <h2
            className="font-inter font-extrabold text-white leading-tight"
            style={{
              fontSize: 'var(--title-size)'
            }}>
            
            Predictive Risk:
            <br />
            <span className="text-purple-300">
              Stop Crises Before They Escalate
            </span>
          </h2>

          <ul className="flex flex-col gap-5 mt-2">
            <li className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2.5 shrink-0" />
              <p
                className="font-inter text-white/70 leading-relaxed"
                style={{
                  fontSize: 'var(--body-size)'
                }}>
                
                <strong className="text-white font-bold">
                  Daily Assessment:
                </strong>{' '}
                Every project receives a dynamic risk score (0-100) updated
                daily.
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
                  Multi-Factor Analysis:
                </strong>{' '}
                Evaluates schedule slippage, budget burn rate, resource
                conflicts, and scope changes simultaneously.
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
                  Proactive Escalation:
                </strong>{' '}
                Projects exceeding a score of 70 automatically trigger TM and PM
                notifications.
              </p>
            </li>
          </ul>
        </div>

        {/* Right Mockup */}
        <div
          className={`w-full md:w-1/2 max-w-[500px] glass-strong rounded-2xl p-5 md:p-6 flex flex-col shadow-2xl shadow-purple-900/40 ${isActive ? 'animate-fade-in-scale delay-400' : 'opacity-0'}`}>
          
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <div className="bg-emerald-500/20 p-1.5 rounded-md">
                <BarChart2Icon className="w-4 h-4 text-emerald-400" />
              </div>
              <span className="font-inter font-bold text-white text-sm">
                Risk Dashboard
              </span>
            </div>
            <div className="bg-white/10 p-1 rounded-md">
              <MoreHorizontalIcon className="w-4 h-4 text-white/60" />
            </div>
          </div>

          {/* Gauge Area */}
          <div className="relative w-full aspect-[2/1] flex items-end justify-center mb-8">
            <svg
              viewBox="0 0 200 100"
              className="w-[80%] h-full overflow-visible">
              
              <defs>
                <linearGradient
                  id="gauge-gradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="0%">
                  
                  <stop offset="0%" stopColor="#22c55e" />
                  <stop offset="50%" stopColor="#eab308" />
                  <stop offset="100%" stopColor="#ef4444" />
                </linearGradient>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="4" result="coloredBlur" />
                  <feMerge>
                    <feMergeNode in="coloredBlur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>
              {/* Background Track */}
              <path
                d="M 20 90 A 80 80 0 0 1 180 90"
                fill="none"
                stroke="rgba(255,255,255,0.1)"
                strokeWidth="16"
                strokeLinecap="round" />
              
              {/* Colored Arc */}
              <path
                d="M 20 90 A 80 80 0 0 1 180 90"
                fill="none"
                stroke="url(#gauge-gradient)"
                strokeWidth="16"
                strokeLinecap="round"
                filter="url(#glow)" />
              
              {/* Needle (Pointing to 72%) */}
              <g transform="rotate(129.6 100 90)">
                <line
                  x1="100"
                  y1="90"
                  x2="35"
                  y2="90"
                  stroke="#1e293b"
                  strokeWidth="6"
                  strokeLinecap="round" />
                
                <circle cx="100" cy="90" r="8" fill="#1e293b" />
              </g>
              {/* Labels */}
              <text
                x="180"
                y="70"
                fill="white"
                fontSize="12"
                fontWeight="bold"
                textAnchor="middle">
                
                72
              </text>
            </svg>

            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-6 flex flex-col items-center">
              <span className="text-4xl font-bold text-orange-500 drop-shadow-lg">
                72
              </span>
              <span className="text-[9px] font-bold text-white/50 tracking-wider mt-1">
                HIGH RISK SCORE
              </span>
            </div>
          </div>

          {/* Decomposition Section */}
          <div className="glass bg-white/5 rounded-xl p-4 mt-4">
            <div className="flex items-center justify-between mb-4">
              <span className="font-inter font-semibold text-white text-xs">
                Risk Factor Decomposition
              </span>
              <div className="flex items-center gap-1.5">
                <LockIcon className="w-3 h-3 text-emerald-400" />
                <div className="flex gap-0.5">
                  <div className="w-6 h-1.5 bg-emerald-400 rounded-full" />
                  <div className="w-2 h-1.5 bg-white/20 rounded-full" />
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              {/* Bar 1 */}
              <div>
                <div className="flex justify-between text-[10px] mb-1">
                  <span className="text-white/80">Schedule Slippage</span>
                  <div className="text-right">
                    <span className="text-white font-bold block">45%</span>
                    <span className="text-white/40 text-[8px]">Impact</span>
                  </div>
                </div>
                <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-red-500 rounded-full shadow-[0_0_8px_rgba(239,68,68,0.6)]"
                    style={{
                      width: '45%'
                    }} />
                  
                </div>
              </div>

              {/* Bar 2 */}
              <div>
                <div className="flex justify-between text-[10px] mb-1">
                  <span className="text-white/80">Budget Burn</span>
                  <div className="text-right">
                    <span className="text-white font-bold block">30%</span>
                    <span className="text-white/40 text-[8px]">Impact</span>
                  </div>
                </div>
                <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-red-500 rounded-full shadow-[0_0_8px_rgba(239,68,68,0.6)]"
                    style={{
                      width: '30%'
                    }} />
                  
                </div>
              </div>

              {/* Bar 3 */}
              <div>
                <div className="flex justify-between text-[10px] mb-1">
                  <span className="text-white/80">Resource Conflicts</span>
                  <div className="text-right">
                    <span className="text-white font-bold block">15%</span>
                    <span className="text-white/40 text-[8px]">Impact</span>
                  </div>
                </div>
                <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden relative">
                  <div
                    className="h-full bg-gradient-to-r from-amber-500 to-emerald-400 rounded-full"
                    style={{
                      width: '15%'
                    }} />
                  
                  <div
                    className="absolute top-1/2 -translate-y-1/2 w-2 h-2 bg-emerald-400 rounded-full shadow-[0_0_4px_rgba(52,211,153,0.8)]"
                    style={{
                      left: '14%'
                    }} />
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-400/30 to-transparent" />
    </section>);

}