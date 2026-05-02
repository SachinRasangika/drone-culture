import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { BrandMark } from './BrandMark';
import { dcTransition } from '../lib/motion';

type PageLoaderProps = {
  children: React.ReactNode;
};

export function PageLoader({ children }: PageLoaderProps) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const minMs = 720;
    const start = Date.now();
    const finish = () => {
      const elapsed = Date.now() - start;
      window.setTimeout(() => setVisible(false), Math.max(0, minMs - elapsed));
    };
    if (document.readyState === 'complete') {
      finish();
    } else {
      window.addEventListener('load', finish, { once: true });
    }
  }, []);

  return (
    <>
      {children}
      <AnimatePresence>
        {visible && (
          <motion.div
            key="page-loader"
            className="fixed inset-0 z-[300] flex flex-col items-center justify-center bg-dc-ink"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ ...dcTransition.enter, duration: 0.55 }}
          >
            <div className="relative flex h-20 w-20 items-center justify-center">
              <div
                className="dc-loader-ring absolute inset-0 rounded-full border-2 border-transparent border-t-dc-lime border-r-dc-lime/40"
                aria-hidden
              />
              <div
                className="dc-loader-ring-reverse absolute inset-2 rounded-full border-2 border-transparent border-b-dc-sage border-l-dc-sage/50"
                aria-hidden
              />
              <BrandMark variant="lime" className="h-7 w-7" />
            </div>
            <motion.p
              className="mt-8 text-[13px] font-normal uppercase tracking-[0.2em] text-white/40"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.4 }}
            >
              Loading
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
