"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FaDownload } from "react-icons/fa";

export default function ResumeSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="resume"
      className="py-24 max-w-4xl mx-auto px-6 mb-20"
      ref={ref}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.6 }}
        className="bg-gradient-to-br from-secondary-green to-dark-green border border-primary-green/20 rounded-2xl p-8 md:p-12 relative overflow-hidden group"
      >
        <div className="absolute inset-0 bg-primary-green/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        <div className="relative z-10 flex flex-col md:flex-row gap-10 items-center justify-between">
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-bold text-light-slate mb-4">
              Get My Full Resume
            </h2>
            <p className="text-slate mb-8 max-w-md">
              Grab a copy of my resume for a detailed look at my experience,
              education, and skills.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-primary-green" />
                <span className="text-light-slate font-medium">Education:</span>
                <span className="text-slate">Bachelor's in Computer Science</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-primary-green" />
                <span className="text-light-slate font-medium">Core Skills:</span>
                <span className="text-slate">React, Node.js, MongoDB</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-primary-green" />
                <span className="text-light-slate font-medium">Experience:</span>
                <span className="text-slate">3+ years Web Development</span>
              </div>
            </div>

            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-primary-green text-dark-green font-semibold rounded hover:bg-primary-green/90 transition-colors shadow-[0_0_20px_rgba(100,255,218,0.3)] hover:shadow-[0_0_30px_rgba(100,255,218,0.5)]"
            >
              <FaDownload />
              Download Resume
            </a>
          </div>

          <div className="hidden md:block w-48 h-64 bg-dark-green border border-slate/30 rounded shadow-2xl rotate-3 group-hover:rotate-6 transition-transform duration-500 relative p-4 flex flex-col gap-2">
            {/* Minimal resume preview visualization */}
            <div className="w-2/3 h-4 rounded bg-primary-green/40 mb-2" />
            <div className="w-full h-2 rounded bg-slate/20" />
            <div className="w-5/6 h-2 rounded bg-slate/20" />
            <div className="w-4/6 h-2 rounded bg-slate/20" />
            <div className="w-full h-12 rounded bg-secondary-green mt-2" />
            <div className="w-full h-12 rounded bg-secondary-green" />
            <div className="w-full h-12 rounded bg-secondary-green" />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
