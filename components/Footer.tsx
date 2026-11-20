import Link from "next/link";
import Crest from "./Crest";
import { nav, site } from "@/content/site";

export default function Footer() {
  return (
    <footer className="bg-ink text-ivory/70">
      <div className="mx-auto max-w-[96rem] px-4 pb-10 pt-20 sm:px-6 lg:px-10">
        <div className="grid gap-14 md:grid-cols-12">
          <div className="md:col-span-5">
            <Crest className="h-24 w-24" />
            <p className="mt-8 max-w-sm font-serif text-2xl leading-snug text-ivory">
              {site.positioning}
            </p>
          </div>
          <div className="md:col-span-3">
            <p className="eyebrow text-gold">The Club</p>
            <ul className="mt-6 space-y-3 text-sm">
              {nav.map((n) => (
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
          <div className="md:col-span-4">
            <p className="eyebrow text-gold">Membership</p>
            <p className="mt-6 text-sm leading-relaxed">{site.eligibilityFull}</p>
            <Link
              href="/membership/apply"
              className="eyebrow mt-8 inline-block border border-gold/60 px-6 py-3 text-[0.62rem]! text-ivory transition-colors duration-500 hover:bg-gold hover:text-ink"
            >
              Apply for Membership
            </Link>
          </div>
        </div>

        <div className="mt-20 border-t border-ivory/15 pt-8">
          <p className="max-w-4xl text-xs leading-relaxed text-ivory/50">
            The club is a professional community. It does not provide investment advice, trade recommendations,
            buy/sell calls or signals, and makes no promise of profits. Trading in securities and derivatives involves
            risk. Members are responsible for their own trading decisions.
          </p>
          <div className="mt-6 flex flex-col justify-between gap-4 text-xs text-ivory/50 sm:flex-row">
            <p className="eyebrow text-[0.58rem]! text-gold/80">{site.philosophy.join(" ")}</p>
            <p>© {new Date().getFullYear()} {site.name}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
