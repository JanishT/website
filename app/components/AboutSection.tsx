"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Film, Palette, Sparkles, MonitorPlay } from "lucide-react";
import SectionHeading from "./SectionHeading";

const highlights = [
  { icon: Film, title: "Video Transitions", text: "Narratives shaped with emotion, rhythm, and polished pacing." },
  { icon: Palette, title: "Color grading", text: "Warm cinematic tones, controlled contrast, and premium finishing." },
  { icon: MonitorPlay, title: "YouTube / social", text: "Short-form edits, thumbnails, and platform-native delivery." },
 
];

const stats = [
  { value: "2+", label: "Years shaping stories" },
  { value: "20+", label: "Projects delivered" },
];

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="mx-auto max-w-7xl px-6 py-24 sm:px-8 lg:px-10" ref={ref}>
      <SectionHeading
        eyebrow="About"
        title="Editing with emotion, precision, and pace"
        description="I blend cinematic craft with modern post-production to create work that feels premium, immersive, and built for audience connection."
      />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]"
      >
        <div className="space-y-6 rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-[0_20px_60px_rgba(0,0,0,0.25)] backdrop-blur-xl">
          <p className="text-lg leading-8 text-slate-300">
            I’m passionate about turning raw footage into emotionally resonant stories — whether that means a documentary, a travel film, a commercial, or a fast-moving YouTube edit.
          </p>
          <p className="text-lg leading-8 text-slate-300">
            My process blends thoughtful pacing, sleek color work, dynamic motion graphics, and meticulous audio design so every frame feels intentional.
          </p>
          <div className="grid gap-3 sm:grid-cols-2">
            {[
              "Video Transitions",
              "Colour grading",
              "Speed Ramping",
              "Motion graphics",
              "YouTube content",
              "Instagram Reels",
             
            ].map((item) => (
              <div key={item} className="rounded-2xl border border-red-400/20 bg-slate-950/40 px-4 py-3 text-sm text-slate-200">
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-4">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                className="rounded-[1.5rem] border border-white/10 bg-slate-950/40 p-5 backdrop-blur"
              >
                <div className="mb-3 inline-flex rounded-full border border-red-400/20 bg-red-500/10 p-2 text-red-300">
                  <Icon size={18} />
                </div>
                <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-400">{item.text}</p>
              </motion.div>
            );
          })}
        </div>
      </motion.div>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: i * 0.12 + 0.4 }}
            className="rounded-[1.5rem] border border-white/10 bg-gradient-to-br from-white/8 to-white/3 p-6 text-center backdrop-blur"
          >
            <div className="text-4xl font-semibold text-red-300">{stat.value}</div>
            <div className="mt-2 text-sm uppercase tracking-[0.25em] text-slate-400">{stat.label}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
