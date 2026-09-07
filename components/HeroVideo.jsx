'use client';

import { useEffect, useRef, useState } from 'react';

// Ambient background video for the home hero, sourced from YouTube.
//
// - Landscape: covers the hero like `background-size: cover` (iframe kept at
//   16:9, sized to the larger dimension, centred).
// - Portrait phones: covering the full height would blow the frame up ~4x and
//   leave a sliver with no faces, so instead the film is scaled only modestly
//   (PORTRAIT_HEIGHT of the hero tall), centred vertically, and its top/bottom
//   edges are feathered into the black so it reads as a band of footage rather
//   than a hard-edged box. `mobileFocusX` (0-100) nudges which part of the
//   frame is centred; 50 = middle.
// - Oversized by OVERSCAN so YouTube's title bar / watermark sit outside the
//   visible area. pointer-events are off so the player is never interactive.
// - Shows the video's own poster frame until playback actually starts (and
//   permanently when the user prefers reduced motion or the embed is blocked).
// - Colour graded to the site's black + gold palette via CSS filters plus a
//   gold soft-light wash, so it sits under the existing gradient overlays
//   without fighting the golden dust or the text.
const OVERSCAN = 1.3; // 130% on landscape — hides YouTube chrome at the top/bottom edges
const PORTRAIT_HEIGHT = 0.55; // phones: video band height as a fraction of the hero
const PORTRAIT_MIN_WIDTH = 1.05; // phones: never narrower than the screen
const PORTRAIT_MASK = 'linear-gradient(to bottom, transparent 0%, #000 22%, #000 78%, transparent 100%)';
const ASPECT = 16 / 9;

let apiPromise = null;
function loadYouTubeApi() {
  if (typeof window === 'undefined') return Promise.resolve(null);
  if (window.YT && window.YT.Player) return Promise.resolve(window.YT);
  if (apiPromise) return apiPromise;
  apiPromise = new Promise((resolve) => {
    const prev = window.onYouTubeIframeAPIReady;
    window.onYouTubeIframeAPIReady = () => {
      if (typeof prev === 'function') prev();
      resolve(window.YT);
    };
    const s = document.createElement('script');
    s.src = 'https://www.youtube.com/iframe_api';
    s.async = true;
    s.onerror = () => resolve(null);
    document.head.appendChild(s);
  });
  return apiPromise;
}

export default function HeroVideo({ videoId, mobileFocusX = 50, start = 0, end }) {
  const wrapRef = useRef(null);
  const frameRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [reduced, setReduced] = useState(false);
  const poster = `https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`;

  // Keep the iframe covering the container at a 16:9 ratio.
  useEffect(() => {
    const wrap = wrapRef.current;
    const frame = frameRef.current;
    if (!wrap || !frame) return;

    const fit = () => {
      // The YouTube API swaps our placeholder div for an iframe, so always
      // size whichever element is currently in the DOM.
      const el = wrap.querySelector('iframe') || frame;
      const w = wrap.clientWidth;
      const h = wrap.clientHeight;
      if (!w || !h) return;
      const portrait = h > w;
      let fw;
      let fh;
      if (portrait) {
        fh = h * PORTRAIT_HEIGHT;
        fw = fh * ASPECT;
        if (fw < w * PORTRAIT_MIN_WIDTH) {
          fw = w * PORTRAIT_MIN_WIDTH;
          fh = fw / ASPECT;
        }
      } else {
        fw = w * OVERSCAN;
        fh = fw / ASPECT;
        if (fh < h * OVERSCAN) {
          fh = h * OVERSCAN;
          fw = fh * ASPECT;
        }
      }
      // Where the visible window sits horizontally inside the frame.
      const focus = portrait ? Math.min(100, Math.max(0, mobileFocusX)) / 100 : 0.5;
      const left = w / 2 - fw * focus;
      const top = (h - fh) / 2;
      el.style.position = 'absolute';
      el.style.width = `${Math.round(fw)}px`;
      el.style.height = `${Math.round(fh)}px`;
      el.style.left = `${Math.round(left)}px`;
      el.style.top = `${Math.round(top)}px`;
      el.style.maskImage = portrait ? PORTRAIT_MASK : '';
      el.style.webkitMaskImage = portrait ? PORTRAIT_MASK : '';
      el.style.pointerEvents = 'none';
      // The band is small and surrounded by black on phones, so let it breathe.
      el.parentElement.style.filter = portrait
        ? 'grayscale(0.4) sepia(0.45) saturate(1.35) brightness(0.72) contrast(1.15)'
        : 'grayscale(0.4) sepia(0.45) saturate(1.35) brightness(0.55) contrast(1.2)';
    };

    fit();
    const ro = new ResizeObserver(fit);
    ro.observe(wrap);
    window.addEventListener('orientationchange', fit);
    return () => {
      ro.disconnect();
      window.removeEventListener('orientationchange', fit);
    };
  }, [mobileFocusX]);

  // Create the player (unless reduced motion is requested).
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mq.matches) {
      setReduced(true);
      return;
    }
    let player = null;
    let cancelled = false;
    loadYouTubeApi().then((YT) => {
      if (cancelled || !YT || !frameRef.current) return;
      player = new YT.Player(frameRef.current, {
        videoId,
        host: 'https://www.youtube-nocookie.com',
        playerVars: {
          autoplay: 1,
          mute: 1,
          controls: 0,
          loop: 1,
          playlist: videoId,
          playsinline: 1,
          rel: 0,
          modestbranding: 1,
          iv_load_policy: 3,
          disablekb: 1,
          fs: 0,
          start,
          ...(end ? { end } : {}),
        },
        events: {
          onReady: (e) => {
            e.target.mute();
            e.target.playVideo();
            window.dispatchEvent(new Event('orientationchange'));
          },
          onStateChange: (e) => {
            if (e.data === YT.PlayerState.PLAYING) setPlaying(true);
            // Manual loop for the start/end window (loop+playlist restarts at 0).
            if (e.data === YT.PlayerState.ENDED) {
              e.target.seekTo(start || 0, true);
              e.target.playVideo();
            }
          },
        },
      });
    });
    return () => {
      cancelled = true;
      try { player && player.destroy && player.destroy(); } catch {}
    };
  }, [videoId, start, end]);

  return (
    <div ref={wrapRef} className="absolute inset-0 overflow-hidden bg-surface-container-lowest" aria-hidden="true">
      {/* Graded video layer */}
      <div
        className="absolute inset-0 transition-opacity duration-[1500ms] ease-out"
        style={{
          opacity: playing ? 1 : 0,
          // Black + gold grade: pull saturation, warm with sepia, crush the
          // shadows so the text and golden dust stay readable.
          filter: 'grayscale(0.4) sepia(0.45) saturate(1.35) brightness(0.55) contrast(1.2)',
        }}
      >
        <div ref={frameRef} className="absolute pointer-events-none select-none" />
      </div>

      {/* Poster shown until playback starts / when motion is reduced */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-opacity duration-[1500ms] ease-out"
        style={{
          backgroundImage: `url('${poster}')`,
          backgroundPosition: `${mobileFocusX}% 50%`,
          opacity: playing && !reduced ? 0 : 1,
          filter: 'grayscale(0.4) sepia(0.45) saturate(1.35) brightness(0.55) contrast(1.2)',
          transform: 'scale(1.05)',
        }}
      />

      {/* Gold wash + vignette so the footage matches the page palette */}
      <div className="absolute inset-0 bg-[#d4af37] mix-blend-soft-light opacity-40" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_35%,_rgba(14,14,14,0.85)_100%)]" />
    </div>
  );
}
