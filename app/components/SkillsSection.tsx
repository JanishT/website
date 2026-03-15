"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaVideo,
} from "react-icons/fa";
import {
  SiTypescript,
  SiJavascript,
  SiRedux,
  SiTailwindcss,
  SiMui,
  SiExpress,
  SiMongodb,
  SiNextdotjs,
  SiHtml5,
  // SiCss3,
  SiGithub,
} from "react-icons/si";

const skillCategories = [
  {
    title: "Frontend & Core",
    skills: [
      { name: "React", icon: FaReact, color: "#61DAFB" },
      { name: "Next.js", icon: SiNextdotjs, color: "#ffffff" },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "HTML", icon: SiHtml5, color: "#E34F26" },
      { name: "CSS", icon: SiHtml5, color: "#1572B6" },
    ],
  },
  {
    title: "Backend & State",
    skills: [
      { name: "Node.js", icon: FaNodeJs, color: "#339933" },
      { name: "Express.js", icon: SiExpress, color: "#ffffff" },
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      { name: "Redux", icon: SiRedux, color: "#764ABC" },
    ],
  },
  {
    title: "Tools & Styling",
    skills: [
      { name: "Git", icon: FaGitAlt, color: "#F05032" },
      { name: "GitHub", icon: SiGithub, color: "#ffffff" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
      { name: "Material-UI", icon: SiMui, color: "#007FFF" },
    ],
  },
];

export default function SkillsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="skills" className="py-24 max-w-7xl mx-auto px-6" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl md:text-5xl font-bold text-light-slate flex items-center gap-4 mb-16">
          <span className="text-primary-green text-2xl font-mono">02.</span>
          Technical Skills
          <div className="flex-1 h-[1px] bg-secondary-green ml-4" />
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {skillCategories.map((category, idx) => (
          <motion.div
            key={category.title}
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="bg-secondary-green/30 rounded-xl p-8 border border-secondary-green backdrop-blur-sm"
          >
            <h3 className="text-2xl font-semibold text-white mb-6 text-center">
              {category.title}
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {category.skills.map((skill) => (
                <motion.div
                  key={skill.name}
                  variants={itemVariants}
                  className="flex flex-col items-center justify-center p-4 bg-dark-green rounded-lg hover:bg-secondary-green transition-all hover:scale-105 group cursor-pointer"
                >
                  <skill.icon
                    size={40}
                    className="mb-3 opacity-80 group-hover:opacity-100 transition-opacity"
                    style={{ color: skill.color }}
                  />
                  <span className="text-sm font-medium text-slate group-hover:text-primary-green transition-colors text-center">
                    {skill.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
