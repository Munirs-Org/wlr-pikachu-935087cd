import Link from "next/link";
import { siteConfig } from "../../site-config";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function SiteFooter() {
  const contact = siteConfig.footer?.contact ?? {};
  const siteName = siteConfig.footer?.siteName ?? siteConfig.header?.siteName ?? "Pikachu";
  const copyright = siteConfig.footer?.legal ?? "Copyright © 2022 · Privacy Policy";

  return (
    <footer className="w-full bg-[#f2efe8] border-t border-[#dcd6ca]">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-8">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <Link href="/" className="flex items-center gap-3">
              <span className="flex h-10 w-10 flex-col overflow-hidden rounded-[6px]">
                <span className="h-1/2 w-full bg-[#1a1917]" />
                <span className="h-1/2 w-full bg-[#9a3412]" />
              </span>
              <span className="font-display text-2xl font-bold tracking-tight text-[#1a1917]">
                {siteName}
              </span>
            </Link>
          </div>

          {/* Navigation */}
          <nav aria-label="Footer navigation">
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm font-medium text-[#9a3412] hover:underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Description / contact facts */}
          <div className="text-sm leading-relaxed text-[#1a1917]">
            <p>
              {siteName} — Pokemon Memorial Site is celebrating Pikachu memorial life and memory,
              fest and centers related Pokemon causes supporting community and memory of{" "}
              {siteName} Memorial Fund.
            </p>
            {contact.address ? (
              <p className="mt-3 text-sm text-[#1a1917]">{contact.address}</p>
            ) : null}
            {contact.phone ? (
              <p className="mt-1 text-sm text-[#1a1917]">{contact.phone}</p>
            ) : null}
            {contact.email ? (
              <p className="mt-1 text-sm text-[#1a1917]">{contact.email}</p>
            ) : null}
            {contact.hours ? (
              <p className="mt-1 text-sm text-[#1a1917]">{contact.hours}</p>
            ) : null}
            {contact.serviceAreas ? (
              <p className="mt-1 text-sm text-[#1a1917]">{contact.serviceAreas}</p>
            ) : null}
          </div>
        </div>

        <div className="mt-10 border-t border-[#dcd6ca] pt-5">
          <p className="text-xs text-[#1a1917]/80">{copyright}</p>
        </div>
      </div>
    </footer>
  );
}
