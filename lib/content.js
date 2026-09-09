'use client';

import { useEffect, useState } from 'react';
import { getSupabase } from './supabase';
import { VIDEOS, IMAGES, REELS } from '../app/(site)/gallery/gallery-data';
import { PORTFOLIO_ITEMS, PORTFOLIO_CATEGORIES } from '../app/(site)/portfolio/portfolio-data';

// ============================================================
// Editable site content. Each key has a built-in DEFAULT (what the site
// shipped with); the admin panel saves overrides to slicex_content and
// public pages merge them in at runtime via useContent(key).
// ============================================================

export const DEFAULTS = {
  contact: {
    studioName: 'SliceX Films',
    phone1: '+91 98271 22620',
    phone2: '+91 96586 21038',
    whatsapp: '919827122620',
    email: 'slicexfilms@gmail.com',
    email2: 'atelier@slicexfilms.com',
    address: 'Main Road, Near College Square, Balangir, Odisha 767001, India',
    city: 'Balangir, Odisha, India',
    hours: '10:00 AM – 8:00 PM IST',
    hotline: '24/7 Global Hotline',
    instagram: 'https://www.instagram.com/slicexfilms/',
    facebook: 'https://www.facebook.com/SliceXfilms',
    youtube: 'https://www.youtube.com/@slicexfilms8741',
    mapQuery: 'SliceX Films Balangir Odisha',
    tagline: 'Handcrafted heirloom wedding cinema & fine-art photography for extraordinary couples across the globe. Preserving timeless romance through pure chiaroscuro and analog soul.',
  },
  packages: {
    items: [
      { id: 'pre-wedding', label: 'OPTION 01', name: 'PRE-WEDDING FILM', price: '₹35,000', priceNote: 'STARTING COMMISSION', popular: false,
        features: ['1 Day Conceptual Shoot', '1-2 Minute Cinematic Teaser', '25 Editorial Edited Stills', 'Drone Aerial Footage'] },
      { id: 'engagement', label: 'OPTION 02', name: 'ENGAGEMENT ARCHIVE', price: '₹35,000', priceNote: 'FLAT COMMISSION', popular: false,
        features: ['Full Ceremony Coverage', 'Traditional + Candid Photo', '3-4 Minute Film Highlight', '4K Delivery Within 14 Days'] },
      { id: 'single-side', label: 'OPTION 03', name: 'SINGLE SIDE WEDDING', price: '₹1,10,000', priceNote: 'COMPLETE CEREMONY', popular: true,
        features: ['2-3 Day Dedicated Crew', '15-20 Min Cinematic Film', 'Instagram Teasers Included', 'Hardcover Heritage Album'] },
      { id: 'both-side', label: 'OPTION 04', name: 'BOTH SIDE WEDDING', price: '₹2,40,000', priceNote: 'THE FULL PRODUCTION', popular: false,
        features: ['Complete Dual Family Coverage', '6-Crew Director & Drones', '30-Min Feature Film + Reels', '2 Luxury Fine-Art Photo Books'] },
    ],
  },
  services: {
    items: [
      { id: 'wedding-films', title: 'WEDDING FILMS', desc: 'Feature-length and theatrical cut wedding narratives recorded with multi-camera cinema rigs and custom film sound design.', tag1: '4K MASTER', tag2: "DIRECTOR'S CUT", image: '/assets/service-wedding-films.jpg' },
      { id: 'wedding-photography', title: 'WEDDING PHOTOGRAPHY', desc: 'High-fashion editorial stills and authentic documentary photojournalism that captures raw, unprompted elegance.', tag1: 'FINE ART PRINTS', tag2: 'HIGH RES ARCHIVE', image: '/assets/service-wedding-photography.jpg' },
      { id: 'pre-wedding-films', title: 'PRE-WEDDING FILMS', desc: "Conceptual short cinematic vignettes built around the couple's intimate genesis story, curated styling, and destination backdrops.", tag1: 'STORYBOARDED', tag2: 'DESTINATION', image: '/assets/service-prewedding-films.jpg' },
      { id: 'engagement-stories', title: 'ENGAGEMENT STORIES', desc: 'Intimate portraits and audio documentary tracking the immediate chapter of commitment, family bonding, and candid exchange.', tag1: 'INTIMATE SOIRÉE', tag2: 'AUDIO VOWS', image: '/assets/service-engagement-stories.jpg' },
      { id: 'cinematic-reels', title: 'CINEMATIC REELS', desc: 'High-velocity vertical teasers engineered for digital showcase without losing cinematic grade color science and motion blur.', tag1: '9:16 VERTICAL', tag2: 'FAST-TURNAROUND', image: '/assets/service-cinematic-reels.jpg' },
      { id: 'drone-coverage', title: 'DRONE COVERAGE', desc: 'Certified aerial pilotage capturing sprawling palace architecture, mountain landscapes, and vast procession scales from above.', tag1: 'PRO-RES CINEMA', tag2: 'ARCHITECTURAL SCALE', image: '/assets/service-drone-coverage.jpg' },
    ],
  },
  gallery: { videos: VIDEOS, images: IMAGES, reels: REELS },
  portfolio: { categories: PORTFOLIO_CATEGORIES, items: PORTFOLIO_ITEMS },
};

export const CONTENT_KEYS = Object.keys(DEFAULTS);

// Shallow merge so a partial save never blanks out fields added later.
const merge = (key, data) => {
  const base = DEFAULTS[key];
  if (!data || typeof data !== 'object') return base;
  const out = { ...base, ...data };
  return out;
};

const cache = new Map();
const listeners = new Map();

export async function fetchContent(key) {
  const sb = getSupabase();
  if (!sb) return DEFAULTS[key];
  const { data, error } = await sb.from('slicex_content').select('data').eq('key', key).maybeSingle();
  if (error) throw error;
  const merged = merge(key, data?.data);
  cache.set(key, merged);
  (listeners.get(key) || []).forEach((fn) => fn(merged));
  return merged;
}

export async function fetchAllContent() {
  const sb = getSupabase();
  if (!sb) return { ...DEFAULTS };
  const { data, error } = await sb.from('slicex_content').select('key,data,updated_at');
  if (error) throw error;
  const out = {};
  for (const k of CONTENT_KEYS) {
    const row = (data || []).find((r) => r.key === k);
    out[k] = merge(k, row?.data);
    cache.set(k, out[k]);
  }
  return out;
}

export async function saveContent(key, value, email) {
  const sb = getSupabase();
  const { error } = await sb
    .from('slicex_content')
    .upsert({ key, data: value, updated_at: new Date().toISOString(), updated_by: email || null }, { onConflict: 'key' });
  if (error) throw error;
  const merged = merge(key, value);
  cache.set(key, merged);
  (listeners.get(key) || []).forEach((fn) => fn(merged));
  return merged;
}

export async function resetContent(key) {
  const sb = getSupabase();
  const { error } = await sb.from('slicex_content').delete().eq('key', key);
  if (error) throw error;
  cache.set(key, DEFAULTS[key]);
  (listeners.get(key) || []).forEach((fn) => fn(DEFAULTS[key]));
}

// Public-page hook: renders the built-in default immediately, then swaps in
// the saved version once loaded. Never throws — a network failure just leaves
// the defaults on screen.
export function useContent(key) {
  const [value, setValue] = useState(() => cache.get(key) || DEFAULTS[key]);
  useEffect(() => {
    let alive = true;
    const fn = (v) => { if (alive) setValue(v); };
    listeners.set(key, [...(listeners.get(key) || []), fn]);
    if (cache.has(key)) setValue(cache.get(key));
    else fetchContent(key).catch(() => {});
    return () => {
      alive = false;
      listeners.set(key, (listeners.get(key) || []).filter((f) => f !== fn));
    };
  }, [key]);
  return value;
}

// Lead capture from the contact form, booking form and the Chitra chat.
export async function submitLead(lead) {
  const sb = getSupabase();
  if (!sb) throw new Error('offline');
  const clean = (v, n) => (v == null ? null : String(v).trim().slice(0, n) || null);
  const row = {
    name: clean(lead.name, 120),
    partner: clean(lead.partner, 120),
    email: clean(lead.email, 200),
    phone: clean(lead.phone, 40),
    service: clean(lead.service, 120),
    event_date: clean(lead.event_date, 120),
    destination: clean(lead.destination, 200),
    package: clean(lead.package, 120),
    budget: clean(lead.budget, 120),
    message: clean(lead.message, 4000),
    source: clean(lead.source, 80) || 'website',
  };
  const { error } = await sb.from('slicex_leads').insert(row);
  if (error) throw error;
  return true;
}
