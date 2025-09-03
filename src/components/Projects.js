import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiExternalLink, FiGithub, FiCode, FiDatabase, FiGlobe } from 'react-icons/fi';

const Projects = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const projects = [
    {
      title: "NLP Analysis of Public Complaints",
      description: "Transform complaint data into actionable insights with advanced Natural Language Processing. Features sentiment analysis, auto-categorization, keyword extraction, interactive charts, and comprehensive export options for government agencies and organizations.",
      image: "/api/placeholder/600/400",
      technologies: ["Python", "NLP", "Machine Learning", "Streamlit", "NLTK", "Pandas"],
      features: ["Sentiment Analysis", "Auto Categorization", "Keyword Extraction", "Interactive Charts", "Filter & Search", "Export Options"],
      github: "https://github.com/HarshMishra2803/nlp-analysis-of-public-complaints",
      live: "https://nlp-analysis-of-public-complaints.onrender.com/",
      category: "AI/ML",
      icon: <FiCode />
    },
    {
      title: "CryptoPlace",
      description: "Comprehensive cryptocurrency tracking platform with real-time price monitoring, portfolio management, and market analysis. Features interactive charts, price alerts, and detailed coin information.",
      image: "/api/placeholder/600/400",
      technologies: ["React", "Node.js", "Express", "MongoDB", "Chart.js", "CoinGecko API"],
      features: ["Real-time Prices", "Portfolio Tracking", "Price Alerts", "Market Analysis"],
      github: "https://github.com/HarshMishra2803/cryptoplace",
      live: "https://github.com/HarshMishra2803/cryptoplace",
      category: "Web App",
      icon: <FiGlobe />
    },
    {
      title: "GovChain - Government Schemes Portal",
      description: "Blockchain-based government schemes portal that ensures transparency and reduces corruption in scheme distribution. Features secure authentication, scheme tracking, and beneficiary management.",
      image: "/api/placeholder/600/400",
      technologies: ["React", "Blockchain", "Solidity", "Web3.js", "Node.js", "MongoDB"],
      features: ["Blockchain Security", "Scheme Tracking", "Beneficiary Management", "Transparency"],
      github: "https://github.com/HarshMishra2803/govchain",
      live: "https://github.com/HarshMishra2803/govchain",
      category: "Web App",
      icon: <FiDatabase />
    }
  ];

  return (
    <section id="projects" className="section-padding bg-dark-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Featured <span className="gradient-text">Projects</span>
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className="w-24 h-1 bg-gradient-to-r from-primary-500 to-purple-500 mx-auto mb-8"
          />
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            A showcase of my recent work and creative solutions
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="space-y-12"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`grid lg:grid-cols-2 gap-8 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              {/* Project Image */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className={`relative group ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}
              >
                <div className="glass rounded-2xl overflow-hidden">
                  <div className="aspect-video bg-gradient-to-br from-primary-500/20 to-purple-500/20 flex items-center justify-center">
                    <div className="text-6xl text-primary-400 opacity-50">
                      {project.icon}
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                    <div className="flex gap-4">
                      <motion.a
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-dark-800/80 rounded-full hover:bg-primary-500/20 transition-colors"
                      >
                        <FiGithub size={20} />
                      </motion.a>
                      <motion.a
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-dark-800/80 rounded-full hover:bg-primary-500/20 transition-colors"
                      >
                        <FiExternalLink size={20} />
                      </motion.a>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Project Details */}
              <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="px-3 py-1 bg-primary-500/20 text-primary-300 rounded-full text-sm font-medium">
                      {project.category}
                    </span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 gradient-text">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Features */}
                <div>
                  <h4 className="text-lg font-semibold mb-3 text-primary-300">Key Features:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {project.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-primary-400 rounded-full"></div>
                        <span className="text-gray-400 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="text-lg font-semibold mb-3 text-primary-300">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-dark-700 text-gray-300 rounded-full text-sm font-medium hover:bg-primary-500/20 hover:text-primary-300 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4 pt-4">
                  <motion.a
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary-500 to-purple-500 rounded-lg font-semibold hover:shadow-lg hover:shadow-primary-500/25 transition-all duration-300"
                  >
                    <FiGithub size={18} />
                    View Code
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 glass border border-primary-500 text-primary-400 rounded-lg font-semibold hover:bg-primary-500/10 transition-all duration-300"
                  >
                    <FiExternalLink size={18} />
                    Live Demo
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mt-16 text-center"
        >
          <div className="glass p-8 rounded-2xl max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              Want to See More Projects?
            </h3>
            <p className="text-gray-300 text-lg mb-6">
              Check out my GitHub profile for more projects and contributions
            </p>
            <motion.a
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              href="https://github.com/HarshMishra2803"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary-500 to-purple-500 rounded-xl font-semibold hover:shadow-lg hover:shadow-primary-500/25 transition-all duration-300"
            >
              <FiGithub size={20} />
              Visit GitHub Profile
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
