import supportgenie from "@/assets/work-supportgenie.jpg";
import crownfit from "@/assets/work-crownfit.jpg";
import finpsych from "@/assets/work-finpsych.jpg";
import talentlens from "@/assets/work-talentlens.jpg";
import intelledge from "@/assets/work-intelledge.jpg";

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
    tech: ["Python", "FastAPI", "RAG", "LLMs", "React"],
    github: "https://github.com/aditisprasad",
  },
  {
    index: "02",
    name: "CrownFit",
    category: "AI / Product",
    description: "AI-powered pageant preparation platform.",
    image: crownfit,
    layout: "text-right",
    tech: ["React", "Node.js", "MediaPipe", "OpenCV"],
    github: "https://github.com/aditisprasad",
  },
  {
    index: "03",
    name: "FinPsych",
    category: "AI / Data",
    description: "Behavioral finance analytics platform.",
    image: finpsych,
    layout: "centered",
    tech: ["Python", "Pandas", "Scikit-learn", "PostgreSQL"],
    github: "https://github.com/aditisprasad",
  },
  {
    index: "04",
    name: "TalentLens",
    category: "Data / HR Analytics",
    description: "Workforce and recruitment intelligence platform.",
    image: talentlens,
    layout: "text-left",
    tech: ["Python", "SQL", "Power BI", "Flask"],
    github: "https://github.com/aditisprasad",
  },
  {
    index: "05",
    name: "Intelledge",
    category: "AI / Voice",
    description: "Multilingual AI campus assistant.",
    image: intelledge,
    layout: "centered",
    tech: ["Python", "LLMs", "RAG", "React"],
    github: "https://github.com/aditisprasad",
  },
];

export const experience = [
  {
    role: "Full Stack Development Intern",
    company: "Skillbit Technologies",
    period: "Jan 2026 — Mar 2026",
    note: "Worked on full-stack web features across frontend and backend.",
  },
  {
    role: "Software Development Intern",
    company: "Prodigy Infotech",
    period: "Jun 2025 — Jul 2025",
    note: "Built software development tasks and applications with Python and JavaScript.",
  },
  {
    role: "Web Development Intern",
    company: "RD Infro Technology",
    period: "Jan 2025 — Mar 2025",
    note: "Developed responsive web interfaces and components.",
  },
];

export const skills = [
  {
    label: "Development",
    items: [
      "Python",
      "Java",
      "JavaScript",
      "React",
      "Node.js",
      "Express.js",
      "FastAPI",
      "Flask",
    ],
  },
  {
    label: "AI / ML",
    items: ["RAG", "LLMs", "Pandas", "NumPy", "Scikit-learn", "OpenCV", "MediaPipe"],
  },
  { label: "Data", items: ["SQL", "PostgreSQL", "MongoDB", "Power BI", "Excel"] },
  {
    label: "Product / Design",
    items: ["UI/UX", "Design Thinking", "Product Development", "User-Centered Design"],
  },
  { label: "Tools", items: ["GitHub", "VS Code", "Postman"] },
];

export const leadership = [
  { org: "FOSS Club", role: "Marketing & Management Lead" },
  { org: "Grassroot Research and Innovation Movement", role: "Core Team Member" },
];

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
  resume: "https://drive.google.com/file/d/1quy80GJwGCa6sgahNQpG7EVr-vAEDIW3/view?usp=sharing",
};
