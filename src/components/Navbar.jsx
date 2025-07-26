import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiHome, FiUser, FiBriefcase, FiFileText, FiMail } from 'react-icons/fi';
import { AiOutlineExperiment } from 'react-icons/ai';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Section detection logic
      const sections = ['home', 'about', 'projects', 'experiences', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', icon: <FiHome />, label: 'Home' },
    { id: 'about', icon: <FiUser />, label: 'About' },
    { id: 'projects', icon: <FiBriefcase />, label: 'Projects' },
    { id: 'experiences', icon: <AiOutlineExperiment />, label: 'Experiences' },
    { id: 'contact', icon: <FiMail />, label: 'Contact' },
  ];

  return (
    <motion.nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-2' : 'bg-transparent py-4'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-6">
        <div className="flex justify-center md:justify-between items-center">
          <motion.div 
            className="hidden md:block font-bold text-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Your<span className="text-primary">Name</span>
          </motion.div>
          
          <ul className="flex space-x-1 md:space-x-6">
            {navItems.map((item) => (
              <li key={item.id}>
                <a 
                  href={`#${item.id}`}
                  className={`flex items-center px-3 py-2 rounded-full text-sm md:text-base transition-all ${
                    activeSection === item.id 
                      ? 'bg-gray-100 text-primary font-semibold' 
                      : 'text-gray-600 hover:text-primary hover:bg-gray-100'
                  }`}
                >
                  <span className="mr-2">{item.icon}</span>
                  <span className="hidden md:inline">{item.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;