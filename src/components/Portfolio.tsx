import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { projects } from '../data/projects';

export function Portfolio() {
  const featuredProjects = projects.slice(0, 3);

  return (
    <section
      id="portfolio"
      className="w-full bg-white px-5 sm:px-8 lg:px-16 py-16 lg:py-24"
    >
      <div className="mb-10 flex flex-col justify-between gap-6 lg:mb-14 lg:flex-row lg:items-end">
        <div>
          <div className="dc-section-badge mb-4">Our Work</div>
          <h2 className="dc-section-title text-[#1a1a1a]">
            Featured
            <br className="hidden lg:block" />
            Projects
          </h2>
        </div>
        <p className="dc-section-body max-w-[320px] text-[#888] lg:pb-2">
          Explore our latest aerial photography and cinematic videography
          projects across various industries.
        </p>
      </div>

      <div className="mb-12 grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-7 lg:mb-16 lg:grid-cols-3 lg:gap-8">
        {featuredProjects.map((project) => (
          <Link
            to={`/project/${project.id}`}
            key={project.id}
            className="group relative block rounded-[28px] p-[1px] transition-all duration-500 hover:bg-gradient-to-br hover:from-[#dcf073] hover:via-[#eef6c8] hover:to-[#8b9d77] hover:shadow-[0_24px_48px_-12px_rgba(220,240,115,0.45)]"
          >
            <div className="h-full overflow-hidden rounded-[27px] bg-white">
              <div className="relative mb-5 aspect-[4/3] w-full overflow-hidden sm:aspect-[16/11] lg:h-[280px] lg:aspect-auto">
                <img
                  src={project.coverImage}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-90" />
                <div className="pointer-events-none absolute inset-0 -translate-x-full skew-x-[-12deg] bg-gradient-to-r from-transparent via-white/50 to-transparent opacity-0 transition-all duration-700 ease-out group-hover:translate-x-full group-hover:opacity-100" />
                <div className="absolute top-5 right-5 flex h-12 w-12 translate-y-2 items-center justify-center rounded-full bg-white opacity-0 shadow-lg transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  <ArrowUpRight
                    size={20}
                    className="text-[#1a1a1a] transition-transform duration-300 group-hover:rotate-12"
                  />
                </div>
              </div>

              <div className="px-3 pb-1">
                <h3 className="dc-section-subtitle mb-2 text-[#1a1a1a] transition-colors duration-300 group-hover:text-[#2d3d1f]">
                  {project.title}
                </h3>
                <span className="dc-section-badge !text-[13px]">{project.category}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="flex justify-center">
        <Link
          to="/portfolio"
          className="flex w-full items-center justify-center gap-3 rounded-full bg-[#1a1a1a] px-8 py-4 text-white shadow-lg transition-all duration-300 hover:bg-[#333] hover:shadow-[0_12px_32px_-8px_rgba(220,240,115,0.35)] sm:w-auto"
        >
          <span className="text-[15px] font-medium">See All Projects</span>
          <ArrowUpRight size={18} />
        </Link>
      </div>
    </section>
  );
}
