import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { projects } from '../data/projects';
import { ArrowLeft, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
export function ProjectGalleryPage() {
  const { id } = useParams<{
    id: string;
  }>();
  const navigate = useNavigate();
  const project = projects.find((p) => p.id === id);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  // Handle escape key for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightboxIndex(null);
      if (e.key === 'ArrowRight' && lightboxIndex !== null) {
        setLightboxIndex((prev) => (prev! + 1) % project!.gallery.length);
      }
      if (e.key === 'ArrowLeft' && lightboxIndex !== null) {
        setLightboxIndex(
          (prev) =>
          (prev! - 1 + project!.gallery.length) % project!.gallery.length
        );
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, project]);
  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center flex-col gap-4">
        <h1 className="dc-section-subtitle text-[#1a1a1a]">Project not found</h1>
        <Link to="/portfolio" className="text-blue-500 hover:underline">
          Back to Portfolio
        </Link>
      </div>);

  }
  return (
    <div className="w-full min-h-screen bg-white flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <div className="relative w-full h-[50vh] lg:h-[60vh] min-h-[400px] lg:min-h-[500px] flex flex-col justify-end pb-12 lg:pb-20 px-5 sm:px-8 lg:px-16">
        <div className="absolute inset-0 z-0">
          <img
            src={project.coverImage}
            alt={project.title}
            className="h-full w-full object-cover"
          />
        </div>

        <div className="relative z-10 max-w-[1400px] mx-auto w-full">
          <button
            onClick={() => navigate('/portfolio')}
            className="group mb-6 flex items-center gap-2 text-white/90 transition-colors [text-shadow:0_1px_10px_rgba(0,0,0,0.45)] hover:text-white lg:mb-8">
            
            <ArrowLeft
              size={18}
              className="group-hover:-translate-x-1 transition-transform" />
            
            <span className="text-[14px] lg:text-[16px]">
              Back to Portfolio
            </span>
          </button>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 lg:gap-8">
            <div className="max-w-[800px]">
              <div className="flex items-center gap-3 lg:gap-4 mb-4 lg:mb-6">
                <div className="dc-section-badge">{project.category}</div>
                <span className="text-[13px] text-white/90 [text-shadow:0_1px_8px_rgba(0,0,0,0.4)] lg:text-[15px]">
                  {project.date}
                </span>
              </div>
              <h1 className="dc-page-title mb-4 text-white [text-shadow:0_2px_20px_rgba(0,0,0,0.45)] lg:mb-6">
                {project.title}
              </h1>
              <p className="dc-section-body max-w-[600px] text-white/95 [text-shadow:0_1px_12px_rgba(0,0,0,0.4)]">
                {project.description}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="flex-1 px-5 sm:px-8 lg:px-16 py-12 lg:py-24 max-w-[1600px] mx-auto w-full">
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 lg:gap-6 space-y-4 lg:space-y-6">
          {project.gallery.map((img, index) =>
          <motion.div
            key={index}
            initial={{
              opacity: 0,
              y: 20
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 0.5,
              delay: index * 0.1
            }}
            className="break-inside-avoid cursor-pointer group relative rounded-[16px] lg:rounded-[24px] overflow-hidden"
            onClick={() => setLightboxIndex(index)}>
            
              <img
              src={img}
              alt={`${project.title} - Image ${index + 1}`}
              className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105" />
            
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
            </motion.div>
          )}
        </div>
      </div>

      <Footer />

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null &&
        <motion.div
          initial={{
            opacity: 0
          }}
          animate={{
            opacity: 1
          }}
          exit={{
            opacity: 0
          }}
          className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex items-center justify-center">
          
            <button
            onClick={() => setLightboxIndex(null)}
            className="absolute top-4 right-4 lg:top-8 lg:right-8 text-white/70 hover:text-white p-2 rounded-full hover:bg-white/10 transition-colors z-[110]">
            
              <X size={28} className="lg:w-8 lg:h-8" />
            </button>

            <button
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIndex(
                (prev) =>
                (prev! - 1 + project.gallery.length) %
                project.gallery.length
              );
            }}
            className="absolute left-2 lg:left-8 text-white/70 hover:text-white p-2 lg:p-4 rounded-full hover:bg-white/10 transition-colors z-[110]">
            
              <ChevronLeft size={32} className="lg:w-10 lg:h-10" />
            </button>

            <button
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIndex((prev) => (prev! + 1) % project.gallery.length);
            }}
            className="absolute right-2 lg:right-8 text-white/70 hover:text-white p-2 lg:p-4 rounded-full hover:bg-white/10 transition-colors z-[110]">
            
              <ChevronRight size={32} className="lg:w-10 lg:h-10" />
            </button>

            <motion.img
            key={lightboxIndex}
            initial={{
              opacity: 0,
              scale: 0.95
            }}
            animate={{
              opacity: 1,
              scale: 1
            }}
            exit={{
              opacity: 0,
              scale: 0.95
            }}
            transition={{
              duration: 0.2
            }}
            src={project.gallery[lightboxIndex]}
            alt="Gallery full size"
            className="max-w-[90vw] max-h-[80vh] lg:max-h-[90vh] object-contain" />
          

            <div className="absolute bottom-6 lg:bottom-8 text-white/50 text-[13px] lg:text-[14px]">
              {lightboxIndex + 1} / {project.gallery.length}
            </div>
          </motion.div>
        }
      </AnimatePresence>
    </div>);

}