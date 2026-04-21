"use client";

import { Award, Trophy, Shield, Star, Medal } from "lucide-react";
import { GlowingEffect } from "./ui/glowing-effect";

export default function GlowingEffectDemo() {
  return (
    <ul className="grid grid-cols-1 grid-rows-none gap-4 md:grid-cols-12 md:grid-rows-2 lg:gap-4 xl:max-h-[34rem] xl:grid-rows-2">
      <GridItem
        area="md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/7]"
        icon={<Trophy className="h-5 w-5 text-neon-cyan dark:text-cyan-400" />}
        title="SIH Winner (College Level)"
        description="Acharya Institute • May 2025"
      />

      <GridItem
        area="md:[grid-area:1/7/2/13] xl:[grid-area:1/7/2/13]"
        icon={<Medal className="h-5 w-5 text-neon-pink dark:text-pink-400" />}
        title="4th Place - Srujana Hackathon"
        description="Chanakya University • Oct 2025"
      />

      <GridItem
        area="md:[grid-area:2/1/3/7] xl:[grid-area:2/1/3/7]"
        icon={<Award className="h-5 w-5 text-yellow-500 dark:text-yellow-400" />}
        title="NEC 2025 Certification"
        description="E-Cell, IIT Bombay • Nov 2025"
      />

      <GridItem
        area="md:[grid-area:2/7/3/13] xl:[grid-area:2/7/3/13]"
        icon={<Star className="h-5 w-5 text-purple-500 dark:text-purple-400" />}
        title="MOOD INDIGO Certification"
        description="IIT Bombay • Dec 2024"
      />
    </ul>
  );
}

interface GridItemProps {
  area: string;
  icon: React.ReactNode;
  title: string;
  description: React.ReactNode;
}

const GridItem = ({ area, icon, title, description }: GridItemProps) => {
  return (
    <li className={`min-h-[14rem] list-none ${area}`}>
      <div className="relative h-full rounded-2xl border border-white/10 p-2 md:rounded-3xl md:p-3">
        <GlowingEffect
          spread={40}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
        />
        <div className="border-0.75 relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl bg-dark-950/80 p-6 md:p-6 shadow-xl backdrop-blur-sm shadow-[#2D2D2D]/20">
          <div className="relative flex flex-1 flex-col justify-between gap-3">
            <div className="w-fit rounded-lg border border-white/10 bg-white/5 p-2">
              {icon}
            </div>
            <div className="space-y-3">
              <h3 className="-tracking-4 pt-0.5 font-sans text-xl/[1.375rem] font-semibold text-balance text-white md:text-2xl/[1.875rem]">
                {title}
              </h3>
              <h2 className="font-sans text-sm/[1.125rem] text-gray-400 md:text-base/[1.375rem] [&_b]:md:font-semibold [&_strong]:md:font-semibold">
                {description}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};
