import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { packageCategories, bookingInfo } from '../data/pricing';
import { Reveal, RevealItem, RevealStagger } from './Reveal';

export function Pricing() {
  return (
    <section
      id="pricing"
      className="dc-scroll-mt w-full bg-dc-surface dc-gutter-x dc-section-y"
    >
      <div className="dc-inner">
        <div className="mb-10 flex flex-col justify-between gap-6 lg:mb-14 lg:flex-row lg:items-end">
          <Reveal>
            <div>
              <div className="dc-section-badge mb-4">Packages and rates</div>
              <h2 className="dc-section-title max-w-[560px] text-dc-ink">
                Drone Culture — full package list
              </h2>
            </div>
          </Reveal>
          <Reveal>
            <p className="dc-section-body max-w-[380px] text-dc-muted lg:pb-1">
              Aerial, events, property promos, and monthly social packs. Prices in LKR.
              Tap a category for the full breakdown, add-ons, and terms.
            </p>
          </Reveal>
        </div>

        <RevealStagger className="mb-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:mb-12 lg:grid-cols-4 lg:gap-5">
          {packageCategories.map((cat) => (
            <RevealItem key={cat.id}>
              <Link
                to={`/pricing#${cat.id}`}
                className="group flex h-full flex-col rounded-dc border border-dc-border-soft bg-white p-6 shadow-sm transition-[border-color,box-shadow,transform] duration-300 ease-out hover:-translate-y-0.5 hover:border-dc-sage/40 hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-dc-lime"
              >
                <h3 className="dc-card-label text-dc-ink group-hover:text-dc-sage-dark">
                  {cat.title}
                </h3>
                {cat.subtitle ? (
                  <p className="dc-caption mt-2 line-clamp-2 text-dc-muted">{cat.subtitle}</p>
                ) : null}
                <p className="mt-4 text-[15px] font-normal text-dc-ink">{cat.summaryFrom}</p>
                <span className="dc-caption mt-4 inline-flex items-center gap-1 font-normal text-dc-sage-dark">
                  View packages
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </Link>
            </RevealItem>
          ))}
        </RevealStagger>

        <Reveal>
          <div className="flex flex-col items-center justify-between gap-6 rounded-dc-lg border border-dc-border-soft bg-white px-6 py-8 sm:flex-row sm:px-8 lg:px-10">
            <div>
              <p className="dc-section-subtitle text-dc-ink">{bookingInfo.brand}</p>
              <p className="dc-section-body mt-1 text-dc-muted">{bookingInfo.tagline}</p>
              <a
                href={bookingInfo.phoneTel}
                className="mt-3 inline-block text-[18px] font-normal text-dc-sage-dark transition-colors hover:text-dc-ink"
              >
                {bookingInfo.phoneDisplay}
              </a>
              <p className="dc-caption mt-2 text-dc-muted">{bookingInfo.dmNote}</p>
            </div>
            <Link
              to="/pricing"
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-dc-ink px-7 py-3.5 text-[15px] font-normal text-white shadow-sm transition-colors hover:bg-dc-charcoal-soft focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-dc-lime"
            >
              Full package list
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
