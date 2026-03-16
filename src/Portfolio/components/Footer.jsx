import { Github, Globe, Linkedin, Mail } from "lucide-react";
import { profileData } from "../data/profileData";
import { useTheme } from "../hooks/useTheme";

export function Footer({ navItems, scrollToSection }) {
  const theme = useTheme();

  return (
    <footer className={`py-12 px-4 sm:px-6 border-t transition-all duration-300 ${theme.isDark ? 'border-white/10 bg-gray-800/50' : 'border-gray-200/50 bg-gray-100/50'}`}>
      <div className="max-w-6xl mx-auto" style={{ transition: `all ${theme.transitions.duration.normal} ${theme.transitions.ease}` }}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div>
            <h3 className="font-bold text-xl tracking-wider mb-4" style={{ color: theme.colors.text }}>
              {profileData[0].name}
            </h3>
            <p className="text-sm" style={{ color: theme.colors.textSecondary }}>
              Creating exceptional digital experiences with passion and
              precision.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4" style={{ color: theme.colors.text }}>Quick Links</h4>
            <div className="space-y-2">
              {navItems.slice(1).map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block text-sm transition-all duration-200" style={{ 
                    color: theme.colors.textSecondary,
                    transition: `all ${theme.transitions.duration.normal} ${theme.transitions.ease}`
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.color = theme.colors.primary;
                    e.target.style.transition = `all ${theme.transitions.duration.normal} ${theme.transitions.ease}`;
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.color = theme.colors.textSecondary;
                    e.target.style.transition = `all ${theme.transitions.duration.normal} ${theme.transitions.ease}`;
                  }}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4" style={{ color: theme.colors.text }}>Connect</h4>
            <div className="flex justify-center md:justify-start gap-4">
              <a
                href={profileData[0].github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-gray-700/50 rounded-lg flex items-center justify-center hover:bg-cyan-500/20 hover:border-cyan-500/50 border border-white/10 transition-all duration-200 group"
              >
                <Github className="w-4 h-4" style={{ color: theme.colors.textSecondary }} />
              </a>
              <a
                href={profileData[0].linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-gray-700/50 rounded-lg flex items-center justify-center hover:bg-cyan-500/20 hover:border-cyan-500/50 border border-white/10 transition-all duration-200 group"
              >
                <Linkedin className="w-4 h-4" style={{ color: theme.colors.textSecondary }} />
              </a>
              <a
                href={`mailto:${profileData[0].email}`}
                className="w-8 h-8 bg-gray-700/50 rounded-lg flex items-center justify-center hover:bg-cyan-500/20 hover:border-cyan-500/50 border border-white/10 transition-all duration-200 group"
              >
                <Mail className="w-4 h-4" style={{ color: theme.colors.textSecondary }} />
              </a>
              <a
                href={profileData[0].website}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-200 group"
                style={{ 
                  backgroundColor: theme.isDark ? 'rgba(31, 41, 55, 0.5)' : 'rgba(243, 244, 246, 0.8)',
                  border: theme.colors.border,
                  transition: `all ${theme.transitions.duration.normal} ${theme.transitions.ease}`
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = theme.colors.primary;
                  e.target.style.color = theme.colors.text;
                  e.target.style.borderColor = theme.colors.primary;
                  e.target.style.transition = `all ${theme.transitions.duration.normal} ${theme.transitions.ease}`;
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = theme.isDark ? 'rgba(31, 41, 55, 0.5)' : 'rgba(243, 244, 246, 0.8)';
                  e.target.style.color = theme.colors.text;
                  e.target.style.borderColor = theme.colors.border;
                  e.target.style.transition = `all ${theme.transitions.duration.normal} ${theme.transitions.ease}`;
                }}
              >
                <Globe className="w-4 h-4" style={{ color: theme.colors.textSecondary }} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center" style={{ borderColor: theme.colors.border }}>
          <p className="text-sm" style={{ color: theme.colors.textSecondary }}>
            © 2025 {profileData[0].name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
