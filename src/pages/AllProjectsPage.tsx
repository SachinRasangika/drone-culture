import React, { useState } from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { projects } from '../data/projects';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import { DC_EASE, dcTransition } from '../lib/motion';

const portfolioHeroBg = `${import.meta.env.BASE_URL}hero.png`;

const categories = [
'All',
'Real Estate',
'Commercial',
'Event Coverage',
'Landscape',
'Architecture'];

export function AllProjectsPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const reduceMotion = useReducedMotion();
  const filteredProjects =
  activeCategory === 'All' ?
  projects :
  projects.filter((p) => p.category === activeCategory);
  return (
    <div className="flex min-h-screen w-full flex-col bg-dc-surface">
      <Navbar />

      {/* Hero Banner */}
      <div className="relative flex h-[30vh] min-h-[250px] w-full flex-col items-center justify-center bg-dc-ink pt-20 lg:h-[40vh] lg:min-h-[350px]">
        <div className="absolute inset-0 z-0">
          <img
            src={portfolioHeroBg}
            alt=""
            className="h-full w-full object-cover"
            aria-hidden
          />
        </div>

        <div className="relative z-10 dc-gutter-x text-center">
          <motion.div
            className="dc-inner"
            initial={reduceMotion ? false : { opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={dcTransition.enter}
          >
            <div className="dc-section-badge mb-4 inline-block lg:mb-6">Our Portfolio</div>
            <h1 className="dc-page-title text-white [text-shadow:0_2px_20px_rgba(0,0,0,0.5)]">
              Explore Our Work
            </h1>
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <div className="dc-gutter-x w-full flex-1 dc-section-y">
        <div className="dc-inner">
        {/* Filters */}
        <div className="mb-10 flex flex-nowrap justify-start gap-2 overflow-x-auto pb-4 scrollbar-hide lg:mb-16 lg:flex-wrap lg:justify-center lg:gap-3 lg:pb-0">
          {categories.map((category) =>
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`flex-shrink-0 whitespace-nowrap rounded-full px-5 py-2.5 text-[14px] font-normal transition-colors lg:px-6 lg:py-3 lg:text-[15px] ${activeCategory === category ? 'bg-dc-ink text-white' : 'border border-dc-border-soft bg-white text-dc-muted hover:bg-dc-surface'}`}>
            
              {category}
            </button>
          )}
        </div>

        {/* Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          
          {filteredProjects.map((project, index) =>
          <motion.div
            layout
            initial={{
              opacity: 0,
              y: 20
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            transition={{
              duration: reduceMotion ? 0 : 0.46,
              delay: reduceMotion ? 0 : index * 0.06,
              ease: DC_EASE,
            }}
            key={project.id}>
            
              <Link
              to={`/project/${project.id}`}
              className="group block cursor-pointer rounded-dc-lg border border-transparent bg-white p-3 shadow-sm transition-[border-color,box-shadow,transform] duration-300 ease-out hover:-translate-y-0.5 hover:border-dc-border-soft hover:shadow-md lg:p-4">
              
                <div className="relative mb-4 h-[240px] w-full overflow-hidden rounded-dc sm:h-[280px] lg:mb-5 lg:h-[340px]">
                  <img
                  src={project.coverImage}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  {/* Hover Arrow */}
                  <div className="absolute top-4 right-4 flex h-10 w-10 translate-y-2 items-center justify-center rounded-full bg-white opacity-0 shadow-md transition-all duration-300 ease-out group-hover:translate-y-0 group-hover:opacity-100 lg:right-5 lg:top-5 lg:h-12 lg:w-12">
                    <ArrowUpRight size={18} className="text-dc-ink" />
                  </div>
                </div>

                <div className="px-3 lg:px-4 pb-2">
                  <h3 className="dc-section-subtitle mb-1 text-dc-ink">
                    {project.title}
                  </h3>
                  <div className="flex items-center justify-between mt-2">
                    <span className="dc-caption text-dc-muted">
                      {project.category}
                    </span>
                    <span className="rounded-full bg-dc-surface px-2.5 py-1 text-[12px] font-normal text-dc-ink lg:px-3 lg:text-[14px]">
                      {project.date}
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          )}
        </motion.div>

        {filteredProjects.length === 0 &&
        <div className="py-20 text-center text-gray-500">
            No projects found in this category.
          </div>
        }
        </div>
      </div>

      <Footer />
    </div>);

}