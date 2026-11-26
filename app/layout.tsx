import type { Metadata } from "next";
import Script from "next/script";
import { Plus_Jakarta_Sans } from "next/font/google";
const wlrPlusJakartaSansInit = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-plus_jakarta_sans" });
import { Inter } from "next/font/google";
const wlrInterInit = Inter({ subsets: ["latin"], variable: "--font-inter" });
import "./globals.css";
import { GeneratedImageryBand } from "../components/generated-imagery-band";
import { SiteMetadataHead } from "./site-metadata";
import SiteHeader from "./components/site-header";
import SiteFooter from "./components/site-footer";
import { analyticsBootstrapScript, bindAnalytics } from "../lib/bind-analytics";

export const metadata: Metadata = {
  title: "Pikachu",
  // A54: the description is the CONTENT-DERIVED one (or absent) — the raw
  // seed brief carried handoff provenance (the C17 text) into the visible
  // meta description of every deployed page; it must never again.
  description: "Pikachu — Pokemon Memorial Site Celebrating Pikachu&apos;s life and memory — sharing memorial tributes, peaceful honors, and a lasting legacy dedicated to Pikachu.",
};

// AN-2 analytics foundation + A55: the measurement id is bound at BUILD time
// from DB truth (a live, owner-accepted integrations row) or the deployment env
// — "" means honestly dormant: dataLayer + gtag shim + wlrTrack still ship and
// bind, gtag.js loads NO module and config fires NEVER. Never fabricated (D-017).
const ga4MeasurementId = "";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  // A Server Component body runs on the server only, so this call is a documented
  // no-op here (bindAnalytics() never touches a window that does not exist — it
  // returns false). The browser binding is the pre-hydration bootstrap below,
  // rendered from the same registry item; AN2_FOUNDATION_PASS executes both
  // renderings and asserts they produce identical dataLayer state. A site that
  // prefers a client-side binding swaps the inline script for a "use client"
  // module calling bindAnalytics() — idempotent either way.
  bindAnalytics();

  return (
    <html lang="en" className={wlrPlusJakartaSansInit.variable + " " + wlrInterInit.variable}>
      <head>
        {/* gtag.js transport — loaded ONLY when a real measurement id exists
            (the registry runtime never fabricates one). */}
        {ga4MeasurementId ? (
          <Script
            id="wlr-gtag-library"
            src={"https://www.googletagmanager.com/gtag/js?id=" + ga4MeasurementId}
            strategy="afterInteractive"
          />
        ) : null}
        {/* Pre-hydration analytics init: dataLayer + gtag() + sticky params +
            window.wlrTrack — what the registry track() shim calls. Inline and
            beforeInteractive so the very first interaction is never lost. */}
        <Script id="wlr-gtag-init" strategy="beforeInteractive">
          {analyticsBootstrapScript({ measurementId: ga4MeasurementId })}
        </Script>
      </head>
      <body>
        {/* A54: build-time metadata — canonical/OG/twitter/JSON-LD from the site's own content. */}
        <SiteMetadataHead />
        <SiteHeader />
        <main>{children}
          {/* A53: imagery GENERATED during the build (R5 image capability, audited) —
              /generated/<slot> bytes are committed beside the app. PLACEMENT RULE
              (live run 4b0380be): the band renders INSIDE <main> after the page's own
              content — it used to be the FIRST <body> child, where ~1900px of collage
              pushed the header below the fold and the visual judge rejected every route. */}
          <GeneratedImageryBand slots={["a53-contact__contact-details-1"]}/></main>
        <SiteFooter />
        {/* ANN-1 targeting agent — inert by default (three-wall gated); the
            platform console wakes it per session with a signed one-time token */}
        <Script src="/wlr-target-agent.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
