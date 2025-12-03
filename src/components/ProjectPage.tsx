import { motion, useScroll, useTransform } from 'framer-motion';
import { ExternalLink, ArrowUpRight, Eye } from 'lucide-react';
import type { Project } from '../data/projects';
import gizikitaImg from '../assets/gizikita.jpg';
import diamondcutImg from '../assets/diamondcut.jpg';
import whattocookImg from '../assets/whattocook.jpg';
import passportqImg from '../assets/passportq.jpg';
import coursenftImg from '../assets/coursenft.jpg';
import { useRef, useState } from 'react';

// Map project IDs to their images
const projectImages: Record<number, string> = {
  1: gizikitaImg,
  2: diamondcutImg,
  3: whattocookImg,
  4: passportqImg,
  5: coursenftImg,
};

// Color schemes for different projects
const projectColors: Record<number, { gradient: string; accent: string; light: string }> = {
  1: { gradient: 'from-orange-500 to-red-500', accent: '#ea580c', light: 'bg-orange-50' },
  2: { gradient: 'from-slate-700 to-slate-900', accent: '#475569', light: 'bg-slate-50' },
  3: { gradient: 'from-blue-500 to-indigo-600', accent: '#3b82f6', light: 'bg-blue-50' },
  4: { gradient: 'from-sky-500 to-blue-700', accent: '#0284c7', light: 'bg-sky-50' },
  5: { gradient: 'from-purple-500 to-pink-500', accent: '#a855f7', light: 'bg-purple-50' },
};

interface ProjectPageProps {
  project: Project;
  pageNumber: number;
  totalPages: number;
}

export default function ProjectPage({ project, pageNumber, totalPages }: ProjectPageProps) {
  const containerRef = useRef<HTMLElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.9, 1, 1, 0.9]);
  
  const colors = projectColors[project.id] || projectColors[1];
  const isEven = pageNumber % 2 === 0;

  return (
    <section 
      ref={containerRef}
      className={`min-h-screen py-24 md:py-32 flex items-center justify-center relative overflow-hidden ${
        isEven ? 'bg-gray-50' : 'bg-white'
      }`}
    >
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          style={{ y, backgroundColor: colors.accent + '20' }}
          className={`absolute ${isEven ? '-right-20 top-20' : '-left-20 bottom-20'} w-96 h-96 rounded-full blur-3xl opacity-30`}
        />
      </div>

      <div className="w-full max-w-6xl mx-auto px-6 md:px-12 lg:px-16 relative z-10">
        <motion.div
          style={{ opacity, scale }}
          className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${
            isEven ? 'lg:flex-row-reverse' : ''
          }`}
        >
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: isEven ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
            className={`${isEven ? 'lg:order-2' : 'lg:order-1'}`}
          >
            {/* Project Counter */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="flex items-center gap-4 mb-8"
            >
              <div className="flex items-center gap-3">
                <span className={`w-12 h-0.5 bg-linear-to-r ${colors.gradient}`} />
                <span className="text-xs font-mono font-semibold text-gray-400 tracking-widest uppercase">
                  Project
                </span>
              </div>
              <div className="flex items-baseline gap-1">
                <span className="text-3xl font-light" style={{ color: colors.accent }}>
                  {String(pageNumber).padStart(2, '0')}
                </span>
                <span className="text-sm text-gray-300">/</span>
                <span className="text-sm text-gray-400">
                  {String(totalPages).padStart(2, '0')}
                </span>
              </div>
            </motion.div>

            {/* Project Title */}
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium text-gray-900 mb-6 leading-[1.05] tracking-tight hover:text-gray-700 transition-colors duration-300"
            >
              {project.title}
            </motion.h2>

            {/* Metadata */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="flex flex-wrap items-center gap-4 mb-8"
            >
              <span className={`px-4 py-1.5 rounded-full text-sm font-semibold ${colors.light} shadow-sm`} style={{ color: colors.accent }}>
                {project.year}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-gray-300" />
              <span className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
                {project.role}
              </span>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-gray-600 leading-relaxed text-lg mb-10 max-w-xl"
            >
              {project.description}
            </motion.p>

            {/* Links */}
            {project.publicationLinks && project.publicationLinks.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="flex flex-wrap gap-4"
              >
                {project.publicationLinks.map((link, idx) => (
                  <motion.a
                    key={idx}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.03, y: -3 }}
                    whileTap={{ scale: 0.97 }}
                    className="group relative flex items-center gap-2 px-7 py-3.5 bg-gray-900 text-white rounded-full font-medium overflow-hidden shadow-xl shadow-gray-900/20 hover:shadow-2xl hover:shadow-gray-900/30 transition-all duration-300"
                  >
                    <span className={`absolute inset-0 bg-linear-to-r ${colors.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                    <span className="relative">View {link.label}</span>
                    <ArrowUpRight size={16} className="relative transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </motion.a>
                ))}
              </motion.div>
            )}
          </motion.div>

          {/* Project Image */}
          <motion.div
            initial={{ opacity: 0, x: isEven ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.19, 1, 0.22, 1] }}
            className={`relative ${isEven ? 'lg:order-1' : 'lg:order-2'}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Decorative elements */}
            <motion.div
              animate={{ 
                rotate: isHovered ? 6 : 3,
                scale: isHovered ? 1.02 : 1
              }}
              transition={{ duration: 0.5, ease: [0.19, 1, 0.22, 1] }}
              className={`absolute -inset-3 md:-inset-6 bg-linear-to-br ${colors.gradient} rounded-2xl md:rounded-3xl opacity-10`}
            />
            <motion.div
              animate={{ 
                rotate: isHovered ? -3 : -1.5,
                scale: isHovered ? 1.01 : 1
              }}
              transition={{ duration: 0.5, ease: [0.19, 1, 0.22, 1] }}
              className={`absolute -inset-1.5 md:-inset-3 bg-linear-to-br ${colors.gradient} rounded-2xl md:rounded-3xl opacity-5`}
            />
            
            {/* Main Image Container */}
            <motion.div
              whileHover={{ y: -8 }}
              transition={{ duration: 0.5, ease: [0.19, 1, 0.22, 1] }}
              className="relative overflow-hidden rounded-xl md:rounded-2xl shadow-2xl shadow-gray-900/10 group cursor-pointer"
            >
              {/* Image */}
              <div className="relative aspect-4/3 overflow-hidden">
                <motion.img
                  src={projectImages[project.id]}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  animate={{ scale: isHovered ? 1.05 : 1 }}
                  transition={{ duration: 0.7, ease: [0.19, 1, 0.22, 1] }}
                />
                
                {/* Hover Overlay */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: isHovered ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                  className={`absolute inset-0 bg-linear-to-t from-gray-900/60 via-gray-900/20 to-transparent flex items-end justify-between p-6`}
                >
                  <div className="flex items-center gap-2 text-white">
                    <Eye size={18} />
                    <span className="text-sm font-medium">View Project</span>
                  </div>
                  
                  {project.publicationLinks && project.publicationLinks[0] && (
                    <motion.a
                      href={project.publicationLinks[0].url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ExternalLink size={18} />
                    </motion.a>
                  )}
                </motion.div>
              </div>
              
              {/* Bottom gradient line */}
              <div className={`absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r ${colors.gradient}`} />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
