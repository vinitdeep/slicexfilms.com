'use client';

import { useState, useEffect, useRef } from 'react';
import { withBase } from '../lib/basePath';

const HARDWARE_ITEMS = [
  {
    id: '01',
    title: 'CINEMATIC OPTICS',
    subtitle: 'Cinematic Prime Lenses',
    description:
      'Delivering unmistakable ultra-sharp cinematic resolution, gorgeous organic bokeh, and a gentle roll-off that renders royal lehengas and regal jewelry with painterly perfection.',
    icon: 'lens',
    image: '/assets/hardware-anamorphic.jpg',
    stillTag: 'STILL #082 // CINEMATIC PRIMES',
    caption: 'Sony G-Master Cinema Primes • f/1.2 & f/1.4 Optics',
    specsLeft: 'CINEMATIC PRIME LENS KIT',
    specsRight: 'UNCOMPRESSED PRORES 4444 XQ',
    badge: 'f/1.2 & f/1.4 GM',
  },
  {
    id: '02',
    title: 'IMMERSIVE SOUNDSTAGE',
    subtitle: '32-Bit Float Binaural Acoustics',
    description:
      'Never miss a whispered promise. Ultra-high dynamic range 32-bit float recorders capture the subtle tremor in a father’s blessing and the thunderous joy of dhol drums with zero digital clipping.',
    icon: 'graphic_eq',
    image: '/assets/hardware-soundstage.jpg',
    stillTag: 'STILL #083 // BINAURAL ACOUSTICS',
    caption: 'Sound Devices 888 • 32-Bit Float Recorders',
    specsLeft: '32-BIT FLOAT DYNAMIC RANGE',
    specsRight: 'ZERO CLIP AUDIO VAULT',
    badge: '192kHz / BINAURAL',
  },
  {
    id: '03',
    title: 'COLOR ARCHITECTURE',
    subtitle: 'DaVinci Color Nodes & Film Grain',
    description:
      'Custom handcrafted 3D LUT matrices tuned specifically for warm Indian skin tones under deep night candlelight, amber fireworks, and sun-baked sandstone courtyards.',
    icon: 'tune',
    image: '/assets/hardware-color.jpg',
    stillTag: 'STILL #084 // DAVINCI COLOR NODES',
    caption: 'DaVinci Resolve Studio • 35mm Celluloid Emulation',
    specsLeft: 'ROYAL PALETTE 3D LUT',
    specsRight: 'KODAK 5219 GRAIN MATRIX',
    badge: 'HDR10+ / REC.2020',
  },
];

export default function HardwareApparatus() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef(null);

  const SLIDE_DURATION = 4500; // 4.5 seconds per slide

  useEffect(() => {
    if (isPaused) return;

    timerRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % HARDWARE_ITEMS.length);
    }, SLIDE_DURATION);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused, activeIndex]);

  const activeItem = HARDWARE_ITEMS[activeIndex];

  return (
    <section className="w-full bg-surface-container-lowest px-margin-mobile lg:px-margin-desktop py-space-3xl lg:py-space-4xl border-t border-primary-container/20">
      <div className="max-w-7xl mx-auto flex flex-col gap-space-2xl">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <div className="flex items-center gap-space-sm mb-space-xs">
              <span className="w-8 h-[1px] bg-primary"></span>
              <span className="font-label-sm text-label-sm text-primary uppercase tracking-[0.25em]">
                04 // THE ARCHIVAL APPARATUS
              </span>
            </div>
            <h2 className="font-display-hero-mobile lg:font-display-hero text-display-hero-mobile lg:text-display-hero uppercase text-on-surface tracking-tight">
              THE HARDWARE OF HIGH EMOTION
            </h2>
          </div>
          {/* Automated Slide Controls / Indicator */}
          <div className="flex items-center gap-2 pb-2">
            {HARDWARE_ITEMS.map((item, idx) => (
              <button
                key={item.id}
                onClick={() => setActiveIndex(idx)}
                className={`h-1.5 rounded-full transition-all duration-500 ${
                  idx === activeIndex
                    ? 'w-8 bg-primary shadow-glow'
                    : 'w-2 bg-primary/20 hover:bg-primary/50'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center">
          {/* Left Column: Cross-fading Image Display */}
          <div className="lg:col-span-6 flex flex-col gap-space-sm">
            <div
              className="relative rounded-xl overflow-hidden bg-surface-container-low shadow-2xl aspect-[4/3] lg:aspect-[5/4] group"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              {HARDWARE_ITEMS.map((item, idx) => (
                <div
                  key={item.id}
                  className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                    idx === activeIndex ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
                  }`}
                >
                  <img
                    alt={item.title}
                    src={withBase(item.image)}
                    className="w-full h-full object-cover transform group-hover:scale-[1.03] transition-transform duration-1000 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-surface-container-lowest/30 to-transparent" />
                  
                  {/* Image Overlay Banner */}
                  <div className="absolute bottom-0 inset-x-0 p-space-md flex items-center justify-between z-20">
                    <div>
                      <span className="font-label-sm text-label-sm text-primary uppercase tracking-widest block font-mono">
                        {item.stillTag}
                      </span>
                      <p className="font-body-sm text-body-sm text-on-surface italic mt-0.5">
                        {item.caption}
                      </p>
                    </div>
                    <span className="font-label-sm text-label-sm text-primary bg-primary/10 border border-primary/30 px-2 py-1 rounded uppercase tracking-widest font-mono text-[10px]">
                      {item.badge}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom specs line */}
            <div className="flex items-center justify-between text-outline font-label-sm text-label-sm px-space-xs font-mono text-[11px] tracking-wider">
              <span className="text-primary/90 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                {activeItem.specsLeft}
              </span>
              <span className="text-on-surface-variant/80">{activeItem.specsRight}</span>
            </div>
          </div>

          {/* Right Column: 3 Selectable Title Cards */}
          <div
            className="lg:col-span-6 flex flex-col gap-space-md"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {HARDWARE_ITEMS.map((item, idx) => {
              const isActive = idx === activeIndex;
              return (
                <div
                  key={item.id}
                  onClick={() => setActiveIndex(idx)}
                  className={`relative cursor-pointer p-space-lg rounded-xl flex items-start gap-space-md transition-all duration-500 overflow-hidden border ${
                    isActive
                      ? 'bg-surface-container border-primary/60 shadow-xl scale-[1.01]'
                      : 'bg-surface-container-low/70 border-primary-container/10 hover:border-primary/30 hover:bg-surface-container-low'
                  }`}
                >
                  {/* Progress line for active slide */}
                  {isActive && (
                    <div
                      key={activeIndex}
                      className="absolute top-0 left-0 bottom-0 w-1 bg-gradient-to-b from-primary via-cyan-300 to-primary animate-pulse"
                    />
                  )}

                  <div
                    className={`w-11 h-11 rounded-lg flex items-center justify-center shrink-0 mt-0.5 transition-colors duration-500 ${
                      isActive
                        ? 'bg-primary text-surface-container-lowest font-bold shadow-md'
                        : 'bg-primary/10 text-primary group-hover:bg-primary/20'
                    }`}
                  >
                    <span className="material-symbols-outlined text-[22px]">{item.icon}</span>
                  </div>

                  <div className="flex flex-col gap-space-2xs flex-1">
                    <div className="flex items-center justify-between">
                      <span
                        className={`font-label-sm text-label-sm uppercase tracking-widest transition-colors font-mono ${
                          isActive ? 'text-primary font-bold' : 'text-primary/70'
                        }`}
                      >
                        {item.id} // {item.title}
                      </span>
                      {isActive && (
                        <span className="text-[9px] uppercase tracking-widest text-cyan-200 bg-cyan-400/10 border border-cyan-400/30 px-2 py-0.5 rounded font-mono">
                          ACTIVE FOCUS
                        </span>
                      )}
                    </div>
                    <h3
                      className={`font-headline-sm text-headline-sm transition-colors ${
                        isActive ? 'text-primary font-medium' : 'text-on-surface'
                      }`}
                    >
                      {item.subtitle}
                    </h3>
                    <p className="font-body-md text-body-md text-on-surface-variant font-light leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
