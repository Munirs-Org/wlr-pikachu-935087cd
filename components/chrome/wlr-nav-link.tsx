"use client";

/**
 * WlrNavLink (A87-G4) — ONE client leaf inside the otherwise server-rendered
 * nav: the only way a Next.js layout can know the current route is on the
 * client (usePathname), and the handoff chrome contract's active-route rule
 * ("1px rule under the active link") must actually RENDER — the A87 postmortem
 * found /collection served without aria-current, so F4's active-route behavior
 * was never provable in the DOM. Hydration cost is one tiny component per
 * anchor; the label/href still come from the generated site-config.
 */
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { WlrNavLink as WlrNavLinkShape } from "./wlr-nav";

export function WlrNavLink({ link }: { link: WlrNavLinkShape }) {
  const pathname = usePathname();
  const active = link.href === "/" ? pathname === "/" : pathname === link.href || pathname.startsWith(`${link.href}/`);
  return (
    <Link
      href={link.href}
      data-wlr-id="wlr-nav"
      aria-current={active ? "page" : undefined}
      data-active={active ? "true" : undefined}
      className={`transition-colors hover:text-[var(--foreground)] ${active ? "text-[var(--foreground)] underline decoration-[var(--foreground)] decoration-1 underline-offset-4" : ""}`}
    >
      {link.label}
    </Link>
  );
}
