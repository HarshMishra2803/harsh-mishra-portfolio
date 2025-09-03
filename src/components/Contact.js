import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiMail, FiGithub, FiLinkedin, FiMapPin, FiSend } from 'react-icons/fi';

const Contact = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
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

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Create mailto link with form data
    const subject = encodeURIComponent(formData.subject || 'Portfolio Contact');
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:mishraharsh.2803@gmail.com?subject=${subject}&body=${body}`;
  };

  const contactInfo = [
    {
      icon: <FiMail size={24} />,
      title: "Email",
      value: "mishraharsh.2803@gmail.com",
      link: "mailto:mishraharsh.2803@gmail.com"
    },
    {
      icon: <FiGithub size={24} />,
      title: "GitHub",
      value: "HarshMishra2803",
      link: "https://github.com/HarshMishra2803"
    },
    {
      icon: <FiLinkedin size={24} />,
      title: "LinkedIn",
      value: "Harsh Mishra",
      link: "https://linkedin.com/in/harsh-mishra"
    },
    {
      icon: <FiMapPin size={24} />,
      title: "Location",
      value: "Lucknow, India",
      link: null
    }
  ];

  return (
    <section id="contact" className="section-padding bg-dark-800/50">
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
            Get In <span className="gradient-text">Touch</span>
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className="w-24 h-1 bg-gradient-to-r from-primary-500 to-purple-500 mx-auto mb-8"
          />
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Let's discuss your next project or just say hello!
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="space-y-8"
          >
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold mb-6 gradient-text">
                Let's Connect
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                I'm always excited to work on new projects and collaborate with 
                amazing people. Whether you have a project in mind, want to discuss 
                opportunities, or just want to say hi, feel free to reach out!
              </p>
            </motion.div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02, x: 10 }}
                  className="glass p-6 rounded-xl hover:bg-primary-500/5 transition-all duration-300 group"
                >
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-primary-500/20 rounded-full group-hover:bg-primary-500/30 transition-colors">
                      <span className="text-primary-400 group-hover:scale-110 transition-transform duration-300">
                        {info.icon}
                      </span>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-1 group-hover:text-primary-300 transition-colors">
                        {info.title}
                      </h4>
                      {info.link ? (
                        <a
                          href={info.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-primary-400 transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <span className="text-gray-400">{info.value}</span>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Quick Actions */}
            <motion.div
              variants={itemVariants}
              className="space-y-4"
            >
              <h4 className="text-lg font-semibold text-primary-300">Quick Actions:</h4>
              <div className="flex flex-wrap gap-4">
                <motion.a
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  href="mailto:mishraharsh.2803@gmail.com"
                  className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary-500 to-purple-500 rounded-lg font-semibold hover:shadow-lg hover:shadow-primary-500/25 transition-all duration-300"
                >
                  <FiMail size={18} />
                  Send Email
                </motion.a>
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  disabled
                  className="flex items-center gap-2 px-6 py-3 glass border border-gray-600 text-gray-500 rounded-lg font-semibold cursor-not-allowed opacity-50"
                >
                  Resume Coming Soon
                </motion.button>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="glass p-8 rounded-2xl"
          >
            <h3 className="text-2xl font-bold mb-6 gradient-text">
              Send a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-dark-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 text-white placeholder-gray-400"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-dark-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 text-white placeholder-gray-400"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-dark-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 text-white placeholder-gray-400"
                  placeholder="Project Discussion"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-dark-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 text-white placeholder-gray-400 resize-none"
                  placeholder="Tell me about your project or just say hello!"
                />
              </div>
              
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-primary-500 to-purple-500 rounded-lg font-semibold hover:shadow-lg hover:shadow-primary-500/25 transition-all duration-300"
              >
                <FiSend size={18} />
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mt-16 text-center"
        >
          <div className="glass p-8 rounded-2xl max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Start Your <span className="gradient-text">Next Project</span>?
            </h3>
            <p className="text-gray-300 text-lg mb-6">
              I'm currently available for freelance work and full-time opportunities. 
              Let's create something amazing together!
            </p>
            <div className="flex items-center justify-center gap-2 text-primary-400">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="font-medium">Available for new projects</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
