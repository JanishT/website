"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Resume", href: "#resume" },
];

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed left-0 right-0 top-0 z-40 px-6 py-6 sm:px-8 lg:px-10"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/10 bg-slate-950/40 px-4 py-3 backdrop-blur-xl">
        <Link href="#home" className="text-sm font-semibold uppercase tracking-[0.3em] text-red-300">
          Janish
        </Link>
        <ul className="hidden items-center gap-6 md:flex">
          {navLinks.map((link, i) => (
            <motion.li
              key={link.name}
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 + 0.4, duration: 0.4 }}
            >
              <Link href={link.href} className="text-sm text-slate-300 transition hover:text-red-200">
                {link.name}
              </Link>
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.nav>
  );
}
