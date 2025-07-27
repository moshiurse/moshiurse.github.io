import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Experiences from './components/Experiences';
import { useEffect } from 'react';

const App = () => {

  useEffect(() => {
    document.title = 'A.H.M Mosiur Rahaman | Portfolio';
  }, [])
  return (
    <div className="font-sans bg-gray-50 text-gray-800">
      <Navbar />
      
      <main>
        <section id="home" className="min-h-screen">
          <Hero />
        </section>
        
        <motion.section 
          id="about" 
          className="py-20 bg-white"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <About />
        </motion.section>
        
        <section id="projects" className="py-20 bg-gray-50">
          <Projects />
        </section>
        
        <motion.section 
          id="experiences" 
          className="py-20 bg-white"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <Experiences />
        </motion.section>
        
        <section id="contact" className="py-20 bg-gray-50">
          <Contact />
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default App;