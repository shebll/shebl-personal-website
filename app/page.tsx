import About from "@/app/components/About";
import Contact from "@/app/components/Contact";
import Divider from "@/app/components/Divider";
import Experience from "@/app/components/Experience";
import Inter from "@/app/components/Inter";
import Projects from "@/app/components/Projects";
import Resume from "@/app/components/Resume";
import Skills from "@/app/components/Skills";

import { siteData } from "@/src/data/site";

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: siteData.personal.name,
  jobTitle: siteData.personal.role,
  url: siteData.siteUrl,
  image: `${siteData.siteUrl}${siteData.personal.image}`,
  email: `mailto:${siteData.personal.email}`,
  address: {
    "@type": "PostalAddress",
    addressLocality: siteData.personal.location,
  },
  sameAs: [
    siteData.social.github,
    siteData.social.linkedin,
    siteData.social.upwork,
  ],
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: siteData.personal.name,
  url: siteData.siteUrl,
  description:
    "Ahmed Shebl is a Frontend Software Engineer specializing in React, Next.js, and TypeScript.",
  author: {
    "@type": "Person",
    name: siteData.personal.name,
    url: siteData.siteUrl,
  },
};

export default function Home() {
  return (
    <main
      id="home"
      className="flex gap-[180px] flex-col px-3 justify-center items-center grainy-bg"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
      />
      <Inter />
      <Divider />
      <About />
      <Divider />
      <Projects />
      <Divider />
      <Skills />
      <Divider />
      <Experience />
      <Divider />
      <Resume />
      <Divider />
      <Contact />
    </main>
  );
}
