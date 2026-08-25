import { MetadataRoute } from "next";

import { projectsData } from "@/src/data/projects";
import { siteData } from "@/src/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const projectUrls = projectsData.map((project) => ({
    url: `${siteData.siteUrl}/projects/${project.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: siteData.siteUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    ...projectUrls,
  ];
}
