import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "../../site-config";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function SiteFooter() {
  const siteName = siteConfig?.footer?.siteName ?? "Pikachu";
  const contact = siteConfig?.footer?.contact ?? {};

  return (
    <footer className="w-full bg-[#f2efe8] border-t border-[#dcd6ca]">
      <div className="mx-auto max-w-6xl px-6 py-10 grid grid-cols-1 sm:grid-cols-[1fr_auto_1.4fr] gap-6 sm:gap-8 sm:items-start">
        {/* Logo block */}
        <div className="flex items-center gap-3">
          <Image
            src="/assets/brand/logo.png"
            alt="Pikachu logo"
            width={48}
            height={48}
            className="h-10 w-auto"
          />
          <span className="font-[family-name:var(--font-display)] text-xl font-bold text-[#1a1917]">
            {siteName}
          </span>
        </div>

        {/* Navigation column */}
        <nav aria-label="Footer navigation">
          <ul className="flex flex-row flex-wrap gap-x-6 gap-y-1 sm:flex-col sm:gap-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm font-semibold text-[#1a1917] hover:text-[#9a3412] transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Description + verified contact facts */}
        <div className="text-sm leading-relaxed text-[#1a1917]">
          <p>
            Pikachu — Pokemon Memorial Site is celebrating Pikachu memorial life
            and memory, fetu and centers related Pokemon causes supporting
            community and memory of Pikachu Memorial Fund.
          </p>
          {"address" in contact && typeof contact.address === "string" && (
            <p className="mt-2">{contact.address}</p>
          )}
          {"hours" in contact && typeof contact.hours === "string" && (
            <p className="mt-1">{contact.hours}</p>
          )}
        </div>
      </div>

      {/* Legal bar */}
      <div className="border-t border-[#dcd6ca]">
        <div className="mx-auto max-w-6xl px-6 py-4">
          <p className="text-xs text-[#1a1917]">
            © 2026 {siteName}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
