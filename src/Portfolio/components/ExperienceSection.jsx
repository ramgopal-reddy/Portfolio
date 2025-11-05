import { Briefcase, Calendar, Award } from "lucide-react";
import { experienceData } from "../data/experienceData";

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 bg-gray-800/50">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-cyan-400 bg-clip-text text-transparent">
            Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto rounded-full"></div>
        </div>

        <div className="space-y-8">
          {experienceData.map((exp, index) => (
            <div
              key={index}
              className="bg-gray-800/50 border border-white/10 rounded-2xl p-6 hover:border-cyan-500/40 transition-all duration-300"
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                <h3 className="text-2xl font-semibold text-white flex items-center gap-2">
                  <Briefcase className="w-5 h-5 text-cyan-400" />
                  {exp.title}
                </h3>
                <div className="flex items-center gap-2 text-white/60 text-sm">
                  <Calendar className="w-4 h-4" />
                  <span>{exp.duration}</span>
                </div>
              </div>

              <p className="text-white/80 leading-relaxed mb-4">
                {exp.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {exp.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-xs rounded-full border border-cyan-500/30"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {exp.outcome && (
                <div className="flex items-start gap-2 text-white/70 text-sm">
                  <Award className="w-4 h-4 text-green-400 mt-[2px]" />
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
