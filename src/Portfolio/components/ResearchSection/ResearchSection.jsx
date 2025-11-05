import { useState } from "react";
import { ResearchCard } from "./ResearchCard";
import { ResearchModal } from "./ResearchModal";
import { researchData } from "../../data/researchData";

export function ResearchSection() {
  const [selectedPaper, setSelectedPaper] = useState(null);

  return (
    <>
      <section id="research" className="py-20 px-4 sm:px-6 bg-gray-800/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-cyan-400 bg-clip-text text-transparent">
              Research & Publications
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto rounded-full"></div>
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
