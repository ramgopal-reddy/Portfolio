import { Code, MapPin, Mail } from "lucide-react";
import { Demo } from "./Demo";
import { profileData } from "../data/profileData";

export function AboutSection() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 bg-gray-800/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-cyan-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <div className="relative inline-block">
              <div className="w-64 h-64 sm:w-80 sm:h-80 mx-auto lg:mx-0 rounded-full bg-gradient-to-br from-cyan-400 to-purple-500 p-1">
                <div className="w-full h-full rounded-full bg-gray-700 flex items-center justify-center text-6xl">
                  <img
                    src="./SSMB.jpg"
                    alt="Profile"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-cyan-500 rounded-full flex items-center justify-center animate-pulse">
                <Code className="w-8 h-8 text-black" />
              </div>
            </div>
          </div>

          {/* About Content */}
          <div className="order-1 lg:order-2">
            <h3 className="text-2xl font-semibold mb-6 text-cyan-400">
              {profileData[0].role}
            </h3>
            {/* <div className="space-y-4 text-white/80 leading-relaxed">
              <p>
                I'm a passionate web developer with over 5 years of experience
                creating beautiful, functional, and user-centered digital
                experiences. I combine technical expertise with creative design
                to bring ideas to life.
              </p>
              <p>
                My journey in web development started with a curiosity about how
                websites work, and it has evolved into a deep passion for
                creating innovative solutions that make a difference.
              </p>
              <p>
                When I'm not coding, you'll find me exploring new design trends,
                contributing to open-source projects, or sharing knowledge with
                the developer community.
              </p>
            </div> */}

            <Demo />

            <div className="mt-8 flex flex-wrap gap-4">
              <div className="flex items-center gap-2 text-white/60">
                <MapPin className="w-4 h-4" />
                <span>{profileData[0].location}</span>
              </div>
              <div className="flex items-center gap-2 text-white/60">
                <Mail className="w-4 h-4" />
                <span>{profileData[0].email}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
