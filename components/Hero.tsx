import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center pt-20 px-6 relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-neon-cyan/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-neon-purple/10 rounded-full blur-3xl animate-float" style={{animationDelay: "2s"}}></div>
      </div>

      <div className="max-w-4xl mx-auto text-center animate-fade-in">
        {/* Greeting */}
        <div className="mb-6 inline-block px-4 py-2 rounded-full border border-neon-cyan/50 bg-neon-cyan/5 text-neon-cyan">
          <span className="text-sm font-semibold">👋 Hi, I'm Kumar Ankit</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight animate-slide-up">
          Full-Stack & <span className="glow-text">AI/ML</span> Developer
        </h1>

        {/* Subheading */}
        <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-3xl mx-auto leading-relaxed animate-slide-up" style={{animationDelay: "0.2s"}}>
          Final-year CS (Data Science) student building full-stack apps and AI/ML systems — from LLM fine-tuning to production-style data platforms.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-slide-up" style={{animationDelay: "0.4s"}}>
          <a href="#projects" className="btn-primary flex flex-row items-center justify-center gap-2 group">
            View My Work
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="/Resume_Kumar_Ankit.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary flex items-center justify-center gap-2"
            title="Download as PDF"
          >
            📥 Resume (PDF)
          </a>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-6 animate-slide-up" style={{animationDelay: "0.6s"}}>
          <a
            href="https://github.com/kumar-ankit369"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-lg border border-neon-cyan/30 flex items-center justify-center text-neon-cyan hover:bg-neon-cyan/10 transition-smooth group"
            title="GitHub"
          >
            <Github size={20} className="group-hover:scale-110 transition-transform" />
          </a>
          <a
            href="https://www.linkedin.com/in/kumar-ankith"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-lg border border-neon-pink/30 flex items-center justify-center text-neon-pink hover:bg-neon-pink/10 transition-smooth group"
            title="LinkedIn"
          >
            <Linkedin size={20} className="group-hover:scale-110 transition-transform" />
          </a>
          <a
            href="mailto:anklivetolearn@gmail.com"
            className="w-12 h-12 rounded-lg border border-neon-purple/30 flex items-center justify-center text-neon-purple hover:bg-neon-purple/10 transition-smooth group"
            title="Email"
          >
            <Mail size={20} className="group-hover:scale-110 transition-transform" />
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-neon-cyan rounded-full flex items-center justify-center">
          <div className="w-1 h-2 bg-neon-cyan rounded-full animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}
