import { useEffect, useState } from "react";
import themeConfig from "./theme/themeConfig";

import NavBar from "./components/layout/NavBar";
import AnimatedBackground from "./components/layout/AnimatedBackground";
import MouseSpotlight from "./components/layout/MouseSpotlight";

import Home from "./pages/Home";
import About from "./pages/About";
import Work from "./pages/Work";
import Contact from "./pages/Contact";
import Skills from "./components/sections/Skills";

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [currentView, setCurrentView] = useState("home");

  const theme = isDarkMode ? themeConfig.dark : themeConfig.light;

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDarkMode);
  }, [isDarkMode]);

  return (
    <div className={`${theme.bg} min-h-screen`}>
      <MouseSpotlight theme={theme} isDarkMode={isDarkMode} />
      <AnimatedBackground theme={theme} isDarkMode={isDarkMode} />

      <NavBar
        currentView={currentView}
        setView={setCurrentView}
        theme={theme}
        isDarkMode={isDarkMode}
        toggleTheme={() => setIsDarkMode(!isDarkMode)}
      />

      <main className="relative z-10">
        {currentView === "home" && (
          <Home
            setView={setCurrentView}
            theme={theme}
            isDarkMode={isDarkMode}
          />
        )}
        {currentView === "about" && (
          <About theme={theme} isDarkMode={isDarkMode} />
        )}
        {currentView === "skills" && (
          <Skills theme={theme} setView={setCurrentView} />
        )}
        {currentView === "work" && <Work theme={theme} />}
        {currentView === "contact" && <Contact theme={theme} />}
      </main>
    </div>
  );
}
