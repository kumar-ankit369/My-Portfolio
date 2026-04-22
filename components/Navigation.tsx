

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: "#hero", label: "Home" },
    { href: "#projects", label: "Projects" },
    { href: "#skills", label: "Skills" },
    { href: "#achievements", label: "Achievements" },
    { href: "#certifications", label: "Certifications" },
    { href: "#about", label: "About" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 w-full h-20 bg-dark-900/80 backdrop-blur-md border-b border-neon-cyan/20 z-50 transition-smooth">
      <div className="max-w-6xl mx-auto px-6 h-full flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="group">
          <div className="text-2xl font-bold glow-text group-hover:opacity-80 transition-smooth">
            Ankit
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-gray-300 hover:text-neon-cyan transition-smooth relative group"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-neon-cyan group-hover:w-full transition-all duration-300"></span>
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <a href="#contact" className="btn-primary inline-block text-center">Get In Touch</a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-neon-cyan"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 right-0 bg-dark-900 border-b border-neon-cyan/20 animate-slide-up">
          <div className="flex flex-col gap-4 p-6">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-300 hover:text-neon-cyan transition-smooth"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="btn-primary w-full text-center block"
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
