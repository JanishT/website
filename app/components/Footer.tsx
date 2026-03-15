"use client";

import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  const socials = [
    { name: "GitHub", url: "https://github.com/JanishT", icon: FaGithub },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/janish-t/",
      icon: FaLinkedin,
    },
    { name: "Twitter", url: "https://twitter.com/", icon: FaTwitter },
    { name: "Email", url: "mailto:janish@email.com", icon: FaEnvelope },
  ];

  return (
    <footer className="w-full py-8 text-center flex flex-col items-center justify-center">
      <div className="flex gap-6 mb-6">
        {socials.map((social) => (
          <a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate hover:text-primary-green hover:-translate-y-1 transition-all p-2"
            aria-label={social.name}
          >
            <social.icon size={24} />
          </a>
        ))}
      </div>
      <p className="text-slate font-mono text-sm max-w-xs mx-auto">
        Designed & Built by{" "}
        <span className="text-primary-green">Janish Thalappil</span>
        <br />© {new Date().getFullYear()} All rights reserved.
      </p>
    </footer>
  );
}
