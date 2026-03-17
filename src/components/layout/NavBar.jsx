import { useEffect, useState } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import MagneticButton from "../ui/MagneticButton";

const NavBar = ({ currentView, setView, theme, isDarkMode, toggleTheme }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNav = (view) => {
    setView(view);
    setIsMenuOpen(false);
    window.scrollTo(0, 0);
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled
          ? `${theme.navBg} backdrop-blur-xl border-b ${theme.cardBorder}`
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div
            className="flex-shrink-0 cursor-pointer group"
            onClick={() => handleNav("home")}
          >
            <span
              className={`text-xl font-bold tracking-tighter ${theme.text}`}
            >
              Manpreet
              <span
                className={`${theme.accent} group-hover:px-1 transition-all`}
              >
                .
              </span>
              Singh
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-1">
            {["Home", "About", "Skills", "Work", "Contact"].map((item) => (
              <MagneticButton
                key={item}
                onClick={() => handleNav(item.toLowerCase())}
                className={`px-4 py-2 text-sm font-medium rounded-full transition-colors ${
                  currentView === item.toLowerCase()
                    ? `${theme.text} font-bold ${theme.navActiveBg ?? ""}`
                    : theme.textMuted
                } ${theme.navHoverText} ${theme.navHoverBg}`}
              >
                {item}
              </MagneticButton>
            ))}

            <div
              className={`mx-4 h-6 w-[1px] ${theme.cardBorder} bg-current opacity-20`}
            />

            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full transition-colors ${theme.text} ${theme.navHoverBg}`}
            >
              {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>

          {/* Mobile Controls */}
          <div className="md:hidden flex items-center gap-4">
            <button onClick={toggleTheme} className={theme.text}>
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={theme.text}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div
          className={`md:hidden absolute top-20 left-0 w-full h-screen ${theme.bg} backdrop-blur-xl p-6 border-t ${theme.cardBorder}`}
        >
          <div className="flex flex-col space-y-4">
            {["Home", "About", "Skills", "Work", "Contact"].map((item) => (
              <button
                key={item}
                onClick={() => handleNav(item.toLowerCase())}
                className={`text-3xl font-bold text-left py-4 border-b ${theme.cardBorder} ${theme.text}`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
