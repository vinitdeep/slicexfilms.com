'use client';

import { withBase } from '../lib/basePath';
import { useContent } from '../lib/content';

// "What we create" grid on the home page — driven by the editable "services"
// content (admin panel → Services). Layout mirrors the original hand-built cards.
const img = (src) => (/^https?:\/\//.test(src || '') ? src : withBase(src || '/assets/service-wedding-films.jpg'));

export default function HomeServices() {
  const { items = [] } = useContent('services');
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-md md:gap-space-lg">
      {items.map((s, i) => (
        <a key={s.id || i} href={withBase('/services/')} className="group p-space-md md:p-space-xl flex flex-col justify-between min-h-[240px] md:min-h-[400px] gap-space-md border border-primary-container/15 hover:border-primary/50 transition-all duration-500 relative overflow-hidden">
          <img src={img(s.image)} alt={s.title} loading="lazy" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/40 group-hover:via-black/55 group-hover:to-black/25 transition-all duration-500"></div>
          <div className="flex justify-between items-start relative z-10">
            <span className="font-numerical-index text-numerical-index text-secondary font-bold group-hover:text-primary transition-colors">{String(i + 1).padStart(2, '0')}</span>
            <span className="material-symbols-outlined text-white/70 group-hover:text-primary group-hover:rotate-45 transition-all text-[24px]">arrow_outward</span>
          </div>
          <div className="relative z-10">
            <h3 className="font-headline-md text-headline-sm md:text-headline-md uppercase text-white group-hover:text-primary font-normal tracking-tight mb-space-xs md:mb-space-sm transition-colors">{s.title}</h3>
            <p className="font-body-sm text-body-sm text-white/75 font-light leading-relaxed">{s.desc}</p>
            {(s.tag1 || s.tag2) && (
              <div className="mt-space-md pt-space-sm border-t border-white/20 flex items-center justify-between font-metadata-dense text-metadata-dense text-secondary tracking-widest uppercase font-semibold">
                {s.tag1 && <span className="bg-primary/20 backdrop-blur-sm px-2 py-0.5 rounded text-primary">{s.tag1}</span>}
                {s.tag2 && <span className="text-white/60">{s.tag2}</span>}
              </div>
            )}
          </div>
        </a>
      ))}
    </div>
  );
}
