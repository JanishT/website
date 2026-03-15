"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import HeroBg from "@/app/assets/janish_art_bg.png";

const titles = [
  "Software Developer",
];

export default function HeroSection() {
  const [currentTitleIdx, setCurrentTitleIdx] = useState(0);
  const containerRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Pan from left to center/right to simulate the camera moving across the scene
  const xOff = useTransform(scrollYProgress, [0, 1], ["0%", "-15%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.1, 1.25]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [0.4, 0.1]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitleIdx((prev) => (prev + 1) % titles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
    >
      <div className="absolute inset-0 z-0 bg-black">
        <motion.div
          className="relative w-[120%] h-[120%] -left-[10%] -top-[10%]"
          style={{ x: xOff, scale, opacity }}
        >
          <Image
            src={HeroBg}
            alt="Banner Image"
            fill
            className="object-cover"
            style={{ objectPosition: "left center" }}
            priority
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-dark-green/90 via-dark-green/60 to-transparent backdrop-blur-[1px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full flex flex-col items-start justify-center text-left">
        <div className="space-y-4 md:space-y-6">
       
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="text-5xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-light-slate to-slate tracking-tight"
          >
            Janish Thalappil
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
            className="h-16 flex items-center text-3xl md:text-6xl font-bold text-slate overflow-hidden relative"
          >
            <div className="relative w-full h-full">
              {titles.map((title, idx) => (
                <motion.div
                  key={idx}
                  className="absolute left-0 top-0 text-primary-green drop-shadow-[0_0_15px_rgba(100,255,218,0.3)]"
                  initial={{ y: 80, opacity: 0, rotateX: -90 }}
                  animate={{
                    y: currentTitleIdx === idx ? 0 : -80,
                    opacity: currentTitleIdx === idx ? 1 : 0,
                    rotateX: currentTitleIdx === idx ? 0 : 90,
                  }}
                  transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
                  style={{ transformOrigin: "bottom center" }}
                >
                  {title}
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6, ease: "easeOut" }}
            className="max-w-2xl text-slate text-lg md:text-xl leading-relaxed pt-6 font-light border-l-2 border-primary-green pl-6"
          >
           Specialize in IT technologies and am driven to explore and implement modern, innovative digital solutions.
          </motion.p>

          {/* <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap gap-4 pt-8"
          >
            <a
              href="#projects"
              className="px-8 py-4 border border-primary-green text-primary-green rounded hover:bg-primary-green/10 transition-colors"
            >
              View Projects
            </a>
            <a
              href="#resume"
              className="px-8 py-4 bg-primary-green text-dark-green font-semibold rounded hover:bg-primary-green/90 transition-colors"
            >
              Download Resume
            </a>
          </motion.div> */}
        </div>
      </div>

      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <div className="w-[1px] h-16 bg-gradient-to-b from-primary-green to-transparent overflow-hidden">
          <motion.div
            className="w-full h-1/2 bg-white"
            initial={{ y: -20 }}
            animate={{ y: 40 }}
            transition={{
              repeat: Infinity,
              duration: 1.5,
              ease: "linear",
            }}
          />
        </div>
      </motion.div>
    </section>
  );
}
