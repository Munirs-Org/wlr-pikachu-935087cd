/**
 * WlrFooter (registry item: wlr-footer) — the site footer: link columns,
 * contact slot, legal line. Generic STRUCTURE: columns/contact/legal come
 * from the generated site-config (per-site content boundary). Missing
 * config → honest placeholders (a plain copyright line), never a broken
 * footer (D-017). Server component: plain anchors, zero event handlers.
 *
 * A86-F4 (2026-10-09, additive): optional `theme` prop renders the
 * route-aware footer variant the handoff contract declares (ink band vs
 * the light opt-in). Cleared/absent ⇒ token classes byte-identical to the
 * pre-prop output — a contract-less site keeps the last-resort look
 * exactly; never a behavior-removal. Values are closed: only "light" is
 * a real variant; any other value (including "dark", the default look)
 * deliberately returns the SAME token classes so the scaffold wiring
 * never mints a variant by accident (D-017).
 */

export interface WlrFooterLink {
  label: string;
  href: string;
}

export interface WlrFooterColumn {
  title: string;
  links: WlrFooterLink[];
}

export interface WlrFooterProps {
  siteName?: string;
  logoImageSrc?: string | null;
  tagline?: string | null;
  backgroundColor?: string | null;
  columns?: WlrFooterColumn[];
  contact?: { email?: string; phone?: string; address?: string; hours?: string; serviceAreas?: string[] } | null;
  legal?: string | null;
  /** A86-F4: "light" renders the contract's light-variant look; anything
   * else (absent/null/"dark") keeps the default ink-band token classes. */
  theme?: "dark" | "light" | null;
}

function footerThemeClasses(theme: WlrFooterProps["theme"]): string {
  return theme === "light"
    ? "border-t border-[var(--border)] bg-[var(--card)] text-[var(--card-foreground)]"
    : "border-t border-white/10 bg-[var(--background)] text-[var(--foreground)]";
}

export function WlrFooter({
  siteName = "Site Name",
  logoImageSrc = null,
  tagline = null,
  backgroundColor = null,
  columns,
  contact,
  legal,
  theme,
}: WlrFooterProps) {
  const legalLine = legal ?? `© ${new Date().getFullYear()} ${siteName}. All rights reserved.`;
  const isDarkCustom = Boolean(backgroundColor) && theme !== "light";
  const bgStyle = isDarkCustom && backgroundColor ? { backgroundColor } : undefined;
  const headingCls = isDarkCustom ? "text-white" : "text-[var(--foreground)]";
  const linkCls = isDarkCustom ? "text-white/75" : "text-[var(--muted-foreground)]";
  const hoverCls = isDarkCustom ? "hover:text-white" : "hover:text-[var(--foreground)]";
  const borderCls = isDarkCustom ? "border-white/10" : "border-[var(--border)]";
  const legalCls = isDarkCustom ? "text-white/60" : "text-[var(--muted-foreground)]";
  return (
    <footer
      data-wlr-id="wlr-footer"
      data-footer-theme={theme ?? "default"}
      className={footerThemeClasses(theme)}
      style={bgStyle}
    >
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="mb-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
          {(logoImageSrc || tagline) ? (
            <div className="lg:col-span-2 space-y-3">
              {logoImageSrc ? (
                <img src={logoImageSrc} alt={`${siteName} logo`} className="h-10 w-auto max-w-[180px] object-contain" />
              ) : (
                <p className={`text-base font-semibold ${headingCls}`}>{siteName}</p>
              )}
              {tagline ? <p className={`max-w-sm text-sm leading-relaxed ${linkCls}`}>{tagline}</p> : null}
              {contact?.serviceAreas && contact.serviceAreas.length > 0 ? (
                <p className={`text-xs ${legalCls}`}>Serving: {contact.serviceAreas.join(" · ")}</p>
              ) : null}
            </div>
          ) : null}
          {columns && columns.length > 0 ? (
            <>
              {columns.map((column) => (
                <div key={column.title}>
                  <p className={`mb-3 text-sm font-semibold tracking-wide ${headingCls}`}>{column.title}</p>
                  <ul className={`space-y-2 text-sm ${linkCls}`}>
                    {column.links.map((link) => (
                      <li key={`${column.title}:${link.href}:${link.label}`}>
                        <a href={link.href} className={`transition-colors ${hoverCls}`}>
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </>
          ) : null}
        </div>
        {contact && (contact.email || contact.phone || contact.address || contact.hours) ? (
          <div className={`mb-8 flex flex-wrap gap-x-8 gap-y-2 border-t ${borderCls} pt-6 text-sm ${linkCls}`}>
            {contact.phone ? <p>Phone: <a href={`tel:${contact.phone.replace(/[^+\d]/g, "")}`} className={hoverCls}>{contact.phone}</a></p> : null}
            {contact.email ? <p>Email: <a href={`mailto:${contact.email}`} className={hoverCls}>{contact.email}</a></p> : null}
            {contact.address ? <p>HQ: {contact.address}</p> : null}
            {contact.hours ? <p>Hours: {contact.hours}</p> : null}
          </div>
        ) : null}
        <p className={`border-t ${borderCls} pt-6 text-xs ${legalCls}`}>{legalLine}</p>
      </div>
    </footer>
  );
}
