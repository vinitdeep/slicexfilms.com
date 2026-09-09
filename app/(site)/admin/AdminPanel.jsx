'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import { getSupabase, MEDIA_BUCKET, mediaUrl } from '../../../lib/supabase';
import { DEFAULTS, fetchAllContent, saveContent, resetContent } from '../../../lib/content';
import { withBase } from '../../../lib/basePath';

// ============================================================
// SliceX Studio Admin — leads, packages, services, gallery, contact.
// Sign-in is Supabase email + password; only emails in slicex_admins can
// read leads or save content (enforced by row-level security, not just UI).
// ============================================================

const TABS = [
  { key: 'leads', label: 'Leads', icon: 'inbox' },
  { key: 'packages', label: 'Packages', icon: 'sell' },
  { key: 'services', label: 'Services', icon: 'movie_filter' },
  { key: 'portfolio', label: 'Portfolio', icon: 'collections_bookmark' },
  { key: 'gallery', label: 'Gallery', icon: 'photo_library' },
  { key: 'contact', label: 'Contact', icon: 'contact_phone' },
];
const LEAD_STATUS = ['new', 'contacted', 'quoted', 'booked', 'closed'];

const cls = {
  input: 'w-full bg-surface-container-lowest border border-primary-container/20 focus:border-primary rounded px-space-sm py-space-xs text-on-surface font-body-md text-body-md placeholder:text-outline-variant focus:outline-none',
  label: 'font-label-sm text-label-sm uppercase tracking-widest text-outline block mb-1',
  btn: 'inline-flex items-center gap-space-2xs px-space-md py-space-xs rounded-full font-label-sm text-label-sm uppercase tracking-widest transition-colors',
  btnGold: 'bg-primary text-on-primary hover:bg-primary-fixed',
  btnGhost: 'border border-primary-container/30 text-on-surface-variant hover:text-primary hover:border-primary/60',
  btnDanger: 'border border-error/40 text-error hover:bg-error/10',
  card: 'bg-surface-container-low border border-primary-container/15 rounded-xl p-space-md',
};

const ytId = (s) => {
  const v = String(s || '').trim();
  const m = v.match(/(?:v=|\/shorts\/|youtu\.be\/|\/embed\/)([A-Za-z0-9_-]{6,})/);
  return m ? m[1] : v.replace(/[^A-Za-z0-9_-]/g, '');
};

function Field({ label, value, onChange, textarea, placeholder, type = 'text', hint }) {
  return (
    <label className="block">
      <span className={cls.label}>{label}</span>
      {textarea ? (
        <textarea className={cls.input + ' min-h-[80px]'} value={value || ''} placeholder={placeholder} onChange={(e) => onChange(e.target.value)} />
      ) : (
        <input className={cls.input} type={type} value={value || ''} placeholder={placeholder} onChange={(e) => onChange(e.target.value)} />
      )}
      {hint && <span className="font-body-sm text-body-sm text-outline block mt-1">{hint}</span>}
    </label>
  );
}

function Toast({ msg }) {
  if (!msg) return null;
  return <div className={`fixed bottom-6 left-1/2 -translate-x-1/2 z-[200] px-space-md py-space-xs rounded-full font-label-sm text-label-sm uppercase tracking-widest shadow-xl ${msg.error ? 'bg-error text-on-error' : 'bg-primary text-on-primary'}`}>{msg.text}</div>;
}

// ── Image upload to Supabase Storage ──────────────────────────
function UploadButton({ onDone, label = 'Upload image' }) {
  const ref = useRef(null);
  const [busy, setBusy] = useState(false);
  const pick = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setBusy(true);
    try {
      const sb = getSupabase();
      const ext = (file.name.split('.').pop() || 'jpg').toLowerCase().replace(/[^a-z0-9]/g, '');
      const path = `gallery/${Date.now()}-${Math.random().toString(36).slice(2, 8)}.${ext}`;
      const { error } = await sb.storage.from(MEDIA_BUCKET).upload(path, file, { cacheControl: '31536000', upsert: false, contentType: file.type });
      if (error) throw error;
      onDone(mediaUrl(path));
    } catch (err) {
      alert('Upload failed: ' + (err.message || err));
    } finally {
      setBusy(false);
      if (ref.current) ref.current.value = '';
    }
  };
  return (
    <>
      <input ref={ref} type="file" accept="image/*" className="hidden" onChange={pick} />
      <button type="button" disabled={busy} onClick={() => ref.current?.click()} className={`${cls.btn} ${cls.btnGhost}`}>
        <span className="material-symbols-outlined text-[16px]">{busy ? 'hourglass_top' : 'upload'}</span>{busy ? 'Uploading…' : label}
      </button>
    </>
  );
}

// ── Login ─────────────────────────────────────────────────────
function Login({ onSignedIn }) {
  const [mode, setMode] = useState('login'); // login | signup | reset
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [busy, setBusy] = useState(false);
  const [msg, setMsg] = useState('');
  const submit = async (e) => {
    e.preventDefault();
    setBusy(true); setMsg('');
    const sb = getSupabase();
    try {
      if (mode === 'login') {
        const { error } = await sb.auth.signInWithPassword({ email, password });
        if (error) throw error;
        onSignedIn();
      } else if (mode === 'signup') {
        const { data, error } = await sb.auth.signUp({ email, password, options: { emailRedirectTo: window.location.href } });
        if (error) throw error;
        setMsg(data.session ? 'Account created — signing you in…' : 'Account created. Check your inbox for the confirmation email, then sign in.');
        if (data.session) onSignedIn();
      } else {
        const { error } = await sb.auth.resetPasswordForEmail(email, { redirectTo: window.location.href });
        if (error) throw error;
        setMsg('Password reset email sent.');
      }
    } catch (err) {
      setMsg(err.message || String(err));
    } finally { setBusy(false); }
  };
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-margin-mobile">
      <form onSubmit={submit} className="w-full max-w-md bg-surface-container-low border border-primary-container/20 rounded-2xl p-space-xl shadow-2xl flex flex-col gap-space-md">
        <div>
          <span className="font-label-sm text-label-sm uppercase tracking-[0.28em] text-primary">Studio Admin</span>
          <h1 className="font-headline-lg text-headline-lg text-on-surface mt-space-2xs">{mode === 'login' ? 'Sign in' : mode === 'signup' ? 'Create admin account' : 'Reset password'}</h1>
          <p className="font-body-sm text-body-sm text-outline mt-1">Access is limited to approved studio email addresses.</p>
        </div>
        <Field label="Email" type="email" value={email} onChange={setEmail} placeholder="you@slicexfilms.com" />
        {mode !== 'reset' && <Field label="Password" type="password" value={password} onChange={setPassword} placeholder="••••••••" />}
        {msg && <p className="font-body-sm text-body-sm text-primary">{msg}</p>}
        <button type="submit" disabled={busy} className={`${cls.btn} ${cls.btnGold} justify-center py-space-sm`}>
          {busy ? 'Please wait…' : mode === 'login' ? 'Sign in' : mode === 'signup' ? 'Create account' : 'Send reset link'}
        </button>
        <div className="flex items-center justify-between font-label-sm text-label-sm uppercase tracking-widest text-outline">
          {mode !== 'login' ? <button type="button" className="hover:text-primary" onClick={() => setMode('login')}>Back to sign in</button> : <button type="button" className="hover:text-primary" onClick={() => setMode('signup')}>First time? Create account</button>}
          {mode === 'login' && <button type="button" className="hover:text-primary" onClick={() => setMode('reset')}>Forgot password</button>}
        </div>
      </form>
    </div>
  );
}

// ── Leads ─────────────────────────────────────────────────────
function LeadsTab({ toast }) {
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [q, setQ] = useState('');
  const [status, setStatus] = useState('all');
  const load = async () => {
    setLoading(true);
    const sb = getSupabase();
    const { data, error } = await sb.from('slicex_leads').select('*').order('created_at', { ascending: false }).limit(500);
    if (error) toast(error.message, true); else setRows(data || []);
    setLoading(false);
  };
  useEffect(() => { load(); }, []);
  const update = async (id, patch) => {
    const sb = getSupabase();
    const { error } = await sb.from('slicex_leads').update(patch).eq('id', id);
    if (error) return toast(error.message, true);
    setRows((r) => r.map((x) => (x.id === id ? { ...x, ...patch } : x)));
  };
  const remove = async (id) => {
    if (!confirm('Delete this lead permanently?')) return;
    const sb = getSupabase();
    const { error } = await sb.from('slicex_leads').delete().eq('id', id);
    if (error) return toast(error.message, true);
    setRows((r) => r.filter((x) => x.id !== id));
  };
  const exportCsv = () => {
    const cols = ['created_at', 'name', 'partner', 'email', 'phone', 'service', 'event_date', 'destination', 'package', 'budget', 'message', 'source', 'status', 'notes'];
    const esc = (v) => `"${String(v ?? '').replace(/"/g, '""')}"`;
    const csv = [cols.join(','), ...filtered.map((r) => cols.map((c) => esc(r[c])).join(','))].join('\n');
    const a = document.createElement('a');
    a.href = URL.createObjectURL(new Blob([csv], { type: 'text/csv' }));
    a.download = `slicex-leads-${new Date().toISOString().slice(0, 10)}.csv`;
    a.click();
  };
  const filtered = useMemo(() => rows.filter((r) => (status === 'all' || r.status === status) && (!q || JSON.stringify(r).toLowerCase().includes(q.toLowerCase()))), [rows, q, status]);
  const counts = useMemo(() => LEAD_STATUS.reduce((a, s) => ({ ...a, [s]: rows.filter((r) => r.status === s).length }), {}), [rows]);
  return (
    <div className="flex flex-col gap-space-md">
      <div className="flex flex-wrap items-center gap-space-sm">
        <input className={cls.input + ' max-w-xs'} placeholder="Search name, phone, email, venue…" value={q} onChange={(e) => setQ(e.target.value)} />
        <div className="flex flex-wrap gap-space-2xs">
          {['all', ...LEAD_STATUS].map((s) => (
            <button key={s} type="button" onClick={() => setStatus(s)} className={`${cls.btn} ${status === s ? cls.btnGold : cls.btnGhost}`}>{s}{s !== 'all' && <span className="opacity-70">{counts[s] || 0}</span>}</button>
          ))}
        </div>
        <div className="ml-auto flex gap-space-2xs">
          <button type="button" onClick={load} className={`${cls.btn} ${cls.btnGhost}`}><span className="material-symbols-outlined text-[16px]">refresh</span>Refresh</button>
          <button type="button" onClick={exportCsv} className={`${cls.btn} ${cls.btnGhost}`}><span className="material-symbols-outlined text-[16px]">download</span>CSV</button>
        </div>
      </div>
      {loading ? <p className="text-outline font-body-sm">Loading leads…</p> : filtered.length === 0 ? (
        <div className={cls.card + ' text-center text-outline font-body-md py-space-xl'}>No leads yet. Inquiries from the Contact form, the booking form and the Chitra chat will appear here.</div>
      ) : (
        <div className="flex flex-col gap-space-sm">
          {filtered.map((r) => (
            <div key={r.id} className={cls.card + ' grid grid-cols-1 lg:grid-cols-12 gap-space-sm'}>
              <div className="lg:col-span-3">
                <p className="font-headline-sm text-headline-sm text-on-surface">{r.name || '—'}{r.partner ? ` & ${r.partner}` : ''}</p>
                <p className="font-body-sm text-body-sm text-outline">{new Date(r.created_at).toLocaleString('en-IN')}</p>
                <span className="inline-block mt-1 px-2 py-0.5 rounded bg-surface-container-high font-metadata-dense text-[10px] uppercase tracking-widest text-secondary">{r.source || 'website'}</span>
              </div>
              <div className="lg:col-span-3 font-body-sm text-body-sm text-on-surface-variant flex flex-col gap-0.5">
                {r.phone && <a className="text-primary hover:underline" href={`https://wa.me/${String(r.phone).replace(/\D/g, '')}`} target="_blank" rel="noopener">📱 {r.phone}</a>}
                {r.email && <a className="hover:text-primary" href={`mailto:${r.email}`}>✉️ {r.email}</a>}
                {r.service && <span>🎬 {r.service}</span>}
                {r.event_date && <span>📅 {r.event_date}</span>}
                {r.destination && <span>📍 {r.destination}</span>}
                {(r.package || r.budget) && <span>💰 {[r.package, r.budget].filter(Boolean).join(' · ')}</span>}
              </div>
              <div className="lg:col-span-4 font-body-sm text-body-sm text-on-surface-variant">
                {r.message && <p className="whitespace-pre-wrap mb-space-2xs">{r.message}</p>}
                <textarea className={cls.input + ' min-h-[48px]'} placeholder="Internal notes…" defaultValue={r.notes || ''} onBlur={(e) => e.target.value !== (r.notes || '') && update(r.id, { notes: e.target.value })} />
              </div>
              <div className="lg:col-span-2 flex lg:flex-col items-start gap-space-2xs">
                <select className={cls.input} value={r.status} onChange={(e) => update(r.id, { status: e.target.value })}>
                  {LEAD_STATUS.map((s) => <option key={s} value={s}>{s}</option>)}
                </select>
                <button type="button" onClick={() => remove(r.id)} className={`${cls.btn} ${cls.btnDanger}`}><span className="material-symbols-outlined text-[16px]">delete</span></button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// ── Generic list editor helpers ───────────────────────────────
function ListControls({ i, n, onMove, onRemove }) {
  return (
    <div className="flex gap-1">
      <button type="button" disabled={i === 0} onClick={() => onMove(i, -1)} className={`${cls.btn} ${cls.btnGhost} px-2 disabled:opacity-30`} title="Move up"><span className="material-symbols-outlined text-[16px]">arrow_upward</span></button>
      <button type="button" disabled={i === n - 1} onClick={() => onMove(i, 1)} className={`${cls.btn} ${cls.btnGhost} px-2 disabled:opacity-30`} title="Move down"><span className="material-symbols-outlined text-[16px]">arrow_downward</span></button>
      <button type="button" onClick={() => onRemove(i)} className={`${cls.btn} ${cls.btnDanger} px-2`} title="Remove"><span className="material-symbols-outlined text-[16px]">delete</span></button>
    </div>
  );
}
const moveItem = (arr, i, d) => { const a = [...arr]; const j = i + d; if (j < 0 || j >= a.length) return a; [a[i], a[j]] = [a[j], a[i]]; return a; };

function SaveBar({ dirty, saving, onSave, onReset, updated }) {
  return (
    <div className="sticky bottom-4 z-20 flex flex-wrap items-center gap-space-sm bg-surface-container/95 backdrop-blur border border-primary-container/30 rounded-full px-space-md py-space-xs shadow-2xl self-start">
      <button type="button" disabled={!dirty || saving} onClick={onSave} className={`${cls.btn} ${cls.btnGold} disabled:opacity-40`}><span className="material-symbols-outlined text-[16px]">save</span>{saving ? 'Saving…' : 'Save changes'}</button>
      <button type="button" onClick={onReset} className={`${cls.btn} ${cls.btnGhost}`}><span className="material-symbols-outlined text-[16px]">restart_alt</span>Reset to defaults</button>
      <span className="font-label-sm text-label-sm text-outline uppercase tracking-widest">{dirty ? 'Unsaved changes' : updated ? 'Saved edits are live on the site' : 'Using built-in defaults'}</span>
    </div>
  );
}

// ── Packages ──────────────────────────────────────────────────
function PackagesTab({ value, onChange }) {
  const items = value.items || [];
  const set = (i, patch) => onChange({ ...value, items: items.map((p, j) => (j === i ? { ...p, ...patch } : p)) });
  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 gap-space-md">
      {items.map((p, i) => (
        <div key={i} className={cls.card + ' flex flex-col gap-space-sm'}>
          <div className="flex items-center justify-between">
            <span className="font-label-sm text-label-sm uppercase tracking-widest text-primary">Package {i + 1}</span>
            <ListControls i={i} n={items.length} onMove={(a, d) => onChange({ ...value, items: moveItem(items, a, d) })} onRemove={(a) => onChange({ ...value, items: items.filter((_, j) => j !== a) })} />
          </div>
          <div className="grid grid-cols-2 gap-space-sm">
            <Field label="Label" value={p.label} onChange={(v) => set(i, { label: v })} placeholder="OPTION 01" />
            <label className="flex items-center gap-space-2xs mt-6 font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant"><input type="checkbox" className="accent-primary" checked={!!p.popular} onChange={(e) => set(i, { popular: e.target.checked })} /> Most popular</label>
          </div>
          <Field label="Name" value={p.name} onChange={(v) => set(i, { name: v })} placeholder="SINGLE SIDE WEDDING" />
          <div className="grid grid-cols-2 gap-space-sm">
            <Field label="Price" value={p.price} onChange={(v) => set(i, { price: v })} placeholder="₹1,10,000" />
            <Field label="Price note" value={p.priceNote} onChange={(v) => set(i, { priceNote: v })} placeholder="STARTING COMMISSION" />
          </div>
          <Field label="Inclusions (one per line)" textarea value={(p.features || []).join('\n')} onChange={(v) => set(i, { features: v.split('\n').map((s) => s.trim()).filter(Boolean) })} />
        </div>
      ))}
      <button type="button" onClick={() => onChange({ ...value, items: [...items, { id: `pkg-${Date.now()}`, label: `OPTION ${String(items.length + 1).padStart(2, '0')}`, name: 'NEW PACKAGE', price: '₹', priceNote: '', popular: false, features: [] }] })} className={`${cls.btn} ${cls.btnGhost} self-start`}><span className="material-symbols-outlined text-[16px]">add</span>Add package</button>
    </div>
  );
}

// ── Services ──────────────────────────────────────────────────
function ServicesTab({ value, onChange }) {
  const items = value.items || [];
  const set = (i, patch) => onChange({ ...value, items: items.map((p, j) => (j === i ? { ...p, ...patch } : p)) });
  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 gap-space-md">
      {items.map((s, i) => (
        <div key={i} className={cls.card + ' flex flex-col gap-space-sm'}>
          <div className="flex items-center justify-between">
            <span className="font-label-sm text-label-sm uppercase tracking-widest text-primary">Service {i + 1}</span>
            <ListControls i={i} n={items.length} onMove={(a, d) => onChange({ ...value, items: moveItem(items, a, d) })} onRemove={(a) => onChange({ ...value, items: items.filter((_, j) => j !== a) })} />
          </div>
          <div className="flex gap-space-sm">
            <img src={/^https?:/.test(s.image || '') ? s.image : withBase(s.image || '')} alt="" className="w-24 h-24 object-cover rounded border border-primary-container/20 bg-surface-container-lowest" />
            <div className="flex-1 flex flex-col gap-space-2xs">
              <Field label="Image URL or /assets/… path" value={s.image} onChange={(v) => set(i, { image: v })} />
              <UploadButton onDone={(url) => set(i, { image: url })} />
            </div>
          </div>
          <Field label="Title" value={s.title} onChange={(v) => set(i, { title: v })} />
          <Field label="Description" textarea value={s.desc} onChange={(v) => set(i, { desc: v })} />
          <div className="grid grid-cols-2 gap-space-sm">
            <Field label="Tag (highlighted)" value={s.tag1} onChange={(v) => set(i, { tag1: v })} />
            <Field label="Tag (secondary)" value={s.tag2} onChange={(v) => set(i, { tag2: v })} />
          </div>
        </div>
      ))}
      <button type="button" onClick={() => onChange({ ...value, items: [...items, { id: `svc-${Date.now()}`, title: 'NEW SERVICE', desc: '', tag1: '', tag2: '', image: '/assets/service-wedding-films.jpg' }] })} className={`${cls.btn} ${cls.btnGhost} self-start`}><span className="material-symbols-outlined text-[16px]">add</span>Add service</button>
    </div>
  );
}

// ── Portfolio ─────────────────────────────────────────────────
const LAYOUTS = [
  ['standard', 'Standard — image over caption'],
  ['feature', 'Feature — wide, image + side panel'],
  ['split', 'Split — copy beside image'],
];
const SPANS = [['12', 'Full width'], ['7', 'Two thirds'], ['6', 'Half'], ['5', 'Narrow']];
const ASPECTS = [['16/10', 'Landscape 16:10'], ['16/9', 'Widescreen 16:9'], ['4/5', 'Portrait 4:5']];

function PortfolioTab({ value, onChange }) {
  const items = value.items || [];
  const categories = value.categories || [];
  const set = (i, patch) => onChange({ ...value, items: items.map((p, j) => (j === i ? { ...p, ...patch } : p)) });
  const toggleCat = (i, key) => {
    const cur = (items[i].categories || '').split(' ').filter(Boolean);
    const next = cur.includes(key) ? cur.filter((c) => c !== key) : [...cur, key];
    set(i, { categories: next.join(' ') });
  };
  const add = () => onChange({
    ...value,
    items: [...items, { id: `pf-${Date.now()}`, layout: 'standard', span: '6', aspect: '16/10', categories: '', youtubeId: '', image: '', eyebrow: '', note: '', tags: [], title: 'NEW PROJECT', desc: '', metaLeft: '', metaRight: '' }],
  });

  return (
    <div className="flex flex-col gap-space-md">
      <p className="font-body-sm text-body-sm text-outline">
        Cards on the Portfolio page. Categories drive the filter buttons and their counts. Add a YouTube link to make a card click-to-play.
      </p>
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-space-md">
        {items.map((p, i) => (
          <div key={i} className={cls.card + ' flex flex-col gap-space-sm'}>
            <div className="flex items-center justify-between">
              <span className="font-label-sm text-label-sm uppercase tracking-widest text-primary">Project {i + 1}</span>
              <ListControls i={i} n={items.length} onMove={(a, d) => onChange({ ...value, items: moveItem(items, a, d) })} onRemove={(a) => onChange({ ...value, items: items.filter((_, j) => j !== a) })} />
            </div>
            <div className="flex gap-space-sm">
              <img src={p.image ? (/^https?:/.test(p.image) ? p.image : withBase(p.image)) : ''} alt="" className="w-28 aspect-video object-cover rounded border border-primary-container/20 bg-surface-container-lowest shrink-0" />
              <div className="flex-1 flex flex-col gap-space-2xs min-w-0">
                <Field label="Image URL" value={p.image} onChange={(v) => set(i, { image: v })} placeholder="https://… or /assets/photo.jpg" />
                <UploadButton onDone={(url) => set(i, { image: url })} />
              </div>
            </div>
            <Field label="YouTube link or ID (optional)" value={p.youtubeId} onChange={(v) => set(i, { youtubeId: v ? ytId(v) : '' })} placeholder="https://www.youtube.com/watch?v=…" hint="Leave blank for a still-image card." />
            <Field label="Title" value={p.title} onChange={(v) => set(i, { title: v })} />
            <Field label="Description" textarea value={p.desc} onChange={(v) => set(i, { desc: v })} />
            <div>
              <span className={cls.label}>Categories</span>
              <div className="flex flex-wrap gap-space-2xs">
                {categories.map((c) => {
                  const on = (p.categories || '').split(' ').filter(Boolean).includes(c.key);
                  return (
                    <button key={c.key} type="button" onClick={() => toggleCat(i, c.key)} className={`${cls.btn} ${on ? cls.btnGold : cls.btnGhost}`}>{c.label}</button>
                  );
                })}
              </div>
            </div>
            <div className="grid grid-cols-3 gap-space-sm">
              <label className="block">
                <span className={cls.label}>Layout</span>
                <select className={cls.input} value={p.layout || 'standard'} onChange={(e) => set(i, { layout: e.target.value })}>
                  {LAYOUTS.map(([v, l]) => <option key={v} value={v}>{l}</option>)}
                </select>
              </label>
              <label className="block">
                <span className={cls.label}>Width</span>
                <select className={cls.input} value={String(p.span || '6')} onChange={(e) => set(i, { span: e.target.value })}>
                  {SPANS.map(([v, l]) => <option key={v} value={v}>{l}</option>)}
                </select>
              </label>
              <label className="block">
                <span className={cls.label}>Image shape</span>
                <select className={cls.input} value={p.aspect || '16/10'} onChange={(e) => set(i, { aspect: e.target.value })}>
                  {ASPECTS.map(([v, l]) => <option key={v} value={v}>{l}</option>)}
                </select>
              </label>
            </div>
            <Field label="Chips over the image (comma separated)" value={(p.tags || []).join(', ')} onChange={(v) => set(i, { tags: v.split(',').map((s) => s.trim()).filter(Boolean) })} placeholder="Chiaroscuro, Portra 400" />
            <div className="grid grid-cols-2 gap-space-sm">
              <Field label="Caption left" value={p.metaLeft} onChange={(v) => set(i, { metaLeft: v })} placeholder="JAIPUR HAVELI PREP" />
              <Field label="Caption right" value={p.metaRight} onChange={(v) => set(i, { metaRight: v })} placeholder="35MM ANALOG" />
            </div>
            <div className="grid grid-cols-2 gap-space-sm">
              <Field label="Eyebrow" value={p.eyebrow} onChange={(v) => set(i, { eyebrow: v })} hint="Feature & split layouts." />
              <Field label="Badge" value={p.note} onChange={(v) => set(i, { note: v })} hint="Small chip over the image." />
            </div>
          </div>
        ))}
      </div>
      <button type="button" onClick={add} className={`${cls.btn} ${cls.btnGhost} self-start`}><span className="material-symbols-outlined text-[16px]">add</span>Add project</button>
    </div>
  );
}

// ── Gallery ───────────────────────────────────────────────────
function GalleryTab({ value, onChange }) {
  const [sub, setSub] = useState('videos');
  const list = value[sub] || [];
  const setList = (l) => onChange({ ...value, [sub]: l });
  const set = (i, patch) => setList(list.map((p, j) => (j === i ? { ...p, ...patch } : p)));
  const isYt = sub !== 'images';
  const add = () => setList([...list, isYt ? { id: '', title: '', category: '' } : { src: '', title: '', category: '', tall: false }]);
  return (
    <div className="flex flex-col gap-space-md">
      <div className="inline-flex p-1 rounded-full bg-surface-container-low border border-primary-container/20 self-start">
        {[['videos', 'Video'], ['images', 'Image'], ['reels', 'Reels']].map(([k, l]) => (
          <button key={k} type="button" onClick={() => setSub(k)} className={`${cls.btn} ${sub === k ? cls.btnGold : 'text-on-surface-variant hover:text-primary'}`}>{l} <span className="opacity-70">{(value[k] || []).length}</span></button>
        ))}
      </div>
      <p className="font-body-sm text-body-sm text-outline">{isYt ? 'Paste a YouTube link or ID. Thumbnails load from YouTube automatically.' : 'Paste an image URL, or upload a file to the studio media library.'}</p>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-space-sm">
        {list.map((it, i) => (
          <div key={i} className={cls.card + ' flex gap-space-sm'}>
            <div className={`${sub === 'reels' ? 'w-16 aspect-[9/16]' : 'w-28 aspect-video'} shrink-0 self-start rounded overflow-hidden bg-surface-container-lowest border border-primary-container/20`}>
              {isYt ? (it.id ? <img src={`https://i.ytimg.com/vi/${it.id}/hqdefault.jpg`} alt="" className="w-full h-full object-cover" /> : null)
                    : (it.src ? <img src={/^https?:/.test(it.src) ? it.src : withBase(it.src)} alt="" className="w-full h-full object-cover" /> : null)}
            </div>
            <div className="flex-1 flex flex-col gap-space-2xs min-w-0">
              {isYt ? (
                <Field label="YouTube link or ID" value={it.id} onChange={(v) => set(i, { id: ytId(v) })} placeholder="https://www.youtube.com/watch?v=…" />
              ) : (
                <>
                  <Field label="Image URL" value={it.src} onChange={(v) => set(i, { src: v })} placeholder="https://… or /assets/photo.jpg" />
                  <div className="flex items-center gap-space-sm">
                    <UploadButton onDone={(url) => set(i, { src: url })} />
                    <label className="flex items-center gap-space-2xs font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant"><input type="checkbox" className="accent-primary" checked={!!it.tall} onChange={(e) => set(i, { tall: e.target.checked })} /> Portrait</label>
                  </div>
                </>
              )}
              <div className="grid grid-cols-2 gap-space-2xs">
                <Field label="Title" value={it.title} onChange={(v) => set(i, { title: v })} />
                <Field label="Category" value={it.category} onChange={(v) => set(i, { category: v })} placeholder="Wedding Film" />
              </div>
              {sub === 'videos' && <label className="flex items-center gap-space-2xs font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant"><input type="checkbox" className="accent-primary" checked={!!it.featured} onChange={(e) => set(i, { featured: e.target.checked })} /> Flagship (large card)</label>}
              <div className="flex justify-end"><ListControls i={i} n={list.length} onMove={(a, d) => setList(moveItem(list, a, d))} onRemove={(a) => setList(list.filter((_, j) => j !== a))} /></div>
            </div>
          </div>
        ))}
      </div>
      <button type="button" onClick={add} className={`${cls.btn} ${cls.btnGhost} self-start`}><span className="material-symbols-outlined text-[16px]">add</span>Add {sub === 'videos' ? 'video' : sub === 'images' ? 'image' : 'reel'}</button>
    </div>
  );
}

// ── Contact ───────────────────────────────────────────────────
function ContactTab({ value, onChange }) {
  const set = (k) => (v) => onChange({ ...value, [k]: v });
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-space-md">
      <div className={cls.card + ' flex flex-col gap-space-sm'}>
        <span className="font-label-sm text-label-sm uppercase tracking-widest text-primary">Studio</span>
        <Field label="Studio name" value={value.studioName} onChange={set('studioName')} />
        <Field label="Footer blurb" textarea value={value.tagline} onChange={set('tagline')} />
        <Field label="Full address" textarea value={value.address} onChange={set('address')} />
        <Field label="Short location" value={value.city} onChange={set('city')} placeholder="Balangir, Odisha, India" />
        <Field label="Google Maps search text" value={value.mapQuery} onChange={set('mapQuery')} hint="Used for the map on the Contact page." />
      </div>
      <div className={cls.card + ' flex flex-col gap-space-sm'}>
        <span className="font-label-sm text-label-sm uppercase tracking-widest text-primary">Contact</span>
        <Field label="Studio hotline" value={value.phone1} onChange={set('phone1')} />
        <Field label="Direct desk (Abhishek)" value={value.phone2} onChange={set('phone2')} />
        <Field label="WhatsApp number (digits with country code)" value={value.whatsapp} onChange={(v) => onChange({ ...value, whatsapp: v.replace(/\D/g, '') })} placeholder="919827122620" />
        <Field label="Email" type="email" value={value.email} onChange={set('email')} />
        <Field label="Second email" type="email" value={value.email2} onChange={set('email2')} />
        <Field label="Consultation hours" value={value.hours} onChange={set('hours')} />
        <Field label="Hotline note" value={value.hotline} onChange={set('hotline')} />
        <Field label="Instagram URL" value={value.instagram} onChange={set('instagram')} />
        <Field label="Facebook URL" value={value.facebook} onChange={set('facebook')} />
        <Field label="YouTube URL" value={value.youtube} onChange={set('youtube')} />
      </div>
    </div>
  );
}

// ── Shell ─────────────────────────────────────────────────────
export default function AdminPanel() {
  const [session, setSession] = useState(undefined); // undefined = checking
  const [isAdmin, setIsAdmin] = useState(null);
  const [tab, setTab] = useState('leads');
  const [content, setContent] = useState(null);   // saved+merged from server
  const [draft, setDraft] = useState(null);       // edited copy
  const [saving, setSaving] = useState(false);
  const [toastMsg, setToastMsg] = useState(null);
  const toast = (text, error = false) => { setToastMsg({ text, error }); setTimeout(() => setToastMsg(null), 2600); };

  useEffect(() => {
    const sb = getSupabase();
    if (!sb) return;
    sb.auth.getSession().then(({ data }) => setSession(data.session || null));
    const { data: sub } = sb.auth.onAuthStateChange((_e, s) => setSession(s || null));
    return () => sub.subscription.unsubscribe();
  }, []);

  useEffect(() => {
    if (!session) { setIsAdmin(null); return; }
    const sb = getSupabase();
    (async () => {
      const { data } = await sb.from('slicex_admins').select('email').limit(1);
      const ok = !!(data && data.length);
      setIsAdmin(ok);
      if (ok) {
        try {
          const all = await fetchAllContent();
          setContent(all); setDraft(JSON.parse(JSON.stringify(all)));
        } catch (e) { toast(e.message, true); }
      }
    })();
  }, [session]);

  const signOut = async () => { await getSupabase().auth.signOut(); setSession(null); };
  const dirty = draft && content && JSON.stringify(draft[tab]) !== JSON.stringify(content[tab]);
  const save = async () => {
    setSaving(true);
    try {
      const merged = await saveContent(tab, draft[tab], session.user.email);
      setContent((c) => ({ ...c, [tab]: merged })); setDraft((d) => ({ ...d, [tab]: JSON.parse(JSON.stringify(merged)) }));
      toast('Saved — live on the site now');
    } catch (e) { toast(e.message, true); }
    setSaving(false);
  };
  const reset = async () => {
    if (!confirm('Discard saved edits for this section and go back to the built-in defaults?')) return;
    try {
      await resetContent(tab);
      setContent((c) => ({ ...c, [tab]: DEFAULTS[tab] })); setDraft((d) => ({ ...d, [tab]: JSON.parse(JSON.stringify(DEFAULTS[tab])) }));
      toast('Reset to defaults');
    } catch (e) { toast(e.message, true); }
  };

  if (session === undefined) return <div className="min-h-[60vh] flex items-center justify-center text-outline font-body-sm">Checking session…</div>;
  if (!session) return <Login onSignedIn={() => {}} />;
  if (isAdmin === null) return <div className="min-h-[60vh] flex items-center justify-center text-outline font-body-sm">Verifying access…</div>;
  if (!isAdmin) return (
    <div className="min-h-[60vh] flex items-center justify-center px-margin-mobile">
      <div className={cls.card + ' max-w-md text-center flex flex-col gap-space-sm'}>
        <span className="material-symbols-outlined text-error text-4xl">lock</span>
        <h1 className="font-headline-sm text-headline-sm text-on-surface">Not authorised</h1>
        <p className="font-body-sm text-body-sm text-on-surface-variant">{session.user.email} is signed in but is not on the studio admin list.</p>
        <button type="button" onClick={signOut} className={`${cls.btn} ${cls.btnGhost} self-center`}>Sign out</button>
      </div>
    </div>
  );

  return (
    <div className="w-full px-margin-mobile lg:px-margin-desktop py-space-xl flex flex-col gap-space-lg min-h-[80vh]">
      <div className="flex flex-wrap items-center justify-between gap-space-sm">
        <div>
          <span className="font-label-sm text-label-sm uppercase tracking-[0.28em] text-primary">Studio Admin</span>
          <h1 className="font-headline-lg text-headline-lg text-on-surface">SliceX Control Room</h1>
        </div>
        <div className="flex items-center gap-space-sm font-body-sm text-body-sm text-outline">
          <span>{session.user.email}</span>
          <a className={`${cls.btn} ${cls.btnGhost}`} href={withBase('/')} target="_blank" rel="noopener"><span className="material-symbols-outlined text-[16px]">open_in_new</span>View site</a>
          <button type="button" onClick={signOut} className={`${cls.btn} ${cls.btnGhost}`}><span className="material-symbols-outlined text-[16px]">logout</span>Sign out</button>
        </div>
      </div>
      <div role="tablist" className="flex flex-wrap gap-space-2xs border-b border-primary-container/20 pb-space-sm">
        {TABS.map((t) => (
          <button key={t.key} role="tab" type="button" aria-selected={tab === t.key} onClick={() => { if (dirty && !confirm('You have unsaved changes. Leave this tab?')) return; setTab(t.key); }} className={`${cls.btn} ${tab === t.key ? cls.btnGold : 'text-on-surface-variant hover:text-primary'}`}>
            <span className="material-symbols-outlined text-[16px]">{t.icon}</span>{t.label}
          </button>
        ))}
      </div>
      {tab === 'leads' && <LeadsTab toast={toast} />}
      {tab !== 'leads' && draft && (
        <div className="flex flex-col gap-space-md">
          {tab === 'packages' && <PackagesTab value={draft.packages} onChange={(v) => setDraft({ ...draft, packages: v })} />}
          {tab === 'services' && <ServicesTab value={draft.services} onChange={(v) => setDraft({ ...draft, services: v })} />}
          {tab === 'portfolio' && <PortfolioTab value={draft.portfolio} onChange={(v) => setDraft({ ...draft, portfolio: v })} />}
          {tab === 'gallery' && <GalleryTab value={draft.gallery} onChange={(v) => setDraft({ ...draft, gallery: v })} />}
          {tab === 'contact' && <ContactTab value={draft.contact} onChange={(v) => setDraft({ ...draft, contact: v })} />}
          <SaveBar dirty={dirty} saving={saving} onSave={save} onReset={reset} updated={JSON.stringify(content[tab]) !== JSON.stringify(DEFAULTS[tab])} />
        </div>
      )}
      <Toast msg={toastMsg} />
    </div>
  );
}
