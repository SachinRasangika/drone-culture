import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { BrandMark } from './BrandMark';
import { DC_EASE, dcSpringGentle, dcViewport } from '../lib/motion';
import { RevealStagger, RevealItem } from './Reveal';

const drones = [
  {
    coverage: '8K Cinema',
    name: 'SkyFrame Pro',
    subtitle: 'Cinematic Videography',
    image: 'https://pngimg.com/d/drone_PNG198.png',
  },
  {
    coverage: '4K HDR',
    name: 'SkyFrame Scout',
    subtitle: 'Real Estate & Events',
    image: 'https://pngimg.com/d/drone_PNG63.png',
  },
  {
    coverage: '6K RAW',
    name: 'SkyFrame Ultra',
    subtitle: 'High-End Commercials',
    image: 'https://pngimg.com/d/drone_PNG43.png',
  },
  {
    coverage: '4K 60fps',
    name: 'SkyFrame Mini',
    subtitle: 'Travel & Fast Action',
    image: 'https://pngimg.com/d/drone_PNG182.png',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.08 * i,
      duration: 0.52,
      ease: DC_EASE,
    },
  }),
};

export function DroneModels() {
  return (
    <section
      id="equipment"
      className="dc-scroll-mt relative w-full overflow-hidden dc-section-y"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#f2f3ef] via-[#e6e9e0] to-[#dfe4d6]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage: `linear-gradient(rgba(139, 157, 119, 0.07) 1px, transparent 1px),
            linear-gradient(90deg, rgba(139, 157, 119, 0.07) 1px, transparent 1px)`,
          backgroundSize: '48px 48px',
        }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -left-32 top-1/4 h-96 w-96 rounded-full bg-[#d4dcc4]/40 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-[#c5d4b0]/35 blur-3xl"
        aria-hidden
      />

      <div className="relative z-10 dc-gutter-x">
        <div className="dc-inner">
        <RevealStagger className="mb-10 flex flex-col gap-8 lg:mb-14 lg:grid lg:grid-cols-[minmax(0,180px)_1fr] lg:items-start lg:gap-10">
          <RevealItem className="hidden items-center gap-2 lg:flex">
            <BrandMark className="h-6 w-6" />
            <span className="dc-brand-name text-dc-sage-muted">Drone Culture</span>
          </RevealItem>

          <RevealItem className="flex w-full flex-col items-start lg:items-center lg:text-center">
            <div className="dc-section-badge mb-4">Our Equipment</div>
            <h2 className="dc-section-title text-left text-dc-ink lg:text-center">
              Camera
              <br className="hidden lg:block" /> Models
            </h2>
          </RevealItem>
        </RevealStagger>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4 lg:gap-6 lg:items-stretch">
          {drones.map((drone, index) => (
            <motion.div
              key={drone.name}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="show"
              viewport={dcViewport}
              whileHover={{ y: -6, transition: dcSpringGentle }}
              className="group flex h-full min-h-[320px] flex-col justify-between rounded-dc border border-white/60 bg-white/90 p-6 shadow-sm backdrop-blur-sm transition-[box-shadow,transform] duration-300 ease-out hover:shadow-md sm:min-h-[340px] lg:min-h-[400px] lg:p-7"
            >
              <span className="text-[20px] font-normal text-dc-muted lg:text-[24px]">
                {drone.coverage}
              </span>

              <div className="flex flex-1 items-center justify-center py-3">
                <img
                  src={drone.image}
                  alt={drone.name}
                  className="dc-equipment-float max-h-[140px] w-full object-contain transition-transform duration-500 group-hover:scale-105 lg:max-h-[180px]"
                  style={{ animationDelay: `${index * 0.35}s` }}
                />
              </div>

              <div className="flex items-end justify-between">
                <div>
                  <h3 className="dc-section-subtitle text-dc-ink">
                    {drone.name}
                  </h3>
                  <p className="dc-caption mt-1 text-dc-muted">{drone.subtitle}</p>
                </div>
                <button
                  type="button"
                  className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-dc-lime transition-colors hover:bg-dc-lime-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-dc-ink lg:h-11 lg:w-11"
                  aria-label={`Learn more about ${drone.name}`}
                >
                  <ArrowUpRight size={18} strokeWidth={2} className="text-dc-lime-ink" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
        </div>
      </div>
    </section>
  );
}
