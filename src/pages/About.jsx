import { ArrowRight, Github, Linkedin } from "lucide-react";
import Reveal from "../components/ui/Reveal";
import MagneticButton from "../components/ui/MagneticButton";
import EXPERIENCE_DATA from "../data/experience";

const EDUCATION_DATA = [
  {
    degree: "B.Sc. Computer Science (Hons.)",
    institution: "Chandigarh University",
    period: "2023 – 2026",
    desc: "Focused on software engineering, data structures, algorithms, and applied machine learning. Built multiple full-stack and AI-driven projects throughout the program.",
  },
];

const AboutPage = ({ theme, isDarkMode }) => {
  return (
    <div className="pt-32 pb-20 px-6">
      <div className="max-w-4xl mx-auto">
        {/* ===== HERO / BIO ===== */}
        <Reveal>
          <h2
            className={`text-xs font-bold uppercase tracking-[0.2em] mb-4 ${theme.accent}`}
          >
            About Me
          </h2>
          <h3
            className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-10 ${theme.text}`}
          >
            The <span className={`${theme.accent} italic`}>Engineer</span>{" "}
            Behind the Systems.
          </h3>

          <div
            className={`space-y-6 text-lg leading-relaxed ${theme.textMuted}`}
          >
            <p>
              I'm a{" "}
              <span className={`${theme.text} font-medium`}>
                full-stack and AI-focused engineer
              </span>{" "}
              who builds end-to-end systems — from scalable web interfaces and
              robust backend services to machine learning pipelines and desktop
              applications.
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
          </div>

          {/* SOCIAL + RESUME ROW */}
          <div className="flex items-center gap-4 pt-10">
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

            <MagneticButton
              onClick={() => window.open("/resume.pdf", "_blank")}
              className={`ml-auto px-6 py-3 rounded-full ${theme.btnSecondary} font-bold transition-all flex items-center gap-2 text-sm`}
            >
              Download Resume <ArrowRight size={16} />
            </MagneticButton>
          </div>
        </Reveal>

        {/* ===== EXPERIENCE ===== */}
        <Reveal>
          <div className="mt-24">
            <h3
              className={`text-3xl font-bold pb-4 border-b ${theme.cardBorder} mb-10 ${theme.text}`}
            >
              Experience
            </h3>
            <div className="space-y-12">
              {EXPERIENCE_DATA.map((job, i) => (
                <div key={i}>
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-1">
                    <h4 className={`text-xl font-bold ${theme.text}`}>
                      {job.role}
                    </h4>
                    <span
                      className={`text-sm font-bold uppercase tracking-wider ${theme.accent} flex-shrink-0`}
                    >
                      {job.period}
                    </span>
                  </div>
                  <p className={`text-sm mb-4 ${theme.textMuted}`}>
                    {job.company}
                  </p>
                  <ul className="space-y-2">
                    {job.desc
                      .split(". ")
                      .filter(Boolean)
                      .map((point, j) => (
                        <li
                          key={j}
                          className={`flex items-start gap-3 ${theme.textMuted}`}
                        >
                          <span
                            className={`w-1.5 h-1.5 rounded-sm ${theme.accentBg} mt-2.5 flex-shrink-0`}
                          />
                          <span>
                            {point.endsWith(".") ? point : `${point}.`}
                          </span>
                        </li>
                      ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* ===== EDUCATION ===== */}
        <Reveal>
          <div className="mt-24">
            <h3
              className={`text-3xl font-bold pb-4 border-b ${theme.cardBorder} mb-10 ${theme.text}`}
            >
              Education
            </h3>
            <div className="space-y-12">
              {EDUCATION_DATA.map((edu, i) => (
                <div key={i}>
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-1">
                    <h4 className={`text-xl font-bold ${theme.text}`}>
                      {edu.degree}
                    </h4>
                    <span
                      className={`text-sm font-bold uppercase tracking-wider ${theme.accent} flex-shrink-0`}
                    >
                      {edu.period}
                    </span>
                  </div>
                  <p className={`text-sm mb-4 ${theme.textMuted}`}>
                    {edu.institution}
                  </p>
                  <p className={`leading-relaxed ${theme.textMuted}`}>
                    {edu.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  );
};

export default AboutPage;
