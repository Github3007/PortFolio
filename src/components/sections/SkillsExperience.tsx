import { motion } from 'framer-motion';
import { skills, experience } from '../../data';
import { Skill, Experience } from '../../types';

const SkillsExperience = () => {
  const SkillCard = ({ skill }: { skill: Skill }) => {
    return (
      <motion.div
        whileHover={{ scale: 1.05, rotateY: 10 }}
        whileTap={{ scale: 0.95 }}
        className="bg-white dark:bg-gray-700 p-3 rounded-lg shadow-md card-hover"
      >
        <div className="text-center">
          <div className="text-2xl mb-1">{skill.icon}</div>
          <h3 className="font-semibold text-gray-900 dark:text-white text-sm">{skill.name}</h3>
        </div>
      </motion.div>
    );
  };

  const ExperienceCard = ({ exp }: { exp: Experience }) => {
    return (
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="relative"
      >
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg ml-8 relative">
          {/* Timeline dot */}
          <div className="absolute -left-10 top-6 w-4 h-4 bg-blue-500 rounded-full border-4 border-white dark:border-gray-900"></div>
          
          {/* Content */}
          <div className="mb-4">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">{exp.position}</h3>
              <span className="text-xs text-blue-600 dark:text-blue-400 font-medium bg-blue-100 dark:bg-blue-900 px-2 py-1 rounded-full">
                {exp.duration}
              </span>
            </div>
            
            <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 text-sm">
              <span className="font-medium">{exp.company}</span>
              <span>•</span>
              <span>{exp.location}</span>
            </div>
          </div>

          {/* Description */}
          <div className="mb-4">
            <ul className="space-y-1">
              {exp.description.slice(0, 3).map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex items-start space-x-2 text-gray-700 dark:text-gray-300 text-sm"
                >
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Technologies */}
          <div className="flex flex-wrap gap-1">
            {exp.technologies.map((tech, i) => (
              <span
                key={i}
                className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-xs"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    );
  };

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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="skills" className="py-12 bg-white dark:bg-gray-900 scroll-mt-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="max-w-7xl mx-auto"
        >
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Skills Section */}
            <motion.div variants={itemVariants}>
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3">
                  My <span className="gradient-text">Skills</span>
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  Technologies I work with
                </p>
              </div>
              
              {/* Skills Grid */}
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    viewport={{ once: true }}
                  >
                    <SkillCard skill={skill} />
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Experience Section */}
            <motion.div variants={itemVariants}>
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3">
                  My <span className="gradient-text">Experience</span>
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  Professional journey
                </p>
              </div>

              {/* Timeline */}
              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-4 top-6 bottom-6 w-0.5 bg-gray-300 dark:bg-gray-600"></div>
                
                {/* Experience Items */}
                <div className="space-y-8">
                  {experience.map((exp, index) => (
                    <motion.div
                      key={exp.id}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.2 }}
                      viewport={{ once: true }}
                    >
                      <ExperienceCard exp={exp} />
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsExperience;