export function ToolCard({ tool }) {
  return (
    <div className="bg-gray-800/50 border border-white/10 rounded-lg p-3 text-center hover:border-cyan-500/50 hover:bg-cyan-500/10 transition-all duration-200 cursor-default">
      <span className="text-white/80 text-sm font-medium">{tool}</span>
    </div>
  );
}
