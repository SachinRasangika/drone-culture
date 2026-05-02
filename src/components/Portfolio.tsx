import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { projects } from '../data/projects';
import { Reveal, RevealItem, RevealStagger } from './Reveal';

export function Portfolio() {
  const featuredProjects = projects.slice(0, 3);

  return (
    <section
      id="portfolio"
      className="dc-scroll-mt w-full bg-white dc-gutter-x dc-section-y"
    >
      <div className="dc-inner mb-10 flex flex-col justify-between gap-6 lg:mb-14 lg:flex-row lg:items-end">
        <Reveal>
          <div>
            <div className="dc-section-badge mb-4">Our Work</div>
            <h2 className="dc-section-title text-dc-ink">
              Featured
              <br className="hidden lg:block" />
              Projects
            </h2>
          </div>
        </Reveal>
        <Reveal>
          <p className="dc-section-body max-w-[320px] text-dc-muted lg:pb-2">
            Explore our latest aerial photography and cinematic videography
            projects across various industries.
          </p>
        </Reveal>
      </div>

      <RevealStagger className="dc-inner mb-12 grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-7 lg:mb-16 lg:grid-cols-3 lg:gap-8">
        {featuredProjects.map((project) => (
          <RevealItem key={project.id}>
          <Link
            to={`/project/${project.id}`}
            className="group relative block overflow-hidden rounded-dc-lg border border-dc-border-soft bg-white shadow-sm transition-[border-color,box-shadow,transform] duration-300 ease-out hover:-translate-y-0.5 hover:border-dc-sage/40 hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-dc-lime"
          >
            <div className="h-full">
              <div className="relative mb-5 aspect-[4/3] w-full overflow-hidden sm:aspect-[16/11] lg:h-[280px] lg:aspect-auto">
                <img
                  src={project.coverImage}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-90" />
                <div className="pointer-events-none absolute inset-0 -translate-x-full skew-x-[-12deg] bg-gradient-to-r from-transparent via-white/50 to-transparent opacity-0 transition-all duration-700 ease-out group-hover:translate-x-full group-hover:opacity-100" />
                <div className="absolute top-5 right-5 flex h-12 w-12 translate-y-2 items-center justify-center rounded-full bg-white opacity-0 shadow-md transition-all duration-300 ease-out group-hover:translate-y-0 group-hover:opacity-100">
                  <ArrowUpRight
                    size={20}
                    className="text-dc-ink transition-transform duration-300 group-hover:rotate-12"
                  />
                </div>
              </div>

              <div className="px-3 pb-1">
                <h3 className="dc-section-subtitle mb-2 text-dc-ink transition-colors duration-300 group-hover:text-dc-sage-dark">
                  {project.title}
                </h3>
                <span className="dc-section-badge !text-[13px]">{project.category}</span>
              </div>
            </div>
          </Link>
          </RevealItem>
        ))}
      </RevealStagger>

      <Reveal className="dc-inner flex justify-center">
        <Link
          to="/portfolio"
          className="flex w-full items-center justify-center gap-3 rounded-full bg-dc-ink px-8 py-4 text-white shadow-sm transition-[background-color,box-shadow] duration-300 ease-out hover:bg-dc-charcoal-soft hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-dc-lime sm:w-auto"
        >
          <span className="text-[15px] font-normal">See All Projects</span>
          <ArrowUpRight size={18} />
        </Link>
      </Reveal>
    </section>
  );
}
