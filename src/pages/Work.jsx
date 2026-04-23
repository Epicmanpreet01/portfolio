import { ArrowUpRight } from "lucide-react";
import Reveal from "../components/ui/Reveal";
import MagneticButton from "../components/ui/MagneticButton";
import PROJECTS_DATA from "../data/projects";

const allProjects = [...PROJECTS_DATA.featured, ...PROJECTS_DATA.noteworthy];

const WorkPage = ({ theme, setView }) => {
  return (
    <div className="pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* HEADING */}
        <Reveal>
          <h2
            className={`text-xs font-bold uppercase tracking-[0.2em] mb-4 ${theme.accent}`}
          >
            Archive
          </h2>
          <h3
            className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 ${theme.text}`}
          >
            Product &{" "}
            <span className={`${theme.accent} italic`}>Systems</span>
          </h3>
          <p className={`text-lg mb-16 ${theme.textMuted} max-w-xl`}>
            Deep dives into the systems I've architected, the models I've
            trained, and the products I've shipped.
          </p>
        </Reveal>

        {/* PROJECT LIST */}
        <div className="space-y-6">
          {allProjects.map((project, idx) => (
            <Reveal key={project.title} delay={idx * 60}>
              <div
                onClick={() => {
                  if (project.id) {
                    setView(`project-${project.id}`);
                    window.scrollTo(0, 0);
                  } else if (project.repo) {
                    window.open(project.repo, "_blank");
                  }
                }}
                className={`group flex items-center gap-6 p-6 rounded-2xl border ${theme.cardBorder} ${theme.cardBg} transition-transform duration-300 hover:scale-[1.02] cursor-pointer`}
                role="button"
              >
                {/* NUMBER */}
                <span
                  className={`text-7xl font-black opacity-[0.08] ${theme.text} select-none pointer-events-none flex-shrink-0 w-[60px] text-center leading-none`}
                >
                  {String(idx + 1).padStart(2, "0")}
                </span>

                {/* THUMBNAIL */}
                {project.image ? (
                  <div className="w-[160px] h-[120px] rounded-xl overflow-hidden flex-shrink-0">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ) : (
                  <div
                    className={`w-[160px] h-[120px] rounded-xl flex-shrink-0 flex items-center justify-center border ${theme.cardBorder}`}
                  >
                    <span className={`text-3xl font-black opacity-20 ${theme.textMuted}`}>
                      {project.title.charAt(0)}
                    </span>
                  </div>
                )}

                {/* CONTENT */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <h4
                      className={`text-lg font-bold ${theme.text}`}
                    >
                      {project.title}
                    </h4>
                    <span
                      className={`text-sm font-medium ${theme.textMuted} flex-shrink-0 hidden sm:block`}
                    >
                      2025
                    </span>
                  </div>
                  <p
                    className={`text-sm leading-relaxed ${theme.textMuted} mb-3 line-clamp-2`}
                  >
                    {project.desc}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider border ${theme.cardBorder} ${theme.accent}`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* LINK ICON */}
                {project.repo && (
                  <MagneticButton
                    onClick={() => window.open(project.repo, "_blank")}
                    className={`p-3 rounded-full ${theme.btnSecondary} transition-all flex-shrink-0 opacity-0 group-hover:opacity-100`}
                  >
                    <ArrowUpRight size={18} />
                  </MagneticButton>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkPage;
