"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Download } from "lucide-react";

export default function ResumeSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="resume" className="mx-auto mb-20 max-w-6xl px-6 py-24 sm:px-8 lg:px-10" ref={ref}>
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.6 }}
        className="overflow-hidden rounded-[2rem] border border-red-400/20 bg-gradient-to-br from-slate-900 via-slate-950 to-black p-8 shadow-[0_20px_70px_rgba(0,0,0,0.32)] md:p-12"
      >
        <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm uppercase tracking-[0.35em] text-red-300">Portfolio spotlight</p>
            <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">
              Video work crafted for cinematic impact.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-300">
              Explore a curated selection of edits, color grading, motion graphics, and story-driven films designed to elevate visual storytelling.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="/Janish_thalappil-video_editor.pdf" download className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:-translate-y-1">
                <Download size={16} /> Download Resume
              </a>
              <a href="mailto:janishtzx@gmail.com" className="inline-flex items-center gap-2 rounded-full border border-red-400/30 bg-red-500/10 px-6 py-3 text-sm font-semibold text-red-200 transition hover:-translate-y-1">
                Contact Me <ArrowRight size={16} />
              </a>
            </div>
          </div>

          <div className="rounded-[1.6rem] border border-white/10 bg-white/5 p-6 backdrop-blur">
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-slate-400">
              <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
              Signature work
            </div>
            <div className="mt-6 space-y-3 text-sm text-slate-300">
              <p>• Cinematic reels and travel films</p>
              <p>• Commercial and brand storytelling</p>
              <p>• YouTube edits and visual polish</p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
