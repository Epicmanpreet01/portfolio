import {
  Code,
  Terminal,
  Database,
  Globe,
  Cpu,
  Layout,
  Layers,
  Wrench,
  Brain,
  Zap,
  Shield,
  Smartphone,
} from "lucide-react";

const SKILLS_DATA = [
  // ─── Languages ───
  { name: "Python", category: "Languages", icon: <Terminal size={18} /> },
  { name: "JavaScript", category: "Languages", icon: <Code size={18} /> },
  { name: "C", category: "Languages", icon: <Terminal size={18} /> },
  { name: "C++", category: "Languages", icon: <Terminal size={18} /> },

  // ─── Frontend ───
  { name: "React", category: "Frontend", icon: <Code size={18} /> },
  { name: "Next.js", category: "Frontend", icon: <Layers size={18} /> },
  { name: "HTML5", category: "Frontend", icon: <Layout size={18} /> },
  { name: "CSS3", category: "Frontend", icon: <Layout size={18} /> },
  { name: "Tailwind CSS", category: "Frontend", icon: <Layout size={18} /> },

  // ─── Backend ───
  { name: "Node.js", category: "Backend", icon: <Globe size={18} /> },
  { name: "Express.js", category: "Backend", icon: <Globe size={18} /> },
  { name: "FastAPI", category: "Backend", icon: <Terminal size={18} /> },
  { name: "REST APIs", category: "Backend", icon: <Globe size={18} /> },
  { name: "WebSockets", category: "Backend", icon: <Zap size={18} /> },

  { name: "MongoDB", category: "Backend", icon: <Database size={18} /> },
  { name: "Mongoose", category: "Backend", icon: <Database size={18} /> },
  { name: "PostgreSQL", category: "Backend", icon: <Database size={18} /> },
  { name: "MySQL", category: "Backend", icon: <Database size={18} /> },

  // ─── AI ───
  { name: "Machine Learning", category: "AI", icon: <Brain size={18} /> },
  { name: "Deep Learning", category: "AI", icon: <Brain size={18} /> },
  { name: "Computer Vision", category: "AI", icon: <Brain size={18} /> },
  {
    name: "Natural Language Processing",
    category: "AI",
    icon: <Brain size={18} />,
  },
  { name: "Generative AI", category: "AI", icon: <Brain size={18} /> },
  { name: "PyTorch", category: "AI", icon: <Zap size={18} /> },
  { name: "TensorFlow", category: "AI", icon: <Zap size={18} /> },
  { name: "SHAP", category: "AI", icon: <Brain size={18} /> },
  { name: "LIME", category: "AI", icon: <Brain size={18} /> },

  // ─── Concepts ───
  { name: "Data Science", category: "Concepts", icon: <Database size={18} /> },
  { name: "Data Analysis", category: "Concepts", icon: <Database size={18} /> },
  {
    name: "JWT Authentication",
    category: "Concepts",
    icon: <Shield size={18} />,
  },
  {
    name: "Role-Based Access Control (RBAC)",
    category: "Concepts",
    icon: <Shield size={18} />,
  },

  // ─── Tools ───
  { name: "Git", category: "Tools", icon: <Wrench size={18} /> },
  { name: "GitHub", category: "Tools", icon: <Wrench size={18} /> },
  { name: "Docker", category: "Tools", icon: <Cpu size={18} /> },
  { name: "AWS (Basics)", category: "Tools", icon: <Globe size={18} /> },
  {
    name: "PySide6 / PyQt",
    category: "Tools",
    icon: <Smartphone size={18} />,
  },
  {
    name: "Desktop Application Development",
    category: "Tools",
    icon: <Smartphone size={18} />,
  },

  // ─── Design ───
  { name: "Figma", category: "Design", icon: <Layout size={18} /> },
  { name: "UI/UX Design", category: "Design", icon: <Layout size={18} /> },
];

export default SKILLS_DATA;
