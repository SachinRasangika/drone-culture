import React, { useState } from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { projects } from '../data/projects';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

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
  const filteredProjects =
  activeCategory === 'All' ?
  projects :
  projects.filter((p) => p.category === activeCategory);
  return (
    <div className="w-full min-h-screen bg-[#f5f5f5] flex flex-col">
      <Navbar />

      {/* Hero Banner */}
      <div className="relative w-full h-[30vh] lg:h-[40vh] min-h-[250px] lg:min-h-[350px] bg-[#1a1a1a] flex flex-col justify-center items-center pt-20">
        <div className="absolute inset-0 z-0">
          <img
            src={portfolioHeroBg}
            alt=""
            className="h-full w-full object-cover"
            aria-hidden
          />
        </div>

        <div className="relative z-10 px-5 text-center sm:px-8">
          <div className="dc-section-badge mb-4 inline-block lg:mb-6">Our Portfolio</div>
          <h1 className="dc-page-title text-white [text-shadow:0_2px_20px_rgba(0,0,0,0.5)]">
            Explore Our Work
          </h1>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 px-5 sm:px-8 lg:px-16 py-12 lg:py-20 max-w-[1600px] mx-auto w-full">
        {/* Filters */}
        <div className="flex overflow-x-auto flex-nowrap lg:flex-wrap justify-start lg:justify-center gap-2 lg:gap-3 mb-10 lg:mb-16 pb-4 lg:pb-0 scrollbar-hide -mx-5 px-5 lg:mx-0 lg:px-0">
          {categories.map((category) =>
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`whitespace-nowrap px-5 lg:px-6 py-2.5 lg:py-3 rounded-full text-[14px] lg:text-[15px] font-medium transition-colors flex-shrink-0 ${activeCategory === category ? 'bg-[#1a1a1a] text-white' : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'}`}>
            
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
              duration: 0.4,
              delay: index * 0.05
            }}
            key={project.id}>
            
              <Link
              to={`/project/${project.id}`}
              className="group cursor-pointer block bg-white p-3 lg:p-4 rounded-[24px] lg:rounded-[32px] shadow-sm hover:shadow-md transition-shadow">
              
                <div className="relative w-full h-[240px] sm:h-[280px] lg:h-[340px] rounded-[20px] lg:rounded-[24px] overflow-hidden mb-4 lg:mb-5">
                  <img
                  src={project.coverImage}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  {/* Hover Arrow */}
                  <div className="absolute top-4 right-4 lg:top-5 lg:right-5 w-10 h-10 lg:w-12 lg:h-12 bg-white rounded-full flex items-center justify-center opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 shadow-lg">
                    <ArrowUpRight size={18} className="text-[#1a1a1a]" />
                  </div>
                </div>

                <div className="px-3 lg:px-4 pb-2">
                  <h3 className="dc-section-subtitle text-[#1a1a1a] mb-1">
                    {project.title}
                  </h3>
                  <div className="flex items-center justify-between mt-2">
                    <span className="dc-caption text-[#888]">
                      {project.category}
                    </span>
                    <span className="text-[12px] lg:text-[14px] font-medium text-[#1a1a1a] bg-gray-100 px-2.5 lg:px-3 py-1 rounded-full">
                      {project.date}
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          )}
        </motion.div>

        {filteredProjects.length === 0 &&
        <div className="text-center py-20 text-gray-500">
            No projects found in this category.
          </div>
        }
      </div>

      <Footer />
    </div>);

}