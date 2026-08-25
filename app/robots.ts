import { MetadataRoute } from "next";

import { siteData } from "@/src/data/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${siteData.siteUrl}/sitemap.xml`,
  };
}
