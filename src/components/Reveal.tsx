import React from 'react';
import { motion, useReducedMotion, type HTMLMotionProps } from 'framer-motion';
import { dcViewport, fadeUp, staggerContainer, staggerItem } from '../lib/motion';

type DivMotionProps = Omit<
  HTMLMotionProps<'div'>,
  'children' | 'variants' | 'initial' | 'whileInView' | 'viewport'
>;

export type RevealProps = DivMotionProps & {
  children: React.ReactNode;
};

/** Single block: fade + lift when scrolled into view */
export function Reveal({ children, className, ...rest }: RevealProps) {
  const reduce = useReducedMotion();
  if (reduce) {
    return <div className={className}>{children}</div>;
  }
  return (
    <motion.div
      className={className}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={dcViewport}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

export type RevealStaggerProps = DivMotionProps & {
  children: React.ReactNode;
};

/** Parent for staggered children — wrap rows of `RevealItem` */
export function RevealStagger({ children, className, ...rest }: RevealStaggerProps) {
  const reduce = useReducedMotion();
  if (reduce) {
    return <div className={className}>{children}</div>;
  }
  return (
    <motion.div
      className={className}
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={dcViewport}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

export type RevealItemProps = DivMotionProps & {
  children: React.ReactNode;
};

/** Child of `RevealStagger` — inherits stagger delay */
export function RevealItem({ children, className, ...rest }: RevealItemProps) {
  const reduce = useReducedMotion();
  if (reduce) {
    return <div className={className}>{children}</div>;
  }
  return (
    <motion.div className={className} variants={staggerItem} {...rest}>
      {children}
    </motion.div>
  );
}
