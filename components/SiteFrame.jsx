import Header from './Header';

// Wraps every page with the fixed header and the themed main container.
// theme="home" applies the home page's design tokens (see globals.css).
export default function SiteFrame({ theme, children }) {
  return (
    <div className={theme === 'home' ? 'theme-home' : undefined}>
      <Header />
      <main className="w-full pt-20 bg-surface min-h-screen">{children}</main>
    </div>
  );
}
