"use client";
import Image from "next/image";
import LinkIdIn from "@/app/assets/social.png";
import Instagram from "@/app/assets/photo.png";
import Github from "@/app/assets/github.png";
// import Whatsapp from "@/app/assets/whatsapp (1).png";
import Boy from "@/app/assets/main-boy.png";

const CircuitBackgroundStyles = () => (
  <style jsx global>{`
    @keyframes digital-pulse {
      0% {
        opacity: 0.3;
      }
      50% {
        opacity: 0.5;
      }
      100% {
        opacity: 0.3;
      }
    }

    .circuit-background {
      background-color: #1a2e23;
      background-image: linear-gradient(
          to right,
          rgba(144, 238, 144, 0.15) 1px,
          transparent 1px
        ),
        linear-gradient(
          to bottom,
          rgba(144, 238, 144, 0.15) 1px,
          transparent 1px
        );
      background-size: 50px 50px;
      animation: digital-pulse 8s infinite alternate;
    }
  `}</style>
);

const socialLinks = [
  { icon: LinkIdIn, url: "https://www.linkedin.com/in/janish-t/" },
  {
    icon: Instagram,
    url: "https://www.instagram.com/__janish_riaz.__?igsh=YjR0emF4ZndrbjJl",
  },
  { icon: Github, url: "https://github.com/JanishT" },
  // { icon: Whatsapp, url: "https://wa.me/<9846902985>" },
];

export default function Home() {
  return (
    <>
      <CircuitBackgroundStyles />
      <main className="flex flex-col justify-between items-center px-5 py-5 circuit-background min-h-[100vh]">
        <div className="flex flex-col items-center w-full flex-1 justify-center gap-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white text-center">
            Janish Thalappil
          </h1>
          <p className="text-center text-gray-300 text-lg md:text-2xl">
            Full Stack Developer
          </p>

          <div className="w-full max-w-xs md:max-w-sm lg:max-w-md mt-4">
            <div className="relative w-full h-[200px] md:h-[300px] lg:h-[400px]">
              <Image
                src={Boy}
                alt="Software Developer Walking in a Digital City"
                fill
                style={{ objectFit: "contain" }}
                priority
              />
            </div>
          </div>

          <div className="flex gap-6 mt-6">
            {socialLinks?.map(({ icon, url }, idx) => (
              <a
                key={idx}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 relative cursor-pointer"
              >
                <Image src={icon} alt="social icon" fill />
              </a>
            ))}
          </div>
        </div>

        <p className="text-xs text-gray-400 mt-4 mb-2 text-center">
          © {new Date().getFullYear()} Janish — All rights reserved.
        </p>
      </main>
    </>
  );
}
