import type { ReactNode } from "react";
import { Button } from "../ui/button";
import { track } from "../../hooks/use-analytics";

/**
 * Hero Block (registry item: hero-block) — page hero section composing
 * button + use-analytics + wlr-theme (sync resolves + copies all four).
 * Imports are RELATIVE so the block is alias-agnostic in any Next.js
 * project. Action clicks record a navigation_interaction event (no PII).
 *
 * A89/F5: Button API is the OFFICIAL shadcn/ui cva contract
 * (default/secondary/destructive/outline/ghost/link ×
 * default/xs/sm/lg/icon) — the staged components/ui/button.tsx is the
 * official file (official-wins dedupe), so the WLR-era variant="primary"
 * no longer exists. primary → default (same bg-primary intent).
 */

export interface HeroBlockProps {
  headline: ReactNode;
  subheadline?: ReactNode;
  primaryAction?: { label: string; href?: string };
  secondaryAction?: { label: string; href?: string };
}

export function HeroBlock({ headline, subheadline, primaryAction, secondaryAction }: HeroBlockProps) {
  return (
    // ANN-1.2 anchor: stable element identity for the targeting agent (A2)
    <section
      data-wlr-id="wlr-hero-block"
      className="flex min-h-[60vh] flex-col items-center justify-center gap-6 bg-[var(--background)] px-6 py-16 text-center text-[var(--foreground)]"
    >
      <h1 className="max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl">{headline}</h1>
      {subheadline ? (
        <p className="max-w-2xl text-base text-[var(--muted-foreground)] sm:text-lg">{subheadline}</p>
      ) : null}
      {primaryAction || secondaryAction ? (
        <div className="flex flex-wrap items-center justify-center gap-3">
          {primaryAction ? (
            <Button
              variant="default"
              size="lg"
              onClick={() => track("navigation_interaction", { action: "hero_primary", href: primaryAction.href ?? null })}
            >
              {primaryAction.label}
            </Button>
          ) : null}
          {secondaryAction ? (
            <Button
              variant="outline"
              size="lg"
              onClick={() => track("navigation_interaction", { action: "hero_secondary", href: secondaryAction.href ?? null })}
            >
              {secondaryAction.label}
            </Button>
          ) : null}
        </div>
      ) : null}
    </section>
  );
}
