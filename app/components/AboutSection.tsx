"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import ProfileImg from "@/app/assets/profile.jpeg";

const stats = [
  { value: "3+", label: "Years Experience" },
  { value: "6+", label: "Projects On working" },
  { value: "10+", label: "Technologies Used" },
];

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 max-w-7xl mx-auto px-6" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="flex flex-col md:flex-row gap-16 items-center"
      >
        <div className="flex-1 space-y-6 text-slate text-lg">
          <h2 className="text-3xl md:text-5xl font-bold text-light-slate flex items-center gap-4">
            <span className="text-primary-green text-2xl font-mono">01.</span>
            About Me
            <div className="flex-1 h-[1px] bg-secondary-green ml-4" />
          </h2>

          <p>
            Am Janish, a passionate Software Developer specializing in
            building modern web applications.
          </p>

          <p>
        Primarily work with React, TypeScript, Node.js, and MongoDB, building scalable systems, modern user interfaces, and delivering solutions to complex challenges.
          </p>

          <p>
            Currently,building high-performance web applications. Here are a few technologies I’ve been working with recently:
          </p>

          <ul className="grid grid-cols-2 gap-2 text-sm font-mono mt-4">
            {["JavaScript (ES6+)", "TypeScript", "React", "Node.js", "Next.js", "MongoDB"].map(
              (tech) => (
                <li key={tech} className="flex items-center gap-2">
                  <span className="text-primary-green">▹</span> {tech}
                </li>
              )
            )}
          </ul>
        </div>

        <div className="w-full md:w-5/12 perspective-1000">
          <div className="relative w-full aspect-[4/5] max-w-[400px] mx-auto group">
            <div className="absolute inset-0 border-2 border-primary-green rounded translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300" />
            <div className="absolute inset-0 bg-primary-green/20 group-hover:bg-transparent transition-colors duration-300 z-10 mix-blend-multiply rounded" />
            <Image
              src={ProfileImg}
              alt="Janish Profile"
              fill
              className="object-cover object-top rounded relative z-0 filter contrast-125 brightness-90 sepia-[.2] hue-rotate-[-10deg] saturate-50 group-hover:filter-none transition-all duration-500"
            />
          </div>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: i * 0.2 + 0.5 }}
            className="flex flex-col items-center justify-center p-8 border border-secondary-green rounded bg-dark-green hover:bg-secondary-green hover:-translate-y-2 transition-transform"
          >
            <div className="text-5xl font-bold text-primary-green mb-2">
              {stat.value}
            </div>
            <div className="text-slate font-medium text-center">
              {stat.label}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
