import { useState } from "react";
import { ResearchCard } from "./ResearchCard";
import { ResearchModal } from "./ResearchModal";
import { researchData } from "../../data/researchData";
import { useTheme } from "../../hooks/useTheme";
import { DualHighlight } from "@/components/DualHighlight";

export function ResearchSection() {
  const [selectedPaper, setSelectedPaper] = useState(null);
  const theme = useTheme();

  return (
    <>
      <section
        id="research"
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
              <DualHighlight
                first="Research & Publications"
                second="Optimization"
              />
            </h2>
            <div
              className="w-24 h-1 mx-auto rounded-full bg-gradient-to-r"
              style={{
                background: `linear-gradient(to right, ${theme.colors.primary}, ${theme.colors.secondary})`,
              }}
            ></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {researchData.map((paper, index) => (
              <ResearchCard
                key={index}
                paper={paper}
                onDetailsClick={setSelectedPaper}
              />
            ))}
          </div>
        </div>
      </section>

      <ResearchModal
        paper={selectedPaper}
        onClose={() => setSelectedPaper(null)}
      />
    </>
  );
}
