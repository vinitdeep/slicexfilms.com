'use client';

import SiteFooter from '../../../components/SiteFooter';
import { useState } from 'react';
import VideoLightbox from '../../../components/VideoLightbox';
import { withBase } from '../../../lib/basePath';
import { useContent } from '../../../lib/content';

// Tailwind needs whole class names, so spans/aspects are looked up, not built.
const SPAN_CLS = {
  '5': 'md:col-span-12 lg:col-span-5',
  '6': 'md:col-span-12 lg:col-span-6',
  '7': 'md:col-span-12 lg:col-span-7',
  '12': 'md:col-span-12',
};
const ASPECT_CLS = {
  '4/5': 'aspect-[4/5]',
  '16/9': 'aspect-[16/9]',
  '16/10': 'aspect-[16/10]',
};
const src = (v) => (/^https?:/.test(v || '') ? v : withBase(v || ''));
const chip = 'px-space-xs py-space-2xs rounded bg-surface-container-lowest/80 backdrop-blur-sm font-label-sm text-label-sm tracking-wider uppercase';

function PortfolioCard({ item }) {
  const span = SPAN_CLS[String(item.span)] || SPAN_CLS['6'];
  const aspect = ASPECT_CLS[item.aspect] || ASPECT_CLS['16/10'];
  const tags = item.tags || [];
  const yt = item.youtubeId || undefined;

  if (item.layout === 'feature') {
    return (
      <article data-yt={yt} className={`portfolio-item ${span} group cursor-pointer relative bg-surface-container-lowest rounded-xl overflow-hidden shadow-2xl transition-all duration-500 hover:shadow-[0_15px_45px_-10px_rgba(0,184,200,0.18)]`}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
          <div className="lg:col-span-8 relative aspect-[16/9] lg:aspect-[2.1/1] overflow-hidden bg-surface-container-high">
            <img className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105 filter brightness-95 contrast-105" alt={item.title} src={src(item.image)} />
            <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-transparent to-black/30 lg:hidden"></div>
            {item.eyebrow && (
              <div className="absolute top-space-md left-space-md flex items-center gap-space-xs bg-surface-container-lowest/80 backdrop-blur-md px-space-sm py-space-2xs rounded-full">
                <span className="material-symbols-outlined text-primary text-[16px]">play_circle</span>
                <span className="font-label-sm text-label-sm tracking-[0.2em] text-primary uppercase">{item.eyebrow}</span>
              </div>
            )}
            {item.note && (
              <div className="absolute bottom-space-md right-space-md font-label-sm text-label-sm text-on-surface-variant bg-surface-container-lowest/80 backdrop-blur-md px-space-sm py-space-2xs rounded tracking-widest uppercase">{item.note}</div>
            )}
          </div>
          <div className="lg:col-span-4 p-space-lg lg:p-space-xl flex flex-col justify-between bg-surface-container">
            <div className="flex flex-col gap-space-sm">
              {tags.length > 0 && (
                <div className="flex flex-wrap gap-space-2xs">
                  {tags.map((t, k) => (
                    <span key={k} className={`px-space-xs py-space-2xs rounded bg-surface-container-highest font-label-sm text-label-sm tracking-widest uppercase ${k === 0 ? 'text-primary' : 'text-on-surface-variant'}`}>{t}</span>
                  ))}
                </div>
              )}
              <h2 className="font-headline-md text-headline-md text-on-surface group-hover:text-primary transition-colors duration-300 pt-space-2xs">{item.title}</h2>
              <p className="font-body-sm text-body-sm text-on-surface-variant">{item.desc}</p>
            </div>
            <div className="pt-space-md flex items-center justify-between">
              <div className="flex flex-col">
                <span className="font-label-sm text-label-sm text-outline uppercase tracking-wider">Cinematography</span>
                <span className="font-body-sm text-body-sm text-on-surface font-medium">SliceX Films</span>
              </div>
              <span className="w-10 h-10 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center group-hover:bg-primary transition-all duration-300 group-hover:scale-110 shadow-md">
                <span className="material-symbols-outlined text-[20px]">arrow_outward</span>
              </span>
            </div>
          </div>
        </div>
      </article>
    );
  }

  if (item.layout === 'split') {
    return (
      <article data-yt={yt} className={`portfolio-item ${span} group relative bg-surface-container-low rounded-xl overflow-hidden shadow-xl transition-all duration-500 hover:shadow-[0_15px_45px_-10px_rgba(0,184,200,0.18)] ${yt ? 'cursor-pointer' : ''}`}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-center">
          <div className="lg:col-span-5 p-space-lg lg:p-space-xl flex flex-col justify-center order-2 lg:order-1">
            {item.eyebrow && (
              <div className="flex items-center gap-space-xs text-secondary font-label-sm text-label-sm uppercase tracking-widest mb-space-2xs">
                <span className="material-symbols-outlined text-[15px]">diamond</span>
                <span>{item.eyebrow}</span>
              </div>
            )}
            <h3 className="font-headline-md text-headline-md text-on-surface group-hover:text-primary transition-colors duration-300 mb-space-xs">{item.title}</h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant mb-space-md">{item.desc}</p>
            <div className="flex flex-wrap items-center gap-space-md font-label-sm text-label-sm text-outline uppercase tracking-wider">
              {item.metaLeft && (
                <div className="flex items-center gap-space-2xs">
                  <span className="material-symbols-outlined text-primary text-[16px]">location_on</span>
                  <span>{item.metaLeft}</span>
                </div>
              )}
              {item.metaRight && (
                <div className="flex items-center gap-space-2xs">
                  <span className="material-symbols-outlined text-primary text-[16px]">schedule</span>
                  <span>{item.metaRight}</span>
                </div>
              )}
            </div>
          </div>
          <div className={`lg:col-span-7 relative ${aspect} overflow-hidden bg-surface-container-high order-1 lg:order-2`}>
            <img className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 filter brightness-95" alt={item.title} src={src(item.image)} />
            <div className="absolute inset-0 bg-gradient-to-t from-surface-container-low via-transparent to-transparent lg:hidden"></div>
            {item.note && (
              <div className="absolute top-space-md right-space-md bg-surface-container-lowest/80 backdrop-blur-md px-space-sm py-space-2xs rounded text-primary font-label-sm text-label-sm tracking-widest uppercase">{item.note}</div>
            )}
          </div>
        </div>
      </article>
    );
  }

  return (
    <article data-yt={yt} className={`portfolio-item ${span} group relative bg-surface-container rounded-xl overflow-hidden shadow-xl transition-all duration-500 hover:shadow-[0_15px_40px_-10px_rgba(0,184,200,0.14)] flex flex-col justify-between ${yt ? 'cursor-pointer' : ''}`}>
      <div className={`relative ${aspect} overflow-hidden bg-surface-container-high`}>
        <img className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 filter contrast-105" alt={item.title} src={src(item.image)} />
        <div className="absolute inset-0 bg-gradient-to-t from-surface-container via-transparent to-black/20"></div>
        {tags.length > 0 && (
          <div className="absolute top-space-md left-space-md flex gap-space-2xs">
            {tags.map((t, k) => (
              <span key={k} className={`${chip} ${k === 0 ? 'text-primary' : 'text-on-surface'}`}>{t}</span>
            ))}
          </div>
        )}
        {item.note && (
          <div className="absolute bottom-space-md left-space-md flex items-center gap-space-2xs bg-surface-container-lowest/80 backdrop-blur-sm px-space-xs py-space-2xs rounded font-label-sm text-label-sm text-on-surface uppercase tracking-wider">
            <span className="material-symbols-outlined text-primary text-[14px]">hd</span>
            <span>{item.note}</span>
          </div>
        )}
      </div>
      <div className="p-space-lg flex flex-col gap-space-xs">
        {(item.metaLeft || item.metaRight) && (
          <div className="flex items-center justify-between text-outline font-label-sm text-label-sm tracking-widest uppercase">
            <span>{item.metaLeft}</span>
            <span className="text-primary font-medium">{item.metaRight}</span>
          </div>
        )}
        <h3 className="font-headline-sm text-headline-sm text-on-surface group-hover:text-primary transition-colors duration-300">{item.title}</h3>
        <p className="font-body-sm text-body-sm text-on-surface-variant">{item.desc}</p>
      </div>
    </article>
  );
}

export default function PortfolioPage() {
  const portfolio = useContent('portfolio');
  const items = portfolio.items || [];
  const categories = portfolio.categories || [];
  const [filter, setFilter] = useState('all');

  // Token match, not substring — "pre-weddings" must not count as "weddings".
  const hasCat = (it, key) => (it.categories || '').split(' ').filter(Boolean).includes(key);
  const countFor = (key) => (key === 'all' ? items.length : items.filter((it) => hasCat(it, key)).length);
  const shown = filter === 'all' ? items : items.filter((it) => hasCat(it, filter));
  const filters = [{ key: 'all', label: 'All' }, ...categories];

  return (
    <>
    <VideoLightbox />
    <div className="flex flex-col w-full">
      <div className="relative w-full overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 max-w-5xl h-72 bg-gradient-to-b from-primary/10 via-secondary-container/5 to-transparent blur-3xl pointer-events-none -z-10"></div>
        <section className="w-full px-margin-mobile lg:px-margin-desktop pt-space-xl lg:pt-space-2xl pb-space-lg">
          <div className="max-w-7xl mx-auto flex flex-col gap-space-md">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-space-xs">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
                <span className="font-label-sm text-label-sm uppercase tracking-[0.24em] text-primary">03 / CURATORIAL ARCHIVE</span>
              </div>
              <span className="font-label-sm text-label-sm uppercase tracking-[0.2em] text-outline font-light">INDEX 2021 — 2025</span>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-md items-end">
              <div className="lg:col-span-8">
                <h1 className="font-headline-lg lg:font-display-hero text-headline-lg lg:text-display-hero uppercase tracking-tight text-on-surface leading-[1.08]">
              Moments Immortalized in <span className="font-headline-lg lg:font-display-hero text-primary italic font-normal">35mm Cadence.</span>
</h1>
              </div>
              <div className="lg:col-span-4 lg:pl-space-md">
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              An exhibition of destination weddings, intimate ceremonies, and editorial love stories across Udaipur, Jaipur, Lake Como, and beyond.
            </p>
              </div>
            </div>
            <div className="w-full h-px bg-gradient-to-r from-primary/40 via-outline-variant to-transparent my-space-xs"></div>
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-space-md pt-space-xs" id="portfolio-filters">
              <div className="flex flex-wrap items-center gap-space-xs bg-surface-container-low p-space-2xs rounded-lg shadow-sm">
                {filters.map((f) => (
                  <button
                    key={f.key}
                    type="button"
                    onClick={() => setFilter(f.key)}
                    className={`portfolio-filter-btn px-space-md py-space-xs rounded font-label-md text-label-md tracking-wider uppercase transition-all duration-300 ${filter === f.key ? 'bg-primary-container text-on-primary-container font-semibold shadow-sm' : 'text-on-surface-variant hover:text-primary'}`}
                  >
                    {f.label} ({countFor(f.key)})
                  </button>
                ))}
              </div>
              <div className="hidden md:flex items-center gap-space-sm font-label-sm text-label-sm text-outline uppercase tracking-widest">
                <span className="">SORT: CHRONOLOGICAL</span>
                <span className="">•</span>
                <span className="text-primary font-medium">CURATOR'S CUT</span>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full px-margin-mobile lg:px-margin-desktop py-space-md">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-gutter lg:gap-y-space-2xl">
            {shown.map((it, i) => (
              <PortfolioCard key={it.id || i} item={it} />
            ))}
          </div>
        </section>
        <section className="w-full px-margin-mobile lg:px-margin-desktop py-space-2xl bg-surface-container-low/60 relative overflow-hidden mt-space-xl">
          <div className="max-w-7xl mx-auto flex flex-col gap-space-xl">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md pb-space-xs">
              <div>
                <span className="font-label-sm text-label-sm uppercase tracking-[0.24em] text-primary block mb-space-2xs">ARCHIVAL RIGOR</span>
                <h2 className="font-headline-lg text-headline-lg text-on-surface">The Anatomy of Heirloom Cinema</h2>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant max-w-md">
            Every celebration is documented with redundant dual-system audio recording, master prime optics, and color grading tuned to master film stocks.
          </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-gutter">
              <div className="bg-surface-container p-space-lg rounded-lg shadow-md flex flex-col justify-between group hover:bg-surface-container-high transition-colors duration-300">
                <span className="font-label-sm text-label-sm uppercase text-outline tracking-widest">Films Documented</span>
                <div className="my-space-md">
                  <span className="font-display-hero text-display-hero text-primary font-normal leading-none">142</span>
                </div>
                <div className="flex items-center gap-space-2xs text-on-surface-variant font-body-sm text-body-sm">
                  <span className="material-symbols-outlined text-primary text-[18px]">verified</span>
                  <span className="">Stories Cast Worldwide</span>
                </div>
              </div>
              <div className="bg-surface-container p-space-lg rounded-lg shadow-md flex flex-col justify-between group hover:bg-surface-container-high transition-colors duration-300">
                <span className="font-label-sm text-label-sm uppercase text-outline tracking-widest">Global Escapes</span>
                <div className="my-space-md">
                  <span className="font-display-hero text-display-hero text-on-surface font-normal leading-none">18</span>
                </div>
                <div className="flex items-center gap-space-2xs text-on-surface-variant font-body-sm text-body-sm">
                  <span className="material-symbols-outlined text-primary text-[18px]">public</span>
                  <span className="">Destination Cities</span>
                </div>
              </div>
              <div className="bg-surface-container p-space-lg rounded-lg shadow-md flex flex-col justify-between group hover:bg-surface-container-high transition-colors duration-300">
                <span className="font-label-sm text-label-sm uppercase text-outline tracking-widest">Candid Ratio</span>
                <div className="my-space-md flex items-baseline">
                  <span className="font-display-hero text-display-hero text-primary font-normal leading-none">100</span>
                  <span className="text-headline-md font-headline-md text-primary">%</span>
                </div>
                <div className="flex items-center gap-space-2xs text-on-surface-variant font-body-sm text-body-sm">
                  <span className="material-symbols-outlined text-primary text-[18px]">theater_comedy</span>
                  <span className="">Unscripted Integrity</span>
                </div>
              </div>
              <div className="bg-surface-container p-space-lg rounded-lg shadow-md flex flex-col justify-between group hover:bg-surface-container-high transition-colors duration-300">
                <span className="font-label-sm text-label-sm uppercase text-outline tracking-widest">Master Format</span>
                <div className="my-space-md">
                  <span className="font-display-hero text-display-hero text-on-surface font-normal leading-none">4K</span>
                </div>
                <div className="flex items-center gap-space-2xs text-on-surface-variant font-body-sm text-body-sm">
                  <span className="material-symbols-outlined text-primary text-[18px]">album</span>
                  <span className="">DCI Archival Master</span>
                </div>
              </div>
            </div>
            <div className="p-space-lg bg-surface-container rounded-xl shadow-lg flex flex-col md:flex-row items-center justify-between gap-space-md">
              <div className="flex items-center gap-space-md">
                <div className="w-12 h-12 rounded-full bg-surface-container-highest flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined text-[24px]">camera</span>
                </div>
                <div>
                  <h4 className="font-headline-sm text-headline-sm text-on-surface">Curated Optical Ecosystem</h4>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">Arri Alexa Mini LF, Cooke Anamorphic /i Full Frame Plus, Hasselblad H6D Medium Format.</p>
                </div>
              </div>
              <div className="flex items-center gap-space-sm w-full md:w-auto justify-end">
                <span className="font-label-sm text-label-sm text-primary tracking-widest uppercase">COLOR CALIBRATION: KODAK 2383 PRINT EMULATION</span>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full px-margin-mobile lg:px-margin-desktop py-space-3xl relative">
          <div className="max-w-7xl mx-auto bg-gradient-to-r from-surface-container-low via-surface-container to-surface-container-low p-space-xl lg:p-space-2xl rounded-xl shadow-2xl relative overflow-hidden">
            <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-primary/10 rounded-full blur-3xl pointer-events-none"></div>
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-center">
              <div className="lg:col-span-8 flex flex-col gap-space-xs">
                <span className="font-label-sm text-label-sm uppercase tracking-[0.28em] text-primary">CONFIDENTIAL PROOFING VAULT</span>
                <h3 className="font-headline-lg text-headline-lg text-on-surface">
              Looking for a specific celebration or venue aesthetic?
            </h3>
                <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl font-light">
              We maintain unlisted private screenings for iconic estates—including Taj Lake Palace, Umaid Bhawan, Villa d'Este, and Amanbagh. Request bespoke proofs tailored to your itinerary.
            </p>
              </div>
              <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-space-sm justify-end items-stretch">
                <a className="inline-flex items-center justify-center px-space-lg py-space-md bg-primary-container text-on-primary-container font-label-md text-label-md uppercase tracking-wider rounded font-semibold shadow-lg hover:bg-primary transition-all duration-300 text-center" data-path="contact" href={withBase("/contact/")}>
              REQUEST PRIVATE VAULT ACCESS
            </a>
                <a className="inline-flex items-center justify-center px-space-lg py-space-md bg-surface-container-highest text-on-surface hover:text-primary font-label-md text-label-md uppercase tracking-wider rounded transition-all duration-300 text-center" data-path="contact" href={withBase("/contact/")}>
              BOOK YOUR DATE
            </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
    <SiteFooter />
    </>
  );
}
