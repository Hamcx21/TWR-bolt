import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Eye } from 'lucide-react';

const Portfolio = () => {
  const projects = [
    {
      title: 'TechFlow Dashboard',
      category: 'SaaS Platform',
      description: 'AI-powered analytics dashboard for enterprise workflow optimization',
      image: 'https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=800',
      color: 'from-blue-500 to-purple-600'
    },
    {
      title: 'Brand Revolution',
      category: 'Creative Campaign',
      description: 'Complete brand transformation for a Fortune 500 technology company',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
      color: 'from-red-500 to-pink-600'
    },
    {
      title: 'Smart Retail AR',
      category: 'Immersive Tech',
      description: 'Augmented reality shopping experience for luxury retail chain',
      image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800',
      color: 'from-green-500 to-emerald-600'
    },
    {
      title: 'IoT Command Center',
      category: 'Smart Technology',
      description: 'Centralized IoT management platform for smart building systems',
      image: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=800',
      color: 'from-orange-500 to-red-600'
    },
    {
      title: 'VR Training Simulator',
      category: 'Immersive Tech',
      description: 'Virtual reality training platform for medical professionals',
      image: 'https://images.pexels.com/photos/2776919/pexels-photo-2776919.jpeg?auto=compress&cs=tinysrgb&w=800',
      color: 'from-purple-500 to-violet-600'
    },
    {
      title: 'Content Management Pro',
      category: 'Digital Product',
      description: 'Advanced CMS with AI-powered content generation and optimization',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
      color: 'from-cyan-500 to-blue-600'
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="font-serif">Our</span> <span className="font-sans text-red-500">Portfolio</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Showcasing breakthrough projects that demonstrate our expertise across 
            technology, creativity, and innovation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-2xl bg-black border border-gray-800 hover:border-red-500/50 transition-all duration-300">
                <div className="aspect-video overflow-hidden">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    whileHover={{ scale: 1.05 }}
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="bg-white text-black p-3 rounded-full"
                    >
                      <Eye className="w-5 h-5" />
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="bg-red-500 text-white p-3 rounded-full"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </motion.button>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className={`inline-block px-3 py-1 rounded-full text-xs font-semibold text-white bg-gradient-to-r ${project.color} mb-3`}>
                    {project.category}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 font-sans">{project.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{project.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="border-2 border-red-500 text-red-500 hover:bg-red-500 hover:text-white px-8 py-4 rounded-full font-semibold transition-all"
          >
            View All Projects
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;