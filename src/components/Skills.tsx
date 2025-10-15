import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  Code2, 
  Database, 
  Layers, 
  Globe, 
  Terminal, 
  Settings, 
  Server
} from 'lucide-react';

import { containerVariants, itemVariants } from '../utils/animations';

const Skills: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });



  const skillCategories = [
    {
      title: 'Technical Skills',
      gradient: 'from-blue-500 to-cyan-500',
      icon: Code2,
      skills: [
        'Socket.io', 'Context API', 'Zod', 'Bcrypt', 'JSON Web Token',
        'JWT & OAuth Authentication', 'Redis', 'Redux', 'RESTful APIs',
        'CSS', 'TailwindCSS', 'JavaScript', 'ReactJS', 'Router', 'HTML5'
      ]
    },
    {
      title: 'Database',
      gradient: 'from-green-500 to-emerald-500',
      icon: Database,
      skills: ['MongoDB', 'PostgreSQL']
    },
    {
      title: 'ORM',
      gradient: 'from-purple-500 to-pink-500',
      icon: Layers,
      skills: ['Drizzle ORM', 'Prisma', 'GORM', 'Mongoose']
    },
    {
      title: 'Frameworks',
      gradient: 'from-orange-500 to-red-500',
      icon: Globe,
      skills: ['Next.js', 'Nest.js', 'Express', 'Go (Gin)']
    },
    {
      title: 'Programming Languages',
      gradient: 'from-indigo-500 to-purple-500',
      icon: Terminal,
      skills: ['JavaScript', 'TypeScript', 'Golang']
    },
    {
      title: 'Services & Tools',
      gradient: 'from-teal-500 to-blue-500',
      icon: Settings,
      skills: ['Git', 'GitHub', 'Cloudinary', 'Clerk']
    },
    {
      title: 'Backend Environment',
      gradient: 'from-yellow-500 to-orange-500',
      icon: Server,
      skills: ['Node.js', 'Golang']
    }
  ];

  return (
    <section id="skills" className="py-20 px-6 relative z-10">
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
                Skills & Technologies
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full"></div>
            <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
              A comprehensive toolkit of modern technologies and frameworks I use to build 
              exceptional digital experiences.
            </p>
          </motion.div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                variants={itemVariants}
                whileHover={{ scale: 1.02, y: -5 }}
                className="bg-gray-800/50 rounded-xl p-6 border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 group"
              >
                {/* Category Header */}
                <div className="mb-6">
                  <motion.div 
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                    className={`inline-block p-3 rounded-lg bg-gradient-to-r ${category.gradient} mb-4 group-hover:shadow-lg transition-all duration-300`}
                  >
                    <category.icon className="w-6 h-6 text-white" />
                  </motion.div>
                  <h3 className="text-xl font-semibold text-white space-grotesk">
                    {category.title}
                  </h3>
                </div>

                {/* Skills List */}
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{
                        delay: categoryIndex * 0.1 + skillIndex * 0.05,
                        duration: 0.5,
                      }}
                      whileHover={{ x: 5 }}
                      className="flex items-center group/skill cursor-pointer"
                    >
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${category.gradient} mr-3 group-hover/skill:scale-125 transition-transform duration-200`}></div>
                      <span className="text-gray-300 group-hover/skill:text-white transition-colors duration-200">
                        {skill}
                      </span>
                    </motion.div>
                  ))}
                </div>

                {/* Skill Count Badge */}
                <div className="mt-6 pt-4 border-t border-gray-700/50">
                  <span className="text-sm text-gray-500">
                    {category.skills.length} {category.skills.length === 1 ? 'skill' : 'skills'}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Core Skills - Simplified */}
          <div className="mt-16">
            <h3 className="text-2xl font-semibold text-white space-grotesk text-center mb-8">
              Core Expertise
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {[
                { skill: 'React', level: 'Expert' },
                { skill: 'Node.js', level: 'Expert' },
                { skill: 'TypeScript', level: 'Advanced' },
                { skill: 'Go', level: 'Advanced' },
                { skill: 'MongoDB', level: 'Advanced' },
                { skill: 'PostgreSQL', level: 'Intermediate' },
              ].map((item) => (
                <div
                  key={item.skill}
                  className="text-center p-4 bg-gray-800/30 rounded-lg border border-gray-700/30 hover:border-blue-500/50 transition-all duration-300"
                >
                  <div className="text-lg font-semibold text-white mb-1">{item.skill}</div>
                  <div className="text-sm text-blue-400">{item.level}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Skills Summary */}
          <motion.div
            variants={itemVariants}
            className="mt-16 text-center"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { number: '3+', label: 'Years Experience' },
                { number: '20+', label: 'Technologies' },
                { number: '50+', label: 'Projects Completed' },
                { number: '100%', label: 'Client Satisfaction' },
              ].map((stat) => (
                <motion.div
                  key={stat.label}
                  whileHover={{ scale: 1.05 }}
                  className="text-center"
                >
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent space-grotesk">
                    {stat.number}
                  </div>
                  <div className="text-gray-400 mt-2">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;