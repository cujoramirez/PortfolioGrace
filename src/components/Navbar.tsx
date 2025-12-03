import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navItems = [
  { name: 'Home', id: 'home' },
  { name: 'Projects', id: 'projects' },
  { name: 'Contact', id: 'contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      const scrollPosition = window.scrollY + 200;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      
      // Check if near bottom of page (contact section)
      if (scrollPosition + windowHeight >= documentHeight - 100) {
        setActiveSection('contact');
        return;
      }
      
      // Check projects section - look for the projects header or first project
      const projectsSection = document.getElementById('projects');
      const contactSection = document.getElementById('contact');
      
      if (contactSection) {
        const contactTop = contactSection.offsetTop;
        if (scrollPosition >= contactTop - 100) {
          setActiveSection('contact');
          return;
        }
      }
      
      if (projectsSection) {
        const projectsTop = projectsSection.offsetTop;
        if (scrollPosition >= projectsTop - 100) {
          setActiveSection('projects');
          return;
        }
      }
      
      // Default to home
      setActiveSection('home');
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Call once on mount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setIsOpen(false);
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.19, 1, 0.22, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'py-4' : 'py-6'
        }`}
      >
        <motion.div 
          className={`absolute inset-0 transition-all duration-300 ${
            isScrolled 
              ? 'bg-white/98 backdrop-blur-lg shadow-lg border-b border-gray-200' 
              : 'bg-white/90 backdrop-blur-sm shadow-md'
          }`}
        />
        
        <div className="relative w-full max-w-6xl mx-auto px-4 md:px-8 lg:px-16">
          <div className="flex items-center justify-between h-14">
            {/* Logo */}
            <motion.button
              onClick={() => scrollToSection('home')}
              className="relative z-10 -ml-5 md:ml-0"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="font-serif text-2xl md:text-3xl font-semibold text-gray-900 tracking-tight">
                GMG<span className="text-[#e94560]">.</span>
              </span>
            </motion.button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.id}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * (index + 1), duration: 0.4 }}
                  onClick={() => scrollToSection(item.id)}
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className={`relative text-base font-medium transition-all duration-300 py-2 px-3 rounded-lg ${
                    activeSection === item.id 
                      ? 'text-gray-900' 
                      : 'text-gray-500 hover:text-gray-900 hover:bg-gray-50'
                  }`}
                >
                  {item.name}
                  {activeSection === item.id && (
                    <motion.span
                      layoutId="activeNav"
                      className="absolute -bottom-0.5 left-3 right-3 h-0.5 bg-gradient-to-r from-[#e94560] to-[#ff6b6b] rounded-full"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                </motion.button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden relative z-10 p-2 text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            <div className="absolute inset-0 bg-black/20" onClick={() => setIsOpen(false)} />
            
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: "spring", stiffness: 350, damping: 35 }}
              className="absolute top-0 right-0 w-64 h-full bg-white shadow-xl"
            >
              {/* Close button */}
              <div className="flex justify-end p-4">
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <X size={24} />
                </button>
              </div>
              
              {/* Nav items */}
              <div className="px-4 py-2">
                <nav className="flex flex-col gap-1">
                  {navItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className={`py-4 px-4 text-left text-xl font-semibold rounded-xl transition-all duration-200 ${
                        activeSection === item.id 
                          ? 'text-[#e94560] bg-[#e94560]/10' 
                          : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100'
                      }`}
                    >
                      {item.name}
                    </button>
                  ))}
                </nav>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
