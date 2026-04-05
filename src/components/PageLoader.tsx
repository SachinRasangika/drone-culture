import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

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
            className="fixed inset-0 z-[300] flex flex-col items-center justify-center bg-[#1a1a1a]"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative flex h-20 w-20 items-center justify-center">
              <div
                className="dc-loader-ring absolute inset-0 rounded-full border-2 border-transparent border-t-[#dcf073] border-r-[#dcf073]/40"
                aria-hidden
              />
              <div
                className="dc-loader-ring-reverse absolute inset-2 rounded-full border-2 border-transparent border-b-[#8b9d77] border-l-[#8b9d77]/50"
                aria-hidden
              />
              <div className="grid grid-cols-2 gap-[2px] w-7 h-7">
                <div className="rounded-[2px] rounded-tl-[5px] bg-[#dcf073]" />
                <div className="rounded-[2px] rounded-tr-[5px] bg-[#dcf073]" />
                <div className="rounded-[2px] rounded-bl-[5px] bg-[#dcf073]" />
                <div className="rounded-[2px] rounded-br-[5px] bg-[#dcf073]" />
              </div>
            </div>
            <motion.p
              className="mt-8 text-[13px] font-medium tracking-[0.2em] text-white/40 uppercase"
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
