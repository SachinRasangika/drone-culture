import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { BrandMark } from './BrandMark';
import { Reveal, RevealItem, RevealStagger } from './Reveal';

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
    <div className="group relative min-h-[240px] w-full min-w-0 overflow-hidden rounded-dc shadow-sm transition-[box-shadow,transform] duration-300 ease-out lg:min-h-0 hover:-translate-y-0.5 hover:shadow-md">
      <div className="absolute inset-0 bg-dc-lime" />
      <div className="pointer-events-none absolute inset-0 z-[1] -translate-x-full skew-x-[-14deg] bg-gradient-to-r from-transparent via-white/50 to-transparent opacity-0 mix-blend-soft-light transition-all duration-[750ms] ease-out group-hover:translate-x-full group-hover:opacity-100" />
      <div className="relative z-[2] flex h-full min-h-[240px] flex-col justify-between p-6 lg:min-h-0 lg:p-9">
        <h3 className="dc-stat-value mb-8 text-dc-ink lg:mb-0">{stat}</h3>
        <div className="flex items-end justify-between">
          <div>
            <h4 className="dc-card-label mb-2 text-dc-ink">{title}</h4>
            <p className="dc-section-body max-w-[320px] text-dc-sage-dark">{body}</p>
          </div>
          <div className="ml-4 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-dc-charcoal lg:h-12 lg:w-12">
            <CheckCircle2 size={20} className="text-dc-lime" />
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
    <div className="group relative min-h-[200px] w-full min-w-0 overflow-hidden rounded-dc shadow-sm transition-[box-shadow,transform] duration-300 ease-out lg:min-h-0 hover:-translate-y-0.5 hover:shadow-md">
      <div className="absolute inset-0 bg-white" />
      <div className="pointer-events-none absolute inset-0 z-[1] -translate-x-full skew-x-[-14deg] bg-gradient-to-r from-transparent via-white/75 to-transparent opacity-0 mix-blend-overlay transition-all duration-[750ms] ease-out group-hover:translate-x-full group-hover:opacity-100" />
      <div className="relative z-[2] flex h-full min-h-[200px] flex-col justify-between p-6 lg:min-h-0 lg:p-8">
        <div
          className={`mb-6 flex lg:mb-0 ${iconTop === 'right' ? 'justify-end' : 'justify-start'}`}
        >
          <BrandMark className="h-5 w-5 transition-transform duration-500 group-hover:scale-110" />
        </div>
        {children}
      </div>
    </div>
  );
}

export function FieldInsights() {
  return (
    <section id="insights" className="dc-scroll-mt w-full bg-dc-ink dc-section-y dc-gutter-x">
      <div className="dc-inner">
        <div className="w-full overflow-hidden rounded-dc-lg bg-dc-charcoal-soft">
        <div className="flex min-h-0 flex-col lg:min-h-[720px] lg:flex-row">
          <div className="flex w-full flex-col justify-between p-8 lg:w-[42%] lg:p-10 xl:p-12">
            <Reveal className="mb-10 lg:mb-0">
              <div className="dc-section-badge mb-6 lg:mb-8">Our Impact</div>
              <h2 className="dc-section-title text-white">
                Project
                <br />
                Insights
              </h2>
            </Reveal>

            <Reveal className="max-w-[440px]">
              <p className="dc-quote">
                <span className="font-normal text-white">
                  91% of filmmakers
                  <br className="hidden lg:block" />
                  and creative directors
                </span>
                <br />
                <span className="font-normal text-dc-muted">
                  rely on aerial footage to
                  <br className="hidden lg:block" />
                  elevate their visual
                  <br className="hidden lg:block" />
                  storytelling.
                </span>
              </p>
            </Reveal>
          </div>

          <div className="flex w-full flex-col gap-[10px] p-8 pb-10 pt-8 lg:w-[58%] lg:p-10 lg:pl-6 xl:p-12 xl:pl-8">
            <RevealStagger className="flex flex-1 flex-col gap-[10px] sm:grid sm:min-w-0 sm:grid-cols-[minmax(0,1.7fr)_minmax(0,1fr)] sm:items-stretch">
              <RevealItem className="min-w-0">
              <LimeInsightCard
                stat="1 hour"
                title="Setup"
                body="We deploy drones, configure camera settings, and plan flight paths to ensure perfect cinematic shots."
              />
              </RevealItem>
              <RevealItem className="min-w-0">
              <WhiteInsightCard iconTop="right">
                <div>
                  <p className="dc-quote">
                    <span className="font-normal text-dc-ink">Drone </span>
                    <span className="font-normal text-dc-muted">is</span>
                    <br />
                    <span className="font-normal text-dc-muted">your project&apos;s</span>
                    <br />
                    <span className="font-normal text-dc-ink">smartest</span>
                    <br />
                    <span className="font-normal text-dc-ink">partner</span>
                  </p>
                </div>
              </WhiteInsightCard>
              </RevealItem>
            </RevealStagger>

            <RevealStagger className="flex flex-1 flex-col gap-[10px] sm:grid sm:min-w-0 sm:grid-cols-[minmax(0,1fr)_minmax(0,1.7fr)] sm:items-stretch">
              <RevealItem className="min-w-0">
              <WhiteInsightCard iconTop="left">
                <div>
                  <p className="dc-quote">
                    <span className="font-normal text-dc-ink">SkyFrame</span>
                    <br />
                    <span className="font-normal text-dc-ink">makes</span>
                    <br />
                    <span className="font-normal text-dc-ink">aerial shots</span>
                    <br />
                    <span className="font-normal text-dc-ink">effortless</span>
                  </p>
                </div>
              </WhiteInsightCard>
              </RevealItem>
              <RevealItem className="min-w-0">
              <LimeInsightCard
                stat="3 days"
                title="Post-Production"
                body="We color grade footage, stabilize shots, and deliver ready-to-use cinematic video for your final cut."
              />
              </RevealItem>
            </RevealStagger>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}
