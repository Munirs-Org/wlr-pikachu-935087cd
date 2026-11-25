// A54: build-time site metadata — derived from the site's own built content
// (never the seo_intake draft, never handoff provenance). Fields absent at
// derivation render NOTHING (honest omission, D-017).

// RUN 4f4f4376 (2026-09-30): the old emitter narrowed META with "as const", so
// an ABSENT field could not even be guarded-accessed — the first build with an
// origin shipped canonical/jsonLd but no description, and Next's typecheck died
// on "Property 'description' does not exist". The generated component's META
// carries the full optional STRUCTURE, never a literal narrowing.
interface SiteMetaShape {
  title?: string;
  description?: string;
  canonical?: string;
  openGraph?: { title: string; description: string; url: string; type: string };
  twitter?: { card: string; title: string; description: string };
  jsonLd?: Record<string, unknown>;
}

const META: SiteMetaShape = {
  "title": "Pikachu",
  "description": "Pikachu — Pokemon Memorial Site Celebrating Pikachu&apos;s life and memory — sharing memorial tributes, peaceful honors, and a lasting legacy dedicated to Pikachu.",
  "canonical": "https://wlr-pikachu-935087cd.vercel.app/",
  "openGraph": {
    "title": "Pikachu",
    "description": "Pikachu — Pokemon Memorial Site Celebrating Pikachu&apos;s life and memory — sharing memorial tributes, peaceful honors, and a lasting legacy dedicated to Pikachu.",
    "url": "https://wlr-pikachu-935087cd.vercel.app/",
    "type": "website"
  },
  "twitter": {
    "card": "summary",
    "title": "Pikachu",
    "description": "Pikachu — Pokemon Memorial Site Celebrating Pikachu&apos;s life and memory — sharing memorial tributes, peaceful honors, and a lasting legacy dedicated to Pikachu."
  },
  "jsonLd": {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Pikachu",
    "url": "https://wlr-pikachu-935087cd.vercel.app/",
    "description": "Pikachu — Pokemon Memorial Site Celebrating Pikachu&apos;s life and memory — sharing memorial tributes, peaceful honors, and a lasting legacy dedicated to Pikachu."
  }
};

export function SiteMetadataHead() {
  return (
    <>
      {META.canonical ? <link rel="canonical" href={META.canonical} /> : null}
      {META.description ? <meta name="description" content={META.description} /> : null}
      {META.openGraph ? (
        <>
          <meta property="og:title" content={META.openGraph.title} />
          <meta property="og:description" content={META.openGraph.description} />
          <meta property="og:url" content={META.openGraph.url} />
          <meta property="og:type" content={META.openGraph.type} />
        </>
      ) : null}
      {META.twitter ? (
        <>
          <meta name="twitter:card" content={META.twitter.card} />
          <meta name="twitter:title" content={META.twitter.title} />
          <meta name="twitter:description" content={META.twitter.description} />
        </>
      ) : null}
      {META.jsonLd ? <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(META.jsonLd) }} /> : null}
    </>
  );
}
