'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { withBase } from '../lib/basePath';

const NAV_ITEMS = [
  { dp: 'home', href: '/', label: 'HOME' },
  { dp: 'about', href: '/about', label: 'ABOUT' },
  { dp: 'services', href: '/services', label: 'SERVICES' },
  { dp: 'portfolio', href: '/portfolio', label: 'PORTFOLIO' },
  { dp: 'films', href: '/films', label: 'FILMS' },
  { dp: 'gallery', href: '/gallery', label: 'GALLERY' },
  { dp: 'packages', href: '/book-your-date', label: 'PACKAGES' },
  { dp: 'contact', href: '/contact', label: 'CONTACT' },
];

const INACTIVE_CLASS =
  "font-['Manrope'] text-[12px] font-semibold uppercase tracking-[0.18em] text-on-surface-variant hover:text-primary transition-colors";
const DESKTOP_ACTIVE_CLASS =
  "font-['Manrope'] text-[12px] font-semibold uppercase tracking-[0.18em] text-primary border-b border-primary pb-0.5 transition-colors";
const MOBILE_ACTIVE_CLASS =
  "font-['Manrope'] text-[12px] font-bold uppercase tracking-[0.18em] text-primary transition-colors";

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const isActive = (item) =>
    item.href === '/' ? pathname === '/' : pathname.startsWith(item.href);

  const navLink = (item, activeClass) => (
    <Link
      key={item.dp}
      aria-current={isActive(item) ? 'page' : undefined}
      className={isActive(item) ? activeClass : INACTIVE_CLASS}
      data-path={item.dp}
      href={item.href}
      onClick={() => setMenuOpen(false)}
    >
      {item.label}
    </Link>
  );

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-surface-container-lowest/90 backdrop-blur-xl border-b border-primary-container/20 shadow-[0_4px_30px_rgba(0,0,0,0.4)]">
      <div className="h-20 w-full px-margin-mobile lg:px-margin-desktop flex items-center justify-between gap-space-md">
        <div className="flex items-center gap-space-md">
          <Link className="flex items-center group" data-path="home" href="/">
            <img
              alt="SliceX Films"
              className="h-11 md:h-12 w-auto object-contain transition-transform group-hover:scale-105"
              src={withBase('/assets/slicex-logo.png')}
            />
          </Link>
        </div>
        <nav className="hidden xl:flex items-center gap-space-lg">
          {NAV_ITEMS.map((i) => navLink(i, DESKTOP_ACTIVE_CLASS))}
        </nav>
        <div className="flex items-center gap-space-md">
          <Link
            className="hidden sm:inline-flex items-center justify-center bg-gradient-to-r from-[#00b8c8] via-[#3ee6f0] to-[#7eeaf5] text-on-primary font-['Manrope'] text-[12px] uppercase font-semibold px-space-lg py-space-xs rounded-full shadow-[0_0_20px_rgba(0,184,200,0.25)] hover:shadow-[0_0_30px_rgba(0,184,200,0.45)] hover:brightness-110 transition-all tracking-widest"
            data-path="book-your-date"
            href="/book-your-date"
          >
            BOOK YOUR DATE
          </Link>
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-primary-container p-[1px] flex items-center justify-center shrink-0">
            <div className="w-full h-full rounded-full bg-surface-container-lowest flex items-center justify-center">
              <span className="material-symbols-outlined text-primary text-[18px]">person</span>
            </div>
          </div>
          <button
            aria-label="Toggle Menu"
            className="xl:hidden p-space-xs text-primary hover:text-secondary transition-colors"
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span className="material-symbols-outlined text-[24px]">menu</span>
          </button>
        </div>
      </div>
      <div
        className={`${menuOpen ? '' : 'hidden '}xl:hidden w-full bg-surface-container-low/95 backdrop-blur-2xl border-b border-primary-container/20 px-margin-mobile py-space-xl flex-col gap-space-md ${menuOpen ? 'flex' : ''}`}
      >
        <nav className="flex flex-col gap-space-md">
          {NAV_ITEMS.map((i) => navLink(i, MOBILE_ACTIVE_CLASS))}
        </nav>
        <div className="pt-space-md">
          <Link
            className="w-full flex items-center justify-center bg-gradient-to-r from-primary-container via-primary to-secondary text-on-primary font-['Manrope'] text-[12px] uppercase font-bold py-space-sm rounded-full shadow-[0_0_20px_rgba(0,184,200,0.3)] transition-all tracking-widest"
            data-path="book-your-date"
            href="/book-your-date"
            onClick={() => setMenuOpen(false)}
          >
            BOOK YOUR DATE
          </Link>
        </div>
      </div>
    </header>
  );
}
