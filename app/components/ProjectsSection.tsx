"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "Queue Management System",
    description:
      "A token-based queue system for managing customer service counters, featuring real-time updates and analytics.",
    tech: ["React", "Redux Toolkit", "Node.js", "MongoDB"],
    github: "#",
    live: "#",
  },
  {
    title: "Todo Application",
    description:
      "A full-stack task management application with secure authentication and robust state management.",
    tech: ["React", "Node.js", "MongoDB"],
    github: "#",
    live: "#",
  },
  {
    title: "Excel Report Generator",
    description:
      "Backend microservice that rapidly generates dynamic Excel reports for complex business analytics.",
    tech: ["Node.js", "ExcelJS", "MongoDB"],
    github: "#",
    live: "#",
  },
];

const TiltCard = ({
  project,
}: {
  project: {
    title: string;
    description: string;
    tech: string[];
    github: string;
    live: string;
  };
}) => {
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { offsetWidth: width, offsetHeight: height } = e.currentTarget;
    const { nativeEvent } = e;
    const x = (nativeEvent.offsetX / width) * 2 - 1;
    const y = (nativeEvent.offsetY / height) * 2 - 1;
    setCoords({ x, y });
  };

  const handleMouseLeave = () => {
    setCoords({ x: 0, y: 0 });
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{
        rotateX: coords.y * -10,
        rotateY: coords.x * 10,
      }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className="bg-secondary-green p-8 rounded border border-light-slate/10 hover:border-primary-green/50 transition-colors flex flex-col h-full group"
      style={{ perspective: 1000 }}
    >
      <div className="flex justify-between items-center mb-8">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-10 h-10 text-primary-green"
        >
          <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
        </svg>
        <div className="flex gap-4">
          <a
            href={project.github}
            className="text-slate hover:text-primary-green transition-colors"
          >
            <FaGithub size={20} />
          </a>
          <a
            href={project.live}
            className="text-slate hover:text-primary-green transition-colors"
          >
            <FaExternalLinkAlt size={18} />
          </a>
        </div>
      </div>

      <h3 className="text-2xl font-bold text-light-slate mb-4 group-hover:text-primary-green transition-colors">
        {project.title}
      </h3>
      <p className="text-slate mb-8 flex-1">{project.description}</p>
      <ul className="flex flex-wrap gap-x-4 gap-y-2 font-mono text-xs text-slate">
        {project.tech.map((t) => (
          <li key={t}>{t}</li>
        ))}
      </ul>
    </motion.div>
  );
};

export default function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="projects" className="py-24 max-w-7xl mx-auto px-6" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl md:text-5xl font-bold text-light-slate flex items-center gap-4 mb-16">
          <span className="text-primary-green text-2xl font-mono">03.</span>
          Some Things I've Built
          <div className="flex-1 h-[1px] bg-secondary-green ml-4" />
        </h2>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {projects.map((project) => (
          <motion.div key={project.title} variants={cardVariants}>
            <TiltCard project={project} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
