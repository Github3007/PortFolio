import { personalInfo } from '../../data';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const Contact = () => {
  const contactMethods = [
    {
      icon: '📧',
      title: 'Email',
      value: personalInfo.email,
      link: `mailto:${personalInfo.email}`,
      description: 'Send me an email anytime'
    },
    {
      icon: '📱',
      title: 'Phone',
      value: personalInfo.phone || 'Not available',
      link: personalInfo.phone ? `tel:${personalInfo.phone}` : undefined,
      description: 'Call me during business hours'
    },
    {
      icon: '📍',
      title: 'Location',
      value: personalInfo.location,
      description: 'Open to remote opportunities'
    },
    {
      icon: 'linkedin',
      title: 'LinkedIn',
      value: 'Connect with me',
      link: personalInfo.linkedin,
      description: 'Professional networking'
    },
    {
      icon: 'github',
      title: 'GitHub',
      value: 'View my code',
      link: personalInfo.github,
      description: 'Check out my repositories'
    }
  ];

  const renderIcon = (iconType: string) => {
    switch (iconType) {
      case 'linkedin':
        return <FaLinkedinIn className="text-3xl text-blue-600" />;
      case 'github':
        return <FaGithub className="text-3xl text-gray-900 dark:text-white" />;
      default:
        return <div className="text-3xl">{iconType}</div>;
    }
  };

  return (
    <section id="contact" className="py-12 bg-gray-50 dark:bg-gray-800 scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3">
              Get In <span className="gradient-text">Touch</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Have a project in mind or just want to chat? Let's create something amazing together!
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Let's Connect
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                I'm always excited to work on new projects and collaborate with interesting people. 
                Whether you have a project in mind or just want to say hello, don't hesitate to reach out!
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-4">
              {contactMethods.map((method) => (
                <div
                  key={method.title}
                  className={`bg-white dark:bg-gray-700 p-6 rounded-xl shadow-lg min-h-[140px] overflow-hidden ${
                    method.link ? 'cursor-pointer hover:scale-105 transition-transform' : ''
                  }`}
                  onClick={() => method.link && window.open(method.link)}
                >
                  <div className="mb-3">
                    {renderIcon(method.icon)}
                  </div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                    {method.title}
                  </h4>
                  <p className="text-blue-600 dark:text-blue-400 font-medium mb-2 break-all text-sm">
                    {method.value}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {method.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;