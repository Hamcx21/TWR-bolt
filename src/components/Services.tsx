import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Palette, Code, Zap } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Cpu,
      title: 'Smart Technology',
      description: 'Cutting-edge IoT solutions and intelligent automation systems',
      features: ['NFC Digital Cards', 'AI Automation Systems', 'WhatsApp Chatbots', 'IoT Solutions'],
      color: 'from-red-500 to-red-600'
    },
    {
      icon: Palette,
      title: 'Creative Studio',
      description: 'Bold visual storytelling and brand experiences that captivate',
      features: ['Advertising Campaigns', 'Brand Identity', 'Video Production', 'Content Strategy'],
      color: 'from-red-600 to-red-700'
    },
    {
      icon: Code,
      title: 'Digital Product Lab',
      description: 'Custom web and mobile solutions built for scalability',
      features: ['Web Development', 'Mobile Apps', 'SaaS Prototyping', 'UX/UI Design'],
      color: 'from-red-500 to-red-600'
    },
    {
      icon: Zap,
      title: 'Immersive Tech',
      description: 'Next-generation AR/VR experiences that transform interaction',
      features: ['AR Filters', 'VR Environments', '360° Virtual Tours', 'Interactive Media'],
      color: 'from-red-600 to-red-700'
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="font-serif">Our</span> <span className="font-sans text-red-500">Services</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            From intelligent automation to immersive experiences, we deliver comprehensive solutions 
            that drive innovation and growth.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-black border border-gray-800 rounded-2xl p-8 hover:border-red-500/50 transition-all duration-300"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mb-6`}
              >
                <service.icon className="w-8 h-8 text-white" />
              </motion.div>
              
              <h3 className="text-2xl font-bold text-white mb-4 font-sans">{service.title}</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>
              
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="text-sm text-gray-400 flex items-center">
                    <div className="w-1.5 h-1.5 bg-red-500 rounded-full mr-3" />
                    {feature}
                  </li>
                ))}
              </ul>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-6 text-red-400 hover:text-red-300 font-semibold text-sm transition-colors"
              >
                Learn More →
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;