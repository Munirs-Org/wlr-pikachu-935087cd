/**
 * WlrNav (registry item: wlr-nav) — the site navigation menu.
 * Generic STRUCTURE: links come from the generated site-config (per-site
 * content boundary). Missing/empty links → honest placeholder (a single
 * "Home" link), never a broken nav (D-017).
 * A87-G4: each link renders through WlrNavLink (a minimal client leaf) so
 * the ACTIVE route carries aria-current="page" — the handoff chrome
 * contract's active-route rule must be observable in the served DOM, not
 * just declared in the contract (A87 postmortem finding on /collection).
 */

import { WlrNavLink } from "./wlr-nav-link";

export interface WlrNavLink {
  label: string;
  href: string;
}

export interface WlrNavProps {
  links?: WlrNavLink[];
}

export function WlrNav({ links }: WlrNavProps) {
  const items: WlrNavLink[] = links && links.length > 0 ? links : [{ label: "Home", href: "/" }];
  return (
    <nav
      data-wlr-id="wlr-nav"
      aria-label="Main navigation"
      className="flex flex-wrap items-center gap-4 text-sm text-[var(--muted-foreground)]"
    >
      {items.map((link) => (
        <WlrNavLink key={`${link.href}:${link.label}`} link={link} />
      ))}
    </nav>
  );
}
