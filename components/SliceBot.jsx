'use client';

import { useEffect, useRef } from 'react';
import { withBase } from '../lib/basePath';
import { submitLead, fetchContent } from '../lib/content';

// ============================================================
// SLICEX FILMS — "Chitra" chat concierge
// Ported from the V Media Production "Vee" widget and re-skinned
// for the SliceX black + white + aqua palette. FAQ knowledge base, name /
// WhatsApp-number capture, quick replies, animated face bubble,
// soft chime, WhatsApp handoff. No backend: leads go to WhatsApp
// with the visitor's name pre-filled.
// ============================================================

const CFG = {
  botName: 'Chitra',
  brandTitle: 'SliceX Films',
  whatsapp: '919827122620',
  whatsappDisplay: '+91 98271 22620',
  waMessage: "Hi! I was chatting with Chitra on your website and I'd like to talk about my wedding film.",
  autoOpenDelay: 7000,
  typingDelay: 900,
  // Free AI brain (Groq via a Supabase Edge Function). Falls back to the
  // keyword knowledge base below if unreachable. Empty string = keyword-only.
  aiEndpoint: 'https://kfylqdysvptnxfbklcru.supabase.co/functions/v1/slice-chat',
  aiTimeout: 15000,
  gold: '#3ee6f0',
  goldDeep: '#00b8c8',
  goldInk: '#00363b',
  black: '#0a0a0a',
  surface: '#0f0f0f',
  surfaceLow: '#171717',
  surfaceHigh: '#292929',
  surfaceHighest: '#353535',
  text: '#ffffff',
  textMuted: '#c8d0d2',
  outline: '#8a9496',
  peach: '#67e8f9',
};

const QR = {
  services: '🎬 Our Services',
  packages: '💰 Packages',
  book: '📅 Book Your Date',
  films: '🎥 Watch Films',
  wa: '💬 WhatsApp Us',
  prewed: '🌅 Pre-Wedding',
  single: '💍 Single Side Wedding',
  both: '👑 Both Side Wedding',
  delivery: '📦 Delivery Time',
  travel: '✈️ Destination',
  about: '🎞️ About Us',
  reviews: '⭐ Reviews',
};

// ── Character: blank-faced camera emoji + animated SVG face ──────
// public/assets/slice-cam.png is 966x728 (4:3, teal blob, transparent bg —
// cropped from `Desktop\Chitra.png`). The SVG overlay
// uses the same coordinate space (viewBox 0 0 966 728) so the eyes and mouth
// land on the empty face area to the right of the camera at any render size.
// FACE_SHIFT nudges the whole face to suit the current artwork's framing.
const FACE_SHIFT = 'translate(64 50)';
const CAM_URL = withBase('/assets/slice-cam.png');
const EMOTIONS = ['curious', 'happy', 'laugh', 'wink', 'tongue', 'love', 'party', 'wave', 'idea', 'cool', 'thinking', 'surprised', 'sad', 'sleepy'];
const INK = '#00363b';
// Markup for one character (image + face). `ids` adds element ids so the
// bubble's engine can find its eyes; avatars omit them.
const charMarkup = (emo, ids) => `
  <img class="sx-char-img" src="${CAM_URL}" alt="" draggable="false">
  <svg class="sx-char-face" viewBox="0 0 966 728" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <g transform="${FACE_SHIFT}">
    <path class="sx-brow sx-brow-l" d="M 418 205 Q 466 185 514 205" stroke="${INK}" stroke-width="14" fill="none" stroke-linecap="round"/>
    <path class="sx-brow sx-brow-r" d="M 588 205 Q 636 185 684 205" stroke="${INK}" stroke-width="14" fill="none" stroke-linecap="round"/>
    <g class="sx-eye sx-eye-l" ${ids ? 'id="sx-eye-l"' : ''}>
      <ellipse class="sx-eye-white" cx="466" cy="276" rx="42" ry="50"/>
      <circle class="sx-pupil" cx="472" cy="284" r="21"/>
      <path class="sx-heart" d="M 466 302 C 436 280 430 258 448 248 C 458 243 466 250 466 258 C 466 250 474 243 484 248 C 502 258 496 280 466 302 Z"/>
      <circle class="sx-eye-shine" cx="482" cy="266" r="8"/>
      <line class="sx-eye-closed" x1="430" y1="282" x2="502" y2="282" stroke="${INK}" stroke-width="12" stroke-linecap="round"/>
    </g>
    <g class="sx-eye sx-eye-r" ${ids ? 'id="sx-eye-r"' : ''}>
      <ellipse class="sx-eye-white" cx="636" cy="276" rx="42" ry="50"/>
      <circle class="sx-pupil" cx="642" cy="284" r="21"/>
      <path class="sx-heart" d="M 636 302 C 606 280 600 258 618 248 C 628 243 636 250 636 258 C 636 250 644 243 654 248 C 672 258 666 280 636 302 Z"/>
      <circle class="sx-eye-shine" cx="652" cy="266" r="8"/>
      <line class="sx-eye-closed" x1="600" y1="282" x2="672" y2="282" stroke="${INK}" stroke-width="12" stroke-linecap="round"/>
    </g>
    <path class="sx-mouth sx-mouth-smile" d="M 486 400 Q 556 452 626 400" stroke="${INK}" stroke-width="18" fill="none" stroke-linecap="round"/>
    <path class="sx-mouth sx-mouth-big" d="M 470 392 Q 556 490 642 392 Z" fill="${INK}"/>
    <path class="sx-mouth sx-mouth-neutral" d="M 500 418 Q 556 424 612 418" stroke="${INK}" stroke-width="16" fill="none" stroke-linecap="round"/>
    <ellipse class="sx-mouth sx-mouth-o" cx="556" cy="420" rx="34" ry="40" fill="${INK}"/>
    <path class="sx-mouth sx-mouth-frown" d="M 490 440 Q 556 390 622 440" stroke="${INK}" stroke-width="18" fill="none" stroke-linecap="round"/>
    <path class="sx-tongue" d="M 528 436 Q 556 486 584 436 Z" fill="#ff5a5a"/>
    <ellipse class="sx-cheek sx-cheek-l" cx="440" cy="352" rx="34" ry="20"/>
    <ellipse class="sx-cheek sx-cheek-r" cx="672" cy="352" rx="34" ry="20"/>
    <path class="sx-zz" d="M 700 150 h 40 l -40 40 h 40" stroke="${INK}" stroke-width="10" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
    </g>
  </svg>`;

// ── FAQ Knowledge Base ─────────────────────────────────────────
const KB = [
  {
    emo: 'idea',
    tags: ['service', 'offer', 'provide', 'what do you do', 'what you do', 'capabilit', 'shoot', 'cover'],
    reply: `We create cinematic wedding films and photography:\n\n🎬 <b>Wedding Films</b> — feature-length & theatrical cuts, multi-camera cinema rigs\n📸 <b>Wedding Photography</b> — editorial stills + candid documentary\n🌅 <b>Pre-Wedding Films</b> — conceptual short vignettes at destination backdrops\n💞 <b>Engagement Stories</b> — intimate portraits & audio vows\n📱 <b>Cinematic Reels</b> — 9:16 vertical teasers, fast turnaround\n🚁 <b>Drone Coverage</b> — certified aerial cinema\n\nWhich one are you planning?`,
    quick: [QR.packages, QR.films, QR.book, QR.wa],
  },
  {
    emo: 'happy',
    tags: ['price', 'pricing', 'cost', 'package', 'plan', 'how much', 'rate', 'charge', 'fee', 'budget', 'quote', 'quotation', 'commission'],
    reply: `Our starting commissions:\n\n🌅 <b>Pre-Wedding Film</b> — from ₹35,000\n💞 <b>Engagement Archive</b> — ₹35,000 flat\n💍 <b>Single Side Wedding</b> — ₹1,10,000 <i>(most popular)</i>\n👑 <b>Both Side Wedding</b> — ₹2,40,000, the full production\n\nEvery film is bespoke, so the final quote depends on days, crew and destination. Want details on any package?`,
    quick: [QR.prewed, QR.single, QR.both, QR.wa],
  },
  {
    emo: 'love',
    tags: ['pre-wedding', 'prewedding', 'pre wedding', 'pre-wed', 'prewed', 'save the date'],
    reply: `🌅 <b>Pre-Wedding Film — from ₹35,000</b>\n\n✔ 1-day conceptual shoot\n✔ 1–2 minute cinematic teaser\n✔ 25 editorial edited stills\n✔ Drone aerial footage\n\nWe storyboard it around your story — location, styling and music are curated with you.`,
    quick: [QR.book, QR.films, QR.wa],
  },
  {
    emo: 'love',
    tags: ['engagement', 'ring ceremony', 'roka', 'sagai', 'nischitartha'],
    reply: `💞 <b>Engagement Archive — ₹35,000 flat</b>\n\n✔ Full ceremony coverage\n✔ Traditional + candid photography\n✔ 3–4 minute film highlight\n✔ 4K delivery within 14 days`,
    quick: [QR.book, QR.packages, QR.wa],
  },
  {
    emo: 'happy',
    tags: ['single side', 'one side', 'single-side', 'bride side', 'groom side'],
    reply: `💍 <b>Single Side Wedding — ₹1,10,000</b> <i>(most popular)</i>\n\n✔ 2–3 day dedicated crew\n✔ 15–20 minute cinematic film\n✔ Instagram teasers included\n✔ Hardcover heritage album\n\nComplete ceremony coverage for one family's side of the celebration.`,
    quick: [QR.book, QR.both, QR.wa],
  },
  {
    emo: 'party',
    tags: ['both side', 'both-side', 'two side', 'full production', 'dual', 'complete wedding', 'entire wedding'],
    reply: `👑 <b>Both Side Wedding — ₹2,40,000</b>\n\n✔ Complete dual-family coverage\n✔ 6-crew director & drones\n✔ 30-minute feature film + reels\n✔ 2 luxury fine-art photo books\n\nThis is our full theatrical production — every ritual from both homes, cut as one film.`,
    quick: [QR.book, QR.single, QR.wa],
  },
  {
    emo: 'cool',
    tags: ['photo', 'photograph', 'stills', 'album', 'pictures', 'candid'],
    reply: `📸 Yes — we shoot <b>fine-art wedding photography</b> alongside the film: high-fashion editorial stills plus authentic candid photojournalism, delivered as a high-res archive and a hardcover heritage album.\n\nPhotography is included in our wedding packages and can be booked on its own too.`,
    quick: [QR.packages, QR.book, QR.wa],
  },
  {
    emo: 'surprised',
    tags: ['drone', 'aerial', 'dji'],
    reply: `🚁 <b>Certified aerial cinema.</b> Drone coverage is included in the Pre-Wedding and Both Side packages, and can be added to any commission — palace architecture, mountain landscapes and processions from above.`,
    quick: [QR.packages, QR.book],
  },
  {
    emo: 'cool',
    tags: ['reel', 'instagram', 'insta', 'teaser', 'vertical', 'social media', 'short video'],
    reply: `📱 <b>Cinematic Reels</b> — 9:16 vertical teasers engineered for Instagram without losing our colour science. Included in the Single Side and Both Side packages, and available as an add-on.\n\nSee our latest on Instagram: <a href="https://www.instagram.com/slicexfilms/" target="_blank" rel="noopener">@slicexfilms</a>`,
    quick: [QR.films, QR.packages, QR.wa],
  },
  {
    emo: 'thinking',
    tags: ['deliver', 'turnaround', 'how long', 'when will', 'timeline', 'time frame', 'timeframe', 'days', 'weeks', 'format', '4k'],
    reply: `📦 <b>Delivery</b>\n\n• Instagram teaser — within <b>7 business days</b> of the wedding\n• Engagement film — 4K within 14 days\n• Feature film (15–35 min) + full documentary re-cut — <b>10 to 14 weeks</b>, after full colour grading and audio mastering\n\nDelivered in 4K via a private client portal plus a master archival drive.`,
    quick: [QR.packages, QR.book, QR.wa],
  },
  {
    emo: 'love',
    tags: ['book', 'booking', 'availability', 'available', 'date', 'reserve', 'advance', 'how early', 'when should', 'calendar'],
    reply: `📅 We recommend reaching out <b>6–12 months</b> before your dates — we take only <b>18 commissions a year</b> so every film gets full attention.\n\nShare your dates and I'll have the team confirm availability, or lock it in on the booking page.`,
    quick: [QR.book, QR.wa],
  },
  {
    emo: 'party',
    tags: ['travel', 'destination', 'international', 'abroad', 'outside', 'goa', 'udaipur', 'jaipur', 'rajasthan', 'mumbai', 'delhi', 'kolkata', 'bangalore', 'hyderabad', 'dubai', 'elopement'],
    reply: `✈️ <b>Yes, we travel worldwide.</b> Destination weddings and elopements are a big part of our work — palaces of Rajasthan, beaches, hills, or abroad. Travel and stay are quoted per commission.`,
    quick: [QR.packages, QR.book, QR.wa],
  },
  {
    emo: 'wave',
    tags: ['where', 'location', 'located', 'based', 'office', 'studio', 'address', 'balangir', 'bolangir', 'odisha', 'orissa', 'bhubaneswar', 'sambalpur'],
    reply: `📍 Our studio is in <b>Balangir, Odisha</b> (Main Road, near College Square), and we shoot across India and abroad.\n\nCouples and planners are welcome for a private screening — Mon–Sat, 10 AM – 8 PM IST.`,
    quick: [QR.book, QR.wa, QR.travel],
  },
  {
    emo: 'happy',
    tags: ['about', 'who are you', 'who is', 'founder', 'abhishek', 'abhisek', 'team', 'story', 'experience', 'since', 'established'],
    reply: `🎞️ <b>SliceX Films</b> is a cinematic wedding studio founded by <b>Abhishek Anand</b>, principal cinematographer. Established in 2019, we treat every couple as the lead characters of their own film — quiet, cinematic, unvarnished.\n\n<i>"We don't just capture couples — we cast them."</i>`,
    quick: [QR.films, QR.reviews, QR.wa],
  },
  {
    emo: 'cool',
    tags: ['camera', 'gear', 'equipment', 'sony', 'lens', 'audio', 'sound', 'quality', 'raw', 'film grain', 'grade', 'grading'],
    reply: `🎥 We shoot on <b>Sony Alpha cinema bodies</b> with cinema prime lenses in 4K, record <b>32-bit float audio</b> for every vow and whisper, and grade in DaVinci with custom film-grain profiles inspired by Kodak and Fuji 35mm stocks.`,
    quick: [QR.films, QR.packages],
  },
  {
    emo: 'cool',
    tags: ['film', 'portfolio', 'work', 'sample', 'example', 'youtube', 'watch', 'video', 'showreel', 'previous'],
    reply: `🎥 Watch our films here:\n\n• <a href="${withBase('/films/')}">Films page</a> — teasers, full films and reels\n• <a href="https://www.youtube.com/@slicexfilms8741" target="_blank" rel="noopener">YouTube @slicexfilms</a>\n\nOur flagship is <b>Pratap & Supriya — The Wedding Film</b>.`,
    quick: [QR.packages, QR.book, QR.wa],
  },
  {
    emo: 'love',
    tags: ['review', 'rating', 'testimonial', 'feedback', 'google', 'trust', 'clients'],
    reply: `⭐ We hold a <b>5.0 rating on Google</b> from our couples — Piyush & Dipti, Swarup & Soumya, Pratap & Supriya, Niharika & Chandan and more. You can read them on our Contact page or on Google Maps.`,
    quick: [QR.films, QR.book, QR.wa],
  },
  {
    emo: 'wave',
    tags: ['contact', 'email', 'mail', 'phone', 'number', 'reach', 'hours', 'timing', 'open'],
    reply: `📞 <b>Studio hotline:</b> ${CFG.whatsappDisplay}\n📞 <b>Direct desk (Abhishek):</b> +91 96586 21038\n✉️ <b>Email:</b> slicexfilms@gmail.com\n\nConsultations Mon–Sat, 10 AM – 8 PM IST. Shoot desk is 24/7.`,
    quick: [QR.wa, QR.book],
  },
  {
    emo: 'thinking',
    tags: ['payment', 'pay', 'advance payment', 'deposit', 'emi', 'installment', 'upi', 'bank'],
    reply: `💳 A booking advance secures your dates, with the balance split around the shoot and final delivery. UPI and bank transfer are accepted. The team will share the exact schedule with your quote.`,
    quick: [QR.wa, QR.book],
  },
  {
    emo: 'happy',
    tags: ['crew', 'how many', 'team size', 'photographer', 'cinematographer', 'people'],
    reply: `🎬 Crew scales with the package — a dedicated 2–3 person unit for Single Side weddings, up to a <b>6-crew director-led unit with drones</b> for Both Side productions.`,
    quick: [QR.packages, QR.book],
  },
];

const CSS = `
#sx-widget{position:fixed;bottom:24px;right:24px;z-index:99999;font-family:Manrope,Inter,system-ui,sans-serif}
#sx-bubble{width:104px;height:78px;cursor:pointer;position:relative;animation:sx-float 3.2s ease-in-out infinite;user-select:none;filter:drop-shadow(0 6px 14px rgba(62,230,240,.45)) drop-shadow(0 2px 4px rgba(0,0,0,.6));transition:filter .3s}
#sx-bubble:hover{filter:drop-shadow(0 10px 22px rgba(62,230,240,.7)) drop-shadow(0 2px 4px rgba(0,0,0,.6))}
#sx-bubble.sx-wiggle{animation:sx-float 3.2s ease-in-out infinite,sx-wiggle .5s ease}
#sx-bubble.sx-excited{animation:sx-excited .6s ease}
@keyframes sx-float{0%,100%{transform:translateY(0) rotate(0)}30%{transform:translateY(-8px) rotate(-1.5deg)}70%{transform:translateY(-5px) rotate(1deg)}}
@keyframes sx-wiggle{0%{transform:rotate(0) scale(1)}15%{transform:rotate(-10deg) scale(1.12)}35%{transform:rotate(9deg) scale(1.12)}55%{transform:rotate(-6deg) scale(1.06)}75%{transform:rotate(5deg) scale(1.06)}100%{transform:rotate(0) scale(1)}}
@keyframes sx-excited{0%{transform:translateY(0) scale(1)}25%{transform:translateY(-14px) scale(1.1)}50%{transform:translateY(0) scale(.95)}70%{transform:translateY(-6px) scale(1.05)}100%{transform:translateY(0) scale(1)}}
@media (prefers-reduced-motion:reduce){#sx-bubble,.sx-char{animation:none!important}}
/* Character: image + SVG face in the same 966x728 space */
.sx-char{position:relative;display:block;aspect-ratio:966/728}
.sx-char-img{position:absolute;inset:0;width:100%;height:100%;object-fit:contain;pointer-events:none}
.sx-char-face{position:absolute;inset:0;width:100%;height:100%;overflow:visible;pointer-events:none}
.sx-eye{transform-box:fill-box;transform-origin:center}
.sx-eye-white{fill:#fff;transform-box:fill-box;transform-origin:center;transition:transform .09s linear}
.sx-pupil{fill:${INK};transition:transform .25s cubic-bezier(.34,1.4,.64,1)}
.sx-eye-shine{fill:rgba(255,255,255,.85)}
.sx-eye-closed{opacity:0;transition:opacity .15s}
.sx-heart{fill:#ff3b5c;opacity:0;transform-box:fill-box;transform-origin:center;transition:opacity .25s,transform .25s;transform:scale(.6)}
.sx-brow{opacity:0;transform-box:fill-box;transform-origin:center;transition:opacity .25s,transform .3s}
.sx-mouth{transition:opacity .3s}
.sx-mouth-smile{opacity:1}.sx-mouth-big,.sx-mouth-neutral,.sx-mouth-o,.sx-mouth-frown{opacity:0}
.sx-tongue{opacity:0;transition:opacity .25s}
.sx-cheek{fill:rgba(255,110,80,.45);opacity:0;transition:opacity .4s}
.sx-zz{opacity:0;transition:opacity .3s}
/* blink / wink */
.sx-eye.blink .sx-eye-white,.sx-eye.wink .sx-eye-white{transform:scaleY(.08)}
.sx-eye.blink .sx-pupil,.sx-eye.blink .sx-eye-shine,.sx-eye.wink .sx-pupil,.sx-eye.wink .sx-eye-shine{opacity:0}
/* look around (bubble only) */
.sx-char.look-left .sx-pupil{transform:translate(-14px,0)}
.sx-char.look-right .sx-pupil{transform:translate(14px,0)}
.sx-char.look-up .sx-pupil{transform:translate(0,-14px)}
.sx-char.look-down .sx-pupil{transform:translate(0,10px)}
/* expressions */
.sx-char.face-happy .sx-mouth-smile,.sx-char.face-laugh .sx-mouth-smile,.sx-char.face-party .sx-mouth-smile,.sx-char.face-wave .sx-mouth-smile,.sx-char.face-idea .sx-mouth-smile,.sx-char.face-cool .sx-mouth-smile,.sx-char.face-love .sx-mouth-smile{opacity:0}
.sx-char.face-happy .sx-mouth-big,.sx-char.face-laugh .sx-mouth-big,.sx-char.face-party .sx-mouth-big,.sx-char.face-wave .sx-mouth-big,.sx-char.face-idea .sx-mouth-big,.sx-char.face-cool .sx-mouth-big,.sx-char.face-love .sx-mouth-big{opacity:1}
.sx-char.face-happy .sx-cheek,.sx-char.face-laugh .sx-cheek,.sx-char.face-party .sx-cheek,.sx-char.face-love .sx-cheek,.sx-char.face-tongue .sx-cheek{opacity:1}
.sx-char.face-laugh .sx-eye-white,.sx-char.face-cool .sx-eye-white{transform:scaleY(.45)}
.sx-char.face-party .sx-eye-white,.sx-char.face-idea .sx-eye-white{transform:scale(1.12)}
.sx-char.face-idea .sx-brow,.sx-char.face-party .sx-brow{opacity:1;transform:translateY(-14px)}
.sx-char.face-wink .sx-eye-r .sx-eye-white,.sx-char.face-tongue .sx-eye-r .sx-eye-white{transform:scaleY(.08)}
.sx-char.face-wink .sx-eye-r .sx-pupil,.sx-char.face-wink .sx-eye-r .sx-eye-shine,.sx-char.face-tongue .sx-eye-r .sx-pupil,.sx-char.face-tongue .sx-eye-r .sx-eye-shine{opacity:0}
.sx-char.face-tongue .sx-tongue{opacity:1}
.sx-char.face-love .sx-pupil,.sx-char.face-love .sx-eye-shine{opacity:0}
.sx-char.face-love .sx-heart{opacity:1;transform:scale(1.15)}
.sx-char.face-thinking .sx-mouth-smile{opacity:0}.sx-char.face-thinking .sx-mouth-neutral{opacity:1}
.sx-char.face-thinking .sx-pupil{transform:translate(10px,-16px)}
.sx-char.face-thinking .sx-brow-r{opacity:1;transform:translateY(-12px) rotate(-8deg)}
.sx-char.face-surprised .sx-mouth-smile{opacity:0}.sx-char.face-surprised .sx-mouth-o{opacity:1}
.sx-char.face-surprised .sx-eye-white{transform:scale(1.18)}
.sx-char.face-surprised .sx-brow{opacity:1;transform:translateY(-18px)}
.sx-char.face-sad .sx-mouth-smile{opacity:0}.sx-char.face-sad .sx-mouth-frown{opacity:1}
.sx-char.face-sad .sx-brow-l{opacity:1;transform:rotate(-16deg) translateY(2px)}
.sx-char.face-sad .sx-brow-r{opacity:1;transform:rotate(16deg) translateY(2px)}
.sx-char.face-sad .sx-pupil{transform:translate(0,8px)}
.sx-char.face-sleepy .sx-eye-white,.sx-char.face-sleepy .sx-pupil,.sx-char.face-sleepy .sx-eye-shine{opacity:0}
.sx-char.face-sleepy .sx-eye-closed{opacity:1}
.sx-char.face-sleepy .sx-mouth-smile{opacity:0}.sx-char.face-sleepy .sx-mouth-o{opacity:1;transform:scale(.6);transform-box:fill-box;transform-origin:center}
.sx-char.face-sleepy .sx-zz{opacity:1;animation:sx-zz 1.8s ease-in-out infinite}
@keyframes sx-zz{0%,100%{transform:translateY(0);opacity:.4}50%{transform:translateY(-16px);opacity:1}}
/* bubble effects */
#sx-bubble .sx-char{width:100%;height:100%}
#sx-bubble .sx-char.pop{animation:sx-pop .55s cubic-bezier(.34,1.56,.64,1)}
@keyframes sx-pop{0%{transform:scale(.8) rotate(-5deg)}60%{transform:scale(1.1) rotate(3deg)}100%{transform:scale(1) rotate(0)}}
#sx-bubble.sx-shake .sx-char{animation:sx-shake .5s ease}
@keyframes sx-shake{0%,100%{transform:translateX(0)}20%{transform:translateX(-3px) rotate(-3deg)}40%{transform:translateX(3px) rotate(3deg)}60%{transform:translateX(-2px)}80%{transform:translateX(2px)}}
#sx-bubble.sx-bob .sx-char{animation:sx-bob 1.6s ease-in-out infinite}
@keyframes sx-bob{0%,100%{transform:translateY(0)}50%{transform:translateY(2px)}}
.sx-flash{position:absolute;left:8%;top:18%;width:38%;height:50%;border-radius:50%;background:radial-gradient(circle,rgba(255,255,255,1),rgba(255,255,255,0) 65%);opacity:0;pointer-events:none;mix-blend-mode:screen}
.sx-flash.go{animation:sx-flash .45s ease-out}
@keyframes sx-flash{0%{opacity:0;transform:scale(.6)}15%{opacity:1;transform:scale(1.3)}100%{opacity:0;transform:scale(1.6)}}
#sx-badge{position:absolute;top:-3px;right:-3px;background:${CFG.black};color:${CFG.gold};border:1px solid ${CFG.gold};border-radius:50%;width:20px;height:20px;font-size:.68rem;font-weight:800;display:flex;align-items:center;justify-content:center;box-shadow:0 2px 8px rgba(0,0,0,.5);animation:sx-pulse 1.8s infinite;z-index:2}
@keyframes sx-pulse{0%,100%{transform:scale(1)}50%{transform:scale(1.2)}}
#sx-window{position:absolute;bottom:76px;right:0;width:370px;height:560px;max-height:calc(100vh - 110px);background:${CFG.surface};border:1px solid rgba(0,184,200,.35);border-radius:14px;box-shadow:0 16px 56px rgba(0,0,0,.7),0 0 0 1px rgba(0,0,0,.6);display:flex;flex-direction:column;overflow:hidden;transform:scale(.85) translateY(20px);opacity:0;pointer-events:none;transition:transform .3s cubic-bezier(.34,1.56,.64,1),opacity .25s}
#sx-window.sx-open{transform:scale(1) translateY(0);opacity:1;pointer-events:all}
@media (max-width:420px){#sx-widget{bottom:16px;right:12px}#sx-window{width:calc(100vw - 24px);bottom:72px;height:min(520px,calc(100vh - 100px))}}
.sx-header{background:${CFG.black};padding:14px 16px;display:flex;align-items:center;gap:12px;flex-shrink:0;border-bottom:1px solid rgba(0,184,200,.3)}
.sx-header-avatar{width:56px;height:42px;flex-shrink:0;filter:drop-shadow(0 2px 4px rgba(0,0,0,.6))}
.sx-header-avatar .sx-char{width:100%;height:100%}
.sx-header-info{flex:1;min-width:0}
.sx-header-name{color:${CFG.gold};font-weight:600;font-size:1rem;font-family:'Playfair Display',Georgia,serif;letter-spacing:.02em}
.sx-header-status{color:${CFG.outline};font-size:.7rem;display:flex;align-items:center;gap:6px;margin-top:2px;text-transform:uppercase;letter-spacing:.12em}
.sx-status-dot{width:7px;height:7px;border-radius:50%;background:${CFG.gold};display:inline-block;animation:sx-blink 2s infinite;box-shadow:0 0 6px ${CFG.gold}}
@keyframes sx-blink{0%,100%{opacity:1}50%{opacity:.35}}
.sx-close{background:rgba(255,255,255,.06);border:1px solid rgba(0,184,200,.25);cursor:pointer;width:32px;height:32px;border-radius:50%;color:${CFG.textMuted};display:flex;align-items:center;justify-content:center;transition:background .2s,color .2s;padding:0}
.sx-close:hover{background:rgba(62,230,240,.15);color:${CFG.gold}}
.sx-close .material-symbols-outlined{font-size:18px}
.sx-messages{flex:1;overflow-y:auto;padding:16px 14px 8px;scroll-behavior:smooth;background:${CFG.surface};background-image:radial-gradient(ellipse at top,rgba(0,184,200,.06),transparent 60%)}
.sx-messages::-webkit-scrollbar{width:4px}.sx-messages::-webkit-scrollbar-thumb{background:${CFG.surfaceHighest};border-radius:4px}
.sx-row{display:flex;align-items:flex-end;gap:8px;margin-bottom:10px}
.sx-row-user{flex-direction:row-reverse}
.sx-avatar{width:38px;height:29px;flex-shrink:0;filter:drop-shadow(0 1px 3px rgba(0,0,0,.6))}
.sx-avatar .sx-char{width:100%;height:100%}
.sx-msg{max-width:84%;padding:10px 14px;border-radius:14px;font-size:.855rem;line-height:1.55;word-break:break-word}
.sx-msg a{color:${CFG.gold};text-decoration:underline;text-underline-offset:2px}
.sx-msg-bot{background:${CFG.surfaceLow};color:${CFG.text};border:1px solid ${CFG.surfaceHigh};border-bottom-left-radius:4px}
.sx-msg-bot b{color:${CFG.gold};font-weight:600}
.sx-msg-user{background:linear-gradient(135deg,${CFG.gold},${CFG.goldDeep});color:${CFG.goldInk};font-weight:500;border-bottom-right-radius:4px}
.sx-typing{display:flex;align-items:center;gap:5px;padding:12px 16px}
.sx-typing span{width:7px;height:7px;border-radius:50%;background:${CFG.goldDeep};animation:sx-bounce .9s infinite}
.sx-typing span:nth-child(2){animation-delay:.15s}.sx-typing span:nth-child(3){animation-delay:.3s}
@keyframes sx-bounce{0%,60%,100%{transform:translateY(0)}30%{transform:translateY(-6px)}}
.sx-qr{display:flex;flex-wrap:wrap;gap:6px;padding:6px 14px 8px;background:${CFG.surface};flex-shrink:0}
.sx-qr:empty{display:none}
.sx-qr button{background:transparent;border:1px solid rgba(0,184,200,.6);color:${CFG.gold};border-radius:20px;padding:5px 13px;font-size:.76rem;font-weight:600;cursor:pointer;transition:background .2s,color .2s,border-color .2s;white-space:nowrap;font-family:inherit;letter-spacing:.02em}
.sx-qr button:hover{background:${CFG.gold};color:${CFG.goldInk};border-color:${CFG.gold}}
.sx-input-area{display:flex;align-items:center;gap:8px;padding:10px 12px;background:${CFG.black};border-top:1px solid rgba(0,184,200,.2);flex-shrink:0}
.sx-input{flex:1;min-width:0;border:1px solid ${CFG.surfaceHighest};border-radius:24px;padding:9px 16px;font-size:.855rem;outline:none;font-family:inherit;transition:border .2s;background:${CFG.surfaceLow};color:${CFG.text}}
.sx-input::placeholder{color:${CFG.outline}}
.sx-input:focus{border-color:${CFG.gold}}
.sx-send{width:38px;height:38px;border-radius:50%;border:none;background:${CFG.gold};color:${CFG.goldInk};cursor:pointer;display:flex;align-items:center;justify-content:center;flex-shrink:0;transition:background .2s,transform .2s;padding:0}
.sx-send:hover{background:#a5f3fc;transform:scale(1.08)}
.sx-send .material-symbols-outlined{font-size:18px}
.sx-wa{display:flex;align-items:center;justify-content:center;gap:8px;padding:9px 12px;background:${CFG.surfaceLow};border-top:1px solid rgba(0,184,200,.2);font-size:.74rem;color:${CFG.textMuted};font-weight:600;cursor:pointer;transition:background .2s,color .2s;flex-shrink:0;text-decoration:none;letter-spacing:.06em;text-transform:uppercase}
.sx-wa:hover{background:${CFG.surfaceHigh};color:${CFG.gold}}
.sx-wa svg{width:16px;height:16px;fill:#25d366;flex-shrink:0}
`;

const WA_SVG = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M17.5 14.4c-.3-.1-1.8-.9-2-1-.3-.1-.5-.1-.7.1-.2.3-.8 1-.9 1.2-.2.2-.3.2-.6.1-.3-.1-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6l.4-.5c.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5l-.9-2.2c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.1.2 2.1 3.2 5.1 4.5.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.8-.7 2-1.4.2-.7.2-1.3.2-1.4-.1-.2-.3-.3-.6-.4zM12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm0 18.2c-1.5 0-3-.4-4.3-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2z"/></svg>';

export default function SliceBot() {
  const rootRef = useRef(null);
  const logo = withBase('/assets/logo.jpg');
  const bookUrl = withBase('/book-your-date/');
  const filmsUrl = withBase('/films/');

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    // No concierge on the studio admin screens.
    if (/\/admin\/?$/.test(window.location.pathname)) { root.style.display = 'none'; return; }
    const $ = (id) => root.querySelector('#' + id);
    const $msgs = $('sx-messages');
    const $input = $('sx-input');
    const $send = $('sx-send');
    const $qr = $('sx-qr');
    const $window = $('sx-window');
    const $bubble = $('sx-bubble');
    const $badge = $('sx-badge');
    const timers = new Set();
    const later = (fn, ms) => { const t = setTimeout(() => { timers.delete(t); fn(); }, ms); timers.add(t); return t; };

    // ── State (persisted for the tab so navigation keeps the chat) ──
    const SS_KEY = 'sx_chat_v1';
    let state = { open: false, step: 'welcome', userName: '', userPhone: '', userEmail: '', userService: '', leadSent: false, autoOpened: false, history: [] };
    let saved = null;
    try { saved = JSON.parse(sessionStorage.getItem(SS_KEY) || 'null'); } catch {}
    if (saved && saved.state) {
      state = { ...state, ...saved.state, open: false };
      if (saved.html) $msgs.innerHTML = saved.html;
    }
    const persist = () => {
      try {
        sessionStorage.setItem(SS_KEY, JSON.stringify({ state: { step: state.step, userName: state.userName, userPhone: state.userPhone, userEmail: state.userEmail, userService: state.userService, leadSent: state.leadSent, autoOpened: state.autoOpened, history: (state.history || []).slice(-12) }, html: $msgs.innerHTML.slice(0, 60000), qr: [...$qr.querySelectorAll('button')].map((b) => b.textContent) }));
      } catch {}
    };

    // ── Bell tone ─────────────────────────────────────────────
    let audioCtx = null;
    const getAudioCtx = () => {
      if (!audioCtx) { try { audioCtx = new (window.AudioContext || window.webkitAudioContext)(); } catch {} }
      return audioCtx;
    };
    const playBell = (variant) => {
      const ctx = getAudioCtx();
      if (!ctx) return;
      (ctx.state === 'suspended' ? ctx.resume() : Promise.resolve()).then(() => {
        try {
          const t = ctx.currentTime;
          const notes = variant === 'open' ? [[1047, 0, 0.16], [1319, 0.14, 0.13]] : [[784, 0, 0.12]];
          notes.forEach(([freq, offset, vol]) => {
            const o = ctx.createOscillator(); const g = ctx.createGain();
            o.connect(g); g.connect(ctx.destination); o.type = 'sine';
            o.frequency.setValueAtTime(freq, t + offset);
            g.gain.setValueAtTime(0, t + offset);
            g.gain.linearRampToValueAtTime(vol, t + offset + 0.02);
            g.gain.exponentialRampToValueAtTime(0.0001, t + offset + 0.5);
            o.start(t + offset); o.stop(t + offset + 0.55);
          });
        } catch {}
      });
    };
    const unlock = () => { const c = getAudioCtx(); if (c && c.state === 'suspended') c.resume(); };
    ['click', 'touchstart', 'keydown'].forEach((e) => document.addEventListener(e, unlock, { once: true, passive: true }));

    // ── Helpers ───────────────────────────────────────────────
    const sanitize = (s) => s.replace(/</g, '&lt;').replace(/>/g, '&gt;');
    // WhatsApp number is editable in the admin panel (Contact → WhatsApp).
    let waNumber = CFG.whatsapp;
    fetchContent('contact').then((c) => {
      if (c && c.whatsapp) {
        waNumber = String(c.whatsapp).replace(/\D/g, '');
        const bar = $('sx-wa');
        if (bar) { bar.href = `https://wa.me/${waNumber}?text=${encodeURIComponent(CFG.waMessage)}`; bar.lastChild.textContent = ` WhatsApp the studio · ${c.phone1 || CFG.whatsappDisplay}`; }
      }
    }).catch(() => {});
    const openWhatsApp = (msg) => {
      const text = msg || CFG.waMessage;
      const intro = (state.userName ? `Hi! My name is ${state.userName}. ` : '') + (state.userService ? `I'm interested in ${state.userService}. ` : '');
      window.open(`https://wa.me/${waNumber}?text=${encodeURIComponent(intro + text)}`, '_blank', 'noopener');
    };
    // Save the visitor as a lead once the intake is complete (admin → Leads).
    // Needs a name plus at least one way to reach them; sent once per session.
    const recordLead = () => {
      if (state.leadSent || !state.userName || (!state.userPhone && !state.userEmail)) return;
      state.leadSent = true;
      const msgs = (state.history || []).filter((m) => m.role === 'user').map((m) => m.content).slice(-6).join(' | ');
      submitLead({ name: state.userName, phone: state.userPhone, email: state.userEmail, service: state.userService, message: msgs, source: 'chitra-chat' })
        .catch(() => { state.leadSent = false; });
    };
    const matchKB = (text) => {
      const lower = text.toLowerCase();
      let best = null; let bestScore = 0;
      for (const entry of KB) for (const tag of entry.tags) {
        if (lower.includes(tag) && tag.length > bestScore) { bestScore = tag.length; best = entry; }
      }
      return best;
    };

    // ── DOM helpers ───────────────────────────────────────────
    const scrollToBottom = () => later(() => { $msgs.scrollTop = $msgs.scrollHeight; }, 50);
    const avatarHtml = (emo) => `<div class="sx-avatar"><div class="sx-char face-${EMOTIONS.includes(emo) ? emo : 'happy'}">${charMarkup(emo, false)}</div></div>`;
    const addMsg = (html, side, emo) => {
      const row = document.createElement('div');
      row.className = `sx-row sx-row-${side}`;
      row.innerHTML = (side === 'bot' ? avatarHtml(emo) : '') + `<div class="sx-msg sx-msg-${side}">${html.replace(/\n/g, '<br>')}</div>`;
      $msgs.appendChild(row);
      scrollToBottom();
      persist();
    };
    const addUserMsg = (t) => addMsg(sanitize(t), 'user');
    const showTyping = () => {
      const row = document.createElement('div');
      row.className = 'sx-row sx-row-bot'; row.id = 'sx-typing';
      row.innerHTML = avatarHtml('thinking') + '<div class="sx-msg sx-msg-bot sx-typing"><span></span><span></span><span></span></div>';
      $msgs.appendChild(row); scrollToBottom();
      setEmotion('thinking', { pop: false });
    };
    const removeTyping = () => { const t = $msgs.querySelector('#sx-typing'); if (t) t.remove(); };
    const clearQR = () => { $qr.innerHTML = ''; };
    const setQR = (items) => {
      clearQR();
      items.forEach((label) => {
        const btn = document.createElement('button');
        btn.type = 'button'; btn.textContent = label;
        btn.onclick = () => onQuickReply(label);
        $qr.appendChild(btn);
      });
      persist();
    };
    const addBotMsg = (html, quick, delay, emo, emoOpts) => {
      showTyping();
      later(() => {
        removeTyping();
        addMsg(html, 'bot', emo || 'happy');
        setEmotion(emo || 'happy', { hold: 4500, ...(emoOpts || {}) });
        playBell('msg');
        if (quick && quick.length) setQR(quick); else clearQR();
      }, delay !== undefined ? delay : CFG.typingDelay);
    };
    const setPlaceholder = (t) => { $input.placeholder = t; };

    const DEFAULT_QR = [QR.services, QR.packages, QR.book, QR.films, QR.wa];
    // Intake: name → phone → email → service, then the lead is saved.
    const SERVICE_QR = ['🎬 Wedding Films', '📸 Wedding Photography', '🌅 Pre-Wedding Films', '💞 Engagement Stories', '📱 Cinematic Reels', '🚁 Drone Coverage', '✨ Something else'];
    const INTAKE_STEPS = new Set(['getName', 'getPhone', 'getEmail', 'getService']);
    const SKIP_RE = /^\s*(skip|no|nope|later|not now|na|n\/a|-)\s*[.!]?\s*$/i;
    const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

    // ── Quick reply actions ───────────────────────────────────
    const QR_ACTIONS = {
      [QR.wa]: () => { addUserMsg(QR.wa); openWhatsApp(); addBotMsg(`Opening WhatsApp… 💬 The studio usually replies within the hour. Anything else I can help with meanwhile?`, DEFAULT_QR, 400, 'wave'); },
      [QR.book]: () => { addUserMsg(QR.book); addBotMsg(`📅 Let's secure your dates. Share your celebration dates and destination on the booking page, or send them to the team on WhatsApp.<br><br><a href="${bookUrl}">Open the booking page →</a>`, [QR.wa, QR.packages], 500, 'love', { flash: true }); },
      [QR.films]: () => { addUserMsg(QR.films); handleKeyword('portfolio'); },
      [QR.services]: () => { addUserMsg(QR.services); handleKeyword('service'); },
      [QR.packages]: () => { addUserMsg(QR.packages); handleKeyword('pricing'); },
      [QR.prewed]: () => { addUserMsg(QR.prewed); handleKeyword('pre-wedding'); },
      [QR.single]: () => { addUserMsg(QR.single); handleKeyword('single side'); },
      [QR.both]: () => { addUserMsg(QR.both); handleKeyword('both side'); },
      [QR.delivery]: () => { addUserMsg(QR.delivery); handleKeyword('deliver'); },
      [QR.travel]: () => { addUserMsg(QR.travel); handleKeyword('destination'); },
      [QR.about]: () => { addUserMsg(QR.about); handleKeyword('about'); },
      [QR.reviews]: () => { addUserMsg(QR.reviews); handleKeyword('review'); },
    };
    function handleKeyword(k) {
      const m = matchKB(k);
      if (m) addBotMsg(m.reply, m.quick, undefined, m.emo);
      else addBotMsg(`Let me get the right person for that.`, [QR.wa, QR.book], undefined, 'surprised');
    }
    function onQuickReply(label) {
      clearQR();
      // While collecting details, a tapped chip is just the visitor's answer.
      if (INTAKE_STEPS.has(state.step)) { handleUserInput(label); return; }
      if (QR_ACTIONS[label]) QR_ACTIONS[label]();
      else { addUserMsg(label); answer(label); }
    }

    // ── AI brain ──────────────────────────────────────────────
    const remember = (role, content) => {
      state.history = [...(state.history || []), { role, content: String(content).slice(0, 600) }].slice(-12);
    };
    // Escape HTML, then allow **bold**, line breaks and bare URLs/paths.
    const renderAi = (text) => {
      let t = sanitize(String(text)).replace(/&lt;br&gt;/g, String.fromCharCode(10));
      t = t.replace(/\*\*([^*]+)\*\*/g, '<b>$1</b>');
      t = t.replace(/(https?:\/\/[^\s<)]+)/g, (u) => `<a href="${u}" target="_blank" rel="noopener">${u.replace(/^https?:\/\/(www\.)?/, '')}</a>`);
      t = t.replace(/(^|[\s(])(\/(?:book-your-date|films|portfolio|services|about|contact)\/?)/g, (m, pre, path) => `${pre}<a href="${withBase(path.endsWith('/') ? path : path + '/')}">${path}</a>`);
      return t;
    };
    let aiBusy = false;
    let aiDown = 0; // timestamp until which we skip the AI after a failure
    async function askAi(text) {
      if (!CFG.aiEndpoint || aiBusy || Date.now() < aiDown) return null;
      aiBusy = true;
      const ctrl = new AbortController();
      const t = setTimeout(() => ctrl.abort(), CFG.aiTimeout);
      try {
        const res = await fetch(CFG.aiEndpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ messages: [...(state.history || []), { role: 'user', content: text }], name: state.userName || '' }),
          signal: ctrl.signal,
        });
        if (!res.ok) throw new Error('http ' + res.status);
        const data = await res.json();
        if (!data || !data.reply) throw new Error('empty');
        return data;
      } catch (e) {
        aiDown = Date.now() + 60000; // keyword mode for a minute, then retry
        return null;
      } finally {
        clearTimeout(t);
        aiBusy = false;
      }
    }
    // Map the model's suggested quick replies onto known actions when the
    // label matches; unknown labels are sent back to the AI as plain text.
    const KNOWN_QR = Object.values(QR);
    const normQuick = (arr) => (arr || []).map((q) => {
      const hit = KNOWN_QR.find((k) => k.replace(/^\S+\s/, '').toLowerCase() === String(q).replace(/^\S+\s/, '').toLowerCase());
      return hit || String(q);
    }).slice(0, 4);

    // ── Conversation ──────────────────────────────────────────
    const startConversation = () => {
      later(() => {
        addBotMsg(`Welcome to <b>${CFG.brandTitle}</b> 🎬<br><br>I'm <b>${CFG.botName}</b>, the studio's concierge. I can walk you through our films, packages and dates, or connect you with Abhishek's team.<br><br>May I know your <b>name</b>?`, [], 800, 'wave');
        state.step = 'getName';
        setPlaceholder('Type your name…');
        persist();
      }, 300);
    };
    const askPhone = () => {
      state.step = 'getPhone';
      setPlaceholder('Your phone / WhatsApp number…');
      addBotMsg(`Lovely to meet you, <b>${sanitize(state.userName)}</b>. ✨<br><br>Could I have your <b>contact number</b> (WhatsApp preferred) so the team can reach you? 📱`, [], undefined, 'party', { flash: true });
    };
    const askEmail = (lead) => {
      state.step = 'getEmail';
      setPlaceholder('Your email address…');
      addBotMsg(`${lead}And your <b>email address</b>? ✉️<br><i>(type <b>skip</b> if you'd rather not)</i>`, []);
    };
    const askService = (lead) => {
      state.step = 'getService';
      setPlaceholder('Pick a service or type it…');
      addBotMsg(`${lead}Which of our <b>services</b> are you interested in? 🎬`, SERVICE_QR, undefined, 'idea');
    };
    const finishIntake = () => {
      state.step = 'chat';
      setPlaceholder('Ask me anything…');
      recordLead();
      const n = sanitize(state.userName);
      const svc = sanitize(state.userService);
      const reach = state.userPhone ? 'on WhatsApp' : state.userEmail ? 'by email' : '';
      remember('user', `My name is ${state.userName}.${state.userPhone ? ` My phone number is ${state.userPhone}.` : ''}${state.userEmail ? ` My email is ${state.userEmail}.` : ''} I'm interested in ${state.userService}.`);
      remember('assistant', `Thanks ${state.userName}, I've passed your details to the studio. What would you like to know about ${state.userService}?`);
      addBotMsg(`Perfect, <b>${n}</b> — I've passed your details to the studio and they'll reach out ${reach} shortly. 🙌<br><br>Meanwhile, what would you like to know about <b>${svc}</b>? I can share packages, delivery timelines or sample films.`, [QR.packages, QR.films, QR.delivery, QR.wa], 700, 'party', { flash: true });
    };
    const handleUserInput = (text) => {
      if (!text.trim()) return;
      addUserMsg(text);
      $input.value = '';
      clearQR();

      if (state.step === 'welcome') { state.step = 'getName'; }
      if (state.step === 'getName') {
        state.userName = text.trim().split(/\s+/)[0].slice(0, 30);
        askPhone();
        persist();
        return;
      }
      if (state.step === 'getPhone') {
        const digits = text.replace(/\D/g, '');
        if (digits.length >= 10 && digits.length <= 15) {
          state.userPhone = digits;
          askEmail(`Thank you! 🙌 `);
        } else if (SKIP_RE.test(text)) {
          askEmail(`No problem. `);
        } else {
          addBotMsg(`Hmm, that doesn't look like a valid number. Please enter a <b>10-digit mobile number</b> (with country code if outside India), or type <b>skip</b>.`, [], 500, 'curious');
        }
        persist();
        return;
      }
      if (state.step === 'getEmail') {
        const email = text.trim();
        if (EMAIL_RE.test(email)) {
          state.userEmail = email.slice(0, 200);
          askService(`Got it. ✉️ `);
        } else if (SKIP_RE.test(text)) {
          askService(`That's fine. `);
        } else {
          addBotMsg(`That doesn't look like an email address. Please enter one like <i>name@example.com</i>, or type <b>skip</b>.`, [], 500, 'curious');
        }
        persist();
        return;
      }
      if (state.step === 'getService') {
        const label = text.trim().replace(/^[^\p{L}\p{N}]+/u, '').slice(0, 120); // drop the leading emoji
        state.userService = /^something else$/i.test(label) ? 'Other' : label;
        finishIntake();
        persist();
        return;
      }

      const lower = text.toLowerCase();
      if (/whatsapp|call me|call you|speak|talk to|human|real person|connect|agent/.test(lower)) {
        addBotMsg(`Of course 💬 — the team is one tap away on WhatsApp and usually replies within the hour.`, [QR.wa, QR.book], undefined, 'wave');
        return;
      }
      if (/^(hi|hello|hey|namaste|namaskar|helo|hii+|good\s*(morning|afternoon|evening)|howdy)[\s!.]*$/.test(lower)) {
        const n = state.userName ? `, ${sanitize(state.userName)}` : '';
        addBotMsg(`Hello${n}! 👋 How can I help with your celebration?`, DEFAULT_QR, undefined, 'wave');
        return;
      }
      if (/\b(thank|thanks|thx|ty)\b/.test(lower)) {
        addBotMsg(`You're most welcome. 🙏 Anything else?`, [QR.book, QR.films, QR.wa], undefined, 'love');
        return;
      }
      if (/\b(bye|goodbye|see you|later)\b/.test(lower)) {
        addBotMsg(`Until next time ✨ — the booking page and WhatsApp are always open.`, [QR.book, QR.wa], undefined, 'sad', { hold: 6000 });
        return;
      }
      answer(text);
    };

    // AI first; keyword knowledge base as the fallback.
    async function answer(text) {
      remember('user', text);
      showTyping();
      const ai = await askAi(text);
      removeTyping();
      if (ai) {
        remember('assistant', ai.reply);
        const quick = normQuick(ai.quick);
        addBotMsg(renderAi(ai.reply), quick.length ? quick : DEFAULT_QR, 250, ai.emotion || 'happy');
        return;
      }
      const m = matchKB(text);
      if (m) {
        remember('assistant', m.reply.replace(/<[^>]+>/g, ''));
        addBotMsg(m.reply, m.quick, 250, m.emo);
      } else {
        const n = state.userName ? ` ${sanitize(state.userName)}` : '';
        addBotMsg(`Good question${n} — I don't have a precise answer for that, but the team will. 😊 Reach them instantly on WhatsApp, or ask me about films, packages or dates.`, [QR.wa, QR.packages, QR.services], 250, 'surprised', { shake: true });
      }
    }

    // ── Open / close ──────────────────────────────────────────
    const closesKey = 'sx_closes';
    const openChat = () => {
      state.open = true;
      $window.classList.add('sx-open');
      $badge.style.display = 'none';
      playBell('open');
      setEmotion('laugh', { flash: true, hold: 2000, force: true });
      if ($msgs.children.length === 0) startConversation();
      else if (saved && saved.qr && saved.qr.length && !$qr.children.length) setQR(saved.qr);
      later(() => $input.focus(), 400);
    };
    const closeChat = () => {
      state.open = false;
      $window.classList.remove('sx-open');
      setEmotion('sad', { hold: 3000 });
      try { localStorage.setItem(closesKey, String((parseInt(localStorage.getItem(closesKey) || '0', 10) || 0) + 1)); } catch {}
    };
    const toggleChat = () => (state.open ? closeChat() : openChat());
    const sendMessage = () => { const v = $input.value.trim(); if (v) handleUserInput(v); };

    const onBubbleClick = () => {
      if (!root.dataset.opened) {
        root.dataset.opened = '1';
        $bubble.classList.add('sx-excited');
      }
      touch();
      toggleChat();
    };
    const onBubbleKey = (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggleChat(); } };
    const onInputKey = (e) => { if (e.key === 'Enter') sendMessage(); };
    const onWaClick = (e) => { e.preventDefault(); openWhatsApp(); };
    const onHover = () => { $bubble.classList.remove('sx-wiggle'); void $bubble.offsetWidth; $bubble.classList.add('sx-wiggle'); };
    const onAnimEnd = (e) => { if (e.animationName === 'sx-wiggle' || e.animationName === 'sx-excited') $bubble.classList.remove('sx-wiggle', 'sx-excited'); };

    $bubble.addEventListener('click', onBubbleClick);
    $bubble.addEventListener('keydown', onBubbleKey);
    $bubble.addEventListener('mouseenter', onHover);
    $bubble.addEventListener('animationend', onAnimEnd);
    $('sx-close').addEventListener('click', closeChat);
    $send.addEventListener('click', sendMessage);
    $input.addEventListener('keydown', onInputKey);
    $('sx-wa').addEventListener('click', onWaClick);

    // ── Emotion engine (SVG face) ─────────────────────────────
    // Expressions are CSS classes (face-<name>) on the character element,
    // which swap the eye / mouth / brow shapes. `hold` returns to the idle
    // face after the given ms. The header avatar mirrors the mood.
    const rand = (a, b) => Math.floor(Math.random() * (b - a + 1)) + a;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const $char = $('sx-char');
    const $flash = $('sx-flash');
    const $headerEmo = $('sx-header-emo');
    const eyeL = $('sx-eye-l'); const eyeR = $('sx-eye-r');
    const FACE_CLASSES = EMOTIONS.map((e) => `face-${e}`);
    const LOOKS = ['look-left', 'look-right', 'look-up', 'look-down'];
    let current = 'curious';
    let idleTimer = null;
    let lastActivity = Date.now();
    const applyFace = (el, name) => { if (!el) return; el.classList.remove(...FACE_CLASSES); if (name !== 'curious') el.classList.add(`face-${name}`); };
    function setEmotion(name, opts = {}) {
      if (!EMOTIONS.includes(name)) name = 'curious';
      if (name === current && !opts.force) return;
      applyFace($char, name);
      if (opts.pop !== false && !reduce) { $char.classList.remove('pop'); void $char.offsetWidth; $char.classList.add('pop'); }
      current = name;
      if (opts.header !== false) applyFace($headerEmo, name);
      if (opts.flash && !reduce) { $flash.classList.remove('go'); void $flash.offsetWidth; $flash.classList.add('go'); }
      if (opts.shake && !reduce) { $bubble.classList.remove('sx-shake'); void $bubble.offsetWidth; $bubble.classList.add('sx-shake'); }
      $bubble.classList.toggle('sx-bob', name === 'sleepy');
      if (idleTimer) { clearTimeout(idleTimer); timers.delete(idleTimer); idleTimer = null; }
      if (opts.hold) idleTimer = later(() => { idleTimer = null; setEmotion('curious', { pop: false }); }, opts.hold);
    }
    const onPopEnd = (e) => { if (e.animationName === 'sx-pop') $char.classList.remove('pop'); };
    $char.addEventListener('animationend', onPopEnd);
    const touch = () => { lastActivity = Date.now(); if (current === 'sleepy') setEmotion('wave', { hold: 1800 }); };
    $input.addEventListener('input', touch);
    $bubble.addEventListener('mouseenter', touch);

    if (!reduce) {
      // Blink (occasionally a wink or a double blink) — only while the eyes
      // are "open" expressions, so a wink or nap isn't interrupted.
      const canBlink = () => !['sleepy', 'wink', 'tongue', 'laugh', 'cool', 'love'].includes(current);
      const doBlink = (wink) => {
        if (!canBlink()) return;
        if (wink) { const eye = Math.random() > 0.5 ? eyeL : eyeR; eye.classList.add('wink'); later(() => eye.classList.remove('wink'), 180); }
        else { eyeL.classList.add('blink'); eyeR.classList.add('blink'); later(() => { eyeL.classList.remove('blink'); eyeR.classList.remove('blink'); }, 150); }
        if (Math.random() < 0.3) later(() => doBlink(false), 350);
      };
      const scheduleBlink = () => later(() => { doBlink(Math.random() < 0.15); scheduleBlink(); }, rand(2500, 5500));
      scheduleBlink();
      // Glance around while idle.
      const scheduleLook = () => later(() => {
        if (current === 'curious' || current === 'happy') {
          const dir = LOOKS[rand(0, LOOKS.length - 1)];
          $char.classList.add(dir);
          later(() => { $char.classList.remove(dir); }, rand(600, 1400));
        }
        scheduleLook();
      }, rand(4000, 9000));
      scheduleLook();
      // Idle personality: mostly curious, with the odd grin / wink / tongue,
      // and a nap if nobody has interacted for a while.
      const IDLE = ['happy', 'wink', 'tongue', 'laugh', 'cool', 'curious', 'curious'];
      const scheduleIdle = () => later(() => {
        const quiet = Date.now() - lastActivity;
        if (quiet > 90000 && current !== 'sleepy') setEmotion('sleepy', { pop: false });
        else if (current === 'curious') setEmotion(IDLE[rand(0, IDLE.length - 1)], { hold: rand(1800, 3200), pop: false });
        scheduleIdle();
      }, rand(5000, 11000));
      scheduleIdle();
    }

    // ── Auto-open once per visit, unless dismissed 3+ times ───
    if (saved && saved.html) $badge.style.display = 'none';
    later(() => {
      let closes = 0;
      try { closes = parseInt(localStorage.getItem(closesKey) || '0', 10) || 0; } catch {}
      if (!state.open && !state.autoOpened && closes < 3) {
        state.autoOpened = true; persist();
        $bubble.classList.add('sx-excited');
        later(openChat, 700);
      }
    }, CFG.autoOpenDelay);

    return () => {
      timers.forEach(clearTimeout);
      $bubble.removeEventListener('click', onBubbleClick);
      $bubble.removeEventListener('keydown', onBubbleKey);
      $bubble.removeEventListener('mouseenter', onHover);
      $bubble.removeEventListener('animationend', onAnimEnd);
      $('sx-close').removeEventListener('click', closeChat);
      $send.removeEventListener('click', sendMessage);
      $input.removeEventListener('keydown', onInputKey);
      $('sx-wa').removeEventListener('click', onWaClick);
    };
  }, [logo, bookUrl, filmsUrl]);

  return (
    <div id="sx-widget" ref={rootRef}>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <div id="sx-window" role="dialog" aria-label="Chat with Chitra">
        <div className="sx-header">
          <div className="sx-header-avatar"><div className="sx-char face-happy" id="sx-header-emo" dangerouslySetInnerHTML={{ __html: charMarkup('happy', false) }} /></div>
          <div className="sx-header-info">
            <div className="sx-header-name">Chitra · SliceX Films</div>
            <div className="sx-header-status"><span className="sx-status-dot" /> Studio concierge · online</div>
          </div>
          <button type="button" className="sx-close" id="sx-close" aria-label="Close chat">
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>
        <div className="sx-messages" id="sx-messages" />
        <div className="sx-qr" id="sx-qr" />
        <div className="sx-input-area">
          <input className="sx-input" id="sx-input" type="text" placeholder="Type your name…" autoComplete="off" maxLength={300} />
          <button type="button" className="sx-send" id="sx-send" aria-label="Send">
            <span className="material-symbols-outlined">send</span>
          </button>
        </div>
        <a className="sx-wa" id="sx-wa" href={`https://wa.me/${CFG.whatsapp}?text=${encodeURIComponent(CFG.waMessage)}`} target="_blank" rel="noopener">
          <span dangerouslySetInnerHTML={{ __html: WA_SVG }} />
          WhatsApp the studio · {CFG.whatsappDisplay}
        </a>
      </div>

      <div id="sx-bubble" role="button" aria-label="Open chat with Chitra" tabIndex={0}>
        <div className="sx-char" id="sx-char" dangerouslySetInnerHTML={{ __html: charMarkup('curious', true) }} />
        <div className="sx-flash" id="sx-flash" />
        <div id="sx-badge">1</div>
      </div>
    </div>
  );
}
