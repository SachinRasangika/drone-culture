import React, { useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { ChevronLeft, ChevronRight, ArrowUpRight } from 'lucide-react';
import { BrandMark } from './BrandMark';
import { dcTransition } from '../lib/motion';
const testimonials = [
{
  name: 'Richard Exten',
  subtitle: 'Real Estate Director',
  image:
  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=750&fit=crop&q=80',
  portrait:
  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&q=80',
  quoteBold:
  '"Using Drone Culture has completely changed the way we showcase properties.',
  quoteLight:
  ' The aerial photography is stunning, and the cinematic video tours help us close deals faster."',
  cardBold: 'Boosted property engagement by 27% with aerial tours.',
  cardLight: ' Delivered 4K footage for 12 luxury listings.'
},
{
  name: 'James Holloway',
  subtitle: 'Commercial Filmmaker',
  image:
  'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&h=750&fit=crop&q=80',
  portrait:
  'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&q=80',
  quoteBold:
  '"Drone Culture\'s drone videography gave us shots we never thought possible.',
  quoteLight:
  ' The stabilization is flawless, and the 8K resolution gave us incredible flexibility in post-production."',
  cardBold: 'Captured breathtaking establishing shots for 3 commercials.',
  cardLight: ' Seamlessly integrated with our ground footage.'
},
{
  name: 'Thomas Berger',
  subtitle: 'Event Organizer',
  image:
  'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&h=750&fit=crop&q=80',
  portrait:
  'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&q=80',
  quoteBold:
  '"The aerial coverage from Drone Culture captured the true scale of our festival.',
  quoteLight:
  ' The dynamic drone shots added a completely new dimension to our promotional aftermovie."',
  cardBold: 'Increased social media shares by 45% with drone highlights.',
  cardLight: ' Covered a 50-acre festival ground flawlessly.'
},
{
  name: 'Erik van Dijk',
  subtitle: 'Landscape Photographer',
  image:
  'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=600&h=750&fit=crop&q=80',
  portrait:
  'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&h=100&fit=crop&q=80',
  quoteBold:
  '"Partnering with Drone Culture elevated my portfolio instantly.',
  quoteLight:
  ' Their pilots understand composition and lighting, getting the drone exactly where it needs to be for the perfect shot."',
  cardBold: 'Captured award-winning aerial landscape photography.',
  cardLight: ' Explored remote locations with high-end drone gear.'
}];

export function Feedback() {
  const [active, setActive] = useState(0);
  const current = testimonials[active];
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="contact"
      className="dc-scroll-mt w-full bg-dc-ink dc-gutter-x dc-section-y"
    >
      <div className="dc-inner flex flex-col gap-8 md:flex-row">
        {/* LEFT: Portrait Image (Hidden on small screens) */}
        <div className="hidden md:block w-[38%] flex-shrink-0">
          <div className="relative h-[400px] w-full overflow-hidden rounded-dc lg:h-[520px]">
            <AnimatePresence mode="wait">
              <motion.img
                key={current.image}
                src={current.image}
                alt={current.name}
                className="absolute inset-0 h-full w-full object-cover"
                initial={reduceMotion ? false : { opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={reduceMotion ? undefined : { opacity: 0 }}
                transition={dcTransition.micro}
              />
            </AnimatePresence>

            {/* Overlay Card at Bottom */}
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                className="absolute bottom-5 left-5 right-5 flex items-start gap-3 rounded-2xl bg-dc-lime px-4 py-3 lg:px-5 lg:py-4"
                initial={reduceMotion ? false : { opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduceMotion ? undefined : { opacity: 0, y: 6 }}
                transition={dcTransition.micro}
              >
                <div className="flex-1">
                  <p className="text-[12px] leading-[1.5] text-dc-ink">
                    <span className="font-normal">{current.cardBold}</span>
                    <span className="font-normal">{current.cardLight}</span>
                  </p>
                </div>
                <div className="mt-1 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-dc-charcoal lg:h-10 lg:w-10">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="white"
                    className="lg:w-[18px] lg:h-[18px]"
                  >
                    <path d="M12 2.04C6.5 2.04 2 6.53 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85C10.44 7.34 11.93 5.96 14.22 5.96C15.31 5.96 16.45 6.15 16.45 6.15V8.62H15.19C13.95 8.62 13.56 9.39 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96C18.34 21.21 22 17.06 22 12.06C22 6.53 17.5 2.04 12 2.04Z" />
                  </svg>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* CENTER: Quote */}
        <div className="flex-1 flex flex-col justify-between py-4 min-w-0">
          {/* Drone Culture Logo */}
          <div className="mb-6 flex items-center gap-2 lg:mb-8">
            <BrandMark className="h-[18px] w-[18px] lg:h-5 lg:w-5" />
            <span className="dc-brand-name text-white">Drone Culture</span>
          </div>

          {/* Quote Text */}
          <div className="flex min-h-0 flex-1 flex-col justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={reduceMotion ? false : { opacity: 0, x: 18 }}
                animate={{ opacity: 1, x: 0 }}
                exit={reduceMotion ? undefined : { opacity: 0, x: -14 }}
                transition={dcTransition.enter}
              >
                <blockquote className="dc-quote max-w-[520px] text-white">
                  <span className="font-normal">{current.quoteBold}</span>
                  <span className="font-normal text-dc-muted">{current.quoteLight}</span>
                </blockquote>

                <div className="mt-6 flex items-center gap-4 md:mt-8 md:block">
                  <img
                    src={current.portrait}
                    alt={current.name}
                    className="h-12 w-12 rounded-full object-cover md:hidden"
                  />

                  <div>
                    <p className="dc-caption font-normal text-white">{current.name}</p>
                    <p className="mt-1 text-[13px] font-normal text-dc-muted">{current.subtitle}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Arrows */}
          <div className="flex items-center gap-3 mt-8 lg:mt-6">
            <button
              type="button"
              onClick={() =>
                setActive(
                  (prev) =>
                    (prev - 1 + testimonials.length) % testimonials.length
                )
              }
              aria-label="Previous testimonial"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-dc-charcoal-soft text-dc-muted transition-colors hover:border-dc-muted hover:text-dc-muted/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-dc-lime lg:h-12 lg:w-12"
            >
              <ChevronLeft size={18} strokeWidth={1.5} aria-hidden />
            </button>
            <button
              type="button"
              onClick={() => setActive((prev) => (prev + 1) % testimonials.length)}
              aria-label="Next testimonial"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-dc-charcoal-soft text-dc-muted transition-colors hover:border-dc-muted hover:text-dc-muted/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-dc-lime lg:h-12 lg:w-12"
            >
              <ChevronRight size={18} strokeWidth={1.5} aria-hidden />
            </button>
          </div>
        </div>

        {/* RIGHT: Avatar Stack (Hidden on mobile) */}
        <div className="hidden md:flex w-[180px] flex-shrink-0 flex-col gap-3">
          {testimonials.map((person, index) => (
            <button
              key={person.name}
              type="button"
              onClick={() => setActive(index)}
              aria-pressed={index === active}
              aria-label={`Show testimonial from ${person.name}`}
              className={`flex w-full items-center gap-3 rounded-dc px-4 py-3.5 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-dc-lime ${
                index === active ? 'bg-dc-sage/40' : 'bg-dc-charcoal-soft'
              }`}
            >
            
              <img
              src={person.portrait}
              alt={person.name}
              className="w-11 h-11 rounded-full object-cover flex-shrink-0" />
            
              {index === active ?
            <span className="text-white text-[13px] font-normal leading-tight text-left">
                  {person.name.split(' ')[0]}
                  <br />
                  {person.name.split(' ').slice(1).join(' ')}
                </span> :

            <div className="flex-1 flex justify-end">
                  <ArrowUpRight size={16} className="text-dc-muted" />
                </div>
            }
            </button>
          ))}
        </div>
      </div>
    </section>);

}