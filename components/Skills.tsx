import { Code2, Brain, Globe, BarChart3, Cloud, Wrench } from "lucide-react";

const skillCategories = [
  {
    category: "Languages",
    icon: <Code2 className="text-neon-cyan" size={22} />,
    skills: ["Python", "Java", "C", "C++", "JavaScript", "SQL", "HTML/HTML5"],
    color: "neon-cyan",
  },
  {
    category: "AI / ML",
    icon: <Brain className="text-neon-purple" size={22} />,
    skills: [
      "Machine Learning",
      "Deep Learning",
      "Generative AI",
      "NLP",
      "LLMs",
      "RAG",
      "LoRA",
      "TensorFlow",
      "PyTorch",
      "Scikit-learn",
      "Hugging Face",
      "Pandas",
      "NumPy",
    ],
    color: "neon-purple",
  },
  {
    category: "Full Stack & Web",
    icon: <Globe className="text-neon-pink" size={22} />,
    skills: [
      "React",
      "Node.js",
      "Express",
      "Next.js",
      "MongoDB",
      "Flask",
      "FastAPI",
      "MERN Stack",
      "REST APIs",
    ],
    color: "neon-pink",
  },
  {
    category: "Data Analytics & BI",
    icon: <BarChart3 className="text-neon-lime" size={22} />,
    skills: [
      "SQL",
      "Power BI",
      "Tableau",
      "Excel",
      "Data Analysis",
      "Statistics",
      "EDA",
      "Business Analytics",
      "Data Visualization",
    ],
    color: "neon-lime",
  },
  {
    category: "Salesforce & CRM",
    icon: <Cloud className="text-blue-400" size={22} />,
    skills: ["Salesforce CRM", "Salesforce Agentforce", "Data Cloud"],
    color: "blue-400",
  },
  {
    category: "Tools & Practices",
    icon: <Wrench className="text-amber-400" size={22} />,
    skills: [
      "Git",
      "GitHub",
      "Docker",
      "Kubernetes",
      "VS Code",
      "Unit Testing",
      "System Testing",
      "Agile/Sprint workflows",
    ],
    color: "amber-400",
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-6 bg-dark-950">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Technical <span className="glow-text">Skills</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Categorized technical expertise across AI/ML, Full Stack, Data & Cloud
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, index) => (
            <div
              key={cat.category}
              className="glow-border bg-dark-900/50 p-6 rounded-xl animate-slide-up hover:bg-dark-900 transition-smooth"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Category Title */}
              <div className="flex items-center gap-3 mb-6 pb-3 border-b border-white/10">
                <div className="p-2 rounded-lg bg-white/5 border border-white/10">
                  {cat.icon}
                </div>
                <h3 className="text-xl font-bold text-white">
                  {cat.category}
                </h3>
              </div>

              {/* Skills Tags */}
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs px-3 py-1.5 rounded-lg border border-neon-cyan/20 bg-neon-cyan/5 text-neon-cyan hover:bg-neon-cyan/10 hover:border-neon-cyan/40 transition-smooth cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
