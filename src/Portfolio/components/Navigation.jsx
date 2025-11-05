import { Menu, X } from "lucide-react";
import { profileData } from "../data/profileData";

export function Navigation({
  isMenuOpen,
  setIsMenuOpen,
  activeSection,
  scrollToSection,
  navItems,
}) {
  return (
    <nav
      className="fixed top-4 left-1/2 -translate-x-1/2 z-50 
      bg-gray-900/80 backdrop-blur-md border border-white/10 
      shadow-lg rounded-2xl 
      px-6 sm:px-8 py-2 
      w-[90%] max-w-8xl flex items-center justify-between"
    >
      <div className="max-w-8xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-12 gap-4 sm:gap-8 md:gap-16">
          {/* Logo / Name */}
          <div className="flex-shrink min-w-0">
            <div className="font-bold text-lg sm:text-xl md:text-2xl tracking-wide text-cyan-400 whitespace-nowrap truncate max-w-[60vw] sm:max-w-none">
              {profileData[0].name}
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-sm font-medium transition-colors duration-200 hover:text-cyan-400 ${
                  activeSection === item.id ? "text-cyan-400" : "text-white/70"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-white/10 transition-colors duration-200 flex-shrink-0"
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-2 bg-gray-800/70 border border-white/10 rounded-lg">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full text-left px-3 py-2 text-sm font-medium rounded-lg transition-colors duration-200 ${
                    activeSection === item.id
                      ? "text-cyan-400 bg-white/5"
                      : "text-white/70 hover:text-cyan-400 hover:bg-white/5"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
