import projectOne from "@/images/projectOne.png";
import certificateOne from "@/images/certificateOne.png";
import certificateTwo from "@/images/certificateTwo.png";
import certificateThree from "@/images/certificateThree.png";
import certificateFour from "@/images/certificateFour.png";
import certificateFive from "@/images/certificateFive.png";
import certificateSix from "@/images/certificateSix.png";
import certificateSeven from "@/images/certificateSeven.png";
import certificateEight from "@/images/certificateEight.png";
import certificateNine from "@/images/certificateNine.png";
import certificateTen from "@/images/certificateTen.png";
import certificateEleven from "@/images/certificateEleven.png";
import certificateTwelve from "@/images/certificateTwelve.png";

export const NavbarData = [
  { title: "Home", href: "/" },
  { title: "Certifications", href: "/certificates" },
  { title: "Resume", href: "/resume" },
  { title: "Project", href: "/project" },
];

export const statsData = [
  { num: 3, text: "Years of expience" },
  { num: 34, text: "Projects Completed" },
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
  {
    id: "09",
    title: "INTRODUCTION TO NOSQL DATABASES",
    issuer: "INFOSYS SPRINGBOARD",
    date: "June 2025",
    image: certificateNine,
  },
  {
    id: "10",
    title: "SOFTWARE ENGINEERING AND AGILE SOFTWARE DEVELOPMENT",
    issuer: "INFOSYS SPRINGBOARD",
    date: "June 2025",
    image: certificateTen,
  },
  {
    id: "11",
    title: "BASICS OF PYTHON",
    issuer: "INFOSYS SPRINGBOARD",
    date: "June 2025",
    image: certificateEleven,
  },
  {
    id: "12",
    title: "INTRODUCTION TO ARTIFICIAL INTELLIGENCE",
    issuer: "INFOSYS SPRINGBOARD",
    date: "June 2025",
    image: certificateTwelve,
  },
];

export const tabContent = {
  experience: {
    title: "My Experience",
    items: [
      {
        role: "Full Stack Project",
        project: "E-commerce Website",
        period: "2025",
        description:
          "Developed and maintained full stack webapp using frontend and backend technologies with connected database",
        highlights: ["Node.js", "React", "Postman", "Supabase", "Netlify"],
      },
      {
        role: "Python Advanced Project",
        project: "AI Agent Chatbot",
        period: "2025",
        description:
          "Developed and maintained a full stack AI Agent Chatbotn with web search integration and real time data processing",
        highlights: ["Python", "OpenAI API", "Streamlit", "LangChain", "Langgraph", "Fastapi", "Uvicorn", "Tavily API", "Groq API"],
      },
      {
        role: "Python Advanced Project",
        project: "Inventory Management System",
        period: "2024",
        description:
          "Developed and maintained a complete Inventory Management System with connected database",
        highlights: ["Python", "MySQL"],
      },
      {
        role: "Python Advanced Project",
        project: "Student Result Management System",
        period: "2024",
        description:
          "Developed and maintained a complete Student Result Management System with connected database",
        highlights: ["Python", "MySQL"],
      },
      {
        role: "Python App Development",
        project: "E-commerce App",
        period: "2024",
        description:
          "Developed and maintained a full stack E-commerce App with payment integration using Razorpay",
        highlights: ["Python", "Flutter", "Mongodb", "Razorpay"],
      },
      {
        role: "React Project",
        project: "React Admin Dashboard with Real Time Data Charts Events",
        period: "2024",
        description:
          "Developed and maintained a React project with real time data charts and events",
        highlights: ["React.js", "Typescript", "Graphql", "Razorpay", "Netlify"],
      },
      {
        role: "Responsive Website Development",
        project: "Crypto Website",
        period: "2024",
        description:
          "Developed and maintained a responsive landing page for a Crypto website",
        highlights: ["HTML", "CSS", "JavaScript"],
      },
      {
        role: "Three Js Project",
        project: "3D Globe",
        period: "2024",
        description:
          "Developed and maintained a responsive landing page for 3D Globe",
        highlights: ["HTML", "CSS", "Three.js"],
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
    title: "E-commerce WebApp",
    category: "Full Stack Project",
    description: "A modern E-commerce platform built with React.js and Node.js",
    stack: ["React.js", "Node.js", "Postman", "Supabase", "Netlify"],
    image: projectOne,
    liveUrl: "https://vedstationarygraphics.netlify.app/",
    githubUrl: "https://github.com/nishant0820",
  },
  
];
