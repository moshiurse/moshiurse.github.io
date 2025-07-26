import { motion } from 'framer-motion';
import { FiMail, FiMapPin, FiPhone } from 'react-icons/fi';
import { information } from '../config/info';

const Contact = () => {
  return (
    <div className="container mx-auto px-6">
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Have a project in mind or want to discuss potential opportunities? Feel free to reach out!
        </p>
      </motion.div>
      
      <div className="flex flex-col lg:flex-row gap-12">
        <motion.div 
          className="lg:w-1/2"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 mb-2">Your Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700 mb-2">Your Email</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="john@example.com"
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="subject" className="block text-gray-700 mb-2">Subject</label>
              <input 
                type="text" 
                id="subject" 
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="Project Inquiry"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-gray-700 mb-2">Message</label>
              <textarea 
                id="message" 
                rows="5" 
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="Hello, I'd like to talk about..."
              ></textarea>
            </div>
            
            <button 
              type="submit" 
              className="bg-primary text-white px-6 py-3 rounded-full hover:bg-primary-dark transition w-full md:w-auto"
            >
              Send Message
            </button>
          </form>
        </motion.div>
        
        <motion.div 
          className="lg:w-1/2"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="bg-white p-8 rounded-xl shadow-lg h-full">
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-primary/10 p-3 rounded-full mr-4">
                  <FiMail className="text-primary text-xl" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Email</h4>
                  <p className="text-gray-600">{information.email}</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-primary/10 p-3 rounded-full mr-4">
                  <FiPhone className="text-primary text-xl" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Phone</h4>
                  <p className="text-gray-600">{information.phone}</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-primary/10 p-3 rounded-full mr-4">
                  <FiMapPin className="text-primary text-xl" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Location</h4>
                  <p className="text-gray-600">{information.address}</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;