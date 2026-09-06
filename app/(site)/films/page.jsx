'use client';

import VideoLightbox from '../../../components/VideoLightbox';
import { withBase } from '../../../lib/basePath';

// Real films from youtube.com/@slicexfilms8741 — thumbnails and playback pull
// straight from YouTube by video id.
const thumb = (id) => `https://i.ytimg.com/vi/${id}/maxresdefault.jpg`;

const HERO = {
  id: 'MIBoIxNjfXM',
  title: 'Pratap & Supriya — The Wedding Film',
  category: 'Feature Wedding Film',
};

const TEASERS = [
  { id: 'tFyz_XO2naA', title: 'Subhashree', category: 'Wedding Teaser', blurb: 'A distilled cinematic teaser — rhythmic cuts scored to a custom soundtrack.' },
  { id: '5LP3Ic7RVpw', title: 'So Called Cinematic Wedding', category: 'Wedding Film', blurb: 'A modern, story-first wedding film with a bold editorial edge.' },
  { id: '8NngCj7b_uA', title: 'Alisha Dash', category: 'Wedding Film', blurb: 'Warm, candid, and unhurried — the day as it truly unfolded.' },
];

const FULL_FILMS = [
  { id: 'BApJaloacXg', title: 'Sanjeeb & Asha — Full Wedding Film', category: 'Full Wedding Film', blurb: 'A complete three-act wedding film preserving every ritual, toast, and unscripted tear.' },
  { id: 'jEFML86Tk7g', title: 'Gobinda & Mamuni — Wedding Film', category: 'Full Wedding Film', blurb: 'Grand celebration and quiet family moments woven into one cinematic narrative.' },
];

const REELS = [
  { id: 'r4KTSRpp17s', title: 'Dillu & Dikshya', category: 'Pre-Wedding' },
  { id: '6GrJci58sFQ', title: 'Abhishek & Neha', category: 'Engagement' },
  { id: 'YomPpYhVIws', title: 'Niharika & Chandan', category: 'Pre-Wedding' },
  { id: 'wJE3qiRBVyY', title: 'Manisha & Swagat', category: 'Engagement' },
];

export default function FilmsPage() {
  return (
    <>
    <VideoLightbox />
    <div className="flex flex-col w-full">
      <section className="relative w-full px-margin-mobile lg:px-margin-desktop pt-space-xl pb-space-2xl overflow-hidden">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[720px] h-[360px] bg-primary/5 blur-[120px] rounded-full pointer-events-none"></div>
        <div className="relative z-10 max-w-6xl mx-auto flex flex-col items-center text-center">
          <div className="flex items-center gap-space-sm mb-space-sm">
            <span className="inline-block w-6 h-[1px] bg-primary"></span>
            <span className="font-label-sm text-label-sm uppercase tracking-[0.25em] text-primary">04 / THE SCREENING ROOM</span>
            <span className="inline-block w-6 h-[1px] bg-primary"></span>
          </div>
          <h1 className="font-display-hero-mobile lg:font-display-hero text-display-hero-mobile lg:text-display-hero uppercase tracking-tight text-on-surface max-w-4xl mb-space-sm">
        CINEMATIC MASTERPIECES <span className="text-primary italic font-headline-lg lg:font-display-hero">IN 4K THEATRICAL.</span>
</h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl font-light">
        Engineered with calibrated spatial soundscapes, authentic anamorphic glass, and DaVinci Resolve color science calibrated for 35mm film density.
      </p>
          <div className="mt-space-lg flex flex-wrap items-center justify-center gap-space-md py-space-xs px-space-md bg-surface-container-low/60 rounded-full backdrop-blur-md">
            <span className="flex items-center gap-space-2xs font-label-md text-label-md uppercase text-outline">
<span className="w-1.5 h-1.5 rounded-full bg-primary animate-ping"></span>
          Master Room Online
        </span>
            <span className="text-outline-variant">•</span>
            <span className="font-label-md text-label-md uppercase text-outline tracking-wider">Dolby Atmos Mastering</span>
            <span className="text-outline-variant">•</span>
            <span className="font-label-md text-label-md uppercase text-primary tracking-wider">2.39:1 Cinemascope</span>
          </div>
        </div>
      </section>
      <section className="w-full px-margin-mobile lg:px-margin-desktop mb-space-4xl">
        <div className="max-w-7xl mx-auto">
          <div className="relative rounded-xl overflow-hidden bg-surface-container-lowest shadow-[0_30px_90px_rgba(0,0,0,0.85)] group">
            <div className="relative aspect-[16/9] lg:aspect-[21/9] w-full overflow-hidden flex items-end">
              <div className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-[1.02]" data-alt="Ultra-luxurious royal Indian destination wedding in a palatial sandstone palace courtyard at night. The royal bride in an intricately embroidered ruby red and gold zardozi lehenga walks hand-in-hand with the regal groom in an ivory raw silk sherwani and safa turban. Thousands of flickering brass lanterns and scented wax candles line the polished marble path. Golden ambient mist hangs in the warm night air beneath ornate Mughal architectural domes and carved arches. High-end cinematic still frame, 35mm anamorphic chiaroscuro lighting, deep obsidian shadows, warm liquid gold highlights." style={{ backgroundImage: `url('${thumb(HERO.id)}')` }}></div>
              <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-surface-container-lowest/30 to-surface-container-lowest/50"></div>
              <div className="absolute inset-0 bg-radial from-transparent via-transparent to-surface-container-lowest/80 pointer-events-none"></div>
              <div className="absolute top-0 inset-x-0 p-space-md lg:p-space-lg flex items-center justify-between z-20">
                <div className="flex items-center gap-space-xs">
                  <span className="px-space-xs py-space-2xs bg-surface-container-highest/80 backdrop-blur-md rounded text-primary font-label-sm text-label-sm uppercase tracking-widest">
                PREMIERE SELECTION
              </span>
                  <span className="px-space-xs py-space-2xs bg-tertiary-container/20 text-tertiary font-label-sm text-label-sm uppercase tracking-widest rounded">
                DCI-4K DCI-P3
              </span>
                </div>
                <div className="flex items-center gap-space-xs">
                  <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest hidden sm:inline-block">
                MONITOR: DCI 24.000 FPS
              </span>
                  <button aria-label="Audio Mode" className="w-8 h-8 rounded bg-surface-container/70 backdrop-blur-md flex items-center justify-center text-on-surface hover:text-primary transition-colors">
                    <span className="material-symbols-outlined text-[18px]">volume_up</span>
                  </button>
                </div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
                <button aria-label="Play Featured Film" data-yt={HERO.id} className="pointer-events-auto group/btn relative w-20 h-20 lg:w-24 lg:h-24 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center shadow-[0_0_50px_rgba(212,175,55,0.45)] hover:bg-primary transition-all duration-500 hover:scale-105" id="masterPlayBtn">
                  <span className="absolute inset-0 rounded-full bg-primary/30 animate-ping opacity-60"></span>
                  <span className="material-symbols-outlined text-[36px] lg:text-[42px] translate-x-0.5" style={{ fontVariationSettings: "'FILL' 1" }}>play_arrow</span>
                </button>
              </div>
              <div className="relative z-20 w-full p-space-md lg:p-space-xl flex flex-col gap-space-sm bg-gradient-to-t from-surface-container-lowest via-surface-container-lowest/90 to-transparent">
                <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-space-sm">
                  <div>
                    <div className="flex items-center gap-space-xs text-primary font-label-sm text-label-sm tracking-widest uppercase mb-space-2xs">
                      <span className="material-symbols-outlined text-[15px]">location_on</span>
                      <span>{HERO.category}</span>
                      <span className="text-outline-variant">•</span>
                      <span>SliceX Films</span>
                    </div>
                    <h2 className="font-headline-lg-mobile lg:font-headline-lg text-headline-lg-mobile lg:text-headline-lg text-on-surface tracking-tight">
                  {HERO.title}
                </h2>
                  </div>
                  <div className="flex items-center gap-space-xs">
                    <span className="px-space-xs py-space-2xs bg-surface-container-high rounded text-on-surface-variant font-label-sm text-label-sm tracking-widest uppercase">
                  ARRI ALEXA 35
                </span>
                    <span className="px-space-xs py-space-2xs bg-surface-container-high rounded text-on-surface-variant font-label-sm text-label-sm tracking-widest uppercase">
                  HAWK V-LITE 2X
                </span>
                    <span className="px-space-xs py-space-2xs bg-surface-container-high rounded text-on-surface-variant font-label-sm text-label-sm tracking-widest uppercase flex items-center gap-1">
<span className="material-symbols-outlined text-[14px] text-primary">surround_sound</span> ATMOS 7.1.4
                </span>
                  </div>
                </div>
                <div className="pt-space-xs flex flex-col gap-1.5">
                  <div className="group/scrub relative w-full h-1.5 bg-surface-container-highest rounded-full cursor-pointer overflow-hidden flex items-center">
                    <div className="h-full bg-primary rounded-full transition-all duration-300 relative w-[28%]" id="playProgressBar">
                      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-on-surface rounded-full shadow-[0_0_8px_rgba(242,202,80,0.8)] scale-0 group-hover/scrub:scale-100 transition-transform"></div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-outline font-label-sm text-label-sm uppercase tracking-widest">
                    <div className="flex items-center gap-space-xs">
                      <button data-yt={HERO.id} className="text-on-surface hover:text-primary transition-colors flex items-center gap-1" id="playbackToggle">
                        <span className="material-symbols-outlined text-[16px]">play_circle</span>
                        <span>Watch on YouTube</span>
                      </button>
                      <span className="text-outline-variant">/</span>
                      <span>18:42</span>
                    </div>
                    <div className="flex items-center gap-space-sm">
                      <span className="hover:text-primary cursor-pointer transition-colors">CHAPTER 02: THE NIGHT PROCESSION</span>
                      <button aria-label="Fullscreen" className="hover:text-primary transition-colors">
                        <span className="material-symbols-outlined text-[18px]">fullscreen</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full px-margin-mobile lg:px-margin-desktop mb-space-2xl">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-space-md pb-space-md bg-surface-container-low/40 p-space-md rounded-lg">
          <div className="flex flex-wrap items-center gap-space-xs">
            <button className="px-space-md py-space-xs rounded bg-primary text-on-primary font-label-md text-label-md uppercase tracking-wider transition-all">
          All Collections (18)
        </button>
            <button className="px-space-md py-space-xs rounded bg-surface-container hover:bg-surface-container-high text-on-surface-variant hover:text-primary font-label-md text-label-md uppercase tracking-wider transition-all">
          Teasers (3–5 Min)
        </button>
            <button className="px-space-md py-space-xs rounded bg-surface-container hover:bg-surface-container-high text-on-surface-variant hover:text-primary font-label-md text-label-md uppercase tracking-wider transition-all">
          Full Masterpieces
        </button>
            <button className="px-space-md py-space-xs rounded bg-surface-container hover:bg-surface-container-high text-on-surface-variant hover:text-primary font-label-md text-label-md uppercase tracking-wider transition-all">
          Vertical 9:16
        </button>
          </div>
          <div className="flex items-center gap-space-xs text-on-surface-variant font-label-sm text-label-sm uppercase tracking-widest self-end md:self-auto">
            <span className="text-outline">CURATION:</span>
            <span className="text-primary font-semibold">ROYAL HERITAGE &amp; COASTAL</span>
          </div>
        </div>
      </section>
      <section className="w-full px-margin-mobile lg:px-margin-desktop mb-space-4xl">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-space-xl gap-space-xs">
            <div>
              <span className="font-label-sm text-label-sm uppercase tracking-[0.25em] text-primary block mb-space-2xs">SERIES I • SHORT EDITS</span>
              <h2 className="font-headline-md lg:font-headline-lg text-headline-md lg:text-headline-lg text-on-surface uppercase tracking-tight">
            FEATURE TEASERS <span className="font-headline-sm text-outline italic font-light lowercase">(3–5 min)</span>
</h2>
            </div>
            <p className="font-body-sm text-body-sm text-on-surface-variant max-w-md">
          Distilled theatrical adrenaline. Rhythmic cuts timed strictly to customized string orchestrations and analog voice recordings.
        </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-lg">
            {TEASERS.map((v) => (
            <article key={v.id} data-yt={v.id} className="group cursor-pointer bg-surface-container-low rounded-lg overflow-hidden flex flex-col transition-all duration-300 hover:bg-surface-container">
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-surface-container-lowest">
                <div className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{ backgroundImage: `url('${thumb(v.id)}')` }}></div>
                <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest/90 via-transparent to-transparent"></div>
                <span className="absolute top-space-xs left-space-xs px-space-2xs py-1 bg-surface-container-lowest/80 backdrop-blur rounded font-label-sm text-label-sm text-primary tracking-widest uppercase">
              {v.category}
            </span>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-12 h-12 rounded-full bg-primary text-on-primary flex items-center justify-center shadow-lg">
                    <span className="material-symbols-outlined text-[24px]" style={{ fontVariationSettings: "'FILL' 1" }}>play_arrow</span>
                  </div>
                </div>
              </div>
              <div className="p-space-md flex flex-col flex-1 justify-between">
                <div>
                  <span className="font-label-sm text-label-sm uppercase tracking-wider text-outline block mb-1">SliceX Films</span>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface group-hover:text-primary transition-colors">
                {v.title}
              </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-space-2xs line-clamp-2">
                {v.blurb}
              </p>
                </div>
                <div className="pt-space-md mt-space-sm flex items-center justify-between text-outline font-label-sm text-label-sm uppercase tracking-wider">
                  <span>{v.category}</span>
                  <span className="text-primary flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                WATCH FILM <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
</span>
                </div>
              </div>
            </article>
            ))}
          </div>
        </div>
      </section>
      <section className="w-full px-margin-mobile lg:px-margin-desktop mb-space-4xl">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-space-xl gap-space-xs">
            <div>
              <span className="font-label-sm text-label-sm uppercase tracking-[0.25em] text-primary block mb-space-2xs">SERIES II • ARCHIVAL FEATURE LENGTH</span>
              <h2 className="font-headline-md lg:font-headline-lg text-headline-md lg:text-headline-lg text-on-surface uppercase tracking-tight">
            FULL-LENGTH MASTERPIECES <span className="font-headline-sm text-outline italic font-light lowercase">(45–60 min previews)</span>
</h2>
            </div>
            <p className="font-body-sm text-body-sm text-on-surface-variant max-w-md">
          Comprehensive three-act docu-dramas preserving multigenerational vows, familial toasts, unscripted tears, and full ritual sanctity.
        </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-space-xl">
            {FULL_FILMS.map((v) => (
            <div key={v.id} data-yt={v.id} className="group cursor-pointer relative bg-surface-container-low rounded-xl overflow-hidden shadow-2xl flex flex-col">
              <div className="relative aspect-[16/9] w-full overflow-hidden">
                <div className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{ backgroundImage: `url('${thumb(v.id)}')` }}></div>
                <div className="absolute inset-0 bg-gradient-to-t from-surface-container-low via-transparent to-black/40"></div>
                <div className="absolute top-space-md right-space-md">
                  <span className="px-space-xs py-1 bg-surface-container-lowest/90 backdrop-blur text-primary rounded font-label-sm text-label-sm uppercase tracking-widest">
                {v.category}
              </span>
                </div>
                <div className="absolute bottom-space-md left-space-md right-space-md flex items-end justify-between">
                  <div className="flex items-center gap-space-xs">
                    <span className="w-14 h-14 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center shadow-lg group-hover:bg-primary transition-all duration-300">
                      <span className="material-symbols-outlined text-[28px]" style={{ fontVariationSettings: "'FILL' 1" }}>play_arrow</span>
                    </span>
                    <div className="text-on-surface font-label-md text-label-md uppercase tracking-wider">
                      <p className="text-primary">Watch on YouTube</p>
                      <p className="text-outline text-label-sm">SliceX Films</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-space-lg flex flex-col flex-1 justify-between">
                <div>
                  <div className="flex items-center gap-2 text-outline font-label-sm text-label-sm uppercase tracking-widest mb-1">
                    <span>{v.category}</span>
                  </div>
                  <h3 className="font-headline-md text-headline-md text-on-surface group-hover:text-primary transition-colors">
                {v.title}
              </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant mt-space-xs">
                {v.blurb}
              </p>
                </div>
                <div className="pt-space-md mt-space-md flex items-center justify-between font-label-sm text-label-sm text-outline uppercase tracking-wider">
                  <span>SliceX Films</span>
                  <span className="text-primary hover:underline uppercase tracking-widest">
                WATCH FILM →
              </span>
                </div>
              </div>
            </div>
            ))}
          </div>
        </div>
      </section>
      <section className="w-full px-margin-mobile lg:px-margin-desktop mb-space-4xl">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-space-xl gap-space-xs">
            <div>
              <span className="font-label-sm text-label-sm uppercase tracking-[0.25em] text-primary block mb-space-2xs">SERIES III • MOBILE NATIVE</span>
              <h2 className="font-headline-md lg:font-headline-lg text-headline-md lg:text-headline-lg text-on-surface uppercase tracking-tight">
            VERTICAL EDITORIAL REELS <span className="font-headline-sm text-outline italic font-light lowercase">(9:16 high-velocity)</span>
</h2>
            </div>
            <p className="font-body-sm text-body-sm text-on-surface-variant max-w-md">
          High-impact social formats crafted without compromising optical richness. Pure cinematic pacing for hand-held curation.
        </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-space-md lg:gap-space-lg">
            {REELS.map((v) => (
            <div key={v.id} data-yt={v.id} className="group cursor-pointer relative rounded-lg overflow-hidden bg-surface-container aspect-[9/16] shadow-lg flex flex-col justify-between p-space-sm">
              <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105" style={{ backgroundImage: `url('${thumb(v.id)}')` }}></div>
              <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-transparent to-black/30"></div>
              <div className="relative z-10 flex justify-between items-center">
                <span className="px-2 py-0.5 bg-surface-container-lowest/80 backdrop-blur rounded text-primary font-label-sm text-label-sm tracking-widest uppercase">
              {v.category}
            </span>
                <span className="material-symbols-outlined text-on-surface text-[18px]">play_circle</span>
              </div>
              <div className="relative z-10">
                <p className="font-label-sm text-label-sm text-primary uppercase tracking-widest">{v.category}</p>
                <h4 className="font-headline-sm text-headline-sm text-on-surface leading-tight">{v.title}</h4>
                <span className="font-body-sm text-body-sm text-outline block mt-1">SliceX Films</span>
              </div>
            </div>
            ))}
          </div>
        </div>
      </section>
      <section className="w-full px-margin-mobile lg:px-margin-desktop mb-space-4xl">
        <div className="max-w-7xl mx-auto bg-surface-container-low rounded-xl p-space-xl lg:p-space-3xl relative overflow-hidden">
          <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-primary/10 rounded-full blur-3xl pointer-events-none"></div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center relative z-10">
            <div className="lg:col-span-5 flex flex-col">
              <span className="font-label-sm text-label-sm uppercase tracking-[0.25em] text-primary block mb-space-xs">THE ATELIER MANIFESTO</span>
              <h3 className="font-headline-lg-mobile lg:font-headline-lg text-headline-lg-mobile lg:text-headline-lg text-on-surface mb-space-sm leading-tight">
            "We reject digital sharpness in favor of analog soul."
          </h3>
              <p className="font-body-md text-body-md text-on-surface-variant mb-space-md font-light">
            Every frame curated by SLICEX FILMS undergoes custom film-stock emulation. We intentionally soften sensor edges, bloom golden highlight halations, and engineer soundscapes using real Foley recorded on location—capturing silk rustling, temple bells ringing, and tearful sighs.
          </p>
              <div className="flex items-center gap-space-md">
                <div>
                  <p className="font-headline-sm text-headline-sm text-on-surface">Abhishek Anand</p>
                  <p className="font-label-sm text-label-sm uppercase tracking-widest text-primary">Founder &amp; Principal Cinematographer</p>
                </div>
              </div>
            </div>
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-space-md">
              <div className="bg-surface-container p-space-md rounded-lg">
                <div className="w-10 h-10 rounded bg-surface-container-high flex items-center justify-center text-primary mb-space-xs">
                  <span className="material-symbols-outlined text-[22px]">videocam</span>
                </div>
                <h4 className="font-label-lg text-label-lg uppercase tracking-wider text-on-surface mb-1">True Anamorphic Optics</h4>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
              Captured using cylindrical 2x glass giving authentic oval bokeh and horizontal amber lens flares without digital filters.
            </p>
              </div>
              <div className="bg-surface-container p-space-md rounded-lg">
                <div className="w-10 h-10 rounded bg-surface-container-high flex items-center justify-center text-primary mb-space-xs">
                  <span className="material-symbols-outlined text-[22px]">palette</span>
                </div>
                <h4 className="font-label-lg text-label-lg uppercase tracking-wider text-on-surface mb-1">Kodak 250D Color Science</h4>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
              In-house DaVinci node trees that protect true skin undertones under erratic night chandelier and haldi turmeric lighting.
            </p>
              </div>
              <div className="bg-surface-container p-space-md rounded-lg">
                <div className="w-10 h-10 rounded bg-surface-container-high flex items-center justify-center text-primary mb-space-xs">
                  <span className="material-symbols-outlined text-[22px]">graphic_eq</span>
                </div>
                <h4 className="font-label-lg text-label-lg uppercase tracking-wider text-on-surface mb-1">Bespoke String Scores</h4>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
              Original compositions recorded with live sarangi, sitar, and cello ensembles—avoiding overused royalty-free library audio.
            </p>
              </div>
              <div className="bg-surface-container p-space-md rounded-lg">
                <div className="w-10 h-10 rounded bg-surface-container-high flex items-center justify-center text-primary mb-space-xs">
                  <span className="material-symbols-outlined text-[22px]">cloud_sync</span>
                </div>
                <h4 className="font-label-lg text-label-lg uppercase tracking-wider text-on-surface mb-1">Heirloom Cold Storage</h4>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
              All RAW multi-cam rushes preserved in redundant dual-location LTO tape backups with guaranteed 10-year retrieval.
            </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full px-margin-mobile lg:px-margin-desktop mb-space-3xl">
        <div className="max-w-7xl mx-auto rounded-xl bg-surface-container-lowest p-space-xl lg:p-space-3xl text-center relative overflow-hidden shadow-2xl">
          <div className="absolute inset-0 bg-radial from-primary/10 via-transparent to-transparent pointer-events-none"></div>
          <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
            <span className="font-label-sm text-label-sm uppercase tracking-[0.3em] text-primary mb-space-xs">NOW ACCEPTING 2025/2026 CALENDARS</span>
            <h2 className="font-display-hero-mobile lg:font-display-hero text-display-hero-mobile lg:text-display-hero uppercase tracking-tight text-on-surface mb-space-md">
          WANT YOUR WEDDING FILM TO FEEL LIKE AN <span className="text-primary italic">INDIE CINEMATIC RELEASE?</span>
</h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-space-xl font-light">
          We accept a strictly limited schedule of 12 wedding commissions worldwide annually to ensure obsessive attention to every cut and color grade.
        </p>
            <div className="flex flex-col sm:flex-row items-center gap-space-md w-full justify-center">
              <a className="w-full sm:w-auto px-space-xl py-space-md bg-primary-container text-on-primary-container font-label-md text-label-md uppercase tracking-[0.14em] rounded shadow-[0_0_25px_rgba(212,175,55,0.3)] hover:bg-primary transition-all duration-300" data-path="contact" href={withBase("/contact/")}>
            COMMISSION A WEDDING FILM
          </a>
              <a className="w-full sm:w-auto px-space-xl py-space-md bg-surface-container-high hover:bg-surface-bright text-on-surface font-label-md text-label-md uppercase tracking-[0.14em] rounded transition-all duration-300" data-path="packages" href={withBase("/book-your-date/")}>
            VIEW EDITORIAL PACKAGES
          </a>
            </div>
          </div>
        </div>
      </section>
    </div>
    <footer className="w-full bg-surface-container-lowest text-on-surface pt-space-4xl pb-space-2xl">
      <div className="w-full px-margin-mobile lg:px-margin-desktop">
        <div className="pb-space-3xl mb-space-3xl">
          <span className="font-label-sm text-label-sm uppercase text-primary tracking-[0.3em] block mb-space-xs">HAUTE CINEMATOGRAPHY</span>
          <h2 className="font-display-hero-mobile lg:font-display-hero text-display-hero-mobile lg:text-display-hero uppercase tracking-tight text-on-surface mb-space-2xs">SLICEX FILMS</h2>
          <p className="font-headline-sm text-headline-sm italic text-outline font-light">CAPTURE. CREATE. INSPIRE.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-space-xl pb-space-3xl">
          <div className="lg:col-span-4 flex flex-col gap-space-md">
            <h3 className="font-label-lg text-label-lg uppercase tracking-widest text-primary">The Atelier</h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant max-w-sm">Handcrafted heirloom wedding cinema &amp; fine-art photography for extraordinary couples across the globe. Preserving timeless romance through pure chiaroscuro and analog soul.</p>
            <div className="flex items-center gap-space-md pt-space-xs">
              <a aria-label="Instagram" className="font-label-sm text-label-sm text-outline hover:text-primary tracking-widest uppercase transition-colors" href="#">Instagram</a>
              <span className="text-outline-variant">/</span>
              <a aria-label="Facebook" className="font-label-sm text-label-sm text-outline hover:text-primary tracking-widest uppercase transition-colors" href="#">Facebook</a>
              <span className="text-outline-variant">/</span>
              <a aria-label="YouTube" className="font-label-sm text-label-sm text-outline hover:text-primary tracking-widest uppercase transition-colors" href="#">YouTube</a>
            </div>
          </div>
          <div className="lg:col-span-4 flex flex-col gap-space-sm">
            <h3 className="font-label-lg text-label-lg uppercase tracking-widest text-primary mb-space-xs">Navigation Archive</h3>
            <ul className="grid grid-cols-2 gap-space-xs font-body-sm text-body-sm text-on-surface-variant">
              <li>
                <a className="hover:text-primary transition-colors" data-path="home" href={withBase("/")}>Home Archive</a>
              </li>
              <li>
                <a className="hover:text-primary transition-colors" data-path="films" href={withBase("/films/")}>Cinema Collective</a>
              </li>
              <li>
                <a className="hover:text-primary transition-colors" data-path="services" href={withBase("/services/")}>Editorial Offerings</a>
              </li>
              <li>
                <a className="hover:text-primary transition-colors" data-path="portfolio" href={withBase("/portfolio/")}>Featured Exhibitions</a>
              </li>
              <li>
                <a className="hover:text-primary transition-colors" data-path="contact" href={withBase("/contact/")}>Inquire Studio</a>
              </li>
              <li>
                <a className="hover:text-primary transition-colors" data-path="client-portal" href="#">Admin Portal</a>
              </li>
            </ul>
          </div>
          <div className="lg:col-span-4 flex flex-col gap-space-sm">
            <h3 className="font-label-lg text-label-lg uppercase tracking-widest text-primary mb-space-xs">Direct Inquiries</h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant">Private consultations by appointment only.</p>
            <div className="flex flex-col gap-space-2xs font-body-sm text-body-sm text-on-surface-variant pt-space-xs">
              <a className="hover:text-primary transition-colors" href="tel:+919827122620">+91 98271 22620</a>
              <a className="hover:text-primary transition-colors" href="tel:+919658621038">+91 96586 21038</a>
              <a className="hover:text-primary transition-colors pt-space-2xs text-on-surface" href="mailto:slicexfilms@gmail.com">slicexfilms@gmail.com</a>
            </div>
          </div>
        </div>
        <div className="pt-space-xl flex flex-col sm:flex-row items-center justify-between gap-space-md font-label-sm text-label-sm text-outline tracking-widest uppercase">
          <p>© 2024 SLICEX FILMS. ALL RIGHTS RESERVED.</p>
          <div className="flex items-center gap-space-md">
            <a className="hover:text-primary transition-colors" data-path="privacy-policy" href="#">Privacy Policy</a>
            <span className="text-outline-variant">•</span>
            <a className="hover:text-primary transition-colors" data-path="terms-of-service" href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
    </>
  );
}
