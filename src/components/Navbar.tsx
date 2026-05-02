import React, { useEffect, useState } from 'react';
import { Phone, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { BrandMark } from './BrandMark';
import { bookingInfo } from '../data/pricing';

interface NavbarProps {
  /** `light` = dark text on frosted bar (default, readable on photos). */
  variant?: 'dark' | 'light';
}

export function Navbar({ variant = 'light' }: NavbarProps) {
  const isDark = variant === 'dark';
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };
    document.addEventListener('keydown', onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prev;
    };
  }, [menuOpen]);

  const linkClass = isDark
    ? 'rounded-sm text-[15px] text-white/85 transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-dc-lime'
    : 'rounded-sm text-[15px] text-dc-ink/80 transition-colors hover:text-dc-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-dc-ink';

  const logoClass = isDark ? 'text-white' : 'text-dc-ink';

  const homePillClass = isDark
    ? 'border border-white/15 bg-white/10 text-white backdrop-blur-md hover:bg-white/20'
    : 'border border-black/10 bg-dc-ink text-white hover:bg-dc-charcoal-soft';

  const closeMenu = () => setMenuOpen(false);

  const mobileLinkClass =
    'block rounded-lg px-3 py-3 text-[16px] font-normal text-dc-ink hover:bg-dc-surface focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-dc-lime';

  return (
    <nav className="absolute top-0 z-50 w-full py-4 lg:py-5" aria-label="Main">
      <div className="dc-gutter-x">
        <div className="dc-inner flex items-center justify-between">
      <Link
        to="/"
        className={`flex items-center gap-2 rounded-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-dc-lime lg:gap-3 ${logoClass}`}
        onClick={closeMenu}
      >
        <BrandMark variant="lime" className="h-5 w-5 lg:h-6 lg:w-6" />
        <span className={`dc-brand-name ${logoClass}`}>Drone Culture</span>
      </Link>

      <div className="hidden items-center gap-10 lg:flex">
        <Link to="/portfolio" className={linkClass}>
          Portfolio
        </Link>
        <Link to="/#about" className={linkClass}>
          Services
        </Link>

        <Link
          to="/"
          className={`flex items-center gap-2 rounded-full px-6 py-3 text-[15px] font-normal shadow-sm transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-dc-lime ${homePillClass}`}
        >
          <BrandMark variant="lime" dense className="h-3.5 w-3.5" />
          Home
        </Link>

        <Link to="/#equipment" className={linkClass}>
          Equipment
        </Link>
        <Link to="/pricing" className={linkClass}>
          Pricing
        </Link>
      </div>

      <div className="flex items-center gap-2 sm:gap-3">
        <a
          href={bookingInfo.phoneTel}
          className="flex min-h-[44px] min-w-[44px] items-center justify-center gap-2 rounded-full bg-dc-lime px-4 py-2.5 text-[14px] font-normal text-dc-ink shadow-md transition-colors hover:bg-dc-lime-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-dc-ink lg:px-6 lg:py-3 lg:text-[15px]"
        >
          <Phone size={18} strokeWidth={2} aria-hidden />
          <span className="hidden sm:inline">Call Us</span>
        </a>

        <button
          type="button"
          className="flex min-h-[44px] min-w-[44px] items-center justify-center rounded-full border border-black/10 bg-white/90 text-dc-ink shadow-sm backdrop-blur-sm transition-colors hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-dc-ink lg:hidden"
          aria-expanded={menuOpen}
          aria-controls="mobile-nav-drawer"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setMenuOpen((o) => !o)}
        >
          {menuOpen ? <X size={22} strokeWidth={2} /> : <Menu size={22} strokeWidth={2} />}
        </button>
      </div>
        </div>
      </div>

      {menuOpen ? (
        <div className="fixed inset-0 z-[100] lg:hidden" id="mobile-nav-drawer">
          <button
            type="button"
            className="absolute inset-0 bg-black/50 backdrop-blur-[2px]"
            aria-label="Close menu"
            onClick={closeMenu}
          />
          <div
            role="dialog"
            aria-modal="true"
            aria-label="Site navigation"
            className="absolute right-0 top-0 flex h-full w-[min(320px,88vw)] flex-col border-l border-dc-border-soft bg-white shadow-2xl"
          >
            <div className="flex items-center justify-between border-b border-dc-border-soft px-4 py-4">
              <span className="text-[15px] font-normal text-dc-ink">Menu</span>
              <button
                type="button"
                className="flex min-h-[44px] min-w-[44px] items-center justify-center rounded-full text-dc-ink hover:bg-dc-surface focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-dc-lime"
                aria-label="Close menu"
                onClick={closeMenu}
              >
                <X size={22} />
              </button>
            </div>
            <div className="flex flex-1 flex-col gap-1 overflow-y-auto px-3 py-4">
              <Link to="/portfolio" className={mobileLinkClass} onClick={closeMenu}>
                Portfolio
              </Link>
              <Link to="/#about" className={mobileLinkClass} onClick={closeMenu}>
                Services
              </Link>
              <Link to="/" className={mobileLinkClass} onClick={closeMenu}>
                Home
              </Link>
              <Link to="/#equipment" className={mobileLinkClass} onClick={closeMenu}>
                Equipment
              </Link>
              <Link to="/pricing" className={mobileLinkClass} onClick={closeMenu}>
                Pricing
              </Link>
              <a
                href={bookingInfo.phoneTel}
                className={`${mobileLinkClass} mt-2 border-t border-dc-border-soft pt-4`}
                onClick={closeMenu}
              >
                Call {bookingInfo.phoneDisplay}
              </a>
            </div>
          </div>
        </div>
      ) : null}
    </nav>
  );
}
