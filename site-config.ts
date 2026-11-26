/**
 * site-config — the per-site content boundary (spec §3.2, Q9): chrome
 * components are generic STRUCTURE owned by the registry; everything a
 * visitor reads (nav links, logo, CTA, footer columns, contact) lives HERE.
 * Edit this file for site-wide content changes. Placeholder structure is
 * honest by design (D-017) — fill it with real site content, never fake data.
 */
const REGISTRY_SYNC_ITEMS = [
  "wlr-theme",
  "use-analytics",
  "bind-analytics",
  "button",
  "card",
  "hero-block",
  "wlr-header",
  "wlr-nav",
  "wlr-footer",
  "wlr-themed-footer",
] as const;
import type { WlrFooterProps } from "./components/chrome/wlr-footer";
import type { WlrHeaderProps } from "./components/chrome/wlr-header";

export interface SiteConfig {
  header: WlrHeaderProps;
  footer: WlrFooterProps & { footerVariants?: string[] };
}

export const siteConfig: SiteConfig = {
  header: {
    siteName: "Pikachu",
    logoImageSrc: "/assets/brand/logo.png",
    nav: { links: [{"label":"Home","href":"/"},{"label":"About","href":"/about"},{"label":"Contact","href":"/contact"}] },
    cta: {"label":"Donate","href":"/contact","action":"navigate","target":"/contact","variant":"pill"},
    headerBackground: "#faf8f4",
    navAlignment: "center",
  },
  footer: {
    siteName: "Pikachu",
    columns: [{"title":"Navigation","links":[{"label":"Home","href":"/"},{"label":"About","href":"/about"},{"label":"Contact","href":"/contact"}]}],
    footerVariants: [],
    backgroundColor: "#f2efe8",
    logoImageSrc: "/assets/brand/logo.png",
    contact: {},
    legal: "© 2026 Pikachu. All rights reserved.",
  },
};
