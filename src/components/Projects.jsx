import { motion } from 'framer-motion';
import { FiExternalLink } from 'react-icons/fi';
import { information } from '../config/info';

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold">{project.title}</h3>
          {project.link && (
            <a 
              href={project.link} 
              className="flex items-center text-gray-600 hover:text-primary transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiExternalLink className="mr-1" /> Visit
            </a>
          )}
        </div>
        
        <p className="text-gray-600 mb-4">{project.description}</p>
        
        {project.responsibilities && (
          <div className="mb-4">
            <h4 className="font-semibold mb-1">Key Contributions:</h4>
            <p className="text-gray-600">{project.responsibilities}</p>
          </div>
        )}
        
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag, i) => (
            <span 
              key={i} 
              className="bg-gray-100 text-gray-800 text-xs px-3 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <div className="container mx-auto px-6">
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold mb-4">My Projects</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Here are some of my selected works. Each project represents a unique challenge and solution.
        </p>
      </motion.div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {information?.projects?.map((project, index) => (
          <ProjectCard key={index} project={project} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Projects;