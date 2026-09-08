'use client';

import { withBase } from '../lib/basePath';
import { useContent } from '../lib/content';

// Shared footer. Contact details, socials and the studio blurb come from the
// editable "contact" content (admin panel → Contact). `showAdmin` adds the
// discreet Studio Admin link — only the Privacy Policy page passes it.
const tel = (s) => `tel:${String(s || '').replace(/[^\d+]/g, '')}`;

export default function SiteFooter({ showAdmin = false, compact = false }) {
  const c = useContent('contact');
  const year = new Date().getFullYear();
  return (
    <footer className="w-full bg-surface-container-lowest text-on-surface pt-space-4xl pb-space-2xl border-t border-primary-container/20">
      <div className="w-full px-margin-mobile lg:px-margin-desktop">
        <div className="pb-space-3xl mb-space-3xl">
          <span className="font-label-sm text-label-sm uppercase text-primary tracking-[0.3em] block mb-space-xs">HAUTE CINEMATOGRAPHY</span>
          <h2 className="font-display-hero-mobile lg:font-display-hero text-display-hero-mobile lg:text-display-hero uppercase tracking-tight text-on-surface mb-space-2xs">{c.studioName || 'SLICEX FILMS'}</h2>
          <p className="font-headline-sm text-headline-sm italic text-outline font-light">CAPTURE. CREATE. INSPIRE.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-space-xl pb-space-3xl">
          <div className="lg:col-span-4 flex flex-col gap-space-md">
            <h3 className="font-label-lg text-label-lg uppercase tracking-widest text-primary">The Atelier</h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant max-w-sm">{c.tagline}</p>
            <div className="flex items-center gap-space-md pt-space-xs">
              {c.instagram && <a aria-label="Instagram" className="font-label-sm text-label-sm text-outline hover:text-primary tracking-widest uppercase transition-colors" href={c.instagram} target="_blank" rel="noopener">Instagram</a>}
              {c.instagram && c.facebook && <span className="text-outline-variant">/</span>}
              {c.facebook && <a aria-label="Facebook" className="font-label-sm text-label-sm text-outline hover:text-primary tracking-widest uppercase transition-colors" href={c.facebook} target="_blank" rel="noopener">Facebook</a>}
              {c.youtube && (c.facebook || c.instagram) && <span className="text-outline-variant">/</span>}
              {c.youtube && <a aria-label="YouTube" className="font-label-sm text-label-sm text-outline hover:text-primary tracking-widest uppercase transition-colors" href={c.youtube} target="_blank" rel="noopener">YouTube</a>}
            </div>
          </div>
          <div className="lg:col-span-4 flex flex-col gap-space-sm">
            <h3 className="font-label-lg text-label-lg uppercase tracking-widest text-primary mb-space-xs">Navigation Archive</h3>
            <ul className="grid grid-cols-2 gap-space-xs font-body-sm text-body-sm text-on-surface-variant">
              <li><a className="hover:text-primary transition-colors" href={withBase('/')}>Home Archive</a></li>
              <li><a className="hover:text-primary transition-colors" href={withBase('/films/')}>Cinema Collective</a></li>
              <li><a className="hover:text-primary transition-colors" href={withBase('/services/')}>Editorial Offerings</a></li>
              <li><a className="hover:text-primary transition-colors" href={withBase('/portfolio/')}>Featured Exhibitions</a></li>
              <li><a className="hover:text-primary transition-colors" href={withBase('/gallery/')}>Gallery</a></li>
              <li><a className="hover:text-primary transition-colors" href={withBase('/contact/')}>Inquire Studio</a></li>
              <li><a className="hover:text-primary transition-colors" href={withBase('/book-your-date/')}>Book Your Date</a></li>
              <li><a className="hover:text-primary transition-colors" href={withBase('/about/')}>About</a></li>
            </ul>
          </div>
          <div className="lg:col-span-4 flex flex-col gap-space-sm">
            <h3 className="font-label-lg text-label-lg uppercase tracking-widest text-primary mb-space-xs">Direct Inquiries</h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant">Private consultations by appointment only.</p>
            <div className="flex flex-col gap-space-2xs font-body-sm text-body-sm text-on-surface-variant pt-space-xs">
              {c.phone1 && <a className="hover:text-primary transition-colors" href={tel(c.phone1)}>{c.phone1}</a>}
              {c.phone2 && <a className="hover:text-primary transition-colors" href={tel(c.phone2)}>{c.phone2}</a>}
              {c.email && <a className="hover:text-primary transition-colors pt-space-2xs text-on-surface" href={`mailto:${c.email}`}>{c.email}</a>}
              {c.address && <span className="pt-space-2xs text-outline">{c.address}</span>}
            </div>
          </div>
        </div>
        {/* Right padding keeps the legal links clear of the Chitra chat bubble (fixed bottom-right). */}
        <div className="pt-space-xl pb-16 sm:pb-0 sm:pr-32 flex flex-col sm:flex-row items-center justify-between gap-space-md font-label-sm text-label-sm text-outline tracking-widest uppercase">
          <p>© {year} {c.studioName || 'SLICEX FILMS'}. ALL RIGHTS RESERVED.</p>
          <div className="flex items-center gap-space-md">
            <a className="hover:text-primary transition-colors" href={withBase('/privacy-policy/')}>Privacy Policy</a>
            <span className="text-outline-variant">•</span>
            <a className="hover:text-primary transition-colors" href="#">Terms of Service</a>
            {showAdmin && (
              <>
                <span className="text-outline-variant">•</span>
                <a className="text-outline-variant hover:text-primary transition-colors" href={withBase('/admin/')} rel="nofollow">Studio Admin</a>
              </>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}
