

export default function About() {
  return (
    <section id="about" className="py-20 px-6 bg-gradient-to-b from-dark-950 to-dark-900">
      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left - Content */}
          <div className="animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              About <span className="glow-text">Me</span>
            </h2>

            <p className="text-gray-400 text-lg mb-4 leading-relaxed">
              I'm a Computer Science undergrad (Data Science specialization) at Acharya Institute of Technology, Bangalore. Passionate about AI, Machine Learning, and building full-stack applications that solve real-world problems.
            </p>

            <p className="text-gray-400 text-lg mb-4 leading-relaxed">
              My expertise spans Generative AI, Federated Learning, and privacy-preserving ML techniques. I've worked on projects ranging from marine biodiversity intelligence to AI-powered classroom automation systems.
            </p>

            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              As President of Acharya Institute's Sahitya Club, I drive cultural initiatives and creative collaborations. I'm actively involved in hackathons, tech events, and open-source contributions.
            </p>

            <div className="flex gap-6">
              <div>
                <div className="text-3xl font-bold glow-text">3</div>
                <div className="text-gray-400">Major Projects</div>
              </div>
              <div>
                <div className="text-3xl font-bold glow-text">2</div>
                <div className="text-gray-400">Awards Won</div>
              </div>
              <div>
                <div className="text-3xl font-bold glow-text">∞</div>
                <div className="text-gray-400">Learning Journey</div>
              </div>
            </div>
          </div>

          {/* Right - Image Placeholder */}
          <div className="relative h-96 rounded-xl glow-border bg-dark-900/50 flex items-center justify-center overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-neon-cyan/20 to-neon-purple/20 opacity-0 group-hover:opacity-100 transition-smooth"></div>
            <div className="text-center">
              <div className="text-6xl mb-4">👨‍💻</div>
              <p className="text-neon-cyan text-sm">Kumar Ankit</p>
              <p className="text-gray-400 text-xs">CS (Data Science) | Bangalore</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
