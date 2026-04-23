import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import Skills from "../components/sections/Skills";
import Projects from "../components/sections/Projects";
import Contact from "../components/sections/Contact";

const Home = ({ setView, theme, isDarkMode }) => {
  return (
    <>
      <div data-section="Hero">
        <Hero setView={setView} theme={theme} />
      </div>
      <div data-section="About">
        <About
          setView={setView}
          isSummary
          theme={theme}
          isDarkMode={isDarkMode}
        />
      </div>
      <div data-section="Skills">
        <Skills isSummary theme={theme} setView={setView} />
      </div>
      <div data-section="Projects">
        <Projects setView={setView} isSummary theme={theme} />
      </div>
      <div data-section="Contact">
        <Contact isSummary theme={theme} setView={setView} />
      </div>
    </>
  );
};

export default Home;
