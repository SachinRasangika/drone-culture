import React from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, ArrowUpRight } from 'lucide-react';

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
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

export function DroneModels() {
  return (
    <section className="relative w-full overflow-hidden py-16 lg:py-24">
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

      <div className="relative z-10 mx-auto w-full max-w-[1400px] px-5 sm:px-8 lg:px-16">
        <div className="mb-10 flex flex-col gap-8 lg:mb-14 lg:grid lg:grid-cols-3 lg:items-center lg:gap-6">
          <div className="hidden items-center gap-2 lg:flex">
            <div className="grid h-6 w-6 grid-cols-2 gap-[2px]">
              <div className="rounded-[2px] rounded-tl-[5px] bg-[#8b9d77]" />
              <div className="rounded-[2px] rounded-tr-[5px] bg-[#8b9d77]" />
              <div className="rounded-[2px] rounded-bl-[5px] bg-[#8b9d77]" />
              <div className="rounded-[2px] rounded-br-[5px] bg-[#8b9d77]" />
            </div>
            <span className="dc-brand-name text-[#7a8a6a]">Drone Culture</span>
          </div>

          <div className="flex w-full flex-col items-start lg:items-center lg:text-center">
            <div className="dc-section-badge mb-4">Our Equipment</div>
            <h2 className="dc-section-title text-left text-[#1a1a1a] lg:text-center">
              Camera
              <br className="hidden lg:block" /> Models
            </h2>
          </div>

          <div className="hidden items-center justify-end gap-3 lg:flex">
            <button
              type="button"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-[#b8c4a8] bg-white/60 text-[#6a7558] backdrop-blur-sm transition-colors hover:border-[#8b9d77] hover:bg-white"
              aria-label="Previous models"
            >
              <ChevronLeft size={20} strokeWidth={1.5} />
            </button>
            <button
              type="button"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-[#b8c4a8] bg-white/60 text-[#6a7558] backdrop-blur-sm transition-colors hover:border-[#8b9d77] hover:bg-white"
              aria-label="Next models"
            >
              <ChevronRight size={20} strokeWidth={1.5} />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4 lg:gap-6 lg:items-stretch">
          {drones.map((drone, index) => (
            <motion.div
              key={drone.name}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-40px' }}
              whileHover={{ y: -6 }}
              transition={{ type: 'spring', stiffness: 380, damping: 28 }}
              className="group flex h-full min-h-[320px] flex-col justify-between rounded-[24px] border border-white/60 bg-white/90 p-6 shadow-[0_12px_40px_-12px_rgba(26,26,26,0.12)] backdrop-blur-sm sm:min-h-[340px] lg:min-h-[400px] lg:p-7"
            >
              <span className="text-[20px] font-normal text-[#888] lg:text-[24px]">
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
                  <h3 className="dc-section-subtitle text-[#1a1a1a]">
                    {drone.name}
                  </h3>
                  <p className="dc-caption mt-1 text-[#999]">{drone.subtitle}</p>
                </div>
                <button
                  type="button"
                  className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[#dcf073] transition-colors hover:bg-[#cbe052] lg:h-11 lg:w-11"
                  aria-label={`Learn more about ${drone.name}`}
                >
                  <ArrowUpRight size={18} strokeWidth={2} className="text-[#3a3a3a]" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
