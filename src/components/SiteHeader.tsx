"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "./ThemeToggle";
import { NAV_ITEMS, isActive } from "./nav-items";

export function SiteHeader() {
  const pathname = usePathname();
  return (
    <header className="sticky top-0 z-30 border-b border-app backdrop-blur" style={{ background: "color-mix(in srgb, var(--bg) 85%, transparent)" }}>
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between gap-3 px-4">
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <span aria-hidden className="grid h-8 w-8 place-items-center rounded-lg text-lg" style={{ background: "var(--accent)", color: "white" }}>
            🎓
          </span>
          <span style={{ fontFamily: "var(--font-display)" }} className="text-lg">
            Académie du Génie
          </span>
        </Link>
        <nav className="hidden items-center gap-1 sm:flex" aria-label="Navigation principale">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`rounded-lg px-3 py-2 text-sm font-medium transition ${isActive(pathname, item.href) ? "surface-2" : "muted hover:opacity-80"}`}
              aria-current={isActive(pathname, item.href) ? "page" : undefined}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <ThemeToggle />
      </div>
    </header>
  );
}
