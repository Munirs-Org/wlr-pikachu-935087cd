import Link from "next/link";

const brand = "Pikachu";

export default function SiteFooter() {
  const nav = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <footer className="w-full bg-[#f2efe8] text-[#1a1917] border-t border-[#dcd6ca]">
      <div className="mx-auto max-w-6xl px-6 py-12 grid grid-cols-1 gap-10 md:grid-cols-3">
        {/* Logo */}
        <div>
          <Link href="/" className="inline-flex items-center gap-3">
            <span className="grid grid-cols-2 grid-rows-2 w-9 h-9 rounded-md overflow-hidden">
              <span className="bg-[#9a3412]" />
              <span className="bg-[#1a1917]" />
              <span className="bg-[#9a3412]" />
              <span className="bg-[#e8e3d9]" />
            </span>
            <span
              className="text-2xl font-bold tracking-tight"
              style={{ fontFamily: "var(--font-display, 'Plus Jakarta Sans', sans-serif)" }}
            >
              {brand}
            </span>
          </Link>
        </div>

        {/* Navigation */}
        <nav aria-label="Footer navigation">
          <ul className="space-y-2">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm text-[#9a3412] hover:text-[#1a1917] transition-colors"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Description */}
        <div>
          <p className="text-xs leading-relaxed text-[#1a1917]/80 max-w-sm">
            {brand} — Pokemon Memorial Site is celebrating Pikachu memorial life and memory, festu
            and centors related Pokemon causes supporting community and memory of {brand} Memorial
            Fund.
          </p>
        </div>
      </div>

      {/* Legal bar */}
      <div className="border-t border-[#dcd6ca]">
        <div className="mx-auto max-w-6xl px-6 py-4">
          <p className="text-xs text-[#1a1917]/70">Copyright © 2022&nbsp;&nbsp;Privacy Policy</p>
        </div>
      </div>
    </footer>
  );
}
