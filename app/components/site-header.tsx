"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { siteConfig } from "../../site-config";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const siteName = siteConfig.header?.siteName ?? "Pikachu";

  return (
    <header
      className="sticky top-0 z-50 isolate border-b border-[#dcd6ca] bg-[#faf8f4]/95 backdrop-blur supports-[backdrop-filter]:bg-[#faf8f4]/85"
      style={{ transform: "translateZ(0)" }}
    >
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between gap-6 px-4 sm:px-6">
        {/* Logo */}
        <Link
          href="/"
          className="flex shrink-0 items-center gap-2.5"
          aria-label={`${siteName} — home`}
        >
          <span className="flex h-8 w-8 flex-col justify-between gap-[3px]" aria-hidden="true">
            <span className="flex gap-[3px]">
              <span className="h-3 w-[7px] rounded-[3px] bg-[#9a3412]" />
              <span className="h-3 w-3.5 rounded-[3px] bg-[#1a1917]" />
            </span>
            <span className="h-[7px] w-3.5 rounded-[3px] bg-[#9a3412]" />
          </span>
          <span className="font-display text-xl font-bold tracking-tight text-[#1a1917]">
            {siteName}
          </span>
        </Link>

        {/* Centered nav (desktop) */}
        <nav
          aria-label="Primary"
          className="hidden flex-1 items-center justify-center gap-8 md:flex"
        >
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`text-sm font-medium transition-colors hover:text-[#9a3412] ${
                  active ? "text-[#9a3412]" : "text-[#1a1917]"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* CTA + mobile toggle */}
        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="hidden rounded-lg bg-[#9a3412] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#7c2a0e] sm:inline-flex"
          >
            Donate
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-[#dcd6ca] text-[#1a1917] md:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {open && (
        <nav
          id="mobile-nav"
          aria-label="Mobile"
          className="border-t border-[#dcd6ca] bg-[#faf8f4] md:hidden"
        >
          <div className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`rounded-lg px-3 py-2.5 text-sm font-medium ${
                  pathname === item.href
                    ? "bg-[#f2efe8] text-[#9a3412]"
                    : "text-[#1a1917] hover:bg-[#f2efe8]"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-lg bg-[#9a3412] px-3 py-2.5 text-center text-sm font-semibold text-white"
            >
              Donate
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
