import { Code, Palette } from "lucide-react";
import { SkillBar } from "./SkillBar";
import { ToolCard } from "./ToolCard";
import { technicalSkills, designTools } from "../../data/skillsData";

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 bg-gray-800/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-cyan-400 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Technical Skills */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 flex items-center gap-3">
              <Code className="w-6 h-6 text-cyan-400" />
              Technical Skills
            </h3>
            <div className="space-y-6">
              {technicalSkills.map((item, index) => (
                <SkillBar key={index} skill={item.skill} level={item.level} />
              ))}
            </div>
          </div>

          {/* Design & Tools */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 flex items-center gap-3">
              <Palette className="w-6 h-6 text-cyan-400" />
              Tools
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {designTools.map((tool, index) => (
                <ToolCard key={index} tool={tool} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
