import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

import { projectsData } from "@/src/data/projects";
import { siteData } from "@/src/data/site";
import ProjectGallery from "@/src/components/ProjectGallery";

interface ProjectPageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return projectsData.map((project) => ({ slug: project.slug }));
}

export function generateMetadata({ params }: ProjectPageProps): Metadata {
  const project = projectsData.find((p) => p.slug === params.slug);
  if (!project) {
    return { title: "Project Not Found" };
  }

  const title = project.seo?.title ?? `${project.title} — Project Case Study`;
  const description =
    project.seo?.description ??
    `${project.shortDescription} Built with ${project.technologies.join(", ")}.`;
  const ogImage = project.seo?.ogImage ?? project.thumbnail;

  return {
    title,
    description,
    alternates: {
      canonical: `${siteData.siteUrl}/projects/${project.slug}`,
    },
    openGraph: {
      type: "article",
      url: `${siteData.siteUrl}/projects/${project.slug}`,
      title,
      description,
      images: [
        {
          url: `${siteData.siteUrl}${ogImage}`,
          alt: `${project.title} project image`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${siteData.siteUrl}${ogImage}`],
    },
  };
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = projectsData.find((p) => p.slug === params.slug);
  if (!project) {
    notFound();
  }

  const { personal } = siteData;

  return (
    <main className="flex flex-col items-center justify-center gap-16 px-4 pt-32 pb-20 grainy-bg">
      {/* Hero */}
      <section className="flex flex-col items-center w-full max-w-4xl gap-6 text-center">
        <p className="bg-transparent border-[#0b0a1d] dark:border-gray-200 rounded-full border-[1px] py-1 px-6 font-semibold w-fit">
          {project.category}
        </p>
        <h1 className="text-4xl font-bold tracking-tighter uppercase md:text-6xl">
          {project.title}
        </h1>
        <p className="max-w-2xl text-lg font-medium text-gray-600 md:text-xl dark:text-gray-300">
          {project.shortDescription}
        </p>
        <div className="flex flex-wrap justify-center gap-3 text-sm font-semibold text-gray-500 dark:text-gray-400">
          <span>{project.year}</span>
          <span>·</span>
          <span>{project.role}</span>
        </div>
        <div className="flex flex-wrap justify-center gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-sm font-semibold text-white rounded-md skill"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex flex-wrap justify-center gap-3 mt-2">
          {project.links.demo && (
            <a
              href={project.links.demo}
              target="_blank"
              className="btn primary"
            >
              Live Demo
            </a>
          )}
          {project.links.repo && (
            <a href={project.links.repo} target="_blank" className="btn">
              GitHub
            </a>
          )}
          {project.links.linkedin && (
            <a href={project.links.linkedin} target="_blank" className="btn">
              LinkedIn Post
            </a>
          )}
        </div>
        <div className="relative w-full max-w-3xl mt-4 overflow-hidden shadow-2xl aspect-video rounded-2xl">
          <Image
            src={project.thumbnail}
            alt={`${project.title} project preview`}
            fill
            priority
            sizes="(max-width: 768px) 100vw, 768px"
            className="object-cover"
          />
        </div>
      </section>

      {/* Overview */}
      <section className="flex flex-col w-full max-w-3xl gap-4">
        <h2 className="text-2xl font-bold md:text-3xl">Overview</h2>
        <p className="text-lg font-medium leading-relaxed text-gray-600 dark:text-gray-300">
          {project.description}
        </p>
      </section>

      {/* Challenge */}
      <section className="flex flex-col w-full max-w-3xl gap-4">
        <h2 className="text-2xl font-bold md:text-3xl">Challenge</h2>
        <p className="text-lg font-medium leading-relaxed text-gray-600 dark:text-gray-300">
          {project.caseStudy.challenge}
        </p>
      </section>

      {/* Approach / Solution */}
      <section className="flex flex-col w-full max-w-3xl gap-4">
        <h2 className="text-2xl font-bold md:text-3xl">Approach / Solution</h2>
        <p className="text-lg font-medium leading-relaxed text-gray-600 dark:text-gray-300">
          {project.caseStudy.solution}
        </p>
        <p className="text-lg font-medium leading-relaxed text-gray-600 dark:text-gray-300">
          {project.caseStudy.approach}
        </p>
      </section>

      {/* Key Features */}
      {project.highlights.length > 0 && (
        <section className="flex flex-col w-full max-w-3xl gap-4">
          <h2 className="text-2xl font-bold md:text-3xl">Key Features</h2>
          <ul className="flex flex-col gap-3 pl-5 text-lg font-medium text-gray-600 list-disc dark:text-gray-300">
            {project.highlights.map((highlight, i) => (
              <li key={i}>{highlight}</li>
            ))}
          </ul>
        </section>
      )}

      {/* Gallery */}
      {project.images.length > 0 && (
        <section className="flex flex-col w-full max-w-4xl gap-6">
          <h2 className="text-2xl font-bold text-center md:text-3xl">
            Screenshots
          </h2>
          <ProjectGallery images={project.images} title={project.title} />
        </section>
      )}

      {/* Results / Impact */}
      {project.caseStudy.results && (
        <section className="flex flex-col w-full max-w-3xl gap-4">
          <h2 className="text-2xl font-bold md:text-3xl">Results / Impact</h2>
          <p className="text-lg font-medium leading-relaxed text-gray-600 dark:text-gray-300">
            {project.caseStudy.results}
          </p>
        </section>
      )}

      {/* Lessons Learned */}
      {project.caseStudy.lessonsLearned.length > 0 && (
        <section className="flex flex-col w-full max-w-3xl gap-4">
          <h2 className="text-2xl font-bold md:text-3xl">Lessons Learned</h2>
          <ul className="flex flex-col gap-3 pl-5 text-lg font-medium text-gray-600 list-disc dark:text-gray-300">
            {project.caseStudy.lessonsLearned.map((lesson, i) => (
              <li key={i}>{lesson}</li>
            ))}
          </ul>
        </section>
      )}

      {/* Back to projects */}
      <div className="flex justify-center">
        <Link href="/#projects" className="btn">
          ← Back to Projects
        </Link>
      </div>

      {/* JSON-LD structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CreativeWork",
            name: project.title,
            description: project.shortDescription,
            author: {
              "@type": "Person",
              name: personal.name,
              url: siteData.siteUrl,
            },
            url: `${siteData.siteUrl}/projects/${project.slug}`,
            image: `${siteData.siteUrl}${project.thumbnail}`,
            keywords: project.technologies.join(", "),
            datePublished: project.year,
          }),
        }}
      />
    </main>
  );
}
