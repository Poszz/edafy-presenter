import React from 'react';
import { AfedLogo } from '../AfedLogo';
import { TrendingUpIcon, AlertTriangleIcon } from 'lucide-react';
interface ForecastingSlideProps {
  isActive: boolean;
}
export function ForecastingSlide({ isActive }: ForecastingSlideProps) {
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
          className="absolute w-[40vw] h-[40vw] rounded-full opacity-10 animate-orb"
          style={{
            background:
            'radial-gradient(circle, rgba(16,185,129,0.2) 0%, transparent 70%)',
            top: '40%',
            left: '-10%',
            animationDelay: '2s'
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
          className={`w-full md:w-[45%] flex flex-col gap-6 ${isActive ? 'animate-fade-in-left delay-200' : 'opacity-0'}`}>
          
          <h2
            className="font-inter font-extrabold text-white leading-tight"
            style={{
              fontSize: 'var(--title-size)'
            }}>
            
            Forecasting &amp; Optimization:
            <br />
            <span className="text-purple-300">Finding the Optimal Path</span>
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
                  Budget Forecasting:
                </strong>{' '}
                ML models trained on historical E&amp;P data predict
                monthly/quarterly cost trajectories. Targets +5% accuracy once a
                project passes 30% completion.
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
                  Schedule Optimization:
                </strong>{' '}
                Executes critical path analysis, automatically identifies
                bottlenecks, and detects parallel work opportunities to compress
                timelines.
              </p>
            </li>
          </ul>
        </div>

        {/* Right Mockup */}
        <div
          className={`w-full md:w-[55%] max-w-[600px] glass-strong rounded-2xl p-4 md:p-5 flex flex-col gap-4 shadow-2xl shadow-purple-900/40 ${isActive ? 'animate-fade-in-scale delay-400' : 'opacity-0'}`}>
          
          {/* Top Chart: Cost Prediction */}
          <div className="glass bg-white/5 rounded-xl p-4">
            <div className="flex items-center justify-between mb-4">
              <span className="font-inter font-bold text-white text-xs">
                Cost Prediction &amp; Accuracy
              </span>
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1.5">
                  <div className="w-3 h-0.5 bg-slate-400" />
                  <span className="text-[9px] text-white/60">Actual Spend</span>
                </div>
                <div className="bg-emerald-500/20 text-emerald-400 text-[9px] font-bold px-2 py-0.5 rounded flex items-center gap-1">
                  + Positive <TrendingUpIcon className="w-2.5 h-2.5" />
                </div>
              </div>
            </div>

            <div className="relative w-full h-[140px]">
              <svg
                viewBox="0 0 400 140"
                className="w-full h-full overflow-visible">
                
                {/* Grid lines */}
                {[0, 25, 50, 75, 100, 125].map((y, i) =>
                <g key={i}>
                    <line
                    x1="40"
                    y1={y}
                    x2="400"
                    y2={y}
                    stroke="rgba(255,255,255,0.05)"
                    strokeWidth="1" />
                  
                    <text
                    x="35"
                    y={y + 3}
                    fill="rgba(255,255,255,0.4)"
                    fontSize="8"
                    textAnchor="end">
                    
                      ${(3.0 - i * 0.5).toFixed(2)}M
                    </text>
                  </g>
                )}

                {/* X Axis Labels */}
                {[
                'Jan',
                'Feb',
                'Mar',
                'Apr',
                'May',
                'Jun',
                'Jul',
                'Aug',
                'Oct',
                'Nov',
                'Dec'].
                map((m, i) =>
                <text
                  key={i}
                  x={50 + i * 35}
                  y="138"
                  fill="rgba(255,255,255,0.4)"
                  fontSize="8"
                  textAnchor="middle">
                  
                    {m}
                  </text>
                )}

                {/* Confidence Interval Shading */}
                <path
                  d="M 225 65 L 295 45 L 400 20 L 400 60 L 295 75 L 225 65 Z"
                  fill="rgba(16,185,129,0.15)" />
                

                {/* Actual Spend Line */}
                <path
                  d="M 50 110 L 85 95 L 120 105 L 155 65 L 190 60 L 225 45"
                  fill="none"
                  stroke="#94a3b8"
                  strokeWidth="2" />
                

                {/* Predicted Cost Line (Dashed) */}
                <path
                  d="M 225 45 L 295 30 L 400 0"
                  fill="none"
                  stroke="#10b981"
                  strokeWidth="2"
                  strokeDasharray="4 4" />
                

                {/* Data Points */}
                <circle cx="120" cy="105" r="3" fill="#94a3b8" />
                <circle cx="225" cy="45" r="3" fill="#10b981" />
                <circle cx="295" cy="30" r="3" fill="#10b981" />

                {/* Labels */}
                <rect
                  x="95"
                  y="70"
                  width="50"
                  height="14"
                  rx="2"
                  fill="#334155" />
                
                <text
                  x="120"
                  y="79"
                  fill="white"
                  fontSize="7"
                  textAnchor="middle">
                  
                  Actual Spend
                </text>

                <rect
                  x="260"
                  y="10"
                  width="55"
                  height="14"
                  rx="2"
                  fill="white" />
                
                <circle cx="268" cy="17" r="2" fill="#10b981" />
                <text
                  x="274"
                  y="19"
                  fill="#0f172a"
                  fontSize="7"
                  fontWeight="bold">
                  
                  Predicted Cost ↗
                </text>

                <rect
                  x="280"
                  y="85"
                  width="65"
                  height="14"
                  rx="2"
                  fill="white" />
                
                <text
                  x="312"
                  y="94"
                  fill="#0f172a"
                  fontSize="7"
                  fontWeight="bold">
                  
                  Confidence Interval
                </text>
              </svg>
            </div>
          </div>

          {/* Bottom Chart: Critical Path */}
          <div className="glass bg-white/5 rounded-xl p-4">
            <div className="flex items-center justify-between mb-4">
              <span className="font-inter font-bold text-white text-xs">
                Critical Path &amp; Schedule Compression
              </span>
              <div className="bg-emerald-500/20 text-emerald-400 text-[9px] font-bold px-2 py-0.5 rounded flex items-center gap-1">
                Positive tren. <TrendingUpIcon className="w-2.5 h-2.5" />
              </div>
            </div>

            <div className="relative w-full h-[120px]">
              <svg
                viewBox="0 0 400 120"
                className="w-full h-full overflow-visible">
                
                {/* Grid Background */}
                <rect
                  x="260"
                  y="0"
                  width="60"
                  height="120"
                  fill="rgba(16,185,129,0.1)" />
                

                {/* Headers */}
                <text
                  x="10"
                  y="10"
                  fill="rgba(255,255,255,0.6)"
                  fontSize="7"
                  fontWeight="bold">
                  
                  Phase
                </text>
                <text x="10" y="20" fill="rgba(255,255,255,0.4)" fontSize="6">
                  Jun 16 Sar 17 Sep 18 Sep 19
                </text>

                <text
                  x="160"
                  y="10"
                  fill="rgba(255,255,255,0.6)"
                  fontSize="7"
                  fontWeight="bold">
                  
                  Phase
                </text>
                <text x="160" y="20" fill="rgba(255,255,255,0.4)" fontSize="6">
                  Mer 11 Tue 25 Wed 10
                </text>

                <text
                  x="265"
                  y="10"
                  fill="#10b981"
                  fontSize="7"
                  fontWeight="bold">
                  
                  Phase
                </text>
                <text x="265" y="20" fill="#10b981" fontSize="6">
                  Jan 3 Ser 14 Ssp 19
                </text>

                <text x="340" y="20" fill="rgba(255,255,255,0.4)" fontSize="6">
                  Junt 3 Oct 20 Dec 18
                </text>

                {/* Gantt Bars */}
                <rect
                  x="10"
                  y="30"
                  width="40"
                  height="8"
                  rx="2"
                  fill="#94a3b8" />
                
                <rect
                  x="30"
                  y="45"
                  width="50"
                  height="8"
                  rx="2"
                  fill="#10b981" />
                
                <rect
                  x="60"
                  y="60"
                  width="60"
                  height="8"
                  rx="2"
                  fill="#334155" />
                
                <rect
                  x="90"
                  y="75"
                  width="40"
                  height="8"
                  rx="2"
                  fill="#10b981" />
                

                {/* Bottleneck Bar */}
                <rect
                  x="180"
                  y="80"
                  width="120"
                  height="10"
                  rx="2"
                  fill="#0f172a"
                  stroke="#1e293b" />
                
                <text
                  x="240"
                  y="87"
                  fill="white"
                  fontSize="6"
                  textAnchor="middle">
                  
                  Identified Bottleneck
                </text>
                <path d="M 285 82 L 288 87 L 282 87 Z" fill="#ef4444" />

                {/* Optimized Paths */}
                <path
                  d="M 200 90 L 200 100 L 210 100"
                  fill="none"
                  stroke="#10b981"
                  strokeWidth="1.5" />
                
                <polygon points="210,98 214,100 210,102" fill="#10b981" />
                <rect
                  x="215"
                  y="96"
                  width="80"
                  height="8"
                  rx="2"
                  fill="#10b981" />
                
                <text
                  x="255"
                  y="102"
                  fill="white"
                  fontSize="5"
                  textAnchor="middle">
                  
                  Optimized Parallel Path 1
                </text>

                <path
                  d="M 200 100 L 200 110 L 220 110"
                  fill="none"
                  stroke="#10b981"
                  strokeWidth="1.5" />
                
                <polygon points="220,108 224,110 220,112" fill="#10b981" />
                <rect
                  x="225"
                  y="106"
                  width="80"
                  height="8"
                  rx="2"
                  fill="#10b981" />
                
                <text
                  x="265"
                  y="112"
                  fill="white"
                  fontSize="5"
                  textAnchor="middle">
                  
                  Optimized Parallel Path 2
                </text>

                <rect
                  x="330"
                  y="106"
                  width="30"
                  height="8"
                  rx="2"
                  fill="#334155" />
                
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-400/30 to-transparent" />
    </section>);

}