import { Menu, X, Sun, Moon } from "lucide-react";
import { profileData } from "../data/profileData";
import { useTheme } from "../hooks/useTheme";

export function Navigation({
  isMenuOpen,
  setIsMenuOpen,
  activeSection,
  scrollToSection,
  navItems,
}) {
  const theme = useTheme();

  return (
    <nav
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 
      backdrop-blur-md border shadow-lg rounded-2xl 
      px-6 sm:px-8 py-2 
      w-[90%] max-w-8xl flex items-center justify-between transition-all duration-300 ${
        theme.isDark
          ? "bg-gray-900/80 border-white/10"
          : "bg-white/80 border-gray-300/50"
      }`}
      style={{
        transition: `all ${theme.transitions.duration.normal} ${theme.transitions.ease}`,
      }}
    >
      <div className="max-w-8xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-12 gap-4 sm:gap-8 md:gap-16">
          {/* Logo / Name */}
          <div className="flex-shrink min-w-0">
            <div
              className={`font-bold text-lg sm:text-xl md:text-2xl tracking-wide whitespace-nowrap truncate max-w-[60vw] sm:max-w-none transition-all duration-300 ${
                theme.isDark ? "text-cyan-400" : "text-purple-600"
              }`}
              style={{
                color: theme.colors.primary,
                transition: `all ${theme.transitions.duration.normal} ${theme.transitions.ease}`,
              }}
            >
              {profileData[0].name}
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-sm font-medium transition-all duration-200 hover:text-opacity-80 ${
                  activeSection === item.id
                    ? theme.isDark
                      ? "text-cyan-400"
                      : "text-purple-600"
                    : theme.isDark
                      ? "text-white/70"
                      : "text-gray-600"
                }`}
                style={{
                  color:
                    activeSection === item.id
                      ? theme.colors.primary
                      : theme.colors.textSecondary,
                  transition: `all ${theme.transitions.duration.normal} ${theme.transitions.ease}`,
                }}
              >
                {item.label}
              </button>
            ))}
            {/* Theme Toggle Button */}
            <button
              onClick={theme.toggleTheme}
              className={`p-2 rounded-lg transition-all duration-200 ${
                theme.isDark
                  ? "hover:bg-white/10 text-white"
                  : "hover:bg-gray-100 text-gray-700"
              }`}
              style={{
                transition: `all ${theme.transitions.duration.fast} ${theme.transitions.ease}`,
              }}
            >
              {/* {theme.isDark ? <Sun size={18} /> : <Moon size={18} />} */}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2">
            {/* Theme Toggle Button - Mobile */}
            <button
              onClick={theme.toggleTheme}
              className={`p-2 rounded-lg transition-all duration-200 ${
                theme.isDark
                  ? "hover:bg-white/10 text-white"
                  : "hover:bg-gray-100 text-gray-700"
              }`}
              style={{
                transition: `all ${theme.transitions.duration.fast} ${theme.transitions.ease}`,
              }}
            >
              {theme.isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`md:hidden p-2 rounded-lg transition-all duration-200 flex-shrink-0 ${
                theme.isDark
                  ? "hover:bg-white/10 text-white"
                  : "hover:bg-gray-100 text-gray-700"
              }`}
              style={{
                transition: `all ${theme.transitions.duration.fast} ${theme.transitions.ease}`,
              }}
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div
            className={`md:hidden mt-2 border rounded-lg transition-all duration-300 ${
              theme.isDark
                ? "bg-gray-800/70 border-white/10"
                : "bg-white/90 border-gray-200/50"
            }`}
            style={{
              transition: `all ${theme.transitions.duration.normal} ${theme.transitions.ease}`,
            }}
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full text-left px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                    activeSection === item.id
                      ? theme.isDark
                        ? "text-cyan-400 bg-white/5"
                        : "text-purple-600 bg-gray-100/50"
                      : theme.isDark
                        ? "text-white/70 hover:text-cyan-400 hover:bg-white/5"
                        : "text-gray-600 hover:text-purple-600 hover:bg-gray-100/50"
                  }`}
                  style={{
                    color:
                      activeSection === item.id
                        ? theme.colors.primary
                        : theme.colors.textSecondary,
                    transition: `all ${theme.transitions.duration.normal} ${theme.transitions.ease}`,
                  }}
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
