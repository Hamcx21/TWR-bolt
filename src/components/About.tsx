import React from 'react';
import { motion } from 'framer-motion';
import { Target, Users, Lightbulb, Rocket } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Target,
      title: 'Innovation First',
      description: 'We push the boundaries of what\'s possible with cutting-edge technology and creative thinking.'
    },
    {
      icon: Users,
      title: 'Collaborative Spirit',
      description: 'Our diverse team of technologists and creatives work together to deliver exceptional results.'
    },
    {
      icon: Lightbulb,
      title: 'Bold Creativity',
      description: 'We believe in fearless creativity that challenges conventions and creates memorable experiences.'
    },
    {
      icon: Rocket,
      title: 'Future Ready',
      description: 'Building solutions today that will define tomorrow\'s digital landscape.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-black relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 50% 50%, #ef4444 0%, transparent 70%)`,
          backgroundSize: '100px 100px'
        }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">
              <span className="font-serif">About</span> <span className="font-sans text-red-500">Wagmi</span>
            </h2>
            
            <div className="space-y-6 text-gray-300 leading-relaxed">
              <p className="text-xl">
                The Wagmi Resources is where <span className="text-red-500 font-semibold">smart technology meets bold creativity</span>. 
                We're a hybrid studio that bridges the gap between cutting-edge tech solutions and 
                compelling creative experiences.
              </p>
              
              <p>
                Founded on the principle that the future belongs to those who dare to innovate, 
                we combine deep technical expertise with fearless creative vision. Our team of 
                technologists, designers, and strategists work collaboratively to deliver solutions 
                that not only solve problems but inspire and engage.
              </p>
              
              <p>
                From AI-powered automation systems to immersive AR experiences, from brand 
                transformations to scalable digital products – we're your partners in building 
                the future, one innovation at a time.
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-12 grid grid-cols-2 gap-8"
            >
              <div className="text-center">
                <div className="text-4xl font-bold text-red-500 mb-2">50+</div>
                <div className="text-gray-400">Projects Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-red-500 mb-2">15+</div>
                <div className="text-gray-400">Team Members</div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-red-500/50 transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center flex-shrink-0"
                  >
                    <value.icon className="w-6 h-6 text-white" />
                  </motion.div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2 font-sans">{value.title}</h3>
                    <p className="text-gray-300 leading-relaxed">{value.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;