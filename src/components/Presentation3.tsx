import React, { useCallback, useEffect, useRef, useState } from 'react';
import { ChevronUpIcon, ChevronDownIcon, HomeIcon } from 'lucide-react';
import { TitleSlide3 } from './slides3/TitleSlide';
import { DilemmaSlide } from './slides3/DilemmaSlide';
import { PlatformSlide } from './slides3/PlatformSlide';
import { EcosystemSlide } from './slides3/EcosystemSlide';
import { AnatomySlide } from './slides3/AnatomySlide';
import { AIIntelligenceSlide } from './slides3/AIIntelligenceSlide';
import { RiskSlide } from './slides3/RiskSlide';
import { ForecastingSlide } from './slides3/ForecastingSlide';
import { ConversationalSlide } from './slides3/ConversationalSlide';
import { AdvantageSlide } from './slides3/AdvantageSlide';
import { EndSlide } from './slides3/EndSlide';

const TOTAL_SLIDES = 11;

interface Presentation3Props {
  onBack: () => void;
}

export function Presentation3({ onBack }: Presentation3Props) {
  const [activeSlide, setActiveSlide] = useState(0);
  const [direction, setDirection] = useState<'up' | 'down'>('down');
  const isAnimating = useRef(false);

  const navigateToSlide = useCallback(
    (index: number, dir?: 'up' | 'down') => {
      if (index < 0 || index >= TOTAL_SLIDES || isAnimating.current) return;
      isAnimating.current = true;
      setDirection(dir || (index > activeSlide ? 'down' : 'up'));
      setActiveSlide(index);
      setTimeout(() => {
        isAnimating.current = false;
      }, 600);
    },
    [activeSlide]
  );

  const goNext = useCallback(() => {
    navigateToSlide(activeSlide + 1, 'down');
  }, [activeSlide, navigateToSlide]);

  const goPrev = useCallback(() => {
    navigateToSlide(activeSlide - 1, 'up');
  }, [activeSlide, navigateToSlide]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        onBack();
        return;
      }
      switch (e.key) {
        case 'ArrowDown':
        case 'ArrowRight':
        case ' ':
          e.preventDefault();
          goNext();
          break;
        case 'ArrowUp':
        case 'ArrowLeft':
          e.preventDefault();
          goPrev();
          break;
        case 'Home':
          e.preventDefault();
          navigateToSlide(0, 'up');
          break;
        case 'End':
          e.preventDefault();
          navigateToSlide(TOTAL_SLIDES - 1, 'down');
          break;
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [goNext, goPrev, navigateToSlide, onBack]);

  // Mouse wheel / trackpad navigation
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      if (Math.abs(e.deltaY) < 10) return;
      if (e.deltaY > 0) goNext();
      else goPrev();
    };
    window.addEventListener('wheel', handleWheel, { passive: false });
    return () => window.removeEventListener('wheel', handleWheel);
  }, [goNext, goPrev]);

  // Touch swipe navigation
  useEffect(() => {
    let touchStartY = 0;
    const handleTouchStart = (e: TouchEvent) => {
      touchStartY = e.touches[0].clientY;
    };
    const handleTouchEnd = (e: TouchEvent) => {
      const deltaY = touchStartY - e.changedTouches[0].clientY;
      if (Math.abs(deltaY) < 50) return;
      if (deltaY > 0) goNext();
      else goPrev();
    };
    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchend', handleTouchEnd, { passive: true });
    return () => {
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [goNext, goPrev]);

  const getSlideStyle = (index: number): string => {
    if (index === activeSlide) return 'translate-y-0 opacity-100 z-10';
    if (index < activeSlide) return '-translate-y-full opacity-0 z-0 pointer-events-none';
    return 'translate-y-full opacity-0 z-0 pointer-events-none';
  };

  const slideNumber = String(activeSlide + 1).padStart(2, '0');
  const totalNumber = String(TOTAL_SLIDES).padStart(2, '0');

  const slides = [
    <TitleSlide3 isActive={activeSlide === 0} />,
    <DilemmaSlide isActive={activeSlide === 1} />,
    <PlatformSlide isActive={activeSlide === 2} />,
    <EcosystemSlide isActive={activeSlide === 3} />,
    <AnatomySlide isActive={activeSlide === 4} />,
    <AIIntelligenceSlide isActive={activeSlide === 5} />,
    <RiskSlide isActive={activeSlide === 6} />,
    <ForecastingSlide isActive={activeSlide === 7} />,
    <ConversationalSlide isActive={activeSlide === 8} />,
    <AdvantageSlide isActive={activeSlide === 9} />,
    <EndSlide isActive={activeSlide === 10} />,
  ];

  return (
    <div className="relative font-inter w-screen h-screen h-dvh overflow-hidden">
      {/* Progress bar */}
      <div className="fixed top-0 left-0 right-0 z-50 h-0.5 bg-white/5">
        <div
          className="h-full bg-gradient-to-r from-purple-500 via-gold-400 to-teal-400 transition-all duration-500 ease-out"
          style={{
            width: `${((activeSlide + 1) / TOTAL_SLIDES) * 100}%`,
          }}
        />
      </div>

      {/* Back to Overview Button */}
      <button
        onClick={onBack}
        className="fixed top-3 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 shadow-lg hover:bg-white/20 hover:scale-105 transition-all duration-300 cursor-pointer"
      >
        <HomeIcon className="w-4 h-4 text-white" />
        <span className="text-white text-xs font-medium">Overview</span>
      </button>

      {/* Slide container */}
      <div className="relative w-full h-full">
        {slides.map((slide, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-all duration-[600ms] ease-[cubic-bezier(0.4,0,0.2,1)] ${getSlideStyle(i)}`}
          >
            {slide}
          </div>
        ))}
      </div>

      {/* Bottom navigation bar */}
      <div className="fixed bottom-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-10 py-4">
        <button
          onClick={goPrev}
          disabled={activeSlide === 0}
          className={`flex items-center gap-1.5 font-inter font-semibold px-5 py-2 rounded-full transition-all duration-300 ${
            activeSlide === 0
              ? 'glass text-white/20 cursor-not-allowed'
              : 'bg-white/10 backdrop-blur-xl border border-white/20 text-white hover:bg-white/20 hover:border-white/30 cursor-pointer'
          }`}
          style={{ fontSize: 'var(--small-size)' }}
        >
          <ChevronUpIcon className="w-4 h-4" />
          Previous
        </button>

        <div
          className="glass px-5 py-2 rounded-full font-inter font-semibold text-white/80"
          style={{ fontSize: 'var(--small-size)' }}
        >
          <span className="text-gold-400">{slideNumber}</span>
          <span className="text-white/40 mx-2">/</span>
          <span>{totalNumber}</span>
        </div>

        <button
          onClick={goNext}
          disabled={activeSlide === TOTAL_SLIDES - 1}
          className={`flex items-center gap-1.5 font-inter font-semibold px-5 py-2 rounded-full transition-all duration-300 ${
            activeSlide === TOTAL_SLIDES - 1
              ? 'glass text-white/20 cursor-not-allowed'
              : 'bg-white/10 backdrop-blur-xl border border-white/20 text-white hover:bg-white/20 hover:border-white/30 cursor-pointer'
          }`}
          style={{ fontSize: 'var(--small-size)' }}
        >
          Next
          <ChevronDownIcon className="w-4 h-4" />
        </button>
      </div>

      {/* Right-side dot indicators */}
      <nav
        className="nav-dots fixed right-4 md:right-6 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-3"
        aria-label="Slide navigation"
      >
        {Array.from({ length: TOTAL_SLIDES }).map((_, i) => (
          <button
            key={i}
            onClick={() => navigateToSlide(i)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              activeSlide === i
                ? 'bg-gold-400 scale-150 shadow-lg shadow-gold-400/40'
                : 'bg-white/20 hover:bg-white/40 hover:scale-125'
            }`}
            aria-label={`Go to slide ${i + 1}`}
            aria-current={activeSlide === i ? 'true' : undefined}
          />
        ))}
      </nav>
    </div>
  );
}
