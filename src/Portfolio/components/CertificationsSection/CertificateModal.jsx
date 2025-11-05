import { X, Calendar, Building, Award, Download } from "lucide-react";

export function CertificateModal({ certificate, onClose }) {
  if (!certificate) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative bg-gray-800 border border-white/10 rounded-2xl p-8 max-w-5xl max-h-[90vh] overflow-y-auto mx-4 w-full">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 hover:bg-white/10 rounded-lg transition-colors duration-200 z-10"
        >
          <X className="w-6 h-6 text-white/70 hover:text-white" />
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Certificate Image */}
          <div className="order-2 lg:order-1">
            <div className="bg-white rounded-lg p-4 shadow-2xl">
              <img
                src={certificate.certificateImage}
                alt={`${certificate.name} Certificate`}
                className="w-full h-auto rounded-lg"
              />
            </div>

            {/* Download Button */}
            <div className="mt-4 text-center">
              <button className="flex items-center gap-2 px-4 py-2 bg-cyan-500 hover:bg-cyan-400 text-black font-medium rounded-lg transition-colors duration-200 mx-auto">
                <Download className="w-4 h-4" />
                Download Certificate
              </button>
            </div>
          </div>

          {/* Certificate Details */}
          <div className="order-1 lg:order-2">
            {/* Header */}
            <div className="mb-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="text-4xl">{certificate.icon}</div>
                <div>
                  <h2 className="text-3xl font-bold text-white mb-2">
                    {certificate.name}
                  </h2>
                  <div className="flex items-center gap-2 text-white/60">
                    <Building className="w-4 h-4" />
                    <span>{certificate.organization}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Certificate Info */}
            <div className="space-y-6">
              {/* Description */}
              <div>
                <h3 className="text-lg font-semibold text-cyan-400 mb-3">
                  About This Certification
                </h3>
                <p className="text-white/80 leading-relaxed">
                  {certificate.description}
                </p>
              </div>

              {/* Skills Covered */}
              <div>
                <h3 className="text-lg font-semibold text-cyan-400 mb-3">
                  Skills Covered
                </h3>
                <div className="flex flex-wrap gap-2">
                  {certificate.skills.map((skill, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-sm rounded-full border border-cyan-500/30"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Certificate Details */}
              <div className="bg-gray-700/50 rounded-lg p-4 space-y-3">
                <div className="flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-cyan-400" />
                  <div>
                    <p className="text-white/80 font-medium">Issue Date</p>
                    <p className="text-white/60 text-sm">{certificate.date}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Award className="w-5 h-5 text-cyan-400" />
                  <div>
                    <p className="text-white/80 font-medium">Credential ID</p>
                    <p className="text-white/60 text-sm font-mono">
                      {certificate.credentialId}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Building className="w-5 h-5 text-cyan-400" />
                  <div>
                    <p className="text-white/80 font-medium">
                      Issuing Organization
                    </p>
                    <p className="text-white/60 text-sm">
                      {certificate.organization}
                    </p>
                  </div>
                </div>
              </div>

              {/* Verification Note */}
              <div className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 rounded-lg p-4">
                <p className="text-cyan-400 font-semibold text-sm mb-2">
                  🔒 Verified Certificate
                </p>
                <p className="text-white/70 text-sm">
                  This certificate has been verified and can be validated using
                  the credential ID above.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
