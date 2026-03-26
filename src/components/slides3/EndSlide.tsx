import React from 'react';
import { AfedLogo } from '../AfedLogo';
interface EndSlideProps {
  isActive: boolean;
}
export function EndSlide({ isActive }: EndSlideProps) {
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
            bottom: '10%',
            left: '-5%',
            animationDelay: '8s'
          }} />
        
        <div
          className="absolute w-[20vw] h-[20vw] rounded-full opacity-10 animate-orb"
          style={{
            background:
            'radial-gradient(circle, rgba(16,185,129,0.2) 0%, transparent 70%)',
            top: '50%',
            left: '60%',
            animationDelay: '4s'
          }} />
        
      </div>

      {/* Top-left logo */}
      <div
        className={`absolute top-6 left-6 md:top-8 md:left-8 z-20 ${isActive ? 'animate-fade-in-up' : 'opacity-0'}`}>
        
        <AfedLogo size="md" />
      </div>

      {/* Centered content */}
      <div
        className="slide-content relative z-10 items-center justify-center text-center"
        style={{
          padding: 'var(--slide-padding)'
        }}>
        
        <div
          className={`glass-strong px-10 py-14 md:px-16 md:py-20 flex flex-col items-center gap-10 ${isActive ? 'animate-fade-in-scale delay-200' : 'opacity-0'}`}
          style={{
            maxWidth: '800px',
            width: '90%'
          }}>
          
          {/* Main Title */}
          <h1
            className="font-inter font-extrabold text-white"
            style={{
              fontSize: 'var(--title-size)',
              lineHeight: 1.15
            }}>
            
            Transform How You
            <br />
            <span className="text-purple-300">Manage Upstream Projects</span>
          </h1>

          {/* Decorative divider */}
          <div className="flex items-center gap-3">
            <div className="w-12 h-px bg-gradient-to-r from-transparent to-purple-400/60" />
            <div className="w-2 h-2 rounded-full bg-purple-400/60" />
            <div className="w-12 h-px bg-gradient-to-l from-transparent to-purple-400/60" />
          </div>

          {/* Company Info */}
          <div
            className={`flex flex-col items-center gap-4 ${isActive ? 'animate-fade-in-up delay-400' : 'opacity-0'}`}>
            
            <p
              className="font-inter font-semibold tracking-[0.25em] text-white/70"
              style={{
                fontSize: 'var(--body-size)'
              }}>
              
              AFED Digital Sdn. Bhd.
            </p>

            <div className="flex flex-col items-center gap-2">
              <a
                href="https://www.afeddigital.com"
                className="font-inter text-purple-300 hover:text-purple-200 transition-colors"
                style={{
                  fontSize: 'var(--body-size)'
                }}>
                
                www.afeddigital.com
              </a>
              <a
                href="mailto:hi@afeddigital.com"
                className="font-inter text-white/60 hover:text-white/80 transition-colors"
                style={{
                  fontSize: 'var(--body-size)'
                }}>
                
                hi@afeddigital.com
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom decorative line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-400/30 to-transparent" />
    </section>);

}