"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { siteConfig } from "../../site-config";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const siteName = siteConfig.header?.siteName ?? "Pikachu";

  return (
    <header
      className="sticky top-0 z-50 isolate [transform:translateZ(0)] w-full border-b"
      style={{
        backgroundColor: "#faf8f4",
        borderColor: "#dcd6ca",
        height: "80px",
      }}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-6 px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex shrink-0 items-center gap-2.5">
          <span
            className="flex h-9 w-9 items-center justify-center rounded-md"
            style={{ backgroundColor: "#9a3412" }}
            aria-hidden="true"
          >
            <span
              className="block h-4 w-4 rounded-sm"
              style={{ backgroundColor: "#1a1917" }}
            />
          </span>
          <span
            className="text-lg font-bold tracking-tight"
            style={{ color: "#1a1917", fontFamily: "'Plus Jakarta Sans', Inter, sans-serif" }}
          >
            {siteName}
          </span>
        </Link>

        {/* Center nav (desktop) */}
        <nav
          aria-label="Primary"
          className="hidden items-center gap-8 md:flex md:absolute md:left-1/2 md:-translate-x-1/2"
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium transition-colors hover:text-[#9a3412]"
              style={{ color: "#1a1917" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="hidden rounded-full px-6 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90 sm:inline-block"
            style={{ backgroundColor: "#9a3412" }}
          >
            Donate
          </Link>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border md:hidden"
            style={{ borderColor: "#dcd6ca", color: "#1a1917" }}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div
          className="border-t md:hidden"
          style={{ borderColor: "#dcd6ca", backgroundColor: "#faf8f4" }}
        >
          <nav aria-label="Mobile" className="flex flex-col px-4 py-3">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="py-2.5 text-sm font-medium"
                style={{ color: "#1a1917" }}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full px-5 py-2.5 text-center text-sm font-semibold text-white"
              style={{ backgroundColor: "#9a3412" }}
            >
              Donate
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
