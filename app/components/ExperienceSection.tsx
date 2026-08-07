"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import SectionHeading from "./SectionHeading";

const experiences = [
  {
    role: "Freelance Editor",
    company: "Independent Clients",
    date: "2025 — Present",
    bullets: [
      "Created Instagram Reels, YouTube Shorts, and other social media videos with engaging pacing and transitions.",
      "Designed thumbnails and optimized videos for multiple social media platforms.",
      "Continuously improving skills in DaVinci Resolve, motion graphics, color grading, and YouTube & Instagram Reel editing.",
    ],
  },
  {
    role: "IT Professional",
    company: "Smart Global Service Centre , Dubai ",
    date: "2024 — 2026",
    bullets: [
      "Built web applications, including ERP systems and chat platforms, using React.js, Next.js, and Tailwind CSS.",
      "Provided technical assistance during deployment and maintenance of web applications.",
      "Collaborated with team members to produce visually appealing digital content while maintaining project deadlines.",
      "Edited short-form videos for platforms including YouTube Shorts and Instagram Reels."

    ],
  }
];

export default function ExperienceSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="experience" className="mx-auto max-w-6xl px-6 py-24 sm:px-8 lg:px-10" ref={ref}>
      <SectionHeading
        eyebrow="Experience"
        title="A modern timeline of freelance and client work"
        description="I’ve helped creators and brands shape stories that feel premium, cinematic, and ready to publish."
      />

      <div className="grid gap-8 lg:grid-cols-[0.3fr_0.7fr]">
        <div className="flex flex-col gap-3">
          {experiences.map((exp, idx) => (
            <button
              key={exp.company}
              onClick={() => setActiveTab(idx)}
              className={`rounded-[1.2rem] border px-4 py-4 text-left transition ${
                activeTab === idx
                  ? "border-red-400/40 bg-red-500/10 text-white"
                  : "border-white/10 bg-white/5 text-slate-300 hover:border-white/20 hover:bg-white/10"
              }`}
            >
              <div className="text-sm uppercase tracking-[0.25em] text-slate-400">{exp.date}</div>
              <div className="mt-2 font-semibold">{exp.company}</div>
            </button>
          ))}
        </div>

        <motion.div
          key={activeTab}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.35 }}
          className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/8 to-white/3 p-8 shadow-[0_16px_50px_rgba(0,0,0,0.24)] backdrop-blur"
        >
          <p className="text-sm uppercase tracking-[0.3em] text-red-300">{experiences[activeTab].date}</p>
          <h3 className="mt-3 text-2xl font-semibold text-white">{experiences[activeTab].role}</h3>
          <p className="mt-2 text-lg text-slate-300">@ {experiences[activeTab].company}</p>
          <ul className="mt-8 space-y-4">
            {experiences[activeTab].bullets.map((bullet) => (
              <li key={bullet} className="flex gap-3 text-sm leading-7 text-slate-400">
                <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-red-400" />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
