import { Users, Calendar, MapPin, Award } from "lucide-react";

const activities = [
  {
    title: "President — Sahitya Club",
    organization: "Acharya Institute",
    location: "Bangalore, India",
    period: "Jul 2024 – Present",
    highlights: [
      "Spearheading literary and cultural activities including poetry competitions, rap battles, mushaira, and stand-up comedy shows during college fest Habba.",
      "Successfully handled event planning, budgeting, and sponsorships, ensuring high participation and engagement.",
      "Promoted creativity and teamwork, strengthening the cultural footprint of the institute.",
    ],
    roleType: "Leadership",
  },
  {
    title: "Office Department Coordinator — Srishti Innovation Exchange 2025",
    organization: "ABVP & Acharya Institute",
    location: "Bangalore, India",
    period: "May 2025",
    highlights: [
      "Managed administrative coordination and operations for the innovation exchange event.",
    ],
    roleType: "Operations & Management",
  },
  {
    title: "Artist Management Team — 25th VTU Youth Fest",
    organization: "Acharya Institute",
    location: "Bangalore, India",
    period: "Apr 2026",
    highlights: [
      "Coordinated artist logistics and on-ground management for an inter-college cultural event.",
    ],
    roleType: "Event Management",
  },
];

export default function Leadership() {
  return (
    <section id="leadership" className="py-20 px-6 bg-dark-950 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Leadership & <span className="glow-text">Extra-Curricular</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Empowering communities, leading cultural initiatives, and organizing large-scale events
          </p>
        </div>

        {/* Leadership Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {activities.map((item, index) => (
            <div
              key={index}
              className="glow-border bg-dark-900/50 p-6 rounded-xl hover:bg-dark-900 transition-smooth flex flex-col justify-between group animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs px-3 py-1 rounded-full bg-neon-purple/10 text-neon-purple border border-neon-purple/30 font-medium">
                    {item.roleType}
                  </span>
                  <div className="flex items-center gap-1 text-xs text-gray-400">
                    <Calendar size={12} className="text-neon-cyan" />
                    <span>{item.period}</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-1 group-hover:text-neon-cyan transition-smooth">
                  {item.title}
                </h3>
                <p className="text-neon-cyan text-sm font-medium mb-4">
                  {item.organization}
                </p>

                <ul className="space-y-2 text-gray-300 text-xs md:text-sm leading-relaxed mb-6">
                  {item.highlights.map((bullet, i) => (
                    <li key={i} className="flex items-start gap-1.5">
                      <span className="text-neon-cyan mt-1">•</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex items-center gap-1.5 text-xs text-gray-400 border-t border-white/5 pt-4">
                <MapPin size={14} className="text-neon-pink" />
                <span>{item.location}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
