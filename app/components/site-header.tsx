"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { siteConfig } from "../../site-config";

type NavLink = { label: string; href: string };

const NAV_ITEMS: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

function LogoMark() {
  return (
    <span className="flex items-end gap-1" aria-hidden="true">
      <span className="flex h-6 w-4 flex-col justify-between">
        <span className="block h-[10px] w-full rounded-sm bg-[#9a3412]" />
        <span className="block h-[10px] w-full rounded-sm bg-[#e8e3d9]" />
      </span>
      <span className="flex h-6 w-6 flex-col justify-between">
        <span className="block h-[11px] w-full rounded-sm bg-[#1a1917]" />
        <span className="block h-[11px] w-full rounded-sm bg-[#9a3412]/70" />
      </span>
    </span>
  );
}

export default function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const siteName = siteConfig.header?.siteName ?? "Pikachu";

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className="sticky top-0 z-50 isolate [transform:translateZ(0)] border-b border-[#dcd6ca] bg-[#faf8f4]/95 backdrop-blur"
      style={{ minHeight: 80 }}
    >
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between gap-6 px-4 sm:px-6">
        {/* Logo */}
        <Link
          href="/"
          className="flex shrink-0 items-center gap-2 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[#9a3412]"
          aria-label={`${siteName} — home`}
        >
          <LogoMark />
          <span className="font-[var(--font-display)] text-lg font-extrabold tracking-tight text-[#1a1917]">
            {siteName}
          </span>
        </Link>

        {/* Centered nav (desktop) */}
        <nav
          aria-label="Primary"
          className="hidden items-center gap-8 md:flex"
        >
          {NAV_ITEMS.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`text-sm font-medium transition-colors hover:text-[#9a3412] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#9a3412] rounded-sm ${
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
            className="hidden rounded-lg bg-[#9a3412] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#7c2a0e] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#9a3412] focus-visible:ring-offset-2 sm:inline-flex"
          >
            Donate
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-drawer"
            aria-label={open ? "Close menu" : "Open menu"}
            className="inline-flex items-center justify-center rounded-md p-2 text-[#1a1917] hover:bg-[#e8e3d9] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#9a3412] md:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div
          id="mobile-drawer"
          className="border-t border-[#dcd6ca] bg-[#faf8f4] md:hidden"
        >
          <nav aria-label="Mobile" className="flex flex-col px-4 py-3">
            {NAV_ITEMS.map((item) => {
              const active =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={`rounded-md px-3 py-3 text-base font-medium ${
                    active
                      ? "bg-[#f2efe8] text-[#9a3412]"
                      : "text-[#1a1917] hover:bg-[#f2efe8]"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
            <Link
              href="/contact"
              className="mt-2 mb-3 inline-flex items-center justify-center rounded-lg bg-[#9a3412] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#7c2a0e]"
            >
              Donate
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
