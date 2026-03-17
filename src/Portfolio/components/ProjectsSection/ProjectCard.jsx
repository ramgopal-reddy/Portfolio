import { ExternalLink, Github, Globe } from "lucide-react";
import { useTheme } from "../../hooks/useTheme";

export function ProjectCard({ project, onDetailsClick }) {
  const theme = useTheme();

  return (
    <div
      className={`group border rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl ${
        theme.isDark
          ? "bg-gray-800/50 border-white/10 hover:border-cyan-500/50 hover:shadow-cyan-500/10"
          : "bg-white/50 border-gray-200/50 hover:border-purple-500/50 hover:shadow-purple-500/10"
      }`}
      style={{
        transition: `all ${theme.transitions.duration.normal} ${theme.transitions.ease}`,
      }}
    >
      {/* <div
        className={`hidden md:flex aspect-video w-full items-center justify-center text-6xl ${
          theme.isDark
            ? "bg-gradient-to-br from-gray-700 to-gray-800"
            : "bg-gradient-to-br from-gray-100 to-gray-200"
        }`}
        style={{
          transition: `all ${theme.transitions.duration.normal} ${theme.transitions.ease}`,
        }}
      >
        {project.image}
      </div> */}
      {/* Project Image */}
      <div
        className={`mb-4 h-50 rounded-lg overflow-hidden ${theme.isDark ? "bg-white" : "bg-gray-50"}`}
      >
        <img
          src={project.projectImg}
          alt={`${project.title} Certificate`}
          className="object-cover"
        />
      </div>

      <div className="p-6">
        <h3
          className="text-xl font-semibold mb-3 transition-colors duration-200"
          style={{ color: theme.colors.text }}
        >
          {project.title}
        </h3>
        <p
          className="mb-4 text-sm leading-relaxed"
          style={{ color: theme.colors.text }}
        >
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((tech, techIndex) => (
            <span
              key={techIndex}
              className="px-3 py-1 text-xs rounded-full border transition-all duration-200"
              style={{
                backgroundColor: `${theme.colors.primary}20`,
                color: theme.colors.primary,
                borderColor: `${theme.colors.primary}30`,
              }}
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex gap-2 flex-wrap">
          <button
            onClick={() => onDetailsClick(project)}
            className="flex items-center gap-2 px-3 py-2 text-sm font-medium rounded-lg transition-colors duration-200"
            style={{
              backgroundColor: theme.colors.secondary,
              color: "#000",
              transition: `all ${theme.transitions.duration.normal} ${theme.transitions.ease}`,
            }}
          >
            <Globe className="w-4 h-4" />
            Details
          </button>
          <a
            href={project.demo}
            className="flex items-center gap-2 px-3 py-2 text-sm font-medium rounded-lg transition-colors duration-200"
            style={{
              backgroundColor: theme.colors.primary,
              color: "#000",
              transition: `all ${theme.transitions.duration.normal} ${theme.transitions.ease}`,
            }}
          >
            <ExternalLink className="w-4 h-4" />
            Demo
          </a>
          <a
            href={project.github}
            className="flex items-center gap-2 px-3 py-2 text-sm font-medium rounded-lg transition-colors duration-200"
            style={{
              backgroundColor: theme.isDark
                ? "rgba(31, 41, 55, 0.5)"
                : "rgba(243, 244, 246, 0.8)",
              border: theme.colors.border,
              color: theme.colors.text,
              transition: `all ${theme.transitions.duration.normal} ${theme.transitions.ease}`,
            }}
          >
            <Github className="w-4 h-4" />
            Code
          </a>
        </div>
      </div>
    </div>
  );
}
