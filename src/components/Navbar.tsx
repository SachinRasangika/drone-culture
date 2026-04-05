import React from 'react';
import { Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

interface NavbarProps {
  /** `light` = dark text on frosted bar (default, readable on photos). */
  variant?: 'dark' | 'light';
}

export function Navbar({ variant = 'light' }: NavbarProps) {
  const isDark = variant === 'dark';

  const linkClass = isDark
    ? 'text-[15px] text-white/85 transition-colors hover:text-white'
    : 'text-[15px] text-[#1a1a1a]/80 transition-colors hover:text-[#1a1a1a]';

  const logoClass = isDark ? 'text-white' : 'text-[#1a1a1a]';

  const homePillClass = isDark
    ? 'border border-white/15 bg-white/10 text-white backdrop-blur-md hover:bg-white/20'
    : 'border border-black/10 bg-[#1a1a1a] text-white hover:bg-[#333]';

  return (
    <nav
      className="absolute top-0 z-50 flex w-full items-center justify-between px-5 py-4 sm:px-8 lg:px-16 lg:py-5"
    >
      <Link to="/" className="flex items-center gap-2 lg:gap-3">
        <div className="grid h-5 w-5 grid-cols-2 gap-[2px] lg:h-6 lg:w-6">
          <div className="rounded-[2px] rounded-tl-[6px] bg-[#dcf073]" />
          <div className="rounded-[2px] rounded-tr-[6px] bg-[#dcf073]" />
          <div className="rounded-[2px] rounded-bl-[6px] bg-[#dcf073]" />
          <div className="rounded-[2px] rounded-br-[6px] bg-[#dcf073]" />
        </div>
        <span className={`dc-brand-name ${logoClass}`}>Drone Culture</span>
      </Link>

      <div className="hidden items-center gap-10 lg:flex">
        <Link to="/portfolio" className={linkClass}>
          Portfolio
        </Link>
        <a href="#" className={linkClass}>
          Services
        </a>

        <Link
          to="/"
          className={`flex items-center gap-2 rounded-full px-6 py-3 text-[15px] font-medium shadow-sm transition-colors ${homePillClass}`}
        >
          <div className="grid h-[14px] w-[14px] grid-cols-2 gap-[1.5px]">
            <div className="rounded-[1px] bg-[#dcf073]" />
            <div className="rounded-[1px] bg-[#dcf073]" />
            <div className="rounded-[1px] bg-[#dcf073]" />
            <div className="rounded-[1px] bg-[#dcf073]" />
          </div>
          Home
        </Link>

        <a href="#" className={linkClass}>
          Equipment
        </a>
        <a href="#" className={linkClass}>
          Pricing
        </a>
      </div>

      <div className="flex items-center">
        <button
          type="button"
          className="flex items-center gap-2 rounded-full bg-[#dcf073] px-4 py-2.5 text-[14px] font-medium text-[#1a1a1a] shadow-md transition-colors hover:bg-[#cbe052] lg:px-6 lg:py-3 lg:text-[15px]"
        >
          <Phone size={18} strokeWidth={2} />
          <span className="hidden sm:inline">Call Us</span>
        </button>
      </div>
    </nav>
  );
}
