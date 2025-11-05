// src/components/sections/EducationSection.jsx

import { GraduationCap, Calendar, Star } from "lucide-react";
import { educationData } from "../data/educationData";

export function EducationSection() {
  return (
    <section id="education" className="py-20 px-4 sm:px-6 bg-gray-800/50">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-cyan-400 bg-clip-text text-transparent">
            Education
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto rounded-full"></div>
        </div>

        {/* Education Cards */}
        <div className="space-y-8">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className="bg-gray-800/50 border border-white/10 rounded-2xl p-6 hover:border-cyan-500/40 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10"
            >
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                <div className="flex items-center gap-3">
                  <GraduationCap className="w-6 h-6 text-cyan-400" />
                  <div>
                    <h3 className="text-2xl font-semibold text-white">
                      {edu.degree}
                    </h3>
                    <p className="text-white/70 text-sm">{edu.institution}</p>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-white/60 text-sm mt-2 sm:mt-0">
                  <Calendar className="w-4 h-4" />
                  <span>{edu.duration}</span>
                </div>
              </div>

              {/* Grade */}
              {edu.grade && (
                <p className="text-cyan-400 font-medium mb-3">{edu.grade}</p>
              )}

              {/* Highlights */}
              <ul className="space-y-2">
                {edu.highlights.map((point, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 text-white/80"
                  >
                    <Star className="w-4 h-4 text-purple-400 mt-1 flex-shrink-0" />
                    <span className="text-sm leading-relaxed">{point}</span>
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
