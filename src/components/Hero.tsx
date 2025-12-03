import { motion } from 'framer-motion';
import { ArrowDown, Sparkles, MapPin, GraduationCap } from 'lucide-react';
import { useMemo } from 'react';

// Pre-generate particle data outside render
const generateParticles = () => 
  Array.from({ length: 20 }, (_, i) => ({
    id: i,
    initialX: Math.random() * 100,
    initialY: Math.random() * 100,
    animateY: Math.random() * -100,
    duration: 3 + Math.random() * 5,
    delay: Math.random() * 2,
  }));

export default function Hero() {
  const particles = useMemo(() => generateParticles(), []);
  
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-20 left-10 w-72 h-72 bg-indigo-600/30 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute bottom-20 right-10 w-96 h-96 bg-purple-600/30 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-pink-600/20 rounded-full blur-3xl"
        />
      </div>

      {/* Floating Particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          initial={{
            left: `${particle.initialX}%`,
            top: `${particle.initialY}%`,
          }}
          animate={{
            y: [0, particle.animateY, 0],
            opacity: [0.2, 0.8, 0.2],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
          }}
          className="absolute w-1 h-1 bg-white rounded-full"
        />
      ))}

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-center lg:text-left"
          >
            {/* Tag */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6"
            >
              <Sparkles className="w-4 h-4 text-purple-400" />
              <span className="text-sm text-slate-300">Available for opportunities</span>
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4"
            >
              <span className="text-white">Hello, I'm</span>
              <br />
              <span className="gradient-text">Grace Mae Gozali</span>
            </motion.h1>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl md:text-2xl text-slate-400 italic mb-6"
            >
              "Transforming user needs into impactful digital solutions."
            </motion.p>

            {/* Info Tags */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-3 justify-center lg:justify-start mb-8"
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-sm">
                <GraduationCap className="w-4 h-4" />
                BINUS University (2023-2027)
              </span>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-sm">
                <MapPin className="w-4 h-4" />
                Indonesia
              </span>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-slate-400 text-lg leading-relaxed max-w-xl mb-8"
            >
              I am an undergraduate Computer Science student passionate about creating 
              user-centered digital experiences. Specializing in Software Development with 
              aspirations to become a <span className="text-white font-medium">Product Designer</span> or{' '}
              <span className="text-white font-medium">UX Strategist</span> who bridges creativity and functionality.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-wrap gap-4 justify-center lg:justify-start"
            >
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-full bg-linear-to-r from-indigo-600 to-purple-600 text-white font-medium shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 transition-all"
              >
                View My Work
              </motion.a>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-full glass text-white font-medium hover:bg-white/10 transition-all"
              >
                Get In Touch
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Content - Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative flex justify-center"
          >
            {/* Decorative Ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              className="absolute w-80 h-80 md:w-96 md:h-96 rounded-full border border-dashed border-indigo-500/30"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
              className="absolute w-72 h-72 md:w-80 md:h-80 rounded-full border border-dashed border-purple-500/30"
            />

            {/* Profile Image Container */}
            <div className="relative">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="relative w-64 h-80 md:w-80 md:h-96 rounded-2xl overflow-hidden gradient-border glow"
              >
                <div className="absolute inset-1px rounded-2xl overflow-hidden bg-linear-to-b from-slate-800 to-slate-900">
                  {/* Placeholder for profile image - using gradient as fallback */}
                  <div className="w-full h-full bg-linear-to-br from-slate-700 via-slate-800 to-slate-900 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-linear-to-br from-indigo-500 to-purple-500 flex items-center justify-center">
                        <span className="text-5xl font-bold text-white">G</span>
                      </div>
                      <p className="text-slate-400 text-sm">Grace Mae Gozali</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Floating Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1, type: 'spring' }}
                className="absolute -bottom-4 -right-4 px-4 py-2 rounded-full glass shadow-xl"
              >
                <span className="text-sm font-medium text-white">UI/UX Designer</span>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.a
            href="#about"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-slate-400 hover:text-white transition-colors"
          >
            <span className="text-sm">Scroll Down</span>
            <ArrowDown className="w-5 h-5" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
