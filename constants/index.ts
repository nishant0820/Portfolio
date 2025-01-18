import projectOne from "@/images/projectOne.png";

export const NavbarData = [
  { title: "Home", href: "/" },
  { title: "Services", href: "/services" },
  { title: "Resume", href: "/resume" },
  { title: "Work", href: "/work" },
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
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis atque at ratione. Iusto quae ipsum quaerat pariatur illo ipsa nobis.",
    href: "https://www.google.com",
  },
  {
    id: "02",
    title: "Web Development",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis atque at ratione. Iusto quae ipsum quaerat pariatur illo ipsa nobis.",
    href: "https://www.google.com",
  },
  {
    id: "03",
    title: "Web Development",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis atque at ratione. Iusto quae ipsum quaerat pariatur illo ipsa nobis.",
    href: "https://www.google.com",
  },
  {
    id: "04",
    title: "Web Development",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis atque at ratione. Iusto quae ipsum quaerat pariatur illo ipsa nobis.",
    href: "https://www.google.com",
  },
  {
    id: "05",
    title: "Web Development",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis atque at ratione. Iusto quae ipsum quaerat pariatur illo ipsa nobis.",
    href: "https://www.google.com",
  },
  {
    id: "06",
    title: "Web Development",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis atque at ratione. Iusto quae ipsum quaerat pariatur illo ipsa nobis.",
    href: "https://www.google.com",
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
