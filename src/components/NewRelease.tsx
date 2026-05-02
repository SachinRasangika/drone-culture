import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { Reveal, RevealItem, RevealStagger } from './Reveal';

const newReleaseBackground = `${import.meta.env.BASE_URL}new-release.png`;

export function NewRelease() {
  return (
    <section
      id="new-release"
      className="dc-scroll-mt relative min-h-[600px] w-full overflow-hidden bg-dc-surface-alt lg:min-h-[860px]"
    >
      <img
        src={newReleaseBackground}
        alt=""
        className="absolute inset-0 h-full w-full object-cover object-center"
        aria-hidden
      />

      <div className="relative z-10 dc-gutter-x pt-12 lg:pt-16">
        <div className="dc-inner flex flex-col items-center">
        <Reveal className="flex flex-col items-center">
          <div className="dc-section-badge mb-4">New Release</div>

          <h2 className="dc-section-title relative text-center text-dc-ink [text-shadow:0_1px_0_rgba(255,255,255,0.6)]">
            Drone Culture
          </h2>

          <p className="dc-section-body relative mt-4 max-w-[380px] text-center text-dc-ink/80 lg:mt-2">
            Introducing our most advanced camera drone — designed for cinematic
            missions, smarter tracking, and breathtaking 8K precision.
          </p>
        </Reveal>
        </div>
      </div>

      <div className="relative z-10 min-h-[200px] sm:min-h-[260px] lg:min-h-[320px]" aria-hidden />

      <div className="relative z-20 dc-gutter-x pb-8 lg:pb-10">
        <div className="dc-inner flex flex-col items-start justify-between gap-8 md:flex-row md:items-end md:gap-0">
        <Reveal className="max-w-[400px]">
          <span className="text-[13px] font-normal italic text-dc-muted">
            Drone Culture X Series
          </span>

          <h3 className="dc-footer-lead relative mt-2 text-dc-ink">
            <span className="font-normal">
              Aerial cinematography
              <br />
              delivers{' '}
            </span>
            <span className="font-normal text-dc-muted md:text-dc-muted">
              unrivaled
              <br />
              visual impact for your projects.
            </span>
          </h3>

          <div className="mt-4 flex flex-wrap gap-2 lg:mt-5">
            <div className="dc-section-badge">8K Video</div>
            <div className="dc-section-badge">Night Mode</div>
          </div>
        </Reveal>

        <RevealStagger className="flex w-full snap-x snap-mandatory gap-3 overflow-x-auto pb-2 md:w-auto md:overflow-visible md:pb-0">
          <RevealItem className="flex min-w-[160px] snap-start flex-col justify-between rounded-dc bg-white p-5 shadow-lg lg:h-[200px] lg:w-[190px] lg:p-6">
            <div>
              <h4 className="dc-stat-value text-dc-ink">47%</h4>
              <p className="dc-section-body mt-2 text-dc-muted">
                Higher dynamic range for stunning visuals.
              </p>
            </div>
            <div className="mt-3 flex justify-end lg:mt-0">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-dc-lime lg:h-10 lg:w-10">
                <CheckCircle2 size={16} className="text-dc-lime-ink" />
              </div>
            </div>
          </RevealItem>

          <RevealItem className="flex min-w-[160px] snap-start flex-col justify-between rounded-dc bg-dc-charcoal p-5 shadow-lg lg:h-[200px] lg:w-[190px] lg:p-6">
            <div>
              <h4 className="dc-stat-value text-white">4x</h4>
              <p className="dc-section-body mt-2 text-white/60">
                Faster setup than traditional jibs.
              </p>
            </div>
            <div className="mt-3 flex justify-end lg:mt-0">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-dc-lime lg:h-10 lg:w-10">
                <CheckCircle2 size={16} className="text-dc-lime-ink" />
              </div>
            </div>
          </RevealItem>
        </RevealStagger>
        </div>
      </div>
    </section>
  );
}
