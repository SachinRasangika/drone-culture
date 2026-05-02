import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { projects } from '../data/projects';
import { ArrowLeft, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { DC_EASE, dcTransition, dcViewport } from '../lib/motion';
export function ProjectGalleryPage() {
  const { id } = useParams<{
    id: string;
  }>();
  const navigate = useNavigate();
  const reduceMotion = useReducedMotion();
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
      <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-dc-surface">
        <h1 className="dc-section-subtitle text-dc-ink">Project not found</h1>
        <Link
          to="/portfolio"
          className="text-[15px] font-normal text-dc-sage-dark underline-offset-4 hover:underline"
        >
          Back to Portfolio
        </Link>
      </div>);

  }
  return (
    <div className="flex min-h-screen w-full flex-col bg-dc-surface">
      <Navbar />

      {/* Hero Section */}
      <div className="relative flex min-h-[400px] w-full flex-col justify-end pb-12 dc-gutter-x lg:min-h-[500px] lg:pb-20 h-[50vh] lg:h-[60vh]">
        <div className="absolute inset-0 z-0">
          <img
            src={project.coverImage}
            alt={project.title}
            className="h-full w-full object-cover"
          />
        </div>

        <motion.div
          className="relative z-10 dc-inner w-full"
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={dcTransition.enter}
        >
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
        </motion.div>
      </div>

      {/* Gallery Grid */}
      <div className="dc-gutter-x w-full flex-1 dc-section-y">
        <div className="dc-inner">
        <div className="columns-1 gap-4 space-y-4 sm:columns-2 lg:columns-3 lg:gap-6 lg:space-y-6">
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
            viewport={dcViewport}
            transition={{
              duration: reduceMotion ? 0 : 0.5,
              delay: reduceMotion ? 0 : index * 0.08,
              ease: DC_EASE,
            }}
            className="group relative cursor-pointer overflow-hidden break-inside-avoid rounded-dc"
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
          transition={dcTransition.overlay}
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
            transition={dcTransition.micro}
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