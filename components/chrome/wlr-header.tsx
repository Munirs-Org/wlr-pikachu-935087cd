"use client";

/**
 * WlrHeader (registry item: wlr-header) — the site masthead: optional top utility
 * bar, logo slot (image / text), wlr-nav composition with responsive mobile toggle,
 * and CTA button (supporting modal triggers via wlr:open-quote or route navigation).
 */
import { useState } from "react";
import { Button } from "../ui/button";
import { track } from "../../hooks/use-analytics";
import { WlrNav, type WlrNavProps } from "./wlr-nav";

export interface WlrHeaderProps {
  siteName?: string;
  logoImageSrc?: string | null;
  nav?: WlrNavProps;
  cta?: {
    label: string;
    href: string;
    action?: "open_modal" | "navigate" | string;
    target?: string;
    variant?: string;
  } | null;
  topBar?: {
    background?: string;
    phone?: string;
    email?: string;
    promoText?: string;
  } | null;
  headerBackground?: string | null;
  navAlignment?: "left" | "center" | "right";
  sticky?: boolean;
}

export function WlrHeader({
  siteName = "Site Name",
  logoImageSrc = null,
  nav,
  cta,
  topBar = null,
  headerBackground = null,
  navAlignment = "center",
  sticky = true,
}: WlrHeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleCtaClick = () => {
    if (!cta) return;
    track("navigation_interaction", { action: "header_cta", href: cta.href });
    if (cta.action === "open_modal") {
      if (typeof window !== "undefined") {
        window.dispatchEvent(new CustomEvent("wlr:open-quote", { detail: { target: cta.target ?? "popup-get-a-quote" } }));
      }
      return;
    }
    if (typeof window !== "undefined") window.location.assign(cta.href);
  };

  const ctaControl = cta ? (
    <Button
      size="sm"
      className="rounded-full bg-[var(--primary)] px-5 py-2.5 text-sm font-semibold text-white hover:opacity-90"
      onClick={handleCtaClick}
    >
      <span>{cta.label}</span>
      <svg aria-hidden="true" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
      </svg>
    </Button>
  ) : null;

  const mobileToggleButton = (
    <button
      type="button"
      aria-label="Toggle navigation menu"
      aria-expanded={mobileOpen}
      onClick={() => setMobileOpen((prev) => !prev)}
      className="inline-flex items-center justify-center rounded-md border border-white/20 p-2 text-current md:hidden"
    >
      <svg aria-hidden="true" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        {mobileOpen ? (
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        ) : (
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
        )}
      </svg>
    </button>
  );

  return (
    <header
      data-wlr-id="wlr-header"
      className={`${sticky ? "sticky top-0 z-50 [transform:translateZ(0)] isolate " : ""}border-b border-white/10 text-[var(--foreground)]`}
      style={headerBackground ? { backgroundColor: headerBackground } : { backgroundColor: "var(--background)" }}
    >
      {topBar && (topBar.phone || topBar.email || topBar.promoText) ? (
        <div
          className="w-full text-xs text-white/95"
          style={{ backgroundColor: topBar.background ?? "#3871b0" }}
        >
          <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-6 py-2">
            <div className="flex flex-wrap items-center gap-4">
              {topBar.phone ? (
                <a href={`tel:${topBar.phone.replace(/[^+\d]/g, "")}`} className="font-medium hover:underline">
                  {topBar.phone}
                </a>
              ) : null}
              {topBar.email ? (
                <a href={`mailto:${topBar.email}`} className="hover:underline">
                  {topBar.email}
                </a>
              ) : null}
            </div>
            {topBar.promoText ? <span className="text-white/90">{topBar.promoText}</span> : null}
          </div>
        </div>
      ) : null}
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-6 py-3.5">
        <a href="/" className="flex items-center gap-3 text-base font-semibold tracking-tight">
          {logoImageSrc ? (
            <img src={logoImageSrc} alt={`${siteName} logo`} className="h-10 w-auto max-w-[180px] object-contain" />
          ) : (
            <span>{siteName}</span>
          )}
        </a>
        {navAlignment === "right" ? (
          <div className="ml-auto flex items-center gap-6">
            <div className="hidden md:flex items-center gap-6">
              <WlrNav links={nav?.links} />
            </div>
            <div className="flex items-center gap-3">
              {ctaControl}
              {mobileToggleButton}
            </div>
          </div>
        ) : (
          <>
            <div className={`hidden md:flex items-center gap-6${navAlignment === "left" ? " mr-auto ml-6" : ""}`}>
              <WlrNav links={nav?.links} />
            </div>
            <div className="flex items-center gap-3">
              {ctaControl}
              {mobileToggleButton}
            </div>
          </>
        )}
      </div>
      {mobileOpen ? (
        <div className="border-t border-white/10 px-6 py-4 md:hidden">
          <WlrNav links={nav?.links} />
        </div>
      ) : null}
    </header>
  );
}
