"use client";

import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  const socials = [
    {
      name: "GitHub",
      url: "https://github.com/JanishT",
      icon: FaGithub,
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/janish-t/",
      icon: FaLinkedin,
    },
    {
      name: "Email",
      url: "mailto:janishtzx@gmail.com",
      icon: Mail,
    },
  ];

  return (
    <footer className="mx-auto w-full max-w-7xl px-6 pb-10 pt-4 sm:px-8 lg:px-10">
      <div className="rounded-[2rem] border border-white/10 bg-white/5 px-6 py-8 backdrop-blur-xl">
        <div className="flex flex-col items-center text-center gap-6">

          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-red-300">
              Let's Connect
            </p>

            <h3 className="mt-3 text-2xl font-semibold text-white">
              Ready for your next edit?
            </h3>

            <p className="mt-3 max-w-xl text-sm leading-7 text-slate-400">
              Let's create cinematic videos that engage your audience and bring
              your vision to life.
            </p>
          </div>

          <div className="flex gap-4">
            {socials.map((social) => {
              const Icon = social.icon;

              return (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="rounded-full border border-white/10 bg-slate-950/40 p-3 text-slate-300 transition-all duration-300 hover:-translate-y-1 hover:border-red-400/30 hover:text-red-300"
                >
                  <Icon size={20} />
                </a>
              );
            })}
          </div>

          

          <div className="border-t border-white/10 pt-6 w-full">
            <p className="text-sm text-slate-400">
              Designed & Built by{" "}
              <span className="font-semibold text-red-300">
                Janish Thalappil
              </span>
            </p>

            <p className="mt-2 text-xs text-slate-500">
              © {new Date().getFullYear()} All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}