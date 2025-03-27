import projectOne from "@/images/projectOne.png";

export const NavbarData = [
  { title: "Home", href: "/" },
  { title: "Certifications", href: "/services" },
  { title: "Resume", href: "/resume" },
  { title: "Project", href: "/work" },
];

export const statsData = [
  { num: 1, text: "Years of expience" },
  { num: 17, text: "Projects Completed" },
  { num: 10, text: "Technologies mastered" },
  { num: 500, text: "Code commits" },
];

export const certificationsData = [
  {
id: "01",
    title: "AWS Certified Solutions Architect",
    issuer: "Amazon Web Services",
    date: "March 2025",
    credentialID: "XYZ-12345",
    href: "https://aws.com/certifications/xyz",
  },
  {
    title: "Google Professional Cloud Architect",
    issuer: "Google Cloud",
    date: "February 2025",
    credentialID: "ABC-67890",
    link: "https://google.com/certifications/abc",
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
