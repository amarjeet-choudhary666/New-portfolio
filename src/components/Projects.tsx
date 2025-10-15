import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Github, Eye } from 'lucide-react';
import { containerVariants, itemVariants } from '../utils/animations';
import htwo from "../assets/htwo.png";

const Projects: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  // Golang Projects
  const golangProjects = [
    {
      title: 'Delivery management system',
      description: 'A high-performance delivery management system built with Go, designed for real-time order tracking, concurrent processing, and secure role-based access control. The system leverages PostgreSQL, Redis, and Goroutines to provide a scalable and reliable delivery workflow.',
      techStack: ['Go', 'Gin', 'PostgreSQL', 'GORM', 'Redis', 'JWT', "bcrypt", 'DOCKER', "Testify", "jsonwebtoken"],
      liveUrl: '#',
      githubUrl: 'https://github.com/amarjeet-choudhary666/golang_delivery_management_system',
      gradient: 'from-purple-500 to-pink-600',
      image: 'https://rocketflow-prod.s3.amazonaws.com/Learning%20image/1029988d-9902-489a-b89f-03df2dde8781/IMG/1677918240973.jpg'
    },
    {
      title: 'Golang share rewars stocks',
      description: 'A Golang-based API for managing stock rewards, user ledgers, and stock prices. The system supports user authentication, ledger tracking, and real-time stock management, built with PostgreSQL and GORM ORM.. The system leverages PostgreSQL, Redis, and Goroutines to provide a scalable and reliable delivery workflow.',
      techStack: ['Go', 'Gin', 'PostgreSQL', 'GORM', 'JWT', "bcrypt"],
      liveUrl: '#',
      githubUrl: 'https://github.com/amarjeet-choudhary666/golang-ShareRewards',
      gradient: 'from-purple-500 to-pink-600',
      image: 'data:image/jpeg;base64,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'
    },
    {
      title: 'Golang System Monitor',
      description: 'A lightweight observability and security microservice built in Go, designed to monitor system metrics, analyze logs, generate alerts, and provide secure APIs for reporting. Features real-time monitoring, performance analytics, and automated alerting system.',
      techStack: ['Go', 'Gin', 'PostgreSQL', 'GORM', 'JWT', 'Bcrypt', 'WebSocket', 'System APIs'],
      liveUrl: '#',
      githubUrl: 'https://github.com/amarjeet-choudhary666/System-Monitor',
      gradient: 'from-cyan-500 to-blue-600',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&crop=center'
    },
    {
      title: 'AI Resume Screener with Gemini',
      description: 'AI Resume Screener Backend using Go and Google Gemini AI for intelligent resume parsing and candidate-job matching. Features semantic comparison, weighted scoring, skill gap analysis, and candidate ranking with JWT authentication.',
      techStack: ['Go', 'Gin', 'PostgreSQL', 'GORM', 'Redis', "bcrypt", 'JWT', 'Google Gemini AI'],
      liveUrl: '#',
      githubUrl: 'https://github.com/amarjeet-choudhary666',
      gradient: 'from-purple-500 to-pink-600',
      image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&h=400&fit=crop&crop=center'
    },
    {
      title: 'EV Station Finder & Booking API',
      description: 'A Golang backend service to help EV users find nearby charging stations, view details, and book charging slots efficiently. Features JWT authentication, geolocation-based search, and admin panel for station management.',
      techStack: ['Go', 'Gin', 'PostgreSQL', 'GORM', 'Bcrypt', 'JWT', 'Geolocation API'],
      liveUrl: '#',
      githubUrl: 'https://github.com/amarjeet-choudhary666',
      gradient: 'from-green-500 to-teal-600',
      image: 'https://images.unsplash.com/photo-1593941707882-a5bac6861d75?w=600&h=400&fit=crop&crop=center'
    }
  ];

  // MERN/React Projects
  const mernProjects = [
    {
      title: 'Htwo Freelance Project',
      description: 'A full-stack Cloud service provider solution with real-time inventory management backend is in working state, secure payment processing, and admin dashboard. Features include user authentication, shopping cart, order tracking, and responsive design.',
      techStack: ['React', 'Node.js', 'Tailwind CSS', 'Lucide React', 'EmailJS', 'TypeScript', 'Shadcn'],
      liveUrl: 'https://htwo.vercel.app/',
      githubUrl: 'https://github.com/amarjeet-choudhary666/Htwo',
      gradient: 'from-blue-500 to-purple-600',
      image: htwo
    },
    {
      title: 'AI Task Management Todo App',
      description: 'An intelligent AI-powered Todo App integrated with Gemini using real-time data with PostgreSQL and Drizzle. Features Docker containerization and smart task automation to enhance productivity.',
      techStack: ['React', 'Node.js', 'PostgreSQL', 'Drizzle ORM', 'Google Gemini AI', 'Docker'],
      liveUrl: '#',
      githubUrl: 'https://github.com/amarjeet-choudhary666',
      gradient: 'from-cyan-500 to-blue-600',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop&crop=center'
    },
    {
      title: 'MERN E-Commerce Platform',
      description: 'Full-stack e-commerce platform like geer.in with CRUD operations and JWT-based authentication. Features user management, product catalog, shopping cart, and secure payment processing.',
      techStack: ['React', 'Node.js', 'Express', 'MongoDB', 'Mongoose', 'JWT', 'Bcrypt'],
      liveUrl: '#',
      githubUrl: 'https://github.com/amarjeet-choudhary666',
      gradient: 'from-orange-500 to-red-600',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop&crop=center'
    },
    {
      title: 'Real-time Leaderboard System',
      description: 'A real-time Leaderboard Application with ranking using DSA logic and complexity optimization. Features WebSocket integration for live updates, TypeScript implementation, and gamified user experience.',
      techStack: ['TypeScript', 'Node.js', 'WebSocket', 'PostgreSQL', 'React', 'Real-time Updates'],
      liveUrl: '#',
      githubUrl: 'https://github.com/amarjeet-choudhary666/leaderboard_project',
      gradient: 'from-indigo-500 to-purple-600',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&crop=center'
    },
    {
      title: 'CSV Data Distributor MERN',
      description: 'CSV Data Distributor for Agents is a full-stack MERN application that allows admins to upload CSV files, map and manage the data, and automatically distribute rows to assigned agents based on rules or manual selection. Designed for organizations that need to delegate structured data efficiently.',
      techStack: ['React', 'Node.js', 'Express', 'MongoDB', 'Mongoose', 'CSV Parser', 'JWT'],
      liveUrl: '#',
      githubUrl: 'https://github.com/amarjeet-choudhary666/csv_mern_stack_project',
      gradient: 'from-emerald-500 to-teal-600',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop&crop=center'
    }
  ];

  const renderProjectCard = (project: any) => (
    <motion.div
      key={project.title}
      variants={itemVariants}
      whileHover={{ y: -10 }}
      className="group bg-gray-800/50 rounded-xl overflow-hidden border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300"
    >
      {/* Project Image */}
      <div className="relative overflow-hidden h-48">
        {project.image ? (
          <div className="relative w-full h-full">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300"></div>
          </div>
        ) : (
          <div className={`w-full h-full bg-gradient-to-br ${project.gradient} flex items-center justify-center relative`}>
            <Eye className="w-12 h-12 text-white/80 transition-transform duration-300 group-hover:scale-110" />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300"></div>
          </div>
        )}
      </div>

      {/* Project Content */}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-white space-grotesk mb-3 group-hover:text-blue-400 transition-colors">
          {project.title}
        </h3>

        <p className="text-gray-400 leading-relaxed mb-4">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.techStack.map((tech: string) => (
            <span
              key={tech}
              className="px-3 py-1 text-xs bg-gray-700/50 text-gray-300 rounded-full border border-gray-600/50"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Project Links */}
        <div className="flex space-x-4">
          <motion.a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg text-white text-sm font-medium hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
          >
            <ExternalLink className="w-4 h-4 mr-2" />
            Live Demo
          </motion.a>

          <motion.a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center px-4 py-2 bg-gray-700/50 rounded-lg text-gray-300 text-sm font-medium hover:bg-gray-600/50 transition-all duration-300"
          >
            <Github className="w-4 h-4 mr-2" />
            Code
          </motion.a>
        </div>
      </div>
    </motion.div>
  );

  return (
    <section id="projects" className="py-20 px-6 relative z-10">
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
                Featured Projects
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full"></div>
            <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
              A showcase of my recent work, demonstrating expertise in full-stack development,
              modern technologies, and creative problem-solving.
            </p>
          </motion.div>

          {/* MERN/React Projects Section */}
          <motion.div variants={itemVariants} className="mb-16">
            <div className="flex items-center mb-8">
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent"></div>
              <h3 className="px-6 text-2xl font-semibold text-white space-grotesk bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                MERN Stack & React Projects
              </h3>
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent"></div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {mernProjects.map(renderProjectCard)}
            </div>
          </motion.div>

          {/* Golang Projects Section */}
          <motion.div variants={itemVariants} className="mb-16">
            <div className="flex items-center mb-8">
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent"></div>
              <h3 className="px-6 text-2xl font-semibold text-white space-grotesk bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
                Golang Projects
              </h3>
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent"></div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {golangProjects.map(renderProjectCard)}
            </div>
          </motion.div>

          {/* View More Projects */}
          <motion.div
            variants={itemVariants}
            className="text-center mt-12"
          >
            <motion.a
              href="https://github.com/amarjeet-choudhary666"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-8 py-3 border-2 border-gray-600 rounded-full text-gray-300 font-semibold hover:border-blue-400 hover:text-blue-400 transition-all duration-300"
            >
              <Github className="w-5 h-5 mr-2" />
              View All Projects on GitHub
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;