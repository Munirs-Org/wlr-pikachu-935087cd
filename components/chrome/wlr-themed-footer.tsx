"use client";

/**
 * A86-F4 (2026-10-09) — route-aware footer theme picker. The layout is a
 * server component and cannot know the current route, so — exactly like the
 * nav's WlrNavLink leaf — one minimal client leaf reads the pathname and
 * passes the contract's declared theme to the (server) footer. No SiteConfig
 * / footer changes otherwise; a footer with no declared variants keeps the
 * default ink band everywhere. Values are contract-DECLARED only (D-017):
 * a route absent from the record never gets a variant by accident.
 */
import { usePathname } from "next/navigation";
import { WlrFooter, type WlrFooterProps } from "./wlr-footer";

export function ThemedFooter({ footer, lightRoutes }: { footer: WlrFooterProps; lightRoutes: readonly string[] }) {
  const pathname = usePathname() ?? "/";
  const light = lightRoutes.some((r) => (r === "/" ? pathname === "/" : pathname === r || pathname.startsWith(`${r}/`)));
  return <WlrFooter {...footer} theme={light ? "light" : "dark"} />;
}
