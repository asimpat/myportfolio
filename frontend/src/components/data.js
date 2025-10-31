import hiddenImage from "../assets/img/hiddenImage.png";
import portImage from "../assets/img/portImage.png";
import vendrlyImage from "../assets/img/vendrly.png";



export const skills = [
  // Backend Core
  { name: "Django", percentage: 85, color: "#0b6643ff" },
  { name: "Python", percentage: 95, color: "#306998" },
  { name: "DRF (Django REST)", percentage: 88, color: "#F97316" },
  { name: "PostgreSQL/MySQL", percentage: 80, color: "#47A248" },
  // Frontend/Full Stack
  { name: "React", percentage: 80, color: "#61DAFB" },
  { name: "JavaScript", percentage: 70, color: "#F7DF1E" },
  { name: "Tailwind CSS", percentage: 70, color: "#06B6D4" },
  // Tools & Practices
  { name: "Git & GitHub", percentage: 92, color: "#e7e3e3ff" },
  { name: "RESTful API Design", percentage: 85, color: "#DD3A0A" },
];

// --- Updated PROJECTS Data ---
export const projects = [
  {
    id: 1,
    title: "Recipe Sharing Platform API",
    description:
      "Built comprehensive API for recipe sharing community with authentication, search, ratings, and comments. Implemented complex database relationships and query optimization.",
    imgUrl: null,
    websiteUrl: null,
    githubUrl: "https://github.com/asimpat/Reciepe-API",
    docsUrl: "#",
  },
  {
    id: 2,
    title: "E-Commerce API",
    description:
      "Developed full-featured e-commerce backend with Stripe payment integration, inventory management, and order processing pipeline.",
    imgUrl: null, // API-Only project, will show placeholder
    websiteUrl: null,
    githubUrl: "https://github.com/asimpat/Shoppit",
    docsUrl: "#",
  },
  {
    id: 3,
    title: "Hidden Note",
    description:
      "Created privacy-focused messaging system with secure anonymous message routing, rate limiting, and spam prevention.",
    imgUrl: hiddenImage,
    websiteUrl: "https://hidden-note-frontend.onrender.com/",
    githubUrl: "https://github.com/asimpat/hidden-note-frontend",
    docsUrl: null,
  },
  {
    id: 4,
    title: "Portfolio Website",
    description:
      "A personal portfolio built with React and Tailwind CSS, serving dynamic content via a custom API.",
    imgUrl: portImage,
    websiteUrl: "https://your-portfolio-live.com",
    githubUrl: "https://github.com/asimpat/portfolio-frontend",
    docsUrl: null,
  },
  {
    id: 5,
    title: "Vendrly",
    description:
      "A website where vendors book events. Users can find vendors, hire caterers, and book more events.",
    imgUrl: vendrlyImage,
    websiteUrl: "https://www.vendrly.com/",
    githubUrl: "#",
    docsUrl: null,
  },
];

// --- Updated EXPERIENCES Data ---
export const experiences = [
  {
    title: "Web Developer - Intern",
    company: "Valuegate Consulting",
    period: "Sept. 2025 - Present",
    description:
      "Developed user interfaces with modern React frameworks and Tailwind CSS. Collaborated with the team on front-end design and seamless back-end integration.",
    skills_list: [
      "React",
      "Tailwind CSS",
      // "Frontend Integration",
      "Collaboration",
      "Node.js",
      "API Integration",
      "Git/GitHub",
      "MongoDB",
      "Express.js",
    ],
  },
  {
    title: "Web Developer - Full-time",
    company: "Axum Technologies",
    period: "Mar. 2024 - Sept. 2025",
    description:
      "Full-stack development using Grails, Next.js, and React. Optimized applications for scalability, managed code via Git/Jira, and resolved technical user issues.",
    skills_list: [
      "Grails",
      "Next.js",
      "React",
      "Node.js",
      "PHP",
      "Optimization",
      "Git/Jira",
    ],
  },
  {
    title: "Backend Developer - Internship",
    company: "Start Innovation Hub",
    period: "Sept. 2021 - May 2022",
    description:
      "Gained hands-on backend experience. Built efficient file management systems, optimized database queries, and implemented server-side validation and error handling.",
    skills_list: [
      "Backend Development",
      "File Management",
      "Database Optimization",
      // "Data Integrity",
      "Server-side Logic",
    ],
  },
];

// --- Updated CONTACT Data ---
export const contact = {
  email: "okonasim9@gmail.com",
  phone: "09130211088", 
  linkedin: "https://www.linkedin.com/in/asim-patrick-a07a4323b/", 
  twitter:"https://x.com/Patoasim",
  github: "https://github.com/asimpat",
};
