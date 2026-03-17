import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import Skills from "../components/sections/Skills";
import Projects from "../components/sections/Projects";
import Contact from "../components/sections/Contact";

const Home = ({ setView, theme, isDarkMode }) => {
  return (
    <>
      <Hero setView={setView} theme={theme} />
      <About
        setView={setView}
        isSummary
        theme={theme}
        isDarkMode={isDarkMode}
      />
      <Skills isSummary theme={theme} setView={setView} />
      <Projects setView={setView} isSummary theme={theme} />
      <Contact isSummary theme={theme} />
    </>
  );
};

export default Home;
