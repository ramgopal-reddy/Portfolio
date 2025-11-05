export function SkillBar({ skill, level }) {
  return (
    <div className="group">
      <div className="flex justify-between mb-2">
        <span className="text-white/80 font-medium">{skill}</span>
        <span className="text-cyan-400 text-sm">{level}%</span>
      </div>
      <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full transition-all duration-1000 ease-out group-hover:from-cyan-400 group-hover:to-purple-400"
          style={{ width: `${level}%` }}
        />
      </div>
    </div>
  );
}
