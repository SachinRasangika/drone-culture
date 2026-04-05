import React from 'react';
import { motion } from 'framer-motion';
import { Navbar } from './Navbar';
import { ArrowDown, CheckCircle2 } from 'lucide-react';

/** Compact New Release–style stat cards, scaled down for the hero */
const heroStatCards = [
  {
    variant: 'light' as const,
    value: '8K',
    description: 'Cinema-grade capture for commercials, film, and branded content.',
  },
  {
    variant: 'dark' as const,
    value: '380+',
    description: 'Aerial missions delivered with licensed pilots and insured gear.',
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.35 },
  },
};

const item = {
  hidden: { opacity: 0, y: 14 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

const heroBackground = `${import.meta.env.BASE_URL}hero.png`;

export function HeroBanner() {
  return (
    <div className="relative flex w-full min-h-[max(600px,100svh)] flex-col overflow-hidden lg:min-h-[max(800px,100svh)]">
      <div className="absolute inset-0 z-0">
        <motion.img
          src={heroBackground}
          alt="Stunning aerial landscape"
          className="h-full w-full object-cover"
          initial={{ scale: 1.06 }}
          animate={{ scale: 1.03 }}
          transition={{ duration: 14, ease: 'easeOut' }}
        />
      </div>

      <Navbar />

      <div className="relative z-10 flex min-h-0 flex-1 flex-col px-5 sm:px-8 lg:px-16 max-w-[1400px] mx-auto w-full pt-20">
        <motion.div
          className="flex flex-1 flex-col justify-center pb-8 lg:pb-10"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.h1
            variants={item}
            className="dc-page-title max-w-[800px] text-white [text-shadow:0_2px_24px_rgba(0,0,0,0.45)]"
          >
            <span className="font-medium">Stunning aerial</span>
            <br />
            <span className="font-medium italic text-[#dcf073]">
              photography &
            </span>
            <br />
            <span className="font-medium">cinematic videography</span>
          </motion.h1>

          <motion.div
            variants={item}
            className="mt-8 lg:mt-12 flex flex-col sm:flex-row items-start sm:items-center gap-6 lg:gap-8"
          >
            <p className="dc-section-body max-w-[320px] text-white/95 [text-shadow:0_1px_12px_rgba(0,0,0,0.4)]">
              Book professional drone shoots for your next project. We elevate
              your visual storytelling.
            </p>

            <a
              href="#portfolio"
              className="flex h-[56px] w-full sm:w-auto items-center justify-center gap-3 rounded-full bg-[#dcf073] px-8 py-4 text-[#1a1a1a] shadow-lg transition-colors hover:bg-[#cbe052] group"
            >
              <span className="text-[15px] font-medium">View Portfolio</span>
              <ArrowDown
                size={18}
                className="transition-transform group-hover:translate-y-1"
              />
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          className="flex w-full gap-3 overflow-x-auto pb-8 pt-2 snap-x snap-mandatory scrollbar-hide md:w-auto md:overflow-visible md:pb-10 lg:pb-12 md:snap-none"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          {heroStatCards.map((card, i) => (
            <motion.div
              key={card.value}
              className={`flex min-w-[148px] max-w-[220px] flex-1 snap-start flex-col justify-between rounded-[20px] p-4 shadow-lg sm:min-w-[160px] sm:max-w-none sm:flex-none lg:h-[168px] lg:min-w-[176px] lg:w-[176px] lg:p-5 ${
                card.variant === 'light'
                  ? 'bg-white'
                  : 'bg-[#2d2d2d]'
              }`}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.65 + i * 0.08,
                duration: 0.45,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{ y: -3 }}
            >
              <div>
                <h4
                  className={`text-[26px] font-medium leading-none tracking-tight lg:text-[32px] ${
                    card.variant === 'light' ? 'text-[#1a1a1a]' : 'text-white'
                  }`}
                >
                  {card.value}
                </h4>
                <p
                  className={`mt-2 text-[12px] leading-[1.55] lg:text-[13px] ${
                    card.variant === 'light' ? 'text-[#888]' : 'text-white/60'
                  }`}
                >
                  {card.description}
                </p>
              </div>
              <div className="mt-3 flex justify-end lg:mt-0">
                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#dcf073] lg:h-9 lg:w-9">
                  <CheckCircle2 size={14} className="text-[#4a5229] lg:w-4 lg:h-4" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
