/**
 * Site-wide motion tokens — one easing curve, consistent durations.
 * Use with Framer Motion; pair with `prefers-reduced-motion` in components or CSS.
 */
export const DC_EASE = [0.22, 1, 0.36, 1] as const;

export const dcTransition = {
  /** Primary section / block entrance */
  enter: { duration: 0.52, ease: DC_EASE },
  /** Staggered children */
  stagger: { duration: 0.48, ease: DC_EASE },
  /** Small UI (buttons, chips) */
  micro: { duration: 0.3, ease: DC_EASE },
  /** Layout / filter grids */
  layout: { duration: 0.42, ease: DC_EASE },
  /** Overlays, lightbox */
  overlay: { duration: 0.32, ease: DC_EASE },
} as const;

export const dcSpring = {
  type: 'spring' as const,
  stiffness: 420,
  damping: 32,
};

export const dcSpringGentle = {
  type: 'spring' as const,
  stiffness: 380,
  damping: 28,
};

/** Scroll-trigger: fire a bit before the element is fully in view */
export const dcViewport = {
  once: true,
  amount: 0.22,
  margin: '0px 0px -8% 0px',
} as const;

export const fadeUp = {
  hidden: { opacity: 0, y: 26 },
  visible: {
    opacity: 1,
    y: 0,
    transition: dcTransition.enter,
  },
};

export const fade = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: dcTransition.enter,
  },
};

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
};

export const staggerItem = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: dcTransition.stagger,
  },
};

/** Hero / above-the-fold stagger (slightly tighter) */
export const heroStaggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.32 },
  },
};

export const heroStaggerItem = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: DC_EASE },
  },
};
