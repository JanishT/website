"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Resume", href: "#resume" },
];

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-40 px-6 py-6"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-primary-green font-bold text-xl tracking-tighter">
        Janish 
        </div>
        <ul className="hidden md:flex space-x-8">
          {navLinks.map((link, i) => (
            <motion.li
              key={link.name}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 + 0.5, duration: 0.5 }}
            >
              <Link
                href={link.href}
                className="text-light-slate hover:text-primary-green transition-colors text-sm font-medium"
              >
                {link.name}
              </Link>
            </motion.li>
          ))}
        </ul>
        <div className="md:hidden text-primary-green">
          {/* Mobile Menu Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </div>
      </div>
    </motion.nav>
  );
}
