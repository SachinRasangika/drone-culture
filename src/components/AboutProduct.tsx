import React from 'react';
import { BrandMark } from './BrandMark';
import { Reveal, RevealItem, RevealStagger } from './Reveal';
import { picsum } from '../lib/imageCdn';

const featureRows = [
  ['Field Mapping', 'Crop Analytics', 'Data Sync'],
  ['AI Precision', 'Smart Spraying', 'Autonomous Flight'],
];

const stats = [
  { value: '89%', label: 'Spray Accuracy' },
  { value: '380k', label: 'Hectares Monitored' },
  { value: '97%', label: 'Client Satisfaction' },
  { value: '130+', label: 'Farms Served' },
];

/** Stable aerial / landscape (Picsum) */
const fieldImg = picsum(85, 1200, 800);

export function AboutProduct() {
  return (
    <section
      id="about"
      className="dc-scroll-mt w-full bg-dc-surface dc-gutter-x dc-section-y"
    >
      <div className="dc-inner">
        <div className="mb-8 lg:hidden">
          <BrandMark className="h-7 w-7" />
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-x-14 lg:items-start">
          <div className="hidden min-h-[min(100vh-12rem,640px)] flex-col justify-between gap-10 lg:col-span-5 lg:flex">
            <BrandMark className="h-7 w-7" />

            <div className="mt-auto w-full lg:pt-8">
              <img
                src={fieldImg}
                alt="Drone over a green field"
                className="aspect-[420/260] w-full rounded-dc-lg object-cover shadow-[0_1px_3px_rgba(0,0,0,0.06)]"
              />
            </div>
          </div>

          <div className="flex flex-col lg:col-span-7">
            <Reveal className="flex w-full flex-col items-start">
              <div className="dc-section-badge mb-4">What We Do</div>

              <h2 className="mb-7 max-w-[620px] text-[32px] font-normal leading-[1.18] tracking-[-0.02em] text-dc-ink sm:text-[38px] lg:mb-9 lg:text-[48px] lg:leading-[1.15]">
                <span className="text-dc-ink">
                  How effectively can your fields be{' '}
                </span>
                <span className="text-dc-muted">scanned, treated, and optimized </span>
                <span className="text-dc-ink">using drones?</span>
              </h2>
            </Reveal>

            <Reveal>
            <p className="dc-section-body mb-8 max-w-[460px] text-dc-subtle lg:mb-10">
              At Drone Culture, we pair autonomous flight with field intelligence
              so growers can map, treat, and monitor crops with confidence—turning
              aerial data into decisions you can act on across every season.
            </p>
            </Reveal>

            <RevealStagger className="mb-12 flex max-w-[540px] flex-col gap-2.5 lg:mb-14 lg:gap-3">
              {featureRows.map((row) => (
                <RevealItem key={row.join()} className="flex flex-wrap gap-2 lg:gap-2.5">
                  {row.map((tag) => (
                    <div
                      key={tag}
                      className="rounded-full border border-dc-border-soft bg-transparent px-4 py-2 text-[13px] font-normal text-dc-ink lg:px-5 lg:py-2.5 lg:text-[14px]"
                    >
                      {tag}
                    </div>
                  ))}
                </RevealItem>
              ))}
            </RevealStagger>

            <div className="mb-10 mt-2 lg:hidden">
              <img
                src={fieldImg}
                alt="Drone over a green field"
                className="aspect-[420/260] w-full max-w-[440px] rounded-dc-lg object-cover shadow-[0_1px_3px_rgba(0,0,0,0.06)]"
              />
            </div>

            <RevealStagger className="mt-auto grid grid-cols-2 gap-x-6 gap-y-8 lg:flex lg:max-w-[640px] lg:flex-wrap lg:items-start lg:justify-between lg:gap-x-6">
              {stats.map(({ value, label }) => (
                <RevealItem key={label} className="flex min-w-0 flex-col lg:min-w-0">
                  <span className="mb-1.5 text-[34px] font-normal leading-none tracking-tight text-dc-ink lg:mb-2 lg:text-[44px]">
                    {value}
                  </span>
                  <span className="dc-stat-label text-dc-muted">{label}</span>
                </RevealItem>
              ))}
            </RevealStagger>
          </div>
        </div>
      </div>
    </section>
  );
}
