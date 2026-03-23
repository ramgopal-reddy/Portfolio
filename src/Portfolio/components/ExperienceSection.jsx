import { Briefcase, Calendar, Award } from "lucide-react";
import { experienceData } from "../data/experienceData";
import { useTheme } from "../hooks/useTheme";
import { DualHighlight } from "@/components/DualHighlight";

export function ExperienceSection() {
  const theme = useTheme();

  return (
    <section
      id="experience"
      className={`py-20 px-4 sm:px-6 transition-all duration-300 ${theme.isDark ? "bg-gray-800/50" : "bg-gray-100/50"}`}
    >
      {" "}
      {/* bg-gray-800/50 - dark background with transparency */}
      <div
        className="max-w-5xl mx-auto"
        style={{
          transition: `all ${theme.transitions.duration.normal} ${theme.transitions.ease}`,
        }}
      >
        <div className="text-center mb-16">
          <h2
            className={`text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r ${theme.colors.gradient}`}
          >
            <DualHighlight first="Experience" second="Deployment" />
          </h2>
          <div
            className="w-24 h-1 mx-auto rounded-full bg-gradient-to-r"
            style={{
              background: `linear-gradient(to right, ${theme.colors.primary}, ${theme.colors.secondary})`,
            }}
          ></div>
        </div>

        <div className="space-y-8">
          {experienceData.map((exp, index) => (
            <div
              key={index}
              className={`${theme.isDark ? "bg-gray-800/50 border-white/10 hover:border-cyan-500/40" : "bg-white/50 border-gray-200/50 hover:border-purple-500/40"} border rounded-2xl p-6 transition-all duration-300`} /* bg-gray-800/50 - dark background with transparency */
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                <h3
                  className="text-2xl font-semibold flex items-center gap-2"
                  style={{ color: theme.colors.text }}
                >
                  <Briefcase
                    className="w-5 h-5"
                    style={{ color: theme.colors.primary }}
                  />
                  {exp.title}
                </h3>
                <div
                  className="flex items-center gap-2 text-sm"
                  style={{ color: theme.colors.textSecondary }}
                >
                  <Calendar className="w-4 h-4" />
                  <span>{exp.duration}</span>
                </div>
              </div>

              <p
                className="leading-relaxed mb-4"
                style={{ color: theme.colors.text }}
              >
                {exp.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {exp.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 text-xs rounded-full border"
                    style={{
                      backgroundColor: `${theme.colors.primary}20`,
                      color: theme.colors.primary,
                      borderColor: `${theme.colors.primary}30`,
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {exp.outcome && (
                <div
                  className="flex items-start gap-2 text-sm"
                  style={{ color: theme.colors.textSecondary }}
                >
                  <Award
                    className="w-4 h-4 mt-[2px]"
                    style={{ color: theme.isDark ? "#10b981" : "#059669" }}
                  />
                  <span>{exp.outcome}</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      {/* <MusicPlayer /> */}
    </section>
  );
}
