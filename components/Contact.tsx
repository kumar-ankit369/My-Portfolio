

import { Mail, Send } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6 bg-dark-950 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-neon-purple/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Let's <span className="glow-text">Connect</span>
        </h2>

        <p className="text-gray-400 text-lg mb-12">
          I'm always open to new opportunities and interesting conversations. Feel free to reach out!
        </p>

        {/* Contact Options */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="glow-border bg-dark-900/50 p-8 rounded-xl hover:bg-dark-900 transition-smooth group">
            <Mail className="text-neon-cyan group-hover:scale-110 transition-transform mb-4" size={32} />
            <h3 className="text-xl font-bold mb-2">Email</h3>
            <a
              href="mailto:anklivetolearn@gmail.com"
              className="text-neon-cyan hover:text-neon-pink transition-smooth"
            >
              anklivetolearn@gmail.com
            </a>
          </div>

          <div className="glow-border bg-dark-900/50 p-8 rounded-xl hover:bg-dark-900 transition-smooth group">
            <Mail className="text-neon-pink group-hover:scale-110 transition-transform mb-4" size={32} />
            <h3 className="text-xl font-bold mb-2">Phone</h3>
            <a
              href="tel:+918210480527"
              className="text-neon-pink hover:text-neon-cyan transition-smooth"
            >
              +91 8210480527
            </a>
          </div>
        </div>

        {/* Resume Download Section */}
        <div className="mb-12 p-8 glow-border bg-gradient-to-r from-neon-cyan/10 to-neon-purple/10 rounded-xl hover:from-neon-cyan/20 hover:to-neon-purple/20 transition-smooth">
          <h3 className="text-2xl font-bold mb-4 glow-text">📄 View Full Resume</h3>
          <p className="text-gray-400 mb-6">Download my comprehensive resume to see my complete professional background, projects, and achievements.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/api/download-resume"
              className="btn-primary inline-flex items-center justify-center gap-2"
              title="Download as PDF"
            >
              📥 Download PDF
            </a>
            <a
              href="/Kumar_Ankit_Resume.txt"
              download="Kumar_Ankit_Resume.txt"
              className="btn-secondary inline-flex items-center justify-center gap-2"
              title="Download as Text"
            >
              📄 Download TXT
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <form className="space-y-4 bg-dark-900/30 glow-border p-8 rounded-xl">
          <div className="grid md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="px-4 py-3 rounded-lg bg-dark-900 border border-neon-cyan/30 text-gray-100 placeholder-gray-500 focus:outline-none focus:border-neon-cyan transition-smooth"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="px-4 py-3 rounded-lg bg-dark-900 border border-neon-cyan/30 text-gray-100 placeholder-gray-500 focus:outline-none focus:border-neon-cyan transition-smooth"
            />
          </div>

          <textarea
            placeholder="Your Message"
            rows={5}
            className="w-full px-4 py-3 rounded-lg bg-dark-900 border border-neon-cyan/30 text-gray-100 placeholder-gray-500 focus:outline-none focus:border-neon-cyan transition-smooth resize-none"
          ></textarea>

          <button type="submit" className="btn-primary w-full flex items-center justify-center gap-2">
            Send Message
            <Send size={20} />
          </button>
        </form>
      </div>
    </section>
  );
}
