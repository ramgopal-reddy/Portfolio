import { Calendar } from "lucide-react";

export function CertificationCard({ cert, onClick }) {
  return (
    <div
      onClick={() => onClick(cert)}
      className="group bg-gray-800/50 border border-white/10 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/10 cursor-pointer"
    >
      <div className="text-center">
        <div className="hidden md:block text-4xl mb-4">{cert.icon}</div>
        <h3 className="text-lg font-semibold mb-2 group-hover:text-cyan-400 transition-colors duration-200">
          {cert.name}
        </h3>
        <p className="text-white/70 text-sm mb-2">{cert.organization}</p>
        <div className="flex items-center justify-center gap-2 text-white/50 text-sm mb-3">
          <Calendar className="w-4 h-4" />
          <span>{cert.date}</span>
        </div>
        <div className="text-cyan-400 text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          Click to view certificate
        </div>
      </div>
    </div>
  );
}
