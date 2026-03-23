import { Code, Palette } from "lucide-react";
import { SkillBar } from "./SkillBar";
import { ToolCard } from "./ToolCard";
import { technicalSkills, designTools } from "../../data/skillsData";
import { useTheme } from "../../hooks/useTheme";
import { DualHighlight } from "@/components/DualHighlight";

export function SkillsSection() {
  const theme = useTheme();

  return (
    <section
      id="skills"
      className={`py-20 px-4 sm:px-6 transition-all duration-300 ${theme.isDark ? "bg-gray-800/50" : "bg-gray-100/50"}`}
    >
      {" "}
      {/* bg-gray-800/50 - dark background with transparency */}
      <div
        className="max-w-6xl mx-auto"
        style={{
          transition: `all ${theme.transitions.duration.normal} ${theme.transitions.ease}`,
        }}
      >
        <div className="text-center mb-16">
          <h2
            className={`text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r ${theme.colors.gradient}`}
          >
            <DualHighlight first="Skills" second="Model Capabilities" />
          </h2>
          <div
            className="w-24 h-1 mx-auto rounded-full bg-gradient-to-r"
            style={{
              background: `linear-gradient(to right, ${theme.colors.primary}, ${theme.colors.secondary})`,
            }}
          ></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Technical Skills */}
          <div>
            <h3
              className="text-2xl font-semibold mb-8 flex items-center gap-3"
              style={{ color: theme.colors.text }}
            >
              <Code
                className="w-6 h-6"
                style={{ color: theme.colors.primary }}
              />
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
            <h3
              className="text-2xl font-semibold mb-8 flex items-center gap-3"
              style={{ color: theme.colors.text }}
            >
              <Palette
                className="w-6 h-6"
                style={{ color: theme.colors.primary }}
              />
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
