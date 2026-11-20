import Image from "next/image";
import { Button } from "../ui";
import { site } from "@/content/site";

const lines = ["A community built", "for those who take", "trading seriously."];

export default function Hero() {
  return (
    <section className="relative flex min-h-[100svh] flex-col overflow-hidden bg-ivory pt-32">
      {/* Photographic backdrop — starts below the fixed header (h-24) */}
      <div aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0 top-24">
        <Image src="/images/hero-bg.png" alt="" fill priority sizes="100vw" className="object-cover object-center" />
      </div>
      {/* Ivory wash keeps the headline legible over the photo */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 top-24"
        style={{
          background:
            "radial-gradient(ellipse 65% 55% at 50% 45%, rgb(246 241 231 / 0.88) 30%, rgb(246 241 231 / 0.35) 100%)",
        }}
      />

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 flex-col items-center justify-center px-4 pb-24 text-center sm:px-8">
        <p className="eyebrow section-label rise" style={{ animationDelay: "100ms" }}>
          {site.name}
        </p>

        <h1 className="display mt-8 text-[2.95rem] text-ink sm:text-6xl md:text-[4.875rem] lg:text-[6.125rem]">
          {lines.map((l, i) => (
            <span key={l} className="rise block" style={{ animationDelay: `${300 + i * 180}ms` }}>
              {i === 2 ? (
                <>
                  <em className="font-normal text-bronze">trading</em> seriously.
                </>
              ) : (
                l
              )}
            </span>
          ))}
        </h1>

        <p
          className="rise mt-8 max-w-xl text-[0.8rem] leading-relaxed text-muted sm:text-sm"
          style={{ animationDelay: "1000ms" }}
        >
          A private ecosystem for professional traders to connect, learn, exchange ideas and grow beyond the markets.
        </p>

        <div
          className="rise mt-10 flex w-full flex-col items-stretch justify-center gap-3 sm:w-auto sm:flex-row sm:items-center"
          style={{ animationDelay: "1200ms" }}
        >
          <Button href="/membership/apply">Apply for Membership</Button>
          <Button href="/club" variant="outline">
            Explore the Club
          </Button>
        </div>

        <p className="eyebrow rise mt-10 text-[0.6rem]! text-muted" style={{ animationDelay: "1400ms" }}>
          {site.eligibility}
        </p>
      </div>

      <div className="relative z-10 flex justify-center pb-8">
        <span aria-hidden className="h-14 w-px bg-gradient-to-b from-transparent to-gold" />
      </div>
    </section>
  );
}
