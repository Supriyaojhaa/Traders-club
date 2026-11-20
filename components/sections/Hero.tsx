import Arches from "../Arches";
import Reveal from "../Reveal";
import { Button } from "../ui";
import { site } from "@/content/site";

const lines = ["A community built", "for those who take", "trading seriously."];

export default function Hero() {
  return (
    <section className="relative flex min-h-[100svh] flex-col overflow-hidden bg-ivory pt-32">
      {/* Architectural backdrop */}
      <Reveal draw className="pointer-events-none absolute inset-x-0 bottom-0 mx-auto w-full max-w-[90rem] text-gold/70">
        <Arches className="h-auto max-h-[72vh] w-full" />
      </Reveal>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{ background: "radial-gradient(ellipse 70% 55% at 50% 42%, var(--color-ivory) 35%, transparent 100%)" }}
      />

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 flex-col items-center justify-center px-4 pb-24 text-center sm:px-8">
        <p className="eyebrow rise text-bronze" style={{ animationDelay: "100ms" }}>
          {site.name}
        </p>

        <h1 className="display mt-8 text-[3rem] text-ink sm:text-6xl md:text-7xl lg:text-[6.75rem]">
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
          className="rise mt-8 max-w-xl text-base leading-relaxed text-muted sm:text-lg"
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
