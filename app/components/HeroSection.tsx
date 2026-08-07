"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Play, Sparkles } from "lucide-react";
import Image from "next/image";

export default function HeroSection() {
  const containerRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -40]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.06]);

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative flex min-h-screen items-center overflow-hidden px-6 pb-24 pt-28 sm:px-8 lg:px-10"
    >
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_top_left,_rgba(239,68,68,0.18),_transparent_35%),linear-gradient(135deg,_rgba(17,24,39,0.95),_rgba(2,6,23,0.98))]" />
      <motion.div
        style={{ y, scale }}
        className="absolute inset-0 z-0 opacity-70"
      >
        <div className="absolute inset-0 bg-[linear-gradient(115deg,_transparent_0%,_rgba(255,255,255,0.05)_45%,_transparent_100%)]" />
        <div className="absolute left-[10%] top-[18%] h-72 w-72 rounded-full bg-red-500/15 blur-3xl" />
        <div className="absolute bottom-[12%] right-[8%] h-80 w-80 rounded-full bg-rose-400/10 blur-3xl" />
      </motion.div>

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-red-400/30 bg-white/5 px-4 py-2 text-sm text-red-200 backdrop-blur">
            <Sparkles size={16} />
            DaVinci Resolve • Capcut • Motion Graphics • After Effects
          </div>

          <h1 className="text-4xl font-semibold leading-[0.95] text-white sm:text-5xl md:text-7xl lg:text-8xl">
            Janish Thalappil
            <span className="mt-3 block bg-gradient-to-r from-red-300 via-rose-200 to-white bg-clip-text text-transparent">
              Video Editor
            </span>
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
         I'm a passionate Video Editor creating cinematic travel films, YouTube videos, and Instagram Reels using DaVinci Resolve and CapCut.</p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full border border-red-400/40 bg-red-500/15 px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-1 hover:bg-red-500/25"
            >
              View Portfolio <ArrowRight size={16} />
            </a>
           
          </div>
        </motion.div>
      </div>
     
    </section>
  );
}
