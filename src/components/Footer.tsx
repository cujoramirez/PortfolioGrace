import { ArrowUpRight } from 'lucide-react';
import { personalInfo } from '../data/projects';
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer id="contact" className="bg-gradient-to-b from-white to-gray-50 border-t border-gray-100">
      {/* Main Footer Content */}
      <div className="w-full py-16 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-10">
        <div className="flex flex-col items-center justify-center">
        
        {/* Header Section - Centered */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-20 flex flex-col items-center w-full"
        >
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 bg-clip-text text-transparent mb-4 md:mb-6">
            Let's Connect
          </h2>
          <p className="text-gray-500 text-base sm:text-lg md:text-xl max-w-2xl leading-relaxed text-center px-2">
            I'm always excited to discuss new projects, creative ideas, or opportunities to collaborate.
          </p>
        </motion.div>

        {/* Contact Grid - Centered */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full flex justify-center mb-12 md:mb-20"
        >
          <div className="w-full max-w-3xl flex flex-col md:flex-row items-stretch justify-center gap-0 divide-y md:divide-y-0 md:divide-x divide-gray-200 border border-gray-200 rounded-2xl md:rounded-3xl overflow-hidden bg-white shadow-lg shadow-gray-900/5 hover:shadow-xl transition-shadow duration-500">
            
            {/* Email */}
            <motion.div 
              whileHover={{ backgroundColor: 'rgba(233, 69, 96, 0.03)' }}
              className="flex-1 px-6 md:px-8 py-6 md:py-10 flex flex-col items-center justify-center gap-2 md:gap-3 transition-colors duration-300"
            >
              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest text-center">Email</p>
              <a 
                href={`mailto:${personalInfo.email}`}
                className="text-sm sm:text-base md:text-lg text-gray-900 hover:text-[#e94560] transition-colors font-medium group text-center break-all"
              >
                <span className="border-b-2 border-transparent group-hover:border-[#e94560] transition-all duration-300">{personalInfo.email}</span>
              </a>
            </motion.div>
            
            {/* Phone */}
            <motion.div 
              whileHover={{ backgroundColor: 'rgba(233, 69, 96, 0.03)' }}
              className="flex-1 px-6 md:px-8 py-6 md:py-10 flex flex-col items-center justify-center gap-2 md:gap-3 transition-colors duration-300"
            >
              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest text-center">Phone</p>
              <a 
                href={`tel:${personalInfo.phone}`}
                className="text-sm sm:text-base md:text-lg text-gray-900 hover:text-[#e94560] transition-colors font-medium group text-center"
              >
                <span className="border-b-2 border-transparent group-hover:border-[#e94560] transition-all duration-300">{personalInfo.phone}</span>
              </a>
            </motion.div>
            
            {/* LinkedIn */}
            <motion.div 
              whileHover={{ backgroundColor: 'rgba(233, 69, 96, 0.03)' }}
              className="flex-1 px-6 md:px-8 py-6 md:py-10 flex flex-col items-center justify-center gap-2 md:gap-3 transition-colors duration-300"
            >
              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest text-center">LinkedIn</p>
              <a 
                href={`https://${personalInfo.linkedin}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm sm:text-base md:text-lg text-gray-900 hover:text-[#e94560] transition-colors font-medium flex items-center justify-center gap-2 group"
              >
                <span className="border-b-2 border-transparent group-hover:border-[#e94560] transition-all duration-300">Connect with me</span>
                <ArrowUpRight size={14} className="md:w-4 md:h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </motion.div>
            
          </div>
        </motion.div>

        {/* Logo - Centered */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <motion.span 
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="font-serif text-4xl sm:text-5xl md:text-6xl font-medium bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent inline-block cursor-default"
          >
           GMG<span className="text-[#e94560]">.</span>
          </motion.span>
        </motion.div>
        </div>
        
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-100 bg-gray-50">
        <div className="w-full py-4 md:py-6 px-4 sm:px-6 lg:px-10">
          <p className="text-center text-xs sm:text-sm text-gray-500">
            © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
