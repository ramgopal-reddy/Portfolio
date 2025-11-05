import { X, Calendar, User, CheckCircle } from "lucide-react";

export function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative bg-gray-800 border border-white/10 rounded-2xl p-8 max-w-4xl max-h-[90vh] overflow-y-auto mx-4 w-full">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 hover:bg-white/10 rounded-lg transition-colors duration-200"
        >
          <X className="w-6 h-6 text-white/70 hover:text-white" />
        </button>

        {/* Project Header */}
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-4">
            <div className="text-4xl">{project.image}</div>
            <div>
              <h2 className="text-3xl font-bold text-white mb-2">
                {project.title}
              </h2>
              <div className="flex items-center gap-4 text-white/60 text-sm">
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
                className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-sm rounded-full border border-cyan-500/30"
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
                <span className="text-white/80 text-sm">{feature}</span>
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
            className="flex items-center gap-2 px-6 py-3 bg-cyan-500 hover:bg-cyan-400 text-black font-semibold rounded-lg transition-colors duration-200"
          >
            <span>View Live Demo</span>
          </a>
          <a
            href={project.github}
            className="flex items-center gap-2 px-6 py-3 border border-white/20 hover:border-white/40 text-white/70 hover:text-white font-semibold rounded-lg transition-colors duration-200"
          >
            <span>View Source Code</span>
          </a>
        </div>
      </div>
    </div>
  );
}
