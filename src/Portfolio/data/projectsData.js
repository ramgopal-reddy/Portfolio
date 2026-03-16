export const projectsData = [
  {
    title: "Hybrid Semantic Product Search System",
    description:
      "A production-ready hybrid semantic search engine for intelligent and constraint-aware product retrieval.",
    image: "🔎",
    tech: [
      "Python",
      "FastAPI",
      "FAISS",
      "Google Gemini",
      "Cloudflare Workers AI",
      "Vector Embeddings",
    ],
    demo: "#",
    github: "https://github.com/ramgopal-reddy/Vectors_LLM_Model",
    detailedDescription:
      "This system combines LLM-based query understanding with high-performance vector search to deliver fast and accurate product retrieval. Natural language queries are processed using Google Gemini to extract structured parameters such as product type, price range, rating, category, and brand. For semantic similarity, 384-dimensional embeddings are generated using Cloudflare Workers AI (BGE-small model). Product embeddings are precomputed and stored in a FAISS index optimized with cosine similarity. The backend, built with FastAPI, performs top-K nearest neighbor search and applies progressive filtering with intelligent semantic fallback to ensure relevant results even under strict constraints.",
    features: [
      "LLM-powered structured query extraction",
      "FAISS-based top-K semantic vector search",
      "Edge-powered embedding generation with caching",
      "Progressive filtering with intelligent fallback",
      "Multi-layer caching for near-millisecond repeated queries",
    ],
    timeline: "2 months",
    challenges:
      "Balancing semantic relevance with strict structured filtering under 512MB RAM constraints while maintaining low latency and cost efficiency.",
    role: "Backend developer and system architect.",
  },
  {
    title: "MusicPlatform",
    description:
      "A digital platform for streaming and managing music collections.",
    image: "🎵",
    tech: ["React", "Firebase"],
    demo: "#",
    github: "https://github.com/ramgopal-reddy/MusicPlatform",
    detailedDescription:
      "MusicPlatform enables users to stream, organize, and discover music. The platform likely offers playlist creation, music search, and personalized recommendations. Its goal is to provide a seamless and enjoyable musical experience.",
    features: [
      "Music streaming and playback",
      "Playlist management",
      "Music discovery features",
    ],
    timeline: "2 months",
    challenges:
      "Ensuring a smooth streaming experience and managing audio data efficiently.",
    role: "Full-stack developer and platform architect.",
  },
  {
    title: "HealthInsuranceModel",
    description:
      "Python-powered predictive model for health insurance analytics.",
    image: "🏥",
    tech: ["Python"],
    demo: "#",
    github: "https://github.com/ramgopal-reddy/HealthInsuranceModel",
    detailedDescription:
      "This project implements machine learning models to predict health insurance parameters such as eligibility, pricing, or claim risks. It processes user data and applies analytical techniques to produce actionable insights for insurers and customers.",
    features: [
      "Data preprocessing and cleaning",
      "Predictive analytics for insurance",
      "Automated report generation",
    ],
    timeline: "2 months",
    challenges: "Building robust models with limited or imbalanced datasets.",
    role: "ML model developer and data analyst.",
  },
  {
    title: "SpaceExplore",
    description:
      "Interactive web project for exploring space objects and data.",
    image: "🚀",
    tech: ["JavaScript", "CSS", "HTML"],
    demo: "#",
    github: "https://github.com/ramgopal-reddy/SpaceExplore",
    detailedDescription:
      "SpaceExplore is a web-based application that visually presents data about space, such as planets, stars, and missions. It utilizes engaging interfaces and interactive features to educate and inspire curiosity about the universe.",
    features: [
      "Interactive visualizations",
      "Responsive web design",
      "Multimedia content",
    ],
    timeline: "3 months",
    challenges:
      "Rendering complex data interactively while maintaining performance.",
    role: "Front-end developer and UI/UX designer.",
  },
  {
    title: "Smart-Parking",
    description:
      "Parking prediction and monitoring system leveraging Jupyter and JavaScript.",
    image: "🅿️",
    tech: ["Jupyter Notebook", "JavaScript", "Other"],
    demo: "#",
    github: "https://github.com/ramgopal-reddy/Smart-Parking",
    detailedDescription:
      "Smart-Parking integrates predictive analytics and monitoring to optimize parking usage. Built with Jupyter Notebooks and JavaScript, it likely gathers, analyzes, and visualizes parking data to assist users in finding available spots efficiently.",
    features: [
      "Parking prediction algorithms",
      "Real-time monitoring interfaces",
      "Data analysis and visualization",
    ],
    timeline: "Ongoing",
    challenges: "Integrating real-time data streams with predictive analytics.",
    role: "Data science lead and dashboard developer.",
  },
  {
    title: "Resume_Compare",
    description:
      "Automated tool for comparing job candidates’ resumes using multiple technologies.",
    image: "📄",
    tech: ["JavaScript", "Python", "CSS", "HTML"],
    demo: "#",
    github: "https://github.com/ramgopal-reddy/Resume_Compare",
    detailedDescription:
      "Resume_Compare is designed to analyze and compare multiple resumes to assist in candidate selection. It leverages both backend (Python) and frontend (JavaScript, CSS, HTML) technologies to process text, extract features, and present comparison results.",
    features: [
      "Resume parsing and feature extraction",
      "Automated candidate comparison",
      "User-friendly web interface",
    ],
    timeline: "4 months",
    challenges:
      "Accurately extracting and aligning key skills from varied resume formats.",
    role: "Full-stack developer and algorithm designer.",
  },
  {
    title: "HealthInsuranceLLM",
    description: "Large Language Model application for health insurance tasks.",
    image: "🤖",
    tech: ["Python"],
    demo: "#",
    github: "https://github.com/ramgopal-reddy/HealthInsuranceLLM",
    detailedDescription:
      "This project applies large language models to solve tasks in the health insurance domain. It may include claim automation, data extraction from documents, or customer query response using NLP. The system aims to streamline insurance processes.",
    features: [
      "NLP for document understanding",
      "Automated claim assistance",
      "Conversational query handling",
    ],
    timeline: "Ongoing",
    challenges:
      "Fine-tuning LLMs for specialized insurance vocabulary and regulatory compliance.",
    role: "NLP engineer and machine learning specialist.",
  },
  {
    title: "PlagarismModel",
    description: "A Python tool for detecting text plagiarism in documents.",
    image: "🕵️‍♂️",
    tech: ["Python"],
    demo: "#",
    github: "https://github.com/ramgopal-reddy/PlagarismModel",
    detailedDescription:
      "PlagarismModel is a Python project aimed at analyzing and detecting plagiarism in textual content. It likely compares documents using various similarity-checking algorithms and reports overlaps or copied sections. The tool streamlines the process of validating originality in essays, reports, and assignments.",
    features: [
      "Text comparison and similarity detection",
      "Automated plagiarism reporting",
      "Scalable to multiple document comparisons",
    ],
    timeline: "1 month",
    challenges:
      "Optimizing text similarity algorithms for speed and accuracy on large datasets.",
    role: "Algorithm designer and lead Python developer.",
  },
  {
    title: "MedicalAI & MedicalAI_UI",
    description:
      "AI-powered medical analysis with an interactive web interface.",
    image: "🧬",
    tech: ["Python", "TypeScript", "JavaScript", "HTML", "CSS"],
    demo: "#",
    github: "https://github.com/ramgopal-reddy/MedicalAI",
    detailedDescription:
      "MedicalAI and MedicalAI_UI together provide an end-to-end platform for leveraging artificial intelligence in medical analysis. The backend (MedicalAI) utilizes Python-based models to interpret and diagnose medical data, while the frontend (MedicalAI_UI) delivers a user-friendly, interactive web interface built with TypeScript and JavaScript. This combination allows clinicians and researchers to easily input data and receive insightful, AI-driven predictions or reports.",
    features: [
      "Machine learning models for medical data analysis",
      "Modern, responsive web UI",
      "Seamless backend-frontend integration for data input and results display",
    ],
    timeline: "3 months",
    challenges:
      "Integrating complex AI models with a dynamic web user interface and ensuring accurate data exchange.",
    role: "End-to-end developer: built models, designed UI, and oversaw integration.",
  },
  {
    title: "CipherSchools_ML",
    description:
      "A suite of machine learning notebooks for educational purposes.",
    image: "📚",
    tech: ["Jupyter Notebook"],
    demo: "#",
    github: "https://github.com/ramgopal-reddy/CipherSchools_ML",
    detailedDescription:
      "CipherSchools_ML features comprehensive Jupyter Notebooks that demonstrate fundamental and advanced machine learning concepts. Tailored for instructional use, the project covers data preprocessing, model training, and algorithm explanations, making it accessible to learners and enthusiasts. Its primary objective is to provide hands-on ML experience in an easily digestible format.",
    features: [
      "Step-by-step machine learning tutorials",
      "Code examples with real datasets",
      "Illustrative visualizations and explanations",
    ],
    timeline: "2 months",
    challenges:
      "Presenting complex ML concepts in a clear, approachable manner for beginners.",
    role: "Notebook author and ML content creator.",
  },
];
