import { Code, Database, Brain, Server, Layout, Terminal } from 'lucide-react';

export const personalDetails = {
  name: "Udayanga Weerakoon",
  title: "Data Science Undergraduate & Full-Stack Developer",
  email: "udayangaweerakoon212@gmail.com",
  // Updated Links
  github: "https://github.com/UdayangaWeearakoon", 
  linkedin: "https://www.linkedin.com/in/udayanga-weerakoon-0b77a1269/",
  phone: "94764143047",
  about: "Motivated Data Science undergraduate (CGPA 3.58) with skills in full-stack development, automation, and AI-based solutions. I am passionate about creating smart, practical systems and currently seeking an internship to contribute to meaningful projects.",
};

export const skills = [
  {
    category: "Data Science & AI",
    icon: <Brain className="w-6 h-6" />,
    items: ["Python", "Scikit-learn", "Pandas/NumPy", "NLTK", "R", "LightGBM"]
  },
  {
    category: "Full Stack Web",
    icon: <Layout className="w-6 h-6" />,
    items: ["React.js", "Next.js", "Node.js", "Express.js", "MERN Stack", "Spring Boot"]
  },
  {
    category: "Cloud & DevOps",
    icon: <Server className="w-6 h-6" />,
    items: ["AWS", "Azure", "Docker", "Kubernetes", "Git", "Hadoop/Spark"]
  },
  {
    category: "Tools",
    icon: <Terminal className="w-6 h-6" />,
    items: ["PostgreSQL", "FastAPI", "Figma", "VS Code", "IntelliJ"]
  }
];

export const projects = [
  {
    id: 1,
    title: "Agentic AI Fashion Trend Predictor",
    description: "Full-stack AI system predicting global fashion trends using social media data, OpenAI GPT-4o, and Google Gemini APIs.",
    tags: ["FastAPI", "React", "PostgreSQL", "GenAI"],
    // Add your actual repo link here
    github: "https://github.com/pamuditha-senanayake/fashion-backend.git", 
  },
  {
    id: 2,
    title: "RetailIQ - Sales Prediction",
    description: "End-to-end predictive modeling system for retail sales using LightGBM with automated cleaning and customer segmentation.",
    tags: ["Python", "Machine Learning", "LightGBM", "Data Engineering"],
    github: "https://github.com/pamuditha-senanayake/fdm_mini_project_2025.git",
  },
  {
    id: 3,
    title: "ASCII Art Generator",
    description: "Winner at SynthArt Synergy 2024. A live webcam feed that converts real-time video into ASCII characters.",
    tags: ["HTML", "CSS", "JavaScript", "Real-time Processing"],
    github: "https://github.com/UdayangaWeearakoon/AsciiArt.git",
  },
  {
    id: 4,
    title: "Supermarket Aisle Navigation System",
    description: "MERN stack inventory management dashboard allowing managers to track product data efficiently.",
    tags: ["MongoDB", "Express", "React", "Node.js"],
    github: "https://github.com/UdayangaWeearakoon/Aisle-Navigation-Final.git",
  },
    {
    id: 5,
    title: "ZETA - Finance Tracker App",
    description: "Mobile application built with Kotlin allowing users to log expenses, set budgets, and view daily statistics.",
    tags: ["Kotlin", "Android", "Mobile Dev"],
    github: "https://github.com/UdayangaWeearakoon/Zeta-Finance_Tracker-Android-.git",
  }
];

export const certifications = [
  {
    title: "AWS SimuLearn - Cloud Practitioner",
    issuer: "Amazon Web Services (AWS)",
    type: "Certification"
  },
  {
    title: "Python for Beginners",
    issuer: "University of Moratuwa, Sri Lanka",
    type: "Certification"
  },
  {
    title: "Finalist (Ranked 14th) - SLIIT Xtreme 4.0",
    issuer: "IEEEXtreme Hackathon 2025",
    type: "Achievement"
  },
  {
    title: "Winner - SynthArt Synergy 2024",
    issuer: "SLIIT Kandy Uni",
    type: "Achievement"
  },
  {
    title: "Dean's List (Awarded Twice - Y2S1 & Y1S1)",
    issuer: "SLIIT",
    type: "Achievement"
  }
];