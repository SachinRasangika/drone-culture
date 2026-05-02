import React from 'react';

type BrandMarkProps = {
  /** `lime` for high-contrast / hero UI; `sage` everywhere else. */
  variant?: 'sage' | 'lime';
  /** Smaller cells for compact pills (e.g. Home nav chip). */
  dense?: boolean;
  className?: string;
};

/**
 * 2×2 grid mark — single source so logo blocks match across the site.
 */
export function BrandMark({
  variant = 'sage',
  dense = false,
  className = '',
}: BrandMarkProps) {
  const bg = variant === 'lime' ? 'bg-dc-lime' : 'bg-dc-sage';
  const gap = dense ? 'gap-[1.5px]' : 'gap-[2px]';
  const cell = dense ? 'rounded-[1px]' : 'rounded-[2px] rounded-tl-[6px]';
  const cellTr = dense ? 'rounded-[1px]' : 'rounded-[2px] rounded-tr-[6px]';
  const cellBl = dense ? 'rounded-[1px]' : 'rounded-[2px] rounded-bl-[6px]';
  const cellBr = dense ? 'rounded-[1px]' : 'rounded-[2px] rounded-br-[6px]';

  return (
    <div
      className={`grid shrink-0 grid-cols-2 ${gap} ${className}`.trim()}
      aria-hidden
    >
      <div className={`${cell} ${bg}`} />
      <div className={`${cellTr} ${bg}`} />
      <div className={`${cellBl} ${bg}`} />
      <div className={`${cellBr} ${bg}`} />
    </div>
  );
}
