import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code, Palette, Lightbulb, Users } from 'lucide-react';

const skills = [
  { name: 'UI Design', level: 90, color: 'from-indigo-500 to-blue-500' },
  { name: 'UX Research', level: 85, color: 'from-purple-500 to-pink-500' },
  { name: 'Figma', level: 95, color: 'from-pink-500 to-rose-500' },
  { name: 'React/TypeScript', level: 75, color: 'from-cyan-500 to-blue-500' },
  { name: 'Prototyping', level: 88, color: 'from-emerald-500 to-teal-500' },
];

const values = [
  {
    icon: Palette,
    title: 'Creative Design',
    description: 'Crafting visually stunning interfaces that captivate users',
    color: 'text-pink-400 bg-pink-500/10',
  },
  {
    icon: Users,
    title: 'User-Centered',
    description: 'Prioritizing human needs in every design decision',
    color: 'text-purple-400 bg-purple-500/10',
  },
  {
    icon: Code,
    title: 'Technical Skills',
    description: 'Bridging the gap between design and development',
    color: 'text-blue-400 bg-blue-500/10',
  },
  {
    icon: Lightbulb,
    title: 'Innovation',
    description: 'Exploring cutting-edge solutions for modern challenges',
    color: 'text-amber-400 bg-amber-500/10',
  },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-32 relative" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-indigo-400 text-sm font-medium tracking-wider uppercase">
            About Me
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-white">
            Passionate About{' '}
            <span className="gradient-text">Digital Experiences</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Combining creativity with technical expertise to build meaningful
            products that make a difference.
          </p>
        </motion.div>

        {/* Values Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
        >
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="glass p-6 rounded-2xl text-center group cursor-pointer"
            >
              <div
                className={`w-14 h-14 rounded-xl ${value.color} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}
              >
                <value.icon className="w-7 h-7" />
              </div>
              <h3 className="text-white font-semibold text-lg mb-2">
                {value.title}
              </h3>
              <p className="text-slate-400 text-sm">{value.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Skills Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Bio */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold text-white mb-6">
              My Journey in Tech
            </h3>
            <div className="space-y-4 text-slate-400 leading-relaxed">
              <p>
                As a Computer Science student at{' '}
                <span className="text-indigo-400 font-medium">
                  Binus University
                </span>
                , I've been on an exciting journey of discovery in the digital
                realm. My specialization in Software Development has given me a
                solid foundation in technical skills.
              </p>
              <p>
                However, my true passion lies in the intersection of design and
                technology. I believe that great products aren't just
                functional—they're delightful to use and solve real human
                problems.
              </p>
              <p>
                I aspire to become a{' '}
                <span className="text-purple-400 font-medium">
                  Product Designer
                </span>{' '}
                or{' '}
                <span className="text-pink-400 font-medium">UX Strategist</span>
                , leveraging both my technical background and creative instincts
                to build products that matter.
              </p>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-6 mt-8">
              {[
                { value: '5+', label: 'Projects' },
                { value: '2+', label: 'Years Learning' },
                { value: '∞', label: 'Curiosity' },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-3xl font-bold gradient-text">
                    {stat.value}
                  </div>
                  <div className="text-slate-500 text-sm mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right - Skills */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="glass p-8 rounded-2xl"
          >
            <h3 className="text-xl font-bold text-white mb-6">
              Skills & Expertise
            </h3>
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                >
                  <div className="flex justify-between mb-2">
                    <span className="text-white font-medium">{skill.name}</span>
                    <span className="text-slate-400">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${skill.level}%` } : {}}
                      transition={{ duration: 1, delay: 0.8 + index * 0.1 }}
                      className={`h-full bg-linear-to-r ${skill.color} rounded-full`}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
