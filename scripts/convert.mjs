// Converts the static slicexfilms HTML pages into Next.js page components.
// Reads ../slicexfilms/*.html, extracts <main> content + <footer>, and emits JSX.
import fs from 'node:fs';
import path from 'node:path';
import url from 'node:url';
import { parse } from 'node-html-parser';

const dir = path.dirname(url.fileURLToPath(import.meta.url));
const SRC = path.join(dir, '..', '..', 'slicexfilms');
const APP = path.join(dir, '..', 'app');

const PAGES = [
  { file: 'index', route: '(home)', name: 'HomePage', client: false },
  { file: 'about', route: '(site)/about', name: 'AboutPage', client: false },
  { file: 'services', route: '(site)/services', name: 'ServicesPage', client: false },
  { file: 'portfolio', route: '(site)/portfolio', name: 'PortfolioPage', client: true },
  { file: 'films', route: '(site)/films', name: 'FilmsPage', client: true },
  { file: 'contact', route: '(site)/contact', name: 'ContactPage', client: true },
  { file: 'book-your-date', route: '(site)/book-your-date', name: 'BookYourDatePage', client: true },
];

const HREF_MAP = {
  'index.html': '/', 'about.html': '/about', 'services.html': '/services',
  'portfolio.html': '/portfolio', 'films.html': '/films',
  'book-your-date.html': '/book-your-date', 'contact.html': '/contact',
};

const ATTR_MAP = {
  class: 'className', for: 'htmlFor', tabindex: 'tabIndex', maxlength: 'maxLength',
  minlength: 'minLength', autocomplete: 'autoComplete', readonly: 'readOnly',
  srcset: 'srcSet', crossorigin: 'crossOrigin', frameborder: 'frameBorder',
  allowfullscreen: 'allowFullScreen', spellcheck: 'spellCheck', autofocus: 'autoFocus',
  enctype: 'encType', novalidate: 'noValidate', cellpadding: 'cellPadding',
  cellspacing: 'cellSpacing', colspan: 'colSpan', rowspan: 'rowSpan',
  contenteditable: 'contentEditable', datetime: 'dateTime', autoplay: 'autoPlay',
  playsinline: 'playsInline', srclang: 'srcLang', usemap: 'useMap',
  // SVG
  viewbox: 'viewBox', 'stroke-width': 'strokeWidth', 'stroke-linecap': 'strokeLinecap',
  'stroke-linejoin': 'strokeLinejoin', 'stroke-dasharray': 'strokeDasharray',
  'stroke-dashoffset': 'strokeDashoffset', 'stroke-miterlimit': 'strokeMiterlimit',
  'fill-rule': 'fillRule', 'clip-rule': 'clipRule', 'clip-path': 'clipPath',
  'stop-color': 'stopColor', 'stop-opacity': 'stopOpacity',
  'fill-opacity': 'fillOpacity', 'stroke-opacity': 'strokeOpacity',
  'xlink:href': 'xlinkHref', 'xmlns:xlink': 'xmlnsXlink',
  'text-anchor': 'textAnchor', 'dominant-baseline': 'dominantBaseline',
  'font-size': 'fontSize', 'font-family': 'fontFamily',
  'gradientunits': 'gradientUnits', 'gradienttransform': 'gradientTransform',
  'patternunits': 'patternUnits', 'preserveaspectratio': 'preserveAspectRatio',
};

const VOID_TAGS = new Set(['img', 'br', 'hr', 'input', 'meta', 'link', 'source', 'track', 'wbr', 'area', 'base', 'col', 'embed']);
const BOOL_ATTRS = new Set(['disabled', 'checked', 'required', 'hidden', 'selected', 'multiple', 'muted', 'loop', 'controls', 'autoPlay', 'playsInline', 'readOnly', 'noValidate', 'autoFocus']);

function cssToObj(style) {
  const obj = [];
  for (const decl of style.split(';')) {
    const i = decl.indexOf(':');
    if (i < 0) continue;
    const prop = decl.slice(0, i).trim();
    const val = decl.slice(i + 1).trim();
    if (!prop) continue;
    const key = prop.startsWith('--') ? `'${prop}'` : prop.replace(/-([a-z])/g, (_, c) => c.toUpperCase());
    obj.push(`${key}: ${JSON.stringify(val)}`);
  }
  return `{{ ${obj.join(', ')} }}`;
}

function mapHref(val) {
  // strip leading ./ and map page files to routes; assets/ to /assets/
  const clean = val.replace(/^\.\//, '');
  const [pathPart, hash] = clean.split('#');
  if (pathPart in HREF_MAP) return HREF_MAP[pathPart] + (hash ? '#' + hash : '');
  if (pathPart === '' && hash) return '#' + hash;
  if (clean.startsWith('assets/')) return '/' + clean;
  return val;
}

function escText(t) {
  return t.replace(/{/g, "{'{'}").replace(/}/g, "{'}'}");
}

function escTemplate(s) {
  return s.replace(/\\/g, '\\\\').replace(/`/g, '\\`').replace(/\$\{/g, '\\${');
}

const onclickHandlers = [];

function attrsToJsx(el) {
  const parts = [];
  for (const [rawName, rawVal] of Object.entries(el.attributes)) {
    const lower = rawName.toLowerCase();
    if (lower === 'style') { parts.push(`style=${cssToObj(rawVal)}`); continue; }
    if (lower === 'onclick' || lower === 'onsubmit') {
      const jsxName = lower === 'onclick' ? 'onClick' : 'onSubmit';
      const code = rawVal.trim().replace(/^javascript:/, '')
        .replace(/\bthis\b/g, 'e.currentTarget')
        .replace(/\bevent\b/g, 'e');
      onclickHandlers.push(code);
      parts.push(`${jsxName}={(e) => { ${code.replace(/;\s*$/, '')}; }}`);
      continue;
    }
    // React wants defaultChecked for uncontrolled inputs
    if (lower === 'checked') { parts.push('defaultChecked'); continue; }
    let name = ATTR_MAP[lower] || rawName;
    if (lower.startsWith('data-') || lower.startsWith('aria-')) name = lower;
    let val = rawVal;
    if (name === 'href' || name === 'src') val = mapHref(val);
    if (BOOL_ATTRS.has(name) && (val === '' || val === name.toLowerCase())) { parts.push(name); continue; }
    if (val === '') { parts.push(`${name}=""`); continue; }
    if (val.includes('"')) parts.push(`${name}={${JSON.stringify(val)}}`);
    else parts.push(`${name}="${val}"`);
  }
  return parts.length ? ' ' + parts.join(' ') : '';
}

function hasTextContent(el) {
  return el.childNodes.some((n) => n.nodeType === 3 && n.rawText.trim() !== '');
}

function serialize(node, indent, inline) {
  const pad = inline ? '' : '  '.repeat(indent);
  if (node.nodeType === 3) {
    const t = node.rawText;
    if (!inline && t.trim() === '') return '';
    return pad + escText(inline ? t : t.trim());
  }
  if (node.nodeType === 8) return ''; // comment
  const tag = node.rawTagName;
  if (!tag) {
    // root: serialize children
    return node.childNodes.map((c) => serialize(c, indent, false)).filter(Boolean).join('\n');
  }
  if (tag === 'script') return ''; // handled separately
  if (tag === 'style') {
    return `${pad}<style dangerouslySetInnerHTML={{ __html: \`${escTemplate(node.rawText)}\` }} />`;
  }
  const attrs = attrsToJsx(node);
  if (VOID_TAGS.has(tag)) return `${pad}<${tag}${attrs} />`;
  const kids = node.childNodes;
  if (kids.length === 0) return `${pad}<${tag}${attrs}></${tag}>`;
  if (inline || hasTextContent(node)) {
    const inner = kids.map((c) => serialize(c, 0, true)).join('');
    return `${pad}<${tag}${attrs}>${inner}</${tag}>`;
  }
  const inner = kids.map((c) => serialize(c, indent + 1, false)).filter(Boolean).join('\n');
  if (inner === '') return `${pad}<${tag}${attrs}></${tag}>`;
  return `${pad}<${tag}${attrs}>\n${inner}\n${pad}</${tag}>`;
}

for (const page of PAGES) {
  onclickHandlers.length = 0;
  const html = fs.readFileSync(path.join(SRC, page.file + '.html'), 'utf8');
  const root = parse(html);
  const title = root.querySelector('title')?.rawText?.trim() || 'SliceX Films';
  const main = root.querySelector('main');
  const footer = root.querySelector('footer');

  // main's inner content (the frame provides <main> itself)
  const mainInner = main.childNodes.map((c) => serialize(c, 2, false)).filter(Boolean).join('\n');
  const footerJsx = footer ? serialize(footer, 2, false) : '';

  const body = [mainInner, footerJsx].filter(Boolean).join('\n');

  const lines = [];
  if (page.client) lines.push("'use client';", '');
  if (!page.client) {
    lines.push(`export const metadata = { title: ${JSON.stringify(title)} };`, '');
  }
  lines.push(`export default function ${page.name}() {`);
  lines.push('  return (');
  lines.push('    <>');
  lines.push(body);
  lines.push('    </>');
  lines.push('  );');
  lines.push('}');

  const outDir = path.join(APP, ...page.route.split('/'));
  fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(path.join(outDir, 'page.jsx'), lines.join('\n') + '\n');
  console.log(`${page.file} -> ${page.route}/page.jsx (${body.length} chars, title: ${title}${onclickHandlers.length ? ', onclick refs: ' + onclickHandlers.length : ''})`);
}
