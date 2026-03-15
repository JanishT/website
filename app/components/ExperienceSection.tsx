"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const experiences = [
    {
        role: "Full Stack Developer",
        company: "Smartglobal Service Centre , Dubai",
        date: "July 2024 - Present",
        responsibilities: [
            "Developed comprehensive software solutions for ERP systems, HR platforms, and internal company chat applications",
            "Collaborated effectively in team environments to contribute to the full lifecycle of project development, from planning to deployment.",
            "Expertly utilized Fuse React, Next.js, and TypeScript to build dynamic, responsive, and user-friendly frontend interfaces",
        ],
    },
    {
        role: "Web Developer",
        company: "iQue",
        date: "Mar 2024 - July 2024",
        responsibilities: [
            "Adept at creating compelling, industry-focused website content that engages target audiences",
            "Expert in building dynamic, responsive web applications using React.js, JavaScript, HTML, and CSS.",
            "Experienced in designing and implementing optimized logic to improve website performance and user experience.",
            "Proficient in presenting completed projects through structured demonstrations and interactive showcases.",
        ],
    },
    {
        role: "React.js Developer",
        company: "Edumetrix Learning Solution PVT Ltd.",
        date: "Feb 2023 - Mar 2024",
        responsibilities: [
            "Designed and implemented intuitive, user-centric, and visually appealing web interfaces.",
            "Developed scalable, high-performance web applications leveraging React, Next.js, and JavaScript.",
            "Collaborated effectively with product managers, developers, and stakeholders to ensure alignment of design and development objectives.",
        ],
    },
];

export default function ExperienceSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="experience" className="py-24 max-w-5xl mx-auto px-6" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl md:text-5xl font-bold text-light-slate flex items-center gap-4 mb-16">
          <span className="text-primary-green text-2xl font-mono">03.</span>
          Professional Experience
          <div className="flex-1 h-[1px] bg-secondary-green ml-4" />
        </h2>

        <div className="flex flex-col md:flex-row gap-10">
          {/* Tabs Column */}
          <div className="flex md:flex-col overflow-x-auto w-full md:w-48 hide-scrollbar relative z-10 space-y-0 md:space-y-2 pb-4 md:pb-0 border-b md:border-b-0 border-light-slate/10">
            {experiences.map((exp, idx) => (
              <button
                key={exp.company}
                onClick={() => setActiveTab(idx)}
                className={`relative flex-none w-auto md:w-full py-3 px-5 text-sm md:text-base font-mono text-left whitespace-nowrap transition-all duration-300 rounded-t-lg md:rounded-lg ${
                  activeTab === idx
                    ? "text-primary-green bg-secondary-green/40 shadow-lg shadow-black/20"
                    : "text-slate hover:text-light-slate hover:bg-secondary-green/20"
                }`}
              >
                {activeTab === idx && (
                  <motion.div
                    layoutId="activeTabIndicator"
                    className="absolute inset-0 border border-primary-green/30 bg-primary-green/5 rounded-t-lg md:rounded-lg -z-10"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                {exp.company.split(" ")[0]} {/* Shorten name for tabs */}
              </button>
            ))}
          </div>

          {/* Content Column */}
          <div className="flex-1 min-h-[350px]">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 20, filter: "blur(4px)" }}
              animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="bg-secondary-green/20 border border-light-slate/5 rounded-2xl p-8 md:p-10 backdrop-blur-sm relative overflow-hidden group"
            >
               {/* Decorative background glow */}
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary-green/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              <h3 className="text-2xl md:text-3xl font-bold text-light-slate mb-2">
                {experiences[activeTab].role}
              </h3>
              <div className="text-xl text-primary-green mb-4">
                @ {experiences[activeTab].company}
              </div>
              <p className="inline-block px-3 py-1 bg-dark-green border border-primary-green/20 rounded-full font-mono text-xs text-light-slate/70 mb-8">
                {experiences[activeTab].date}
              </p>

              <ul className="space-y-5">
                {experiences[activeTab].responsibilities.map((resp, i) => (
                  <motion.li 
                    key={i} 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 + 0.2 }}
                    className="flex gap-4 text-slate text-base md:text-lg"
                  >
                    <span className="text-primary-green mt-1 text-xl">▹</span>
                    <span className="leading-relaxed">{resp}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
