

const skillCategories = [
  {
    category: "Languages",
    skills: ["C", "C++", "Python", "Java", "HTML", "JavaScript", "SQL"],
    color: "neon-cyan",
  },
  {
    category: "Libraries & Frameworks",
    skills: ["Pandas", "NumPy", "Scikit-learn", "Hugging Face", "Flask", "Next.js", "Node.js", "Express", "TensorFlow", "PyTorch", "React", "TailwindCSS"],
    color: "neon-pink",
  },
  {
    category: "Technologies & AI",
    skills: ["Machine Learning", "Deep Learning", "Generative AI", "NLP", "LangChain", "LLMs", "RAG", "LoRA", "MERN Stack"],
    color: "neon-purple",
  },
  {
    category: "DevOps & Tools",
    skills: ["Docker", "Kubernetes", "GitHub", "Git", "MongoDB", "Power BI", "Tableau", "VS Code"],
    color: "neon-lime",
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
          <p className="text-gray-400 text-lg">
            A comprehensive overview of my technical expertise
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={category.category}
              className="glow-border bg-dark-900/50 p-8 rounded-xl animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Category Title */}
              <h3 className={`text-xl font-bold mb-6 text-neon-${category.color.split("-")[1]}`}>
                {category.category}
              </h3>

              {/* Skills */}
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <div
                    key={skill}
                    className={`px-4 py-2 rounded-lg border transition-smooth cursor-pointer hover:scale-105`}
                    style={{
                      borderColor: `rgb(0, 217, 255, 0.3)`,
                      backgroundColor: `rgb(0, 217, 255, 0.05)`,
                      color: `rgb(0, 217, 255)`,
                    }}
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
