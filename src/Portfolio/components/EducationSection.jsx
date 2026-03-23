// src/components/sections/EducationSection.jsx

import { GraduationCap, Calendar, Star } from "lucide-react";
import { educationData } from "../data/educationData";
import { useTheme } from "../hooks/useTheme";
import { DualHighlight } from "@/components/DualHighlight";

export function EducationSection() {
  const theme = useTheme();

  return (
    <section
      id="education"
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
        {/* Header */}
        <div className="text-center mb-16">
          <h2
            className={`text-3xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r ${theme.colors.gradient}`}
          >
            <DualHighlight first="Education" second="Pretraining" />
          </h2>
          <div
            className="w-24 h-1 mx-auto rounded-full bg-gradient-to-r"
            style={{
              background: `linear-gradient(to right, ${theme.colors.primary}, ${theme.colors.secondary})`,
            }}
          ></div>
        </div>

        {/* Education Cards */}
        <div className="space-y-8">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className={`border rounded-2xl p-6 transition-all duration-300 hover:shadow-lg ${theme.isDark ? "border-white/10 hover:border-cyan-500/40 hover:shadow-cyan-500/10" : "border-gray-200/50 hover:border-purple-500/40 hover:shadow-purple-500/10"}`}
            >
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                <div className="flex items-center gap-3">
                  <GraduationCap
                    className="w-6 h-6"
                    style={{ color: theme.colors.primary }}
                  />
                  <div>
                    <h3
                      className="text-2xl font-semibold"
                      style={{ color: theme.colors.text }}
                    >
                      {edu.degree}
                    </h3>
                    <p
                      className="text-sm"
                      style={{ color: theme.colors.textSecondary }}
                    >
                      {edu.institution}
                    </p>
                  </div>
                </div>

                <div
                  className="flex items-center gap-2 text-sm mt-2 sm:mt-0"
                  style={{ color: theme.colors.textSecondary }}
                >
                  <Calendar className="w-4 h-4" />
                  <span>{edu.duration}</span>
                </div>
              </div>

              {/* Grade */}
              {edu.grade && (
                <p
                  className="font-medium mb-3"
                  style={{ color: theme.colors.primary }}
                >
                  {edu.grade}
                </p>
              )}

              {/* Highlights */}
              <ul className="space-y-2">
                {edu.highlights.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Star
                      className="w-4 h-4 mt-1 flex-shrink-0"
                      style={{ color: theme.colors.secondary }}
                    />
                    <span
                      className="text-sm leading-relaxed"
                      style={{ color: theme.colors.text }}
                    >
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
