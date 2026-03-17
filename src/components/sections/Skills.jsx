import React, { useState, useEffect, useRef } from "react";

import Reveal from "../ui/Reveal";
import SKILLS_DATA from "../../data/skills";
import MagneticButton from "../ui/MagneticButton";

const Skills = ({ isSummary = false, theme, setView }) => {
  const [activeTab, setActiveTab] = useState("All");
  const tabsRef = useRef([]);
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });

  const categories = [
    "All",
    "Languages",
    "Frontend",
    "Backend",
    "AI",
    "Design",
    "Tools",
    "Concepts",
  ];

  const filteredSkillsRaw =
    activeTab === "All"
      ? SKILLS_DATA
      : SKILLS_DATA.filter((s) => s.category === activeTab);

  // Summary ignores category filtering
  const filteredSkills = isSummary ? SKILLS_DATA : filteredSkillsRaw;

  // Heavy duplication for seamless infinite scroll
  const loopItems = [
    ...filteredSkills,
    ...filteredSkills,
    ...filteredSkills,
    ...filteredSkills,
  ];

  useEffect(() => {
    if (!isSummary) {
      const idx = categories.indexOf(activeTab);
      const el = tabsRef.current[idx];
      if (el) {
        setIndicatorStyle({
          left: el.offsetLeft,
          width: el.offsetWidth,
        });
      }
    }
  }, [activeTab, isSummary]);

  return (
    <section className={`py-32 px-6 ${!isSummary ? "min-h-screen pt-40" : ""}`}>
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <h2 className={`text-3xl md:text-5xl font-bold mb-12 ${theme.text}`}>
            Technical Arsenal
          </h2>
        </Reveal>

        {/* CATEGORY BAR (HIDDEN IN SUMMARY MODE) */}
        {!isSummary && (
          <Reveal delay={200}>
            <div
              className={`relative inline-flex flex-wrap gap-2 mb-12 p-1.5 rounded-full border ${theme.cardBorder} ${theme.cardBg} backdrop-blur-sm`}
            >
              <div
                className={`absolute top-1.5 bottom-1.5 rounded-full ${theme.accentBg} shadow-sm transition-all duration-300 ease-out`}
                style={{
                  left: indicatorStyle.left,
                  width: indicatorStyle.width,
                }}
              />
              {categories.map((cat, idx) => (
                <button
                  key={cat}
                  ref={(el) => (tabsRef.current[idx] = el)}
                  onClick={() => setActiveTab(cat)}
                  className={`relative z-10 px-6 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
                    activeTab === cat
                      ? "text-white"
                      : `${theme.textMuted} hover:${theme.text}`
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </Reveal>
        )}

        {/* ================= SUMMARY MODE ================= */}
        {isSummary ? (
          <Reveal delay={200}>
            <div className="relative overflow-hidden py-8">
              {/* Edge fade only (no new colors added) */}
              <div className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)] space-y-8">
                <style
                  dangerouslySetInnerHTML={{
                    __html: `
                      @keyframes scroll-left {
                        0% { transform: translateX(0); }
                        100% { transform: translateX(-50%); }
                      }
                      @keyframes scroll-right {
                        0% { transform: translateX(-50%); }
                        100% { transform: translateX(0); }
                      }
                    `,
                  }}
                />

                {[0, 1, 2].map((lane) => {
                  const reverse = lane % 2 === 1;
                  return (
                    <div
                      key={lane}
                      className="flex gap-6 w-max hover:[animation-play-state:paused]"
                      style={{
                        animation: `${
                          reverse ? "scroll-right" : "scroll-left"
                        } 300s linear infinite`,
                      }}
                    >
                      {loopItems.map((skill, idx) => (
                        <div
                          key={`${lane}-${skill.name}-${idx}`}
                          className={`w-56 flex-shrink-0 group p-6 rounded-2xl border ${theme.cardBorder} ${theme.cardBg} hover:border-orange-500/50 transition-all duration-300 flex flex-col items-center gap-4 text-center`}
                          title={skill.name}
                        >
                          <div
                            className={`p-4 rounded-xl ${theme.bg} ${theme.textMuted} group-hover:${theme.accent} transition-colors`}
                          >
                            {skill.icon}
                          </div>

                          <span
                            className={`font-medium ${theme.text} w-full truncate`}
                          >
                            {skill.name}
                          </span>
                        </div>
                      ))}
                    </div>
                  );
                })}
              </div>
            </div>
          </Reveal>
        ) : (
          /* ================= TILE MODE ================= */
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {filteredSkills.map((skill, idx) => (
              <Reveal key={skill.name + activeTab} delay={idx * 50}>
                <div
                  className={`group p-4 rounded-xl border ${theme.cardBorder} ${theme.cardBg} hover:border-orange-500/50 transition-all duration-300 hover:-translate-y-1 flex flex-col items-center gap-3 text-center`}
                  title={skill.name}
                >
                  <div
                    className={`p-3 rounded-full ${theme.bg} ${theme.textMuted} group-hover:${theme.accent} transition-colors`}
                  >
                    {skill.icon}
                  </div>
                  <span
                    className={`font-medium ${theme.text} w-full truncate px-2`}
                  >
                    {skill.name}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        )}

        {isSummary && (
          <Reveal delay={400}>
            <div className="mt-10 flex justify-center">
              <MagneticButton
                onClick={() => setView("skills")}
                className={`px-6 py-3 rounded-full border ${theme.cardBorder} ${theme.cardBg} ${theme.text} hover:${theme.accent} transition-all font-medium`}
              >
                See all skills →
              </MagneticButton>
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
};

export default Skills;
