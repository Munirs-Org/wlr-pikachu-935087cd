import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "../../site-config";

export default function SiteFooter() {
  const contact = siteConfig.footer?.contact;

  return (
    <footer className="w-full bg-[#f2efe8] border-t border-[#dcd6ca]">
      <div className="mx-auto max-w-6xl px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Logo block */}
        <div className="flex items-center gap-3">
          <Link href="/" className="flex items-center gap-3">
            <span className="flex items-end gap-1">
              <span className="block h-6 w-4 rounded-sm bg-[#9a3412]" />
              <span className="flex flex-col gap-1">
                <span className="block h-4 w-5 rounded-sm bg-[#1a1917]" />
                <span className="block h-4 w-5 rounded-sm bg-[#9a3412]/70" />
              </span>
            </span>
            <span className="font-display text-xl font-bold text-[#1a1917]">
              {siteConfig.footer?.siteName ?? "Pikachu"}
            </span>
          </Link>
          {contact?.address ? (
            <p className="text-sm text-[#1a1917]/70">{contact.address}</p>
          ) : null}
        </div>

        {/* Navigation column */}
        <nav aria-label="Footer">
          <ul className="space-y-2">
            {[
              { label: "Home", href: "/" },
              { label: "About", href: "/about" },
              { label: "Contact", href: "/contact" },
            ].map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={
                    link.label === "Home"
                      ? "text-[#9a3412] font-medium hover:underline"
                      : "text-[#1a1917] font-medium hover:text-[#9a3412]"
                  }
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          {contact?.email ? (
            <p className="mt-3 text-sm text-[#1a1917]/70">{contact.email}</p>
          ) : null}
          {contact?.phone ? (
            <p className="text-sm text-[#1a1917]/70">{contact.phone}</p>
          ) : null}
        </nav>

        {/* Mission blurb */}
        <p className="text-sm leading-relaxed text-[#1a1917]/80">
          Pikachu — Pokemon Memorial Site to celebrating Pikachu memorial life
          and memory, festu and centors rated Pokemon causes supeing, community
          and memory of Pikachu Memorial Fund.
        </p>
      </div>

      <div className="border-t border-[#dcd6ca]">
        <div className="mx-auto max-w-6xl px-6 py-4 flex items-center gap-4 text-sm text-[#1a1917]/70">
          <span>
            {siteConfig.footer?.legal ??
              "© 2026 Pikachu. All rights reserved."}
          </span>
        </div>
      </div>
    </footer>
  );
}
