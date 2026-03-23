import { Home, User, Image, GraduationCap, Wrench, Code, BookOpen, Award, Briefcase, Mail } from "lucide-react";

const iconMap = {
  hero: Home,
  about: User,
  gallery: Image,
  education: GraduationCap,
  skills: Wrench,
  projects: Code,
  research: BookOpen,
  certifications: Award,
  experience: Briefcase,
  contact: Mail,
};

export function TimelineSidebar({ navItems, activeSection, scrollProgress, onNavigate }) {
  return (
    <div className="fixed left-0 top-0 h-screen z-50 flex items-center pl-4 md:pl-6">
      <div className="relative flex flex-col items-center gap-0">
        {/* Background line */}
        <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-0.5 bg-gray-300/20 dark:bg-gray-700/30" />
        
        {/* Progress line */}
        <div
          className="absolute left-1/2 -translate-x-1/2 top-0 w-0.5 bg-gradient-to-b from-primary to-primary/60 transition-all duration-300 ease-out"
          style={{ height: `${scrollProgress * 100}%` }}
        />

        {navItems.map((item, index) => {
          const Icon = iconMap[item.id] || Home;
          const isActive = activeSection === item.id;

          return (
            <div key={item.id} className="relative flex items-center group" style={{ marginTop: index === 0 ? 0 : 24 }}>
              {/* Dot */}
              <button
                onClick={() => onNavigate(item.id)}
                className={`relative z-10 flex items-center justify-center w-8 h-8 rounded-full border-2 transition-all duration-300 hover:scale-110 ${
                  isActive
                    ? "bg-primary border-primary shadow-lg shadow-primary/50 animate-pulse"
                    : "bg-background border-gray-300 dark:border-gray-600 hover:border-primary/50"
                }`}
                aria-label={`Navigate to ${item.label}`}
              >
                <Icon 
                  className={`w-3.5 h-3.5 transition-colors duration-300 ${
                    isActive ? "text-primary-foreground" : "text-muted-foreground"
                  }`} 
                />
              </button>

              {/* Label tooltip */}
              <span
                className={`absolute left-12 whitespace-nowrap text-xs font-mono tracking-wider uppercase transition-all duration-300 pointer-events-none ${
                  isActive
                    ? "opacity-100 translate-x-0 text-primary font-semibold"
                    : "opacity-0 -translate-x-2 text-muted-foreground group-hover:opacity-80 group-hover:translate-x-0"
                }`}
              >
                {item.label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
