import { Mail, MapPin, Github, Linkedin } from "lucide-react";
import { profileData } from "@/Portfolio/data/profileData";
import { useTheme } from "../../hooks/useTheme";

export function ContactInfo() {
  const theme = useTheme();

  return (
    <div className="space-y-8">
      <div className={`border rounded-xl p-6 transition-all duration-300 ${theme.isDark ? 'bg-gray-800/50 border-white/10' : 'bg-white border-gray-200/50'}`} style={{ transition: `all ${theme.transitions.duration.normal} ${theme.transitions.ease}` }}>
        <h3 className="text-xl font-semibold mb-4" style={{ color: theme.colors.text }}>Contact Information</h3>
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <Mail className="w-5 h-5" style={{ color: theme.colors.primary }} />
            <div>
              <p className="font-medium" style={{ color: theme.colors.text }}>Email</p>
              <a
                href={`mailto:${profileData[0].email}`}
                className="transition-all duration-200" style={{ 
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
                {profileData[0].email}
              </a>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <MapPin className="w-5 h-5" style={{ color: theme.colors.primary }} />
            <div>
              <p className="font-medium" style={{ color: theme.colors.text }}>Location</p>
              <p className="" style={{ color: theme.colors.textSecondary }}>{profileData[0].location}</p>
            </div>
          </div>
        </div>
      </div>

      <div className={`border rounded-xl p-6 transition-all duration-300 ${theme.isDark ? 'bg-gray-800/50 border-white/10' : 'bg-white border-gray-200/50'}`} style={{ transition: `all ${theme.transitions.duration.normal} ${theme.transitions.ease}` }}>
        <h3 className="text-xl font-semibold mb-4">Follow Me</h3>
        <div className="flex gap-4">
          <a
            href={profileData[0].github}
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 bg-gray-700/50 rounded-lg flex items-center justify-center hover:bg-cyan-500/20 hover:border-cyan-500/50 border border-white/10 transition-all duration-200 group"
          >
            <Github className="w-5 h-4" style={{ color: theme.colors.textSecondary }} />
          </a>
          <a
            href={profileData[0].linkedIn}
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 bg-gray-700/50 rounded-lg flex items-center justify-center hover:bg-cyan-500/20 hover:border-cyan-500/50 border border-white/10 transition-all duration-200 group"
          >
            <Linkedin className="w-5 h-4" style={{ color: theme.colors.textSecondary }} />
          </a>
          <a
            href={`mailto:${profileData[0].email}`}
            className="w-12 h-12 bg-gray-700/50 rounded-lg flex items-center justify-center hover:bg-cyan-500/20 hover:border-cyan-500/50 border border-white/10 transition-all duration-200 group"
          >
            <Mail className="w-5 h-4" style={{ color: theme.colors.textSecondary }} />
          </a>
        </div>
      </div>

      <div className={`bg-gradient-to-r border rounded-xl p-6 transition-all duration-300`} style={{ 
        background: `linear-gradient(to right, ${theme.colors.primary}20, ${theme.colors.secondary}20)`, 
        borderColor: `${theme.colors.primary}30`,
        transition: `all ${theme.transitions.duration.normal} ${theme.transitions.ease}`
      }}>
        <h3 className="text-xl font-semibold mb-2" style={{ color: theme.colors.text }}>Let's Collaborate!</h3>
        <p className="text-sm" style={{ color: theme.colors.textSecondary }}>
          I'm currently available for freelance projects and always open to
          discussing new opportunities.
        </p>
      </div>
    </div>
  );
}
