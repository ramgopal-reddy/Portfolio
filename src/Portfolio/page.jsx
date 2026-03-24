import "../index.css";
import { useNavigation } from "./hooks/useNavigation";
import { useTheme } from "./hooks/useTheme";
import { useScrollProgress } from "./hooks/useScrollProgress";
import { Navigation } from "./components/Navigation";
import { TimelineSidebar } from "./components/TimelineSidebar";
import { HeroSection } from "./components/HeroSection";
import { AboutSection } from "./components/AboutSection";
import { ProjectsSection } from "./components/ProjectsSection/ProjectsSection";
import { CertificationsSection } from "./components/CertificationsSection/CertificationsSection";
import { SkillsSection } from "./components/SkillsSection/SkillsSection";
import { ContactSection } from "./components/ContactSection/ContactSection";
import { Footer } from "./components/Footer";
import { AnimatedGrainyBg } from "@/components/ui/animated-grainy-bg";
import Antigravity from "@/components/Antigravity";
import { ResearchSection } from "./components/ResearchSection/ResearchSection";
import { ExperienceSection } from "./components/ExperienceSection";
import { EducationSection } from "./components/EducationSection";
import InteractiveHeroSection from "./components/InteractiveHeroSection";
import GallerySection from "./components/GallerySection";
import { UsefulAIMLLinks } from "./components/UsefulAIMLlinkes";

export default function PortfolioPage() {
  const { isMenuOpen, setIsMenuOpen, activeSection, scrollToSection } =
    useNavigation();
  const theme = useTheme();
  const scrollProgress = useScrollProgress();

  const navItems = [
    // { id: "hero", label: "Home" },
    // { id: "about", label: "About" },
    // { id: "gallery", label: "Gallery" },
    // { id: "education", label: "Education" },
    // { id: "skills", label: "Skills" },
    // { id: "projects", label: "Projects" },
    // { id: "research", label: "Research" },
    // { id: "certifications", label: "Certifications" },
    // { id: "experience", label: "Experience" },
    // { id: "contact", label: "Contact" },

    {
      id: "hero",
      label: "Home",
      timelineTitle: "Problem Framing",
      timelinedescription:
        "Introducing my purpose and direction, just like defining a model’s objective.",
    },
    {
      id: "about",
      label: "About",
      timelineTitle: "Data Understanding",
      timelinedescription:
        "Exploring my background is like understanding the dataset before building.",
    },
    {
      id: "gallery",
      label: "Gallery",
      timelineTitle: "Data Exploration",
      timelinedescription:
        "Visual highlights of my work reflect patterns, similar to exploratory data analysis.",
    },
    {
      id: "education",
      label: "Education",
      timelineTitle: "Pretraining",
      timelinedescription:
        "My academic foundation builds core knowledge, like pretraining a model.",
    },
    {
      id: "skills",
      label: "Skills",
      timelineTitle: "Model Capabilities",
      timelinedescription:
        "Each skill represents a capability, shaping how effectively I can perform tasks.",
    },
    {
      id: "projects",
      label: "Projects",
      timelineTitle: "Fine-Tuning",
      timelinedescription:
        "Applying and refining knowledge through real-world projects, like training iterations.",
    },
    {
      id: "research",
      label: "Research",
      timelineTitle: "Optimization",
      timelinedescription:
        "Experimenting and improving approaches, similar to optimizing model performance.",
    },
    {
      id: "certifications",
      label: "Certifications",
      timelineTitle: "Evaluation",
      timelinedescription:
        "Validating my knowledge through benchmarks, like evaluating a model’s accuracy.",
    },
    {
      id: "experience",
      label: "Experience",
      timelineTitle: "Deployment",
      timelinedescription:
        "Delivering real-world impact, just like deploying a model into production.",
    },
    {
      id: "contact",
      label: "Contact",
      timelineTitle: "Feedback Loop",
      timelinedescription:
        "Continuous improvement through interaction, mirroring post-deployment feedback.",
    },
  ];

  return (
    <div
      className={`min-h-screen font-inter transition-all duration-300 ${theme.isDark ? "text-white" : "text-gray-800"}`}
      style={{
        transition: `all ${theme.transitions.duration.normal} ${theme.transitions.ease}`,
      }}
    >
      {/* AnimatedGrainyBg - commented out and replaced with Antigravity */}
      {/* <div className="fixed inset-0 -z-10 ">
        <AnimatedGrainyBg
          position="absolute"
          size="full"
          colors={["#000000", "#1a1a1a", "#2e2e2e", "#444444"]}
          speed={0.8}
          grainType="noise"
          grainIntensity={45}
          grainSize={90}
          animationType="flow"
          grainBlendMode="soft-light"
          darkMode={true}
          animate={true}
          zIndex={-1}
        />
      </div> */}
      {/* Antigravity Background */}
      <div
        className="fixed inset-0 -z-10 transition-all duration-500"
        style={{
          transition: `all ${theme.transitions.duration.slow} ${theme.transitions.ease}`,
          opacity: theme.isDark ? 1 : 0.8,
        }}
      >
        <Antigravity
          count={300}
          magnetRadius={36}
          ringRadius={9}
          waveSpeed={1.6}
          waveAmplitude={1}
          particleSize={1.5}
          lerpSpeed={0.05}
          color={theme.colors.primary}
          autoAnimate
          particleVariance={1}
          rotationSpeed={0}
          depthFactor={1}
          pulseSpeed={3}
          particleShape="capsule"
          fieldStrength={10}
        />
      </div>
      {/* Timeline Sidebar Overlay */}
      <TimelineSidebar
        navItems={navItems}
        activeSection={activeSection}
        scrollProgress={scrollProgress}
        onNavigate={scrollToSection}
      />
      <Navigation
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        activeSection={activeSection}
        scrollToSection={scrollToSection}
        navItems={navItems}
      />
      <HeroSection scrollToSection={scrollToSection} />
      <AboutSection />
      {/* <InteractiveHeroSection/> */}
      <GallerySection />
      <EducationSection /> {/* 🎓 Add here — right after About */}
      <SkillsSection /> {/* 💡 Before projects, to show technical foundation */}
      <ProjectsSection /> {/* 💻 Show applied skills next */}
      <ResearchSection /> {/* 📄 Show academic & innovative side */}
      <CertificationsSection /> {/* 🧾 Reinforce expertise with credentials */}
      <ExperienceSection /> {/* 💼 Real-world application of skills */}
      {/* <div style={{ width: "100%", height: "400px", position: "relative" }}>
        <Antigravity
          count={300}
          magnetRadius={36}
          ringRadius={9}
          waveSpeed={1.6}
          waveAmplitude={1}
          particleSize={1.5}
          lerpSpeed={0.05}
          color="#ffffff"
          autoAnimate
          particleVariance={1}
          rotationSpeed={0}
          depthFactor={1}
          pulseSpeed={3}
          particleShape="capsule"
          fieldStrength={10}
        />
      </div> */}
      <ContactSection /> {/* 📩 Networking opportunity */}
      <UsefulAIMLLinks />
      <Footer navItems={navItems} scrollToSection={scrollToSection} />
      {/* <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap");

        .font-inter {
          font-family: "Inter", sans-serif;
        }

        html {
          scroll-behavior: smooth;
        }
      `}</style> */}
    </div>
  );
}
