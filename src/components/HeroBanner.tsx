import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Navbar } from './Navbar';
import { ArrowDown, CheckCircle2 } from 'lucide-react';
import { DC_EASE, dcTransition, heroStaggerContainer, heroStaggerItem } from '../lib/motion';

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

const heroBackground = `${import.meta.env.BASE_URL}hero.png`;

export function HeroBanner() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="relative flex w-full min-h-[max(600px,100svh)] flex-col overflow-hidden lg:min-h-[max(800px,100svh)]">
      <div className="absolute inset-0 z-0">
        <motion.img
          src={heroBackground}
          alt="Stunning aerial landscape"
          className="h-full w-full object-cover"
          initial={reduceMotion ? false : { scale: 1.06 }}
          animate={{ scale: 1.03 }}
          transition={
            reduceMotion
              ? { duration: 0 }
              : { duration: 14, ease: [0.16, 0.84, 0.24, 1] }
          }
        />
      </div>

      <Navbar />

      <div className="relative z-10 flex min-h-0 flex-1 flex-col dc-gutter-x pt-20">
        <div className="dc-inner flex min-h-0 w-full flex-1 flex-col">
        <motion.div
          className="flex flex-1 flex-col justify-center pb-8 lg:pb-10"
          variants={heroStaggerContainer}
          initial={reduceMotion ? 'show' : 'hidden'}
          animate="show"
        >
          <motion.h1
            variants={heroStaggerItem}
            className="dc-page-title max-w-[800px] text-white [text-shadow:0_2px_24px_rgba(0,0,0,0.45)]"
          >
            <span className="font-normal">Stunning aerial</span>
            <br />
            <span className="font-normal italic text-dc-lime">
              photography &
            </span>
            <br />
            <span className="font-normal">cinematic videography</span>
          </motion.h1>

          <motion.div
            variants={heroStaggerItem}
            className="mt-8 lg:mt-12 flex flex-col sm:flex-row items-start sm:items-center gap-6 lg:gap-8"
          >
            <p className="dc-section-body max-w-[320px] text-white/95 [text-shadow:0_1px_12px_rgba(0,0,0,0.4)]">
              Book professional drone shoots for your next project. We elevate
              your visual storytelling.
            </p>

            <a
              href="#portfolio"
              className="group flex h-[56px] w-full items-center justify-center gap-3 rounded-full bg-dc-lime px-8 py-4 text-dc-ink shadow-lg transition-colors hover:bg-dc-lime-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:w-auto"
            >
              <span className="text-[15px] font-normal">View Portfolio</span>
              <ArrowDown
                size={18}
                className="transition-transform group-hover:translate-y-1"
              />
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          className="flex w-full gap-3 overflow-x-auto pb-8 pt-2 snap-x snap-mandatory scrollbar-hide md:w-auto md:overflow-visible md:pb-10 lg:pb-12 md:snap-none"
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={
            reduceMotion
              ? { duration: 0 }
              : { delay: 0.52, ...dcTransition.enter }
          }
        >
          {heroStatCards.map((card, i) => (
            <motion.div
              key={card.value}
              className={`flex min-w-[148px] max-w-[220px] flex-1 snap-start flex-col justify-between rounded-dc p-4 shadow-md sm:min-w-[160px] sm:max-w-none sm:flex-none lg:h-[168px] lg:min-w-[176px] lg:w-[176px] lg:p-5 ${
                card.variant === 'light'
                  ? 'bg-white'
                  : 'bg-dc-charcoal'
              }`}
              initial={reduceMotion ? false : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={
                reduceMotion
                  ? { duration: 0 }
                  : {
                      delay: 0.62 + i * 0.08,
                      duration: 0.45,
                      ease: DC_EASE,
                    }
              }
              whileHover={
                reduceMotion
                  ? undefined
                  : { y: -3, transition: { type: 'spring', stiffness: 400, damping: 28 } }
              }
            >
              <div>
                <h4
                  className={`text-[26px] font-normal leading-none tracking-tight lg:text-[32px] ${
                    card.variant === 'light' ? 'text-dc-ink' : 'text-white'
                  }`}
                >
                  {card.value}
                </h4>
                <p
                  className={`mt-2 text-[12px] leading-[1.55] lg:text-[13px] ${
                    card.variant === 'light' ? 'text-dc-muted' : 'text-white/60'
                  }`}
                >
                  {card.description}
                </p>
              </div>
              <div className="mt-3 flex justify-end lg:mt-0">
                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-dc-lime lg:h-9 lg:w-9">
                  <CheckCircle2 size={14} className="text-dc-lime-ink lg:h-4 lg:w-4" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        </div>
      </div>
    </div>
  );
}
