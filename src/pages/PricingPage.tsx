import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { Check } from 'lucide-react';
import {
  packageCategories,
  pricingAddons,
  pricingTerms,
  bookingInfo,
  type PackageItem,
  type PackageTierLevel,
} from '../data/pricing';
import { dcTransition } from '../lib/motion';

const heroBg = `${import.meta.env.BASE_URL}hero.png`;

function tierCardClass(tier: PackageTierLevel, popular?: boolean): string {
  const base =
    'flex flex-col rounded-dc-lg border bg-white p-7 lg:p-9 transition-shadow';
  if (popular) {
    return `${base} border-dc-lime shadow-md ring-1 ring-dc-lime/25`;
  }
  if (tier === 'premium') {
    return `${base} border-dc-ink/15 shadow-sm`;
  }
  return `${base} border-dc-border-soft shadow-sm`;
}

function PackageCard({ item }: { item: PackageItem }) {
  return (
    <article className={tierCardClass(item.tier, item.popular)}>
      {item.popular ? (
        <span className="mb-4 inline-flex w-fit rounded-full bg-dc-lime px-3 py-1 text-[12px] font-normal uppercase tracking-wide text-dc-lime-ink">
          Popular
        </span>
      ) : (
        <span className="mb-4 block h-[28px]" aria-hidden />
      )}
      <h3 className="dc-section-subtitle text-dc-ink">{item.name}</h3>
      <div className="mt-6 border-t border-dc-border-soft pt-6">
        <p className="text-[26px] font-normal leading-tight tracking-tight text-dc-ink lg:text-[32px]">
          {item.price}
        </p>
      </div>
      <ul className="mt-6 flex flex-1 flex-col gap-3">
        {item.bullets.map((line) => (
          <li key={line} className="flex gap-2.5 text-[14px] leading-snug text-dc-ink">
            <Check
              className="mt-0.5 h-4 w-4 shrink-0 text-dc-sage"
              strokeWidth={2.5}
              aria-hidden
            />
            <span>{line}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}

export function PricingPage() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="flex min-h-screen w-full flex-col bg-dc-surface">
      <Navbar />

      <div className="relative flex h-[30vh] min-h-[250px] w-full flex-col items-center justify-center bg-dc-ink pt-20 lg:h-[40vh] lg:min-h-[350px]">
        <div className="absolute inset-0 z-0">
          <img
            src={heroBg}
            alt=""
            className="h-full w-full object-cover"
            aria-hidden
          />
        </div>
        <div className="relative z-10 dc-gutter-x text-center">
          <motion.div
            className="dc-inner"
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={reduceMotion ? { duration: 0 } : dcTransition.enter}
          >
            <div className="dc-section-badge mb-4 inline-block lg:mb-6">Drone Culture</div>
            <h1 className="dc-page-title text-white [text-shadow:0_2px_20px_rgba(0,0,0,0.5)]">
              Full package list
            </h1>
            <p className="dc-section-body mx-auto mt-4 max-w-[620px] text-white/90 [text-shadow:0_1px_12px_rgba(0,0,0,0.45)]">
              {bookingInfo.tagline}. All prices in LKR. Final quotes depend on location,
              airspace, and deliverables — use this as a guide, then message or call to
              lock dates.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="dc-gutter-x w-full flex-1 dc-section-y">
        <div className="dc-inner">
        {packageCategories.map((category, idx) => (
          <section
            key={category.id}
            id={category.id}
            className={`dc-scroll-mt ${idx > 0 ? 'mt-16 border-t border-dc-border-soft pt-16 lg:mt-20 lg:pt-20' : ''}`}
          >
            <div className="mb-8 max-w-[720px] lg:mb-10">
              <p className="dc-caption mb-2 font-normal uppercase tracking-wide text-dc-sage-dark">
                {String(idx + 1).padStart(2, '0')}
              </p>
              <h2 className="dc-section-title text-dc-ink">{category.title}</h2>
              {category.subtitle ? (
                <p className="dc-section-body mt-2 text-dc-muted">{category.subtitle}</p>
              ) : null}
            </div>

            <div
              className={
                category.packages.length === 1
                  ? 'mx-auto max-w-lg'
                  : 'grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8'
              }
            >
              {category.packages.map((item) => (
                <PackageCard key={item.id} item={item} />
              ))}
            </div>
          </section>
        ))}

        <section
          id="addons"
          className="dc-scroll-mt mt-16 border-t border-dc-border-soft pt-16 lg:mt-20 lg:pt-20"
        >
          <h2 className="dc-section-title mb-6 text-dc-ink lg:mb-8">Add-ons (all services)</h2>
          <div className="rounded-dc-lg border border-dc-border-soft bg-white px-6 py-8 lg:px-10 lg:py-10">
            <ul className="divide-y divide-dc-border-soft/80">
              {pricingAddons.map((row) => (
                <li
                  key={row.label}
                  className="flex items-baseline justify-between gap-4 py-3 text-[14px] first:pt-0 last:pb-0"
                >
                  <span className="font-normal text-dc-ink">{row.label}</span>
                  <span className="shrink-0 text-dc-muted">{row.price}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section
          id="terms"
          className="dc-scroll-mt mt-16 border-t border-dc-border-soft pt-16 lg:mt-20 lg:pt-20"
        >
          <h2 className="dc-section-title mb-6 text-dc-ink lg:mb-8">Terms and conditions</h2>
          <ul className="max-w-[720px] space-y-3">
            {pricingTerms.map((line) => (
              <li key={line} className="dc-section-body flex gap-3 text-dc-muted">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-dc-sage" aria-hidden />
                <span className="text-dc-ink/90">{line}</span>
              </li>
            ))}
          </ul>
        </section>

        <div className="mt-16 rounded-dc-lg bg-dc-ink px-6 py-10 text-center lg:mt-20 lg:px-12 lg:py-12">
          <p className="dc-brand-name text-white">{bookingInfo.brand}</p>
          <p className="dc-section-body mt-2 text-white/80">{bookingInfo.tagline}</p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center sm:gap-8">
            <a
              href={bookingInfo.phoneTel}
              className="text-[22px] font-normal tracking-tight text-dc-lime hover:text-dc-lime-hover"
            >
              {bookingInfo.phoneDisplay}
            </a>
            <span className="hidden text-white/30 sm:inline" aria-hidden>
              |
            </span>
            <p className="dc-section-body max-w-[320px] text-white/75">{bookingInfo.dmNote}</p>
          </div>
          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row sm:gap-4">
            <Link
              to="/#contact"
              className="inline-flex items-center justify-center rounded-full bg-dc-lime px-7 py-3.5 text-[15px] font-normal text-dc-ink shadow-md transition-colors hover:bg-dc-lime-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Contact form
            </Link>
            <Link
              to="/"
              className="inline-flex items-center justify-center rounded-full border border-white/25 px-7 py-3.5 text-[15px] font-normal text-white transition-colors hover:border-white/50 hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-dc-lime"
            >
              Back to home
            </Link>
          </div>
        </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
