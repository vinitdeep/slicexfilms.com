'use client';

import { useEffect, useState } from 'react';
import VideoLightbox from '../../components/VideoLightbox';
import GoldenDust from '../../components/GoldenDust';
import SnowFall from '../../components/SnowFall';
import HeroVideo from '../../components/HeroVideo';
import HomeServices from '../../components/HomeServices';
import PackagesGrid from '../../components/PackagesGrid';
import SiteFooter from '../../components/SiteFooter';
import { withBase } from '../../lib/basePath';
import { useContent, submitLead } from '../../lib/content';

// Real films from youtube.com/@slicexfilms8741
const thumb = (id) => `https://i.ytimg.com/vi/${id}/maxresdefault.jpg`;
const filmThumb = (id) => `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;

// The commission form writes straight into slicex_leads, so inquiries show up
// in the admin Leads tab alongside the contact-page dossiers.
function InquiryForm({ copy }) {
  const empty = { names: '', email: '', event: '', phone: '', vision: '' };
  const [form, setForm] = useState(empty);
  const [state, setState] = useState('idle'); // idle | sending | done | error
  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));
  const field = 'w-full bg-transparent border-b border-primary-container/30 py-space-sm text-on-surface font-body-md focus:border-primary focus:outline-none transition-colors';
  const label = 'block font-label-uppercase text-label-uppercase text-secondary uppercase tracking-widest mb-space-2xs font-semibold';

  const submit = async (e) => {
    e.preventDefault();
    if (state === 'sending') return;
    setState('sending');
    try {
      await submitLead({
        name: form.names,
        email: form.email,
        phone: form.phone,
        event_date: form.event,
        message: form.vision,
        source: 'home-inquiry',
      });
      setState('done');
      setForm(empty);
    } catch {
      setState('error');
    }
  };

  return (
    <form className="max-w-3xl mx-auto space-y-space-lg relative z-10" onSubmit={submit}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-space-lg">
        <div>
          <label className={label}>PARTNER ONE &amp; TWO NAMES</label>
          <input className={field} placeholder="e.g. Rhea & Aditya" required type="text" value={form.names} onChange={set('names')} />
        </div>
        <div>
          <label className={label}>EMAIL ADDRESS</label>
          <input className={field} placeholder="client@domain.com" required type="email" value={form.email} onChange={set('email')} />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-space-lg">
        <div>
          <label className={label}>EVENT DATES &amp; DESTINATION</label>
          <input className={field} placeholder="e.g. Nov 2025 • Udaipur" required type="text" value={form.event} onChange={set('event')} />
        </div>
        <div>
          <label className={label}>DIRECT PHONE / WHATSAPP</label>
          <input className={field} placeholder="+91 98271 22620" required type="tel" value={form.phone} onChange={set('phone')} />
        </div>
      </div>
      <div>
        <label className={label}>YOUR VISION OR STORY</label>
        <input className={field} placeholder="Tell us a little bit about the celebrations you are curating..." type="text" value={form.vision} onChange={set('vision')} />
      </div>
      <div className="pt-space-md flex flex-col sm:flex-row items-center justify-between gap-space-md">
        <div className="flex items-center gap-space-xs text-secondary font-metadata-dense text-metadata-dense uppercase tracking-widest">
          <span className="material-symbols-outlined text-[16px] text-primary">lock</span>
          <span>{copy.formNote}</span>
        </div>
        <button disabled={state === 'sending'} className="w-full sm:w-auto px-space-2xl py-space-sm bg-gradient-to-r from-primary-container via-primary to-secondary text-[#001f23] font-label-uppercase text-label-uppercase uppercase font-bold rounded-full shadow-[0_0_20px_rgba(0,184,200,0.35)] hover:shadow-[0_0_30px_rgba(0,184,200,0.6)] hover:scale-[1.02] transition-all tracking-widest disabled:opacity-60" type="submit">
          {state === 'sending' ? 'SENDING…' : state === 'done' ? 'INQUIRY SENT ✓' : copy.submitLabel}
        </button>
      </div>
      {state === 'done' && (
        <p role="status" className="text-center font-body-sm text-body-sm text-primary">{copy.successMessage}</p>
      )}
      {state === 'error' && (
        <p role="alert" className="text-center font-body-sm text-body-sm text-error">
          We couldn’t send that just now. Please email us directly and we’ll pick it up straight away.
        </p>
      )}
    </form>
  );
}

// Screening-room player. The selector boxes sit outside the data-yt element so
// picking a film only swaps the poster — playback is the player itself.
function ScreeningCarousel({ videos, watchLabel, nowShowingLabel }) {
  const [active, setActive] = useState(0);
  if (!videos.length) return null;
  const current = videos[Math.min(active, videos.length - 1)];

  return (
    <div className="flex flex-col gap-space-sm">
      <div data-yt={current.id} className="relative w-full aspect-video md:max-h-[700px] bg-surface-container overflow-hidden group cursor-pointer shadow-[0_10px_50px_rgba(0,0,0,0.8)] border border-primary-container/25">
        {videos.map((v, i) => (
          <div
            key={v.id || i}
            aria-hidden={i !== active}
            className="absolute inset-0 w-full h-full bg-cover bg-center transition-opacity duration-700 ease-in-out group-hover:scale-102"
            style={{ backgroundImage: `url('${thumb(v.id)}')`, opacity: i === active ? 1 : 0 }}
          />
        ))}
        <div className="absolute inset-0 bg-surface-container-lowest/40 group-hover:bg-surface-container-lowest/20 transition-colors"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="w-24 h-24 rounded-full bg-gradient-to-tr from-[#00b8c8] to-[#3ee6f0] text-[#001f23] flex items-center justify-center shadow-[0_0_40px_rgba(0,184,200,0.6)] group-hover:scale-110 group-hover:shadow-[0_0_60px_rgba(0,184,200,0.9)] transition-all duration-300">
            <span className="material-symbols-outlined text-[42px] translate-x-0.5">play_arrow</span>
          </span>
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-space-md lg:p-space-lg bg-gradient-to-t from-surface-container-lowest via-surface-container-lowest/80 to-transparent flex flex-col gap-space-xs">
          <div className="flex items-center justify-between text-secondary font-metadata-dense text-metadata-dense uppercase tracking-widest font-semibold">
            <span className="text-primary-fixed">
              {current.category ? `${current.category} • ` : ''}{(current.title || '').toUpperCase()}
            </span>
            <span className="text-primary">{watchLabel}</span>
          </div>
          <div className="w-full h-1 bg-surface-container-highest rounded-full overflow-hidden relative border border-primary-container/20">
            <div className="h-full bg-gradient-to-r from-primary-container to-primary rounded-full shadow-[0_0_8px_#3ee6f0] transition-all duration-500" style={{ width: `${((active + 1) / videos.length) * 100}%` }} />
          </div>
        </div>
      </div>

      {videos.length > 1 && (
        <div className="mt-space-2xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-lg">
          {videos.map((v, i) => {
            const on = i === active;
            return (
              <button
                key={v.id || i}
                type="button"
                aria-pressed={on}
                onClick={() => setActive(i)}
                className={`text-left p-space-lg border transition-all flex flex-col justify-between group/card ${
                  on
                    ? 'bg-surface-container border-primary shadow-[0_0_18px_rgba(0,184,200,0.2)]'
                    : 'bg-surface-container/50 border-primary-container/15 hover:bg-surface-container hover:border-primary/40'
                }`}
              >
                <div>
                  <span className={`font-metadata-dense text-metadata-dense tracking-widest uppercase font-semibold ${on ? 'text-primary' : 'text-secondary'}`}>
                    {v.category}
                  </span>
                  <h4 className={`font-headline-sm text-headline-sm uppercase font-light mt-space-2xs transition-colors ${on ? 'text-primary' : 'text-primary group-hover/card:text-secondary'}`}>
                    {v.title}
                  </h4>
                  {v.desc && <p className="font-body-sm text-body-sm text-on-surface-variant mt-space-2xs">{v.desc}</p>}
                </div>
                <div className={`mt-space-lg flex items-center justify-between font-label-uppercase text-label-uppercase tracking-widest font-semibold ${on ? 'text-primary' : 'text-primary'}`}>
                  <span>{on ? nowShowingLabel : v.cta}</span>
                  <span className={`material-symbols-outlined text-[16px] transition-transform ${on ? '' : 'group-hover/card:translate-x-1'}`}>
                    {on ? 'play_circle' : 'arrow_forward'}
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default function HomePage() {
  const home = useContent('home');
  const hero = home.hero || {};
  const about = home.about || {};
  const strip = home.filmStrip || {};
  const servicesCopy = home.services || {};
  const featured = home.featured || {};
  const screening = home.screening || {};
  const creed = home.creed || {};
  const method = home.method || {};
  const commission = home.commission || {};
  const FILM_STRIP = strip.items || [];
  const featureVideos = (screening.featureVideos || []).filter((v) => v.id);

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
      if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) { el.scrollLeft += e.deltaX; e.preventDefault(); }
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
          <HeroVideo videoId={hero.videoId} mobileFocusX={50} />
          <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-surface-container-lowest/50 to-surface-container-lowest/80"></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(0,184,200,0.08)_0%,_transparent_60%,_rgba(14,14,14,0.9)_100%)]"></div>
        </div>
        <SnowFall />
        <div className="relative z-10 w-full px-margin-mobile lg:px-margin-desktop pt-space-xl flex justify-between items-center text-outline">
          <div className="flex items-center gap-space-xs font-metadata-dense text-metadata-dense tracking-widest uppercase">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse shadow-[0_0_8px_#3ee6f0]"></span>
            <span className="text-secondary font-medium">{hero.badgeLeft}</span>
          </div>
          <div className="font-metadata-dense text-metadata-dense tracking-widest uppercase hidden sm:block border border-primary-container/30 px-3 py-1 rounded-full bg-surface-container-lowest/60 text-secondary backdrop-blur-md">
        {hero.badgeRight}
      </div>
        </div>
        <div className="relative z-10 w-full px-margin-mobile lg:px-margin-desktop py-space-3xl flex flex-col justify-center">
          <div className="max-w-6xl relative">
            <div className="absolute -top-16 -left-16 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none"></div>
            <p className="font-label-uppercase text-label-uppercase tracking-widest text-secondary uppercase mb-space-sm flex items-center gap-space-sm font-semibold">
<span className="w-8 h-[1.5px] bg-gradient-to-r from-primary to-transparent inline-block"></span>
          {hero.eyebrow}
        </p>
            <h1 className="font-display-hero text-display-hero-mobile md:text-display-hero uppercase tracking-tighter text-on-surface font-light leading-none">
          {hero.titleA}<br />
<span className="italic font-normal bg-gradient-to-r from-[#a5f3fc] via-[#3ee6f0] to-[#00b8c8] bg-clip-text text-transparent drop-shadow-[0_2px_18px_rgba(0,184,200,0.25)]">{hero.titleB}</span>
</h1>
            <p className="mt-space-lg font-body-lg text-body-lg text-on-surface max-w-2xl font-light leading-relaxed">
          {hero.subtitle}
        </p>
            <div className="mt-space-sm font-editorial-quote text-editorial-quote text-on-surface-variant/90 italic max-w-2xl font-light border-l-2 border-primary-container/60 pl-space-md my-space-md">
          <span className="whitespace-pre-line">{hero.quote}</span>
          <span className="block mt-space-sm not-italic font-label-uppercase text-label-uppercase uppercase tracking-[0.18em] text-primary">{hero.quoteBrand}</span>
          <span className="block text-on-surface">{hero.quoteTag}</span>
        </div>
            <div className="mt-space-2xl flex flex-wrap items-center gap-space-md">
              <a className="px-space-xl py-space-sm bg-gradient-to-r from-[#00b8c8] via-[#3ee6f0] to-[#a5f3fc] text-[#001f23] font-label-uppercase text-label-uppercase uppercase font-bold rounded-full shadow-[0_0_25px_rgba(0,184,200,0.35)] hover:shadow-[0_0_35px_rgba(0,184,200,0.6)] hover:scale-[1.02] transition-all tracking-widest" href="#featured-work">
            {hero.btn1}
          </a>
              <a className="px-space-xl py-space-sm bg-surface-container-high/60 backdrop-blur-md text-primary border border-primary/40 font-label-uppercase text-label-uppercase uppercase rounded-full hover:bg-primary/10 hover:border-primary transition-all tracking-widest shadow-[0_0_15px_rgba(0,184,200,0.1)]" href="#commission">
            {hero.btn2}
          </a>
            </div>
          </div>
        </div>
        <div className="relative z-10 w-full px-margin-mobile lg:px-margin-desktop pb-space-lg flex justify-between items-end border-t border-primary-container/20 pt-space-md">
          <div className="font-metadata-dense text-metadata-dense uppercase text-outline tracking-widest flex items-center gap-2">
        {hero.strip}
      </div>
          <a className="flex items-center gap-space-xs font-metadata-dense text-metadata-dense uppercase text-primary tracking-widest hover:text-secondary transition-colors" href="#about-slicex">
            <span>{hero.scrollLabel}</span>
            <span className="material-symbols-outlined text-[14px] animate-bounce text-primary">south</span>
          </a>
        </div>
      </section>
      <section className="w-full bg-surface py-space-5xl px-margin-mobile lg:px-margin-desktop border-b border-primary-container/20 relative" id="about-slicex">
        <div className="absolute right-0 top-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-desktop items-start">
          <div className="lg:col-span-5 flex flex-col space-y-space-md">
            <span className="font-numerical-index text-numerical-index text-secondary tracking-widest uppercase font-semibold">{about.index}</span>
            <h2 className="font-display-lg text-display-lg-mobile md:text-display-lg uppercase font-light text-on-surface tracking-tight leading-[1.05]">
          {about.titleA}<br />
<span className="italic font-normal bg-gradient-to-r from-[#a5f3fc] via-[#3ee6f0] to-[#00b8c8] bg-clip-text text-transparent">{about.titleB}</span>
</h2>
            <div className="pt-space-lg">
              <div className="w-16 h-[2px] bg-gradient-to-r from-primary to-transparent mb-space-md"></div>
              <span className="font-label-uppercase text-label-uppercase text-outline tracking-widest uppercase">{about.statement}</span>
            </div>
          </div>
          <div className="lg:col-span-7 flex flex-col justify-between space-y-space-xl lg:pl-space-xl">
            <div className="space-y-space-lg">
              <blockquote className="font-editorial-quote text-body-lg md:text-editorial-quote text-on-surface font-light leading-relaxed bg-surface-container/30 border-l-2 border-primary p-space-md md:p-space-lg rounded-r-lg">
            {about.quote}
          </blockquote>
              <p className="font-body-lg text-body-lg text-on-surface-variant font-light leading-relaxed">
            {about.body}
          </p>
            </div>
            <div className="pt-space-md flex items-center justify-between">
              <a className="inline-flex items-center gap-space-sm font-label-uppercase text-label-uppercase uppercase text-primary border-b border-primary pb-1 hover:text-secondary hover:border-secondary transition-colors tracking-widest group" href="#services">
            {about.cta}
            <span className="material-symbols-outlined text-[14px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
</a>
              <div className="flex items-center gap-space-md font-metadata-dense text-metadata-dense text-secondary uppercase tracking-widest">
                {(about.locations || []).map((l, i) => (
                  <span key={i} className="flex items-center gap-space-md">
                    {i > 0 && <span className="text-primary">•</span>}
                    <span>{l}</span>
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full bg-surface-container-lowest py-space-2xl md:py-space-4xl overflow-hidden border-y border-cyan-500/30 relative" id="film-roll-archive">
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
      border: 1px solid rgba(0,184,200,0.25);
      flex-shrink: 0;
    }
  ` }} />
        <div className="w-full px-margin-mobile lg:px-margin-desktop mb-space-lg md:mb-space-2xl flex flex-col md:flex-row md:items-end justify-between gap-space-sm md:gap-space-md">
          <div>
            <div className="flex items-center gap-space-xs mb-space-2xs font-metadata-dense text-metadata-dense uppercase tracking-widest text-secondary">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse shadow-[0_0_8px_#3ee6f0]"></span>
              <span>{strip.eyebrow}</span>
            </div>
            <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg uppercase font-light text-primary tracking-tight">{strip.title}</h2>
          </div>
          <div className="flex items-center gap-space-lg font-metadata-dense text-metadata-dense uppercase tracking-widest text-outline">
            <span className="flex items-center gap-space-xs text-secondary font-medium"><span className="material-symbols-outlined text-[14px] text-primary">drag_indicator</span> {strip.hint}</span>
            <span className="hidden sm:inline-block text-primary-container/40">•</span>
            <span className="hidden sm:inline-block text-on-surface-variant">{strip.hintRight}</span>
          </div>
        </div>
        <div id="filmStrip" className="relative w-full bg-[#0e1314] py-3 shadow-[0_0_50px_rgba(0,0,0,0.8)] border-y border-cyan-500/25 select-none overflow-x-auto cursor-grab" style={{ scrollbarWidth: 'none' }}>
          <div className="flex items-stretch w-max">
            {[0, 1].map((g) => (
              <div key={g} className="flex items-stretch flex-shrink-0" aria-hidden={g === 1 ? 'true' : undefined}>
                {FILM_STRIP.map((v, i) => (
                  <div key={v.id + '-' + g} data-yt={v.id} className="w-[240px] sm:w-[320px] md:w-[420px] bg-[#0c1112] border-x border-cyan-900/30 flex flex-col px-3 py-2 flex-shrink-0 group cursor-pointer hover:bg-[#141b1c] transition-colors">
                    <div className="flex items-center justify-between py-1 px-1 text-[10px] tracking-[0.2em] font-mono text-cyan-500/80">
                      <span>{v.stock}</span>
                      <div className="flex items-center gap-2">
                        <span className="sprocket-hole"></span>
                        <span className="sprocket-hole"></span>
                        <span className="sprocket-hole"></span>
                      </div>
                      <span className="text-primary font-bold">▷ {21 + i}A</span>
                    </div>
                    <div className="relative aspect-[3/2] overflow-hidden bg-black mt-1 mb-1 border border-cyan-500/20 group-hover:border-primary/60 transition-colors shadow-inner">
                      <img alt={v.title} className="w-full h-full object-cover grayscale-[25%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out" src={filmThumb(v.id)} />
                      <span className="absolute top-2 left-2 bg-black/85 border border-primary/40 px-1.5 py-0.5 font-metadata-dense text-[9px] tracking-widest text-primary uppercase">EXP {String(i + 1).padStart(2, '0')}</span>
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <span className="w-10 h-10 rounded-full bg-primary/90 text-on-primary flex items-center justify-center shadow-lg">
                          <span className="material-symbols-outlined text-[22px]" style={{ fontVariationSettings: "'FILL' 1" }}>play_arrow</span>
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between gap-2 py-1 px-1 text-[10px] tracking-[0.2em] font-mono text-cyan-500/80">
                      <span className="text-secondary uppercase text-[9px] tracking-wider font-semibold truncate min-w-0">{v.title} // {v.tag}</span>
                      <div className="hidden sm:flex items-center gap-2">
                        <span className="sprocket-hole"></span>
                        <span className="sprocket-hole"></span>
                        <span className="sprocket-hole"></span>
                      </div>
                      <span className="text-outline whitespace-nowrap">FRAME {21 + i}</span>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
        <div className="w-full px-margin-mobile lg:px-margin-desktop mt-space-lg flex flex-col sm:flex-row sm:items-center justify-between gap-space-xs text-outline font-metadata-dense text-metadata-dense uppercase tracking-widest">
          <div className="flex items-center gap-space-sm">
            <span className="inline-block w-2 h-2 rounded-full bg-primary shadow-[0_0_6px_#3ee6f0]"></span>
            <span>{strip.footLeft}</span>
          </div>
          <div className="flex items-center gap-space-md text-secondary">
            <span>{strip.footRight}</span>
            <a className="text-primary hover:text-secondary transition-colors underline decoration-primary/40 underline-offset-4 font-semibold" href="#commission">{strip.footLink}</a>
          </div>
        </div>
      </section>
      <section className="w-full bg-surface-container-low py-space-2xl md:py-space-4xl px-margin-mobile lg:px-margin-desktop border-b border-primary-container/20" id="services">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-space-xl md:mb-space-3xl pb-space-md border-b border-primary-container/20 gap-space-md">
          <div>
            <span className="font-numerical-index text-numerical-index text-secondary uppercase font-semibold">{servicesCopy.index}</span>
            <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg uppercase font-light text-primary tracking-tight mt-space-2xs">{servicesCopy.title}</h2>
          </div>
          <p className="font-body-sm text-body-sm text-on-surface-variant max-w-sm">
        {servicesCopy.blurb}
      </p>
        </div>
        <HomeServices />
      </section>
      <section className="w-full bg-surface py-space-5xl px-margin-mobile lg:px-margin-desktop relative overflow-hidden" id="featured-work">
        <div className="absolute left-1/3 top-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2"></div>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-space-2xl gap-space-md relative z-10">
          <div>
            <span className="font-numerical-index text-numerical-index text-secondary uppercase font-semibold">{featured.index}</span>
            <h2 className="font-display-lg text-display-lg-mobile md:text-display-lg uppercase font-light text-primary tracking-tight mt-space-2xs">{featured.title}</h2>
          </div>
          <div className="flex flex-wrap items-center gap-space-xs font-metadata-dense text-metadata-dense tracking-widest uppercase">
            <button className="px-space-md py-space-xs bg-gradient-to-r from-primary-container to-primary text-on-primary font-bold rounded-full shadow-[0_0_15px_rgba(0,184,200,0.3)] transition-all">ALL</button>
            <button className="px-space-md py-space-xs bg-surface-container text-on-surface-variant hover:text-primary border border-primary-container/20 hover:border-primary/40 rounded-full transition-colors">WEDDINGS</button>
            <button className="px-space-md py-space-xs bg-surface-container text-on-surface-variant hover:text-primary border border-primary-container/20 hover:border-primary/40 rounded-full transition-colors">PRE-WEDDINGS</button>
            <button className="px-space-md py-space-xs bg-surface-container text-on-surface-variant hover:text-primary border border-primary-container/20 hover:border-primary/40 rounded-full transition-colors">ENGAGEMENTS</button>
            <button className="px-space-md py-space-xs bg-surface-container text-on-surface-variant hover:text-primary border border-primary-container/20 hover:border-primary/40 rounded-full transition-colors">FILMS</button>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-stretch relative z-10">
          {(featured.items || []).map((v, i) => {
            const big = i === 0;
            const box = big ? 'lg:col-span-8 min-h-[480px] lg:min-h-[560px]'
              : i === 1 ? 'lg:col-span-4 min-h-[480px] lg:min-h-[560px]'
              : 'lg:col-span-6 min-h-[380px]';
            return (
              <div key={i} data-yt={v.id} className={`${box} group relative overflow-hidden bg-surface-container flex flex-col justify-end p-space-xl border border-primary-container/20 hover:border-primary/50 transition-all rounded-sm shadow-xl cursor-pointer`}>
                <div className="absolute inset-0 w-full h-full bg-cover bg-center grayscale-[25%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out" style={{ backgroundImage: `url('${thumb(v.id)}')` }}></div>
                <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-surface-container-lowest/40 to-transparent"></div>
                {big ? (
                  <div className="relative z-10 flex flex-col sm:flex-row sm:items-end justify-between gap-space-md">
                    <div>
                      <span className="font-metadata-dense text-metadata-dense text-primary font-bold tracking-widest uppercase block mb-space-2xs">{v.label}</span>
                      <h3 className="font-headline-lg text-headline-lg uppercase text-primary-fixed font-light tracking-tight group-hover:text-primary transition-colors">{v.title}</h3>
                      <p className="font-body-sm text-body-sm text-on-surface-variant mt-space-2xs">{v.desc}</p>
                    </div>
                    <span className="shrink-0 inline-flex items-center gap-space-xs font-label-uppercase text-label-uppercase uppercase text-primary border-b border-primary pb-1 group-hover:text-secondary group-hover:border-secondary transition-colors tracking-widest font-semibold">
                      {v.cta} <span className="material-symbols-outlined text-[14px]">play_arrow</span>
                    </span>
                  </div>
                ) : (
                  <div className="relative z-10">
                    <span className="font-metadata-dense text-metadata-dense text-primary font-bold tracking-widest uppercase block mb-space-2xs">{v.label}</span>
                    <h3 className="font-headline-md text-headline-md uppercase text-primary-fixed font-light tracking-tight group-hover:text-primary transition-colors">{v.title}</h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant mt-space-2xs">{v.desc}</p>
                    <div className="mt-space-md">
                      <span className="font-label-uppercase text-label-uppercase text-secondary tracking-widest uppercase group-hover:text-primary transition-colors font-semibold">{v.cta}</span>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>
      <section className="w-full bg-surface-container-lowest py-space-5xl px-margin-mobile lg:px-margin-desktop border-y border-primary-container/20 relative">
        <div className="max-w-4xl mx-auto text-center mb-space-3xl">
          <span className="font-numerical-index text-numerical-index text-secondary uppercase tracking-widest font-semibold">{screening.index}</span>
          <h2 className="font-display-lg text-display-lg-mobile md:text-display-lg uppercase font-light text-primary tracking-tight mt-space-2xs">{screening.title}</h2>
          <p className="font-body-md text-body-md text-on-surface-variant mt-space-sm">{screening.blurb}</p>
        </div>
        <ScreeningCarousel videos={featureVideos} watchLabel={screening.watchLabel} nowShowingLabel={screening.nowShowingLabel} />
      </section>
      <section className="w-full bg-surface-container-lowest py-space-5xl px-margin-mobile lg:px-margin-desktop flex flex-col justify-center items-center text-center overflow-hidden relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(0,184,200,0.08)_0%,_transparent_70%)] pointer-events-none"></div>
        <GoldenDust />
        <div className="max-w-5xl relative z-10">
          <span className="font-label-uppercase text-label-uppercase text-secondary tracking-widest uppercase block mb-space-lg font-semibold">{creed.eyebrow}</span>
          <h2 className="font-display-hero text-display-hero-mobile md:text-display-hero uppercase tracking-tighter text-on-surface font-light leading-[0.95]">
        {creed.line1}<br />
        {creed.line2}<br />
<span className="bg-gradient-to-r from-[#a5f3fc] via-[#3ee6f0] to-[#00b8c8] bg-clip-text text-transparent italic font-normal">{creed.line3}</span><br />
        {creed.line4}<br />
<span className="text-primary font-normal">{creed.line5}</span>
</h2>
          <div className="mt-space-2xl w-24 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent mx-auto"></div>
          <p className="mt-space-lg font-metadata-dense text-metadata-dense text-secondary tracking-widest uppercase font-semibold">
        {creed.foot}
      </p>
        </div>
      </section>
      <section className="w-full bg-surface py-space-5xl px-margin-mobile lg:px-margin-desktop border-t border-primary-container/20">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-space-3xl pb-space-md border-b border-primary-container/20 gap-space-md">
          <div>
            <span className="font-numerical-index text-numerical-index text-secondary uppercase font-semibold">{method.index}</span>
            <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg uppercase font-light text-primary tracking-tight mt-space-2xs">{method.title}</h2>
          </div>
          <p className="font-body-sm text-body-sm text-on-surface-variant max-w-sm">
        {method.blurb}
      </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-space-md">
          {(method.steps || []).map((s, i) => (
            <div key={i} className="group relative overflow-hidden bg-surface-container flex flex-col justify-between min-h-[300px] p-space-lg border border-primary-container/20 hover:border-primary/60 transition-all rounded-sm shadow-xl">
              <div
                className="absolute inset-0 bg-cover bg-center opacity-35 group-hover:opacity-65 group-hover:scale-110 transition-all duration-700 ease-out"
                style={{ backgroundImage: `url(${/^https?:/.test(s.image || '') ? s.image : withBase(s.image || '')})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/75 to-background/25 group-hover:via-background/55 transition-all duration-500" />
              <div className="relative z-10 flex items-center justify-between">
                <span className="font-display-lg text-display-lg uppercase text-primary/40 font-light leading-none group-hover:text-primary transition-colors">{s.num}</span>
                <span className="text-[9px] tracking-widest uppercase font-mono text-secondary bg-surface-container-high/80 px-2 py-0.5 rounded border border-primary-container/30">{s.badge}</span>
              </div>
              <div className="relative z-10 mt- space-y-1">
                <h4 className="font-headline-sm text-headline-sm uppercase text-primary font-medium group-hover:text-cyan-200 transition-colors tracking-wide flex items-center justify-between">
                  {s.title}
                  <span className="w-2 h-2 rounded-full bg-primary/40 group-hover:bg-cyan-400 group-hover:animate-ping transition-all" />
                </h4>
                <p className="font-body-sm text-body-sm text-on-surface-variant font-light group-hover:text-primary transition-colors leading-relaxed">
                  {s.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="w-full bg-surface-container-low py-space-5xl px-margin-mobile lg:px-margin-desktop border-t border-primary-container/20" id="commission">
        <div className="max-w-4xl mb-space-3xl">
          <span className="font-numerical-index text-numerical-index text-secondary uppercase tracking-widest font-semibold">{commission.index}</span>
          <h2 className="font-display-lg text-display-lg-mobile md:text-display-lg uppercase font-light text-primary tracking-tight mt-space-2xs">{commission.title}</h2>
          <p className="font-body-md text-body-md text-on-surface-variant mt-space-sm">
        {commission.blurb}
      </p>
        </div>
        <PackagesGrid />
        <div className="bg-surface-container-lowest p-space-xl lg:p-space-3xl rounded-lg border border-primary-container/20 shadow-2xl relative overflow-hidden">
          <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>
          <div className="max-w-2xl mx-auto text-center mb-space-2xl">
            <span className="font-label-uppercase text-label-uppercase text-secondary tracking-widest uppercase block mb-space-2xs font-semibold">{commission.formEyebrow}</span>
            <h3 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg uppercase text-primary font-light">{commission.formTitle}</h3>
            <p className="font-body-md text-body-md text-on-surface-variant mt-space-2xs font-light">
          {commission.formBlurb}
        </p>
          </div>
          <InquiryForm copy={commission} />
        </div>
      </section>
    </div>
    <SiteFooter />
    </>
  );
}
