"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Play } from "lucide-react";
import SectionHeading from "./SectionHeading";
import tharImg from "@/app/assets/portfolio/Thar.png"
import ship from "@/app/assets/portfolio/ship.png"
import { useState } from "react";
import Image from "next/image";

const projects = [
  {
  title: "Thar Off-Road Adventure Reel",
category: "Promotional Reel",
description:
  "A cinematic promotional reel showcasing the Mahindra Thar conquering rugged off-road trails with dynamic pacing, smooth transitions, immersive sound design, and vibrant color grading. Edited in CapCut.",
tools: ["CapCut", "Color Grading", "Sound Design"],
    thumb: tharImg,
    video: "/video/Thar_clip.MOV",
  },
  {
     title: "Adventure & Memories",
  category: "Lifestyle Reel",
  description:
    "A cinematic collection of travel adventures and life moments, edited with smooth transitions, creative pacing, and immersive visuals to tell a personal story.",
   tools: ["DaVinci Resolve", "Color Grading", "Storytelling"],
    thumb: ship,
    video:"/video/sample_art.MOV",
  },
  // {
  //   title: "YouTube Narrative Cut",
  //   category: "YouTube",
  //   description: "A retention-focused edit with punchy pacing, polished transitions, and story-forward structure.",
  //   tools: ["DaVinci Resolve", "Fusion", "Audio"],
  //   thumb: "https://images.unsplash.com/photo-1517602302552-471fe67acf66?auto=format&fit=crop&w=1200&q=80",
  // },
];

export default function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  return (
    <section id="projects" className="mx-auto max-w-7xl px-6 py-24 sm:px-8 lg:px-10" ref={ref}>
      <SectionHeading
        eyebrow="Portfolio"
        title="Selected work with cinematic polish"
        description="A look at recent edits crafted for impact, clarity, and visual elegance."
      />

      <div className="grid gap-8 lg:grid-cols-2">
        {projects.map((project, index) => (
          <motion.article
            key={project.title}
            initial={{ opacity: 0, y: 28 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ y: -8, scale: 1.01 }}
            className="group overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/50 shadow-[0_20px_60px_rgba(0,0,0,0.28)] backdrop-blur"
          >
            <div className="relative aspect-video overflow-hidden">
              {/* <img src={project?.thumb} alt={project.title} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" /> */}
              <Image
  src={project.thumb}
  alt={project.title}
  fill
  className="object-cover transition duration-700 group-hover:scale-105"
/>
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/20 to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center">
                {project.video ? (
                  <button
                    type="button"
                    onClick={() => setSelectedVideo(project.video)}
                    className="rounded-full border border-white/40 bg-white/10 p-4 backdrop-blur transition hover:bg-white/20"
                  >
                    <Play size={24} className="ml-1 text-white" />
                    <span className="sr-only">Play {project.title}</span>
                  </button>
                ) : (
                  <div className="rounded-full border border-white/40 bg-white/10 p-4 backdrop-blur">
                    <Play size={24} className="ml-1 text-white" />
                  </div>
                )}
              </div>
              <div className="absolute left-4 top-4 rounded-full border border-red-400/30 bg-red-500/15 px-3 py-1 text-xs uppercase tracking-[0.3em] text-red-200">
                {project.category}
              </div>
            </div>

            <div className="p-6">
              <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-400">{project.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.tools.map((tool) => (
                  <span key={tool} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300">
                    {tool}
                  </span>
                ))}
              </div>
              <a href="#resume" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-red-300 transition hover:text-red-200">
                View Project <ArrowRight size={15} />
              </a>
            </div>
          </motion.article>
        ))}
      </div>

      {selectedVideo && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={() => setSelectedVideo(null)}
        >
          <div
            className="relative w-full max-w-5xl max-h-[90vh] overflow-hidden rounded-3xl bg-slate-950/95 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedVideo(null)}
              className="absolute right-4 top-4 z-10 rounded-full bg-black/70 p-3 text-white transition hover:bg-black/90"
            >
              ✕
            </button>

            <video
              src={selectedVideo}
              controls
              autoPlay
              className="h-full w-full max-h-[90vh] bg-black object-contain"
            />
          </div>
        </div>
      )}
    </section>
  );
}
