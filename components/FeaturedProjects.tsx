

import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "AI-Driven Marine Biodiversity Intelligence Platform",
    description: "AI-based system integrating environmental (SST, chlorophyll, DO) and eDNA datasets to predict ecosystem stress, habitat risk, and fisheries hotspots with GIS-based visualization.",
    tech: ["Python", "ML", "GIS", "Data Analytics", "Environmental AI"],
    image: "🌊",
    link: "#",
    github: "#",
    highlights: "✓ Biodiversity modeling pipeline ✓ Early-warning alerts ✓ Sustainable fisheries planning"
  },
  {
    id: 2,
    title: "SmartClass AI – Classroom Automation System",
    description: "Full-stack system with automated attendance via face recognition, real-time classroom analytics, and RAG-based AI quiz generation from PDFs.",
    tech: ["React", "Flask", "FastAPI", "TailwindCSS", "LLM APIs"],
    image: "🤖",
    link: "#",
    github: "#",
    highlights: "✓ Face recognition attendance ✓ RAG quiz generation ✓ Performance tracking"
  },
  {
    id: 3,
    title: "Fed-EADP-LoRA: Privacy-Preserving Federated Learning",
    description: "Federated learning pipeline with LoRA-based parameter-efficient fine-tuning for LLMs, implementing entity-aware differential privacy with selective noise injection.",
    tech: ["Python", "Federated Learning", "LoRA", "Differential Privacy", "LLMs"],
    image: "🔒",
    link: "#",
    github: "#",
    highlights: "✓ Privacy attacks simulation ✓ ε-budget optimization ✓ Minimal degradation"
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
            Showcasing my best work across web development, full-stack applications, and innovative solutions
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="group glow-border bg-dark-900/50 hover:bg-dark-900 p-6 rounded-xl transition-smooth hover:translate-y-[-4px] animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Icon */}
              <div className="text-6xl mb-4">{project.image}</div>

              {/* Project Title */}
              <h3 className="text-xl font-bold mb-2 group-hover:text-neon-cyan transition-smooth">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-3 py-1 rounded-full bg-neon-cyan/10 text-neon-cyan border border-neon-cyan/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Highlights */}
              {project.highlights && (
                <p className="text-xs text-gray-400 mb-4 italic">
                  {project.highlights}
                </p>
              )}

              {/* Links */}
              <div className="flex gap-3">
                <a
                  href={project.link}
                  className="flex items-center gap-2 text-neon-cyan hover:text-neon-pink transition-smooth group/link"
                >
                  <ExternalLink size={16} className="group-hover/link:translate-x-1 transition-transform" />
                  <span className="text-sm">Visit</span>
                </a>
                <a
                  href={project.github}
                  className="flex items-center gap-2 text-neon-purple hover:text-neon-cyan transition-smooth group/link"
                >
                  <Github size={16} className="group-hover/link:scale-110 transition-transform" />
                  <span className="text-sm">Code</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
