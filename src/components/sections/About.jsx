import {
  MapPin,
  Mail,
  Calendar,
  ArrowRight,
  Github,
  Linkedin,
  Briefcase,
} from "lucide-react";

import profileImg from "../../assets/me.webp";

import Reveal from "../ui/Reveal";
import MagneticButton from "../ui/MagneticButton";

const About = ({ setView, isSummary = false, theme, isDarkMode }) => {
  return (
    <section
      className={`py-24 px-6 ${isDarkMode ? "bg-black/20" : "bg-white/30"} backdrop-blur-3xl`}
    >
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <div className="grid md:grid-cols-12 gap-12 items-start">
            <div className="md:col-span-5 lg:col-span-4">
              <div
                className={`sticky top-24 p-6 rounded-3xl border ${theme.cardBorder} ${theme.cardBg} backdrop-blur-sm`}
              >
                <div className="aspect-square rounded-2xl overflow-hidden mb-6 bg-neutral-100">
                  <img
                    src={profileImg}
                    alt="Manpreet Singh"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className={`text-2xl font-bold mb-1 ${theme.text}`}>
                  Manpreet Singh
                </h3>
                <p className={`mb-6 ${theme.textMuted}`}>
                  Full Stack & Ai Engineer
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-sm">
                    <div
                      className={`p-2 rounded-lg ${theme.cardBg} ${theme.textMuted}`}
                    >
                      <MapPin size={16} />
                    </div>
                    <span className={theme.text}>India (Remote-Friendly)</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <div
                      className={`p-2 rounded-lg ${theme.cardBg} ${theme.textMuted}`}
                    >
                      <Mail size={16} />
                    </div>
                    <span className={theme.text}>manpreet210028@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <div
                      className={`p-2 rounded-lg ${theme.cardBg} ${theme.textMuted}`}
                    >
                      <Calendar size={16} />
                    </div>
                    <span className={theme.text}>Born October 28, 2005</span>
                  </div>
                </div>

                {/* RESUME BUTTON */}
                <div className="mt-8 flex flex-col gap-3">
                  <MagneticButton
                    onClick={() => window.open("/resume.pdf", "_blank")}
                    className={`w-full py-3 rounded-xl ${theme.accentBg} text-white font-bold hover:opacity-90 transition-opacity flex justify-center items-center gap-2`}
                  >
                    Download Resume <ArrowRight size={16} />
                  </MagneticButton>
                </div>

                <div className="mt-6 pt-6 border-t border-neutral-200 dark:border-neutral-800 flex justify-center gap-4">
                  <MagneticButton
                    onClick={() =>
                      window.open("https://github.com/epicmanpreet01", "_blank")
                    }
                    className={`p-3 rounded-full ${theme.btnSecondary} transition-all`}
                  >
                    <Github size={20} />
                  </MagneticButton>

                  <MagneticButton
                    onClick={() =>
                      window.open(
                        "https://www.linkedin.com/in/manpreetsingh2100/",
                        "_blank",
                      )
                    }
                    className={`p-3 rounded-full ${theme.btnSecondary} transition-all`}
                  >
                    <Linkedin size={20} />
                  </MagneticButton>
                </div>
              </div>
            </div>

            <div className="md:col-span-7 lg:col-span-8 space-y-8">
              <div>
                <h2
                  className={`text-sm font-bold uppercase tracking-widest mb-3 ${theme.accent}`}
                >
                  About Me
                </h2>
                <h3
                  className={`text-3xl md:text-4xl font-bold mb-6 ${theme.text}`}
                >
                  I build scalable systems and intelligent applications end to
                  end.
                </h3>
                <div
                  className={`space-y-6 text-lg leading-relaxed ${theme.textMuted}`}
                >
                  <p>
                    I'm a{" "}
                    <span className={`${theme.text} font-medium`}>
                      full-stack and AI-focused engineer
                    </span>{" "}
                    who builds end-to-end systems — from scalable web interfaces
                    and robust backend services to machine learning pipelines
                    and desktop applications.
                  </p>

                  <p>
                    My experience spans{" "}
                    <span className={`${theme.text} font-medium`}>
                      full-stack platforms
                    </span>
                    , analytics dashboards, AI-driven prediction systems, and
                    real-time computer vision tools. Much of my work sits at the
                    intersection of software engineering and{" "}
                    <span className={`${theme.text} font-medium`}>
                      applied machine learning
                    </span>
                    , where reliability, performance, and clarity matter.
                  </p>

                  <p>
                    I place strong emphasis on{" "}
                    <span className={`${theme.text} font-medium`}>
                      clean architecture
                    </span>{" "}
                    and{" "}
                    <span className={`${theme.text} font-medium`}>
                      explainability in AI systems
                    </span>
                    , building solutions that are practical, maintainable, and
                    genuinely useful.
                  </p>

                  {isSummary && (
                    <MagneticButton
                      onClick={() => setView("about")}
                      className={`mt-4 text-sm font-bold ${theme.accent} flex items-center gap-2`}
                    >
                      Read Full Bio <ArrowRight size={16} />
                    </MagneticButton>
                  )}
                </div>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8">
                {[
                  { label: "Core Projects", value: "10+" },
                  { label: "ML Systems Built", value: "5+" },
                  { label: "Tech Stack", value: "Full-Stack + AI" },
                  { label: "Availability", value: "Open" },
                ].map((stat, i) => (
                  <div
                    key={i}
                    className={`p-4 rounded-2xl border ${theme.cardBorder} ${theme.cardBg} flex flex-col`}
                  >
                    <div className={`text-2xl font-bold ${theme.text}`}>
                      {stat.value}
                    </div>
                    <div
                      className={`text-xs uppercase tracking-wider ${theme.textMuted} mt-auto`}
                    >
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default About;
