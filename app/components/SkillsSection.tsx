"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Aperture,
  AudioWaveform,
  Compass,
  Film,
  MonitorPlay,
  Sparkles,
  Wand2,
  // YoutubeIcon,
} from "lucide-react";
import SectionHeading from "./SectionHeading";

const skills = [
  { title: "DaVinci Resolve", icon: Film, text: "Editing, proxy workflows, multicam assembly, and final delivery." },
  { title: "Fusion", icon: Sparkles, text: "Motion graphics and compositing for dynamic transitions." },
  { title: "Fairlight", icon: AudioWaveform, text: "Dialogue cleanup, sound shaping, and polished audio mixes." },
  { title: "Color Grading", icon: Aperture, text: "Cinematic color, contrast control, and premium LUT styling." },
  { title: "Motion Graphics", icon: Wand2, text: "Animated titles, kinetic typography, and visual transitions." },
  { title: "Audio Editing", icon: AudioWaveform, text: "Clean mixes, layered sound design, and voice clarity." },
  // { title: "Multicam Editing", icon: Clapperboard, text: "Fast-paced assembly and seamless synced storytelling." },
  { title: "Speed Ramping", icon: MonitorPlay, text: "Rhythmic pacing and dramatic timing for impact." },
  { title: "Social Media Editing", icon: Compass, text: "Short-form content that lands across Instagram, TikTok, and Reels." },
  // { title: "YouTube Editing", icon: YoutubeIcon, text: "Hook-first edits built for retention and brand consistency." },
];

export default function SkillsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="mx-auto max-w-7xl px-6 py-24 sm:px-8 lg:px-10" ref={ref}>
      <SectionHeading
        eyebrow="Skills"
        title="Tools and craft built for premium post-production"
        description="Every edit is shaped to feel intentional — from the first cut to the final export."
      />

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {skills.map((skill, index) => {
          const Icon = skill.icon;
          return (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.06 }}
              whileHover={{ y: -6, scale: 1.01 }}
              className="group rounded-[1.75rem] border border-white/10 bg-gradient-to-br from-white/8 to-white/3 p-6 shadow-[0_16px_40px_rgba(0,0,0,0.25)] backdrop-blur"
            >
              <div className="mb-5 inline-flex rounded-2xl border border-red-400/20 bg-red-500/10 p-3 text-red-300">
                <Icon size={20} />
              </div>
              <h3 className="text-xl font-semibold text-white">{skill.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-400">{skill.text}</p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
