'use client';

import { withBase } from '../lib/basePath';
import { useContent } from '../lib/content';

// Services page collections — driven by the editable "services" content
// (admin panel → Services, or Home → Services). The first entry renders as the
// flagship feature, the next two as large cards, and everything after that
// flows into the compact grid, so any number of services is supported.

const ROMAN = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XI', 'XII'];
const img = (s) => {
  const src = s.pageImage || s.image || '';
  return /^https?:\/\//.test(src) ? src : withBase(src);
};
const num = (i) => String(i + 1).padStart(2, '0');
const collectionOf = (s, i) => s.collection || `COLLECTION ${ROMAN[i] || i + 1}`;
const titleOf = (s) => s.pageTitle || s.title;
const descOf = (s) => s.pageDesc || s.desc;
const badgeOf = (s) => s.badge || s.tag1;
const listOf = (s) => (Array.isArray(s.deliverables) ? s.deliverables.filter(Boolean) : []);

const CARD = 'group bg-surface-container rounded-xl overflow-hidden shadow-xl flex flex-col justify-between transition-all duration-300 hover:shadow-[0_15px_40px_rgba(0,184,200,0.08)]';
const CHIP = 'px-space-sm py-space-2xs bg-surface-container-lowest/80 backdrop-blur-md font-label-sm text-label-sm tracking-widest uppercase rounded';
const LINK = 'inline-flex items-center gap-space-xs text-primary font-label-md text-label-md uppercase tracking-[0.18em] hover:translate-x-1 transition-transform';

function Feature({ s, i }) {
  const list = listOf(s);
  return (
    <article className="group relative bg-surface-container rounded-xl overflow-hidden shadow-2xl transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,184,200,0.1)]">
      <div className="grid grid-cols-1 lg:grid-cols-12">
        <div className="lg:col-span-7 relative min-h-[460px] lg:min-h-[580px] overflow-hidden bg-surface-container-lowest">
          <img className="absolute inset-0 w-full h-full object-cover object-center transform scale-100 group-hover:scale-105 transition-transform duration-700 ease-out" alt={titleOf(s)} src={img(s)} />
          <div className="absolute inset-0 bg-gradient-to-t from-surface-container via-transparent to-transparent opacity-80 lg:hidden"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-surface-container hidden lg:block"></div>
          <div className="absolute top-space-md left-space-md flex items-center gap-space-xs">
            {badgeOf(s) && <span className={`${CHIP} text-primary`}>{badgeOf(s)}</span>}
            {s.badge2 && <span className={`${CHIP} text-on-surface`}>{s.badge2}</span>}
          </div>
          <div className="absolute bottom-space-md left-space-md right-space-md flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm tracking-widest">
            <span className="flex items-center gap-space-2xs">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              COLOR SCIENCE: ACES 33-POINT LUT
            </span>
            <span>2.39:1 CINEMASCOPE</span>
          </div>
        </div>
        <div className="lg:col-span-5 p-space-xl lg:p-space-2xl flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-space-sm">
              <span className="font-label-sm text-label-sm uppercase tracking-[0.24em] text-primary">{collectionOf(s, i)}</span>
              <span className="font-headline-sm text-headline-sm text-outline-variant font-light">{num(i)}</span>
            </div>
            <h2 className="font-headline-lg text-headline-lg uppercase text-on-surface mb-space-sm leading-tight">{titleOf(s)}</h2>
            <p className="font-body-md text-body-md text-on-surface-variant mb-space-lg leading-relaxed">{descOf(s)}</p>
            <div className="space-y-space-md mb-space-xl">
              {list.length > 0 && (
                <div className="bg-surface-container-low p-space-md rounded">
                  <span className="font-label-sm text-label-sm uppercase tracking-widest text-primary block mb-space-2xs">{s.deliverablesLabel || 'DELIVERABLES'}</span>
                  <ul className="font-body-sm text-body-sm text-on-surface space-y-space-2xs">
                    {list.map((d, k) => (
                      <li key={k} className="flex items-center gap-space-xs">
                        <span className="material-symbols-outlined text-primary text-[14px]">check_circle</span>
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {s.optics && (
                <div className="bg-surface-container-low p-space-md rounded">
                  <span className="font-label-sm text-label-sm uppercase tracking-widest text-outline block mb-space-2xs">STUDIO OPTICS &amp; SENSORS</span>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">{s.optics}</p>
                </div>
              )}
            </div>
          </div>
          <div className="pt-space-md flex items-center justify-between">
            <a className={LINK} href={withBase('/contact/')}>
              {s.cta || 'INQUIRE'}
              <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </a>
            {s.note && <span className="font-label-sm text-label-sm uppercase text-outline">{s.note}</span>}
          </div>
        </div>
      </div>
    </article>
  );
}

function LargeCard({ s, i }) {
  const list = listOf(s);
  return (
    <article className={CARD}>
      <div className="relative h-80 overflow-hidden bg-surface-container-lowest">
        <img className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out" alt={titleOf(s)} src={img(s)} />
        {badgeOf(s) && (
          <div className="absolute top-space-md left-space-md flex items-center gap-space-xs">
            <span className={`${CHIP} text-primary`}>{badgeOf(s)}</span>
          </div>
        )}
        <div className="absolute bottom-space-md right-space-md font-headline-sm text-headline-sm text-outline-variant">{num(i)}</div>
      </div>
      <div className="p-space-xl flex-1 flex flex-col justify-between">
        <div>
          <span className="font-label-sm text-label-sm uppercase tracking-[0.24em] text-primary block mb-space-2xs">{collectionOf(s, i)}</span>
          <h2 className="font-headline-lg text-headline-lg uppercase text-on-surface mb-space-sm">{titleOf(s)}</h2>
          <p className="font-body-md text-body-md text-on-surface-variant mb-space-md leading-relaxed">{descOf(s)}</p>
          <div className="space-y-space-sm mb-space-lg">
            {list.length > 0 && (
              <div className="bg-surface-container-low p-space-sm rounded">
                <span className="font-label-sm text-label-sm uppercase tracking-widest text-primary block mb-space-2xs">{s.deliverablesLabel || 'DELIVERABLES'}</span>
                <p className="font-body-sm text-body-sm text-on-surface">{list.join(' • ')}</p>
              </div>
            )}
            {s.optics && (
              <div className="bg-surface-container-low p-space-sm rounded">
                <span className="font-label-sm text-label-sm uppercase tracking-widest text-outline block mb-space-2xs">OPTICS</span>
                <p className="font-body-sm text-body-sm text-on-surface-variant">{s.optics}</p>
              </div>
            )}
          </div>
        </div>
        <div className="pt-space-sm flex items-center justify-between">
          <a className={LINK} href={withBase('/contact/')}>
            {s.cta || 'INQUIRE'}
            <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
          </a>
        </div>
      </div>
    </article>
  );
}

function CompactCard({ s, i }) {
  const list = listOf(s);
  return (
    <article className={CARD}>
      <div className="relative h-64 overflow-hidden bg-surface-container-lowest">
        <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" alt={titleOf(s)} src={img(s)} />
        {badgeOf(s) && (
          <div className="absolute top-space-md left-space-md">
            <span className={`${CHIP} text-primary`}>{badgeOf(s)}</span>
          </div>
        )}
        <div className="absolute bottom-space-md right-space-md font-headline-sm text-headline-sm text-outline-variant">{num(i)}</div>
      </div>
      <div className="p-space-lg flex-1 flex flex-col justify-between">
        <div>
          <span className="font-label-sm text-label-sm uppercase tracking-[0.2em] text-primary block mb-space-2xs">{collectionOf(s, i)}</span>
          <h3 className="font-headline-md text-headline-md uppercase text-on-surface mb-space-xs">{titleOf(s)}</h3>
          <p className="font-body-sm text-body-sm text-on-surface-variant mb-space-md">{descOf(s)}</p>
          {list.length > 0 && (
            <div className="bg-surface-container-low p-space-sm rounded mb-space-md space-y-space-2xs">
              <span className="font-label-sm text-label-sm uppercase tracking-widest text-primary block">{s.deliverablesLabel || 'OUTPUT'}</span>
              <p className="font-body-sm text-body-sm text-on-surface">{list.join(' • ')}</p>
            </div>
          )}
        </div>
        <a className="inline-flex items-center gap-space-2xs text-primary font-label-sm text-label-sm uppercase tracking-widest hover:translate-x-1 transition-transform" href={withBase('/contact/')}>
          {s.cta || 'INQUIRE'}
          <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
        </a>
      </div>
    </article>
  );
}

export default function ServicesCollections() {
  const { items = [] } = useContent('services');
  const [feature, ...rest] = items;
  const large = rest.slice(0, 2);
  const compact = rest.slice(2);

  return (
    <div className="max-w-7xl mx-auto flex flex-col gap-space-4xl">
      {feature && <Feature s={feature} i={0} />}
      {large.length > 0 && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-space-xl">
          {large.map((s, k) => <LargeCard key={s.id || k} s={s} i={k + 1} />)}
        </div>
      )}
      {compact.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-xl">
          {compact.map((s, k) => <CompactCard key={s.id || k} s={s} i={k + 3} />)}
        </div>
      )}
    </div>
  );
}
