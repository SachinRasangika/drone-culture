import React from 'react';
import { CheckCircle2 } from 'lucide-react';

function LimeInsightCard({
  stat,
  title,
  body,
}: {
  stat: string;
  title: string;
  body: string;
}) {
  return (
    <div className="group relative w-full min-h-[240px] overflow-hidden rounded-[20px] transition-all duration-500 sm:w-[63%] lg:min-h-0 lg:rounded-[24px] hover:-translate-y-1 hover:shadow-[0_24px_48px_-14px_rgba(220,240,115,0.55)]">
      <div className="absolute inset-0 bg-[#dcf073]" />
      <div className="pointer-events-none absolute inset-0 z-[1] -translate-x-full skew-x-[-14deg] bg-gradient-to-r from-transparent via-white/50 to-transparent opacity-0 mix-blend-soft-light transition-all duration-[750ms] ease-out group-hover:translate-x-full group-hover:opacity-100" />
      <div className="relative z-[2] flex h-full min-h-[240px] flex-col justify-between p-6 lg:min-h-0 lg:p-9">
        <h3 className="dc-stat-value mb-8 text-[#1a1a1a] lg:mb-0">{stat}</h3>
        <div className="flex items-end justify-between">
          <div>
            <h4 className="dc-card-label mb-2 text-[#1a1a1a]">{title}</h4>
            <p className="dc-section-body max-w-[320px] text-[#5a5a3a]">{body}</p>
          </div>
          <div className="ml-4 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[#2d2d2d] lg:h-12 lg:w-12">
            <CheckCircle2 size={20} className="text-[#dcf073]" />
          </div>
        </div>
      </div>
    </div>
  );
}

function WhiteInsightCard({
  iconTop,
  children,
}: {
  iconTop: 'left' | 'right';
  children: React.ReactNode;
}) {
  return (
    <div className="group relative w-full min-h-[200px] overflow-hidden rounded-[20px] transition-all duration-500 sm:w-[37%] lg:min-h-0 lg:rounded-[24px] hover:-translate-y-1 hover:shadow-[0_20px_40px_-12px_rgba(0,0,0,0.18)]">
      <div className="absolute inset-0 bg-white" />
      <div className="pointer-events-none absolute inset-0 z-[1] -translate-x-full skew-x-[-14deg] bg-gradient-to-r from-transparent via-white/75 to-transparent opacity-0 mix-blend-overlay transition-all duration-[750ms] ease-out group-hover:translate-x-full group-hover:opacity-100" />
      <div className="relative z-[2] flex h-full min-h-[200px] flex-col justify-between p-6 lg:min-h-0 lg:p-8">
        <div
          className={`mb-6 flex lg:mb-0 ${iconTop === 'right' ? 'justify-end' : 'justify-start'}`}
        >
          <div className="grid h-5 w-5 grid-cols-2 gap-[2px] transition-transform duration-500 group-hover:scale-110">
            <div className="rounded-[2px] bg-[#8b9d77]" />
            <div className="rounded-[2px] bg-[#8b9d77]" />
            <div className="rounded-[2px] bg-[#8b9d77]" />
            <div className="rounded-[2px] bg-[#8b9d77]" />
          </div>
        </div>
        {children}
      </div>
    </div>
  );
}

export function FieldInsights() {
  return (
    <section className="w-full bg-[#1a1a1a] px-5 py-10 sm:px-8 lg:px-16">
      <div className="w-full overflow-hidden rounded-[24px] bg-[#2b2b2b] lg:rounded-[32px]">
        <div className="flex min-h-0 flex-col lg:min-h-[720px] lg:flex-row">
          <div className="flex w-full flex-col justify-between px-6 py-10 sm:px-10 lg:w-[42%] lg:px-14 lg:py-14">
            <div className="mb-10 lg:mb-0">
              <div className="dc-section-badge mb-6 lg:mb-8">Our Impact</div>
              <h2 className="dc-section-title text-white">
                Project
                <br />
                Insights
              </h2>
            </div>

            <div className="max-w-[440px]">
              <p className="dc-quote">
                <span className="font-medium text-white">
                  91% of filmmakers
                  <br className="hidden lg:block" />
                  and creative directors
                </span>
                <br />
                <span className="font-normal text-[#999]">
                  rely on aerial footage to
                  <br className="hidden lg:block" />
                  elevate their visual
                  <br className="hidden lg:block" />
                  storytelling.
                </span>
              </p>
            </div>
          </div>

          <div className="flex w-full flex-col gap-[10px] px-6 pb-10 sm:px-10 lg:w-[58%] lg:px-0 lg:py-10 lg:pr-10">
            <div className="flex flex-1 flex-col gap-[10px] sm:flex-row">
              <LimeInsightCard
                stat="1 hour"
                title="Setup"
                body="We deploy drones, configure camera settings, and plan flight paths to ensure perfect cinematic shots."
              />
              <WhiteInsightCard iconTop="right">
                <div>
                  <p className="dc-quote">
                    <span className="font-medium text-[#1a1a1a]">Drone </span>
                    <span className="font-normal text-[#999]">is</span>
                    <br />
                    <span className="font-normal text-[#999]">your project&apos;s</span>
                    <br />
                    <span className="font-semibold text-[#1a1a1a]">smartest</span>
                    <br />
                    <span className="font-semibold text-[#1a1a1a]">partner</span>
                  </p>
                </div>
              </WhiteInsightCard>
            </div>

            <div className="flex flex-1 flex-col gap-[10px] sm:flex-row">
              <WhiteInsightCard iconTop="left">
                <div>
                  <p className="dc-quote">
                    <span className="font-medium text-[#1a1a1a]">SkyFrame</span>
                    <br />
                    <span className="font-semibold text-[#1a1a1a]">makes</span>
                    <br />
                    <span className="font-semibold text-[#1a1a1a]">aerial shots</span>
                    <br />
                    <span className="font-semibold text-[#1a1a1a]">effortless</span>
                  </p>
                </div>
              </WhiteInsightCard>
              <LimeInsightCard
                stat="3 days"
                title="Post-Production"
                body="We color grade footage, stabilize shots, and deliver ready-to-use cinematic video for your final cut."
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
