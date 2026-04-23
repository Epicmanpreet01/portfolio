import { useEffect, useState, useCallback } from "react";
import themeConfig from "./theme/themeConfig";

import NavBar from "./components/layout/NavBar";
import AnimatedBackground from "./components/layout/AnimatedBackground";

import ScrollTimeline from "./components/ui/ScrollTimeline";

import Home from "./pages/Home";
import About from "./pages/About";
import Work from "./pages/Work";
import Contact from "./pages/Contact";
import ProjectDetail from "./pages/ProjectDetail";
import Skills from "./components/sections/Skills";

// ── URL ↔ View mapping ──────────────────────────────────
const viewToPath = (view) => {
  if (view === "home") return "/";
  if (view.startsWith("project-")) return `/project/${view.replace("project-", "")}`;
  return `/${view}`;
};

const pathToView = (path) => {
  if (path === "/" || path === "") return "home";
  if (path.startsWith("/project/")) return `project-${path.replace("/project/", "")}`;
  return path.replace("/", "");
};

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [currentView, setCurrentView] = useState(() =>
    pathToView(window.location.pathname)
  );

  const theme = isDarkMode ? themeConfig.dark : themeConfig.light;

  // Navigate: update state + push to browser history
  const navigate = useCallback((view) => {
    setCurrentView(view);
    const path = viewToPath(view);
    window.history.pushState({ view }, "", path);
    window.scrollTo(0, 0);
  }, []);

  // Listen for browser back/forward
  useEffect(() => {
    const handlePopState = (e) => {
      const view = e.state?.view || pathToView(window.location.pathname);
      setCurrentView(view);
      window.scrollTo(0, 0);
    };

    window.addEventListener("popstate", handlePopState);

    // Replace initial history entry so it has state
    window.history.replaceState(
      { view: currentView },
      "",
      viewToPath(currentView)
    );

    return () => window.removeEventListener("popstate", handlePopState);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDarkMode);
  }, [isDarkMode]);

  return (
    <div className={`${theme.bg} min-h-screen`}>

      <AnimatedBackground theme={theme} isDarkMode={isDarkMode} />

      <NavBar
        currentView={currentView}
        setView={navigate}
        theme={theme}
        isDarkMode={isDarkMode}
        toggleTheme={() => setIsDarkMode(!isDarkMode)}
      />

      <ScrollTimeline isDarkMode={isDarkMode} showBlob={currentView === "home"} />

      <main className="relative z-10">
        {currentView === "home" && (
          <Home
            setView={navigate}
            theme={theme}
            isDarkMode={isDarkMode}
          />
        )}
        {currentView === "about" && (
          <About theme={theme} isDarkMode={isDarkMode} />
        )}
        {currentView === "skills" && (
          <Skills theme={theme} setView={navigate} />
        )}
        {currentView === "work" && <Work theme={theme} setView={navigate} />}
        {currentView === "contact" && <Contact theme={theme} />}
        {currentView.startsWith("project-") && (
          <ProjectDetail
            projectId={currentView.replace("project-", "")}
            theme={theme}
            isDarkMode={isDarkMode}
            setView={navigate}
          />
        )}
      </main>
    </div>
  );
}
