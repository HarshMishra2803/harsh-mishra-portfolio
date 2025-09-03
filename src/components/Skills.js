import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  SiReact, SiNodedotjs, SiMongodb, SiExpress, SiJavascript, 
  SiHtml5, SiCss3, SiTailwindcss, SiGit, SiGithub, 
  SiFigma, SiCanva, SiPostman, SiBootstrap, SiMui 
} from 'react-icons/si';

const Skills = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 }
    }
  };

  const allSkills = [
    { name: "MongoDB", icon: <SiMongodb />, color: "text-green-500" },
    { name: "Express.js", icon: <SiExpress />, color: "text-gray-400" },
    { name: "React.js", icon: <SiReact />, color: "text-blue-400" },
    { name: "Node.js", icon: <SiNodedotjs />, color: "text-green-400" },
    { name: "JavaScript", icon: <SiJavascript />, color: "text-yellow-400" },
    { name: "HTML5", icon: <SiHtml5 />, color: "text-orange-500" },
    { name: "CSS3", icon: <SiCss3 />, color: "text-blue-500" },
    { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "text-cyan-400" },
    { name: "Bootstrap", icon: <SiBootstrap />, color: "text-purple-500" },
    { name: "Material-UI", icon: <SiMui />, color: "text-blue-600" },
    { name: "Git", icon: <SiGit />, color: "text-orange-600" },
    { name: "GitHub", icon: <SiGithub />, color: "text-gray-400" },
    { name: "Postman", icon: <SiPostman />, color: "text-orange-500" },
    { name: "Figma", icon: <SiFigma />, color: "text-purple-400" },
    { name: "Canva", icon: <SiCanva />, color: "text-blue-400" }
  ];

  return (
    <section id="skills" className="section-padding">
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
            My <span className="gradient-text">Skills</span>
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className="w-24 h-1 bg-gradient-to-r from-primary-500 to-purple-500 mx-auto mb-8"
          />
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Technologies and tools I use to bring ideas to life
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6"
        >
          {allSkills.map((skill, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.1, y: -10 }}
              whileTap={{ scale: 0.95 }}
              className="glass p-6 rounded-xl text-center hover:bg-primary-500/10 transition-all duration-300 group cursor-pointer"
            >
              <motion.div
                animate={{ 
                  rotate: [0, 5, -5, 0],
                  scale: [1, 1.05, 1]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  delay: index * 0.1
                }}
                className={`text-4xl ${skill.color} mb-3 group-hover:scale-110 transition-transform duration-300`}
              >
                {skill.icon}
              </motion.div>
              <h4 className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">
                {skill.name}
              </h4>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Skills Cloud */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold mb-8">
            Also Familiar With
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "TypeScript", "Python", "Java", "MySQL", "Firebase", 
              "Netlify", "Vercel", "VS Code", "Photoshop", "Illustrator"
            ].map((tech, index) => (
              <motion.span
                key={index}
                whileHover={{ scale: 1.1, y: -2 }}
                className="glass px-4 py-2 rounded-full text-sm font-medium hover:bg-primary-500/20 transition-all duration-300 cursor-default"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Skills;
