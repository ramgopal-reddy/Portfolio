import { Code, MapPin, Mail } from "lucide-react";
import { Demo } from "./Demo";
import { profileData } from "../data/profileData";
import { useTheme } from "../hooks/useTheme";

export function AboutSection() {
  const theme = useTheme();

  return (
    <section id="about" className={`py-20 px-4 sm:px-6 transition-all duration-300 ${theme.isDark ? 'bg-gray-800/50' : 'bg-gray-100/50'}`}> {/* bg-gray-800/50 - dark background with transparency */}
      <div className="max-w-6xl mx-auto" style={{ transition: `all ${theme.transitions.duration.normal} ${theme.transitions.ease}` }}>
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r ${theme.colors.gradient}`}>
            About Me
          </h2>
          <div className="w-24 h-1 mx-auto rounded-full bg-gradient-to-r" style={{ background: `linear-gradient(to right, ${theme.colors.primary}, ${theme.colors.secondary})` }}></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <div className="relative inline-block">
              <div className="w-64 h-64 sm:w-80 sm:h-80 mx-auto lg:mx-0 rounded-full p-1" style={{ background: `linear-gradient(to bottom right, ${theme.colors.primary}, ${theme.colors.secondary})` }}>
                <div className={`w-full h-full rounded-full flex items-center justify-center text-6xl ${theme.isDark ? 'bg-gray-700' : 'bg-gray-200'}`}>
                  <img
                    // src="./SSMB29.jpg"
                    src="./Ram.jpg"
                    alt="Profile"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-16 h-16 rounded-full flex items-center justify-center animate-pulse" style={{ backgroundColor: theme.colors.primary }}>
                <Code className="w-8 h-8 text-black" />
              </div>
            </div>
          </div>

          {/* About Content */}
          <div className="order-1 lg:order-2">
            <h3 className="text-2xl font-semibold mb-6" style={{ color: theme.colors.primary }}>
              {profileData[0].role}
            </h3>
            {/* <div className="space-y-4 text-white/80 leading-relaxed">
              <p>
                I'm a passionate web developer with over 5 years of experience
                creating beautiful, functional, and user-centered digital
                experiences. I combine technical expertise with creative design
                to bring ideas to life.
              </p>
              <p>
                My journey in web development started with a curiosity about how
                websites work, and it has evolved into a deep passion for
                creating innovative solutions that make a difference.
              </p>
              <p>
                When I'm not coding, you'll find me exploring new design trends,
                contributing to open-source projects, or sharing knowledge with
                the developer community.
              </p>
            </div> */}

            <Demo />

            <div className="mt-8 flex flex-wrap gap-4">
              <div className="flex items-center gap-2" style={{ color: theme.colors.textSecondary }}>
                <MapPin className="w-4 h-4" />
                <span>{profileData[0].location}</span>
              </div>
              <div className="flex items-center gap-2" style={{ color: theme.colors.textSecondary }}>
                <Mail className="w-4 h-4" />
                <span>{profileData[0].email}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
