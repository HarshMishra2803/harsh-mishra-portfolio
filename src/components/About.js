import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiCode, FiDatabase, FiServer, FiSmartphone } from 'react-icons/fi';

const About = () => {
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

  const features = [
    {
      icon: <FiCode size={24} />,
      title: "Frontend Development",
      description: "Creating responsive and interactive user interfaces with modern frameworks"
    },
    {
      icon: <FiServer size={24} />,
      title: "Backend Development",
      description: "Building robust server-side applications and RESTful APIs"
    },
    {
      icon: <FiDatabase size={24} />,
      title: "Database Design",
      description: "Designing efficient database schemas and optimizing queries"
    },
    {
      icon: <FiSmartphone size={24} />,
      title: "Responsive Design",
      description: "Ensuring seamless experience across all devices and screen sizes"
    }
  ];

  return (
    <section id="about" className="section-padding bg-dark-800/50">
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
            About <span className="gradient-text">Me</span>
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className="w-24 h-1 bg-gradient-to-r from-primary-500 to-purple-500 mx-auto mb-8"
          />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="space-y-6"
          >
            <motion.div
              variants={itemVariants}
              className="glass p-8 rounded-2xl"
            >
              <h3 className="text-2xl font-bold gradient-text mb-4">
                Full Stack Web Developer
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                I'm a passionate Full Stack Web Developer with expertise in building 
                innovative and creative web applications using modern technologies. 
                I specialize in designing user-friendly interfaces and delivering 
                end-to-end solutions that bring creative ideas to life.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Currently pursuing B.Tech in Computer Science Engineering, I combine technical 
                expertise with creative problem-solving to build applications 
                that make a difference.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 bg-primary-500/20 px-4 py-2 rounded-full">
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                  <span className="text-sm font-medium">Available for work</span>
                </div>
                <div className="flex items-center gap-2 bg-purple-500/20 px-4 py-2 rounded-full">
                  <span className="text-sm font-medium">3rd Year Student</span>
                </div>
              </div>
            </motion.div>

          </motion.div>

          {/* Right side - Features grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                className="glass p-6 rounded-xl hover:bg-primary-500/10 transition-all duration-300 group"
              >
                <div className="text-primary-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h4 className="text-lg font-semibold mb-2 group-hover:text-primary-300 transition-colors">
                  {feature.title}
                </h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Bottom section with personal touch */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mt-16 text-center"
        >
          <div className="glass p-8 rounded-2xl max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              Let's Build Something <span className="gradient-text">Amazing</span> Together
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              I believe in the power of technology to solve real-world problems and create 
              meaningful experiences. Whether it's a complex web application or a simple 
              landing page, I approach every project with creativity, attention to detail, 
              and a commitment to excellence.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
