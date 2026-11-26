import Link from "next/link";
import { siteConfig } from "../../site-config";

export default function SiteFooter() {
  const siteName = siteConfig.footer?.siteName ?? siteConfig.header?.siteName ?? "Pikachu";
  const contact = siteConfig.footer?.contact;

  return (
    <footer className="w-full bg-[#f2efe8] border-t border-[#dcd6ca]">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <span
              aria-hidden="true"
              className="grid grid-cols-2 gap-[3px] w-9 h-9"
            >
              <span className="rounded-[3px] bg-[#9a3412]" />
              <span className="rounded-[3px] bg-[#1a1917]" />
              <span className="rounded-[3px] bg-[#c9b9a6]" />
              <span className="rounded-[3px] bg-[#9a3412]/70" />
            </span>
            <span className="font-bold text-2xl text-[#1a1917] tracking-tight">
              {siteName}
            </span>
          </div>

          {/* Navigation */}
          <nav aria-label="Footer navigation">
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-sm font-semibold text-[#9a3412] hover:underline"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-sm font-semibold text-[#1a1917] hover:text-[#9a3412]"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm font-semibold text-[#1a1917] hover:text-[#9a3412]"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>

          {/* Description / contact */}
          <div className="text-sm leading-relaxed text-[#1a1917]/80">
            <p>
              {siteName} — Pokemon Memorial Site is celebrating Pikachu memorial
              life and memory, felt and centere&rsquo;d related Pokemon causes
              supporting community and memory of {siteName} Memorial Fund.
            </p>
            {contact ? (
              <div className="mt-3 text-[#1a1917]/70">
                {contact.email ? (
                  <p>
                    <a
                      href={`mailto:${contact.email}`}
                      className="hover:text-[#9a3412]"
                    >
                      {contact.email}
                    </a>
                  </p>
                ) : null}
                {contact.phone ? (
                  <p>
                    <a
                      href={`tel:${contact.phone}`}
                      className="hover:text-[#9a3412]"
                    >
                      {contact.phone}
                    </a>
                  </p>
                ) : null}
                {contact.address ? <p>{contact.address}</p> : null}
                {contact.hours ? <p>{contact.hours}</p> : null}
                {contact.serviceAreas && contact.serviceAreas.length > 0 ? (
                  <p>
                    Service areas: {contact.serviceAreas.join(", ")}
                  </p>
                ) : null}
              </div>
            ) : null}
          </div>
        </div>

        {/* Legal bar */}
        <div className="mt-10 border-t border-[#dcd6ca] pt-6 flex flex-col sm:flex-row sm:items-center gap-3">
          <p className="text-xs text-[#1a1917]/70">
            Copyright &copy; 2022 {siteName}
          </p>
          <Link
            href="/about"
            className="text-xs text-[#1a1917]/70 hover:text-[#9a3412] sm:ml-4"
          >
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}
