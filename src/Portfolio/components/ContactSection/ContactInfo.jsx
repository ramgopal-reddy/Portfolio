import { Mail, MapPin, Github, Linkedin } from "lucide-react";
import { profileData } from "@/Portfolio/data/profileData";

export function ContactInfo() {
  return (
    <div className="space-y-8">
      <div className="bg-gray-800/50 border border-white/10 rounded-xl p-6">
        <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <Mail className="w-5 h-5 text-cyan-400" />
            <div>
              <p className="text-white/80 font-medium">Email</p>
              <a
                href="mailto:john@example.com"
                className="text-white/60 hover:text-cyan-400 transition-colors duration-200"
              >
                {profileData[0].email}
              </a>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <MapPin className="w-5 h-5 text-cyan-400" />
            <div>
              <p className="text-white/80 font-medium">Location</p>
              <p className="text-white/60">{profileData[0].location}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-800/50 border border-white/10 rounded-xl p-6">
        <h3 className="text-xl font-semibold mb-4">Follow Me</h3>
        <div className="flex gap-4">
          <a
            href={profileData[0].github}
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 bg-gray-700/50 rounded-lg flex items-center justify-center hover:bg-cyan-500/20 hover:border-cyan-500/50 border border-white/10 transition-all duration-200 group"
          >
            <Github className="w-5 h-5 text-white/70 group-hover:text-cyan-400" />
          </a>
          <a
            href={profileData[0].linkedIn}
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 bg-gray-700/50 rounded-lg flex items-center justify-center hover:bg-cyan-500/20 hover:border-cyan-500/50 border border-white/10 transition-all duration-200 group"
          >
            <Linkedin className="w-5 h-5 text-white/70 group-hover:text-cyan-400" />
          </a>
          <a
            href={`mailto:${profileData[0].email}`}
            className="w-12 h-12 bg-gray-700/50 rounded-lg flex items-center justify-center hover:bg-cyan-500/20 hover:border-cyan-500/50 border border-white/10 transition-all duration-200 group"
          >
            <Mail className="w-5 h-5 text-white/70 group-hover:text-cyan-400" />
          </a>
        </div>
      </div>

      <div className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 rounded-xl p-6">
        <h3 className="text-xl font-semibold mb-2 text-cyan-400">
          Let's Collaborate!
        </h3>
        <p className="text-white/70 text-sm">
          I'm currently available for freelance projects and always open to
          discussing new opportunities.
        </p>
      </div>
    </div>
  );
}
