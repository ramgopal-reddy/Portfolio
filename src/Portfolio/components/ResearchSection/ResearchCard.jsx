import { ExternalLink, FileText } from "lucide-react";
import { useTheme } from "../../hooks/useTheme";

export function ResearchCard({ paper, onDetailsClick }) {
  const theme = useTheme();

  return (
    <div className={`group border rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl ${
      theme.isDark 
        ? 'bg-gray-800/50 border-white/10 hover:border-cyan-500/50 hover:shadow-cyan-500/10' 
        : 'bg-white/50 border-gray-200/50 hover:border-purple-500/50 hover:shadow-purple-500/10'
    }`} style={{ transition: `all ${theme.transitions.duration.normal} ${theme.transitions.ease}` }}>
      <div className={`aspect-video flex items-center justify-center text-6xl ${
        theme.isDark ? 'bg-gradient-to-br from-gray-700 to-gray-800' : 'bg-gradient-to-br from-gray-100 to-gray-200'
      }`} style={{ transition: `all ${theme.transitions.duration.normal} ${theme.transitions.ease}` }}>
        <FileText className="w-12 h-12" style={{ color: theme.colors.primary }} />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-3 transition-colors duration-200" style={{ color: theme.colors.text }}>
          {paper.title}
        </h3>
        <p className="mb-4 text-sm leading-relaxed" style={{ color: theme.colors.text }}>
          {paper.abstract.slice(0, 150)}...
        </p>
        <div className="flex gap-2 flex-wrap">
          <button
            onClick={() => onDetailsClick(paper)}
            className="flex items-center gap-2 px-3 py-2 text-sm font-medium rounded-lg transition-colors duration-200" style={{ 
              backgroundColor: theme.colors.secondary, 
              color: '#000',
              transition: `all ${theme.transitions.duration.normal} ${theme.transitions.ease}`
            }}
          >
            <FileText className="w-4 h-4" />
            Details
          </button>
          {paper.link && (
            <a
              href={paper.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 py-2 text-sm font-medium rounded-lg transition-colors duration-200" style={{ 
              backgroundColor: theme.colors.primary, 
              color: '#000',
              transition: `all ${theme.transitions.duration.normal} ${theme.transitions.ease}`
            }}
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
