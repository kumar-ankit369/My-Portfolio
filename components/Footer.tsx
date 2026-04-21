

import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-900 border-t border-neon-cyan/10 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="text-2xl font-bold glow-text mb-2">Kumar Ankit</div>
            <p className="text-gray-400 text-sm">
              AI & Full-Stack Developer | ML Enthusiast | Data Science | Bangalore
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#hero" className="hover:text-neon-cyan transition-smooth">Home</a></li>
              <li><a href="#projects" className="hover:text-neon-cyan transition-smooth">Projects</a></li>
              <li><a href="#skills" className="hover:text-neon-cyan transition-smooth">Skills</a></li>
              <li><a href="#about" className="hover:text-neon-cyan transition-smooth">About</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold mb-4">Experience</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-neon-cyan transition-smooth">Internship @ Teachnook</a></li>
              <li><a href="#" className="hover:text-neon-cyan transition-smooth">President, Sahitya Club</a></li>
              <li><a href="#" className="hover:text-neon-cyan transition-smooth">SIH Winner (2025)</a></li>
              <li><a href="#" className="hover:text-neon-cyan transition-smooth">Srujana Hackathon (4th)</a></li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="flex gap-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg border border-neon-cyan/30 flex items-center justify-center text-neon-cyan hover:bg-neon-cyan/10 transition-smooth"
              >
                <Github size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/kumar-ankit-019b73290"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg border border-neon-pink/30 flex items-center justify-center text-neon-pink hover:bg-neon-pink/10 transition-smooth"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="mailto:anklivetolearn@gmail.com"
                className="w-10 h-10 rounded-lg border border-neon-purple/30 flex items-center justify-center text-neon-purple hover:bg-neon-purple/10 transition-smooth"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-neon-cyan/10 py-6"></div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
          <p>&copy; {currentYear} Kumar Ankit. Crafted with passion and code.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-neon-cyan transition-smooth">Privacy</a>
            <a href="#" className="hover:text-neon-cyan transition-smooth">sitemap</a>
            <a href="tel:+918210480527" className="hover:text-neon-cyan transition-smooth">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
