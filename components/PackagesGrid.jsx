'use client';

import { withBase } from '../lib/basePath';
import { useContent } from '../lib/content';

// "Curated offerings" price grid — driven by the editable "packages" content
// (admin panel → Packages). The popular tier gets the highlighted treatment.
export default function PackagesGrid({ ctaHref = '/book-your-date/' }) {
  const { items = [] } = useContent('packages');
  const cols = items.length >= 4 ? 'lg:grid-cols-4' : items.length === 3 ? 'lg:grid-cols-3' : 'lg:grid-cols-2';
  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 ${cols} gap-space-lg mb-space-4xl`}>
      {items.map((p, i) => (
        <div
          key={p.id || i}
          className={`bg-surface-container p-space-xl flex flex-col justify-between relative hover:bg-surface-container-high border transition-all ${
            p.popular ? 'border-primary-container/30 hover:border-primary/60 shadow-md' : 'border-primary-container/20 hover:border-primary/50'
          }`}
        >
          {p.popular && <span className="absolute -top-3 right-space-md px-space-sm py-0.5 bg-primary text-on-primary font-metadata-dense text-[10px] tracking-widest uppercase rounded shadow">Most Popular</span>}
          <div>
            <span className={`font-metadata-dense text-metadata-dense tracking-widest uppercase ${p.popular ? 'text-primary font-bold' : 'text-secondary font-semibold'}`}>
              {p.label || `OPTION ${String(i + 1).padStart(2, '0')}`}{p.popular ? ' • POPULAR' : ''}
            </span>
            <h3 className="font-headline-sm text-headline-sm uppercase text-primary font-light mt-space-2xs">{p.name}</h3>
            <div className="mt-space-lg mb-space-lg">
              <span className="font-display-lg-mobile text-display-lg-mobile font-normal text-primary-fixed">{p.price}</span>
              {p.priceNote && <span className="font-metadata-dense text-metadata-dense text-secondary uppercase block mt-1 font-semibold">{p.priceNote}</span>}
            </div>
            <ul className="space-y-space-xs font-body-sm text-body-sm text-on-surface-variant border-t border-primary-container/20 pt-space-md">
              {(p.features || []).map((f, j) => (
                <li key={j} className="flex items-center gap-space-xs"><span className="material-symbols-outlined text-[16px] text-primary">check</span> {f}</li>
              ))}
            </ul>
          </div>
          <div className="pt-space-xl">
            <a
              className={`w-full inline-block text-center py-space-sm font-label-uppercase text-label-uppercase uppercase rounded-full transition-all ${
                p.popular
                  ? 'bg-primary text-on-primary hover:bg-primary-fixed shadow-[0_0_24px_rgba(62,230,240,.35)]'
                  : 'bg-surface-container-highest border border-primary-container/40 text-primary hover:bg-primary hover:text-on-primary'
              }`}
              href={withBase(ctaHref)}
            >
              INQUIRE TIER
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}
