import { PersonalInfo, Project, Skill, Experience } from '../types';

export const personalInfo: PersonalInfo = {
  name: "Shiva Kumar Kothapally",
  title: "Full Stack Developer",
  bio: "Passionate full-stack developer with expertise in modern web technologies. I love creating beautiful, functional, and user-friendly applications that solve real-world problems.",
  location: "Hyderabad, India",
  email: "shivakumarkothapally5@gmail.com",
  phone: "9676272781",
  linkedin: "https://www.linkedin.com/in/shiva-kumar-kothapally-1336a7227/",
  github: "https://github.com/Github3007",
  twitter: "https://twitter.com/yourhandle",
  resumeUrl: "/resume.pdf",
};

export const skills: Skill[] = [
  // Programming Languages
  { name: "C", level: 7, category: "backend", icon: "⚡" },
  { name: "C++", level: 7, category: "backend", icon: "⚡" },
  { name: "Java", level: 8, category: "backend", icon: "☕" },
  
  // Core Skills
  { name: "OOP", level: 8, category: "backend", icon: "🧩" },
  { name: "DBMS", level: 7, category: "backend", icon: "🗃️" },
  { name: "SQL", level: 7, category: "backend", icon: "�" },
  
  // Web Development
  { name: "HTML", level: 9, category: "frontend", icon: "🌐" },
  { name: "CSS", level: 8, category: "frontend", icon: "🎨" },
  { name: "JavaScript", level: 8, category: "frontend", icon: "🟨" },
  { name: "ReactJS", level: 8, category: "frontend", icon: "⚛️" },
  
  // Tools & Frameworks
  { name: "Spring Boot", level: 8, category: "backend", icon: "🌱" },
  { name: "Spring Data JPA", level: 7, category: "backend", icon: "�" },
  
  // Databases
  { name: "MySQL", level: 7, category: "backend", icon: "🗄️" },
  { name: "MongoDB", level: 6, category: "backend", icon: "🍃" },
  
  // Developer Tools
  { name: "Git", level: 8, category: "tools", icon: "📝" },
  { name: "GitHub", level: 8, category: "tools", icon: "⚫" },
  { name: "Postman", level: 7, category: "tools", icon: "📮" },
  { name: "VS Code", level: 9, category: "tools", icon: "💻" },
  { name: "STS Tool", level: 7, category: "tools", icon: "�️" }
];

export const projects: Project[] = [
  {
    id: 1,
    title: "Utility Asset Maintenance Tracker",
    description: "• Built a full-stack web application to manage the lifecycle of utility assets like transformers, pipelines, and substations\n• Tracking 100+ field units in real-time with Spring Boot microservices architecture\n• Improved backend scalability and maintainability by 40% with secure JWT-based authentication\n• Designed responsive ReactJS frontend reducing manual tracking effort by 35%\n• Enhanced user experience across departments with intuitive interface design",
    image: "https://via.placeholder.com/400x300",
    technologies: ["Spring Boot", "Microservices", "JWT", "ReactJS"],
    liveUrl: "",
    githubUrl: "https://github.com/Github3007/Utility-Asset-Maintenance-Tracker---SpringBoot-MicroServices-React",
    featured: true
  },
  {
    id: 2,
    title: "Hospital Management System",
    description: "• Created secure hospital management system using MERN stack for 1,000+ patient records\n• Implemented role-based access controls with JWT authentication and MongoDB Atlas\n• Reduced patient management time by 30% through automated scheduling and streamlined record-keeping\n• Optimized API performance for 1,000+ requests per minute with efficient database queries\n• Managed 500+ patients with improved workflow automation and data security",
    image: "https://via.placeholder.com/400x300",
    technologies: ["MongoDB", "NodeJs", "Express", "JWT", "Dotenv"],
    liveUrl: "",
    githubUrl: "https://github.com/Github3007/Hospital-Management-System-BACKEND",
    featured: true
  }
];

export const experience: Experience[] = [
  {
    id: 1,
    company: "Cognizant Technology Solutions",
    position: "Software Engineer",
    duration: "July 2025 - Present (3 months)",
    location: "Hyderabad, India",
    description: [
      "Working as a Software Engineer with 0-1 year experience in Java development",
      "Developing enterprise applications using Java and Spring Boot framework",
      "Collaborating with team members on full-stack web development projects",
      "Learning and implementing industry best practices in software development",
      "Gaining hands-on experience with version control using Git",
      "Participating in code reviews and following agile development methodologies",
      "Working on RESTful API development and database integration",
      "Contributing to team knowledge sharing sessions and technical discussions"
    ],
    technologies: ["Java", "Spring Boot", "Git", "RESTful APIs", "MySQL", "Agile"]
  },
  {
    id: 2,
    company: "Cognizant Technology Solutions",
    position: "Full Stack Developer Intern – E-commerce Domain",
    duration: "March 2025 - June 2025",
    location: "Chennai, India",
    description: [
      "Developed an E-commerce platform for 5,000+ users using Java, Spring Boot, and ReactJS, collaborating in an agile team of 5",
      "Built and deployed 5+ scalable microservices, reducing backend downtime by 20%",
      "Designed RESTful APIs to boost frontend-backend sync speed by 30%",
      "Followed best practices in version control and build automation using Git, Postman, and Maven",
      "Supported faster delivery through agile development methodologies and collaborative teamwork"
    ],
    technologies: ["Java", "Spring Boot", "ReactJS", "Microservices", "RESTful APIs", "Git", "Postman", "Maven", "Agile"]
  }
];