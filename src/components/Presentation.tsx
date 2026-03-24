import React, { useCallback, useEffect, useRef, useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';
import { TitleSlide } from './slides/TitleSlide';
import { VideoSlide } from './slides/VideoSlide';
import { AboutSlide } from './slides/AboutSlide';
import { ChallengeSlide } from './slides/ChallengeSlide';
import { SolutionsSlide } from './slides/SolutionsSlide';
import { CapabilitiesSlide } from './slides/CapabilitiesSlide';
import { ImpactSlide } from './slides/ImpactSlide';
const LOGO_URL = "/Logo_For_Dark_Bg_(1).png";

const slideLabels = [
'Title',
'Video',
'Ecosystem',
'Architecture',
'Ecosystem',
'Differentiators',
'Closing'];

export function Presentation() {
  const [activeSlide, setActiveSlide] = useState(0);
  const totalSlides = 7;
  const goToSlide = useCallback(
    (index: number) => {
      const clamped = Math.max(0, Math.min(totalSlides - 1, index));
      setActiveSlide(clamped);
    },
    [totalSlides]
  );
  const goNext = useCallback(() => {
    goToSlide(activeSlide + 1);
  }, [activeSlide, goToSlide]);
  const goPrev = useCallback(() => {
    goToSlide(activeSlide - 1);
  }, [activeSlide, goToSlide]);
  // Swipe gesture navigation
  const touchStart = useRef<{ x: number; y: number } | null>(null);
  useEffect(() => {
    const SWIPE_THRESHOLD = 50;
    const handleTouchStart = (e: TouchEvent) => {
      const touch = e.touches[0];
      touchStart.current = { x: touch.clientX, y: touch.clientY };
    };
    const handleTouchEnd = (e: TouchEvent) => {
      if (!touchStart.current) return;
      const touch = e.changedTouches[0];
      const dx = touch.clientX - touchStart.current.x;
      const dy = touch.clientY - touchStart.current.y;
      touchStart.current = null;
      // Use the axis with greater movement
      if (Math.abs(dy) > Math.abs(dx) && Math.abs(dy) > SWIPE_THRESHOLD) {
        // Swipe up → next, swipe down → prev
        if (dy < 0) goNext();
        else goPrev();
      } else if (Math.abs(dx) > SWIPE_THRESHOLD) {
        // Swipe left → next, swipe right → prev
        if (dx < 0) goNext();
        else goPrev();
      }
    };
    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchend', handleTouchEnd, { passive: true });
    return () => {
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [goNext, goPrev]);
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (
      ['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', ' '].includes(e.key))
      {
        e.preventDefault();
        const direction =
        e.key === 'ArrowDown' || e.key === 'ArrowRight' || e.key === ' ' ?
        1 :
        -1;
        goToSlide(activeSlide + direction);
      }
    };
    window.addEventListener('keydown', handleKeyDown, {
      passive: false
    });
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeSlide, goToSlide]);
  const isTitle = activeSlide === 0;
  return (
    <main className="w-full h-screen overflow-hidden relative">
      {/* Company Logo — fixed top-left on all slides */}
      <div className="fixed top-5 left-6 z-50 transition-all duration-500">
        <img
          src={LOGO_URL}
          alt="AFED Digital"
          className={`transition-all duration-500 drop-shadow-[0_0_10px_rgba(0,0,0,0.5)] ${isTitle ? 'h-14 md:h-16' : 'h-8 md:h-10'}`}
          style={{
            maxHeight: 'none'
          }} />
        
      </div>

      {/* Slide Container — translates vertically */}
      <div
        className="w-full transition-transform duration-700 ease-in-out"
        style={{
          transform: `translateY(-${activeSlide * 100}vh)`
        }}>
        
        <TitleSlide />
        <VideoSlide />
        <AboutSlide />
        <ChallengeSlide />
        <SolutionsSlide />
        <CapabilitiesSlide />
        <ImpactSlide />
      </div>

      {/* Navigation Dots — right side */}
      <div className="nav-dots fixed right-6 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-3">
        {Array.from({
          length: totalSlides
        }).map((_, idx) =>
        <button
          key={idx}
          onClick={() => goToSlide(idx)}
          aria-label={`Go to slide ${idx + 1}: ${slideLabels[idx]}`}
          className={`w-3 h-3 rounded-full transition-all duration-300 ${activeSlide === idx ? 'bg-purple-400 scale-125 shadow-[0_0_10px_rgba(192,132,252,0.8)]' : 'bg-white/30 hover:bg-white/60'}`} />

        )}
      </div>

      {/* Bottom Navigation Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-4">
        <button
          onClick={goPrev}
          disabled={activeSlide === 0}
          className={`group flex items-center gap-2 px-5 py-3 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 shadow-lg transition-all duration-300 ${activeSlide === 0 ? 'opacity-30 cursor-not-allowed' : 'hover:bg-white/20 hover:scale-105 hover:shadow-[0_0_15px_rgba(192,132,252,0.4)] cursor-pointer'}`}>
          
          <ChevronLeftIcon className="w-5 h-5 text-white group-hover:text-purple-300 transition-colors" />
          <span className="text-white text-sm font-medium hidden sm:inline">
            Previous
          </span>
        </button>

        <div className="flex items-center gap-3 px-5 py-3 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 shadow-lg">
          <span className="text-purple-300 font-bold text-sm">
            {String(activeSlide + 1).padStart(2, '0')}
          </span>
          <span className="text-white/40 text-sm">/</span>
          <span className="text-white/60 text-sm">
            {String(totalSlides).padStart(2, '0')}
          </span>
        </div>

        <button
          onClick={goNext}
          disabled={activeSlide === totalSlides - 1}
          className={`group flex items-center gap-2 px-5 py-3 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 shadow-lg transition-all duration-300 ${activeSlide === totalSlides - 1 ? 'opacity-30 cursor-not-allowed' : 'hover:bg-white/20 hover:scale-105 hover:shadow-[0_0_15px_rgba(192,132,252,0.4)] cursor-pointer'}`}>
          
          <span className="text-white text-sm font-medium hidden sm:inline">
            Next
          </span>
          <ChevronRightIcon className="w-5 h-5 text-white group-hover:text-purple-300 transition-colors" />
        </button>
      </div>

      {/* Keyboard Hint */}
      <div className="keyboard-hint fixed top-6 right-6 z-50 font-body text-xs text-white/30 tracking-widest uppercase">
        ← → or swipe to navigate
      </div>
    </main>);

}