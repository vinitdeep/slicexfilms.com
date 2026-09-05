(function () {
  var NAV_ITEMS = [
    { dp: 'home', href: 'index.html', label: 'HOME' },
    { dp: 'about', href: 'about.html', label: 'ABOUT' },
    { dp: 'services', href: 'services.html', label: 'SERVICES' },
    { dp: 'portfolio', href: 'portfolio.html', label: 'PORTFOLIO' },
    { dp: 'films', href: 'films.html', label: 'FILMS' },
    { dp: 'packages', href: 'book-your-date.html', label: 'PACKAGES' },
    { dp: 'contact', href: 'contact.html', label: 'CONTACT' }
  ];

  // Maps the current filename straight to the nav item that should show active.
  var ACTIVE_BY_FILE = {
    'index.html': 'home',
    '': 'home',
    'about.html': 'about',
    'services.html': 'services',
    'portfolio.html': 'portfolio',
    'films.html': 'films',
    'book-your-date.html': 'packages',
    'contact.html': 'contact'
  };

  var file = location.pathname.split('/').pop();
  var activeDp = ACTIVE_BY_FILE[file] || null;

  // Uses arbitrary-value Tailwind classes (brackets) instead of custom theme keys
  // (font-label-uppercase, text-label-uppercase, etc.) so the header renders identically
  // no matter which page's own tailwind-config script is loaded.
  var INACTIVE_CLASS = "font-['Manrope'] text-[12px] font-semibold uppercase tracking-[0.18em] text-on-surface-variant hover:text-primary transition-colors";
  var DESKTOP_ACTIVE_CLASS = "font-['Manrope'] text-[12px] font-semibold uppercase tracking-[0.18em] text-primary border-b border-primary pb-0.5 transition-colors";
  var MOBILE_ACTIVE_CLASS = "font-['Manrope'] text-[12px] font-bold uppercase tracking-[0.18em] text-primary transition-colors";

  function navLink(item, activeClass) {
    var isActive = item.dp === activeDp;
    var cls = isActive ? activeClass : INACTIVE_CLASS;
    var current = isActive ? ' aria-current="page"' : '';
    return '<a' + current + ' class="' + cls + '" data-path="' + item.dp + '" href="' + item.href + '">' + item.label + '</a>';
  }

  var desktopNav = NAV_ITEMS.map(function (i) { return navLink(i, DESKTOP_ACTIVE_CLASS); }).join('');
  var mobileNav = NAV_ITEMS.map(function (i) { return navLink(i, MOBILE_ACTIVE_CLASS); }).join('');

  var HEADER_HTML =
    '<header class="fixed top-0 left-0 right-0 z-50 bg-surface-container-lowest/90 backdrop-blur-xl border-b border-primary-container/20 shadow-[0_4px_30px_rgba(0,0,0,0.4)]">' +
      '<div class="h-20 w-full px-margin-mobile lg:px-margin-desktop flex items-center justify-between gap-space-md">' +
        '<div class="flex items-center gap-space-md">' +
          '<a class="flex items-center gap-space-sm group" data-path="home" href="index.html">' +
            '<img alt="SliceX Films Logo" class="h-8 w-auto object-contain transition-transform group-hover:scale-105" src="assets/logo.jpg">' +
            '<div class="flex flex-col">' +
              '<span class="font-[\'Playfair_Display\'] text-[20px] uppercase tracking-wider text-primary font-normal leading-none">SLICEX FILMS</span>' +
              '<span class="font-[\'Manrope\'] text-[10px] text-secondary tracking-widest uppercase mt-1">CAPTURE | CREATE | INSPIRE</span>' +
            '</div>' +
          '</a>' +
        '</div>' +
        '<nav class="hidden xl:flex items-center gap-space-lg">' + desktopNav + '</nav>' +
        '<div class="flex items-center gap-space-md">' +
          '<a class="hidden sm:inline-flex items-center justify-center bg-gradient-to-r from-[#D4AF37] via-[#f2ca50] to-[#E5C378] text-on-primary font-[\'Manrope\'] text-[12px] uppercase font-semibold px-space-lg py-space-xs rounded-full shadow-[0_0_20px_rgba(212,175,55,0.25)] hover:shadow-[0_0_30px_rgba(212,175,55,0.45)] hover:brightness-110 transition-all tracking-widest" data-path="book-your-date" href="book-your-date.html">BOOK YOUR DATE</a>' +
          '<div class="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-primary-container p-[1px] flex items-center justify-center shrink-0">' +
            '<div class="w-full h-full rounded-full bg-surface-container-lowest flex items-center justify-center">' +
              '<span class="material-symbols-outlined text-primary text-[18px]">person</span>' +
            '</div>' +
          '</div>' +
          '<button aria-label="Toggle Menu" class="xl:hidden p-space-xs text-primary hover:text-secondary transition-colors" id="mobile-menu-btn" type="button">' +
            '<span class="material-symbols-outlined text-[24px]">menu</span>' +
          '</button>' +
        '</div>' +
      '</div>' +
      '<div class="hidden xl:hidden w-full bg-surface-container-low/95 backdrop-blur-2xl border-b border-primary-container/20 px-margin-mobile py-space-xl flex flex-col gap-space-md" id="mobile-menu">' +
        '<nav class="flex flex-col gap-space-md">' + mobileNav + '</nav>' +
        '<div class="pt-space-md">' +
          '<a class="w-full flex items-center justify-center bg-gradient-to-r from-primary-container via-primary to-secondary text-on-primary font-[\'Manrope\'] text-[12px] uppercase font-bold py-space-sm rounded-full shadow-[0_0_20px_rgba(212,175,55,0.3)] transition-all tracking-widest" data-path="book-your-date" href="book-your-date.html">BOOK YOUR DATE</a>' +
        '</div>' +
      '</div>' +
    '</header>';

  document.write(HEADER_HTML);

  document.addEventListener('DOMContentLoaded', function () {
    var btn = document.getElementById('mobile-menu-btn');
    var menu = document.getElementById('mobile-menu');
    if (btn && menu) {
      btn.addEventListener('click', function () {
        menu.classList.toggle('hidden');
      });
    }
  });
})();
