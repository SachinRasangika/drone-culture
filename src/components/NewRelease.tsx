import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const newReleaseBackground = `${import.meta.env.BASE_URL}new-release.png`;

export function NewRelease() {
  return (
    <section className="relative w-full overflow-hidden bg-[#ebebeb] min-h-[600px] lg:min-h-[860px]">
      <img
        src={newReleaseBackground}
        alt=""
        className="absolute inset-0 h-full w-full object-cover object-center"
        aria-hidden
      />

      {/* TOP CONTENT */}
      <div className="relative z-10 flex flex-col items-center px-5 pt-12 sm:px-8 lg:px-16">
        <div className="dc-section-badge mb-4">New Release</div>

        <h2 className="dc-section-title relative text-center text-[#1a1a1a] [text-shadow:0_1px_0_rgba(255,255,255,0.6)]">
          Drone Culture
        </h2>

        <p className="dc-section-body relative mt-4 max-w-[380px] text-center text-[#444] lg:mt-2">
          Introducing our most advanced camera drone — designed for cinematic
          missions, smarter tracking, and breathtaking 8K precision.
        </p>
      </div>

      {/* Spacer so background art shows between header and bottom UI */}
      <div className="relative z-10 min-h-[200px] sm:min-h-[260px] lg:min-h-[320px]" aria-hidden />

      {/* BOTTOM OVERLAY CONTENT */}
      <div className="relative z-20 flex flex-col items-start justify-between gap-8 px-5 pb-8 sm:px-8 md:flex-row md:items-end md:gap-0 lg:px-16 lg:pb-10">
        <div className="max-w-[400px]">
          <span className="text-[13px] font-normal italic text-[#555]">
            Drone Culture X Series
          </span>

          <h3 className="dc-footer-lead relative mt-2 text-[#1a1a1a]">
            <span className="font-semibold">
              Aerial cinematography
              <br />
              delivers{' '}
            </span>
            <span className="font-normal text-[#999] md:text-[#999]">
              unrivaled
              <br />
              visual impact for your projects.
            </span>
          </h3>

          <div className="mt-4 flex flex-wrap gap-2 lg:mt-5">
            <div className="dc-section-badge">8K Video</div>
            <div className="dc-section-badge">Night Mode</div>
          </div>
        </div>

        <div className="flex w-full snap-x snap-mandatory gap-3 overflow-x-auto pb-2 md:w-auto md:overflow-visible md:pb-0">
          <div className="flex min-w-[160px] snap-start flex-col justify-between rounded-[20px] bg-white p-5 shadow-lg lg:h-[200px] lg:w-[190px] lg:p-6">
            <div>
              <h4 className="dc-stat-value text-[#1a1a1a]">47%</h4>
              <p className="dc-section-body mt-2 text-[#888]">
                Higher dynamic range for stunning visuals.
              </p>
            </div>
            <div className="mt-3 flex justify-end lg:mt-0">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#dcf073] lg:h-10 lg:w-10">
                <CheckCircle2 size={16} className="text-[#4a5229]" />
              </div>
            </div>
          </div>

          <div className="flex min-w-[160px] snap-start flex-col justify-between rounded-[20px] bg-[#2d2d2d] p-5 shadow-lg lg:h-[200px] lg:w-[190px] lg:p-6">
            <div>
              <h4 className="dc-stat-value text-white">4x</h4>
              <p className="dc-section-body mt-2 text-white/60">
                Faster setup than traditional jibs.
              </p>
            </div>
            <div className="mt-3 flex justify-end lg:mt-0">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#dcf073] lg:h-10 lg:w-10">
                <CheckCircle2 size={16} className="text-[#4a5229]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
