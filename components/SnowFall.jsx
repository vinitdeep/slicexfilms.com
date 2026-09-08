'use client';

import { useEffect, useRef } from 'react';

// Ambient snowfall: soft white flakes that drift downward and sway inside the
// hero (absolute inset-0), with a screen blend so they only add light and
// never darken text. Moving the cursor pushes nearby flakes away (scatter)
// before they ease back to falling. Respects reduced-motion.
const REPEL_RADIUS = 140; // px around the cursor that scatters
const REPEL_FORCE = 5.5; // push strength at the cursor
const RETURN_DAMP = 0.87; // how fast scattered flakes settle back
export default function SnowFall() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Two sprites drawn once and stamped per flake (fast):
    // a soft round glow for small distant flakes, and a six-armed crystal
    // for the larger foreground ones.
    const S = 64;
    const soft = document.createElement('canvas');
    soft.width = soft.height = S;
    const sg = soft.getContext('2d');
    const grad = sg.createRadialGradient(S / 2, S / 2, 0, S / 2, S / 2, S / 2);
    grad.addColorStop(0, 'rgba(255,255,255,1)');
    grad.addColorStop(0.3, 'rgba(255,255,255,0.85)');
    grad.addColorStop(0.65, 'rgba(255,255,255,0.18)');
    grad.addColorStop(1, 'rgba(255,255,255,0)');
    sg.fillStyle = grad;
    sg.fillRect(0, 0, S, S);

    const crystal = document.createElement('canvas');
    crystal.width = crystal.height = S;
    const cg = crystal.getContext('2d');
    cg.translate(S / 2, S / 2);
    cg.strokeStyle = 'rgba(255,255,255,0.95)';
    cg.lineCap = 'round';
    cg.lineWidth = 2.2;
    cg.shadowColor = 'rgba(255,255,255,0.9)';
    cg.shadowBlur = 6;
    const arm = S * 0.42;
    for (let i = 0; i < 6; i++) {
      cg.beginPath();
      cg.moveTo(0, 0);
      cg.lineTo(0, -arm);
      // small side branches on each arm
      cg.moveTo(0, -arm * 0.55);
      cg.lineTo(arm * 0.22, -arm * 0.75);
      cg.moveTo(0, -arm * 0.55);
      cg.lineTo(-arm * 0.22, -arm * 0.75);
      cg.stroke();
      cg.rotate(Math.PI / 3);
    }

    let width = 0;
    let height = 0;
    let dpr = 1;
    let particles = [];
    // Cursor position in canvas coords; far offscreen until the mouse moves.
    let mx = -9999;
    let my = -9999;

    function makeParticles() {
      const area = width * height;
      const count = Math.min(170, Math.max(60, Math.round(area / 8500)));
      particles = Array.from({ length: count }, () => spawn(true));
    }

    function spawn(anywhere) {
      const size = 0.7 + Math.random() * 2.8;
      return {
        x: Math.random() * width,
        y: anywhere ? Math.random() * height : -size * 6,
        size,
        crystal: size > 2.6 && Math.random() < 0.6,
        vx: 0,
        vy: 0,
        driftX: (Math.random() - 0.5) * 0.22,
        speedY: 0.18 + Math.random() * 0.45 + size * 0.08, // bigger falls faster
        baseAlpha: 0.25 + Math.random() * 0.55,
        phase: Math.random() * Math.PI * 2,
        twinkle: 0.005 + Math.random() * 0.016,
        sway: 0.3 + Math.random() * 0.9,
        rot: Math.random() * Math.PI * 2,
        spin: (Math.random() - 0.5) * 0.02,
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

    function stamp(p, alpha) {
      const d = p.size * 5;
      ctx.globalAlpha = alpha;
      if (p.crystal) {
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rot);
        ctx.drawImage(crystal, -d / 2, -d / 2, d, d);
        ctx.restore();
      } else {
        ctx.drawImage(soft, p.x - d / 2, p.y - d / 2, d, d);
      }
    }

    let raf = 0;
    function frame() {
      ctx.clearRect(0, 0, width, height);
      for (const p of particles) {
        p.phase += p.twinkle;
        p.rot += p.spin;
        // base fall + gentle horizontal sway
        p.y += p.speedY;
        p.x += p.driftX + Math.sin(p.phase) * 0.14 * p.sway;
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
        if (p.y > height + p.size * 6 || p.y < -60 || p.x < -20 || p.x > width + 20) {
          Object.assign(p, spawn(false));
        }
        const alpha = p.baseAlpha * (0.6 + 0.4 * (0.5 + 0.5 * Math.sin(p.phase)));
        stamp(p, alpha);
      }
      ctx.globalAlpha = 1;
      raf = requestAnimationFrame(frame);
    }

    function drawStatic() {
      ctx.clearRect(0, 0, width, height);
      for (const p of particles) stamp(p, p.baseAlpha);
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
