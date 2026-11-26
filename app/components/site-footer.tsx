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

  return (
    <footer className="w-full bg-[#f2efe8] border-t border-[#dcd6ca]">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          {/* Logo / brand */}
          <div className="flex items-center gap-3">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/brand/logo.png"
              alt={`${siteName} logo`}
              className="h-10 w-10"
            />
            <span className="font-display text-xl font-bold text-[#1a1917]">
              {siteName}
            </span>
          </div>

          {/* Navigation column */}
          <div>
            <h3 className="text-sm font-semibold text-[#9a3412] mb-3">Navigation</h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#1a1917] hover:text-[#9a3412] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact / description column */}
          <div className="text-sm text-[#1a1917] space-y-2">
            {"email" in contact && contact.email ? (
              <p>
                <a href={`mailto:${contact.email}`} className="hover:text-[#9a3412] transition-colors">
                  {contact.email}
                </a>
              </p>
            ) : null}
            {"phone" in contact && contact.phone ? (
              <p>
                <a href={`tel:${contact.phone}`} className="hover:text-[#9a3412] transition-colors">
                  {contact.phone}
                </a>
              </p>
            ) : null}
            {"address" in contact && contact.address ? (
              <p>{contact.address}</p>
            ) : null}
            {"hours" in contact && contact.hours ? (
              <p>{contact.hours}</p>
            ) : null}
            {"serviceAreas" in contact && contact.serviceAreas ? (
              <p>{contact.serviceAreas}</p>
            ) : null}
            <p>
              {siteName} — Pokemon Memorial Site is celebrating Pikachu memorial life and
              memory, felt and centres related Pokemon causes supporting community and memory
              of the {siteName} Memorial Fund.
            </p>
          </div>
        </div>
      </div>

      {/* Legal / copyright bar */}
      <div className="border-t border-[#dcd6ca]">
        <div className="mx-auto max-w-6xl px-6 py-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-[#1a1917]/70">
            © {new Date().getFullYear()} {siteName}. All rights reserved.
          </p>
          <Link
            href="/contact"
            className="text-xs text-[#1a1917]/70 hover:text-[#9a3412] transition-colors"
          >
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}
