export const siteConfig = {
  name: "Vadivel K Portfoli0",
  description:
    "I am an engineering student passionate about creating innovative solutions, showcasing my projects, technical skills, and achievements in the field of engineering.",
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "About",
      href: "/about",
    },
    {
      title: "Education",
      href: "/education",
    },
    {
      title: "Skills",
      href: "/skills",
    },
    {
      title: "Experience",
      href: "/experience",
    },
    {
      title: "Projects",
      href: "/projects",
    },
    {
      title: "Certificates",
      href: "/certificates",
    },
    {
      title: "Blog",
      href: "/blog",
    },
    {
      title: "Contact",
      href: "/contact",
    },
  ],
  links: {
    github: "https://github.com/VADIVEL200",
    linkedin: "https://linkedin.com/in/k-vadivel-096141245/",
    twitter: "https://x.com/k_vadivel26519",
    facebook: "https://www.facebook.com/profile.php?id=100071946858739",
    instagram: "https://instagram.com/I_love_mama2003",
    whatsapp: "https://wa.me/6380185531",
    email: "mailto:kv2844205@gmail.com",
    phone: "tel:+6380185531",
  },
};

export type Experience = {
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string[];
  technologies: string[];
};

export const experiences: Experience[] = [
  {
    title: "Operating Engineering Trainee ",
    company: "MAHLE ANAND Filter Systems Pvt. Ltd.",
    location: "Chennai, India",
    startDate: "Jun 2023",
    endDate: "Aug 2023",
    description: [
      "Assisted in day-to-day production and operations of automotive filter systems to ensure smooth workflow",
      "Performed machine operation support and quality checks under the guidance of senior engineers",
      "Gained practical knowledge of process efficiency, safety practices, and documentation in a manufacturing environment",
    ],
    technologies: [
      "AutoCAD",
      "MS Excel",
      "Quality Tools",
      "production management",
    ],
  },
  {
    title: "Communication Network Intern ",
    company: "Bharat Sanchar Nigam Limited (BSNL) ",
    location: "Vellore, India",
    startDate: "Nov 2022",
    endDate: "Dec 2022",
    description: [
      "Gained hands-on exposure to telecommunication networks and switching systems",
      "Assisted in understanding fiber optic communication and broadband technologies",
      "Learned about network configuration, maintenance, and quality monitorings",
    ],
    technologies: ["Optical Fiber", "Switching Systems", "Networking Tools"],
  },
  {
    title: "Project Intern (IoT & Software Development)",
    company: "Self / Academic Projects",
    location: "Remote, College Projects",
    startDate: "Jan 2023",
    endDate: "Present",
    description: [
      "Designed and implemented Smart Parking System using ESP32-CAM, IR sensors, servo motor, and OCR-based number plate recognition",
      "Built Mini Spotify App with FastAPI + PostgreSQL for backend and HTML/CSS/JS frontend",
      "Developed Movie Streaming App with upload, play, and delete functionality (Hotstar-like)",
      "Created Task Manager App with black & pink theme for task organization",
      "Built multiple Portfolio Websites using MERN, MEAN, and Next.js",
    ],
    technologies: [
      "FastAPI",
      "PostgreSQL",
      "ESP32-CAM",
      "React / Angular",
      "Node.js",
      "Git",
      "GitHub",
      "Python",
      "C++",
    ],
  },
];

export type Project = {
  title: string;
  description: string;
  image: string;
  tags: string[];
  link?: string;
  repo?: string;
};

export const projects: Project[] = [
  {
    title: "Password-Based Circuit Breaker",
    description:
      "Password-Based Circuit Breaker – Developed a microcontroller-based circuit breaker system secured with password authentication, ensuring electrical safety and preventing unauthorized access.",
    image: "https://srrobotics.in/wp-content/uploads/2024/03/23-scaled.jpg",
    tags: [
      "IoT",
      "Arduino",
      "C++",
      "Relay Module",
      "Keypad",
      "LCD Display",
      "Power Supply",
    ],
    link: "#",
    repo: "#",
  },
  {
    title: "Smart Parking System (IoT with ESP32-CAM)",
    description:
      "Designed and implemented an automated parking system using ESP32-CAM, IR sensors, and a servo motor for vehicle entry/exit. Integrated OCR-based license plate recognition with a real-time web interface over HTTPS.",
    image:
      "https://circuitdigest.com/sites/default/files/inlineimages/u5/hardware-assembled-image-of-smart-parking-system.jpg",
    tags: [
      "IoT",
      "ESP32-CAM",
      "Python",
      "Sensors",
      "Web Interfacee",
      "Cloud API",
    ],
    link: "#",
    repo: "#",
  },
  {
    title: "Mini Spotify App",
    description:
      "Developed a music streaming application with features like upload, play, delete songs, playlists, and user login. Backend built with FastAPI + PostgreSQL and frontend using HTML, CSS, JS with a green-black theme.",
    image:
      "https://static1.anpoimages.com/wordpress/wp-content/uploads/2024/04/spotify-feature-image.jpg",
    tags: ["FastAPI", "PostgreSQL", "HTML", "CSS", "JavaScript"],
    link: "#",
    repo: "https://github.com/VADIVEL200/Mini-spotify-app.git",
  },
  {
    title: "Movie Streaming App (Hotstar-like)",
    description:
      "Created a web application to upload, list, play, and delete movies. Implemented REST APIs (GET, POST, PUT, DELETE) with FastAPI and PostgreSQL database for storage and management.",
    image:
      "https://cdn.dribbble.com/userupload/41208942/file/original-eabd82414f9345eaa3a2459ccca5f74f.png?resize=752x&vertical=center",
    tags: [
      "FastAPI",
      "PostgreSQL",
      "HTML",
      "CSS",
      "JavaScript",
      "REST API",
      "Git",
    ],
    link: "#",
    repo: "#",
  },
  {
    title: "Task Manager App",
    description:
      "Built a task management web app with create, update, delete, and filter features. Designed with a black & pink theme to give a modern look and improve usability.",
    image:
      "https://media.istockphoto.com/id/1371325578/photo/kanban-project-management-software-on-laptop.jpg?s=612x612&w=0&k=20&c=-YK8Bj2KS3Px74_Rjudm1_Jhq-n8vqhLDHuontnhojs=",
    tags: ["FastAPI", "PostgreSQL", "HTML", "CSS", "JavaScript", "Git"],
    link: "#",
    repo: "#",
  },
  {
    title: "Portfolio Websites (MERN, Next.js)",
    description:
      "Designed and deployed personal portfolio websites to showcase projects and internships. Built using MERN, and Next.js, ensuring responsive layouts and modern UI/UX design.",
    image: "https://i.im.ge/2025/08/24/JGoPzP.Screenshot-2025-08-24-205751.png",
    tags: ["MERN", "Next.js", "Tailwind CSS", "Git"],
    link: "#",
    repo: "#",
  },
];

export type Education = {
  degree: string;
  field: string;
  institution: string;
  location: string;
  startDate: string;
  endDate: string;
  gpa?: string;
  achievements: string[];
};

export const education: Education[] = [
  {
    degree: "Bachelor of Engineering",
    field: "Electronics & Communication Engineering",
    institution:
      "Anna University – University College of Engineering, Tindivanam",
    location: "Tindivanam, India",
    startDate: "Aug 2023",
    endDate: "Present",
    gpa: "CGPA:7.4/10",
    achievements: [
      "Active participant in IoT and Embedded Systems workshops",
      "IoT & Embedded Systems Workshop Participation",
      "Consistent Academic Performance Award",
    ],
  },
  {
    degree: "Diploma ",
    field: "Electronics & Communication Engineering",
    institution: "Government Polytechnic College, Cheyyar",
    location: "Cheyyar, India",
    startDate: "Jun 2021",
    endDate: "Apr 2023",
    gpa: "8.5/10",
    achievements: [
      "First Class with Distinction",
      "Academic Excellence in Final Yeart",
      "Hands-on Mini Projects in Microcontrollers",
      "Internship at BSNL, Vellore – Telecom Network Training",
      "Completed Academic Project: Password-Based Circuit Breaker",
    ],
  },
  {
    degree: "High School Leaving Certificate(HSLC)",
    field: "Furscience",
    institution: "Government Higher Secondary School,Melsevalampadi",
    location: "Melsevalampadi, India",
    startDate: "Jun 2019",
    endDate: "May 2021",
    gpa: "7.4/10",
    achievements: [
      "Science Group with strong foundation in Electronics & Math",
      "Participated in District-level Science Exhibition",
    ],
  },
  {
    degree: "Secondary School Leaving Certificate(SSLC)",
    field: "State Board of School Examinations (Tamil nadu)",
    institution: "Government Higher Secondary School,Eyyil",
    location: "Eyyil, India",
    startDate: "Jun 2014",
    endDate: "May 2019",
    gpa: "6.6/10",
    achievements: [
      "Represented School in Inter-school Quiz Competitions",
      "Active Member in NSS (National Service Scheme)",
    ],
  },
];

export type Certificate = {
  title: string;
  issuer: string;
  date: string;
  id?: string;
  url?: string;
  pdf?: string;
};

export const certificates: Certificate[] = [
  {
    title: "Web Development Internship",
    issuer: "System Tron",
    date: "July 2025",
    id: "ST/INP/9957",
    url: "https://i.im.ge/2025/08/25/Je51zK.VADIVEL-K-1.png",
    pdf: "https://i.im.ge/2025/08/25/Je51zK.VADIVEL-K-1.png",
  },
  {
    title: "JAVA Programming",
    issuer: "System Tron",
    date: "July 2025",
    id: "ST/INP/9944",
    url: "https://i.im.ge/2025/08/25/Je59mP.VADIVEL-K.png",
    pdf: "https://i.im.ge/2025/08/25/Je59mP.VADIVEL-K.png",
  },
  {
    title: " Hackathon Python Programming",
    issuer: "Indian Institute of Technology, Madras,Techgyan",
    date: "Apr 2025",
    id: "Techgyan/IITM/2025/0423",
    url: "https://i.im.ge/2025/08/25/Je5VpF.Vadivel.jpeg",
    pdf: "https://i.im.ge/2025/08/25/Je5VpF.Vadivel.jpeg",
  },
  {
    title: " Python Programming",
    issuer: "Indian Institute of Technology, Madras,Techgyan",
    date: "Apr 2025",
    id: "Techgyan/IITM/2025/0423",
    url: "https://i.im.ge/2025/08/25/Je5VpF.Vadivel.jpeg",
    pdf: "https://i.im.ge/2025/08/25/Je5VpF.Vadivel.jpeg",
  },
  {
    title: " Hackathon Python Programming",
    issuer: "Indian Institute of Technology, Madras,Techgyan",
    date: "Apr 2025",
    id: "Techgyan/IITM/2025/0423",
    url: "https://i.im.ge/2025/08/25/Je5VpF.Vadivel.jpeg",
    pdf: "https://i.im.ge/2025/08/25/Je5VpF.Vadivel.jpeg",
  },
  {
    title: " Hackathon Artificial Intelligence & Machine Learning",
    issuer: "Indian Institute of Technology, Madras,Techgyan",
    date: "Apr 2025",
    id: "Techgyan/IITM/2025/0426",
    url: "https://i.im.ge/2025/08/25/Je9mSF.Vadivel1.jpeg",
    pdf: "https://i.im.ge/2025/08/25/Je9mSF.Vadivel1.jpeg",
  },
];

export type Skill = {
  name: string;
  level: number; // 1-10
  category: "technical" | "software" | "soft" | "language";
};

export const skills: Skill[] = [
  // Technical Skills
  {
    name: "Programming Languages: Python, C, C++, Java",
    level: 8,
    category: "technical",
  },
  {
    name: "Web Development: HTML, CSS, JavaScript, React, Node.js, FastAPI",
    level: 7,
    category: "technical",
  },
  {
    name: "Database Management: MySQL, PostgreSQL, MongoDB",
    level: 7,
    category: "technical",
  },
  {
    name: "Embedded Systems & IoT: ESP32, Arduino, Raspberry Pi",
    level: 8,
    category: "technical",
  },
  {
    name: "Networking & Protocols: HTTP, MQTT, REST APIs",
    level: 6,
    category: "technical",
  },
  { name: "Version Control: Git & GitHub", level: 9, category: "technical" },

  // Software Skills
  { name: "VS Code, PyCharm, Eclipse", level: 9, category: "software" },
  { name: "MATLAB, Keil uVision, Arduino IDE", level: 8, category: "software" },
  { name: "Postman (API Testing)", level: 9, category: "software" },
  { name: "Docker, Heroku (Deployment)", level: 7, category: "software" },
  { name: "C++, Python, Java", level: 7, category: "software" },
  {
    name: "MS Office (Word, Excel, PowerPoint)",
    level: 8,
    category: "software",
  },

  // Soft Skills
  { name: "Communication & Presentation", level: 9, category: "soft" },
  { name: "Problem-Solving & Analytical Thinking", level: 8, category: "soft" },
  { name: "Team Collaboration & Leadership", level: 7, category: "soft" },
  { name: "Adaptability & Flexibility", level: 8, category: "soft" },
  { name: "Time Management & Organization", level: 7, category: "soft" },
  { name: "Creativity & Critical Thinking", level: 7, category: "soft" },

  // Languages
  { name: "Tamil", level: 10, category: "language" },
  { name: "English", level: 8, category: "language" },
];

export type BlogPost = {
  title: string;
  excerpt: string;
  date: string;
  author: string;
  image: string;
  slug: string;
};

export const blogPosts: BlogPost[] = [
  {
    title: "IoT in Smart Cities",
    excerpt:
      "IoT is transforming cities with projects like smart parking, agriculture, and home automation. I share how student projects can contribute to this future.",
    date: "Mar 15, 2023",
    author: "Vadivel k",
    image:
      "https://t3.ftcdn.net/jpg/13/11/68/72/240_F_1311687218_zG49ODCkxyrBbYs8Utm64lvA9jahUdAY.jpg",
    slug: "iot-in-smart-cities",
  },
  {
    title: "MERN Stack for Beginners",
    excerpt:
      "The MERN stack (MongoDB, Express, React, Node.js) is one of the best ways to learn full-stack development. This guide will help you set up your first project step by step.",
    date: "Feb 22, 2024",
    author: "Vadivel k",
    image:
      "https://desunacademy.in/wp-content/uploads/2024/01/MERN-Stack-Development.png",
    slug: "mern-stack-for-beginners",
  },
  {
    title: "FastAPI vs Node.js",
    excerpt:
      "Both FastAPI and Node.js are powerful backend frameworks. Here’s a comparison of speed, simplicity, and ecosystem to help you choose the right one.",
    date: "Jan 10, 2024",
    author: "Vadivel k",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdAlWjceVUQAXsU34vRyxotUCdo3LHC2R41Q&s",
    slug: "fastapi-vs-nodejs",
  },
];
