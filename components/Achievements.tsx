

import { Award, Trophy } from "lucide-react";

export default function AchievementsSection() {
  const awards = [
    {
      title: "SIH Winner (College Level)",
      organization: "Acharya Institute",
      date: "May 2025",
      icon: "🏆",
      color: "neon-cyan",
    },
    {
      title: "4th Place - Srujana Hackathon",
      organization: "Chanakya University",
      date: "Oct 2025",
      icon: "🥉",
      color: "neon-pink",
    },
  ];

  const certifications = [
    {
      title: "NEC 2025",
      organization: "E-Cell, IIT Bombay",
      date: "Nov 2025",
      icon: "📜",
    },
    {
      title: "MOOD INDIGO",
      organization: "IIT Bombay",
      date: "Dec 2024",
      icon: "🎵",
    },
  ];

  return (
    <section id="achievements" className="py-20 px-6 bg-dark-900">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Awards & <span className="glow-text">Achievements</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Recognizing my contributions and achievements in tech and community
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Awards */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-neon-cyan flex items-center gap-2">
              <Trophy size={24} /> Awards
            </h3>
            <div className="space-y-4">
              {awards.map((award, index) => (
                <div
                  key={index}
                  className="glow-border bg-dark-950/50 p-6 rounded-lg hover:bg-dark-950 transition-smooth animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="text-3xl">{award.icon}</div>
                    <div>
                      <h4 className="text-lg font-bold text-neon-cyan">
                        {award.title}
                      </h4>
                      <p className="text-gray-400 text-sm">{award.organization}</p>
                      <p className="text-neon-purple text-xs mt-1">{award.date}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-neon-pink flex items-center gap-2">
              <Award size={24} /> Certifications
            </h3>
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="glow-border bg-dark-950/50 p-6 rounded-lg hover:bg-dark-950 transition-smooth animate-slide-up"
                  style={{ animationDelay: `${(index + 2) * 0.1}s` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="text-3xl">{cert.icon}</div>
                    <div>
                      <h4 className="text-lg font-bold text-neon-pink">
                        {cert.title}
                      </h4>
                      <p className="text-gray-400 text-sm">{cert.organization}</p>
                      <p className="text-neon-purple text-xs mt-1">{cert.date}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
