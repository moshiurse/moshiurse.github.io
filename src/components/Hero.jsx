import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiTwitter, FiDownload } from 'react-icons/fi';
import { information } from '../config/info';

const Hero = () => {
  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="container mx-auto px-6 flex flex-col justify-center items-center min-h-screen">
      <motion.div
        className="text-center"
        initial="hidden"
        animate="visible"
        transition={{ staggerChildren: 0.1 }}
      >
        <motion.p 
          className="text-primary mb-4 font-medium"
          variants={variants}
        >
          Hello, I'm
        </motion.p>
        
        <motion.h1 
          className="text-5xl md:text-7xl font-bold mb-6"
          variants={variants}
        >
          <span className="text-primary">{information.name}</span>
        </motion.h1>
        
        <motion.h2 
          className="text-2xl md:text-3xl text-gray-600 mb-8"
          variants={variants}
        >
          {information.title}
        </motion.h2>
        
        <motion.div 
          className="flex justify-center space-x-4 mb-12"
          variants={variants}
        >
          <a href="#projects" className="border border-primary bg-primary px-6 py-3 rounded-full hover:bg-gray-100 hover:text-black transition">
            View My Work
          </a>
          <a href={information.resume} target='_blank' className="border border-primary text-primary px-6 py-3 rounded-full hover:bg-gray-100 hover:text-black transition flex items-center">
            <FiDownload className="mr-2" /> Download CV
          </a>
        </motion.div>
        
        <motion.div 
          className="flex justify-center space-x-6"
          variants={variants}
        >
            {
                information.profiles.map((profile, index) => (
                  <a 
                    key={index}
                    target='_blank'
                    href={profile.url}
                    className="text-gray-600 hover:text-primary text-xl transition"
                  >
                    {<profile.icon />}
                  </a>
                ))
            }
        </motion.div>
      </motion.div>
      
      <motion.div 
        className="absolute bottom-10 animate-bounce"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
      >
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-2 bg-gray-400 rounded-full mt-2"></div>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;