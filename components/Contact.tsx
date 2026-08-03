import { Mail, Phone, MapPin, Send, Github, Linkedin } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6 bg-dark-950 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-neon-purple/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Let's <span className="glow-text">Connect</span>
        </h2>

        <p className="text-gray-400 text-lg mb-12 max-w-2xl mx-auto">
          I'm actively pursuing entry-level roles in ML/Data Science and Software Development. Feel free to reach out via email or phone!
        </p>

        {/* Contact Info Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="glow-border bg-dark-900/50 p-6 rounded-xl hover:bg-dark-900 transition-smooth group text-center">
            <Mail className="text-neon-cyan group-hover:scale-110 transition-transform mb-3 mx-auto" size={28} />
            <h3 className="text-lg font-bold mb-1">Email</h3>
            <a
              href="mailto:anklivetolearn@gmail.com"
              className="text-neon-cyan hover:text-neon-pink transition-smooth text-sm font-medium break-all"
            >
              anklivetolearn@gmail.com
            </a>
          </div>

          <div className="glow-border bg-dark-900/50 p-6 rounded-xl hover:bg-dark-900 transition-smooth group text-center">
            <Phone className="text-neon-pink group-hover:scale-110 transition-transform mb-3 mx-auto" size={28} />
            <h3 className="text-lg font-bold mb-1">Phone</h3>
            <a
              href="tel:+918210480527"
              className="text-neon-pink hover:text-neon-cyan transition-smooth text-sm font-medium"
            >
              +91 8210480527
            </a>
          </div>

          <div className="glow-border bg-dark-900/50 p-6 rounded-xl hover:bg-dark-900 transition-smooth group text-center">
            <MapPin className="text-neon-purple group-hover:scale-110 transition-transform mb-3 mx-auto" size={28} />
            <h3 className="text-lg font-bold mb-1">Location</h3>
            <p className="text-gray-300 text-sm">
              Bangalore, Karnataka, India
            </p>
          </div>
        </div>

        {/* Resume Download Section */}
        <div className="mb-12 p-8 glow-border bg-gradient-to-r from-neon-cyan/10 to-neon-purple/10 rounded-xl hover:from-neon-cyan/20 hover:to-neon-purple/20 transition-smooth">
          <h3 className="text-2xl font-bold mb-4 glow-text">📄 View & Download Resume</h3>
          <p className="text-gray-300 mb-6 max-w-xl mx-auto text-sm">
            Download my resume for full details on my academic background, projects, work experience, and technical certifications.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/Resume_Kumar_Ankit.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center justify-center gap-2"
              title="Download as PDF"
            >
              📥 Download Resume (PDF)
            </a>
            <a
              href="https://github.com/kumar-ankit369"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary inline-flex items-center justify-center gap-2"
            >
              <Github size={18} />
              GitHub Profile
            </a>
            <a
              href="https://www.linkedin.com/in/kumar-ankith"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary inline-flex items-center justify-center gap-2"
            >
              <Linkedin size={18} />
              LinkedIn Profile
            </a>
          </div>
        </div>

        {/* Quick Contact Form */}
        <form className="space-y-4 bg-dark-900/30 glow-border p-8 rounded-xl max-w-2xl mx-auto text-left">
          <h3 className="text-xl font-bold text-white mb-4 text-center">Send Me a Message</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="px-4 py-3 rounded-lg bg-dark-900 border border-neon-cyan/30 text-gray-100 placeholder-gray-500 focus:outline-none focus:border-neon-cyan transition-smooth text-sm"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="px-4 py-3 rounded-lg bg-dark-900 border border-neon-cyan/30 text-gray-100 placeholder-gray-500 focus:outline-none focus:border-neon-cyan transition-smooth text-sm"
              required
            />
          </div>

          <textarea
            placeholder="Your Message"
            rows={4}
            className="w-full px-4 py-3 rounded-lg bg-dark-900 border border-neon-cyan/30 text-gray-100 placeholder-gray-500 focus:outline-none focus:border-neon-cyan transition-smooth resize-none text-sm"
            required
          ></textarea>

          <button type="submit" className="btn-primary w-full flex items-center justify-center gap-2">
            Send Message
            <Send size={18} />
          </button>
        </form>
      </div>
    </section>
  );
}
