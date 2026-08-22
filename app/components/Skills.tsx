"use client";
import { skillsData } from "@/src/data/skills";
import useActiveSectionInView from "@/utils/hooks/useActiveSectionInView";

function Skills() {
  const { refSection } = useActiveSectionInView({
    sectionName: "Skills",
    amount: 0.5,
  });
  return (
    <section
      role="region"
      aria-labelledby="skills-section"
      ref={refSection}
      id="skills"
      className="flex justify-center items-center flex-col gap-12 scroll-m-28 max-w-[1400px] w-full px-4"
    >
      <div className="flex justify-center items-center flex-col gap-3">
        <h1 id="skills-section" className="headerText" tabIndex={0}>
          Skills
        </h1>
        <h2 className="subText" tabIndex={0}>
          My All Skills In Related Field And Fundamentals .
        </h2>
      </div>
      <div className="flex gap-6 justify-center items-stretch flex-col lg:flex-row w-full">
        {skillsData.map((track, index) => (
          <div
            tabIndex={0}
            key={index}
            className="flex gap-8 justify-start items-center flex-col flex-1
            flex-wrap rounded-md shadow-xl bg-gray-200 px-8 py-10 dark:bg-[#17181c]"
          >
            <div className="flex gap-4 justify-center items-center flex-col">
              <h3 className="text-3xl font-bold" tabIndex={0}>
                {track.name}
              </h3>
              <p className="text-lg font-medium text-gray-500" tabIndex={0}>
                {track.description}
              </p>
            </div>
            <ul className="flex flex-row flex-wrap gap-4 justify-center">
              {track.skills.map((skill, index) => (
                <li
                  key={index}
                  className="skill px-3 py-2 rounded-md text-white font-semibold"
                  tabIndex={0}
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
