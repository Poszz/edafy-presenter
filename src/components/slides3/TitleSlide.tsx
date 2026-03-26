import React from 'react';
import { AfedLogo } from '../AfedLogo';
interface TitleSlideProps {
  isActive: boolean;
}
export function TitleSlide3({ isActive }: TitleSlideProps) {
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
      <div className="absolute inset-0 bg-purple-950/30 pointer-events-none" />

      {/* Animated background orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute w-[40vw] h-[40vw] rounded-full opacity-15 animate-orb"
          style={{
            background:
            'radial-gradient(circle, rgba(139,92,246,0.3) 0%, transparent 70%)',
            top: '10%',
            right: '-10%'
          }} />
        
        <div
          className="absolute w-[25vw] h-[25vw] rounded-full opacity-10 animate-orb"
          style={{
            background:
            'radial-gradient(circle, rgba(251,191,36,0.2) 0%, transparent 70%)',
            top: '50%',
            left: '60%',
            animationDelay: '8s'
          }} />
        
      </div>

      {/* Top-left logo */}
      <div
        className={`absolute top-6 left-6 md:top-8 md:left-8 z-20 ${isActive ? 'animate-fade-in-up' : 'opacity-0'}`}>
        
        <AfedLogo size="md" />
      </div>

      {/* Left-aligned glass card */}
      <div
        className="slide-content relative z-10 items-start justify-center"
        style={{
          padding: 'var(--slide-padding)'
        }}>
        
        <div
          className={`glass-strong px-8 py-10 md:px-12 md:py-14 text-left ${isActive ? 'animate-fade-in-scale delay-200' : 'opacity-0'}`}
          style={{
            width: '50%',
            maxWidth: '50vw'
          }}>
          
          {/* Company label */}
          <p
            className="font-inter font-semibold tracking-[0.25em] text-white/70 mb-6"
            style={{
              fontSize: 'var(--small-size)'
            }}>
            
            AFED DIGITAL
          </p>

          {/* Title — "EDAFY" in white, "Plan" in accent */}
          <h1
            className="font-inter font-extrabold text-white mb-8 text-[100px]"
            style={{
              lineHeight: 1.1
            }}>
            
            EDAFY <span className="text-purple-300">Plan</span>
          </h1>

          {/* Subtitle with left accent border */}
          <div className="flex items-stretch gap-4">
            <div
              className="w-1 flex-shrink-0 rounded-full"
              style={{
                background: 'linear-gradient(to bottom, #a78bfa, #7c3aed)'
              }} />
            
            <p
              className="font-inter font-medium text-white/80 text-[48px]"
              style={{
                lineHeight: 1.4
              }}>
              
              AI-Driven Upstream E&P
              <br />
              Project Management
            </p>
          </div>
        </div>
      </div>

      {/* Bottom decorative line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-400/30 to-transparent" />
    </section>);

}