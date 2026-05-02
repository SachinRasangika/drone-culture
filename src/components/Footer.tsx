import React from 'react';
import { Link } from 'react-router-dom';
import { BrandMark } from './BrandMark';
import { Reveal } from './Reveal';

const footerLinkClass =
  'text-[13px] text-dc-muted transition-colors hover:text-white focus-visible:rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-dc-lime';

export function Footer() {
  return (
    <footer className="w-full border-t border-dc-line bg-dc-ink dc-gutter-x pb-10 pt-12 lg:pt-16">
      <Reveal className="dc-inner flex flex-col gap-12 lg:flex-row lg:gap-16">
        {/* LEFT COLUMN */}
        <div className="w-full lg:w-[40%] flex flex-col justify-between">
          {/* Drone Culture Logo */}
          <div>
            <div className="mb-8 flex items-center gap-2 lg:mb-10">
              <BrandMark className="h-5 w-5 lg:h-[22px] lg:w-[22px]" />
              <span className="dc-brand-name text-white">Drone Culture</span>
            </div>

            {/* Tagline */}
            <h3 className="dc-footer-lead max-w-[460px]">
              <span className="text-white">
                Premium aerial photography
                <br />
                and cinematic{' '}
              </span>
              <span className="text-dc-muted">drone videography</span>
              <br />
              <span className="text-white">
                for your next project.
              </span>
            </h3>

            <Link
              to="/portfolio"
              className="mt-8 flex w-max items-center gap-3 rounded-full border border-dc-charcoal-soft px-6 py-3 text-white transition-colors hover:border-dc-muted focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-dc-lime lg:mt-10 lg:py-3.5"
            >
              <BrandMark dense className="h-3.5 w-3.5" />
              <span className="text-[13px] font-normal lg:text-[14px]">
                View Portfolio
              </span>
            </Link>
          </div>

          {/* Copyright (Hidden on mobile, moved to bottom) */}
          <p className="mt-16 hidden text-[12px] text-dc-muted lg:block">
            © 2026 Drone Culture Studios. All rights reserved.
          </p>
        </div>

        {/* RIGHT COLUMN - Link Grid */}
        <div className="flex-1 flex flex-col gap-8 lg:gap-10 pt-2">
          {/* Top Row of Links */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-8 lg:gap-x-12 gap-y-8 lg:gap-y-0">
            {/* Portfolio */}
            <div>
              <h4 className="dc-footer-heading text-white mb-3 lg:mb-4">
                Portfolio
              </h4>
              <ul className="flex flex-col gap-2 lg:gap-2.5">
                <li>
                  <Link to="/portfolio" className={footerLinkClass}>
                    Real Estate
                  </Link>
                </li>
                <li>
                  <Link to="/portfolio" className={footerLinkClass}>
                    Commercials
                  </Link>
                </li>
                <li>
                  <Link to="/portfolio" className={footerLinkClass}>
                    Events & Festivals
                  </Link>
                </li>
                <li>
                  <Link to="/portfolio" className={footerLinkClass}>
                    Landscapes
                  </Link>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="dc-footer-heading text-white mb-3 lg:mb-4">
                Company
              </h4>
              <ul className="flex flex-col gap-2 lg:gap-2.5">
                <li>
                  <Link to="/#about" className={footerLinkClass}>
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/#contact" className={footerLinkClass}>
                    Our Pilots
                  </Link>
                </li>
                <li>
                  <Link to="/#equipment" className={footerLinkClass}>
                    Equipment
                  </Link>
                </li>
                <li>
                  <Link to="/#insights" className={footerLinkClass}>
                    Press
                  </Link>
                </li>
              </ul>
            </div>

            {/* Get in Touch */}
            <div className="col-span-2 sm:col-span-1">
              <h4 className="dc-footer-heading text-white mb-3 lg:mb-4">
                Get in Touch
              </h4>
              <ul className="flex flex-col gap-2 lg:gap-2.5">
                <li>
                  <a
                    href="mailto:hello@droneculture.studio"
                    className={footerLinkClass}
                  >
                    hello@droneculture.studio
                  </a>
                </li>
                <li>
                  <span className="text-[13px] text-dc-muted">Los Angeles, CA</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Row of Links */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-8 lg:gap-x-12 gap-y-8 lg:gap-y-0">
            {/* Services */}
            <div>
              <h4 className="dc-footer-heading text-white mb-3 lg:mb-4">
                Services
              </h4>
              <ul className="flex flex-col gap-2 lg:gap-2.5">
                <li>
                  <Link to="/#about" className={footerLinkClass}>
                    Aerial Photography
                  </Link>
                </li>
                <li>
                  <Link to="/#about" className={footerLinkClass}>
                    Cinematic Video
                  </Link>
                </li>
                <li>
                  <Link to="/#modules" className={footerLinkClass}>
                    FPV Drone Tours
                  </Link>
                </li>
                <li>
                  <Link to="/#insights" className={footerLinkClass}>
                    Post-Production
                  </Link>
                </li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h4 className="dc-footer-heading text-white mb-3 lg:mb-4">
                Support
              </h4>
              <ul className="flex flex-col gap-2 lg:gap-2.5">
                <li>
                  <Link to="/pricing" className={footerLinkClass}>
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link to="/#contact" className={footerLinkClass}>
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link to="/#contact" className={footerLinkClass}>
                    Contact
                  </Link>
                </li>
                <li>
                  <a
                    href="mailto:hello@droneculture.studio?subject=Privacy%20policy"
                    className={footerLinkClass}
                  >
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>

            {/* Follow Us */}
            <div className="col-span-2 sm:col-span-1">
              <h4 className="dc-footer-heading text-white mb-3 lg:mb-4">
                Follow Us
              </h4>
              <ul className="flex flex-col gap-2 lg:gap-2.5">
                <li>
                  <a
                    href="https://www.instagram.com/"
                    className={footerLinkClass}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    href="https://vimeo.com/"
                    className={footerLinkClass}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Vimeo
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.youtube.com/"
                    className={footerLinkClass}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    YouTube
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Copyright (Mobile only) */}
        <p className="mt-8 block border-t border-dc-line pt-8 text-[12px] text-dc-muted lg:hidden">
          © 2026 Drone Culture Studios. All rights reserved.
        </p>
      </Reveal>
    </footer>);

}