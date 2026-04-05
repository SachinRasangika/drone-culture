import React from 'react';
import { Leaf } from 'lucide-react';

const smartModulesBackground = `${import.meta.env.BASE_URL}smart-modules-bg.png`;

export function SmartModules() {
  return (
    <section className="relative min-h-[100svh] w-full overflow-hidden">
      <img
        src={smartModulesBackground}
        alt=""
        className="absolute inset-0 h-full min-h-[100svh] w-full object-cover object-center"
        aria-hidden
      />

      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-[1400px] flex-col px-5 pb-10 pt-12 sm:px-8 lg:px-16 lg:pb-14 lg:pt-16">
        <div className="mb-8 flex items-center justify-center gap-2 lg:mb-6">
          <div className="grid h-[20px] w-[20px] grid-cols-2 gap-[2px] lg:h-[22px] lg:w-[22px]">
            <div className="rounded-[2px] rounded-tl-[5px] bg-[#8b9d77]" />
            <div className="rounded-[2px] rounded-tr-[5px] bg-[#8b9d77]" />
            <div className="rounded-[2px] rounded-bl-[5px] bg-[#8b9d77]" />
            <div className="rounded-[2px] rounded-br-[5px] bg-[#8b9d77]" />
          </div>
          <span className="dc-brand-name text-[#1a1a1a] [text-shadow:0_1px_12px_rgba(255,255,255,0.85)]">
            Drone Culture
          </span>
        </div>

        <div className="flex flex-1 flex-col items-center justify-center gap-10 py-6 lg:flex-row lg:items-start lg:justify-between lg:gap-6 lg:py-8">
          <div className="hidden w-[200px] flex-col items-center gap-8 pt-2 lg:flex">
            <div className="flex flex-col items-center">
              <span className="dc-stat-value text-[#1a1a1a] [text-shadow:0_1px_10px_rgba(255,255,255,0.75)]">
                80+
              </span>
              <span className="dc-stat-label mt-2 text-[#555]">Cinematic Shoots</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="dc-stat-value text-[#1a1a1a] [text-shadow:0_1px_10px_rgba(255,255,255,0.75)]">
                97%
              </span>
              <span className="dc-stat-label mt-2 text-[#555]">Footage Quality</span>
            </div>
          </div>

          <div className="flex w-full max-w-[680px] flex-1 flex-col items-center lg:mx-8">
            <h2 className="dc-section-title mb-8 text-center text-[#1a1a1a] [text-shadow:0_1px_14px_rgba(255,255,255,0.8)]">
              <span className="font-medium">
                We use advanced camera stabilization
                <br className="hidden sm:block" />
                and smart tracking technology
                <br className="hidden sm:block" />
              </span>
              <span className="font-normal text-[#555]">
                to capture perfect
                <br className="hidden sm:block" />
                cinematic shots.
              </span>
            </h2>

            <button
              type="button"
              className="flex w-full items-center justify-center gap-3 rounded-full bg-[#2d2d2d] px-8 py-4 text-white shadow-lg transition-colors hover:bg-black sm:w-auto"
            >
              <div className="grid h-[14px] w-[14px] grid-cols-2 gap-[2px]">
                <div className="rounded-[1px] rounded-tl-sm bg-[#a3b88e]" />
                <div className="rounded-[1px] rounded-tr-sm bg-[#a3b88e]" />
                <div className="rounded-[1px] rounded-bl-sm bg-[#a3b88e]" />
                <div className="rounded-[1px] rounded-br-sm bg-[#a3b88e]" />
              </div>
              <span className="text-[14px] font-medium">Explore Services</span>
            </button>
          </div>

          <div className="hidden w-[200px] flex-col items-center gap-8 pt-2 lg:flex">
            <div className="flex flex-col items-center">
              <span className="dc-stat-value text-[#1a1a1a] [text-shadow:0_1px_10px_rgba(255,255,255,0.75)]">
                24/7
              </span>
              <span className="dc-stat-label mt-2 text-[#555]">Availability</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="dc-stat-value text-[#1a1a1a] [text-shadow:0_1px_10px_rgba(255,255,255,0.75)]">
                100+
              </span>
              <span className="dc-stat-label mt-2 text-[#555]">Locations Covered</span>
            </div>
          </div>
        </div>

        <div className="mt-auto flex flex-col items-stretch gap-4 pt-8 sm:flex-row sm:items-end sm:justify-between lg:pt-10">
          <div className="hidden gap-[6px] sm:flex">
            <div className="flex h-[56px] w-[64px] flex-col justify-center rounded-xl bg-[#dde0d2]/95 px-2 shadow-md backdrop-blur-sm lg:h-[68px] lg:w-[76px] lg:px-3">
              <span className="text-[14px] font-semibold leading-none text-[#1a1a1a] lg:text-[16px]">
                4K
              </span>
              <span className="mt-1 text-[8px] font-medium leading-tight text-[#666] lg:text-[9px]">
                Resolution
                <br />
                Standard
              </span>
            </div>
            <div className="flex h-[56px] w-[64px] flex-col justify-center rounded-xl bg-[#dde0d2]/95 px-2 shadow-md backdrop-blur-sm lg:h-[68px] lg:w-[76px] lg:px-3">
              <span className="text-[14px] font-semibold leading-none text-[#1a1a1a] lg:text-[16px]">
                60fps
              </span>
              <span className="mt-1 text-[8px] font-medium leading-tight text-[#666] lg:text-[9px]">
                Smooth
                <br />
                Framerate
              </span>
            </div>
            <div className="flex h-[56px] w-[64px] flex-col justify-center rounded-xl bg-[#dde0d2]/95 px-2 shadow-md backdrop-blur-sm lg:h-[68px] lg:w-[76px] lg:px-3">
              <span className="text-[14px] font-semibold leading-none text-[#1a1a1a] lg:text-[16px]">
                70
              </span>
              <span className="mt-1 text-[8px] font-medium leading-tight text-[#666] lg:text-[9px]">
                Active
                <br />
                Lenses
              </span>
            </div>
          </div>

          <div className="hidden w-[210px] flex-col justify-between rounded-[24px] bg-white/95 p-6 shadow-lg backdrop-blur-sm lg:flex lg:h-[200px]">
            <div>
              <h3 className="dc-stat-value text-[#1a1a1a]">94%</h3>
              <p className="dc-section-body mt-2 text-[#888]">
                Faster production time with our aerial setups.
              </p>
            </div>
            <div className="flex justify-end">
              <button
                type="button"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-[#dcf073] shadow-md transition-colors hover:bg-[#cbe052]"
                aria-label="Learn more"
              >
                <Leaf size={18} className="text-[#4a5229]" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
