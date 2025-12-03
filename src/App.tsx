import { motion } from 'framer-motion';
import CoverPage from './components/CoverPage';
import ProjectPage from './components/ProjectPage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { projects } from './data/projects';

function App() {
  return (
    <div id="home" className="bg-white min-h-screen">
        <Navbar />
        
        <main>
          <CoverPage />
          
          {/* Projects Section - Wrapper for scroll tracking */}
          <div id="projects">
            {/* Projects Section Header */}
            <section className="py-24 md:py-32 bg-gradient-to-b from-white to-gray-50 w-full">
              <div className="w-full flex justify-center">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7 }}
                  className="w-full max-w-2xl flex flex-col items-center"
                  style={{ textAlign: 'center' }}
                >
                  <motion.span 
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="px-5 py-2 bg-gradient-to-r from-gray-100 to-gray-50 border border-gray-200 rounded-full text-sm text-gray-600 font-semibold mb-8 shadow-sm"
                  >
                    Featured Work
                  </motion.span>
                  
                  <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl font-medium bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 bg-clip-text text-transparent mb-6" style={{ textAlign: 'center', width: '100%' }}>
                    Selected Projects
                  </h2>
                  
                  <p className="text-gray-500 text-lg md:text-xl leading-relaxed" style={{ textAlign: 'center', width: '100%' }}>
                    A curated collection of my work showcasing UI/UX design, 
                    product thinking, and creative problem-solving.
                  </p>
                </motion.div>
              </div>
            </section>
            
            {/* Project Pages */}
            {projects.map((project, index) => (
              <ProjectPage 
                key={project.id}
                project={project} 
                pageNumber={index + 1} 
                totalPages={projects.length} 
              />
            ))}
          </div>
        </main>
        
        <Footer />
      </div>
  );
}

export default App;
