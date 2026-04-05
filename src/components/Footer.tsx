import React from 'react';
export function Footer() {
  return (
    <footer className="w-full bg-[#1a1a1a] border-t border-[#2a2a2a] px-5 sm:px-8 lg:px-16 pt-12 lg:pt-16 pb-10">
      <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row gap-12 lg:gap-16">
        {/* LEFT COLUMN */}
        <div className="w-full lg:w-[40%] flex flex-col justify-between">
          {/* Drone Culture Logo */}
          <div>
            <div className="flex items-center gap-2 mb-8 lg:mb-10">
              <div className="grid grid-cols-2 gap-[2px] w-[20px] h-[20px] lg:w-[22px] lg:h-[22px]">
                <div className="bg-[#8b9d77] rounded-[2px] rounded-tl-[5px]"></div>
                <div className="bg-[#8b9d77] rounded-[2px] rounded-tr-[5px]"></div>
                <div className="bg-[#8b9d77] rounded-[2px] rounded-bl-[5px]"></div>
                <div className="bg-[#8b9d77] rounded-[2px] rounded-br-[5px]"></div>
              </div>
              <span className="dc-brand-name text-white">
                Drone Culture
              </span>
            </div>

            {/* Tagline */}
            <h3 className="dc-footer-lead max-w-[460px]">
              <span className="text-white">
                Premium aerial photography
                <br />
                and cinematic{' '}
              </span>
              <span className="text-[#666]">drone videography</span>
              <br />
              <span className="text-white">
                for your next project.
              </span>
            </h3>

            {/* Explore Products Button */}
            <button className="flex items-center gap-3 mt-8 lg:mt-10 border border-[#444] text-white px-6 py-3 lg:py-3.5 rounded-full hover:border-[#777] transition-colors w-max">
              <div className="grid grid-cols-2 gap-[2px] w-[14px] h-[14px]">
                <div className="bg-[#8b9d77] rounded-[1px]"></div>
                <div className="bg-[#8b9d77] rounded-[1px]"></div>
                <div className="bg-[#8b9d77] rounded-[1px]"></div>
                <div className="bg-[#8b9d77] rounded-[1px]"></div>
              </div>
              <span className="text-[13px] lg:text-[14px] font-medium">
                View Portfolio
              </span>
            </button>
          </div>

          {/* Copyright (Hidden on mobile, moved to bottom) */}
          <p className="hidden lg:block text-[12px] text-[#555] mt-16">
            © 2025 Drone Culture Studios. All rights reserved.
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
                  <a
                    href="#"
                    className="text-[#777] text-[13px] hover:text-white transition-colors">
                    
                    Real Estate
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[#777] text-[13px] hover:text-white transition-colors">
                    
                    Commercials
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[#777] text-[13px] hover:text-white transition-colors">
                    
                    Events & Festivals
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[#777] text-[13px] hover:text-white transition-colors">
                    
                    Landscapes
                  </a>
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
                  <a
                    href="#"
                    className="text-[#777] text-[13px] hover:text-white transition-colors">
                    
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[#777] text-[13px] hover:text-white transition-colors">
                    
                    Our Pilots
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[#777] text-[13px] hover:text-white transition-colors">
                    
                    Equipment
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[#777] text-[13px] hover:text-white transition-colors">
                    
                    Press
                  </a>
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
                    className="text-[#777] text-[13px] hover:text-white transition-colors">
                    
                    hello@droneculture.studio
                  </a>
                </li>
                <li>
                  <span className="text-[#777] text-[13px]">
                    Los Angeles, CA
                  </span>
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
                  <a
                    href="#"
                    className="text-[#777] text-[13px] hover:text-white transition-colors">
                    
                    Aerial Photography
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[#777] text-[13px] hover:text-white transition-colors">
                    
                    Cinematic Video
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[#777] text-[13px] hover:text-white transition-colors">
                    
                    FPV Drone Tours
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[#777] text-[13px] hover:text-white transition-colors">
                    
                    Post-Production
                  </a>
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
                  <a
                    href="#"
                    className="text-[#777] text-[13px] hover:text-white transition-colors">
                    
                    Pricing
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[#777] text-[13px] hover:text-white transition-colors">
                    
                    FAQ
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[#777] text-[13px] hover:text-white transition-colors">
                    
                    Contact
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[#777] text-[13px] hover:text-white transition-colors">
                    
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
                    href="#"
                    className="text-[#777] text-[13px] hover:text-white transition-colors">
                    
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[#777] text-[13px] hover:text-white transition-colors">
                    
                    Vimeo
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[#777] text-[13px] hover:text-white transition-colors">
                    
                    YouTube
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Copyright (Mobile only) */}
        <p className="block lg:hidden text-[12px] text-[#555] mt-8 pt-8 border-t border-[#2a2a2a]">
          © 2025 Drone Culture Studios. All rights reserved.
        </p>
      </div>
    </footer>);

}