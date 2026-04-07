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

  useEffect(() => { setMenuOpen(false); }, [router.pathname]);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-navy-950/95 backdrop-blur-md border-b border-white/5 py-3' : 'bg-navy-950/80 backdrop-blur-sm py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-9 h-9 bg-blue-brand flex items-center justify-center rounded-sm">
            <span className="text-white font-display font-bold text-sm">A</span>
          </div>
          <span className="font-display text-xl font-bold text-white tracking-tight">
            Acadore<span className="text-blue-400 font-light ml-1">Consulting</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map(({ href, label }) => (
            <Link key={href} href={href}
              className={`nav-link text-sm font-medium transition-colors duration-200 ${
                router.pathname === href ? 'text-blue-400' : 'text-white/70 hover:text-white'
              }`}>
              {label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex">
          <Link href="/contact" className="btn-primary text-sm py-2.5 px-6">
            Get a Free Consultation
          </Link>
        </div>

        {/* Mobile */}
        <button className="md:hidden text-white p-2" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          <span className="block w-5 h-0.5 bg-current mb-1.5"></span>
          <span className="block w-5 h-0.5 bg-current mb-1.5"></span>
          <span className="block w-5 h-0.5 bg-current"></span>
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-navy-950 border-t border-white/5 px-6 py-4">
          {navLinks.map(({ href, label }) => (
            <Link key={href} href={href}
              className={`block py-3 text-sm font-medium border-b border-white/5 last:border-0 ${
                router.pathname === href ? 'text-blue-400' : 'text-white/70'
              }`}>
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
