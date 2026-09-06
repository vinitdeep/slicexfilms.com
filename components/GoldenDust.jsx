'use client';

import { useEffect, useRef } from 'react';

// Ambient golden dust: fine gold specks that slowly drift upward and twinkle
// inside the hero (absolute inset-0), with a screen blend so it only adds a
// warm shimmer and never darkens text. Moving the cursor pushes nearby specks
// away (scatter) before they ease back to floating. Respects reduced-motion.
const REPEL_RADIUS = 140; // px around the cursor that scatters
const REPEL_FORCE = 5.5; // push strength at the cursor
const RETURN_DAMP = 0.87; // how fast scattered specks settle back
export default function GoldenDust() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Soft golden dot sprite, drawn once and stamped per particle (fast).
    const sprite = document.createElement('canvas');
    const S = 64;
    sprite.width = sprite.height = S;
    const sg = sprite.getContext('2d');
    const grad = sg.createRadialGradient(S / 2, S / 2, 0, S / 2, S / 2, S / 2);
    grad.addColorStop(0, 'rgba(255, 244, 206, 1)');
    grad.addColorStop(0.25, 'rgba(242, 202, 80, 0.75)');
    grad.addColorStop(0.6, 'rgba(212, 175, 55, 0.2)');
    grad.addColorStop(1, 'rgba(212, 175, 55, 0)');
    sg.fillStyle = grad;
    sg.fillRect(0, 0, S, S);

    let width = 0;
    let height = 0;
    let dpr = 1;
    let particles = [];
    // Cursor position in canvas coords; far offscreen until the mouse moves.
    let mx = -9999;
    let my = -9999;

    function makeParticles() {
      const area = width * height;
      const count = Math.min(160, Math.max(50, Math.round(area / 9000)));
      particles = Array.from({ length: count }, () => spawn(true));
    }

    function spawn(anywhere) {
      const size = 0.6 + Math.random() * 2.6;
      return {
        x: Math.random() * width,
        y: anywhere ? Math.random() * height : height + size * 5,
        size,
        vx: 0,
        vy: 0,
        driftX: (Math.random() - 0.5) * 0.18,
        speedY: -(0.08 + Math.random() * 0.28),
        baseAlpha: 0.18 + Math.random() * 0.5,
        phase: Math.random() * Math.PI * 2,
        twinkle: 0.006 + Math.random() * 0.02,
        sway: 0.2 + Math.random() * 0.8,
      };
    }

    function resize() {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      if (!width || !height) return;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      makeParticles();
    }

    let raf = 0;
    function frame() {
      ctx.clearRect(0, 0, width, height);
      for (const p of particles) {
        p.phase += p.twinkle;
        // base float + gentle horizontal sway
        p.y += p.speedY;
        p.x += p.driftX + Math.sin(p.phase) * 0.12 * p.sway;
        // cursor repulsion: push away, stronger the closer to the cursor
        const dx = p.x - mx;
        const dy = p.y - my;
        const dist2 = dx * dx + dy * dy;
        if (dist2 < REPEL_RADIUS * REPEL_RADIUS) {
          const dist = Math.sqrt(dist2) + 0.01;
          const f = 1 - dist / REPEL_RADIUS;
          const push = f * f * REPEL_FORCE;
          p.vx += (dx / dist) * push;
          p.vy += (dy / dist) * push;
        }
        p.x += p.vx;
        p.y += p.vy;
        p.vx *= RETURN_DAMP;
        p.vy *= RETURN_DAMP;
        if (p.y < -p.size * 5 || p.y > height + 40 || p.x < -20 || p.x > width + 20) {
          Object.assign(p, spawn(false));
        }
        const alpha = p.baseAlpha * (0.45 + 0.55 * (0.5 + 0.5 * Math.sin(p.phase)));
        const d = p.size * 5;
        ctx.globalAlpha = alpha;
        ctx.drawImage(sprite, p.x - d / 2, p.y - d / 2, d, d);
      }
      ctx.globalAlpha = 1;
      raf = requestAnimationFrame(frame);
    }

    function drawStatic() {
      ctx.clearRect(0, 0, width, height);
      for (const p of particles) {
        const d = p.size * 5;
        ctx.globalAlpha = p.baseAlpha;
        ctx.drawImage(sprite, p.x - d / 2, p.y - d / 2, d, d);
      }
      ctx.globalAlpha = 1;
    }

    function onResize() {
      resize();
      if (reduce) drawStatic();
    }

    function onPointer(e) {
      const rect = canvas.getBoundingClientRect();
      if (!rect.width || !rect.height) return;
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      if (x < 0 || y < 0 || x > rect.width || y > rect.height) {
        mx = my = -9999; // cursor left the hero -> no scatter
      } else {
        mx = x;
        my = y;
      }
    }

    resize();
    if (reduce) {
      drawStatic();
    } else {
      raf = requestAnimationFrame(frame);
      window.addEventListener('mousemove', onPointer);
    }
    window.addEventListener('resize', onResize);
    const ro = new ResizeObserver(onResize);
    ro.observe(canvas);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('mousemove', onPointer);
      window.removeEventListener('resize', onResize);
      ro.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 h-full w-full z-[5]"
      style={{ mixBlendMode: 'screen' }}
    />
  );
}
