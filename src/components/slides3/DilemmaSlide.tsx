import React from 'react';
import { AfedLogo } from '../AfedLogo';
interface DilemmaSlideProps {
  isActive: boolean;
}
export function DilemmaSlide({ isActive }: DilemmaSlideProps) {
  return (
    <section
      className="slide relative overflow-hidden"
      style={{
        backgroundImage:
        'url(/bg-slide-plan.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
      
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-purple-950/40 pointer-events-none" />
      {/* Background orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute w-[35vw] h-[35vw] rounded-full opacity-10 animate-orb"
          style={{
            background:
            'radial-gradient(circle, rgba(239,68,68,0.2) 0%, transparent 70%)',
            top: '20%',
            left: '-5%',
            animationDelay: '2s'
          }} />
        
      </div>

      <div
        className="slide-content relative z-10"
        style={{
          padding: 'var(--slide-padding)'
        }}>
        
        {/* Top-left logo */}
        <div
          className={`absolute top-6 left-6 md:top-8 md:left-8 z-20 ${isActive ? 'animate-fade-in-up' : 'opacity-0'}`}>
          
          <AfedLogo size="sm" />
        </div>

        {/* Header — centered */}
        <div
          className={`mb-2 text-center ${isActive ? 'animate-fade-in-left' : 'opacity-0'}`}>
          
          <h2
            className="font-inter font-bold text-white"
            style={{
              fontSize: 'var(--title-size)'
            }}>
            
            The Upstream Dilemma:
          </h2>
          <p
            className="font-inter font-bold text-gold-400"
            style={{
              fontSize: 'var(--h2-size)'
            }}>
            
            Data Rich, Insight Poor
          </p>
        </div>

        {/* Broken Workflow Custom Section */}
        <div
          className={`flex-1 flex flex-col items-center justify-center w-full ${isActive ? 'animate-fade-in-up delay-300' : 'opacity-0'}`}>
          
          <h3
            className="font-inter font-bold text-white/80 mb-2 md:mb-3"
            style={{
              fontSize: 'var(--h3-size)'
            }}>
            
            Broken Workflow
          </h3>

          <div className="relative w-full flex-1 flex flex-col md:flex-row items-stretch justify-between gap-3 md:gap-2">
            {/* Panel 1: Execution Blind Spots */}
            <div
              className={`glass-card flex-1 flex flex-col p-4 md:p-5 relative z-10 ${isActive ? 'animate-fade-in-up delay-400' : 'opacity-0'}`}>
              
              {/* Window Chrome */}
              <div className="flex gap-1.5 mb-3">
                <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]"></div>
              </div>

              {/* Title */}
              <h4 className="font-inter font-bold text-white tracking-wide text-center mb-4 text-sm md:text-base">
                EXECUTION BLIND SPOTS
              </h4>

              {/* Illustration Area */}
              <div className="flex-1 flex items-center justify-center mb-3">
                <svg
                  viewBox="0 0 200 100"
                  className="w-full h-full max-h-[28vh]"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  
                  {/* Spreadsheet */}
                  <g transform="translate(20, 20)">
                    <rect
                      x="0"
                      y="0"
                      width="60"
                      height="60"
                      rx="4"
                      stroke="rgba(255,255,255,0.6)"
                      strokeWidth="2"
                      fill="rgba(255,255,255,0.05)" />
                    
                    <line
                      x1="0"
                      y1="20"
                      x2="60"
                      y2="20"
                      stroke="rgba(255,255,255,0.6)"
                      strokeWidth="2" />
                    
                    <line
                      x1="0"
                      y1="40"
                      x2="60"
                      y2="40"
                      stroke="rgba(255,255,255,0.6)"
                      strokeWidth="2" />
                    
                    <line
                      x1="20"
                      y1="20"
                      x2="20"
                      y2="60"
                      stroke="rgba(255,255,255,0.6)"
                      strokeWidth="2" />
                    
                    <line
                      x1="40"
                      y1="20"
                      x2="40"
                      y2="60"
                      stroke="rgba(255,255,255,0.6)"
                      strokeWidth="2" />
                    
                    {/* Highlight cells */}
                    <rect
                      x="20"
                      y="20"
                      width="20"
                      height="20"
                      fill="rgba(167,139,250,0.4)" />
                    
                    <rect
                      x="40"
                      y="40"
                      width="20"
                      height="20"
                      fill="rgba(167,139,250,0.4)" />
                    
                  </g>

                  {/* Circular Dashed Arrows */}
                  <path
                    d="M 15 50 A 35 35 0 0 1 85 50"
                    stroke="rgba(251,191,36,0.8)"
                    strokeWidth="2"
                    strokeDasharray="4 4"
                    className="animate-dash" />
                  
                  <path
                    d="M 85 50 L 80 45 M 85 50 L 90 45"
                    stroke="rgba(251,191,36,0.8)"
                    strokeWidth="2" />
                  
                  <path
                    d="M 85 50 A 35 35 0 0 1 15 50"
                    stroke="rgba(251,191,36,0.8)"
                    strokeWidth="2"
                    strokeDasharray="4 4"
                    className="animate-dash" />
                  
                  <path
                    d="M 15 50 L 20 55 M 15 50 L 10 55"
                    stroke="rgba(251,191,36,0.8)"
                    strokeWidth="2" />
                  

                  {/* Kanban Board */}
                  <g transform="translate(110, 15)">
                    <rect
                      x="0"
                      y="0"
                      width="70"
                      height="70"
                      rx="4"
                      stroke="rgba(255,255,255,0.6)"
                      strokeWidth="2"
                      fill="rgba(255,255,255,0.05)" />
                    
                    <line
                      x1="23.3"
                      y1="0"
                      x2="23.3"
                      y2="70"
                      stroke="rgba(255,255,255,0.3)"
                      strokeWidth="1" />
                    
                    <line
                      x1="46.6"
                      y1="0"
                      x2="46.6"
                      y2="70"
                      stroke="rgba(255,255,255,0.3)"
                      strokeWidth="1" />
                    
                    {/* Column Headers */}
                    <rect
                      x="4"
                      y="4"
                      width="15.3"
                      height="6"
                      rx="2"
                      fill="rgba(255,255,255,0.2)" />
                    
                    <rect
                      x="27.3"
                      y="4"
                      width="15.3"
                      height="6"
                      rx="2"
                      fill="rgba(255,255,255,0.2)" />
                    
                    <rect
                      x="50.6"
                      y="4"
                      width="15.3"
                      height="6"
                      rx="2"
                      fill="rgba(255,255,255,0.2)" />
                    
                    {/* Cards */}
                    <rect
                      x="4"
                      y="14"
                      width="15.3"
                      height="12"
                      rx="2"
                      fill="rgba(167,139,250,0.6)" />
                    
                    <rect
                      x="4"
                      y="30"
                      width="15.3"
                      height="16"
                      rx="2"
                      fill="rgba(255,255,255,0.4)" />
                    
                    <rect
                      x="27.3"
                      y="14"
                      width="15.3"
                      height="18"
                      rx="2"
                      fill="rgba(255,255,255,0.4)" />
                    
                    <rect
                      x="50.6"
                      y="14"
                      width="15.3"
                      height="12"
                      rx="2"
                      fill="rgba(52,211,153,0.6)" />
                    
                    {/* Sticky Note */}
                    <rect
                      x="55"
                      y="45"
                      width="20"
                      height="20"
                      fill="rgba(251,191,36,0.8)"
                      transform="rotate(10 65 55)" />
                    
                  </g>
                </svg>
              </div>

              {/* Caption Pill */}
              <div className="glass py-2 px-3 text-center mt-auto">
                <p
                  className="font-inter text-white/70"
                  style={{
                    fontSize: 'var(--small-size)'
                  }}>
                  
                  Schedule slippages without early warning.
                </p>
              </div>
            </div>

            {/* Connector 1 */}
            <div
              className={`hidden md:flex flex-col items-center justify-center w-12 shrink-0 relative ${isActive ? 'animate-fade-in-scale delay-500' : 'opacity-0'}`}>
              
              <svg viewBox="0 0 48 48" className="w-full h-12" fill="none">
                <path
                  d="M 0 24 L 16 16 L 32 32 L 48 24"
                  stroke="rgba(255,255,255,0.4)"
                  strokeWidth="2"
                  strokeDasharray="4 4"
                  className="animate-dash" />
                
                <path
                  d="M 44 20 L 48 24 L 44 28"
                  stroke="rgba(255,255,255,0.4)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round" />
                
                {/* X Mark */}
                <g transform="translate(16, 16)">
                  <circle cx="8" cy="8" r="10" fill="rgba(248,113,113,0.2)" />
                  <path
                    d="M 4 4 L 12 12 M 12 4 L 4 12"
                    stroke="#f87171"
                    strokeWidth="2.5"
                    strokeLinecap="round" />
                  
                </g>
              </svg>
            </div>

            {/* Panel 2: Financial Disconnect */}
            <div
              className={`glass-card flex-1 flex flex-col p-4 md:p-5 relative z-10 ${isActive ? 'animate-fade-in-up delay-500' : 'opacity-0'}`}>
              
              <div className="flex gap-1.5 mb-3">
                <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]"></div>
              </div>

              <h4 className="font-inter font-bold text-white tracking-wide text-center mb-4 text-sm md:text-base">
                FINANCIAL DISCONNECT
              </h4>

              <div className="flex-1 flex items-center justify-center mb-3">
                <svg
                  viewBox="0 0 200 100"
                  className="w-full h-full max-h-[28vh]"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  
                  {/* Left Server */}
                  <g transform="translate(30, 15)">
                    <ellipse
                      cx="25"
                      cy="10"
                      rx="25"
                      ry="8"
                      stroke="rgba(255,255,255,0.6)"
                      strokeWidth="2"
                      fill="rgba(255,255,255,0.05)" />
                    
                    <path
                      d="M 0 10 L 0 30 A 25 8 0 0 0 50 30 L 50 10"
                      stroke="rgba(255,255,255,0.6)"
                      strokeWidth="2"
                      fill="rgba(255,255,255,0.05)" />
                    
                    <path
                      d="M 0 30 L 0 50 A 25 8 0 0 0 50 50 L 50 30"
                      stroke="rgba(255,255,255,0.6)"
                      strokeWidth="2"
                      fill="rgba(255,255,255,0.05)" />
                    
                    <path
                      d="M 0 50 L 0 70 A 25 8 0 0 0 50 70 L 50 50"
                      stroke="rgba(255,255,255,0.6)"
                      strokeWidth="2"
                      fill="rgba(255,255,255,0.05)" />
                    
                    {/* Server lights */}
                    <circle cx="10" cy="20" r="2" fill="rgba(52,211,153,0.8)" />
                    <circle cx="10" cy="40" r="2" fill="rgba(52,211,153,0.8)" />
                    <circle cx="10" cy="60" r="2" fill="rgba(52,211,153,0.8)" />
                    {/* Oval Ring */}
                    <ellipse
                      cx="25"
                      cy="40"
                      rx="35"
                      ry="12"
                      stroke="rgba(239,68,68,0.6)"
                      strokeWidth="2"
                      fill="none"
                      transform="rotate(-5 25 40)" />
                    
                    {/* Dollar Badges */}
                    <circle cx="45" cy="5" r="8" fill="#fbbf24" />
                    <text
                      x="45"
                      y="9"
                      fontSize="10"
                      fontWeight="bold"
                      fill="#000"
                      textAnchor="middle">
                      
                      $
                    </text>
                    <circle cx="45" cy="75" r="8" fill="#fbbf24" />
                    <text
                      x="45"
                      y="79"
                      fontSize="10"
                      fontWeight="bold"
                      fill="#000"
                      textAnchor="middle">
                      
                      $
                    </text>
                  </g>

                  {/* Vertical Dashed Line */}
                  <line
                    x1="100"
                    y1="10"
                    x2="100"
                    y2="90"
                    stroke="rgba(255,255,255,0.3)"
                    strokeWidth="2"
                    strokeDasharray="4 4" />
                  

                  {/* Right Server */}
                  <g transform="translate(120, 15)">
                    <ellipse
                      cx="25"
                      cy="10"
                      rx="25"
                      ry="8"
                      stroke="rgba(255,255,255,0.6)"
                      strokeWidth="2"
                      fill="rgba(255,255,255,0.05)" />
                    
                    <path
                      d="M 0 10 L 0 30 A 25 8 0 0 0 50 30 L 50 10"
                      stroke="rgba(255,255,255,0.6)"
                      strokeWidth="2"
                      fill="rgba(255,255,255,0.05)" />
                    
                    <path
                      d="M 0 30 L 0 50 A 25 8 0 0 0 50 50 L 50 30"
                      stroke="rgba(255,255,255,0.6)"
                      strokeWidth="2"
                      fill="rgba(255,255,255,0.05)" />
                    
                    <path
                      d="M 0 50 L 0 70 A 25 8 0 0 0 50 70 L 50 50"
                      stroke="rgba(255,255,255,0.6)"
                      strokeWidth="2"
                      fill="rgba(255,255,255,0.05)" />
                    
                    {/* Server lights */}
                    <circle cx="10" cy="20" r="2" fill="rgba(52,211,153,0.8)" />
                    <circle cx="10" cy="40" r="2" fill="rgba(52,211,153,0.8)" />
                    <circle
                      cx="10"
                      cy="60"
                      r="2"
                      fill="rgba(248,113,113,0.8)" />
                    
                    {/* Oval Ring */}
                    <ellipse
                      cx="25"
                      cy="40"
                      rx="35"
                      ry="12"
                      stroke="rgba(239,68,68,0.6)"
                      strokeWidth="2"
                      fill="none"
                      transform="rotate(5 25 40)" />
                    
                    {/* Warning Badge */}
                    <path d="M 45 65 L 55 82 L 35 82 Z" fill="#f87171" />
                    <text
                      x="45"
                      y="79"
                      fontSize="12"
                      fontWeight="bold"
                      fill="#fff"
                      textAnchor="middle">
                      
                      !
                    </text>
                  </g>
                </svg>
              </div>

              <div className="glass py-2 px-3 text-center mt-auto">
                <p
                  className="font-inter text-white/70"
                  style={{
                    fontSize: 'var(--small-size)'
                  }}>
                  
                  Budget overruns discovered too late.
                </p>
              </div>
            </div>

            {/* Connector 2 */}
            <div
              className={`hidden md:flex flex-col items-center justify-center w-12 shrink-0 relative ${isActive ? 'animate-fade-in-scale delay-600' : 'opacity-0'}`}>
              
              <svg viewBox="0 0 48 48" className="w-full h-12" fill="none">
                <path
                  d="M 0 24 L 16 32 L 32 16 L 48 24"
                  stroke="rgba(255,255,255,0.4)"
                  strokeWidth="2"
                  strokeDasharray="4 4"
                  className="animate-dash" />
                
                <path
                  d="M 44 20 L 48 24 L 44 28"
                  stroke="rgba(255,255,255,0.4)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round" />
                
                {/* X Mark */}
                <g transform="translate(16, 16)">
                  <circle cx="8" cy="8" r="10" fill="rgba(248,113,113,0.2)" />
                  <path
                    d="M 4 4 L 12 12 M 12 4 L 4 12"
                    stroke="#f87171"
                    strokeWidth="2.5"
                    strokeLinecap="round" />
                  
                </g>
              </svg>
            </div>

            {/* Panel 3: Reporting Lag */}
            <div
              className={`glass-card flex-1 flex flex-col p-4 md:p-5 relative z-10 ${isActive ? 'animate-fade-in-up delay-600' : 'opacity-0'}`}>
              
              <div className="flex gap-1.5 mb-3">
                <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]"></div>
              </div>

              <h4 className="font-inter font-bold text-white tracking-wide text-center mb-4 text-sm md:text-base">
                REPORTING LAG
              </h4>

              <div className="flex-1 flex items-center justify-center mb-3">
                <svg
                  viewBox="0 0 200 100"
                  className="w-full h-full max-h-[28vh]"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  
                  {/* Stack of Documents */}
                  <g transform="translate(20, 20)">
                    <path
                      d="M 5 10 L 35 10 L 35 60 L 5 60 Z"
                      fill="rgba(255,255,255,0.1)"
                      stroke="rgba(255,255,255,0.4)"
                      strokeWidth="1.5" />
                    
                    <path
                      d="M 10 5 L 40 5 L 40 55 L 10 55 Z"
                      fill="rgba(255,255,255,0.15)"
                      stroke="rgba(255,255,255,0.5)"
                      strokeWidth="1.5" />
                    
                    <path
                      d="M 15 0 L 45 0 L 45 50 L 15 50 Z"
                      fill="rgba(255,255,255,0.2)"
                      stroke="rgba(255,255,255,0.8)"
                      strokeWidth="2" />
                    
                    {/* Document lines */}
                    <line
                      x1="22"
                      y1="12"
                      x2="38"
                      y2="12"
                      stroke="rgba(255,255,255,0.6)"
                      strokeWidth="2"
                      strokeLinecap="round" />
                    
                    <line
                      x1="22"
                      y1="20"
                      x2="38"
                      y2="20"
                      stroke="rgba(255,255,255,0.6)"
                      strokeWidth="2"
                      strokeLinecap="round" />
                    
                    <line
                      x1="22"
                      y1="28"
                      x2="32"
                      y2="28"
                      stroke="rgba(255,255,255,0.6)"
                      strokeWidth="2"
                      strokeLinecap="round" />
                    
                    <line
                      x1="22"
                      y1="36"
                      x2="38"
                      y2="36"
                      stroke="rgba(255,255,255,0.6)"
                      strokeWidth="2"
                      strokeLinecap="round" />
                    
                  </g>

                  {/* Loading/Buffering Icon */}
                  <g transform="translate(100, 45)">
                    <circle
                      cx="0"
                      cy="0"
                      r="15"
                      stroke="rgba(255,255,255,0.2)"
                      strokeWidth="3"
                      fill="none" />
                    
                    <path
                      d="M 0 -15 A 15 15 0 0 1 15 0"
                      stroke="rgba(167,139,250,0.8)"
                      strokeWidth="3"
                      strokeLinecap="round" />
                    
                    <circle
                      cx="-20"
                      cy="0"
                      r="2"
                      fill="rgba(255,255,255,0.4)" />
                    
                    <circle cx="20" cy="0" r="2" fill="rgba(255,255,255,0.4)" />
                    <circle cx="30" cy="0" r="2" fill="rgba(255,255,255,0.2)" />
                    <circle
                      cx="-30"
                      cy="0"
                      r="2"
                      fill="rgba(255,255,255,0.2)" />
                    
                  </g>

                  {/* Single Document */}
                  <g transform="translate(145, 25)">
                    <path
                      d="M 0 0 L 30 0 L 30 50 L 0 50 Z"
                      fill="rgba(255,255,255,0.1)"
                      stroke="rgba(255,255,255,0.8)"
                      strokeWidth="2" />
                    
                    {/* Document lines */}
                    <line
                      x1="7"
                      y1="12"
                      x2="23"
                      y2="12"
                      stroke="rgba(255,255,255,0.6)"
                      strokeWidth="2"
                      strokeLinecap="round" />
                    
                    <line
                      x1="7"
                      y1="20"
                      x2="23"
                      y2="20"
                      stroke="rgba(255,255,255,0.6)"
                      strokeWidth="2"
                      strokeLinecap="round" />
                    
                    <line
                      x1="7"
                      y1="28"
                      x2="17"
                      y2="28"
                      stroke="rgba(255,255,255,0.6)"
                      strokeWidth="2"
                      strokeLinecap="round" />
                    
                  </g>
                </svg>
              </div>

              <div className="glass py-2 px-3 text-center mt-auto">
                <p
                  className="font-inter text-white/70"
                  style={{
                    fontSize: 'var(--small-size)'
                  }}>
                  
                  Weeks spent compiling status reports.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-400/30 to-transparent" />
    </section>);

}