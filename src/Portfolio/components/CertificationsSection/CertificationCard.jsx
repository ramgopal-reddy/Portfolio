import { Calendar } from "lucide-react";
import { useTheme } from "../../hooks/useTheme";

export function CertificationCard({ cert, onClick }) {
  const theme = useTheme();

  return (
    <div
      onClick={() => onClick(cert)}
      className={`group border rounded-xl p-6 transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer ${
        theme.isDark 
          ? 'bg-gray-800/50 border-white/10 hover:border-cyan-500/50 hover:shadow-cyan-500/10' 
          : 'bg-white/50 border-gray-200/50 hover:border-purple-500/50 hover:shadow-purple-500/10'
      }`}
    >
      <div className="text-center">
        {/* Certificate Image */}
        <div className={`mb-4 rounded-lg overflow-hidden ${theme.isDark ? 'bg-white' : 'bg-gray-50'}`}>
          <img
            src={cert.certificateImage}
            alt={`${cert.name} Certificate`}
            className="object-cover"
          />
        </div>
        
        {/* <div className="hidden md:block text-4xl mb-4">{cert.icon}</div> */}
        <h3 className={`text-lg font-semibold mb-2 transition-colors duration-200`} style={{ color: theme.colors.text }}>
          {cert.name}
        </h3>
        <p className="text-sm mb-2" style={{ color: theme.colors.textSecondary }}>{cert.organization}</p>
        <div className="flex items-center justify-center gap-2 text-sm mb-3" style={{ color: theme.colors.textSecondary }}>
          <Calendar className="w-4 h-4" />
          <span>{cert.date}</span>
        </div>
        <div className={`text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-200`} style={{ color: theme.colors.primary }}>
          Click to view certificate
        </div>
      </div>
    </div>
  );
}
