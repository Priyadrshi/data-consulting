import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/case-studies', label: 'Case Studies' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export function Navbar() {
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [router.pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-navy-950/95 backdrop-blur-md border-b border-navy-700/60 py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-8 h-8 rounded bg-gold-400 flex items-center justify-center">
            <span className="text-navy-950 font-display font-bold text-sm">A</span>
          </div>
          <span className="font-display text-xl font-semibold text-slate-100 group-hover:text-gold-400 transition-colors duration-200">
            Acadore
            <span className="text-gold-400 ml-1 font-light text-base">Consulting</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`nav-link text-sm font-medium transition-colors duration-200 ${
                router.pathname === href
                  ? 'text-gold-400'
                  : 'text-slate-400 hover:text-slate-100'
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-4">
          <Link href="/contact" className="btn-primary text-sm py-2 px-5">
            Get a Free Consultation
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-slate-300 hover:text-gold-400 transition-colors duration-200 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className="block w-5 h-0.5 bg-current mb-1.5 transition-all duration-200"></span>
          <span className="block w-5 h-0.5 bg-current mb-1.5 transition-all duration-200"></span>
          <span className="block w-5 h-0.5 bg-current transition-all duration-200"></span>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-navy-900 border-t border-navy-700 px-6 py-4">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`block py-3 text-sm font-medium border-b border-navy-800 last:border-0 transition-colors duration-200 ${
                router.pathname === href ? 'text-gold-400' : 'text-slate-400'
              }`}
            >
              {label}
            </Link>
          ))}
          <Link href="/contact" className="btn-primary text-sm mt-4 w-full justify-center">
            Get a Free Consultation
          </Link>
        </div>
      )}
    </header>
  );
}
