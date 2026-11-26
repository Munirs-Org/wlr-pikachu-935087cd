import type { MetadataRoute } from "next";

// A33: PLATFORM-OWNED file (scaffold, never model output). Allows all crawling
// and points crawlers at the sitemap. Blocking rules are per-site SEO strategy
// (seo-qa A02), never scaffold policy.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://wlr-pikachu-935087cd.vercel.app/sitemap.xml",
  };
}
