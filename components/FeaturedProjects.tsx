import { ExternalLink, Github, Code, Sparkles, Shield, Fish } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "SmartClass AI — Agentic AI-Based Classroom Automation System",
    shortTitle: "SmartClass AI",
    description: "Built a full-stack system from scratch featuring scalable UI modules, backend APIs, and account console features across web and mobile.",
    tech: ["React", "Tailwind CSS", "Flask", "FastAPI", "LLM APIs"],
    icon: <Sparkles className="text-neon-cyan" size={28} />,
    bullets: [
      "Implemented a RAG-based AI quiz-generation pipeline using LLM APIs, generating 10+ contextually accurate MCQs per PDF, reducing teacher prep time by 70%.",
      "Designed REST APIs and integrated frontend-backend workflows for leaderboard, quiz evaluation, and performance-tracking modules.",
      "Conducted comprehensive system tests and maintained written documentation for all API contracts.",
    ],
    color: "neon-cyan",
    link: "#",
    github: "#",
  },
  {
    id: 2,
    title: "Fed-EADP-LoRA — Privacy-Preserving Federated Fine-Tuning for LLMs",
    shortTitle: "Fed-EADP-LoRA",
    description: "Built a federated learning pipeline with LoRA-based parameter-efficient fine-tuning to train LLMs across decentralized clients without sharing raw data.",
    tech: ["Python", "PyTorch", "LoRA", "Federated Learning", "Differential Privacy"],
    icon: <Shield className="text-neon-purple" size={28} />,
    bullets: [
      "Implemented entity-aware differential privacy with selective noise injection to protect sensitive information while preserving model utility.",
      "Simulated privacy attacks (membership inference) and quantified trade-offs using an ε-budget.",
      "Achieved secure decentralized LLM training with minimal performance degradation.",
    ],
    color: "neon-purple",
    link: "#",
    github: "#",
  },
  {
    id: 3,
    title: "FoodGenie — AI-Powered Restaurant Management System",
    shortTitle: "FoodGenie",
    description: "Developed a full-stack restaurant management platform using the MERN Stack, enabling customer ordering, restaurant operations, menu management, and authentication.",
    tech: ["MongoDB", "Express.js", "React", "Node.js", "Google Gemini AI", "REST APIs"],
    icon: <Code className="text-neon-pink" size={28} />,
    bullets: [
      "Integrated Google Gemini AI for automated food-description generation and restaurant review summarization.",
      "Designed secure REST APIs for customer ordering, menu operations, and order status processing.",
      "Deployed application seamlessly via Netlify, Render, and MongoDB Atlas cloud infrastructure.",
    ],
    color: "neon-pink",
    link: "#",
    github: "#",
  },
  {
    id: 4,
    title: "AI-Driven Marine Biodiversity Intelligence Platform",
    shortTitle: "Marine Biodiversity AI",
    description: "Developed a scalable, secure AI-based system integrating environmental (SST, chlorophyll, DO) and eDNA datasets to predict ecosystem stress and habitat risk.",
    tech: ["Python", "GIS", "Data Visualization", "Scikit-learn", "Environmental AI"],
    icon: <Fish className="text-neon-lime" size={28} />,
    bullets: [
      "Built a biodiversity modeling pipeline and GIS-based dashboard for juvenile risk mapping, early-warning alerts, and decision-support visualization.",
      "Enabled data-driven sustainable fisheries planning.",
      "Achieved 85%+ accuracy in hotspot prediction across 500+ marine data points.",
    ],
    color: "neon-lime",
    link: "#",
    github: "#",
  },
];

export default function FeaturedProjects() {
  return (
    <section id="projects" className="py-20 px-6 bg-gradient-to-b from-dark-950 to-dark-900">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="glow-text">Projects</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Applied AI/ML systems, full-stack applications, and production data platforms
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="glow-border bg-dark-900/60 p-8 rounded-xl hover:bg-dark-900 transition-smooth flex flex-col justify-between group animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div>
                {/* Header with Icon */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10 group-hover:scale-110 transition-transform">
                    {project.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white group-hover:text-neon-cyan transition-smooth leading-tight">
                      {project.shortTitle}
                    </h3>
                    <p className="text-xs text-gray-400 mt-1 line-clamp-1">
                      {project.title}
                    </p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-300 text-sm mb-4 leading-relaxed font-normal">
                  {project.description}
                </p>

                {/* Highlights list */}
                <ul className="space-y-2 mb-6 text-gray-400 text-xs md:text-sm">
                  {project.bullets.map((bullet, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-neon-cyan mt-0.5">•</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6 border-t border-white/10 pt-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-2.5 py-1 rounded-md bg-neon-cyan/10 text-neon-cyan border border-neon-cyan/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  <a
                    href={project.link}
                    className="flex items-center gap-2 text-neon-cyan hover:text-neon-pink transition-smooth text-sm font-medium"
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                  <a
                    href={project.github}
                    className="flex items-center gap-2 text-neon-purple hover:text-neon-cyan transition-smooth text-sm font-medium"
                  >
                    <Github size={16} />
                    GitHub Repo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
