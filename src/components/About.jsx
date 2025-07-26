import { motion } from 'framer-motion';
import { iconMap, information } from '../config/info';
import React from 'react';

const About = () => {

  return (
    <div className="container mx-auto px-6">
      <div className="flex flex-col md:flex-row items-center">
        <motion.div 
          className="md:w-1/3 mb-10 md:mb-0"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative w-64 h-64 mx-auto">
            <div className="absolute inset-0 bg-primary rounded-full opacity-20"></div>
            <div className="absolute inset-4 border-4 border-primary rounded-full"></div>
            <img 
              src="https://media.licdn.com/dms/image/v2/D5603AQE_oT3ySgzyYQ/profile-displayphoto-crop_800_800/B56Zg8retNHMAQ-/0/1753364688991?e=1756339200&v=beta&t=mq4UVSp-uoNE_ZgMl_rSlluYmABrIpWNQmCP-XPrHYM" 
              alt="Profile" 
              className="absolute inset-0 w-full h-full rounded-full object-cover"
            />
          </div>
        </motion.div>
        
        <motion.div 
          className="md:w-2/3 md:pl-12"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-6">About Me</h2>
          <p className="text-gray-600 mb-6">
            {information.description}
          </p>
          
          <h2 className="text-3xl font-bold mb-6">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {information?.skills?.professional?.map((category, index) => (
              <motion.div 
                key={index}
                className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                <h3 className="text-lg font-bold mb-3 text-gray-800 dark:text-white flex items-center">
                    {iconMap[category.name] || null} {category.name}
                </h3>
                <div className="flex flex-wrap gap-2">
                    {category.items.map((item, itemIndex) => (
                        <React.Fragment key={itemIndex}>
                            {item}
                        </React.Fragment>
                    ))}
                </div>
                </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;