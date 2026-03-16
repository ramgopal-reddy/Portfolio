import { X, Calendar, User, CheckCircle } from "lucide-react";
import { useTheme } from "../../hooks/useTheme";

export function ProjectModal({ project, onClose }) {
  const theme = useTheme();
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center" style={{ transition: `all ${theme.transitions.duration.normal} ${theme.transitions.ease}` }}>
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-all duration-300"
        onClick={onClose}
        style={{ transition: `all ${theme.transitions.duration.normal} ${theme.transitions.ease}` }}
      />

      {/* Modal */}
      <div className={`relative border rounded-2xl p-8 max-w-4xl max-h-[90vh] overflow-y-auto mx-4 w-full transition-all duration-300 ${
        theme.isDark 
          ? 'bg-gray-800 border-white/10' 
          : 'bg-white border-gray-200/50'
      }`}
        style={{ transition: `all ${theme.transitions.duration.normal} ${theme.transitions.ease}` }}
      >

        {/* Project Header */}
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-4">
            <div className="text-4xl">{project.image}</div>
            <div>
              <h2 className="text-3xl font-bold mb-2" style={{ color: theme.colors.text }}>
                {project.title}
              </h2>
              <div className="flex items-center gap-4 text-sm" style={{ color: theme.colors.textSecondary }}>
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  <span>{project.role}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>{project.timeline}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech, index) => (
              <span
                key={index}
                className="px-3 py-1 text-sm rounded-full border" style={{ 
                  backgroundColor: `${theme.colors.primary}20`, 
                  color: theme.colors.primary, 
                  borderColor: `${theme.colors.primary}30` 
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Project Description */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-cyan-400 mb-4">
            Project Overview
          </h3>
          <p className="text-white/80 leading-relaxed">
            {project.detailedDescription}
          </p>
        </div>

        {/* Key Features */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-cyan-400 mb-4">
            Key Features
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {project.features.map((feature, index) => (
              <div key={index} className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                <span className="text-sm" style={{ color: theme.colors.textSecondary }}>{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Challenges & Solutions */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-cyan-400 mb-4">
            Challenges & Solutions
          </h3>
          <p className="text-white/80 leading-relaxed">{project.challenges}</p>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4 pt-6 border-t border-white/10">
          <a
            href={project.demo}
            className="flex items-center gap-2 px-6 py-3 font-semibold rounded-lg transition-colors duration-200" style={{ 
              backgroundColor: theme.colors.primary, 
              color: '#000',
              transition: `all ${theme.transitions.duration.normal} ${theme.transitions.ease}`
            }}
          >
            <span>View Live Demo</span>
          </a>
          <a
            href={project.github}
            className="flex items-center gap-2 px-6 py-3 font-semibold rounded-lg transition-colors duration-200" style={{ 
              backgroundColor: theme.isDark ? 'rgba(31, 41, 55, 0.5)' : 'rgba(243, 244, 246, 0.8)', 
              border: theme.colors.border,
              color: theme.colors.text,
              transition: `all ${theme.transitions.duration.normal} ${theme.transitions.ease}`
            }}
          >
            <span>View Source Code</span>
          </a>
        </div>
      </div>
    </div>
  );
}
