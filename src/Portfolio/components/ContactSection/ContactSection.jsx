import { ContactForm } from "./ContactForm";
import { ContactInfo } from "./ContactInfo";
import { useTheme } from "../../hooks/useTheme";
import { DualHighlight } from "@/components/DualHighlight";

export function ContactSection() {
  const theme = useTheme();

  return (
    <section
      id="contact"
      className={`py-20 px-4 sm:px-6 transition-all duration-300 ${theme.isDark ? "bg-gray-800/50" : "bg-gray-100/50"}`}
    >
      {" "}
      {/* bg-gray-800/50 - dark background with transparency */}
      <div
        className="max-w-4xl mx-auto"
        style={{
          transition: `all ${theme.transitions.duration.normal} ${theme.transitions.ease}`,
        }}
      >
        <div className="text-center mb-16">
          <h2
            className={`text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r ${theme.colors.gradient}`}
          >
            <DualHighlight first="Get In Touch" second="Feedback Loop" />
          </h2>
          <div
            className="w-24 h-1 mx-auto rounded-full bg-gradient-to-r"
            style={{
              background: `linear-gradient(to right, ${theme.colors.primary}, ${theme.colors.secondary})`,
            }}
          ></div>
          <p
            className="mt-6 text-lg max-w-2xl mx-auto"
            style={{ color: theme.colors.textSecondary }}
          >
            Have a project in mind? Let's discuss how we can work together to
            bring your ideas to life.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <ContactForm />
          <ContactInfo />
        </div>
      </div>
    </section>
  );
}
