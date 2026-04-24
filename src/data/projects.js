import mentor_dashboard from "../assets/futureguard/mentor_dashboard.png";
import mentor_dashboard_inference from "../assets/futureguard/mentor_dashboard_inference.png";
import signup_page from "../assets/futureguard/signup_page.png";

const ALL_PROJECTS = [
  {
    id: "futureguard",
    category: "featured",
    title: "FutureGuard",
    desc: "An enterprise-grade full-stack ML platform for student dropout risk prediction with dashboards, CSV ingestion, explainable AI, and role-based workflows.",
    tags: ["React", "Node.js", "MongoDB", "FastAPI", "ML"],
    image: signup_page,
    repo: "https://github.com/Epicmanpreet01/future-guard",

    // ── Case-study detail fields ──
    year: "2025",
    role: "Full-Stack & ML Engineer",
    tools: [
      "React",
      "Node.js",
      "MongoDB",
      "FastAPI",
      "Scikit-Learn",
      "SHAP",
      "Tailwind CSS",
    ],
    overview:
      "FutureGuard is a comprehensive platform designed to identify students at risk of dropping out using machine learning models trained on institutional data. It features a multi-role dashboard system with CSV ingestion, real-time predictions, and explainable AI outputs powered by SHAP and LIME.",
    challenge:
      "Educational institutions lacked a unified tool to process student records, run predictive analytics, and present actionable insights to administrators — all while maintaining role-based access security.",
    solution:
      "Built an end-to-end platform with a React frontend, Node.js/Express backend, FastAPI ML microservice, and MongoDB storage. Implemented JWT authentication with RBAC, CSV pipeline processing, and integrated SHAP for model explainability.",
    contributions: [
      "Designed and implemented the full React dashboard with role-specific views",
      "Built the FastAPI ML microservice with model training and inference endpoints",
      "Integrated SHAP explainability visualizations into the prediction pipeline",
      "Developed CSV ingestion pipeline with validation and error handling",
      "Implemented JWT-based authentication with Role-Based Access Control",
      "Created real-time analytics dashboard with interactive charts",
    ],
    details: [
      {
        title: "Predictive Analytics Engine",
        content:
          "The core ML pipeline processes student data through feature engineering, model training, and inference stages. Multiple classification algorithms are evaluated, with the best-performing model deployed for real-time predictions.",
        points: [
          "Random Forest, XGBoost, and Logistic Regression model comparison",
          "Automated feature selection and preprocessing pipeline",
          "SHAP-based feature importance visualization",
          "Real-time prediction API with <200ms response time",
        ],
        image: null,
      },
      {
        title: "Multi-Role Dashboard System",
        content:
          "A sophisticated role-based access control system ensures that administrators, counselors, and faculty see only the data relevant to their responsibilities, with different action capabilities per role.",
        points: [
          "Admin panel with full system oversight and user management",
          "Counselor view with student risk profiles and intervention tracking",
          "Faculty dashboard with class-level analytics",
          "Responsive design with dark/light mode support",
        ],
        image: null,
      },
    ],
    features: [
      "Interactive risk score visualization",
      "CSV bulk upload with validation",
      "SHAP waterfall plots for prediction explanation",
      "Role-based filtered dashboards",
      "Real-time notification system",
      "Export reports as PDF",
    ],
    outcomes: [
      "Processes 10,000+ student records efficiently",
      "Achieves 92% prediction accuracy on test data",
      "Reduces manual risk assessment time by 80%",
      "Adopted for pilot testing at educational institution",
    ],
    team: [
      { name: "Manpreet Singh", role: "Full-Stack & ML Engineer" },
      { name: "Sumit Kumar", role: "Frontend Developer & Testing" },
    ],
    gallery: [signup_page, mentor_dashboard, mentor_dashboard_inference],
    demoUrl: null,
    nextProject: "winpet",
  },

  {
    id: "winpet",
    category: "featured",
    title: "WinPet",
    desc: "A desktop companion tray app with animated characters, modular assets, persistent config, and smooth UI behaviors.",
    tags: ["PySide6", "Python", "Desktop App"],
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
    repo: "https://github.com/Epicmanpreet01/WinPet",

    // ── Case-study detail fields ──
    year: "2025",
    role: "Desktop Application Developer",
    tools: ["PySide6", "Python", "Qt Framework", "JSON Config"],
    overview:
      "WinPet is a lightweight desktop companion that lives in your system tray. It features animated sprite characters that walk across your screen, with customizable behaviors, modular asset packs, and persistent user configuration.",
    challenge:
      "Creating a smooth, non-intrusive desktop overlay application that renders animated sprites without consuming excessive system resources, while providing an intuitive configuration interface.",
    solution:
      "Leveraged PySide6's frameless window capabilities with transparent backgrounds for sprite rendering, implemented a resource-efficient animation loop, and built a tray-based control interface for seamless user interaction.",
    contributions: [
      "Designed the sprite animation engine with frame-rate control",
      "Built the system tray interface with context menu controls",
      "Implemented persistent JSON-based configuration system",
      "Created modular asset loading for swappable character packs",
      "Developed smooth window dragging and positioning logic",
      "Optimized memory usage for long-running background operation",
    ],
    details: [
      {
        title: "Animation Engine",
        content:
          "A custom sprite animation system handles frame sequencing, directional movement, and idle state transitions. The engine runs at a configurable frame rate while maintaining minimal CPU overhead.",
        points: [
          "Frame-based sprite sheet rendering with smooth transitions",
          "Directional walking with screen-edge bounce detection",
          "Idle animation states with randomized triggers",
          "Configurable animation speed and character size",
        ],
        image: null,
      },
      {
        title: "System Integration",
        content:
          "Deep integration with the Windows system tray provides non-intrusive controls. The application starts minimized, persists settings across sessions, and supports auto-start with the OS.",
        points: [
          "System tray icon with rich context menu",
          "Auto-start registration with Windows registry",
          "Persistent user preferences via JSON config",
          "Graceful shutdown and resource cleanup",
        ],
        image: null,
      },
    ],
    features: [
      "Animated desktop companion characters",
      "System tray controls with context menu",
      "Modular asset/character pack system",
      "Persistent configuration across sessions",
      "Adjustable animation speed and size",
      "Minimal resource footprint",
    ],
    outcomes: [
      "Runs continuously with <1% CPU usage",
      "Supports multiple character asset packs",
      "Clean, intuitive user experience",
      "Open-source with community contributions",
    ],
    team: [{ name: "Manpreet Singh", role: "Desktop Application Developer" }],
    gallery: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2670&auto=format&fit=crop",
    ],
    demoUrl: null,
    nextProject: "facial-detection",
  },

  /* ──────────────────────── NOTEWORTHY ──────────────────────── */
  {
    id: "facial-detection",
    category: "featured",
    title: "Real-Time Facial Age & Gender Detection",
    desc: "Streamlit demo using YOLOv11 and a multi-head CNN for accurate detection, alignment, and prediction in real time.",
    tags: ["Python", "Computer Vision", "YOLO", "Deep Learning"],
    repo: "https://github.com/Epicmanpreet01/RealTime-FacialAgeGenderDetection-YOLOv11-MultiHeadResnetCNN-FunLittleProject",

    // ── Case-study detail fields ──
    year: "2025",
    role: "Computer Vision Engineer",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2574&auto=format&fit=crop",
    tools: ["Python", "YOLOv11", "TensorFlow", "OpenCV", "Streamlit"],
    overview:
      "A real-time facial analysis system that combines YOLOv11 for face detection with a custom multi-head ResNet CNN for simultaneous age and gender prediction. The system processes live video feeds with high accuracy and low latency.",
    challenge:
      "Achieving real-time performance while maintaining prediction accuracy across diverse demographics, lighting conditions, and camera angles in unconstrained environments.",
    solution:
      "Designed a two-stage pipeline: YOLOv11 handles robust face detection and alignment, while a custom multi-head CNN processes the aligned faces for simultaneous age regression and gender classification.",
    contributions: [
      "Trained and fine-tuned YOLOv11 for robust face detection",
      "Designed multi-head ResNet architecture for joint age/gender prediction",
      "Built Streamlit demo interface with real-time webcam processing",
      "Implemented face alignment and preprocessing pipeline",
      "Optimized inference pipeline for real-time performance",
    ],
    details: [
      {
        title: "Detection Pipeline",
        content:
          "The YOLOv11 detector provides bounding box predictions with high recall, followed by face alignment using landmark-based affine transformations to normalize pose variations before classification.",
        points: [
          "YOLOv11-based face detection with 98%+ recall",
          "Landmark-based face alignment and normalization",
          "Multi-scale detection for varying face sizes",
          "Non-maximum suppression for overlapping detections",
        ],
        image: null,
      },
      {
        title: "Multi-Head Classification",
        content:
          "A shared ResNet backbone feeds into two specialized heads: one for age regression and one for gender classification, allowing the model to learn shared facial features while specializing for each task.",
        points: [
          "Shared feature extraction with ResNet backbone",
          "Age regression head with MAE loss",
          "Gender classification head with binary cross-entropy",
          "Data augmentation for improved generalization",
        ],
        image: null,
      },
    ],
    features: [
      "Real-time webcam face detection",
      "Simultaneous age and gender prediction",
      "Multi-face processing in single frame",
      "Interactive Streamlit web interface",
      "Confidence score visualization",
    ],
    outcomes: [
      "Real-time processing at 30+ FPS",
      "Age prediction within ±4 years MAE",
      "95%+ gender classification accuracy",
      "Handles multiple faces simultaneously",
    ],
    team: [{ name: "Manpreet Singh", role: "Computer Vision Engineer" }],
    gallery: [
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2574&auto=format&fit=crop",
    ],
    demoUrl: null,
    nextProject: "futureguard",
  },

  {
    id: "nova",
    category: "noteworthy",
    title: "NOVA – Virtual Assistant",
    desc: "A Python-based assistant capable of voice/text commands, YouTube automation, media control, and API integrations.",
    tags: ["Python", "Voice UI", "Automation"],
    repo: "https://github.com/Epicmanpreet01/NOVA",
  },

  {
    id: "brain-tumor",
    category: "noteworthy",
    title: "Brain Tumor Prediction",
    desc: "ML powered prediction model for early brain tumor detection using imaging datasets and evaluation metrics.",
    tags: ["Python", "Machine Learning"],
    repo: "https://github.com/Epicmanpreet01/brainTumorPrediction",
  },

  {
    id: "breast-cancer",
    category: "noteworthy",
    title: "Breast Cancer Prediction",
    desc: "Notebook-based ML model for binary cancer prediction with classification algorithms and performance scoring.",
    tags: ["Jupyter", "ML", "Data Science"],
    repo: "https://github.com/Epicmanpreet01/breastCancerPrediction",
  },

  {
    id: "chatgenius",
    category: "noteworthy",
    title: "ChatGenius",
    desc: "Real-time chat application powered by WebSocket communication.",
    tags: ["Socket.io", "Node.js"],
  },
];

/* ── Derived views (no duplication, computed from the single array) ── */

/** Categorised lists for card-based listings (Projects section, Work page) */
const PROJECTS_DATA = {
  featured: ALL_PROJECTS.filter((p) => p.category === "featured"),
  noteworthy: ALL_PROJECTS.filter((p) => p.category === "noteworthy"),
};

/** Keyed lookup for the case-study detail page */
const PROJECT_DETAILS = Object.fromEntries(
  ALL_PROJECTS.filter((p) => p.overview).map((p) => [p.id, p]),
);

export default PROJECTS_DATA;
export { PROJECT_DETAILS, ALL_PROJECTS };
