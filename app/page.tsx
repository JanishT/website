import Navbar from "./components/Navbar";
import BackgroundParticles from "./components/BackgroundParticles";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import SkillsSection from "./components/SkillsSection";
import ProjectsSection from "./components/ProjectsSection";
import ExperienceSection from "./components/ExperienceSection";
import ResumeSection from "./components/ResumeSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <BackgroundParticles />
      <Navbar />
      
      <main className="flex flex-col w-full relative z-10">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        {/* <ProjectsSection /> */}
        <ExperienceSection />
        {/* <ResumeSection /> */}
        <Footer />
      </main>
    </>
  );
}
