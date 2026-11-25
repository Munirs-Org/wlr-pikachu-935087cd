"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2.5" aria-label="Pikachu — home">
      <span className="flex flex-col gap-1" aria-hidden="true">
        <span className="flex gap-1">
          <span className="h-3.5 w-2 rounded-[2px] bg-[#9a3412]" />
          <span className="h-3.5 w-3.5 rounded-[2px] bg-[#1a1917]" />
        </span>
        <span className="h-2 w-5 rounded-[2px] bg-[#c2542a]" />
      </span>
      <span className="font-display text-lg font-bold tracking-tight text-[#1a1917]">
        Pikachu
      </span>
    </Link>
  );
}

export default function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header
      className="sticky top-0 z-50 isolate [transform:translateZ(0)] border-b border-[#dcd6ca] bg-[#faf8f4]/95 backdrop-blur supports-[backdrop-filter]:bg-[#faf8f4]/85"
      style={{ height: 80 }}
    >
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between gap-6 px-6 lg:px-8">
        <Logo />

        {/* Centered nav group (desktop) */}
        <nav className="hidden md:flex flex-1 items-center justify-center gap-8" aria-label="Primary">
          {navItems.map((item) => {
            const active =
              item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={
                  active
                    ? "text-sm font-semibold text-[#9a3412]"
                    : "text-sm font-medium text-[#1a1917] transition-colors hover:text-[#9a3412]"
                }
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* CTA */}
        <div className="hidden md:block">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-lg bg-[#9a3412] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#7c2a0e]"
          >
            Donate
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-[#1a1917] hover:bg-[#f2efe8]"
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="md:hidden border-t border-[#dcd6ca] bg-[#faf8f4] px-6 py-4">
          <nav className="flex flex-col gap-1" aria-label="Mobile">
            {navItems.map((item) => {
              const active =
                item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  aria-current={active ? "page" : undefined}
                  className={
                    active
                      ? "rounded-md px-3 py-2.5 text-sm font-semibold text-[#9a3412]"
                      : "rounded-md px-3 py-2.5 text-sm font-medium text-[#1a1917] hover:bg-[#f2efe8]"
                  }
                >
                  {item.label}
                </Link>
              );
            })}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center rounded-lg bg-[#9a3412] px-5 py-2.5 text-sm font-semibold text-white"
            >
              Donate
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
