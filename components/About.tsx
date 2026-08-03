import { GraduationCap, Award, Briefcase, BookOpen } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-20 px-6 bg-gradient-to-b from-dark-950 to-dark-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="glow-text">Me</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Background, education, and technical journey
          </p>
        </div>

        <div className="grid md:grid-cols-12 gap-8 items-start">
          {/* Main Bio - Left 7 columns */}
          <div className="md:col-span-7 space-y-6 text-gray-300 text-base md:text-lg leading-relaxed animate-slide-up">
            <p>
              I am a <strong className="text-white font-semibold">Final-year B.Tech Computer Science (Data Science)</strong> student at Acharya Institute of Technology, Bangalore (under VTU), graduating in 2027 with a CGPA of <span className="text-neon-cyan font-bold">8.64</span>.
            </p>

            <p>
              Currently working as a <strong className="text-white font-semibold">Full Stack Developer Intern</strong> at Emertxe Information Technologies, with prior <strong className="text-white font-semibold">Data Science internship</strong> experience at Teachnook. I build full-stack web applications and applied AI/ML systems — spanning LLM fine-tuning, RAG pipelines, and production-style data platforms.
            </p>

            <p>
              Beyond technical engineering, I serve as <strong className="text-white font-semibold">Club President of Acharya Sahitya</strong> (two years), leading literary and cultural events at the institute. I am pursuing entry-level roles in ML/Data Science and software development.
            </p>

            {/* Quick Metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-white/10">
              <div className="bg-dark-900/60 p-4 rounded-xl border border-white/5 text-center">
                <div className="text-2xl font-bold glow-text">8.64</div>
                <div className="text-gray-400 text-xs mt-1">CGPA</div>
              </div>
              <div className="bg-dark-900/60 p-4 rounded-xl border border-white/5 text-center">
                <div className="text-2xl font-bold glow-text">4</div>
                <div className="text-gray-400 text-xs mt-1">Major AI/Web Apps</div>
              </div>
              <div className="bg-dark-900/60 p-4 rounded-xl border border-white/5 text-center">
                <div className="text-2xl font-bold glow-text">2</div>
                <div className="text-gray-400 text-xs mt-1">Internships</div>
              </div>
              <div className="bg-dark-900/60 p-4 rounded-xl border border-white/5 text-center">
                <div className="text-2xl font-bold glow-text">7+</div>
                <div className="text-gray-400 text-xs mt-1">Certifications</div>
              </div>
            </div>
          </div>

          {/* Education Card & Profile Box - Right 5 columns */}
          <div className="md:col-span-5 space-y-6 animate-slide-up" style={{ animationDelay: "0.2s" }}>
            {/* Education Card */}
            <div className="glow-border bg-dark-900/80 p-6 rounded-xl relative">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-lg bg-neon-cyan/10 border border-neon-cyan/30 text-neon-cyan">
                  <GraduationCap size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Education</h3>
                  <p className="text-gray-400 text-xs">Degree & Academic Standing</p>
                </div>
              </div>

              <div className="space-y-2 border-t border-white/10 pt-4">
                <h4 className="text-lg font-bold text-white">Acharya Institute of Technology</h4>
                <p className="text-neon-cyan text-sm font-medium">
                  Bachelor of Engineering, Computer Science (Data Science)
                </p>
                <div className="flex justify-between items-center text-xs text-gray-400 pt-2">
                  <span>Bangalore, Karnataka (VTU)</span>
                  <span className="text-neon-pink font-semibold">Sep 2023 – Aug 2027</span>
                </div>
                <div className="mt-3 inline-block px-3 py-1 bg-neon-cyan/10 text-neon-cyan border border-neon-cyan/30 rounded-md text-xs font-semibold">
                  CGPA: 8.64 / 10
                </div>
              </div>
            </div>

            {/* General Highlights */}
            <div className="glow-border bg-dark-900/40 p-6 rounded-xl space-y-3">
              <h4 className="font-bold text-white flex items-center gap-2">
                <BookOpen size={18} className="text-neon-purple" />
                Focus Areas
              </h4>
              <ul className="text-xs text-gray-400 space-y-2">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-neon-cyan"></span>
                  LLM Fine-Tuning (LoRA, PEFT) & Differential Privacy
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-neon-pink"></span>
                  RAG Systems & Generative AI Integration (Gemini, LangChain)
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-neon-purple"></span>
                  Full-Stack MERN & FastAPI Web Development
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-neon-lime"></span>
                  Salesforce CRM & Agentforce Champion
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
