"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Crest from "./Crest";
import { nav } from "@/content/site";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-700 ${
          scrolled ? "bg-ivory/90 py-3 shadow-[0_1px_0_var(--color-rule)] backdrop-blur-md" : "py-6"
        }`}
      >
        <div className="mx-auto flex max-w-[96rem] items-center justify-between px-4 sm:px-6 lg:px-10">
          <Link href="/" className="flex items-center gap-3" aria-label="The Professional Traders Club — Home">
            <Crest className={`transition-all duration-700 ${scrolled ? "h-9 w-9" : "h-11 w-11"}`} detailed={false} />
            <span className="hidden flex-col leading-none sm:flex">
              <span className="font-serif text-[1.15rem] tracking-wide text-ink">The Professional</span>
              <span className="eyebrow mt-1 text-[0.56rem]! text-bronze">Traders Club</span>
            </span>
          </Link>

          <nav className="hidden items-center gap-8 lg:flex" aria-label="Main">
            {nav.slice(1).map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`eyebrow text-[0.62rem]! transition-colors hover:text-bronze ${
                  pathname === item.href ? "text-bronze" : "text-charcoal"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-5">
            <Link href="/login" className="eyebrow hidden text-[0.62rem]! text-muted hover:text-bronze md:block">
              Member Login
            </Link>
            <Link
              href="/membership/apply"
              className="eyebrow hidden border border-ink bg-ink px-5 py-3 text-[0.6rem]! text-ivory transition-colors duration-500 hover:border-bronze hover:bg-bronze sm:block"
            >
              Apply
            </Link>
            <button
              className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
              onClick={() => setOpen((o) => !o)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
            >
              <span className={`h-px w-6 bg-ink transition-transform duration-500 ${open ? "translate-y-[3.5px] rotate-45" : ""}`} />
              <span className={`h-px w-6 bg-ink transition-transform duration-500 ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-40 flex flex-col bg-ivory px-6 pb-10 pt-28 transition-opacity duration-500 lg:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <nav className="flex flex-col gap-1" aria-label="Mobile">
          {nav.map((item, i) => (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-baseline gap-4 border-b border-rule py-4 font-serif text-3xl text-ink"
            >
              <span className="eyebrow text-[0.6rem]! text-gold">{String(i + 1).padStart(2, "0")}</span>
              {item.label}
            </Link>
          ))}
          <Link href="/login" className="flex items-baseline gap-4 py-4 font-serif text-3xl text-muted">
            <span className="eyebrow text-[0.6rem]! text-gold">07</span>
            Member Login
          </Link>
        </nav>
        <Link
          href="/membership/apply"
          className="eyebrow mt-auto bg-ink py-5 text-center text-[0.7rem]! text-ivory"
        >
          Apply for Membership
        </Link>
      </div>
    </>
  );
}
