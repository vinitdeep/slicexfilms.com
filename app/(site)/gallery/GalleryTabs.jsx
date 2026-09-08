'use client';

import { useEffect, useMemo, useState, useCallback } from 'react';
import { withBase } from '../../../lib/basePath';
import { useContent } from '../../../lib/content';

// Gallery: three tabs (Video / Image / Reels), each a filterable grid that
// opens in a lightbox. Videos and reels are YouTube IDs (played via the
// privacy-enhanced embed); images are local or remote URLs. The active tab
// is mirrored in the URL hash so /gallery/#reels deep-links.

const TABS = [
  { key: 'video', label: 'Video', icon: 'movie' },
  { key: 'image', label: 'Image', icon: 'photo_library' },
  { key: 'reels', label: 'Reels', icon: 'smartphone' },
];

const ytThumb = (id, q = 'hq720') => `https://i.ytimg.com/vi/${id}/${q}.jpg`;
// hq720 is a true 16:9 frame but is missing for some older uploads; fall back
// to the always-present (letterboxed 4:3) hqdefault.
const onThumbError = (e) => {
  const img = e.currentTarget;
  if (!img.dataset.fallback) { img.dataset.fallback = '1'; img.src = img.src.replace(/\/[a-z0-9]+\.jpg$/, '/hqdefault.jpg'); }
};
const ytEmbed = (id) => `https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0&modestbranding=1&playsinline=1`;
const resolve = (src) => (/^https?:\/\//.test(src) ? src : withBase(src));

function useHashTab() {
  const [tab, setTab] = useState('video');
  useEffect(() => {
    const read = () => {
      const h = (window.location.hash || '').replace('#', '').toLowerCase();
      if (TABS.some((t) => t.key === h)) setTab(h);
    };
    read();
    window.addEventListener('hashchange', read);
    return () => window.removeEventListener('hashchange', read);
  }, []);
  const go = useCallback((key) => {
    setTab(key);
    if (typeof window !== 'undefined') history.replaceState(null, '', `#${key}`);
  }, []);
  return [tab, go];
}

function Chips({ items, value, onChange }) {
  const cats = useMemo(() => ['All', ...Array.from(new Set(items.map((i) => i.category).filter(Boolean)))], [items]);
  if (cats.length <= 2) return null;
  return (
    <div className="flex flex-wrap gap-space-2xs">
      {cats.map((c) => (
        <button
          key={c}
          type="button"
          onClick={() => onChange(c)}
          className={`px-space-sm py-space-2xs rounded-full font-label-sm text-label-sm uppercase tracking-widest border transition-colors ${
            value === c ? 'bg-primary text-on-primary border-primary' : 'bg-transparent text-on-surface-variant border-primary-container/30 hover:text-primary hover:border-primary/60'
          }`}
        >
          {c}
        </button>
      ))}
    </div>
  );
}

function PlayBadge({ small }) {
  return (
    <span className={`absolute inset-0 flex items-center justify-center pointer-events-none`}>
      <span className={`${small ? 'w-10 h-10' : 'w-16 h-16'} rounded-full bg-primary/90 text-on-primary flex items-center justify-center shadow-[0_0_30px_rgba(62,230,240,.45)] transition-transform duration-300 group-hover:scale-110`}>
        <span className="material-symbols-outlined" style={{ fontSize: small ? 22 : 32 }}>play_arrow</span>
      </span>
    </span>
  );
}

function VideoGrid({ items, onOpen }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-space-md">
      {items.map((v, i) => (
        <button
          key={v.id}
          type="button"
          onClick={() => onOpen(i)}
          className={`group relative text-left flex flex-col rounded-xl overflow-hidden bg-surface-container-low border border-primary-container/10 hover:border-primary/50 transition-colors ${v.featured ? 'sm:col-span-2 lg:col-span-2 lg:row-span-2' : ''}`}
        >
          <div className={`relative overflow-hidden ${v.featured ? 'aspect-video lg:aspect-auto lg:flex-1 lg:min-h-[320px]' : 'aspect-video'}`}>
            <img
              src={v.thumb ? resolve(v.thumb) : ytThumb(v.id, v.featured ? 'maxresdefault' : 'hq720')}
              onError={onThumbError}
              alt={v.title}
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest/90 via-surface-container-lowest/10 to-transparent"></div>
            <PlayBadge />
            {v.featured && (
              <span className="absolute top-3 left-3 px-2 py-1 bg-primary text-on-primary font-metadata-dense text-[10px] tracking-widest uppercase rounded">Flagship</span>
            )}
          </div>
          <div className="p-space-sm flex items-start justify-between gap-space-sm">
            <div className="min-w-0">
              <p className="font-headline-sm text-headline-sm text-on-surface truncate">{v.title}</p>
              <span className="font-label-sm text-label-sm uppercase tracking-widest text-outline">{v.category}</span>
            </div>
            <span className="material-symbols-outlined text-primary opacity-70">arrow_outward</span>
          </div>
        </button>
      ))}
    </div>
  );
}

function ImageGrid({ items, onOpen }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-space-sm auto-rows-[180px] md:auto-rows-[220px] grid-flow-dense">
      {items.map((im, i) => (
        <button
          key={im.src + i}
          type="button"
          onClick={() => onOpen(i)}
          className={`group relative rounded-xl overflow-hidden bg-surface-container-low border border-primary-container/10 hover:border-primary/50 transition-colors ${im.tall ? 'row-span-2' : ''} ${im.wide ? 'col-span-2' : ''}`}
        >
          <img src={resolve(im.src)} alt={im.title || ''} loading="lazy" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" />
          <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest/85 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="absolute bottom-0 inset-x-0 p-space-sm translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
            <p className="font-headline-sm text-headline-sm text-on-surface leading-tight">{im.title}</p>
            <span className="font-label-sm text-label-sm uppercase tracking-widest text-primary">{im.category}</span>
          </div>
          <span className="absolute top-3 right-3 w-8 h-8 rounded-full bg-surface-container-lowest/70 backdrop-blur text-primary flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <span className="material-symbols-outlined" style={{ fontSize: 18 }}>zoom_in</span>
          </span>
        </button>
      ))}
    </div>
  );
}

function ReelGrid({ items, onOpen }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-space-sm md:gap-space-md">
      {items.map((r, i) => (
        <button
          key={r.id}
          type="button"
          onClick={() => onOpen(i)}
          className="group relative text-left rounded-xl overflow-hidden bg-surface-container-low border border-primary-container/10 hover:border-primary/50 transition-colors"
        >
          <div className="relative aspect-[9/16] overflow-hidden">
            {/* YouTube thumbnails are 16:9; object-cover zooms into the centre where the vertical frame sits. */}
            <img src={r.thumb ? resolve(r.thumb) : ytThumb(r.id, 'hq720')} onError={onThumbError} alt={r.title} loading="lazy" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest/90 via-transparent to-surface-container-lowest/20"></div>
            <PlayBadge small />
            <span className="absolute top-3 left-3 px-2 py-1 bg-surface-container-lowest/70 backdrop-blur text-primary font-metadata-dense text-[10px] tracking-widest uppercase rounded">9:16</span>
            <div className="absolute bottom-0 inset-x-0 p-space-sm">
              <p className="font-headline-sm text-headline-sm text-on-surface leading-tight">{r.title}</p>
              <span className="font-label-sm text-label-sm uppercase tracking-widest text-outline">{r.category}</span>
            </div>
          </div>
        </button>
      ))}
    </div>
  );
}

function Lightbox({ kind, items, index, onClose, onStep }) {
  const item = items[index];
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onStep(1);
      if (e.key === 'ArrowLeft') onStep(-1);
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => { document.removeEventListener('keydown', onKey); document.body.style.overflow = ''; };
  }, [onClose, onStep]);
  if (!item) return null;
  const nav = (dir) => (e) => { e.stopPropagation(); onStep(dir); };
  return (
    <div onClick={onClose} className="fixed inset-0 z-[100] flex items-center justify-center bg-surface-container-lowest/95 backdrop-blur-md p-space-md" role="dialog" aria-modal="true">
      <button type="button" onClick={onClose} aria-label="Close" className="absolute top-4 right-4 w-11 h-11 rounded-full bg-surface-container-high text-on-surface hover:text-primary flex items-center justify-center z-10">
        <span className="material-symbols-outlined">close</span>
      </button>
      {items.length > 1 && (
        <>
          <button type="button" onClick={nav(-1)} aria-label="Previous" className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-surface-container-high/80 text-on-surface hover:text-primary flex items-center justify-center z-10">
            <span className="material-symbols-outlined">chevron_left</span>
          </button>
          <button type="button" onClick={nav(1)} aria-label="Next" className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-surface-container-high/80 text-on-surface hover:text-primary flex items-center justify-center z-10">
            <span className="material-symbols-outlined">chevron_right</span>
          </button>
        </>
      )}
      <div onClick={(e) => e.stopPropagation()} className="relative flex flex-col items-center gap-space-sm max-w-full">
        {kind === 'video' && (
          <div className="w-[min(92vw,1100px)] aspect-video bg-black rounded-xl overflow-hidden shadow-2xl border border-primary-container/30">
            <iframe key={item.id} src={ytEmbed(item.id)} title={item.title} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen className="w-full h-full" />
          </div>
        )}
        {kind === 'reels' && (
          <div className="h-[min(85vh,820px)] aspect-[9/16] bg-black rounded-2xl overflow-hidden shadow-2xl border border-primary-container/30">
            <iframe key={item.id} src={ytEmbed(item.id)} title={item.title} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen className="w-full h-full" />
          </div>
        )}
        {kind === 'image' && (
          <img key={item.src} src={resolve(item.src)} alt={item.title || ''} className="max-w-[92vw] max-h-[82vh] object-contain rounded-xl shadow-2xl border border-primary-container/30" />
        )}
        <div className="flex items-center gap-space-sm font-label-sm text-label-sm uppercase tracking-widest text-outline">
          <span className="text-on-surface normal-case tracking-normal font-headline-sm text-headline-sm">{item.title}</span>
          {item.category && <><span>•</span><span className="text-primary">{item.category}</span></>}
          <span>•</span><span>{index + 1} / {items.length}</span>
        </div>
      </div>
    </div>
  );
}

export default function GalleryTabs({ videos: v0, images: i0, reels: r0 }) {
  // Saved gallery content (admin panel → Gallery) overrides the built-in lists.
  const saved = useContent('gallery');
  const videos = saved?.videos?.length ? saved.videos : v0;
  const images = saved?.images?.length ? saved.images : i0;
  const reels = saved?.reels?.length ? saved.reels : r0;
  const [tab, setTab] = useHashTab();
  const [filter, setFilter] = useState({ video: 'All', image: 'All', reels: 'All' });
  const [open, setOpen] = useState(null); // { kind, index }

  const source = { video: videos, image: images, reels };
  const items = useMemo(() => {
    const f = filter[tab];
    return source[tab].filter((i) => f === 'All' || i.category === f);
  }, [tab, filter, videos, images, reels]);

  const openAt = (index) => setOpen({ kind: tab, index });
  const close = useCallback(() => setOpen(null), []);
  const step = useCallback((dir) => setOpen((o) => (o ? { ...o, index: (o.index + dir + items.length) % items.length } : o)), [items.length]);

  return (
    <section className="w-full bg-surface-container-lowest px-margin-mobile lg:px-margin-desktop py-space-2xl border-t border-primary-container/20 min-h-[60vh]">
      <div className="max-w-7xl mx-auto flex flex-col gap-space-lg">
        {/* Tabs */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-space-md">
          <div role="tablist" aria-label="Gallery type" className="inline-flex max-w-full overflow-x-auto p-1 rounded-full bg-surface-container-low border border-primary-container/20 self-start">
            {TABS.map((t) => {
              const active = tab === t.key;
              const count = source[t.key].length;
              return (
                <button
                  key={t.key}
                  role="tab"
                  type="button"
                  aria-selected={active}
                  onClick={() => setTab(t.key)}
                  className={`flex items-center gap-space-2xs px-space-sm md:px-space-md py-space-xs rounded-full font-label-md text-label-md uppercase tracking-widest whitespace-nowrap transition-all duration-300 ${
                    active ? 'bg-primary text-on-primary shadow-[0_0_24px_rgba(62,230,240,.35)]' : 'text-on-surface-variant hover:text-primary'
                  }`}
                >
                  <span className="material-symbols-outlined" style={{ fontSize: 18 }}>{t.icon}</span>
                  {t.label}
                  <span className={`ml-1 px-1.5 py-0.5 rounded-full font-metadata-dense text-[10px] ${active ? 'bg-on-primary/15' : 'bg-surface-container-high'}`}>{count}</span>
                </button>
              );
            })}
          </div>
          <Chips items={source[tab]} value={filter[tab]} onChange={(c) => setFilter((f) => ({ ...f, [tab]: c }))} />
        </div>

        {/* Grid */}
        <div key={tab} className="animate-[fadeIn_.35s_ease-out]">
          {items.length === 0 && (
            <p className="font-body-md text-body-md text-outline py-space-2xl text-center">Nothing here yet — add items in <code>gallery-data.js</code>.</p>
          )}
          {tab === 'video' && <VideoGrid items={items} onOpen={openAt} />}
          {tab === 'image' && <ImageGrid items={items} onOpen={openAt} />}
          {tab === 'reels' && <ReelGrid items={items} onOpen={openAt} />}
        </div>

        <p className="font-label-sm text-label-sm uppercase tracking-widest text-outline text-center pt-space-md">
          More on <a className="text-primary hover:underline" href="https://www.youtube.com/@slicexfilms8741" target="_blank" rel="noopener">YouTube</a> and <a className="text-primary hover:underline" href="https://www.instagram.com/slicexfilms/" target="_blank" rel="noopener">Instagram</a>
        </p>
      </div>

      {open && <Lightbox kind={open.kind} items={items} index={open.index} onClose={close} onStep={step} />}
      <style>{`@keyframes fadeIn{from{opacity:0;transform:translateY(6px)}to{opacity:1;transform:none}}`}</style>
    </section>
  );
}
