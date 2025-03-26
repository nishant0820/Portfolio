import projectOne from "@/images/projectOne.png";

export const NavbarData = [
  { title: "Home", href: "/" },
  { title: "Tech Stack", href: "/services" },
  { title: "Resume", href: "/resume" },
  { title: "Project", href: "/work" },
];

export const statsData = [
  { num: 1, text: "Years of expience" },
  { num: 17, text: "Projects Completed" },
  { num: 10, text: "Technologies mastered" },
  { num: 500, text: "Code commits" },
];

export const servicesData = [
  {
    id: "01",
    title: "Web Development",
    description:
      "Developed an E-Commerce Website using MERN, Stripe and Razorpay for Payment Integration to my website. This website is for purchasing clothes.",
    href: "https://github.com/nishant0820/Ecommerce-using-React-Mern-and-Stripe",
  },
  {
    id: "02",
    title: "Web Development",
    description:
      "Developed the Learning Management Portal using MERN and Stripe for Payment Integration. This website is made for a student learning portal.",
    href: "https://github.com/nishant0820/Learning-Management-Portal",
  },
  {
    id: "03",
    title: "Flutter Development",
    description:
      "Developed an E-Commerce App in Flutter. This app is made for purchasing and selling clothing products.",
    href: "https://github.com/nishant0820/Ecommerce-with-Flutter",
  },
  {
    id: "04",
    title: "Advanced Python",
    description:
      "Developed a Student Result Management System using Python and Mysql for database.",
    href: "https://github.com/nishant0820/Student-Result-Management-System",
  },
];

export const tabContent = {
  experience: {
    title: "My Experience",
    items: [
      {
        role: "Full Stack Developer",
        project: "E-commerce Website",
        period: "2024-2025",
        description:
          "Developed and maintained full stack using frontend and backend technologies",
        highlights: ["Node.js", "React", "MongoDB", "AWS"],
      },
    ],
  },
  education: {
    title: "Eduucational Background",
    items: [
      {
        degree: "Bachelor of Technology",
        institution: "Guru Gobind Singh Indraprastha University",
        period: "2024-2025",
        description: "Specialized in Software development and computer science",
        achievements: ["8.2GPA"],
      },
    ],
  },
  skills: {
    title: "Technical Skills",
    categories: [
      {
        name: "Frontend Development",
        description: "Specialized in Software development and computer science",
        skills: ["React", "Next.js"],
      },
    ],
  },
  about: {
    title: "About me",
    bio: "Passionate software developer with over 5 years of experience in building modern websites",
    interests: [
      "Web Development",
      "Software Development",
      "Open Source",
      "Machine Learning",
    ],
    languages: ["English", "Hindi"],
  },
};

export const projects = [
  {
    id: "01",
    title: "E-commerce",
    category: "Full Stack",
    description: "A modern E-commerce platform built with Next.js",
    stack: ["Next.js", "Tailwind CSS"],
    image: projectOne,
    liveUrl: "",
    githubUrl: "https://github.com/nishant0820",
  },
  {
    id: "02",
    title: "E-commerce",
    category: "Full Stack",
    description: "A modern E-commerce platform built with Next.js",
    stack: ["Next.js", "Tailwind CSS"],
    image: projectOne,
    liveUrl: "",
    githubUrl: "https://github.com/nishant0820",
  },
];
