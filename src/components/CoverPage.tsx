import { personalInfo } from '../data/projects';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown, ArrowRight, MapPin, GraduationCap } from 'lucide-react';
import { useRef } from 'react';

export default function CoverPage() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.98]);

  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const skills = ['UI/UX Design', 'Figma', 'Web Development', 'User Research', 'Prototyping'];

  const stats = [
    { value: '5', label: 'Projects Completed' },
    { value: '2', label: 'Years of Learning' }
  ];

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen bg-white overflow-hidden"
    >
      {/* Subtle Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-linear-to-bl from-rose-50 to-transparent rounded-full blur-3xl opacity-60" />
        <div className="absolute bottom-0 left-0 w-[250px] md:w-[500px] h-[250px] md:h-[500px] bg-linear-to-tr from-amber-50 to-transparent rounded-full blur-3xl opacity-40" />
      </div>

      {/* Main Content */}
      <motion.div 
        style={{ opacity, scale }}
        className="relative z-10 min-h-screen flex items-center justify-center pt-20 md:pt-28 pb-32 md:pb-40"
      >
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-16 lg:gap-24 items-center">
            
            {/* Left Column - Text */}
            <div className="order-2 lg:order-1 flex flex-col items-center lg:items-start text-center lg:text-left">
              {/* Name */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <p className="text-gray-400 text-xs md:text-sm font-medium uppercase tracking-wider mb-3 md:mb-4">Hello, I'm</p>
                <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium text-gray-900 mb-4 md:mb-6 leading-[1.05] tracking-tight">
                  {personalInfo.name}
                </h1>
              </motion.div>

              {/* Role */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-lg sm:text-xl md:text-2xl lg:text-3xl mb-4 md:mb-5 font-light"
              >
                <span className="bg-gradient-to-r from-[#e94560] to-[#ff6b6b] bg-clip-text text-transparent font-medium">UI/UX Designer</span>
                <span className="text-gray-300 mx-2 md:mx-3">&</span>
                <span className="bg-gradient-to-r from-[#ff6b6b] to-[#feca57] bg-clip-text text-transparent font-medium">Software Developer</span>
              </motion.p>

              {/* Tagline */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="font-serif italic text-base md:text-lg text-gray-500 mb-4 md:mb-6"
              >
                {personalInfo.tagline}
              </motion.p>

              {/* Info Tags */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="flex flex-wrap gap-2 md:gap-3 mb-6 md:mb-8 justify-center lg:justify-start"
              >
                <span className="inline-flex items-center gap-1.5 md:gap-2 px-3 md:px-4 py-1.5 md:py-2 bg-gray-100 rounded-full text-xs md:text-sm text-gray-600">
                  <GraduationCap size={14} className="text-gray-500 md:w-4 md:h-4" />
                  BINUS University '27
                </span>
                <span className="inline-flex items-center gap-1.5 md:gap-2 px-3 md:px-4 py-1.5 md:py-2 bg-gray-100 rounded-full text-xs md:text-sm text-gray-600">
                  <MapPin size={14} className="text-gray-500 md:w-4 md:h-4" />
                  Indonesia
                </span>
              </motion.div>

              {/* Bio */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="text-sm md:text-base text-gray-500 leading-relaxed mb-8 md:mb-10 max-w-lg px-2 md:px-0"
              >
                Passionate about creating user-centered digital experiences that bridge 
                creativity and functionality. Aspiring to become a Product Designer or UX Strategist.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="flex flex-row gap-3 md:gap-4 justify-center lg:justify-start"
              >
                <motion.button
                  onClick={scrollToProjects}
                  whileHover={{ scale: 1.03, y: -3 }}
                  whileTap={{ scale: 0.97 }}
                  className="group relative flex items-center justify-center gap-2 md:gap-3 px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 bg-gray-900 text-white rounded-full font-medium shadow-xl shadow-gray-900/25 hover:shadow-2xl hover:shadow-gray-900/30 hover:bg-gray-800 transition-all duration-300 overflow-hidden text-xs sm:text-sm md:text-base"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-[#e94560] to-[#ff6b6b] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <span className="relative">View My Work</span>
                  <ArrowRight size={14} className="relative transition-transform duration-300 group-hover:translate-x-1 sm:w-4 sm:h-4 md:w-[18px] md:h-[18px]" />
                </motion.button>
                
                <motion.a
                  href={`https://${personalInfo.linkedin}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.03, y: -3 }}
                  whileTap={{ scale: 0.97 }}
                  className="group flex items-center justify-center gap-2 md:gap-3 px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 bg-white border-2 border-gray-200 text-gray-700 rounded-full font-medium hover:border-[#e94560] hover:text-[#e94560] hover:shadow-lg transition-all duration-300 text-xs sm:text-sm md:text-base"
                >
                  <span>Connect</span>
                  <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1 group-hover:rotate-[-45deg] sm:w-4 sm:h-4 md:w-[18px] md:h-[18px]" />
                </motion.a>
              </motion.div>
            </div>

            {/* Right Column - Profile Image */}
            <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="relative"
              >
                {/* Decorative ring */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
                  className="absolute -inset-3 md:-inset-4 rounded-3xl border border-dashed border-gray-200"
                />
                
                {/* Image Container */}
                <div className="relative group">
                  <div className="absolute -inset-1 bg-linear-to-br from-rose-100 via-amber-50 to-blue-100 rounded-3xl blur-lg opacity-60 group-hover:opacity-80 transition-opacity" />
                  
                  <div className="relative w-56 h-64 sm:w-64 sm:h-72 md:w-72 md:h-80 lg:w-80 lg:h-[360px] rounded-2xl overflow-hidden border-4 border-white shadow-2xl">
                    <img 
                      src="/profilepicture.jpg" 
                      alt="Grace Mae Gozali" 
                      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  
                  {/* Status Badge */}
                  <div className="absolute -bottom-2 -right-2 md:-bottom-3 md:-right-3 flex items-center gap-1.5 md:gap-2 px-3 md:px-4 py-1.5 md:py-2 bg-white rounded-full shadow-lg border border-gray-100">
                    <span className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-green-500 animate-pulse"></span>
                    <span className="text-xs md:text-sm font-medium text-gray-700">Open to Work</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Skills & Stats Row - Desktop: side by side, Mobile: stacked */}
          <div className="mt-16 md:mt-24 flex flex-col lg:flex-row lg:items-start lg:justify-between gap-12 lg:gap-8">
            
            {/* Stats - Left aligned on desktop */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.1 }}
              className="flex justify-center lg:justify-start gap-8 sm:gap-12 md:gap-16 order-2 lg:order-1"
            >
              {stats.map((stat) => (
                <motion.div 
                  key={stat.label} 
                  className="text-center lg:text-left group"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="text-4xl sm:text-5xl md:text-6xl font-light bg-gradient-to-br from-gray-900 to-gray-600 bg-clip-text text-transparent mb-1 md:mb-2 group-hover:from-[#e94560] group-hover:to-[#ff6b6b] transition-all duration-300">
                    {stat.value}
                  </p>
                  <p className="text-xs md:text-sm text-gray-500 font-medium">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>

            {/* Skills - Right aligned on desktop */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.9 }}
              className="order-1 lg:order-2"
            >
              <div className="flex flex-wrap justify-center lg:justify-end gap-2 md:gap-3 max-w-xl lg:max-w-md mx-auto lg:mx-0">
                {skills.map((skill, index) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1 + index * 0.05 }}
                    whileHover={{ scale: 1.05, y: -3 }}
                    className="px-4 md:px-5 py-2 md:py-2.5 bg-white border border-gray-200 rounded-full text-xs md:text-sm text-gray-700 font-medium shadow-sm hover:shadow-lg hover:border-[#e94560]/40 hover:text-[#e94560] transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3 }}
        className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 z-20"
      >
        <motion.button
          onClick={scrollToProjects}
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-1.5 md:gap-2 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <span className="text-[10px] md:text-xs font-medium tracking-widest uppercase">Scroll</span>
          <ChevronDown size={16} className="md:w-[18px] md:h-[18px]" />
        </motion.button>
      </motion.div>
    </section>
  );
}
