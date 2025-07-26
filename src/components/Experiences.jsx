import { motion } from 'framer-motion';
import { information } from '../config/info';

const Experiences = () => {
  return (
    <div className="container mx-auto px-6">
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold mb-4">My Experiences</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          A summary of my professional journey and academic background.
        </p>
      </motion.div> 
      
      <div className="flex flex-col gap-12">
        <motion.div 
          className="md:w-2/3 mx-auto"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-2xl font-bold mb-8 relative after:content-[''] after:absolute after:left-0 after:bottom-[-8px] after:w-12 after:h-1 after:bg-primary">
            Experience
          </h3>
          
          <div className="space-y-8">
            {information.experiences.map((exp, index) => (
              <div key={index} className="relative pl-8 before:content-[''] before:absolute before:left-0 before:top-2 before:w-4 before:h-4 before:bg-primary before:rounded-full">
                <div className="absolute left-[7px] top-6 bottom-0 w-px bg-gray-300"></div>
                <h4 className="text-xl font-bold">{exp.role}</h4>
                <div className="flex items-center text-gray-600 mb-2">
                  <span>{exp.company}</span>
                  <span className="mx-2">•</span>
                  <span>{exp.duration}</span>
                </div>
                <p className="text-gray-600">{exp.description}</p>
              </div>
            ))}
          </div>
        </motion.div>
        
        <motion.div 
          className="md:w-2/3 mx-auto"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-2xl font-bold mb-8 relative after:content-[''] after:absolute after:left-0 after:bottom-[-8px] after:w-12 after:h-1 after:bg-primary">
            Education
          </h3>
          
          <div className="space-y-8">
            {information?.educations?.map((edu, index) => (
              <div key={index} className="relative pl-8 before:content-[''] before:absolute before:left-0 before:top-2 before:w-4 before:h-4 before:bg-primary before:rounded-full">
                <div className="absolute left-[7px] top-6 bottom-0 w-px bg-gray-300"></div>
                <h4 className="text-xl font-bold">{edu.degree}</h4>
                <div className="flex items-center text-gray-600 mb-2">
                  <span>{edu.institution}</span>
                  <span className="mx-2">•</span>
                  <span>{edu.duration}</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Experiences;