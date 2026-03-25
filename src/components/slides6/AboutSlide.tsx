import React, { useEffect, useState } from 'react';
import { ClipboardListIcon, TrendingUpIcon, FileTextIcon } from 'lucide-react';
const carouselImages = [
{
  src: "/rph-image.png",
  alt: 'Well Data Management Map Interface',
  label: 'Well Explorer'
},
{
  src: "/rph-image-1.png",
  alt: 'Rock Physics Template Explorer',
  label: 'Template Explorer'
},
{
  src: "/rph-image-2.png",
  alt: 'Data Availability Analysis',
  label: 'Data Availability'
}];

export function AboutSlide() {
  const [activeIndex, setActiveIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % carouselImages.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);
  const getItemClass = (index: number) => {
    if (index === activeIndex) return 'active';
    if (index === (activeIndex + 1) % carouselImages.length) return 'next';
    return 'prev';
  };
  return (
    <section className="slide slide-bg-hub">
      <div className="slide-content container max-w-[1400px] h-full flex flex-col pt-20 pb-8">
        {/* Header */}
        <div className="mb-8 animate-slide-up">
          <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight max-w-4xl drop-shadow-md">
            Rock Physics Hub Connecting Teams, Accelerating Decisions Powered by
            AI Capabilities
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 flex-1 min-h-0">
          {/* Left Column - 2 Boxes (Solution + Importance) */}
          <div className="w-full lg:w-[45%] flex flex-col gap-6 overflow-visible pl-4">
            {/* Box 1 */}
            <div className="glass p-5 relative animate-slide-up delay-100 hover:bg-white/20 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(168,85,247,0.3)] transition-all duration-300 cursor-pointer">
              <div className="absolute -left-4 -top-4 w-12 h-12 bg-purple-500/80 backdrop-blur-md rounded-full flex items-center justify-center shadow-lg border border-white/30">
                <ClipboardListIcon className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-display text-xl font-bold text-white mb-3 ml-6 drop-shadow-sm">
                The Solution/feature
              </h3>
              <ul className="space-y-2 ml-2">
                {[
                'Turn fragmented data into structured knowledge with unified system.',
                'Built in QC checks.',
                'Automated processes data availability.',
                'AI-driven capabilities to predict missing value.',
                'Ready template to select for RPM.',
                'Capabilities to compare multiple RP templates with pre-select sensitivity analysis.',
                'Compare scoring of pre-select templates.'].
                map((item, i) =>
                <li
                  key={i}
                  className="flex items-start gap-2 text-white/80 text-sm">
                  
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400 shrink-0 mt-1.5 shadow-[0_0_5px_rgba(192,132,252,0.8)]" />
                    <span className="leading-snug">{item}</span>
                  </li>
                )}
              </ul>
            </div>

            {/* Box 3 - The Importance (was Box 3, now directly after Box 1) */}
            <div className="glass p-5 relative animate-slide-up delay-200 hover:bg-white/20 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(168,85,247,0.3)] transition-all duration-300 cursor-pointer">
              <div className="absolute -left-4 -top-4 w-12 h-12 bg-purple-500/80 backdrop-blur-md rounded-full flex items-center justify-center shadow-lg border border-white/30">
                <FileTextIcon className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-display text-xl font-bold text-white mb-3 ml-6 drop-shadow-sm">
                The Importance
              </h3>
              <p className="text-white/80 text-sm leading-relaxed text-center font-medium px-4">
                Rock Physics Hub empowers users to unlock the full potential of
                their data, improved production strategies, and long-term
                sustainability.
              </p>
            </div>
          </div>

          {/* Right Column - Impact Card + Animated Image Carousel */}
          <div className="w-full lg:w-[55%] flex flex-col items-center justify-start animate-slide-up delay-300 relative">
            {/* The Impact card - positioned above carousel */}
            <div className="glass p-5 relative w-full max-w-[700px] mb-6 hover:bg-white/20 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(168,85,247,0.3)] transition-all duration-300 cursor-pointer">
              <div className="absolute -left-4 -top-4 w-12 h-12 bg-purple-500/80 backdrop-blur-md rounded-full flex items-center justify-center shadow-lg border border-white/30">
                <TrendingUpIcon className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-display text-xl font-bold text-white mb-3 ml-6 drop-shadow-sm">
                The Impact
              </h3>
              <p className="text-white/80 text-sm leading-relaxed text-center font-medium px-4">
                Up to 55% stronger regulatory compliance, Decisions made up to
                75% faster, Projects delivered up to 40% more efficiently.
              </p>
            </div>

            {/* Image Carousel */}
            <div
              className="animate-float relative w-full max-w-[700px]"
              style={{
                height: 'min(45vh, 360px)'
              }}>
              
              {carouselImages.map((image, index) =>
              <div
                key={index}
                className={`image-carousel-item ${getItemClass(index)}`}>
                
                  <div className="glass p-2 rounded-2xl shadow-2xl w-full">
                    <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-auto object-contain rounded-xl"
                    style={{
                      maxHeight: 'min(40vh, 320px)'
                    }} />
                  
                  </div>
                </div>
              )}
            </div>

            {/* Carousel Dots & Label */}
            <div className="flex flex-col items-center gap-3 mt-4">
              <div className="flex gap-3">
                {carouselImages.map((_, index) =>
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`carousel-dot w-2.5 h-2.5 rounded-full bg-white/30 ${index === activeIndex ? 'active' : 'hover:bg-white/50'}`}
                  aria-label={`View ${carouselImages[index].label}`} />

                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>);

}