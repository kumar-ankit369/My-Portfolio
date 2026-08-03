import { Briefcase, Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    title: "Full Stack Developer Intern",
    company: "Emertxe Information Technologies",
    location: "Bangalore, India",
    period: "Jun 2026 – Present",
    highlights: [
      "Developed scalable web applications and REST APIs using React.js, Node.js, Express.js, and MongoDB, following Agile development practices.",
      "Collaborated with cross-functional development teams to deliver high-quality software through testing, debugging, documentation, and sprint-based project execution.",
    ],
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "REST APIs", "Agile"],
    color: "neon-cyan",
  },
  {
    title: "Data Science Intern",
    company: "Teachnook (Teachscape Online Learning Services Pvt. Ltd.)",
    location: "Bangalore, India",
    period: "Sep 2024 – Oct 2024",
    highlights: [
      "Analyzed real-world datasets using Python, Pandas, NumPy, and Scikit-learn — data cleaning, exploratory data analysis, and predictive modeling.",
      "Built and evaluated regression/classification ML models, applying feature engineering and visualization to generate insights.",
    ],
    tech: ["Python", "Pandas", "NumPy", "Scikit-learn", "EDA", "Machine Learning"],
    color: "neon-pink",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-6 bg-dark-900 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Work <span className="glow-text">Experience</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            My professional journey in full-stack development and data science
          </p>
        </div>

        {/* Experience Timeline / Grid */}
        <div className="space-y-8 max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="glow-border bg-dark-950/70 p-8 rounded-xl relative hover:bg-dark-950 transition-smooth group animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                <div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-neon-cyan transition-smooth flex items-center gap-2">
                    <Briefcase className="text-neon-cyan" size={22} />
                    {exp.title}
                  </h3>
                  <p className="text-neon-cyan font-medium text-lg mt-1">
                    {exp.company}
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center gap-3 text-sm text-gray-400">
                  <div className="flex items-center gap-1.5 bg-white/5 px-3 py-1.5 rounded-full border border-white/10">
                    <Calendar size={14} className="text-neon-purple" />
                    <span>{exp.period}</span>
                  </div>
                  <div className="flex items-center gap-1.5 bg-white/5 px-3 py-1.5 rounded-full border border-white/10">
                    <MapPin size={14} className="text-neon-pink" />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>

              {/* Highlights */}
              <ul className="space-y-2 mb-6 text-gray-300 text-sm md:text-base leading-relaxed">
                {exp.highlights.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-neon-cyan mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              {/* Tech Stack Tags */}
              <div className="flex flex-wrap gap-2">
                {exp.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-3 py-1 rounded-full bg-neon-cyan/10 text-neon-cyan border border-neon-cyan/30"
                  >
                    {t}
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
