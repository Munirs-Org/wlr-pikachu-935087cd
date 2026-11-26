"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
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

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className="sticky top-0 z-50 isolate [transform:translateZ(0)] w-full border-b border-[#dcd6ca]"
      style={{ backgroundColor: "#faf8f4" }}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-6 px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex shrink-0 items-center gap-2.5" aria-label={`${siteName} home`}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/brand/logo.png"
            alt="Pikachu Logo"
            width={34}
            height={34}
            className="h-[34px] w-[34px] object-contain"
          />
          <span
            className="font-bold text-[#1a1917]"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "1.25rem" }}
          >
            Pikachu
          </span>
        </Link>

        {/* Centered nav (desktop) */}
        <nav className="hidden md:flex flex-1 items-center justify-center gap-8" aria-label="Primary">
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`text-sm font-medium transition-colors ${
                  active ? "text-[#9a3412]" : "text-[#1a1917] hover:text-[#9a3412]"
                }`}
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* CTA (desktop) */}
        <div className="hidden md:flex shrink-0 items-center">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-lg bg-[#9a3412] px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#7c2a0e]"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Donate
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex items-center justify-center rounded-md p-2 text-[#1a1917] md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div id="mobile-nav" className="border-t border-[#dcd6ca] md:hidden" style={{ backgroundColor: "#faf8f4" }}>
          <nav className="flex flex-col gap-1 px-4 py-4" aria-label="Mobile">
            {navItems.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={`rounded-md px-3 py-2.5 text-sm font-medium ${
                    active ? "bg-[#f2efe8] text-[#9a3412]" : "text-[#1a1917] hover:bg-[#f2efe8]"
                  }`}
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {item.label}
                </Link>
              );
            })}
            <Link
              href="/contact"
              className="mt-2 inline-flex items-center justify-center rounded-lg bg-[#9a3412] px-6 py-2.5 text-sm font-semibold text-white hover:bg-[#7c2a0e]"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Donate
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
