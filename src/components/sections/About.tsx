import { motion } from 'framer-motion';
import { personalInfo } from '../../data';

const About = () => {
  // Calculate dynamic experience
  const calculateExperience = () => {
    if (!personalInfo.experienceStartDate) return "0 months";
    
    const startDate = new Date(personalInfo.experienceStartDate);
    const currentDate = new Date();
    
    const years = currentDate.getFullYear() - startDate.getFullYear();
    const months = currentDate.getMonth() - startDate.getMonth();
    
    const totalMonths = years * 12 + months;
    
    if (totalMonths < 12) {
      return `${totalMonths} ${totalMonths === 1 ? 'month' : 'months'}`;
    } else {
      const experienceYears = Math.floor(totalMonths / 12);
      const remainingMonths = totalMonths % 12;
      
      if (remainingMonths === 0) {
        return `${experienceYears} ${experienceYears === 1 ? 'year' : 'years'}`;
      } else {
        // Format: "1 year 1 month" or "2 years 3 months"
        const yearText = experienceYears === 1 ? 'year' : 'years';
        const monthText = remainingMonths === 1 ? 'month' : 'months';
        return `${experienceYears} ${yearText} ${remainingMonths} ${monthText}`;
      }
    }
  };

  const highlights = [
    "Focused on creating exceptional user experiences",
    "Passionate about cutting-edge technologies",
    "Collaborative team player and mentor",
    "Continuous learner and problem solver"
  ];

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
    <section id="about" className="py-12 bg-gray-50 dark:bg-gray-800 scroll-mt-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3">
              About <span className="gradient-text">Me</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Get to know more about my background, skills, and what drives me as a developer.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 items-start">
            {/* Left Column - Quick Info & Contact */}
            <motion.div variants={itemVariants} className="space-y-6">
              {/* Quick Info Cards */}
              <div className="grid grid-cols-2 gap-4">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-md text-center"
                >
                  <div className="text-lg md:text-xl font-bold text-blue-600 dark:text-blue-400 leading-tight">{calculateExperience()}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">Experience</div>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-md text-center"
                >
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">7+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">Technologies</div>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-md text-center"
                >
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">Java</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">Primary Stack</div>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-md text-center"
                >
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">100%</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">Dedication</div>
                </motion.div>
              </div>

              {/* Highlights */}
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-700 dark:to-gray-600 p-4 rounded-xl">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
                  What Sets Me Apart
                </h3>
                <div className="grid grid-cols-1 gap-2">
                  {highlights.map((highlight, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex items-center space-x-3"
                    >
                      <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></div>
                      <span className="text-gray-700 dark:text-gray-300 text-sm">{highlight}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Contact Info */}
              <div className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-md">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
                  Let's Connect
                </h3>
                <div className="space-y-2 text-gray-600 dark:text-gray-300">
                  <p>📍 {personalInfo.location}</p>
                  <p>📧 {personalInfo.email}</p>
                  {personalInfo.phone && <p>📱 {personalInfo.phone}</p>}
                </div>
              </div>
            </motion.div>

            {/* Right Column - Main Content */}
            <motion.div variants={itemVariants} className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  My Journey
                </h3>
                <div className="space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                  <p>
                    {personalInfo.bio}
                  </p>
                  <p>
                    Currently working at Cognizant as a Software Engineer, I specialize in Java and Spring Boot development. 
                    My passion lies in creating efficient backend solutions while also developing modern frontend applications using React.
                  </p>
                  <p>
                    As a fresher in the industry, I'm constantly learning and adapting to new technologies and best practices. 
                    I believe in writing clean, maintainable code and collaborating effectively in team environments.
                  </p>
                </div>
              </div>

              {/* Resume Download */}
              <div>
                {personalInfo.resumeUrl && (
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={personalInfo.resumeUrl}
                    download
                    className="inline-flex items-center space-x-2 btn-primary"
                  >
                    <span>Download Resume</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </motion.a>
                )}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;