import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiBookOpen, FiAward, FiCalendar, FiMapPin } from 'react-icons/fi';

const Education = () => {
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
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 }
    }
  };

  const education = {
    degree: "B.Tech Computer Science Engineering",
    university: "Babu Banarasi Das University",
    location: "Lucknow, India",
    year: "3rd Year",
    duration: "2023 - 2027",
    gpa: "8.5/10",
    specialization: "Computer Science",
    relevantCourses: [
      "Data Structures & Algorithms",
      "Machine Learning",
      "Artificial Intelligence",
      "Database Management Systems",
      "Web Development",
      "Software Engineering",
      "Computer Networks",
      "Operating Systems"
    ]
  };

  const achievements = [
    {
      title: "Dean's List",
      description: "Consistently maintained high academic performance",
      icon: <FiAward />
    },
    {
      title: "Web Development Certification",
      description: "Completed advanced web development course",
      icon: <FiBookOpen />
    },
    {
      title: "Hackathon Participant",
      description: "Participated in multiple coding competitions",
      icon: <FiAward />
    }
  ];

  return (
    <section id="education" className="section-padding">
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
            <span className="gradient-text">Education</span>
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className="w-24 h-1 bg-gradient-to-r from-primary-500 to-purple-500 mx-auto mb-8"
          />
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            My academic journey and continuous learning path
          </motion.p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Main Education Card */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="glass p-8 rounded-2xl mb-8"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-primary-500/20 rounded-full">
                <FiBookOpen size={24} className="text-primary-400" />
              </div>
              <div>
                <h3 className="text-2xl font-bold gradient-text">
                  {education.degree}
                </h3>
                <p className="text-gray-400">{education.specialization}</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <FiMapPin size={18} className="text-primary-400" />
                  <span className="text-gray-300">{education.university}, {education.location}</span>
                </div>
                <div className="flex items-center gap-3">
                  <FiCalendar size={18} className="text-primary-400" />
                  <span className="text-gray-300">{education.duration}</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-primary-500/10 rounded-xl">
                  <div className="text-2xl font-bold gradient-text mb-1">{education.year}</div>
                  <div className="text-gray-400 text-sm">Current Year</div>
                </div>
                <div className="text-center p-4 bg-purple-500/10 rounded-xl">
                  <div className="text-2xl font-bold gradient-text mb-1">{education.gpa}</div>
                  <div className="text-gray-400 text-sm">CGPA</div>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4 text-primary-300">Relevant Coursework:</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {education.relevantCourses.map((course, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.02 }}
                    className="flex items-center gap-2 p-2 rounded-lg hover:bg-primary-500/10 transition-colors"
                  >
                    <div className="w-2 h-2 bg-primary-400 rounded-full"></div>
                    <span className="text-gray-300 text-sm">{course}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Current Focus */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="glass p-6 rounded-xl border-l-4 border-primary-500"
          >
            <h4 className="text-lg font-semibold mb-3 gradient-text">
              Currently Learning
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-gray-300">Advanced React Patterns</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-gray-300">Cloud Computing (AWS)</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-gray-300">DevOps & CI/CD</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;
