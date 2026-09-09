// Films page content shipped with the site. The admin panel saves overrides to
// slicex_content under the "films" key; the page merges them in at runtime.
// Every video is a YouTube id — thumbnails and playback come from YouTube.

export const FILMS = {
  intro: {
    eyebrow: '04 / THE SCREENING ROOM',
    titleA: 'CINEMATIC MASTERPIECES',
    titleB: 'IN 4K THEATRICAL.',
    subtitle: 'Engineered with calibrated spatial soundscapes, authentic anamorphic glass, and DaVinci Resolve color science calibrated for 35mm film density.',
    pill1: 'Master Room Online',
    pill2: 'Dolby Atmos Mastering',
    pill3: '2.39:1 Cinemascope',
  },
  hero: {
    id: 'MIBoIxNjfXM',
    title: 'Pratap & Supriya — The Wedding Film',
    category: 'Feature Wedding Film',
    tagLeft: 'PREMIERE SELECTION',
    tagRight: 'DCI-4K DCI-P3',
    specs: ['ARRI ALEXA 35', 'HAWK V-LITE 2X', 'ATMOS 7.1.4'],
    duration: '18:42',
    chapter: 'CHAPTER 02: THE NIGHT PROCESSION',
  },
  teasers: {
    eyebrow: 'SERIES I • SHORT EDITS',
    title: 'FEATURE TEASERS',
    note: '(3–5 min)',
    blurb: 'Distilled theatrical adrenaline. Rhythmic cuts timed strictly to customized string orchestrations and analog voice recordings.',
    items: [
      { id: 'tFyz_XO2naA', title: 'Subhashree', category: 'Wedding Teaser', blurb: 'A distilled cinematic teaser — rhythmic cuts scored to a custom soundtrack.' },
      { id: '5LP3Ic7RVpw', title: 'So Called Cinematic Wedding', category: 'Wedding Film', blurb: 'A modern, story-first wedding film with a bold editorial edge.' },
      { id: '8NngCj7b_uA', title: 'Alisha Dash', category: 'Wedding Film', blurb: 'Warm, candid, and unhurried — the day as it truly unfolded.' },
    ],
  },
  full: {
    eyebrow: 'SERIES II • ARCHIVAL FEATURE LENGTH',
    title: 'FULL-LENGTH MASTERPIECES',
    note: '(45–60 min previews)',
    blurb: 'Comprehensive three-act docu-dramas preserving multigenerational vows, familial toasts, unscripted tears, and full ritual sanctity.',
    items: [
      { id: 'BApJaloacXg', title: 'Sanjeeb & Asha — Full Wedding Film', category: 'Full Wedding Film', blurb: 'A complete three-act wedding film preserving every ritual, toast, and unscripted tear.' },
      { id: 'jEFML86Tk7g', title: 'Gobinda & Mamuni — Wedding Film', category: 'Full Wedding Film', blurb: 'Grand celebration and quiet family moments woven into one cinematic narrative.' },
    ],
  },
  reels: {
    eyebrow: 'SERIES III • MOBILE NATIVE',
    title: 'VERTICAL EDITORIAL REELS',
    note: '(9:16 high-velocity)',
    blurb: 'High-impact social formats crafted without compromising optical richness. Pure cinematic pacing for hand-held curation.',
    items: [
      { id: 'r4KTSRpp17s', title: 'Dillu & Dikshya', category: 'Pre-Wedding', blurb: '' },
      { id: '6GrJci58sFQ', title: 'Abhishek & Neha', category: 'Engagement', blurb: '' },
      { id: 'YomPpYhVIws', title: 'Niharika & Chandan', category: 'Pre-Wedding', blurb: '' },
      { id: 'wJE3qiRBVyY', title: 'Manisha & Swagat', category: 'Engagement', blurb: '' },
    ],
  },
  manifesto: {
    eyebrow: 'THE ATELIER MANIFESTO',
    quote: '"We reject digital sharpness in favor of analog soul."',
    body: 'Every frame curated by SLICEX FILMS undergoes custom film-stock emulation. We intentionally soften sensor edges, bloom golden highlight halations, and engineer soundscapes using real Foley recorded on location—capturing silk rustling, temple bells ringing, and tearful sighs.',
    author: 'Abhishek Anand',
    role: 'Founder & Principal Cinematographer',
    cards: [
      { icon: 'videocam', title: 'True Anamorphic Optics', desc: 'Captured using cylindrical 2x glass giving authentic oval bokeh and horizontal amber lens flares without digital filters.' },
      { icon: 'palette', title: 'Kodak 250D Color Science', desc: 'In-house DaVinci node trees that protect true skin undertones under erratic night chandelier and haldi turmeric lighting.' },
      { icon: 'graphic_eq', title: 'Bespoke String Scores', desc: 'Original compositions recorded with live sarangi, sitar, and cello ensembles—avoiding overused royalty-free library audio.' },
      { icon: 'cloud_sync', title: 'Heirloom Cold Storage', desc: 'All RAW multi-cam rushes preserved in redundant dual-location LTO tape backups with guaranteed 10-year retrieval.' },
    ],
  },
  cta: {
    eyebrow: 'NOW ACCEPTING 2025/2026 CALENDARS',
    titleA: 'WANT YOUR WEDDING FILM TO FEEL LIKE AN',
    titleB: 'INDIE CINEMATIC RELEASE?',
    body: 'We accept a strictly limited schedule of 12 wedding commissions worldwide annually to ensure obsessive attention to every cut and color grade.',
    btn1: 'COMMISSION A WEDDING FILM',
    btn2: 'VIEW EDITORIAL PACKAGES',
  },
};
