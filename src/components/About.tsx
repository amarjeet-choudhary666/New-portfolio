import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code, Rocket, Users, Zap, Download } from 'lucide-react';
import { containerVariants, itemVariants } from '../utils/animations';

const About: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const strengths = [
    {
      icon: Code,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable, and efficient code following best practices.',
    },
    {
      icon: Rocket,
      title: 'Performance',
      description: 'Optimizing applications for speed, scalability, and exceptional user experience.',
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Working effectively in teams using modern development workflows and tools.',
    },
    {
      icon: Zap,
      title: 'Innovation',
      description: 'Staying current with latest technologies and implementing creative solutions.',
    },
  ];

  return (
    <section id="about" className="py-20 px-6 relative z-10">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold space-grotesk mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                About Me
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Bio Section */}
            <motion.div variants={itemVariants} className="space-y-6">
              <h3 className="text-2xl md:text-3xl font-semibold text-white space-grotesk">
                Passionate Full-Stack Developer
              </h3>
              
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  I'm a dedicated full-stack developer with a passion for creating innovative 
                  digital solutions that make a real impact. With expertise spanning both 
                  frontend and backend technologies, I bring ideas to life through clean, 
                  efficient code and thoughtful user experiences.
                </p>
                
                <p>
                  My journey in software development has led me to master modern technologies 
                  like React, Node.js, and Go, while maintaining a strong focus on best 
                  practices, performance optimization, and scalable architecture. I thrive 
                  in collaborative environments and enjoy tackling complex challenges.
                </p>
                
                <p>
                  When I'm not coding, you'll find me exploring new technologies, contributing 
                  to open-source projects, or sharing knowledge with the developer community. 
                  I believe in continuous learning and staying at the forefront of technological 
                  innovation.
                </p>
              </div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="inline-block"
              >
                <a
                  href="https://drive.google.com/file/d/15lhwi5ulck0h_UN7tsILBnhR-sdwGPlp/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full text-white font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
                >
                  <Download className="w-5 h-5 mr-2" />
                  Download Resume
                </a>
              </motion.div>
            </motion.div>

            {/* Strengths Grid */}
            <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {strengths.map((strength) => (
                <motion.div
                  key={strength.title}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="p-6 bg-gray-800/50 rounded-xl border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 group"
                >
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg mr-4 group-hover:shadow-lg group-hover:shadow-blue-500/25 transition-all duration-300">
                      <strength.icon className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="text-xl font-semibold text-white space-grotesk">
                      {strength.title}
                    </h4>
                  </div>
                  <p className="text-gray-400 leading-relaxed">
                    {strength.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;