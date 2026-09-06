'use client';

import { useEffect } from 'react';
import VideoLightbox from '../../components/VideoLightbox';
import GoldenDust from '../../components/GoldenDust';

// Real films from youtube.com/@slicexfilms8741
const thumb = (id) => `https://i.ytimg.com/vi/${id}/maxresdefault.jpg`;

const FEATURE_FILM = { id: 'MIBoIxNjfXM', title: 'Pratap & Supriya — The Wedding Film' };

// 35mm film-strip reel — real films from youtube.com/@slicexfilms8741.
const filmThumb = (id) => `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;
const FILM_STRIP = [
  { id: 'YomPpYhVIws', title: 'Niharika & Chandan', tag: 'Pre-Wedding', stock: 'KODAK 5219' },
  { id: 'EUB8I5jshbI', title: 'Swarup & Soumya', tag: 'Wedding Film', stock: 'SAFETY FILM' },
  { id: '8NngCj7b_uA', title: 'Alisha Dash', tag: 'Wedding Film', stock: 'EASTMAN 400' },
  { id: 'ELOK2RXqbuc', title: 'Bikash & Akanksha', tag: 'Safar · Part 2', stock: 'PORTRA 400' },
  { id: 'k5D1tdXx4rE', title: 'Sibhani as Apsara', tag: 'Concept Film', stock: 'KODAK VISION3' },
  { id: 'ywVU5sfR5Ao', title: 'Piyush & Dipti', tag: 'Wedding Film', stock: 'VOGUE SPOSA' },
  { id: 'NI94Lry-Llo', title: 'Pratyush & Mitali', tag: 'Wedding Film', stock: 'CINESTILL 800T' },
  { id: 'LbZdGXwFpg4', title: 'Pratyush & Mitali', tag: 'Pre-Wedding Teaser', stock: 'KODAK 500T' },
  { id: '71sezFct5YQ', title: 'Sulagna', tag: "A Bride's Perspective", stock: 'FUJI ETERNA' },
];

export default function HomePage() {
  // Film-strip reel: auto-scrolls, pauses on hover, and can be dragged /
  // wheel-scrolled to slide through the films. A drag suppresses the click so
  // it doesn't accidentally open a video.
  useEffect(() => {
    const el = document.getElementById('filmStrip');
    if (!el) return;
    let raf;
    let dragging = false;
    let moved = false;
    let startX = 0;
    let startScroll = 0;
    let paused = false;
    const half = () => el.scrollWidth / 2;

    function tick() {
      if (!paused && !dragging) {
        el.scrollLeft += 0.5;
        if (el.scrollLeft >= half()) el.scrollLeft -= half();
      }
      raf = requestAnimationFrame(tick);
    }
    raf = requestAnimationFrame(tick);

    const enter = () => { paused = true; };
    const leave = () => { paused = false; };
    const down = (e) => {
      dragging = true;
      moved = false;
      startX = e.pageX;
      startScroll = el.scrollLeft;
      el.style.cursor = 'grabbing';
    };
    const move = (e) => {
      if (!dragging) return;
      const dx = e.pageX - startX;
      if (Math.abs(dx) > 5) moved = true;
      let ns = startScroll - dx;
      const h = half();
      if (ns < 0) { ns += h; startScroll += h; } else if (ns >= h) { ns -= h; startScroll -= h; }
      el.scrollLeft = ns;
    };
    const up = () => { dragging = false; el.style.cursor = ''; };
    // Capture phase: if the pointer dragged, stop the click before it reaches
    // the document-level video-lightbox listener.
    const clickCap = (e) => {
      if (moved) { e.preventDefault(); e.stopPropagation(); moved = false; }
    };
    const wheel = (e) => {
      if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) { el.scrollLeft += e.deltaY; e.preventDefault(); }
    };

    el.addEventListener('mouseenter', enter);
    el.addEventListener('mouseleave', leave);
    el.addEventListener('mousedown', down);
    window.addEventListener('mousemove', move);
    window.addEventListener('mouseup', up);
    el.addEventListener('click', clickCap, true);
    el.addEventListener('wheel', wheel, { passive: false });

    return () => {
      cancelAnimationFrame(raf);
      el.removeEventListener('mouseenter', enter);
      el.removeEventListener('mouseleave', leave);
      el.removeEventListener('mousedown', down);
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseup', up);
      el.removeEventListener('click', clickCap, true);
      el.removeEventListener('wheel', wheel);
    };
  }, []);

  return (
    <>
    <VideoLightbox />
    <div className="flex flex-col w-full selection:bg-primary selection:text-on-primary">
      <section className="relative w-full min-h-[calc(100vh-5rem)] flex flex-col justify-between overflow-hidden bg-surface-container-lowest">
        <div className="absolute inset-0 z-0">
          <div className="w-full h-full bg-cover bg-center filter contrast-125 brightness-75 scale-105 transition-transform duration-1000 ease-out" data-alt="Editorial black and white haute couture wedding portrait of an elegant couple bathed in dramatic golden hour backlight through ancient olive trees, soft atmospheric smoke, 35mm film grain, high fashion cinematography reminiscent of Vogue Sposa cover spread, ultra high contrast" id="hero-bg-zoom" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida/AEtjO1Xn67NRSNMIirZfjhvqVUMhUBOmQxRqb79KvO_Orhpyaz3lqZUBt8SdgVbs8ysloTH3lSroysNvq_isSEwfsSXtpSupLx77t9LoOEoACPNs59XyGgfMLjs1Ie1oandYL-8Ij89uoqQHGYEy6saUpSj0TJveOF6sxHnlFxOp-4RF0cvQxGcFeLLXzp926UsSdkyh0a7APIQO_aO-tTlTEwOLVFKmpxGFrt2z6mvu8ry6fUg5F07zklN5bZrZ')" }}></div>
          <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-surface-container-lowest/50 to-surface-container-lowest/80"></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(212,175,55,0.08)_0%,_transparent_60%,_rgba(14,14,14,0.9)_100%)]"></div>
        </div>
        <GoldenDust />
        <div className="relative z-10 w-full px-margin-mobile lg:px-margin-desktop pt-space-xl flex justify-between items-center text-outline">
          <div className="flex items-center gap-space-xs font-metadata-dense text-metadata-dense tracking-widest uppercase">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse shadow-[0_0_8px_#f2ca50]"></span>
            <span className="text-secondary font-medium">ARCHIVE EST. 2019 / WORLDWIDE COMMISSIONS</span>
          </div>
          <div className="font-metadata-dense text-metadata-dense tracking-widest uppercase hidden sm:block border border-primary-container/30 px-3 py-1 rounded-full bg-surface-container-lowest/60 text-secondary backdrop-blur-md">
        35MM • ARRI RAW • ANAMORPHIC GOLD EDITION
      </div>
        </div>
        <div className="relative z-10 w-full px-margin-mobile lg:px-margin-desktop py-space-3xl flex flex-col justify-center">
          <div className="max-w-6xl relative">
            <div className="absolute -top-16 -left-16 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none"></div>
            <p className="font-label-uppercase text-label-uppercase tracking-widest text-secondary uppercase mb-space-sm flex items-center gap-space-sm font-semibold">
<span className="w-8 h-[1.5px] bg-gradient-to-r from-primary to-transparent inline-block"></span>
          FINE ART CINEMATOGRAPHY
        </p>
            <h1 className="font-display-hero text-display-hero-mobile md:text-display-hero uppercase tracking-tighter text-on-surface font-light leading-none">
          YOUR STORY.<br />
<span className="italic font-normal bg-gradient-to-r from-[#ffe088] via-[#f2ca50] to-[#d4af37] bg-clip-text text-transparent drop-shadow-[0_2px_18px_rgba(212,175,55,0.25)]">OUR FRAME.</span>
</h1>
            <p className="mt-space-lg font-body-lg text-body-lg text-on-surface max-w-2xl font-light leading-relaxed">
          Cinematic wedding photography &amp; films for couples who want their story to feel like a movie.
        </p>
            <div className="mt-space-sm font-editorial-quote text-editorial-quote text-on-surface-variant/90 italic max-w-2xl font-light border-l-2 border-primary-container/60 pl-space-md my-space-md">
          “At SliceX Films, we don’t just capture couples—we cast them. Every couple is the lead character in their own story.”
        </div>
            <div className="mt-space-2xl flex flex-wrap items-center gap-space-md">
              <a className="px-space-xl py-space-sm bg-gradient-to-r from-[#d4af37] via-[#f2ca50] to-[#ffe088] text-[#241a00] font-label-uppercase text-label-uppercase uppercase font-bold rounded-full shadow-[0_0_25px_rgba(212,175,55,0.35)] hover:shadow-[0_0_35px_rgba(212,175,55,0.6)] hover:scale-[1.02] transition-all tracking-widest" href="#featured-work">
            VIEW OUR WORK
          </a>
              <a className="px-space-xl py-space-sm bg-surface-container-high/60 backdrop-blur-md text-primary border border-primary/40 font-label-uppercase text-label-uppercase uppercase rounded-full hover:bg-primary/10 hover:border-primary transition-all tracking-widest shadow-[0_0_15px_rgba(212,175,55,0.1)]" href="#commission">
            BOOK YOUR DATE
          </a>
            </div>
          </div>
        </div>
        <div className="relative z-10 w-full px-margin-mobile lg:px-margin-desktop pb-space-lg flex justify-between items-end border-t border-primary-container/20 pt-space-md">
          <div className="font-metadata-dense text-metadata-dense uppercase text-outline tracking-widest flex items-center gap-2">
        SLICEX FILMS <span className="text-primary">•</span> CAPTURE <span className="text-primary">•</span> CREATE <span className="text-primary">•</span> INSPIRE
      </div>
          <a className="flex items-center gap-space-xs font-metadata-dense text-metadata-dense uppercase text-primary tracking-widest hover:text-secondary transition-colors" href="#about-slicex">
            <span>SCROLL TO EXPLORE</span>
            <span className="material-symbols-outlined text-[14px] animate-bounce text-primary">south</span>
          </a>
        </div>
      </section>
      <section className="w-full bg-surface py-space-5xl px-margin-mobile lg:px-margin-desktop border-b border-primary-container/20 relative" id="about-slicex">
        <div className="absolute right-0 top-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-desktop items-start">
          <div className="lg:col-span-5 flex flex-col space-y-space-md">
            <span className="font-numerical-index text-numerical-index text-secondary tracking-widest uppercase font-semibold">01 / ABOUT SLICEX</span>
            <h2 className="font-display-lg text-display-lg-mobile md:text-display-lg uppercase font-light text-on-surface tracking-tight leading-[1.05]">
          WE DON’T JUST CAPTURE MOMENTS.<br />
<span className="italic font-normal bg-gradient-to-r from-[#ffe088] via-[#f2ca50] to-[#d4af37] bg-clip-text text-transparent">WE CREATE STORIES.</span>
</h2>
            <div className="pt-space-lg">
              <div className="w-16 h-[2px] bg-gradient-to-r from-primary to-transparent mb-space-md"></div>
              <span className="font-label-uppercase text-label-uppercase text-outline tracking-widest uppercase">DIRECTOR’S STATEMENT • CUT 2025</span>
            </div>
          </div>
          <div className="lg:col-span-7 flex flex-col justify-between space-y-space-xl lg:pl-space-xl">
            <div className="space-y-space-lg">
              <blockquote className="font-editorial-quote text-editorial-quote text-on-surface font-light leading-relaxed bg-surface-container/30 border-l-2 border-primary p-space-lg rounded-r-lg">
            “At SliceX Films, we don’t just capture couples—we cast them. Whether it’s a shy smile or an inside joke, we see every couple as the lead characters in their own story. It’s never about how they look, dress, or pose. To us, every couple is a hero and heroine—worthy of their own movie.”
          </blockquote>
              <p className="font-body-lg text-body-lg text-on-surface-variant font-light leading-relaxed">
            SliceX Films is about turning ordinary love stories into timeless visuals. Because in our lens, everyone deserves to feel like they’re on the big screen. We combine the pacing of indie cinema with the grandeur of high-fashion print editorial.
          </p>
            </div>
            <div className="pt-space-md flex items-center justify-between">
              <a className="inline-flex items-center gap-space-sm font-label-uppercase text-label-uppercase uppercase text-primary border-b border-primary pb-1 hover:text-secondary hover:border-secondary transition-colors tracking-widest group" href="#services">
            EXPLORE OUR CRAFT
            <span className="material-symbols-outlined text-[14px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
</a>
              <div className="flex items-center gap-space-md font-metadata-dense text-metadata-dense text-secondary uppercase tracking-widest">
                <span>BHUBANESWAR</span>
                <span className="text-primary">•</span>
                <span>UDAIPUR</span>
                <span className="text-primary">•</span>
                <span>GLOBAL</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full bg-surface-container-lowest py-space-4xl overflow-hidden border-y border-amber-500/30 relative" id="film-roll-archive">
        <style dangerouslySetInnerHTML={{ __html: `
    @keyframes filmScroll {
      0% { transform: translateX(0); }
      100% { transform: translateX(-50%); }
    }
    .film-marquee-track {
      display: flex;
      width: max-content;
      animation: filmScroll 38s linear infinite;
    }
    .film-strip-wrapper:hover .film-marquee-track {
      animation-play-state: paused;
    }
    .sprocket-hole {
      width: 12px;
      height: 18px;
      border-radius: 2px;
      background: #090909;
      border: 1px solid rgba(212,175,55,0.25);
      flex-shrink: 0;
    }
  ` }} />
        <div className="w-full px-margin-mobile lg:px-margin-desktop mb-space-2xl flex flex-col md:flex-row md:items-end justify-between gap-space-md">
          <div>
            <div className="flex items-center gap-space-xs mb-space-2xs font-metadata-dense text-metadata-dense uppercase tracking-widest text-secondary">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse shadow-[0_0_8px_#f2ca50]"></span>
              <span>ARCHIVAL NEGATIVE ROLL // KODAK VISION3 &amp; PORTRA 400 EMULSION</span>
            </div>
            <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg uppercase font-light text-primary tracking-tight">35MM CONTINUOUS FILM STRIP</h2>
          </div>
          <div className="flex items-center gap-space-lg font-metadata-dense text-metadata-dense uppercase tracking-widest text-outline">
            <span className="flex items-center gap-space-xs text-secondary font-medium"><span className="material-symbols-outlined text-[14px] text-primary">drag_indicator</span> DRAG TO EXPLORE · CLICK TO PLAY</span>
            <span className="hidden sm:inline-block text-primary-container/40">•</span>
            <span className="hidden sm:inline-block text-on-surface-variant">DIRECT CAMERA RAW ARCHIVE</span>
          </div>
        </div>
        <div id="filmStrip" className="relative w-full bg-[#14120e] py-3 shadow-[0_0_50px_rgba(0,0,0,0.8)] border-y border-amber-500/25 select-none overflow-x-auto cursor-grab" style={{ scrollbarWidth: 'none' }}>
          <div className="flex items-stretch w-max">
            {[0, 1].map((g) => (
              <div key={g} className="flex items-stretch flex-shrink-0" aria-hidden={g === 1 ? 'true' : undefined}>
                {FILM_STRIP.map((v, i) => (
                  <div key={v.id + '-' + g} data-yt={v.id} className="w-[360px] md:w-[420px] bg-[#12100d] border-x border-amber-900/30 flex flex-col px-3 py-2 flex-shrink-0 group cursor-pointer hover:bg-[#1a1712] transition-colors">
                    <div className="flex items-center justify-between py-1 px-1 text-[10px] tracking-[0.2em] font-mono text-amber-500/80">
                      <span>{v.stock}</span>
                      <div className="flex items-center gap-2">
                        <span className="sprocket-hole"></span>
                        <span className="sprocket-hole"></span>
                        <span className="sprocket-hole"></span>
                      </div>
                      <span className="text-primary font-bold">▷ {21 + i}A</span>
                    </div>
                    <div className="relative aspect-[3/2] overflow-hidden bg-black mt-1 mb-1 border border-amber-500/20 group-hover:border-primary/60 transition-colors shadow-inner">
                      <img alt={v.title} className="w-full h-full object-cover grayscale-[25%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out" src={filmThumb(v.id)} />
                      <span className="absolute top-2 left-2 bg-black/85 border border-primary/40 px-1.5 py-0.5 font-metadata-dense text-[9px] tracking-widest text-primary uppercase">EXP {String(i + 1).padStart(2, '0')}</span>
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <span className="w-10 h-10 rounded-full bg-primary/90 text-on-primary flex items-center justify-center shadow-lg">
                          <span className="material-symbols-outlined text-[22px]" style={{ fontVariationSettings: "'FILL' 1" }}>play_arrow</span>
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between py-1 px-1 text-[10px] tracking-[0.2em] font-mono text-amber-500/80">
                      <span className="text-secondary uppercase text-[9px] tracking-wider font-semibold">{v.title} // {v.tag}</span>
                      <div className="flex items-center gap-2">
                        <span className="sprocket-hole"></span>
                        <span className="sprocket-hole"></span>
                        <span className="sprocket-hole"></span>
                      </div>
                      <span className="text-outline">FRAME {21 + i}</span>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
        <div className="w-full px-margin-mobile lg:px-margin-desktop mt-space-lg flex flex-col sm:flex-row sm:items-center justify-between gap-space-xs text-outline font-metadata-dense text-metadata-dense uppercase tracking-widest">
          <div className="flex items-center gap-space-sm">
            <span className="inline-block w-2 h-2 rounded-full bg-primary shadow-[0_0_6px_#f2ca50]"></span>
            <span>CANON RF 50MM F/1.2L • LEICA M11 ARCHIVE • ARRI ALEXA MINI LF EMULSION</span>
          </div>
          <div className="flex items-center gap-space-md text-secondary">
            <span>DYNAMIC CMS CURATION ENABLED</span>
            <a className="text-primary hover:text-secondary transition-colors underline decoration-primary/40 underline-offset-4 font-semibold" href="#contact">INQUIRE NEGATIVES ACCESS →</a>
          </div>
        </div>
      </section>
      <section className="w-full bg-surface-container-low py-space-4xl px-margin-mobile lg:px-margin-desktop border-b border-primary-container/20" id="services">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-space-3xl pb-space-md border-b border-primary-container/20 gap-space-md">
          <div>
            <span className="font-numerical-index text-numerical-index text-secondary uppercase font-semibold">02 / SERVICES</span>
            <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg uppercase font-light text-primary tracking-tight mt-space-2xs">WHAT WE CREATE</h2>
          </div>
          <p className="font-body-sm text-body-sm text-on-surface-variant max-w-sm">
        Curated cinematic modalities executed on cinema prime lenses and calibrated archival grade finishing.
      </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-lg">
          <div className="group bg-surface-container p-space-xl flex flex-col justify-between min-h-[340px] hover:bg-surface-container-high border border-primary-container/15 hover:border-primary/50 transition-all duration-300 relative overflow-hidden">
            <div className="absolute -top-12 -right-12 w-28 h-28 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/15 transition-all"></div>
            <div className="flex justify-between items-start">
              <span className="font-numerical-index text-numerical-index text-secondary font-bold group-hover:text-primary transition-colors">01</span>
              <span className="material-symbols-outlined text-outline-variant group-hover:text-primary group-hover:rotate-45 transition-all text-[24px]">arrow_outward</span>
            </div>
            <div>
              <h3 className="font-headline-md text-headline-md uppercase text-on-surface group-hover:text-primary font-normal tracking-tight mb-space-sm transition-colors">WEDDING FILMS</h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant font-light leading-relaxed">
            Feature-length and theatrical cut wedding narratives recorded with multi-camera cinema rigs and custom film sound design.
          </p>
              <div className="mt-space-md pt-space-sm border-t border-primary-container/20 flex items-center justify-between font-metadata-dense text-metadata-dense text-secondary tracking-widest uppercase font-semibold">
                <span className="bg-primary/10 px-2 py-0.5 rounded text-primary">4K MASTER</span>
                <span>DIRECTOR’S CUT</span>
              </div>
            </div>
          </div>
          <div className="group bg-surface-container p-space-xl flex flex-col justify-between min-h-[340px] hover:bg-surface-container-high border border-primary-container/15 hover:border-primary/50 transition-all duration-300 relative overflow-hidden">
            <div className="absolute -top-12 -right-12 w-28 h-28 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/15 transition-all"></div>
            <div className="flex justify-between items-start">
              <span className="font-numerical-index text-numerical-index text-secondary font-bold group-hover:text-primary transition-colors">02</span>
              <span className="material-symbols-outlined text-outline-variant group-hover:text-primary group-hover:rotate-45 transition-all text-[24px]">arrow_outward</span>
            </div>
            <div>
              <h3 className="font-headline-md text-headline-md uppercase text-on-surface group-hover:text-primary font-normal tracking-tight mb-space-sm transition-colors">WEDDING PHOTOGRAPHY</h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant font-light leading-relaxed">
            High-fashion editorial stills and authentic documentary photojournalism that captures raw, unprompted elegance.
          </p>
              <div className="mt-space-md pt-space-sm border-t border-primary-container/20 flex items-center justify-between font-metadata-dense text-metadata-dense text-secondary tracking-widest uppercase font-semibold">
                <span className="bg-primary/10 px-2 py-0.5 rounded text-primary">FINE ART PRINTS</span>
                <span>HIGH RES ARCHIVE</span>
              </div>
            </div>
          </div>
          <div className="group bg-surface-container p-space-xl flex flex-col justify-between min-h-[340px] hover:bg-surface-container-high border border-primary-container/15 hover:border-primary/50 transition-all duration-300 relative overflow-hidden">
            <div className="absolute -top-12 -right-12 w-28 h-28 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/15 transition-all"></div>
            <div className="flex justify-between items-start">
              <span className="font-numerical-index text-numerical-index text-secondary font-bold group-hover:text-primary transition-colors">03</span>
              <span className="material-symbols-outlined text-outline-variant group-hover:text-primary group-hover:rotate-45 transition-all text-[24px]">arrow_outward</span>
            </div>
            <div>
              <h3 className="font-headline-md text-headline-md uppercase text-on-surface group-hover:text-primary font-normal tracking-tight mb-space-sm transition-colors">PRE-WEDDING FILMS</h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant font-light leading-relaxed">
            Conceptual short cinematic vignettes built around the couple’s intimate genesis story, curated styling, and destination backdrops.
          </p>
              <div className="mt-space-md pt-space-sm border-t border-primary-container/20 flex items-center justify-between font-metadata-dense text-metadata-dense text-secondary tracking-widest uppercase font-semibold">
                <span className="bg-primary/10 px-2 py-0.5 rounded text-primary">STORYBOARDED</span>
                <span>DESTINATION</span>
              </div>
            </div>
          </div>
          <div className="group bg-surface-container p-space-xl flex flex-col justify-between min-h-[340px] hover:bg-surface-container-high border border-primary-container/15 hover:border-primary/50 transition-all duration-300 relative overflow-hidden">
            <div className="absolute -top-12 -right-12 w-28 h-28 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/15 transition-all"></div>
            <div className="flex justify-between items-start">
              <span className="font-numerical-index text-numerical-index text-secondary font-bold group-hover:text-primary transition-colors">04</span>
              <span className="material-symbols-outlined text-outline-variant group-hover:text-primary group-hover:rotate-45 transition-all text-[24px]">arrow_outward</span>
            </div>
            <div>
              <h3 className="font-headline-md text-headline-md uppercase text-on-surface group-hover:text-primary font-normal tracking-tight mb-space-sm transition-colors">ENGAGEMENT STORIES</h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant font-light leading-relaxed">
            Intimate portraits and audio documentary tracking the immediate chapter of commitment, family bonding, and candid exchange.
          </p>
              <div className="mt-space-md pt-space-sm border-t border-primary-container/20 flex items-center justify-between font-metadata-dense text-metadata-dense text-secondary tracking-widest uppercase font-semibold">
                <span className="bg-primary/10 px-2 py-0.5 rounded text-primary">INTIMATE SOIRÉE</span>
                <span>AUDIO VOWS</span>
              </div>
            </div>
          </div>
          <div className="group bg-surface-container p-space-xl flex flex-col justify-between min-h-[340px] hover:bg-surface-container-high border border-primary-container/15 hover:border-primary/50 transition-all duration-300 relative overflow-hidden">
            <div className="absolute -top-12 -right-12 w-28 h-28 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/15 transition-all"></div>
            <div className="flex justify-between items-start">
              <span className="font-numerical-index text-numerical-index text-secondary font-bold group-hover:text-primary transition-colors">05</span>
              <span className="material-symbols-outlined text-outline-variant group-hover:text-primary group-hover:rotate-45 transition-all text-[24px]">arrow_outward</span>
            </div>
            <div>
              <h3 className="font-headline-md text-headline-md uppercase text-on-surface group-hover:text-primary font-normal tracking-tight mb-space-sm transition-colors">CINEMATIC REELS</h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant font-light leading-relaxed">
            High-velocity vertical teasers engineered for digital showcase without losing cinematic grade color science and motion blur.
          </p>
              <div className="mt-space-md pt-space-sm border-t border-primary-container/20 flex items-center justify-between font-metadata-dense text-metadata-dense text-secondary tracking-widest uppercase font-semibold">
                <span className="bg-primary/10 px-2 py-0.5 rounded text-primary">9:16 VERTICAL</span>
                <span>FAST-TURNAROUND</span>
              </div>
            </div>
          </div>
          <div className="group bg-surface-container p-space-xl flex flex-col justify-between min-h-[340px] hover:bg-surface-container-high border border-primary-container/15 hover:border-primary/50 transition-all duration-300 relative overflow-hidden">
            <div className="absolute -top-12 -right-12 w-28 h-28 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/15 transition-all"></div>
            <div className="flex justify-between items-start">
              <span className="font-numerical-index text-numerical-index text-secondary font-bold group-hover:text-primary transition-colors">06</span>
              <span className="material-symbols-outlined text-outline-variant group-hover:text-primary group-hover:rotate-45 transition-all text-[24px]">arrow_outward</span>
            </div>
            <div>
              <h3 className="font-headline-md text-headline-md uppercase text-on-surface group-hover:text-primary font-normal tracking-tight mb-space-sm transition-colors">DRONE COVERAGE</h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant font-light leading-relaxed">
            Certified aerial pilotage capturing sprawling palace architecture, mountain landscapes, and vast procession scales from above.
          </p>
              <div className="mt-space-md pt-space-sm border-t border-primary-container/20 flex items-center justify-between font-metadata-dense text-metadata-dense text-secondary tracking-widest uppercase font-semibold">
                <span className="bg-primary/10 px-2 py-0.5 rounded text-primary">PRO-RES CINEMA</span>
                <span>ARCHITECTURAL SCALE</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full bg-surface py-space-5xl px-margin-mobile lg:px-margin-desktop relative overflow-hidden" id="featured-work">
        <div className="absolute left-1/3 top-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2"></div>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-space-2xl gap-space-md relative z-10">
          <div>
            <span className="font-numerical-index text-numerical-index text-secondary uppercase font-semibold">03 / EXHIBITION</span>
            <h2 className="font-display-lg text-display-lg-mobile md:text-display-lg uppercase font-light text-primary tracking-tight mt-space-2xs">FEATURED WORK</h2>
          </div>
          <div className="flex flex-wrap items-center gap-space-xs font-metadata-dense text-metadata-dense tracking-widest uppercase">
            <button className="px-space-md py-space-xs bg-gradient-to-r from-primary-container to-primary text-on-primary font-bold rounded-full shadow-[0_0_15px_rgba(212,175,55,0.3)] transition-all">ALL</button>
            <button className="px-space-md py-space-xs bg-surface-container text-on-surface-variant hover:text-primary border border-primary-container/20 hover:border-primary/40 rounded-full transition-colors">WEDDINGS</button>
            <button className="px-space-md py-space-xs bg-surface-container text-on-surface-variant hover:text-primary border border-primary-container/20 hover:border-primary/40 rounded-full transition-colors">PRE-WEDDINGS</button>
            <button className="px-space-md py-space-xs bg-surface-container text-on-surface-variant hover:text-primary border border-primary-container/20 hover:border-primary/40 rounded-full transition-colors">ENGAGEMENTS</button>
            <button className="px-space-md py-space-xs bg-surface-container text-on-surface-variant hover:text-primary border border-primary-container/20 hover:border-primary/40 rounded-full transition-colors">FILMS</button>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-stretch relative z-10">
          <div data-yt="BApJaloacXg" className="lg:col-span-8 group relative overflow-hidden bg-surface-container min-h-[480px] lg:min-h-[560px] flex flex-col justify-end p-space-xl border border-primary-container/20 hover:border-primary/50 transition-all rounded-sm shadow-xl cursor-pointer">
            <img alt="Sanjeeb & Asha wedding film still" className="absolute inset-0 w-full h-full object-cover grayscale-[25%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out" src="https://i.ytimg.com/vi/BApJaloacXg/maxresdefault.jpg" />
            <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-surface-container-lowest/40 to-transparent"></div>
            <div className="relative z-10 flex flex-col sm:flex-row sm:items-end justify-between gap-space-md">
              <div>
                <span className="font-metadata-dense text-metadata-dense text-primary font-bold tracking-widest uppercase block mb-space-2xs">01 / FEATURED FILM</span>
                <h3 className="font-headline-lg text-headline-lg uppercase text-primary-fixed font-light tracking-tight group-hover:text-primary transition-colors">SANJEEB &amp; ASHA — FULL WEDDING FILM</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant mt-space-2xs">A full three-act wedding film — every ritual, toast, and unscripted tear.</p>
              </div>
              <a className="shrink-0 inline-flex items-center gap-space-xs font-label-uppercase text-label-uppercase uppercase text-primary border-b border-primary pb-1 group-hover:text-secondary group-hover:border-secondary transition-colors tracking-widest font-semibold" href="#">
            VIEW FILM <span className="material-symbols-outlined text-[14px]">play_arrow</span>
</a>
            </div>
          </div>
          <div data-yt="8NngCj7b_uA" className="lg:col-span-4 group relative overflow-hidden bg-surface-container min-h-[480px] lg:min-h-[560px] flex flex-col justify-end p-space-xl border border-primary-container/20 hover:border-primary/50 transition-all rounded-sm shadow-xl cursor-pointer">
            <div className="absolute inset-0 w-full h-full bg-cover bg-center grayscale-[30%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out" style={{ backgroundImage: "url('https://i.ytimg.com/vi/8NngCj7b_uA/maxresdefault.jpg')" }}></div>
            <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-surface-container-lowest/50 to-transparent"></div>
            <div className="relative z-10">
              <span className="font-metadata-dense text-metadata-dense text-primary font-bold tracking-widest uppercase block mb-space-2xs">02 / WEDDING FILM</span>
              <h3 className="font-headline-md text-headline-md uppercase text-primary-fixed font-light tracking-tight group-hover:text-primary transition-colors">ALISHA DASH</h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant mt-space-2xs">Warm, candid storytelling — the day exactly as it unfolded.</p>
              <div className="mt-space-md">
                <span className="font-label-uppercase text-label-uppercase text-secondary tracking-widest uppercase group-hover:text-primary transition-colors font-semibold">WATCH FILM →</span>
              </div>
            </div>
          </div>
          <div data-yt="r4KTSRpp17s" className="lg:col-span-6 group relative overflow-hidden bg-surface-container min-h-[380px] flex flex-col justify-end p-space-xl border border-primary-container/20 hover:border-primary/50 transition-all rounded-sm shadow-xl cursor-pointer">
            <div className="absolute inset-0 w-full h-full bg-cover bg-center grayscale-[35%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out" style={{ backgroundImage: "url('https://i.ytimg.com/vi/r4KTSRpp17s/maxresdefault.jpg')" }}></div>
            <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-surface-container-lowest/40 to-transparent"></div>
            <div className="relative z-10">
              <span className="font-metadata-dense text-metadata-dense text-primary font-bold tracking-widest uppercase block mb-space-2xs">03 / PRE-WEDDING</span>
              <h3 className="font-headline-md text-headline-md uppercase text-primary-fixed font-light tracking-tight group-hover:text-primary transition-colors">DILLU &amp; DIKSHYA</h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant mt-space-2xs">A cinematic pre-wedding love story shot on location.</p>
              <div className="mt-space-md">
                <span className="font-label-uppercase text-label-uppercase text-secondary tracking-widest uppercase group-hover:text-primary transition-colors font-semibold">WATCH TEASER →</span>
              </div>
            </div>
          </div>
          <div data-yt="6GrJci58sFQ" className="lg:col-span-6 group relative overflow-hidden bg-surface-container min-h-[380px] flex flex-col justify-end p-space-xl border border-primary-container/20 hover:border-primary/50 transition-all rounded-sm shadow-xl cursor-pointer">
            <div className="absolute inset-0 w-full h-full bg-cover bg-center grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out" style={{ backgroundImage: "url('https://i.ytimg.com/vi/6GrJci58sFQ/maxresdefault.jpg')" }}></div>
            <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-surface-container-lowest/40 to-transparent"></div>
            <div className="relative z-10">
              <span className="font-metadata-dense text-metadata-dense text-primary font-bold tracking-widest uppercase block mb-space-2xs">04 / ENGAGEMENT</span>
              <h3 className="font-headline-md text-headline-md uppercase text-primary-fixed font-light tracking-tight group-hover:text-primary transition-colors">ABHISHEK &amp; NEHA</h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant mt-space-2xs">An intimate engagement celebration captured with a filmmaker’s eye.</p>
              <div className="mt-space-md">
                <span className="font-label-uppercase text-label-uppercase text-secondary tracking-widest uppercase group-hover:text-primary transition-colors font-semibold">WATCH FILM →</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full bg-surface-container-lowest py-space-5xl px-margin-mobile lg:px-margin-desktop border-y border-primary-container/20 relative">
        <div className="max-w-4xl mx-auto text-center mb-space-3xl">
          <span className="font-numerical-index text-numerical-index text-secondary uppercase tracking-widest font-semibold">04 / THE SCREENING ROOM</span>
          <h2 className="font-display-lg text-display-lg-mobile md:text-display-lg uppercase font-light text-primary tracking-tight mt-space-2xs">CINEMATIC MASTERPIECES</h2>
          <p className="font-body-md text-body-md text-on-surface-variant mt-space-sm">Experience our bespoke 4K theatrical edits calibrated for acoustic precision and high-dynamic-range color artistry.</p>
        </div>
        <div data-yt={FEATURE_FILM.id} className="relative w-full aspect-video md:max-h-[700px] bg-surface-container overflow-hidden group cursor-pointer shadow-[0_10px_50px_rgba(0,0,0,0.8)] border border-primary-container/25">
          <div className="absolute inset-0 w-full h-full bg-cover bg-center group-hover:scale-102 transition-transform duration-700" style={{ backgroundImage: `url('${thumb(FEATURE_FILM.id)}')` }}></div>
          <div className="absolute inset-0 bg-surface-container-lowest/40 group-hover:bg-surface-container-lowest/20 transition-colors"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <button aria-label="Play Master Film" className="w-24 h-24 rounded-full bg-gradient-to-tr from-[#d4af37] to-[#f2ca50] text-[#241a00] flex items-center justify-center shadow-[0_0_40px_rgba(212,175,55,0.6)] group-hover:scale-110 group-hover:shadow-[0_0_60px_rgba(212,175,55,0.9)] transition-all duration-300">
              <span className="material-symbols-outlined text-[42px] translate-x-0.5">play_arrow</span>
            </button>
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-space-md lg:p-space-lg bg-gradient-to-t from-surface-container-lowest via-surface-container-lowest/80 to-transparent flex flex-col gap-space-xs">
            <div className="flex items-center justify-between text-secondary font-metadata-dense text-metadata-dense uppercase tracking-widest font-semibold">
              <span className="text-primary-fixed">{FEATURE_FILM.title.toUpperCase()}</span>
              <span className="text-primary">WATCH ON YOUTUBE</span>
            </div>
            <div className="w-full h-1 bg-surface-container-highest rounded-full overflow-hidden relative cursor-pointer border border-primary-container/20">
              <div className="h-full bg-gradient-to-r from-primary-container to-primary w-1/4 rounded-full shadow-[0_0_8px_#f2ca50]"></div>
            </div>
          </div>
        </div>
        <div className="mt-space-2xl grid grid-cols-1 md:grid-cols-3 gap-space-lg">
          <div className="p-space-lg bg-surface-container/50 hover:bg-surface-container border border-primary-container/15 hover:border-primary/40 transition-all flex flex-col justify-between group">
            <div>
              <span className="font-metadata-dense text-metadata-dense text-secondary tracking-widest uppercase font-semibold">FILM #104 • 14 MIN</span>
              <h4 className="font-headline-sm text-headline-sm uppercase text-primary group-hover:text-secondary transition-colors font-light mt-space-2xs">SHREYA &amp; ROHAN</h4>
              <p className="font-body-sm text-body-sm text-on-surface-variant mt-space-2xs">The Grand Bikaner Fort Extravaganza</p>
            </div>
            <div className="mt-space-lg flex items-center justify-between font-label-uppercase text-label-uppercase text-primary tracking-widest font-semibold">
              <span>VIEW TEASER</span>
              <span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </div>
          </div>
          <div className="p-space-lg bg-surface-container/50 hover:bg-surface-container border border-primary-container/15 hover:border-primary/40 transition-all flex flex-col justify-between group">
            <div>
              <span className="font-metadata-dense text-metadata-dense text-secondary tracking-widest uppercase font-semibold">FILM #105 • 19 MIN</span>
              <h4 className="font-headline-sm text-headline-sm uppercase text-primary group-hover:text-secondary transition-colors font-light mt-space-2xs">ARJUN &amp; NIKITA</h4>
              <p className="font-body-sm text-body-sm text-on-surface-variant mt-space-2xs">Intimate Forest Sanctuary &amp; Vows</p>
            </div>
            <div className="mt-space-lg flex items-center justify-between font-label-uppercase text-label-uppercase text-primary tracking-widest font-semibold">
              <span>VIEW TEASER</span>
              <span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </div>
          </div>
          <div className="p-space-lg bg-surface-container/50 hover:bg-surface-container border border-primary-container/15 hover:border-primary/40 transition-all flex flex-col justify-between group">
            <div>
              <span className="font-metadata-dense text-metadata-dense text-secondary tracking-widest uppercase font-semibold">FILM #106 • 22 MIN</span>
              <h4 className="font-headline-sm text-headline-sm uppercase text-primary group-hover:text-secondary transition-colors font-light mt-space-2xs">VARUN &amp; SIMRAN</h4>
              <p className="font-body-sm text-body-sm text-on-surface-variant mt-space-2xs">Royal Haveli Celebration &amp; Baraat</p>
            </div>
            <div className="mt-space-lg flex items-center justify-between font-label-uppercase text-label-uppercase text-primary tracking-widest font-semibold">
              <span>VIEW TEASER</span>
              <span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full bg-surface-container-lowest py-space-5xl px-margin-mobile lg:px-margin-desktop flex flex-col justify-center items-center text-center overflow-hidden relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(212,175,55,0.08)_0%,_transparent_70%)] pointer-events-none"></div>
        <GoldenDust />
        <div className="max-w-5xl relative z-10">
          <span className="font-label-uppercase text-label-uppercase text-secondary tracking-widest uppercase block mb-space-lg font-semibold">THE CORE CREED</span>
          <h2 className="font-display-hero text-display-hero-mobile md:text-display-hero uppercase tracking-tighter text-on-surface font-light leading-[0.95]">
        EVERY COUPLE<br />
        HAS A STORY.<br />
<span className="bg-gradient-to-r from-[#ffe088] via-[#f2ca50] to-[#d4af37] bg-clip-text text-transparent italic font-normal">WE MAKE SURE</span><br />
        IT FEELS LIKE<br />
<span className="text-primary font-normal">A MOVIE.</span>
</h2>
          <div className="mt-space-2xl w-24 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent mx-auto"></div>
          <p className="mt-space-lg font-metadata-dense text-metadata-dense text-secondary tracking-widest uppercase font-semibold">
        SLICEX FILMS PRODUCTION HOUSE • FINE CINEMATOGRAPHY
      </p>
        </div>
      </section>
      <section className="w-full bg-surface py-space-5xl px-margin-mobile lg:px-margin-desktop border-t border-primary-container/20">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-space-3xl pb-space-md border-b border-primary-container/20 gap-space-md">
          <div>
            <span className="font-numerical-index text-numerical-index text-secondary uppercase font-semibold">05 / THE METHOD</span>
            <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg uppercase font-light text-primary tracking-tight mt-space-2xs">HOW WE ARCHIVE YOUR DAY</h2>
          </div>
          <p className="font-body-sm text-body-sm text-on-surface-variant max-w-sm">
        From the initial script session to the hand-delivered 4K master archive box.
      </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-space-md">
          <div className="bg-surface-container p-space-lg flex flex-col justify-between min-h-[280px] border border-primary-container/15 hover:border-primary/40 transition-all group">
            <span className="font-display-lg text-display-lg uppercase text-primary-container/40 font-light leading-none group-hover:text-primary transition-colors">01</span>
            <div>
              <h4 className="font-headline-sm text-headline-sm uppercase text-primary-fixed font-light mb-space-2xs group-hover:text-primary transition-colors">MEET</h4>
              <p className="font-body-sm text-body-sm text-on-surface-variant font-light">
            We meet over espresso or video link to understand your quirks, your tempo, and the personal dynamics you care about.
          </p>
            </div>
          </div>
          <div className="bg-surface-container p-space-lg flex flex-col justify-between min-h-[280px] border border-primary-container/15 hover:border-primary/40 transition-all group">
            <span className="font-display-lg text-display-lg uppercase text-primary-container/40 font-light leading-none group-hover:text-primary transition-colors">02</span>
            <div>
              <h4 className="font-headline-sm text-headline-sm uppercase text-primary-fixed font-light mb-space-2xs group-hover:text-primary transition-colors">PLAN</h4>
              <p className="font-body-sm text-body-sm text-on-surface-variant font-light">
            Architecting camera angles, light timing, mood boards, wardrobe harmonies, and timeline synchronization.
          </p>
            </div>
          </div>
          <div className="bg-surface-container p-space-lg flex flex-col justify-between min-h-[280px] border border-primary-container/15 hover:border-primary/40 transition-all group">
            <span className="font-display-lg text-display-lg uppercase text-primary-container/40 font-light leading-none group-hover:text-primary transition-colors">03</span>
            <div>
              <h4 className="font-headline-sm text-headline-sm uppercase text-primary-fixed font-light mb-space-2xs group-hover:text-primary transition-colors">CAPTURE</h4>
              <p className="font-body-sm text-body-sm text-on-surface-variant font-light">
            Discreet, non-invasive cinema coverage. We observe raw authenticity without intrusive studio orchestrations.
          </p>
            </div>
          </div>
          <div className="bg-surface-container p-space-lg flex flex-col justify-between min-h-[280px] border border-primary-container/15 hover:border-primary/40 transition-all group">
            <span className="font-display-lg text-display-lg uppercase text-primary-container/40 font-light leading-none group-hover:text-primary transition-colors">04</span>
            <div>
              <h4 className="font-headline-sm text-headline-sm uppercase text-primary-fixed font-light mb-space-2xs group-hover:text-primary transition-colors">CREATE</h4>
              <p className="font-body-sm text-body-sm text-on-surface-variant font-light">
            Surgical editorial pacing, analog-feel color grading, bespoke film score licensing, and sound engineering.
          </p>
            </div>
          </div>
          <div className="bg-surface-container p-space-lg flex flex-col justify-between min-h-[280px] border border-primary-container/15 hover:border-primary/40 transition-all group">
            <span className="font-display-lg text-display-lg uppercase text-primary-container/40 font-light leading-none group-hover:text-primary transition-colors">05</span>
            <div>
              <h4 className="font-headline-sm text-headline-sm uppercase text-primary-fixed font-light mb-space-2xs group-hover:text-primary transition-colors">DELIVER</h4>
              <p className="font-body-sm text-body-sm text-on-surface-variant font-light">
            Secure private streaming vault plus a luxury keepsake archive drive crafted for generations of viewing.
          </p>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full bg-surface-container-low py-space-5xl px-margin-mobile lg:px-margin-desktop border-t border-primary-container/20" id="commission">
        <div className="max-w-4xl mb-space-3xl">
          <span className="font-numerical-index text-numerical-index text-secondary uppercase tracking-widest font-semibold">06 / INVESTMENT COMMISSIONS</span>
          <h2 className="font-display-lg text-display-lg-mobile md:text-display-lg uppercase font-light text-primary tracking-tight mt-space-2xs">CURATED OFFERINGS</h2>
          <p className="font-body-md text-body-md text-on-surface-variant mt-space-sm">
        Transparent commission structures tailored for intimate gatherings to grand royal multi-day destination events.
      </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-lg mb-space-4xl">
          <div className="bg-surface-container p-space-xl flex flex-col justify-between relative hover:bg-surface-container-high border border-primary-container/20 hover:border-primary/50 transition-all">
            <div>
              <span className="font-metadata-dense text-metadata-dense text-secondary tracking-widest uppercase font-semibold">OPTION 01</span>
              <h3 className="font-headline-sm text-headline-sm uppercase text-primary font-light mt-space-2xs">PRE-WEDDING FILM</h3>
              <div className="mt-space-lg mb-space-lg">
                <span className="font-display-lg-mobile text-display-lg-mobile font-normal text-primary-fixed">₹35,000</span>
                <span className="font-metadata-dense text-metadata-dense text-secondary uppercase block mt-1 font-semibold">STARTING COMMISSION</span>
              </div>
              <ul className="space-y-space-xs font-body-sm text-body-sm text-on-surface-variant border-t border-primary-container/20 pt-space-md">
                <li className="flex items-center gap-space-xs"><span className="material-symbols-outlined text-[16px] text-primary">check</span> 1 Day Conceptual Shoot</li>
                <li className="flex items-center gap-space-xs"><span className="material-symbols-outlined text-[16px] text-primary">check</span> 1-2 Minute Cinematic Teaser</li>
                <li className="flex items-center gap-space-xs"><span className="material-symbols-outlined text-[16px] text-primary">check</span> 25 Editorial Edited Stills</li>
                <li className="flex items-center gap-space-xs"><span className="material-symbols-outlined text-[16px] text-primary">check</span> Drone Aerial Footage</li>
              </ul>
            </div>
            <div className="pt-space-xl">
              <a className="w-full inline-block text-center py-space-sm bg-surface-container-highest border border-primary-container/40 text-primary font-label-uppercase text-label-uppercase uppercase rounded-full hover:bg-primary hover:text-on-primary hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-all tracking-widest font-semibold" href="tel:+919827122620">
            INQUIRE TIER
          </a>
            </div>
          </div>
          <div className="bg-surface-container p-space-xl flex flex-col justify-between relative hover:bg-surface-container-high border border-primary-container/20 hover:border-primary/50 transition-all">
            <div>
              <span className="font-metadata-dense text-metadata-dense text-secondary tracking-widest uppercase font-semibold">OPTION 02</span>
              <h3 className="font-headline-sm text-headline-sm uppercase text-primary font-light mt-space-2xs">ENGAGEMENT ARCHIVE</h3>
              <div className="mt-space-lg mb-space-lg">
                <span className="font-display-lg-mobile text-display-lg-mobile font-normal text-primary-fixed">₹35,000</span>
                <span className="font-metadata-dense text-metadata-dense text-secondary uppercase block mt-1 font-semibold">FLAT COMMISSION</span>
              </div>
              <ul className="space-y-space-xs font-body-sm text-body-sm text-on-surface-variant border-t border-primary-container/20 pt-space-md">
                <li className="flex items-center gap-space-xs"><span className="material-symbols-outlined text-[16px] text-primary">check</span> Full Ceremony Coverage</li>
                <li className="flex items-center gap-space-xs"><span className="material-symbols-outlined text-[16px] text-primary">check</span> Traditional + Candid Photo</li>
                <li className="flex items-center gap-space-xs"><span className="material-symbols-outlined text-[16px] text-primary">check</span> 3-4 Minute Film Highlight</li>
                <li className="flex items-center gap-space-xs"><span className="material-symbols-outlined text-[16px] text-primary">check</span> 4K Delivery Within 14 Days</li>
              </ul>
            </div>
            <div className="pt-space-xl">
              <a className="w-full inline-block text-center py-space-sm bg-surface-container-highest border border-primary-container/40 text-primary font-label-uppercase text-label-uppercase uppercase rounded-full hover:bg-primary hover:text-on-primary hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-all tracking-widest font-semibold" href="tel:+919827122620">
            INQUIRE TIER
          </a>
            </div>
          </div>
          <div className="bg-surface-container p-space-xl flex flex-col justify-between relative hover:bg-surface-container-high border border-primary-container/30 hover:border-primary/60 transition-all shadow-md">
            <div>
              <span className="font-metadata-dense text-metadata-dense text-primary tracking-widest uppercase font-bold">OPTION 03 • POPULAR</span>
              <h3 className="font-headline-sm text-headline-sm uppercase text-primary font-light mt-space-2xs">SINGLE SIDE WEDDING</h3>
              <div className="mt-space-lg mb-space-lg">
                <span className="font-display-lg-mobile text-display-lg-mobile font-normal text-primary-fixed">₹1,10,000</span>
                <span className="font-metadata-dense text-metadata-dense text-secondary uppercase block mt-1 font-semibold">COMPLETE CEREMONY</span>
              </div>
              <ul className="space-y-space-xs font-body-sm text-body-sm text-on-surface-variant border-t border-primary-container/20 pt-space-md">
                <li className="flex items-center gap-space-xs"><span className="material-symbols-outlined text-[16px] text-primary">check</span> 2-3 Day Dedicated Crew</li>
                <li className="flex items-center gap-space-xs"><span className="material-symbols-outlined text-[16px] text-primary">check</span> 15-20 Min Cinematic Film</li>
                <li className="flex items-center gap-space-xs"><span className="material-symbols-outlined text-[16px] text-primary">check</span> Instagram Teasers Included</li>
                <li className="flex items-center gap-space-xs"><span className="material-symbols-outlined text-[16px] text-primary">check</span> Hardcover Heritage Album</li>
              </ul>
            </div>
            <div className="pt-space-xl">
              <a className="w-full inline-block text-center py-space-sm bg-surface-container-highest border border-primary-container/50 text-primary font-label-uppercase text-label-uppercase uppercase rounded-full hover:bg-primary hover:text-on-primary hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-all tracking-widest font-semibold" href="tel:+919827122620">
            INQUIRE TIER
          </a>
            </div>
          </div>
          <div className="bg-surface-container-high p-space-xl flex flex-col justify-between relative shadow-[0_0_40px_rgba(212,175,55,0.15)] border-2 border-primary/60">
            <div className="absolute -top-3.5 right-6 bg-gradient-to-r from-primary-container via-primary to-secondary text-[#241a00] font-bold px-space-md py-1 rounded-full font-metadata-dense text-metadata-dense uppercase tracking-widest shadow-[0_0_15px_rgba(212,175,55,0.4)]">
          FLAGSHIP COMMISSION
        </div>
            <div>
              <span className="font-metadata-dense text-metadata-dense text-primary tracking-widest uppercase font-bold">OPTION 04</span>
              <h3 className="font-headline-sm text-headline-sm uppercase text-primary font-light mt-space-2xs">BOTH SIDE WEDDING</h3>
              <div className="mt-space-lg mb-space-lg">
                <span className="font-display-lg-mobile text-display-lg-mobile font-normal text-primary">₹2,40,000</span>
                <span className="font-metadata-dense text-metadata-dense text-secondary uppercase block mt-1 font-semibold">THE FULL PRODUCTION</span>
              </div>
              <ul className="space-y-space-xs font-body-sm text-body-sm text-on-surface-variant border-t border-primary-container/30 pt-space-md">
                <li className="flex items-center gap-space-xs"><span className="material-symbols-outlined text-[16px] text-primary">check</span> Complete Dual Family Coverage</li>
                <li className="flex items-center gap-space-xs"><span className="material-symbols-outlined text-[16px] text-primary">check</span> 6-Crew Director &amp; Drones</li>
                <li className="flex items-center gap-space-xs"><span className="material-symbols-outlined text-[16px] text-primary">check</span> 30-Min Feature Film + Reels</li>
                <li className="flex items-center gap-space-xs"><span className="material-symbols-outlined text-[16px] text-primary">check</span> 2 Luxury Fine-Art Photo Books</li>
              </ul>
            </div>
            <div className="pt-space-xl">
              <a className="w-full inline-block text-center py-space-sm bg-gradient-to-r from-[#d4af37] via-[#f2ca50] to-[#ffe088] text-[#241a00] font-label-uppercase text-label-uppercase uppercase font-bold rounded-full shadow-[0_0_20px_rgba(212,175,55,0.35)] hover:shadow-[0_0_30px_rgba(212,175,55,0.6)] hover:scale-[1.02] transition-all tracking-widest" href="tel:+919827122620">
            COMMISSION STUDIO
          </a>
            </div>
          </div>
        </div>
        <div className="bg-surface-container-lowest p-space-xl lg:p-space-3xl rounded-lg border border-primary-container/20 shadow-2xl relative overflow-hidden">
          <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>
          <div className="max-w-2xl mx-auto text-center mb-space-2xl">
            <span className="font-label-uppercase text-label-uppercase text-secondary tracking-widest uppercase block mb-space-2xs font-semibold">CALENDAR INQUIRY</span>
            <h3 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg uppercase text-primary font-light">SECURE YOUR DATES</h3>
            <p className="font-body-md text-body-md text-on-surface-variant mt-space-2xs font-light">
          We accept a strictly limited number of commissions per season to ensure unwavering director involvement.
        </p>
          </div>
          <form className="max-w-3xl mx-auto space-y-space-lg relative z-10" onSubmit={(e) => { e.preventDefault(); window.alert('Inquiry received. The SliceX directorial team will reach out within 24 hours.'); }}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-space-lg">
              <div>
                <label className="block font-label-uppercase text-label-uppercase text-secondary uppercase tracking-widest mb-space-2xs font-semibold">PARTNER ONE &amp; TWO NAMES</label>
                <input className="w-full bg-transparent border-b border-primary-container/30 py-space-sm text-on-surface font-body-md focus:border-primary focus:outline-none transition-colors" placeholder="e.g. Rhea & Aditya" required type="text" />
              </div>
              <div>
                <label className="block font-label-uppercase text-label-uppercase text-secondary uppercase tracking-widest mb-space-2xs font-semibold">EMAIL ADDRESS</label>
                <input className="w-full bg-transparent border-b border-primary-container/30 py-space-sm text-on-surface font-body-md focus:border-primary focus:outline-none transition-colors" placeholder="client@domain.com" required type="email" />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-space-lg">
              <div>
                <label className="block font-label-uppercase text-label-uppercase text-secondary uppercase tracking-widest mb-space-2xs font-semibold">EVENT DATES &amp; DESTINATION</label>
                <input className="w-full bg-transparent border-b border-primary-container/30 py-space-sm text-on-surface font-body-md focus:border-primary focus:outline-none transition-colors" placeholder="e.g. Nov 2025 • Udaipur" required type="text" />
              </div>
              <div>
                <label className="block font-label-uppercase text-label-uppercase text-secondary uppercase tracking-widest mb-space-2xs font-semibold">DIRECT PHONE / WHATSAPP</label>
                <input className="w-full bg-transparent border-b border-primary-container/30 py-space-sm text-on-surface font-body-md focus:border-primary focus:outline-none transition-colors" placeholder="+91 98271 22620" required type="tel" />
              </div>
            </div>
            <div>
              <label className="block font-label-uppercase text-label-uppercase text-secondary uppercase tracking-widest mb-space-2xs font-semibold">YOUR VISION OR STORY</label>
              <input className="w-full bg-transparent border-b border-primary-container/30 py-space-sm text-on-surface font-body-md focus:border-primary focus:outline-none transition-colors" placeholder="Tell us a little bit about the celebrations you are curating..." type="text" />
            </div>
            <div className="pt-space-md flex flex-col sm:flex-row items-center justify-between gap-space-md">
              <div className="flex items-center gap-space-xs text-secondary font-metadata-dense text-metadata-dense uppercase tracking-widest">
                <span className="material-symbols-outlined text-[16px] text-primary">lock</span>
                <span>DATA CONFIDENTIALITY GUARANTEED</span>
              </div>
              <button className="w-full sm:w-auto px-space-2xl py-space-sm bg-gradient-to-r from-primary-container via-primary to-secondary text-[#241a00] font-label-uppercase text-label-uppercase uppercase font-bold rounded-full shadow-[0_0_20px_rgba(212,175,55,0.35)] hover:shadow-[0_0_30px_rgba(212,175,55,0.6)] hover:scale-[1.02] transition-all tracking-widest" type="submit">
            SUBMIT INQUIRY
          </button>
            </div>
          </form>
        </div>
      </section>
    </div>
    <footer className="w-full bg-surface-container-lowest text-on-surface-variant pt-space-4xl pb-space-2xl border-t border-primary-container/20">
      <div className="w-full px-margin-mobile lg:px-margin-desktop">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter-desktop pb-space-3xl">
          <div className="md:col-span-6 flex flex-col justify-between">
            <div className="space-y-space-md">
              <h2 className="font-display-lg text-display-lg-mobile md:text-display-lg tracking-tight uppercase text-primary font-light leading-none">SLICEX FILMS</h2>
              <p className="font-editorial-quote text-editorial-quote text-secondary italic">CAPTURE. CREATE. INSPIRE.</p>
            </div>
            <p className="font-body-sm text-body-sm text-on-surface-variant max-w-md pt-space-lg">Handcrafted cinematic narratives and fine-art wedding archives designed for couples across the globe. Preserving unscripted emotion with high-fashion editorial purity.</p>
          </div>
          <div className="md:col-span-3 flex flex-col space-y-space-md">
            <span className="font-label-uppercase text-label-uppercase uppercase text-primary tracking-widest font-semibold">INDEX</span>
            <nav className="flex flex-col space-y-space-sm">
              <a className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors" data-path="home" href="/">Home Archive</a>
              <a className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors" data-path="about" href="/about">The Cinema Collective</a>
              <a className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors" data-path="services" href="/services">Editorial Offerings</a>
              <a className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors" data-path="portfolio" href="/portfolio">Featured Exhibitions</a>
              <a className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors" data-path="films" href="/films">Cinematic Masterpieces</a>
              <a className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors" data-path="packages" href="/book-your-date">Commission Investment</a>
              <a className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors" data-path="contact" href="/contact">Inquire Studio</a>
            </nav>
          </div>
          <div className="md:col-span-3 flex flex-col space-y-space-md">
            <span className="font-label-uppercase text-label-uppercase uppercase text-primary tracking-widest font-semibold">DIRECT CONTACT</span>
            <div className="flex flex-col space-y-space-xs font-body-sm text-body-sm">
              <a className="text-on-surface-variant hover:text-primary transition-colors" href="tel:+919827122620">+91 98271 22620</a>
              <a className="text-on-surface-variant hover:text-primary transition-colors" href="tel:+919658621038">+91 96586 21038</a>
              <a className="text-on-surface-variant hover:text-primary transition-colors" href="mailto:slicexfilms@gmail.com">slicexfilms@gmail.com</a>
            </div>
            <div className="pt-space-md">
              <span className="font-label-uppercase text-label-uppercase uppercase text-primary tracking-widest block mb-space-sm font-semibold">PRESENCE</span>
              <div className="flex flex-col space-y-space-xs font-body-sm text-body-sm">
                <a className="text-on-surface-variant hover:text-primary transition-colors" href="https://www.instagram.com/slicexfilms/" rel="noopener noreferrer" target="_blank">Instagram / @slicexfilms</a>
                <a className="text-on-surface-variant hover:text-primary transition-colors" href="https://www.facebook.com/SliceXfilms" rel="noopener noreferrer" target="_blank">Facebook / SliceXfilms</a>
                <a className="text-on-surface-variant hover:text-primary transition-colors" href="https://www.youtube.com/@slicexfilms8741" rel="noopener noreferrer" target="_blank">YouTube / @slicexfilms8741</a>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-space-xl flex flex-col sm:flex-row items-center justify-between gap-space-md font-metadata-dense text-metadata-dense text-outline tracking-widest uppercase border-t border-primary-container/20">
          <p>© 2025 SLICEX FILMS. ALL RIGHTS RESERVED.</p>
          <div className="flex items-center gap-space-lg">
            <a className="text-outline hover:text-primary transition-colors" data-path="terms-and-conditions" href="#">TERMS &amp; CONDITIONS</a>
            <a className="text-outline hover:text-primary transition-colors" data-path="privacy-policy" href="#">PRIVACY POLICY</a>
          </div>
        </div>
      </div>
    </footer>
    </>
  );
}
