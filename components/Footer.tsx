import Link from "next/link";
import type { ReactNode } from "react";
import Crest from "./Crest";
import NewsletterForm from "./NewsletterForm";
import { nav, site } from "@/content/site";

// TODO: replace "#" with the club's real profile URLs.
const socials: { label: string; href: string; icon: ReactNode }[] = [
  {
    label: "Facebook",
    href: "#",
    icon: <path d="M15 3h-2.5A3.5 3.5 0 0 0 9 6.5V9H6.5v3.5H9V21h3.5v-8.5H15l.5-3.5h-3V7a1 1 0 0 1 1-1H15V3Z" />,
  },
  {
    label: "Instagram",
    href: "#",
    icon: (
      <>
        <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.2" cy="6.8" r="0.6" fill="currentColor" />
      </>
    ),
  },
  {
    label: "Twitter (X)",
    href: "#",
    icon: <path d="M4.5 4.5 19.5 19.5M19.5 4.5 4.5 19.5" />,
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#1a1a19] text-ivory/60">
      <div className="mx-auto max-w-[96rem] px-4 pb-10 pt-16 sm:px-6 lg:px-10">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-4">
            <Link href="/" className="inline-block" aria-label={`${site.name} — Home`}>
              <Crest className="h-36 w-36 text-gold" detailed={false} />
            </Link>
            <p className="mt-6 text-xl font-bold leading-tight text-ivory">{site.name}</p>
            <p className="mt-3 max-w-xs leading-relaxed">{site.positioning}</p>
          </div>

          {/* Useful links */}
          <div className="lg:col-span-3">
            <p className="text-lg font-semibold text-ivory">Useful Links</p>
            <ul className="mt-6 space-y-4">
              {nav.slice(1).map((n) => (
                <li key={n.href}>
                  <Link href={n.href} className="transition-colors hover:text-gold">
                    {n.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/login" className="transition-colors hover:text-gold">
                  Member Login
                </Link>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div className="lg:col-span-2">
            <p className="text-lg font-semibold text-ivory">Follow Us</p>
            <ul className="mt-6 space-y-3">
              {socials.map((s) => (
                <li key={s.label}>
                  <a href={s.href} className="flex items-center gap-3 transition-colors hover:text-gold">
                    <svg
                      aria-hidden
                      viewBox="0 0 24 24"
                      className="h-5 w-5 shrink-0"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      {s.icon}
                    </svg>
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="lg:col-span-3">
            <p className="text-lg font-semibold text-ivory">Subscribe to our newsletter</p>
            <NewsletterForm />
          </div>
        </div>

        <div className="mt-16 border-t border-ivory/10 pt-8">
          <p className="max-w-4xl text-xs leading-relaxed text-ivory/40">
            The club is a professional community. It does not provide investment advice, trade recommendations,
            buy/sell calls or signals, and makes no promise of profits. Trading in securities and derivatives involves
            risk. Members are responsible for their own trading decisions.
          </p>
          <p className="mt-4 text-xs text-ivory/40">
            © {new Date().getFullYear()} {site.name}
          </p>
        </div>
      </div>
    </footer>
  );
}
