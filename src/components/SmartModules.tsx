import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Leaf } from 'lucide-react';
import { BrandMark } from './BrandMark';
import { dcSpringGentle } from '../lib/motion';
import { Reveal, RevealItem, RevealStagger } from './Reveal';

const smartModulesBackground = `${import.meta.env.BASE_URL}smart-modules-bg.png`;

export function SmartModules() {
  return (
    <section
      id="modules"
      className="dc-scroll-mt relative min-h-[100svh] w-full overflow-hidden"
    >
      <img
        src={smartModulesBackground}
        alt=""
        className="absolute inset-0 h-full min-h-[100svh] w-full object-cover object-center"
        aria-hidden
      />

      <div className="relative z-10 dc-gutter-x pb-10 pt-12 lg:pb-14 lg:pt-16">
        <div className="dc-inner flex min-h-[100svh] flex-col">
        <Reveal className="mb-8 flex items-center justify-center gap-2 lg:mb-6">
          <BrandMark className="h-5 w-5 lg:h-[22px] lg:w-[22px]" />
          <span className="dc-brand-name text-dc-ink [text-shadow:0_1px_12px_rgba(255,255,255,0.85)]">
            Drone Culture
          </span>
        </Reveal>

        <div className="flex flex-1 flex-col items-center justify-center gap-10 py-6 lg:flex-row lg:items-start lg:justify-between lg:gap-6 lg:py-8">
          <div className="hidden w-[200px] flex-col items-center gap-8 pt-2 lg:flex">
            <div className="flex flex-col items-center">
              <span className="dc-stat-value text-dc-ink [text-shadow:0_1px_10px_rgba(255,255,255,0.75)]">
                80+
              </span>
              <span className="dc-stat-label mt-2 text-dc-muted">Cinematic Shoots</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="dc-stat-value text-dc-ink [text-shadow:0_1px_10px_rgba(255,255,255,0.75)]">
                97%
              </span>
              <span className="dc-stat-label mt-2 text-dc-muted">Footage Quality</span>
            </div>
          </div>

          <Reveal className="flex w-full max-w-[680px] flex-1 flex-col items-center lg:mx-8">
            <h2 className="dc-section-title mb-8 text-center text-dc-ink [text-shadow:0_1px_14px_rgba(255,255,255,0.8)]">
              <span className="font-normal">
                We use advanced camera stabilization
                <br className="hidden sm:block" />
                and smart tracking technology
                <br className="hidden sm:block" />
              </span>
              <span className="font-normal text-dc-muted">
                to capture perfect
                <br className="hidden sm:block" />
                cinematic shots.
              </span>
            </h2>

            <Link
              to="/#about"
              className="flex w-full items-center justify-center gap-3 rounded-full bg-dc-charcoal px-8 py-4 text-white shadow-lg transition-colors hover:bg-dc-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-dc-lime sm:w-auto"
            >
              <BrandMark variant="sage" dense className="h-3.5 w-3.5" />
              <span className="text-[14px] font-normal">Explore Services</span>
            </Link>
          </Reveal>

          <div className="hidden w-[200px] flex-col items-center gap-8 pt-2 lg:flex">
            <div className="flex flex-col items-center">
              <span className="dc-stat-value text-dc-ink [text-shadow:0_1px_10px_rgba(255,255,255,0.75)]">
                24/7
              </span>
              <span className="dc-stat-label mt-2 text-dc-muted">Availability</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="dc-stat-value text-dc-ink [text-shadow:0_1px_10px_rgba(255,255,255,0.75)]">
                100+
              </span>
              <span className="dc-stat-label mt-2 text-dc-muted">Locations Covered</span>
            </div>
          </div>
        </div>

        <RevealStagger className="mt-auto flex flex-col items-stretch gap-4 pt-8 sm:flex-row sm:items-end sm:justify-between lg:pt-10">
          <RevealItem className="hidden gap-[6px] sm:flex">
            <motion.div
              className="flex h-[56px] w-[64px] flex-col justify-center rounded-xl bg-[#dde0d2]/95 px-2 shadow-md backdrop-blur-sm lg:h-[68px] lg:w-[76px] lg:px-3"
              whileHover={{ y: -2, transition: dcSpringGentle }}
            >
              <span className="text-[14px] font-normal leading-none text-dc-ink lg:text-[16px]">
                4K
              </span>
              <span className="mt-1 text-[8px] font-normal leading-tight text-dc-muted lg:text-[9px]">
                Resolution
                <br />
                Standard
              </span>
            </motion.div>
            <motion.div
              className="flex h-[56px] w-[64px] flex-col justify-center rounded-xl bg-[#dde0d2]/95 px-2 shadow-md backdrop-blur-sm lg:h-[68px] lg:w-[76px] lg:px-3"
              whileHover={{ y: -2, transition: dcSpringGentle }}
            >
              <span className="text-[14px] font-normal leading-none text-dc-ink lg:text-[16px]">
                60fps
              </span>
              <span className="mt-1 text-[8px] font-normal leading-tight text-dc-muted lg:text-[9px]">
                Smooth
                <br />
                Framerate
              </span>
            </motion.div>
            <motion.div
              className="flex h-[56px] w-[64px] flex-col justify-center rounded-xl bg-[#dde0d2]/95 px-2 shadow-md backdrop-blur-sm lg:h-[68px] lg:w-[76px] lg:px-3"
              whileHover={{ y: -2, transition: dcSpringGentle }}
            >
              <span className="text-[14px] font-normal leading-none text-dc-ink lg:text-[16px]">
                70
              </span>
              <span className="mt-1 text-[8px] font-normal leading-tight text-dc-muted lg:text-[9px]">
                Active
                <br />
                Lenses
              </span>
            </motion.div>
          </RevealItem>

          <RevealItem className="hidden w-[210px] flex-col justify-between rounded-dc bg-white/95 p-6 shadow-lg backdrop-blur-sm lg:flex lg:h-[200px]">
            <div>
              <h3 className="dc-stat-value text-dc-ink">94%</h3>
              <p className="dc-section-body mt-2 text-dc-muted">
                Faster production time with our aerial setups.
              </p>
            </div>
            <div className="flex justify-end">
              <motion.button
                type="button"
                whileHover={{ scale: 1.06, transition: dcSpringGentle }}
                whileTap={{ scale: 0.96 }}
                className="flex h-11 w-11 items-center justify-center rounded-full bg-dc-lime shadow-md transition-colors hover:bg-dc-lime-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-dc-ink"
                aria-label="Learn more"
              >
                <Leaf size={18} className="text-dc-lime-ink" />
              </motion.button>
            </div>
          </RevealItem>
        </RevealStagger>
        </div>
      </div>
    </section>
  );
}
