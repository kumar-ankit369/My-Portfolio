import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: "#hero", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
    { href: "#skills", label: "Skills" },
    { href: "#achievements", label: "Achievements" },
    { href: "#certifications", label: "Certifications" },
    { href: "#leadership", label: "Leadership" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 w-full h-20 bg-dark-900/80 backdrop-blur-md border-b border-neon-cyan/20 z-50 transition-smooth">
      <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="group">
          <div className="text-2xl font-bold glow-text group-hover:opacity-80 transition-smooth">
            Kumar Ankit
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex gap-6 text-sm font-medium">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-gray-300 hover:text-neon-cyan transition-smooth relative group py-1"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-neon-cyan group-hover:w-full transition-all duration-300"></span>
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden lg:block">
          <a href="#contact" className="btn-primary text-xs px-4 py-2 inline-block text-center">Get In Touch</a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-neon-cyan p-2"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden absolute top-20 left-0 right-0 bg-dark-900 border-b border-neon-cyan/20 animate-slide-up shadow-2xl">
          <div className="flex flex-col gap-3 p-6 max-h-[80vh] overflow-y-auto">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-300 hover:text-neon-cyan transition-smooth py-1.5 text-base border-b border-white/5"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="btn-primary w-full text-center block mt-2"
              onClick={() => setIsOpen(false)}
            >
              Get In Touch
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
