import React from 'react';
import { useReducedMotion } from 'framer-motion';
import { Reveal } from './Reveal';
import { showreelMp4Src, showreelYoutubeId } from '../data/siteMedia';

const poster = `${import.meta.env.BASE_URL}hero.png`;

function youtubeEmbedSrc(id: string): string {
  const q = new URLSearchParams({
    rel: '0',
    autoplay: '1',
    mute: '1',
    controls: '0',
    modestbranding: '1',
    playsinline: '1',
    loop: '1',
    playlist: id,
  });
  return `https://www.youtube-nocookie.com/embed/${id}?${q.toString()}`;
}

export function DroneShowreel() {
  const yt = showreelYoutubeId();
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="showreel"
      className="dc-scroll-mt w-full bg-white dc-gutter-x dc-section-y"
    >
      <div className="dc-inner">
        <Reveal className="mb-8 max-w-[720px] lg:mb-10">
          <div className="dc-section-badge mb-4">Drone video</div>
          <h2 className="dc-section-title text-dc-ink">See the work in motion</h2>
          <p className="dc-section-body mt-3 text-dc-muted">
            A short aerial reel — the same energy we bring to commercial, events, and property
            shoots.
          </p>
        </Reveal>

        <Reveal>
          <div className="overflow-hidden rounded-dc-lg border border-dc-border-soft bg-dc-ink shadow-md">
            <div className="aspect-video w-full">
              {reduceMotion ? (
                <img
                  src={poster}
                  alt=""
                  className="h-full w-full object-cover"
                  decoding="async"
                />
              ) : yt ? (
                <iframe
                  title="Drone Culture showreel"
                  src={youtubeEmbedSrc(yt)}
                  className="pointer-events-none h-full w-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              ) : (
                <video
                  className="h-full w-full object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  poster={poster}
                  tabIndex={-1}
                  aria-hidden
                >
                  <source src={showreelMp4Src()} type="video/mp4" />
                </video>
              )}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
