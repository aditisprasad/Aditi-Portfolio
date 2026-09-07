import supportgenie from "@/assets/work-supportgenie.jpg";
import crownfit from "@/assets/work-crownfit.jpg";
import finpsych from "@/assets/work-finpsych.jpg";
import talentlens from "@/assets/work-talentlens.jpg";
import supplychainiq from "@/assets/work-supplychainiq.jpg";

export type ProjectLayout = "text-left" | "text-right" | "centered";

export type Project = {
  index: string;
  name: string;
  category: string;
  description: string;
  image: string;
  layout: ProjectLayout;
  tech: string[];
  github?: string;
  demo?: string;
};

/** Edit project content here — the gallery layout adapts automatically. */
export const projects: Project[] = [
  {
    index: "01",
    name: "SupportGenie",
    category: "AI / Customer Support",
    description: "AI-powered customer support system.",
    image: supportgenie,
    layout: "text-left",
    tech: ["Python", "FastAPI", "React.js", "LangChain", "OpenAI API", "FAISS", "PostgreSQL"],
    github: "https://github.com/aditisprasad",
  },
  {
    index: "02",
    name: "CrownFit",
    category: "AI / Product",
    description: "AI-powered pageant preparation platform.",
    image: crownfit,
    layout: "text-right",
    tech: ["Python", "Scikit-learn", "OpenCV", "MediaPipe", "Google Maps API"],
    github: "https://github.com/aditisprasad",
  },
  {
    index: "03",
    name: "FinPsych",
    category: "AI / Data",
    description: "Behavioral finance analytics platform.",
    image: finpsych,
    layout: "centered",
    tech: ["React", "Python", "Scikit-learn", "Isolation Forest", "K-Means"],
    github: "https://github.com/aditisprasad",
  },
  {
    index: "04",
    name: "TalentLens",
    category: "Data / HR Analytics",
    description: "Workforce and recruitment intelligence platform.",
    image: talentlens,
    layout: "text-left",
    tech: ["Python", "SQL", "PostgreSQL", "Power BI", "React", "FastAPI"],
    github: "https://github.com/aditisprasad",
  },
  {
    index: "05",
    name: "SupplyChainIQ",
    category: "AI / Supply Chain",
    description: "AI supply chain procurement intelligence platform.",
    image: supplychainiq,
    layout: "centered",
    tech: ["Python", "SQL", "PostgreSQL", "Power BI", "React", "FastAPI", "OpenAI API"],
    github: "https://github.com/aditisprasad",
  },
];

export const experience = [
  {
    role: "Full Stack Development Intern",
    company: "Skillbit Technologies",
    period: "Jan 2026 — Mar 2026",
    note: "Built and maintained full-stack web modules with React.js and Node.js/Express.js, and integrated RESTful APIs connecting the frontend to MongoDB.",
  },
  {
    role: "Software Development Intern",
    company: "Prodigy Infotech",
    period: "Jun 2025 — Jul 2025",
    note: "Developed three desktop GUI applications in Python within two-week sprints, adding input validation and error handling to reduce runtime crashes.",
  },
];

export const education = {
  school: "Jain University",
  degree: "B.Tech in Software Engineering",
  location: "Bengaluru, Karnataka",
  period: "Expected 2027",
};

export const skills = [
  {
    label: "Languages",
    items: ["Python", "Java"],
  },
  {
    label: "AI / ML",
    items: ["RAG", "LLMs", "NumPy", "Pandas", "Scikit-learn", "OpenCV"],
  },
  { label: "Databases", items: ["SQL", "PostgreSQL", "MongoDB"] },
  { label: "Core Concepts", items: ["DSA", "OOP", "Operating Systems"] },
  {
    label: "Web Development",
    items: ["HTML", "CSS", "JavaScript", "React.js", "Node.js", "Express.js", "Flask"],
  },
  { label: "Tools", items: ["GitHub", "VS Code", "Postman", "Power BI", "Excel"] },
  {
    label: "Soft Skills",
    items: [
      "Public Speaking",
      "Logical Problem-Solving",
      "Team Collaboration",
      "Effective Communication",
      "Event Management",
      "Marketing",
    ],
  },
];

export const leadership = [
  {
    org: "FOSS Club",
    role: "Marketing & Management Lead · Jan 2025 — May 2026",
  },
  { org: "Grassroot Research and Innovation Movement", role: "Core Team Member" },
];

export const languages = ["English", "Kannada", "Hindi", "Telugu", "German (Learning)"];

export const process = [
  "Problem",
  "Understand",
  "Analyze",
  "Design",
  "Build",
  "Iterate",
];

export const contact = {
  email: "aditisprasad16@gmail.com",
  linkedin: "https://linkedin.com/in/aditi-prasad-678808299",
  github: "https://github.com/aditisprasad",
  resume: "https://drive.google.com/file/d/1zwLRrb4gyEuPSywIt6433A5YzA9omLVr/view?usp=sharing",
};
