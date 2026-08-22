import Link from "next/link";
import Image from "next/image";

import { siteData } from "@/src/data/site";

export default function Footer() {
  const { personal, social } = siteData;
  const year = new Date().getFullYear();

  return (
    <footer className="mb-10 px-4 text-center text-gray-500 text-md pt-20">
      <div className="flex justify-center items-center gap-4 mb-4">
        <Link
          href={social.github}
          target="_blank"
          aria-label="GitHub"
          className="p-2 rounded-full hover:bg-gray-200/60 dark:hover:bg-gray-800/60 transition-colors"
        >
          <Image
            src={"/skillsSVG/icons8-git.svg"}
            alt="GitHub logo"
            width={22}
            height={22}
          />
        </Link>
        <Link
          href={social.linkedin}
          target="_blank"
          aria-label="LinkedIn"
          className="p-2 rounded-full hover:bg-gray-200/60 dark:hover:bg-gray-800/60 transition-colors"
        >
          <Image
            src={"/skillsSVG/icon-linkedin.svg"}
            alt="LinkedIn logo"
            width={22}
            height={22}
          />
        </Link>
        <Link
          href={social.upwork}
          target="_blank"
          aria-label="Upwork"
          className="p-2 rounded-full hover:bg-gray-200/60 dark:hover:bg-gray-800/60 transition-colors"
        >
          <Image
            src={"/skillsSVG/upwork.png"}
            alt="Upwork logo"
            width={22}
            height={22}
          />
        </Link>
      </div>
      <h1 className="mb-4 block">
        &copy; {year} <span className="font-semibold">{personal.name}.</span>{" "}
        All rights reserved.
      </h1>
    </footer>
  );
}
