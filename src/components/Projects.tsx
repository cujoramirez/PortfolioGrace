import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ExternalLink, Github, ChevronLeft, ChevronRight, Eye } from 'lucide-react';

export interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  year: string;
  role: string;
  category: string;
  images: string[];
  technologies: string[];
  links: {
    figma?: string;
    github?: string;
    live?: string;
  };
  color: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Gizi Kita',
    description: 'A web platform supporting Indonesia\'s Makan Bergizi Gratis program',
    longDescription: 'A comprehensive web platform that supports Indonesia\'s Makan Bergizi Gratis program by streamlining school registration, displaying weekly meal menus, collecting real-time feedback, and providing AI-powered insights to improve transparency and efficiency in meal distribution.',
    year: '2025',
    role: 'UI Designer',
    category: 'Web Platform',
    images: ['/gizikita-1.png', '/gizikita-2.png', '/gizikita-3.png'],
    technologies: ['Figma', 'UI Design', 'User Research', 'AI Integration'],
    links: {
      figma: 'https://www.figma.com/design/Ok4B100vQCJcPuvPcdsJ3g/Figma-Ureeka-Group-1?node-id=0-1',
    },
    color: 'from-orange-500 to-red-500',
  },
  {
    id: 2,
    title: 'DiamondCut Motors',
    description: 'Indonesia\'s trusted luxury car reseller platform',
    longDescription: 'DiamondCut Motors: Indonesia\'s trusted luxury car reseller since 1998, delivering top brands with quality and reliability. A Human-Computer Interaction project featuring elegant showroom displays and seamless user experience.',
    year: '2024',
    role: 'UI Designer',
    category: 'Web Platform',
    images: ['/diamondcut-1.png', '/diamondcut-2.png'],
    technologies: ['Figma', 'UI/UX Design', 'HCI Principles', 'Web Design'],
    links: {
      github: 'https://github.com/gwaisey/DiamondCut',
    },
    color: 'from-slate-600 to-slate-800',
  },
  {
    id: 3,
    title: 'WhatToCook',
    description: 'AI-powered recipe recommender app',
    longDescription: 'An AI-powered recipe recommender that suggests dishes based on available ingredients without any food waste. Features include material input, saved recipes, cooking level selection, and cuisine preferences.',
    year: '2024',
    role: 'AI Integrator',
    category: 'Mobile App',
    images: ['/whattocook-1.png', '/whattocook-2.png'],
    technologies: ['React Native', 'AI/ML', 'UI Design', 'Mobile Development'],
    links: {
      github: 'https://github.com/gwaisey/WhatToCook',
    },
    color: 'from-blue-500 to-indigo-600',
  },
  {
    id: 4,
    title: 'PassportQ',
    description: 'Digital queue management for immigration offices',
    longDescription: 'PassportQ is a digital queue management application designed to streamline the process of queuing at immigration offices. Features include real-time queue status, estimated wait times, and notification preferences via email or SMS.',
    year: '2024',
    role: 'UI Designer',
    category: 'Mobile App',
    images: ['/passportq-1.png', '/passportq-2.png'],
    technologies: ['Figma', 'Mobile UI', 'UX Research', 'Prototyping'],
    links: {
      figma: 'https://www.figma.com/design/McpeBsvny2IEaQxtAPRW69/Untitled?node-id=0-1',
    },
    color: 'from-blue-600 to-blue-800',
  },
  {
    id: 5,
    title: 'NCourage',
    description: 'Web3 learning platform with NFT rewards',
    longDescription: 'NCourage is a Web3 platform where users earn NFT points by completing paid or free courses, unlocking exclusive content and rewards. Features gamification elements to encourage continuous learning.',
    year: '2025',
    role: 'UI Designer',
    category: 'Web Platform',
    images: ['/ncourage-1.png', '/ncourage-2.png'],
    technologies: ['Figma', 'Web3 Design', 'NFT Integration', 'Gamification'],
    links: {
      figma: 'https://www.figma.com/design/uG5CE4ETDROd5pxejpV5kg/NCourage?node-id=0-1',
    },
    color: 'from-purple-500 to-pink-500',
  },
];

const categories = ['All', 'Web Platform', 'Mobile App'];

function ProjectCard({ project, index, onClick }: { project: Project; index: number; onClick: () => void }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      onClick={onClick}
      className="group cursor-pointer"
    >
      <div className="relative glass rounded-2xl overflow-hidden">
        {/* Project Image */}
        <div className={`h-48 md:h-56 bg-linear-to-br ${project.color} relative overflow-hidden`}>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-6xl font-bold text-white/20">{project.title[0]}</span>
          </div>
          
          {/* Overlay on hover */}
          <motion.div
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            className="absolute inset-0 bg-black/60 flex items-center justify-center gap-4"
          >
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="p-3 rounded-full bg-white/20 backdrop-blur-sm"
            >
              <Eye className="w-6 h-6 text-white" />
            </motion.div>
          </motion.div>

          {/* Category Badge */}
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 rounded-full glass text-xs font-medium text-white">
              {project.category}
            </span>
          </div>

          {/* Year Badge */}
          <div className="absolute top-4 right-4">
            <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-xs font-medium text-white">
              {project.year}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-indigo-400 transition-colors">
            {project.title}
          </h3>
          <p className="text-slate-400 text-sm mb-4 line-clamp-2">
            {project.description}
          </p>

          {/* Role */}
          <div className="flex items-center gap-2 mb-4">
            <span className="text-xs text-slate-500">Role:</span>
            <span className="text-xs font-medium text-indigo-400">{project.role}</span>
          </div>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2">
            {project.technologies.slice(0, 3).map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 rounded-md bg-slate-800/50 text-xs text-slate-400"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 3 && (
              <span className="px-2 py-1 rounded-md bg-slate-800/50 text-xs text-slate-400">
                +{project.technologies.length - 3}
              </span>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-4xl max-h-[90vh] overflow-y-auto glass rounded-3xl"
      >
        {/* Header Image */}
        <div className={`relative h-64 md:h-80 bg-linear-to-br ${project.color}`}>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-9xl font-bold text-white/20">{project.title[0]}</span>
          </div>

          {/* Image Navigation */}
          {project.images.length > 1 && (
            <>
              <button
                onClick={() => setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length)}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/30 hover:bg-black/50 transition-colors"
              >
                <ChevronLeft className="w-6 h-6 text-white" />
              </button>
              <button
                onClick={() => setCurrentImageIndex((prev) => (prev + 1) % project.images.length)}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/30 hover:bg-black/50 transition-colors"
              >
                <ChevronRight className="w-6 h-6 text-white" />
              </button>
            </>
          )}

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-black/30 hover:bg-black/50 transition-colors text-white"
          >
            ✕
          </button>

          {/* Image Indicators */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {project.images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentImageIndex ? 'bg-white' : 'bg-white/30'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="p-8">
          <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
            <div>
              <h2 className="text-3xl font-bold text-white mb-2">{project.title}</h2>
              <div className="flex items-center gap-4 text-sm">
                <span className="text-slate-400">{project.year}</span>
                <span className="text-indigo-400">{project.role}</span>
                <span className="px-3 py-1 rounded-full bg-slate-800 text-slate-300">
                  {project.category}
                </span>
              </div>
            </div>

            {/* Links */}
            <div className="flex gap-3">
              {project.links.github && (
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full glass hover:bg-white/10 transition-colors"
                >
                  <Github className="w-5 h-5 text-white" />
                </a>
              )}
              {project.links.figma && (
                <a
                  href={project.links.figma}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full glass hover:bg-white/10 transition-colors"
                >
                  <ExternalLink className="w-5 h-5 text-white" />
                </a>
              )}
              {project.links.live && (
                <a
                  href={project.links.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3 rounded-full bg-linear-to-r from-indigo-600 to-purple-600 text-white font-medium flex items-center gap-2"
                >
                  <ExternalLink className="w-4 h-4" />
                  View Live
                </a>
              )}
            </div>
          </div>

          <p className="text-slate-300 leading-relaxed mb-8">
            {project.longDescription}
          </p>

          {/* Technologies */}
          <div>
            <h3 className="text-white font-semibold mb-4">Technologies & Skills</h3>
            <div className="flex flex-wrap gap-3">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 rounded-full glass text-sm text-slate-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = projects.filter(
    (project) => activeCategory === 'All' || project.category === activeCategory
  );

  return (
    <section id="projects" className="py-32 relative" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-indigo-400 text-sm font-medium tracking-wider uppercase">
            My Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-white">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            A collection of projects that showcase my skills in UI/UX design,
            product thinking, and technical implementation.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === category
                  ? 'bg-linear-to-r from-indigo-600 to-purple-600 text-white shadow-lg shadow-indigo-500/25'
                  : 'glass text-slate-400 hover:text-white hover:bg-white/10'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </motion.div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
