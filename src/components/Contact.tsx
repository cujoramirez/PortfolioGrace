import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Mail, Linkedin, Github, Send, MapPin, Sparkles, CheckCircle } from 'lucide-react';

const socialLinks = [
  {
    name: 'LinkedIn',
    icon: Linkedin,
    href: 'https://www.linkedin.com/in/grace-gozali-',
    color: 'hover:text-blue-400 hover:border-blue-400/50',
  },
  {
    name: 'GitHub',
    icon: Github,
    href: 'https://github.com/gwaisey',
    color: 'hover:text-purple-400 hover:border-purple-400/50',
  },
  {
    name: 'Email',
    icon: Mail,
    href: 'mailto:grace.gozali@binus.ac.id',
    color: 'hover:text-pink-400 hover:border-pink-400/50',
  },
];

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormState({ name: '', email: '', message: '' });
    
    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="py-32 relative" ref={ref}>
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute -top-40 -right-40 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-indigo-400 text-sm font-medium tracking-wider uppercase">
            Get In Touch
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-white">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? I'd love to hear from you.
            Let's create something amazing together.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="glass rounded-2xl p-8 h-full">
              <h3 className="text-2xl font-bold text-white mb-6">
                Contact Information
              </h3>

              {/* Contact Details */}
              <div className="space-y-6 mb-8">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-indigo-400" />
                  </div>
                  <div>
                    <p className="text-slate-400 text-sm">Email</p>
                    <a
                      href="mailto:grace.gozali@binus.ac.id"
                      className="text-white hover:text-indigo-400 transition-colors"
                    >
                      grace.gozali@binus.ac.id
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-purple-400" />
                  </div>
                  <div>
                    <p className="text-slate-400 text-sm">Location</p>
                    <p className="text-white">Indonesia</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-pink-500/10 flex items-center justify-center">
                    <Sparkles className="w-5 h-5 text-pink-400" />
                  </div>
                  <div>
                    <p className="text-slate-400 text-sm">Status</p>
                    <p className="text-white">Open to Opportunities</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <p className="text-slate-400 text-sm mb-4">Follow me on</p>
                <div className="flex gap-4">
                  {socialLinks.map((social) => (
                    <motion.a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className={`w-12 h-12 rounded-xl border border-slate-700 flex items-center justify-center text-slate-400 transition-all ${social.color}`}
                    >
                      <social.icon className="w-5 h-5" />
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Decorative Quote */}
              <div className="mt-8 pt-8 border-t border-slate-700/50">
                <p className="text-slate-500 italic text-sm">
                  "I believe great design comes from understanding people. 
                  Let's work together to create experiences that truly matter."
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="glass rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">
                Send a Message
              </h3>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-12 text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center mb-4">
                    <CheckCircle className="w-8 h-8 text-green-400" />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2">
                    Message Sent!
                  </h4>
                  <p className="text-slate-400">
                    Thank you for reaching out. I'll get back to you soon!
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-slate-800/50 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-slate-800/50 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      required
                      rows={5}
                      className="w-full px-4 py-3 rounded-xl bg-slate-800/50 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors resize-none"
                      placeholder="Tell me about your project or idea..."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-4 rounded-xl bg-linear-to-r from-indigo-600 to-purple-600 text-white font-medium flex items-center justify-center gap-2 shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 transition-shadow disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                          className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                        />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Send Message
                      </>
                    )}
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
