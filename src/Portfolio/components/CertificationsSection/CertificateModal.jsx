import { X, Calendar, Building, Award } from "lucide-react";
import { useTheme } from "../../hooks/useTheme";

export function CertificateModal({ certificate, onClose }) {
  const theme = useTheme();
  if (!certificate) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center" style={{ transition: `all ${theme.transitions.duration.normal} ${theme.transitions.ease}` }}>
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-all duration-300"
        onClick={onClose}
        style={{ transition: `all ${theme.transitions.duration.normal} ${theme.transitions.ease}` }}
      />

      {/* Modal */}
      <div className={`relative border rounded-2xl p-8 max-w-5xl max-h-[90vh] overflow-y-auto mx-4 w-full transition-all duration-300 ${
        theme.isDark 
          ? 'bg-gray-800 border-white/10' 
          : 'bg-white border-gray-200/50'
      }`}
        style={{ transition: `all ${theme.transitions.duration.normal} ${theme.transitions.ease}` }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className={`absolute top-4 right-4 p-2 rounded-lg transition-colors duration-200 z-10 ${
            theme.isDark 
              ? 'hover:bg-white/10 text-white/70 hover:text-white' 
              : 'hover:bg-gray-100 text-gray-600 hover:text-gray-800'
          }`}
        >
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Certificate Image */}
          <div className="order-2 lg:order-1">
            <div className={`rounded-lg p-4 shadow-2xl ${
              theme.isDark ? 'bg-white' : 'bg-gray-50'
            }`}>
              <img
                src={certificate.certificateImage}
                alt={`${certificate.name} Certificate`}
                className="w-full h-auto rounded-lg"
              />
            </div>

          </div>

          {/* Certificate Details */}
          <div className="order-1 lg:order-2">
            {/* Header */}
            <div className="mb-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="text-4xl">{certificate.icon}</div>
                <div>
                  <h2 className={`text-3xl font-bold mb-2`} style={{ color: theme.colors.text }}>
                    {certificate.name}
                  </h2>
                  <div className="flex items-center gap-2" style={{ color: theme.colors.textSecondary }}>
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
                <h3 className={`text-lg font-semibold mb-3`} style={{ color: theme.colors.primary }}>
                  About This Certification
                </h3>
                <p className="leading-relaxed" style={{ color: theme.colors.text }}>
                  {certificate.description}
                </p>
              </div>

              {/* Skills Covered */}
              <div>
                <h3 className={`text-lg font-semibold mb-3`} style={{ color: theme.colors.primary }}>
                  Skills Covered
                </h3>
                <div className="flex flex-wrap gap-2">
                  {certificate.skills.map((skill, index) => (
                    <span
                      key={index}
                      className={`px-3 py-1 text-sm rounded-full border`} style={{ 
                        backgroundColor: `${theme.colors.primary}20`, 
                        color: theme.colors.primary, 
                        borderColor: `${theme.colors.primary}30` 
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Certificate Details */}
              <div className={`rounded-lg p-4 space-y-3 ${
                theme.isDark ? 'bg-gray-700/50' : 'bg-gray-100/50'
              }`}>
                <div className="flex items-center gap-3">
                  <Calendar className="w-5 h-5" style={{ color: theme.colors.primary }} />
                  <div>
                    <p className="font-medium" style={{ color: theme.colors.text }}>Issue Date</p>
                    <p className="text-sm font-mono" style={{ color: theme.colors.textSecondary }}>{certificate.date}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Award className="w-5 h-5" style={{ color: theme.colors.primary }} />
                  <div>
                    <p className="font-medium" style={{ color: theme.colors.text }}>Credential ID</p>
                    <p className="text-sm font-mono" style={{ color: theme.colors.textSecondary }}>
                      {certificate.credentialId}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Building className="w-5 h-5" style={{ color: theme.colors.primary }} />
                  <div>
                    <p className="font-medium" style={{ color: theme.colors.text }}>
                      Issuing Organization
                    </p>
                    <p className="text-sm" style={{ color: theme.colors.textSecondary }}>
                      {certificate.organization}
                    </p>
                  </div>
                </div>
              </div>

              {/* Verification Note */}
              <div className={`border rounded-lg p-4`} style={{ 
                background: `linear-gradient(to right, ${theme.colors.primary}20, ${theme.colors.secondary}20)`, 
                borderColor: `${theme.colors.primary}30` 
              }}>
                <p className={`font-semibold text-sm mb-2`} style={{ color: theme.colors.primary }}>
                  🔒 Verified Certificate
                </p>
                <p className="text-sm" style={{ color: theme.colors.text }}>
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
