"use client";
import useActiveSectionInView from "@/utils/hooks/useActiveSectionInView";
import { m, motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import React, { useRef } from "react";

import { siteData } from "@/src/data/site";

function Resume() {
  const { refSection } = useActiveSectionInView({
    sectionName: "Resume",
    amount: 0.1,
  });

  const { cv } = siteData;

  const refText = useRef(null);
  const { scrollYProgress: s1 } = useScroll({
    target: refText,
    offset: ["center end", "end 600px"],
  });
  const { scrollYProgress: s12 } = useScroll({
    target: refText,
  });

  const rotate = useTransform(s12, [0, 1], [0, 20]);
  const scale2 = useTransform(s1, [0, 1], [0.7, 1]);
  const translate = useTransform(s1, [0, 1], ["-300px", "20px"]);

  const refImg2 = useRef(null);
  const { scrollYProgress: s2 } = useScroll({
    target: refImg2,
    offset: ["center end", "end 1200px"],
  });
  const refImg3 = useRef(null);
  const { scrollYProgress: s3 } = useScroll({
    target: refImg3,
    offset: ["start 100px", "end 300px"],
  });
  const { scrollYProgress: s4 } = useScroll({
    target: refImg3,
    offset: ["700px end", "-100px start"],
  });
  const scale = useTransform(s1, [0, 1], [1, 0.5]);
  const transform = useTransform(s1, [0, 1], ["0px", "900px"]);

  const transformZ2 = useTransform(s2, [0, 1], [-100, 0]);
  const transformZ3 = useTransform(s3, [0, 1], [-100, 0]);
  const transformZ4 = useTransform(s4, [0, 1], [0, 1]);

  return (
    <section
      id="resume"
      className="relative resumeSection"
      ref={refSection}
      style={{
        perspective: "1000px",
      }}
    >
      {/* Desktop 3D CV animation */}
      <motion.div
        className="relative z-10 hidden cv md:block"
        ref={refImg2}
        style={{ scale: scale, translateY: transform }}
      >
        <div className="relative z-20 front">
          <Image
            src={"/personalImages/11.jpg"}
            alt="Ahmed Shebl resume preview"
            width={900}
            height={700}
            quality={92}
          />
        </div>
        <div className="subCv dark:bg-[#090c13] bg-[#f9fafb] z-10 relative">
          <motion.div
            className="origin-top middle"
            style={{ rotateX: transformZ2 }}
            ref={refImg3}
          >
            <Image
              src={"/personalImages/22.jpg"}
              alt="Ahmed Shebl resume preview"
              width={900}
              height={700}
              quality={92}
            />
          </motion.div>
        </div>
        <motion.div
          className="relative z-0 origin-top final"
          style={{ rotateX: transformZ3 }}
        >
          <Image
            src={"/personalImages/33.jpg"}
            alt="Ahmed Shebl resume preview"
            width={900}
            height={700}
            quality={92}
          />
        </motion.div>
      </motion.div>
      <div
        ref={refText}
        className="downloadCv text-gray-500 text-4xl md:text-7xl font-bold flex flex-col justify-center items-center gap-4 uppercase mt-[70px] md:mt-[200px] z-20 relative text-center"
      >
        A little
        <br />
        memory!
        <a className="btn primary" href={cv.url} download={true}>
          {cv.downloadLabel}
        </a>
      </div>
      {/* Mobile CV preview — simpler, no heavy 3D animation */}
      <motion.div
        style={{
          rotateX: rotate,
          scale: scale2,
          translateY: translate,
        }}
        className="block md:hidden mx-auto border-4 border-[#6C6C6C] p-2 md:p-6 bg-[#222222] rounded-[30px] shadow-2xl relative z-20"
      >
        <Image
          src={"/personalImages/Ahmed_ResumeH1.jpg"}
          alt="Ahmed Shebl resume preview"
          width={900}
          height={700}
          quality={92}
          className="rounded-[20px]"
        />
      </motion.div>
    </section>
  );
}

export default Resume;
