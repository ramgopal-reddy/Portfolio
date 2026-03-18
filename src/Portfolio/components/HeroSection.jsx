import { useEffect, useState } from "react";
import { AnimatedBackground } from "animated-backgrounds";
import { profileData } from "../data/profileData";
import { useTheme } from "../hooks/useTheme";
import { Linkedin } from "lucide-react";

export function HeroSection({ scrollToSection }) {
  const [isDesktop, setIsDesktop] = useState(false);
  const theme = useTheme();

  useEffect(() => {
    // Detect window size
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024); // Tailwind 'lg' breakpoint
    };
    handleResize(); // check on mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16 transition-all duration-500"
      style={{
        transition: `all ${theme.transitions.duration.slow} ${theme.transitions.ease}`,
      }}
    >
      {/* Animated Background */}
      {/* <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black">
        <div className="absolute inset-0 opacity-20">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute bg-cyan-400 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${Math.random() * 4 + 1}px`,
                height: `${Math.random() * 4 + 1}px`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${Math.random() * 3 + 2}s`,
              }}
            />
          ))}
        </div>
      </div> */}
      {/* Contained Animated Background */}
      {/* <div className="absolute inset-0 z-0">
        <AnimatedBackground
          animationName="starryNight"
          blendMode="difference"
          style={{
            width: "100%",
            height: "100%",
            position: "absolute",
          }}
        />
      </div> */}

      {isDesktop ? (
        // 🌌 Desktop: Starry background
        <AnimatedBackground
          animationName="starryNight"
          blendMode="difference"
          style={{
            width: "100%",
            height: "100%",
            position: "absolute",
          }}
        />
      ) : (
        // 📱 Mobile / tablet: Gradient with floating dots
        <div
          className="absolute inset-0"
          style={{
            background: theme.isDark
              ? "linear-gradient(to bottom right, #111827, #1f2937, #000000)"
              : "linear-gradient(to bottom right, #f3f4f6, #e5e7eb, #d1d5db)",
          }}
        >
          <div className="absolute inset-0 opacity-25">
            {[...Array(40)].map((_, i) => (
              <div
                key={i}
                className="absolute rounded-full animate-pulse"
                style={{
                  backgroundColor: theme.colors.primary,
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  width: `${Math.random() * 4 + 1}px`,
                  height: `${Math.random() * 4 + 1}px`,
                  animationDelay: `${Math.random() * 3}s`,
                  animationDuration: `${Math.random() * 3 + 2}s`,
                }}
              />
            ))}
          </div>
        </div>
      )}

      <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto">
        <h1
          className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r transition-all duration-300"
          style={{
            backgroundImage: `linear-gradient(to right, ${theme.colors.text}, ${theme.colors.primary}, ${theme.colors.secondary})`,
            transition: `all ${theme.transitions.duration.normal} ${theme.transitions.ease}`,
          }}
        >
          {profileData[0].name}
        </h1>
        <p
          className="text-xl sm:text-2xl md:text-3xl mb-8 font-light transition-all duration-300"
          style={{
            color: theme.colors.textSecondary,
            transition: `all ${theme.transitions.duration.normal} ${theme.transitions.ease}`,
          }}
        >
          {profileData[0].role}
        </p>
        <p
          className="text-lg mb-12 max-w-2xl mx-auto leading-relaxed transition-all duration-300"
          style={{
            color: theme.colors.textSecondary,
            transition: `all ${theme.transitions.duration.normal} ${theme.transitions.ease}`,
          }}
        >
          {profileData[0].bio}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => scrollToSection("projects")}
            className="px-8 py-4 font-semibold rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg"
            style={{
              backgroundColor: theme.colors.primary,
              color: "#000",
              boxShadow: `0 0 20px ${theme.colors.primary}40`,
              transition: `all ${theme.transitions.duration.normal} ${theme.transitions.ease}`,
            }}
          >
            View Projects
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="px-8 py-4 border-2 font-semibold rounded-lg transition-all duration-300 hover:scale-105"
            style={{
              borderColor: theme.colors.primary,
              color: theme.colors.primary,
              transition: `all ${theme.transitions.duration.normal} ${theme.transitions.ease}`,
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = theme.colors.primary;
              e.target.style.color = "#000";
              e.target.style.transition = `all ${theme.transitions.duration.normal} ${theme.transitions.ease}`;
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = "transparent";
              e.target.style.color = theme.colors.primary;
              e.target.style.transition = `all ${theme.transitions.duration.normal} ${theme.transitions.ease}`;
            }}
          >
            Contact Me
          </button>
          <div
            className="px-8 py-4 border-2 font-semibold rounded-lg transition-all duration-300 hover:scale-105"
            style={{
              borderColor: theme.colors.primary,
              color: theme.colors.primary,
              transition: `all ${theme.transitions.duration.normal} ${theme.transitions.ease}`,
            }}
          >
            <a href="/RamGopalReddy.pdf" download>
              <button>Download Resume</button>
            </a>
          </div>
          <div
            className="px-8 py-4 border-2 font-semibold rounded-lg transition-all duration-300 hover:scale-105"
            style={{
              backgroundColor: theme.colors.primary,
            }}
          >
            <a
              href="./RamGopalReddy.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button>View Resume</button>
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-white/50" />
        </div> */}
      </div>
    </section>
  );
}
