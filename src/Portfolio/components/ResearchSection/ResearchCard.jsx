import { ExternalLink, FileText } from "lucide-react";

export function ResearchCard({ paper, onDetailsClick }) {
  return (
    <div className="group bg-gray-800/50 border border-white/10 rounded-xl overflow-hidden hover:border-cyan-500/50 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/10">
      <div className="aspect-video bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center text-6xl">
        <FileText className="w-12 h-12 text-cyan-400" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-3 group-hover:text-cyan-400 transition-colors duration-200">
          {paper.title}
        </h3>
        <p className="text-white/70 mb-4 text-sm leading-relaxed">
          {paper.abstract.slice(0, 150)}...
        </p>
        <div className="flex gap-2 flex-wrap">
          <button
            onClick={() => onDetailsClick(paper)}
            className="flex items-center gap-2 px-3 py-2 bg-purple-500 hover:bg-purple-400 text-white text-sm font-medium rounded-lg transition-colors duration-200"
          >
            <FileText className="w-4 h-4" />
            Details
          </button>
          {paper.link && (
            <a
              href={paper.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 py-2 bg-cyan-500 hover:bg-cyan-400 text-black text-sm font-medium rounded-lg transition-colors duration-200"
            >
              <ExternalLink className="w-4 h-4" />
              View Paper
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
