"use client";

import { Award, Trophy, Medal, Star } from "lucide-react";
import { GlowingEffect } from "./ui/glowing-effect";

const achievements = [
  {
    title: "SIH Winner (College Level)",
    organization: "Acharya Institute",
    date: "May 2025",
    description: "Secured 1st position at college level selection for Smart India Hackathon.",
    icon: <Trophy className="h-6 w-6 text-neon-pink" />,
  },
  {
    title: "4th Place — Srujana Hackathon",
    organization: "Chanakya University",
    date: "Oct 2025",
    description: "Placed 4th in inter-university state level tech competition.",
    icon: <Medal className="h-6 w-6 text-yellow-400" />,
  },
  {
    title: "5th Place — ThirdBell Competition",
    organization: "Mood Indigo, IIT Bombay",
    date: "Dec 2024",
    description: "Ranked 5th nationwide in cultural event competition at Asia's largest college fest.",
    icon: <Star className="h-6 w-6 text-neon-cyan" />,
  },
  {
    title: "Ranked 62nd in NEC 2025",
    organization: "E-Cell, IIT Bombay",
    date: "Nov 2025",
    description: "Achieved national ranking of 62 out of hundreds of participants across India.",
    icon: <Award className="h-6 w-6 text-neon-purple" />,
  },
];

export default function GlowingEffectDemo() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {achievements.map((item, index) => (
        <div
          key={index}
          className="relative min-h-[12rem] rounded-2xl border border-white/10 p-2 md:p-3 bg-dark-950/80 backdrop-blur-sm shadow-xl hover:border-white/20 transition-smooth group"
        >
          <GlowingEffect
            spread={40}
            glow={true}
            disabled={false}
            proximity={64}
            inactiveZone={0.01}
          />
          <div className="relative flex h-full flex-col justify-between p-6 rounded-xl bg-dark-950/90">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-fit rounded-lg border border-white/10 bg-white/5 p-2.5">
                  {item.icon}
                </div>
                <span className="text-xs px-3 py-1 rounded-full bg-white/5 text-gray-400 border border-white/10 font-medium">
                  {item.date}
                </span>
              </div>

              <h3 className="font-sans text-xl font-bold text-white mb-1 group-hover:text-neon-cyan transition-smooth">
                {item.title}
              </h3>
              <p className="text-neon-cyan text-xs font-medium mb-2">
                {item.organization}
              </p>
              <p className="text-gray-400 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
