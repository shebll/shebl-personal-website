"use client";
import { experiencesData } from "@/src/data/experience";
import useActiveSectionInView from "@/utils/hooks/useActiveSectionInView";

function Experience() {
  const { refSection } = useActiveSectionInView({
    sectionName: "Experience",
    amount: 0.2,
  });
  return (
    <section
      role="region"
      aria-label="Experiences"
      ref={refSection}
      id="experience"
      className="flex flex-col justify-center items-center gap-12 scroll-m-28 w-full max-w-[900px]"
    >
      <div className="flex justify-center items-center flex-col gap-3">
        <h1 className="headerText" tabIndex={0}>
          Experience
        </h1>
        <h2 className="subText" tabIndex={0}>
          My All Experience Over one single year .
        </h2>
      </div>
      <div className="flex flex-col justify-center gap-8 w-full px-4 md:px-0">
        {experiencesData.map((item, index) => (
          <div
            key={index}
            className="flex flex-col gap-3 rounded-md shadow-xl bg-gray-200 px-6 py-8 md:px-8 md:py-10 dark:bg-[#17181c] border-l-4 border-[#2f70f1]"
          >
            <h3 className="text-2xl font-semibold" tabIndex={0}>
              {item.title}
            </h3>
            <p
              className="text-lg font-medium text-gray-500 dark:text-gray-300"
              tabIndex={0}
            >
              {item.company} · {item.location}
            </p>
            <p
              className="font-semibold text-sm text-gray-500 dark:text-gray-400"
              tabIndex={0}
            >
              {item.date}
            </p>
            <p
              className="text-base font-medium text-gray-600 dark:text-gray-300"
              tabIndex={0}
            >
              {item.description}
            </p>
            {item.bullets.length > 0 && (
              <ul className="flex flex-col gap-2 list-disc pl-5 text-gray-600 dark:text-gray-300">
                {item.bullets.map((bullet, i) => (
                  <li key={i} className="text-base">
                    {bullet}
                  </li>
                ))}
              </ul>
            )}
            {item.technologies.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-2">
                {item.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 rounded-md text-sm font-semibold text-white skill"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
