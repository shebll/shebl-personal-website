import type { Project as ProjectType } from "@/src/types/portfolio";
import { motion, MotionValue, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

type props = {
  project: ProjectType;
  index: number;
  range: number[];
  target: number;
  progress: MotionValue<number>;
};

interface CSSProperties extends React.CSSProperties {
  "--tag-count"?: number;
}

function Project({ project, index, range, target, progress }: props) {
  const style: CSSProperties = {
    "--tag-count": project.technologies.length,
  };

  const cardRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "start 60px"],
  });
  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const imageBlur = useTransform(scrollYProgress, [0, 1], [4, 0]);
  const imageFilter = useTransform(imageBlur, (value) => `blur(${value}px)`);
  const scale = useTransform(progress, range, [1, target]);

  return (
    <motion.section
      style={{
        scale,
        top: `${60 + index * 30}px`,
      }}
      role="region"
      aria-label="project"
      ref={cardRef}
      className="group projectCard flex flex-col md:flex-row-reverse md:even:flex-row gap-2 md:w-[800px] lg:w-[1200px] overflow-hidden
      bg-gray-200 rounded-2xl shadow-2xl transition-all dark:bg-[#17181c] items-center sticky border-[2px] border-[#c2c2c2a2] dark:border-[#26272ea1]"
    >
      <div className="flex flex-col justify-start flex-1 gap-6 px-6 py-10 md:px-10 md:py-14">
        <p className="bg-transparent border-white rounded-full border-[1px] py-1 px-6 font-semibold w-fit">
          {project.category}
        </p>
        <h1 className="text-2xl font-bold uppercase md:text-3xl" tabIndex={0}>
          {project.title}
        </h1>
        <p
          className="text-base font-medium md:text-lg dark:text-gray-300"
          tabIndex={0}
        >
          {project.shortDescription}
        </p>
        <div className="slider" style={style}>
          <ul className="slider-track">
            {project.technologies.map((skill, index) => (
              <li key={index} tabIndex={0} className="slide">
                {skill}
              </li>
            ))}
            {project.technologies.map((skill, index) => (
              <li key={index + 20} tabIndex={0} className="slide">
                {skill}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col gap-4 mt-5 md:flex-row">
          {project.links.demo && (
            <a
              href={project.links.demo}
              target="_blank"
              className="btn primary dark:bg-black/[0.7]"
            >
              live Demo
              <Image
                src={"/skillsSVG/linkLogo.png"}
                alt="linkLogo"
                width={22}
                height={22}
              />
            </a>
          )}
          {project.links.repo && (
            <a href={project.links.repo} target="_blank" className="btn">
              Repo{" "}
              <Image
                src={"/skillsSVG/git2logo.png"}
                alt="Git logo"
                width={22}
                height={22}
              />{" "}
            </a>
          )}
          {project.links.linkedin && (
            <a href={project.links.linkedin} target="_blank" className="btn">
              LinkedIn Post
            </a>
          )}
          <Link href={`/projects/${project.slug}`} className="btn">
            Case Study
          </Link>
        </div>
      </div>
      <motion.div
        style={{
          opacity: scrollYProgress,
          filter: imageFilter,
        }}
        className="relative flex-1 hidden m-4 overflow-hidden shadow-2xl md:block rounded-2xl h-[300px]"
      >
        <motion.div style={{ scale: imageScale }}>
          <Image
            src={project.thumbnail}
            alt={`${project.title} project image`}
            width={560}
            height={560}
            className="absolute w-full transition-all"
          />
        </motion.div>
      </motion.div>
    </motion.section>
  );
}

export default Project;
