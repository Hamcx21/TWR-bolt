import React from 'react';
import { motion } from 'framer-motion';
import { CreditCard, Bot, Smartphone, ShoppingCart } from 'lucide-react';

const Products = () => {
  const products = [
    {
      icon: CreditCard,
      title: 'Smart NFC Cards',
      description: 'Revolutionary digital business cards with tap-to-share technology',
      price: 'From $29',
      features: ['Instant Contact Sharing', 'Social Media Links', 'Custom Design', 'Analytics Dashboard'],
      cta: 'Buy Now'
    },
    {
      icon: Bot,
      title: 'AI Automation Suite',
      description: 'Intelligent chatbots and workflow automation tools',
      price: 'From $99/mo',
      features: ['WhatsApp Integration', 'Multi-platform Support', 'Custom Training', '24/7 Support'],
      cta: 'Request Demo'
    },
    {
      icon: Smartphone,
      title: 'Mobile App Starter',
      description: 'Pre-built mobile app templates for rapid deployment',
      price: 'From $499',
      features: ['React Native', 'Cross-platform', 'Custom Branding', 'Source Code Included'],
      cta: 'Preview Apps'
    }
  ];

  return (
    <section id="products" className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="font-serif">Featured</span> <span className="font-sans text-red-500">Products</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready-to-use solutions and tools designed to accelerate your digital transformation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-gray-900 border border-gray-800 rounded-2xl p-8 hover:border-red-500/50 transition-all duration-300 relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center mb-6 relative z-10"
              >
                <product.icon className="w-8 h-8 text-white" />
              </motion.div>
              
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-white mb-4 font-sans">{product.title}</h3>
                <p className="text-gray-300 mb-4 leading-relaxed">{product.description}</p>
                
                <div className="text-2xl font-bold text-red-500 mb-6">{product.price}</div>
                
                <ul className="space-y-2 mb-8">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="text-sm text-gray-400 flex items-center">
                      <div className="w-1.5 h-1.5 bg-red-500 rounded-full mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-red-500 hover:bg-red-600 text-white py-4 rounded-xl font-semibold flex items-center justify-center space-x-2 transition-colors"
                >
                  <ShoppingCart className="w-5 h-5" />
                  <span>{product.cta}</span>
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;