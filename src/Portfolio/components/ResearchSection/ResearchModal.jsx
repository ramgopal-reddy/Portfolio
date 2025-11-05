import { X, Calendar, User, CheckCircle, ExternalLink } from "lucide-react";

export function ResearchModal({ paper, onClose }) {
  if (!paper) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative bg-gray-800 border border-white/10 rounded-2xl p-8 max-w-4xl max-h-[90vh] overflow-y-auto mx-4 w-full">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 hover:bg-white/10 rounded-lg transition-colors duration-200"
        >
          <X className="w-6 h-6 text-white/70 hover:text-white" />
        </button>

        <div className="mb-6">
          <h2 className="text-3xl font-bold text-white mb-2">{paper.title}</h2>
          <div className="flex flex-wrap gap-4 text-white/60 text-sm">
            {paper.authors && (
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>{paper.authors.join(", ")}</span>
              </div>
            )}
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>{paper.year}</span>
            </div>
          </div>
        </div>

        <p className="text-white/80 leading-relaxed mb-6">{paper.abstract}</p>

        <h3 className="text-xl font-semibold text-cyan-400 mb-4">
          Key Highlights
        </h3>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
          {paper.highlights.map((point, index) => (
            <li key={index} className="flex items-center gap-3">
              <CheckCircle className="w-5 h-5 text-green-400" />
              <span className="text-white/80 text-sm">{point}</span>
            </li>
          ))}
        </ul>

        {paper.link && (
          <a
            href={paper.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-cyan-500 hover:bg-cyan-400 text-black font-semibold rounded-lg transition-colors duration-200"
          >
            <ExternalLink className="w-5 h-5" />
            View Paper
          </a>
        )}
      </div>
    </div>
  );
}
