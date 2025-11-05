import { Send } from "lucide-react";

export function ContactForm() {
  return (
    <div className="bg-gray-800/50 border border-white/10 rounded-xl p-8">
      <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
        <Send className="w-5 h-5 text-cyan-400" />
        Send a Message
      </h3>
      <form className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-white/80 mb-2">
            Name
          </label>
          <input
            type="text"
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
    </div>
  );
}
