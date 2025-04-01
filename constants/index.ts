import projectOne from "@/images/projectOne.png";
import certificateOne from "@/images/certificateOne.png";
import certificateTwo from "@/images/certificateTwo.png";
import certificateThree from "@/images/certificateThree.png";
import certificateFour from "@/images/certificateFour.png";
import certificateFive from "@/images/certificateFive.png";
import certificateSix from "@/images/certificateSix.png";
import certificateSeven from "@/images/certificateSeven.png";
import certificateEight from "@/images/certificateEight.png";

export const NavbarData = [
  { title: "Home", href: "/" },
  { title: "Certifications", href: "/certificates" },
  { title: "Resume", href: "/resume" },
  { title: "Project", href: "/project" },
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
    title: "ETHICAL HACKING",
    issuer: "IIT Delhi",
    date: "Feb 2024",
    image: certificateOne,
  },
  {
    id: "02",
    title: "IMPLEMENTATION OF AI",
    issuer: "VIGYANTRAM",
    date: "Jan 2022",
    image: certificateTwo,
  },
  {
    id: "03",
    title: "HTC 3.0 24-HOUR HACKATHON",
    issuer: "BVCOE, DELHI",
    date: "March 2024",
    image: certificateThree,
  },
  {
    id: "04",
    title: "TALENT HUNT COMPETITION",
    issuer: "HMRITM, DELHI",
    date: "March 2024",
    image: certificateFour,
  },
  {
    id: "05",
    title: "INTERVIEW MASTERCLASS",
    issuer: "CHERAG BACHHAWAT",
    date: "Jan 2023",
    image: certificateFive,
  },
  {
    id: "06",
    title: "DATA ANALYTICS WITH AI",
    issuer: "CODING BLOCKS",
    date: "Feb 2025",
    image: certificateSix,
  },
  {
    id: "07",
    title: "GEN AI MASTERCLASS",
    issuer: "ACCELERATOR X",
    date: "Feb 2025",
    image: certificateSeven,
  },
  {
    id: "08",
    title: "DATA SCIENCE",
    issuer: "GUVI HCL",
    date: "Feb 2025",
    image: certificateEight,
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
    title: "Educational Background",
    items: [
      {
        degree: "Bachelor of Technology",
        institution: "Guru Gobind Singh Indraprastha University",
        period: "2022-2026",
        description: "Specialized in Software development and computer science",
        achievements: ["8.2GPA"],
      },
      {
        degree: "Senior Secondary",
        institution: "David Model Senior Secondary School",
        period: "2020-2021",
        description: "Passed from C.B.S.E. Board",
        achievements: ["7.6 CGPA"],
      },
      {
        degree: "Secondary",
        institution: "David Model Senior Secondary School",
        period: "2018-2019",
        description: "Passed from C.B.S.E. Board",
        achievements: ["8.4 CGPA"],
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
