import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Github, Linkedin, Mail, Rocket, Sparkles, Code, Zap } from 'lucide-react';
import { containerVariants, itemVariants } from '../utils/animations';

const Hero: React.FC = () => {

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-6">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="text-center z-10 max-w-4xl mx-auto"
      >
        {/* Greeting */}
        <motion.div variants={itemVariants} className="mb-6">
          <span className="text-lg text-blue-400 font-medium">Hello, I'm</span>
        </motion.div>

        {/* Name */}
        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl font-bold space-grotesk mb-6"
        >
          <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Amarjeet Choudhary
          </span>
        </motion.h1>

        {/* Title */}
        <motion.h2
          variants={itemVariants}
          className="text-2xl md:text-3xl text-gray-300 mb-8 space-grotesk"
        >
          Full-Stack Developer
        </motion.h2>

        {/* Tagline */}
        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          Crafting exceptional digital experiences with{' '}
          <span className="text-blue-400 font-semibold">React</span>,{' '}
          <span className="text-green-400 font-semibold">Node.js</span>,{' '}
          <span className="text-cyan-400 font-semibold">Go</span>, and modern technologies.
          Passionate about building scalable, user-centric applications.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
        >
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full text-white font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
          >
            View My Work
          </motion.a>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 border-2 border-gray-600 rounded-full text-gray-300 font-semibold hover:border-blue-400 hover:text-blue-400 transition-all duration-300"
          >
            Get In Touch
          </motion.a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          variants={itemVariants}
          className="flex justify-center space-x-6 mb-16"
        >
          {[
            { icon: Github, href: 'https://github.com/amarjeet-choudhary666', label: 'GitHub' },
            { icon: Linkedin, href: 'https://www.linkedin.com/in/amarjeet-choudhary-238399248/', label: 'LinkedIn' },
            { icon: Mail, href: 'mailto:amarjeetchoudhary647@gmail.com', label: 'Email' },
          ].map(({ icon: Icon, href, label }) => (
            <motion.a
              key={label}
              href={href}
              whileHover={{ scale: 1.2, y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 bg-gray-800/50 rounded-full hover:bg-gray-700/50 transition-all duration-300 group"
              aria-label={label}
            >
              <Icon className="w-6 h-6 text-gray-400 group-hover:text-blue-400 transition-colors" />
            </motion.a>
          ))}
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          variants={itemVariants}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center text-gray-400"
          >
            <span className="text-sm mb-2">Scroll Down</span>
            <ChevronDown className="w-6 h-6" />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Simplified Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Static floating icons with CSS animations */}
        <div className="absolute top-1/4 left-1/4 text-blue-400 opacity-30 animate-pulse">
          <Rocket className="w-8 h-8" />
        </div>

        <div className="absolute top-3/4 right-1/4 text-purple-400 opacity-25 animate-pulse" style={{ animationDelay: '1s' }}>
          <Code className="w-10 h-10" />
        </div>

        <div className="absolute bottom-1/4 left-1/3 text-pink-400 opacity-40 animate-pulse" style={{ animationDelay: '2s' }}>
          <Sparkles className="w-6 h-6" />
        </div>

        <div className="absolute top-1/2 right-1/5 text-cyan-400 opacity-35 animate-pulse" style={{ animationDelay: '0.5s' }}>
          <Zap className="w-7 h-7" />
        </div>

        {/* Simple glowing orbs */}
        <div className="absolute top-1/3 right-1/3 w-4 h-4 bg-blue-400 rounded-full blur-sm opacity-40 animate-pulse" />
        <div className="absolute bottom-1/3 left-1/5 w-3 h-3 bg-purple-400 rounded-full blur-sm opacity-30 animate-pulse" style={{ animationDelay: '1.5s' }} />
        <div className="absolute top-2/3 left-1/4 w-2 h-2 bg-pink-400 rounded-full blur-sm opacity-50 animate-pulse" style={{ animationDelay: '0.8s' }} />
      </div>
    </section>
  );
};

export default Hero;