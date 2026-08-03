"use client";

import { Award, Cloud, Code, Cpu, Database, Server, Sparkles } from "lucide-react";
import { GlowingEffect } from "./ui/glowing-effect";

const certificates = [
  {
    title: "Salesforce Agentblazer Champion",
    issuer: "Salesforce",
    date: "Nov 2025",
    detail: "39+ Trailhead badges • 9,475+ points",
    icon: <Cloud className="h-6 w-6 text-neon-cyan" />,
    color: "neon-cyan",
  },
  {
    title: "Complete Data Science, NLP, ML & DL",
    issuer: "Udemy (Krish Naik)",
    date: "Jan – Jul 2026",
    detail: "Comprehensive End-to-End ML, Deep Learning & NLP Mastery",
    icon: <Cpu className="h-6 w-6 text-neon-pink" />,
    color: "neon-pink",
  },
  {
    title: "Generative AI with Hugging Face and LangChain",
    issuer: "Udemy (Krish Naik)",
    date: "Apr – Aug 2026",
    detail: "LLM Applications, RAG Pipelines & Fine-tuning",
    icon: <Sparkles className="h-6 w-6 text-neon-purple" />,
    color: "neon-purple",
  },
  {
    title: "Data Science Professional Certificate",
    issuer: "KNIME",
    date: "Aug 2025",
    detail: "Advanced Workflow Automation & Analytics Certification",
    icon: <Database className="h-6 w-6 text-amber-400" />,
    color: "amber-400",
  },
  {
    title: "Python for Data Science, AI & Development",
    issuer: "IBM",
    date: "Nov 2024",
    detail: "Python Data Analysis, APIs & AI Fundamentals",
    icon: <Code className="h-6 w-6 text-neon-lime" />,
    color: "neon-lime",
  },
  {
    title: "Introduction to Generative AI",
    issuer: "Google Cloud Skills Boost",
    date: "Feb 2025",
    detail: "GenAI Foundations & Google Cloud AI Infrastructure",
    icon: <Server className="h-6 w-6 text-blue-400" />,
    color: "blue-400",
  },
  {
    title: "Responsive Web Design",
    issuer: "freeCodeCamp",
    date: "Apr 2025",
    detail: "Modern Responsive Web UI Architecture & Standards",
    icon: <Award className="h-6 w-6 text-emerald-400" />,
    color: "emerald-400",
  },
];

export default function CertificatesDemo() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {certificates.map((cert, index) => (
        <div key={index} className="relative min-h-[13rem] rounded-2xl border border-white/10 p-2 md:p-3 bg-dark-950/80 backdrop-blur-sm shadow-xl hover:border-white/20 transition-smooth group">
          <GlowingEffect
            spread={40}
            glow={true}
            disabled={false}
            proximity={64}
            inactiveZone={0.01}
          />
          <div className="relative flex h-full flex-col justify-between p-5 rounded-xl bg-dark-950/90">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-fit rounded-lg border border-white/10 bg-white/5 p-2.5">
                  {cert.icon}
                </div>
                <span className="text-xs px-2.5 py-1 rounded-full bg-white/5 text-gray-400 border border-white/10 font-medium">
                  {cert.date}
                </span>
              </div>

              <h3 className="font-sans text-lg font-bold text-white mb-1 group-hover:text-neon-cyan transition-smooth">
                {cert.title}
              </h3>
              <p className="text-neon-cyan text-xs font-semibold mb-2">
                {cert.issuer}
              </p>
              <p className="text-gray-400 text-xs leading-relaxed">
                {cert.detail}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}