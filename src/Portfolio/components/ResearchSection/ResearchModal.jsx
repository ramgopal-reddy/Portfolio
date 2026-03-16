import { X, Calendar, User, CheckCircle, ExternalLink } from "lucide-react";
import { useTheme } from "../../hooks/useTheme";

export function ResearchModal({ paper, onClose }) {
  const theme = useTheme();
  if (!paper) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      style={{
        transition: `all ${theme.transitions.duration.normal} ${theme.transitions.ease}`,
      }}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-all duration-300"
        onClick={onClose}
        style={{
          transition: `all ${theme.transitions.duration.normal} ${theme.transitions.ease}`,
        }}
      />

      {/* Modal */}
      <div
        className={`relative border rounded-2xl p-8 max-w-4xl max-h-[90vh] overflow-y-auto mx-4 w-full transition-all duration-300 ${
          theme.isDark
            ? "bg-gray-800 border-white/10"
            : "bg-white border-gray-200/50"
        }`}
        style={{
          transition: `all ${theme.transitions.duration.normal} ${theme.transitions.ease}`,
        }}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-lg transition-colors duration-200"
          style={{
            backgroundColor: theme.isDark
              ? "rgba(255, 255, 255, 0.1)"
              : "rgba(0, 0, 0, 0.1)",
            color: theme.colors.text,
            transition: `all ${theme.transitions.duration.normal} ${theme.transitions.ease}`,
          }}
        >
          <X className="w-6 h-6" style={{ color: theme.colors.text }} />
        </button>

        <div className="mb-6">
          <h2
            className="text-3xl font-bold mb-2"
            style={{ color: theme.colors.text }}
          >
            {paper.title}
          </h2>
          <div
            className="flex flex-wrap gap-4 text-sm"
            style={{ color: theme.colors.textSecondary }}
          >
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

        <p
          className="leading-relaxed mb-6"
          style={{ color: theme.colors.text }}
        >
          {paper.abstract}
        </p>

        <h3
          className="text-xl font-semibold mb-4"
          style={{ color: theme.colors.primary }}
        >
          Key Highlights
        </h3>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
          {paper.highlights.map((point, index) => (
            <li key={index} className="flex items-center gap-3">
              <CheckCircle className="w-5 h-5 text-green-400" />
              <span
                className="text-sm"
                style={{ color: theme.colors.textSecondary }}
              >
                {point}
              </span>
            </li>
          ))}
        </ul>

        {paper.link && (
          <a
            href={paper.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 font-semibold rounded-lg transition-colors duration-200"
            style={{
              backgroundColor: theme.colors.primary,
              color: "#000",
              transition: `all ${theme.transitions.duration.normal} ${theme.transitions.ease}`,
            }}
          >
            <ExternalLink className="w-5 h-5" />
            View Paper
          </a>
        )}
      </div>
    </div>
  );
}
