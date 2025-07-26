import { motion } from 'framer-motion';
import { FiHeart } from 'react-icons/fi';
import { information } from '../config/info';

const Footer = () => {
  return (
    <motion.footer 
      className="bg-gray-800 text-white py-12"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-bold"><span className="text-primary">{information.name}</span></h3>
            <p className="text-gray-400 mt-2">{information.title}</p>
          </div>
          
          <div className="flex space-x-6 mb-6 md:mb-0">
            {
                information?.profiles?.map((social, index) => (
                    <a key={index} href={social.link} className="text-gray-400 hover:text-white transition">
                        {<social.icon />}
                    </a>
                ))
            }
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-gray-400 flex items-center justify-center md:justify-end">
              Made with <FiHeart className="mx-1 text-primary" /> by {information.shortName}
            </p>
            <p className="text-gray-500 text-sm mt-1">
              © {new Date().getFullYear()} All rights reserved
            </p>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;