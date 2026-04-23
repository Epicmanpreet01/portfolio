import { useEffect, useState, useRef } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import MagneticButton from "../ui/MagneticButton";

const NavBar = ({ currentView, setView, theme, isDarkMode, toggleTheme }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const lastScrollY = useRef(0);
  const scrollDownAccum = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      const atTop = currentY <= 20;
      const delta = currentY - lastScrollY.current;

      setScrolled(!atTop);

      if (delta > 0) {
        // Scrolling down — accumulate distance
        scrollDownAccum.current += delta;
        if (scrollDownAccum.current > 1000) {
          setHidden(true);
        }
      } else if (delta < 0) {
        // Scrolling up — reset accumulator and show
        scrollDownAccum.current = 0;
        setHidden(false);
      }

      // Always show at top
      if (atTop) {
        setHidden(false);
        scrollDownAccum.current = 0;
      }

      lastScrollY.current = currentY;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNav = (view) => {
    setView(view);
    setIsMenuOpen(false);
    window.scrollTo(0, 0);
  };

  const navItems = [
    { label: "Home", view: "home" },
    { label: "About", view: "about" },
    { label: "Skills", view: "skills" },
    { label: "Projects", view: "work" },
    { label: "Contact", view: "contact" },
  ];

  return (
    <nav className={`fixed w-full z-50 flex justify-center px-4 transition-all duration-500 ${hidden ? '-translate-y-full pt-4' : scrolled ? 'translate-y-0 pt-1' : 'translate-y-0 pt-4'}`}>
      <div
        className={`flex items-center justify-between w-full max-w-7xl px-6 py-3 rounded-full border transition-all duration-500 ${
          scrolled
            ? `${theme.navBg} backdrop-blur-xl ${theme.cardBorder} shadow-lg shadow-black/5`
            : `${theme.navBg} backdrop-blur-xl ${theme.cardBorder} shadow-sm shadow-black/5`
        }`}
      >
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
        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => {
            const isActive = currentView === item.view;
            return (
              <MagneticButton
                key={item.label}
                onClick={() => handleNav(item.view)}
                className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                  isActive
                    ? `${theme.accentBg} text-white`
                    : `${theme.textMuted} ${theme.navHoverBg} ${theme.navHoverText}`
                }`}
              >
                {item.label}
              </MagneticButton>
            );
          })}

          <div
            className={`mx-3 h-5 w-[1px] bg-current opacity-15 ${theme.textMuted}`}
          />

          <button
            onClick={toggleTheme}
            className={`p-2 rounded-full transition-colors ${theme.textMuted} ${theme.navHoverBg}`}
          >
            {isDarkMode ? <Sun size={16} /> : <Moon size={16} />}
          </button>
        </div>

        {/* Mobile Controls */}
        <div className="md:hidden flex items-center gap-3">
          <button onClick={toggleTheme} className={theme.textMuted}>
            {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={theme.text}
          >
            {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div
          className={`md:hidden absolute top-20 left-4 right-4 ${theme.navBg} backdrop-blur-xl rounded-2xl p-4 border ${theme.cardBorder} shadow-xl shadow-black/10`}
        >
          <div className="flex flex-col space-y-1">
            {navItems.map((item) => {
              const isActive = currentView === item.view;
              return (
                <button
                  key={item.label}
                  onClick={() => handleNav(item.view)}
                  className={`text-left px-4 py-3 rounded-xl font-medium transition-all ${
                    isActive
                      ? `${theme.accentBg} text-white`
                      : `${theme.text} ${theme.navHoverBg}`
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
