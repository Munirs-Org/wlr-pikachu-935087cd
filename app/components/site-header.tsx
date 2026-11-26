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
  const siteName = siteConfig.header.siteName;

  return (
    <header
      className="sticky top-0 z-50 isolate border-b border-[#dcd6ca]"
      style={{
        background: "#faf8f4",
        height: 80,
        transform: "translateZ(0)",
      }}
    >
      <div className="mx-auto flex h-full max-w-6xl items-center justify-between px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/brand/logo.png"
            alt={`${siteName} logo`}
            width={34}
            height={34}
            className="h-[34px] w-[34px] object-contain"
          />
          <span className="font-display text-lg font-bold tracking-tight text-[#1a1917]">
            {siteName}
          </span>
        </Link>

        {/* Centered nav (desktop) */}
        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {navItems.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm transition-colors hover:text-[#9a3412] ${
                  active
                    ? "font-semibold text-[#9a3412]"
                    : "text-[#1a1917]"
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
            className="hidden rounded-lg bg-[#9a3412] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#7c2a0e] md:inline-flex"
          >
            Donate
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label="Toggle navigation menu"
            className="inline-flex items-center justify-center rounded-md p-2 text-[#1a1917] md:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="border-t border-[#dcd6ca] bg-[#faf8f4] md:hidden">
          <nav className="flex flex-col px-6 py-4" aria-label="Mobile">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`py-2.5 text-sm ${
                  (item.href === "/" ? pathname === "/" : pathname.startsWith(item.href))
                    ? "font-semibold text-[#9a3412]"
                    : "text-[#1a1917]"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex w-full items-center justify-center rounded-lg bg-[#9a3412] px-5 py-2.5 text-sm font-semibold text-white"
            >
              Donate
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
