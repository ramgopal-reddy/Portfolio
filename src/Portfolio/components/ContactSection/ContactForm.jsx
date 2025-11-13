import { useRef, useState } from "react";
import { Send } from "lucide-react";

export function ContactForm() {
  const [formStatus, setFormStatus] = useState(null);
  const formRef = useRef(null);

  const handleSubmit = () => {
    setFormStatus("Thank you! We've received your demo request.");
    if (formRef.current) {
      setTimeout(() => formRef.current.reset(), 500);
    }
  };
  return (
    <div className="bg-gray-800/50 border border-white/10 rounded-xl p-8">
      <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
        <Send className="w-5 h-5 text-cyan-400" />
        Send a Message
      </h3>

      {/* Hidden iframe prevents redirect */}
      <iframe name="hidden_iframe" style={{ display: "none" }}></iframe>

      <form
        ref={formRef}
        action="https://docs.google.com/forms/d/e/1FAIpQLSfaBXxUcYjcuU_20OOJd9JhTrUhRDG0ZxahrJkkw8r391Jt-w/formResponse"
        method="POST"
        target="hidden_iframe"
        onSubmit={handleSubmit}
        className="space-y-6"
      >
        <div>
          <label className="block text-sm font-medium text-white/80 mb-2">
            Name
          </label>
          <input
            type="text"
            name="entry.1049255116"
            className="w-full px-4 py-3 bg-gray-700/50 border border-white/20 rounded-lg text-white placeholder-white/40 focus:border-cyan-500 focus:outline-none transition-colors duration-200"
            placeholder="Your name"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-white/80 mb-2">
            Email
          </label>
          <input
            type="email"
            name="entry.1073842689"
            className="w-full px-4 py-3 bg-gray-700/50 border border-white/20 rounded-lg text-white placeholder-white/40 focus:border-cyan-500 focus:outline-none transition-colors duration-200"
            placeholder="your@email.com"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-white/80 mb-2">
            Subject
          </label>
          <input
            type="text"
            name="entry.1432652359"
            className="w-full px-4 py-3 bg-gray-700/50 border border-white/20 rounded-lg text-white placeholder-white/40 focus:border-cyan-500 focus:outline-none transition-colors duration-200"
            placeholder="Project discussion"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-white/80 mb-2">
            Message
          </label>
          <textarea
            rows={4}
            name="entry.2029739140"
            className="w-full px-4 py-3 bg-gray-700/50 border border-white/20 rounded-lg text-white placeholder-white/40 focus:border-cyan-500 focus:outline-none transition-colors duration-200 resize-none"
            placeholder="Tell me about your project..."
          />
        </div>
        <button
          type="submit"
          className="w-full px-6 py-3 bg-cyan-500 hover:bg-cyan-400 text-black font-semibold rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25"
        >
          Send Message
        </button>
      </form>
      {formStatus && (
        <p className="mt-6 text-lg text-center text-cyan-400 font-semibold flex items-center justify-center gap-2">
          {formStatus}
        </p>
      )}
    </div>
  );
}
