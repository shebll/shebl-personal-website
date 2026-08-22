"use client";
import useActiveSectionInView from "@/utils/hooks/useActiveSectionInView";
import { variantsQ } from "@/utils/motion/variants";
import { motion, useScroll, useTransform } from "framer-motion";

import { siteData } from "@/src/data/site";
import { formatAboutParagraph } from "@/src/lib/portfolio";
import HighlightedText from "@/src/components/HighlightedText";

function About() {
  const { refSection } = useActiveSectionInView({
    sectionName: "About",
    amount: 0.5,
  });

  const { about } = siteData;

  const { scrollYProgress } = useScroll({
    target: refSection,
    offset: ["center end", "end 600px"],
  });

  const Q1TranslateX = useTransform(scrollYProgress, [0, 1], ["0px", "240px"]);
  const Q1Rotate = useTransform(scrollYProgress, [0, 1], [3, 26]);
  //////////
  const Q2TranslateX = useTransform(scrollYProgress, [0, 1], ["0px", "-270px"]);
  const Q2Rotate = useTransform(scrollYProgress, [0, 1], [6, -26]);
  //////////
  const Q3TranslateX = useTransform(scrollYProgress, [0, 1], ["20px", "260px"]);
  const Q3Rotate = useTransform(scrollYProgress, [0, 1], [8, -26]);
  //////////
  const Q4TranslateX = useTransform(
    scrollYProgress,
    [0, 1],
    ["-20px", "-300px"],
  );
  const Q4Rotate = useTransform(scrollYProgress, [0, 1], [-28, 26]);
  //////////
  const Q5TranslateX = useTransform(scrollYProgress, [0, 1], ["0px", "290px"]);
  const Q5TranslateY = useTransform(scrollYProgress, [0, 1], ["-80px", "56px"]);
  const Q5Rotate = useTransform(scrollYProgress, [0, 1], [3, -15]);
  //////////

  const questions = [
    {
      text: about.questions[0],
      style: { rotate: Q1Rotate, translateX: Q1TranslateX },
      className: "top-[14%] right-0",
    },
    {
      text: about.questions[1],
      style: { rotate: Q2Rotate, translateX: Q2TranslateX },
      className: "top-[22%] left-0",
    },
    {
      text: about.questions[2],
      style: { rotate: Q3Rotate, translateX: Q3TranslateX },
      className: "top-[40%] right-2",
    },
    {
      text: about.questions[3],
      style: { rotate: Q4Rotate, translateX: Q4TranslateX },
      className: "top-[46%] left-2",
    },
    {
      text: about.questions[4],
      style: {
        rotate: Q5Rotate,
        translateX: Q5TranslateX,
        translateY: Q5TranslateY,
      },
      className: "bottom-[10%] left-10",
    },
  ];

  return (
    <section
      role="region"
      aria-labelledby="about-me-section"
      ref={refSection}
      id="about"
      className="relative flex flex-col items-center justify-center gap-12 scroll-m-28"
    >
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 id="about-me-section" tabIndex={0} className="headerText">
          {about.title}
        </h1>
        <p tabIndex={0} className="subText">
          {about.subtitle}
        </p>
      </div>
      <div className="w-full md:w-[650px] flex flex-col gap-4">
        <h2 className="paragraph dark:!text-gray-50" tabIndex={0}>
          {formatAboutParagraph(about.paragraphs[0])}
        </h2>
        <h3 className="paragraph dark:!text-gray-50" tabIndex={0}>
          <HighlightedText
            text={about.paragraphs[1]}
            highlightedWords={about.highlightedWords}
          />
        </h3>
      </div>
      {/* Parallax questions — desktop only, hidden on mobile for performance */}
      <div className="hidden lg:block">
        {questions.map((q, index) => (
          <motion.p
            key={index}
            variants={variantsQ}
            initial={"hidden"}
            whileInView={"show"}
            style={q.style}
            className={`Question ${q.className}`}
          >
            {q.text}
          </motion.p>
        ))}
      </div>
    </section>
  );
}

export default About;
