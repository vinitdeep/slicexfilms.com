'use client';

import { useEffect, useState } from 'react';

// Mount once per page. Any element with a data-yt="VIDEO_ID" attribute becomes a
// click-to-play trigger (event delegation), opening the video in a modal player.
export default function VideoLightbox() {
  const [videoId, setVideoId] = useState(null);

  useEffect(() => {
    const onClick = (e) => {
      const trigger = e.target.closest('[data-yt]');
      if (!trigger) return;
      e.preventDefault();
      setVideoId(trigger.getAttribute('data-yt'));
    };
    const onKey = (e) => {
      if (e.key === 'Escape') setVideoId(null);
    };
    document.addEventListener('click', onClick);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('click', onClick);
      document.removeEventListener('keydown', onKey);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = videoId ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [videoId]);

  if (!videoId) return null;

  return (
    <div
      onClick={() => setVideoId(null)}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-surface-container-lowest/95 backdrop-blur-md p-space-md animate-[fadeIn_0.2s_ease-out]"
      role="dialog"
      aria-modal="true"
    >
      <button
        aria-label="Close video"
        onClick={() => setVideoId(null)}
        className="absolute top-space-md right-space-md w-11 h-11 rounded-full bg-surface-container-high/80 text-on-surface hover:text-primary hover:bg-surface-container-high transition-colors flex items-center justify-center"
      >
        <span className="material-symbols-outlined text-[24px]">close</span>
      </button>
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-5xl aspect-video rounded-lg overflow-hidden shadow-[0_0_60px_rgba(0,0,0,0.7)] ring-1 ring-primary-container/30"
      >
        <iframe
          className="w-full h-full"
          src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`}
          title="SliceX Films"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
    </div>
  );
}
