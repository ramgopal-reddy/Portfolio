import { useState } from "react";
import { CertificationCard } from "./CertificationCard";
import { CertificateModal } from "./CertificateModal";
import { certificationsData } from "../../data/certificationsData";
import { useTheme } from "../../hooks/useTheme";
import { DualHighlight } from "@/components/DualHighlight";

// import Image from "../../../assets/1.png";

// import Image from "../../../../public/Ram.jpg";

export function CertificationsSection() {
  const [selectedCertificate, setSelectedCertificate] = useState(null);
  const theme = useTheme();

  return (
    <>
      <section
        id="certifications"
        className={`py-20 px-4 sm:px-6 transition-all duration-300 ${theme.isDark ? "bg-gray-800/50" : "bg-gray-100/50"}`} /* bg-gray-800/50 - dark background with transparency */
      >
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
              <DualHighlight first="Certifications" second="Evaluation" />
            </h2>
            <div
              className="w-24 h-1 mx-auto rounded-full bg-gradient-to-r"
              style={{
                background: `linear-gradient(to right, ${theme.colors.primary}, ${theme.colors.secondary})`,
              }}
            ></div>
          </div>
          {/* <img
            src={Image}
            alt="Decorative"
            className="mx-auto mb-10 w-32 h-32"
          /> */}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certificationsData.map((cert, index) => (
              <CertificationCard
                key={index}
                cert={cert}
                onClick={setSelectedCertificate}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Certificate Modal */}
      <CertificateModal
        certificate={selectedCertificate}
        onClose={() => setSelectedCertificate(null)}
      />
    </>
  );
}
