import { ExternalLink, Github, Globe } from "lucide-react";

export function ProjectCard({ project, onDetailsClick }) {
  return (
    <div className="group bg-gray-800/50 border border-white/10 rounded-xl overflow-hidden hover:border-cyan-500/50 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/10">
      <div className="hidden md:flex aspect-video w-full bg-gradient-to-br from-gray-700 to-gray-800 items-center justify-center text-6xl">
        {project.image}
      </div>

      <div className="p-6">
        <h3 className="text-xl font-semibold mb-3 group-hover:text-cyan-400 transition-colors duration-200">
          {project.title}
        </h3>
        <p className="text-white/70 mb-4 text-sm leading-relaxed">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((tech, techIndex) => (
            <span
              key={techIndex}
              className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-xs rounded-full border border-cyan-500/30"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex gap-2 flex-wrap">
          <button
            onClick={() => onDetailsClick(project)}
            className="flex items-center gap-2 px-3 py-2 bg-purple-500 hover:bg-purple-400 text-white text-sm font-medium rounded-lg transition-colors duration-200"
          >
            <Globe className="w-4 h-4" />
            Details
          </button>
          <a
            href={project.demo}
            className="flex items-center gap-2 px-3 py-2 bg-cyan-500 hover:bg-cyan-400 text-black text-sm font-medium rounded-lg transition-colors duration-200"
          >
            <ExternalLink className="w-4 h-4" />
            Demo
          </a>
          <a
            href={project.github}
            className="flex items-center gap-2 px-3 py-2 border border-white/20 hover:border-white/40 text-white/70 hover:text-white text-sm font-medium rounded-lg transition-colors duration-200"
          >
            <Github className="w-4 h-4" />
            Code
          </a>
        </div>
      </div>
    </div>
  );
}
