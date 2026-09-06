// Generates tailwind.config.js by merging the home page theme (twcfg-index.json)
// with the subpage theme (twcfg-about.json). Tokens whose values differ between
// home and subpages are emitted as CSS variables; globals.css sets the subpage
// defaults on :root and the home values on .theme-home.
import fs from 'node:fs';
import path from 'node:path';
import url from 'node:url';

const dir = path.dirname(url.fileURLToPath(import.meta.url));
const home = JSON.parse(fs.readFileSync(path.join(dir, 'twcfg-index.json'), 'utf8'));
const sub = JSON.parse(fs.readFileSync(path.join(dir, 'twcfg-about.json'), 'utf8'));

// Union merge: subpage values as base, home-only tokens added on top.
const merged = {};
for (const sec of new Set([...Object.keys(home), ...Object.keys(sub)])) {
  merged[sec] = { ...(home[sec] || {}), ...(sub[sec] || {}) };
}

// fontFamily: prefer home's variants (they include the generic serif/sans-serif fallback)
for (const [k, v] of Object.entries(home.fontFamily || {})) merged.fontFamily[k] = v;

// Conflicting tokens -> CSS variables
merged.spacing['margin-desktop'] = 'var(--sx-margin-desktop)';
merged.fontSize['display-hero'] = ['var(--sx-display-hero-size)', {
  lineHeight: 'var(--sx-display-hero-lh)', letterSpacing: 'var(--sx-display-hero-ls)', fontWeight: '400',
}];
merged.fontSize['display-hero-mobile'] = ['var(--sx-display-hero-m-size)', {
  lineHeight: 'var(--sx-display-hero-m-lh)', letterSpacing: 'var(--sx-display-hero-m-ls)', fontWeight: '400',
}];
merged.fontSize['headline-lg'] = ['40px', {
  lineHeight: 'var(--sx-headline-lg-lh)', letterSpacing: '-0.01em', fontWeight: '500',
}];
merged.fontSize['headline-lg-mobile'] = ['28px', {
  lineHeight: '36px', letterSpacing: 'var(--sx-headline-lg-m-ls)', fontWeight: '500',
}];
merged.fontSize['headline-md'] = ['28px', {
  lineHeight: '38px', letterSpacing: 'var(--sx-headline-md-ls)', fontWeight: '400',
}];

const config = `/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./app/**/*.{js,jsx}', './components/**/*.{js,jsx}'],
  theme: {
    extend: ${JSON.stringify(merged, null, 2).replace(/\n/g, '\n    ')},
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/container-queries')],
};
`;

fs.writeFileSync(path.join(dir, '..', 'tailwind.config.js'), config);
console.log('tailwind.config.js written');
