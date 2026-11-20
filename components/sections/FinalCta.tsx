import Arches from "../Arches";
import Crest from "../Crest";
import Reveal from "../Reveal";
import { Button } from "../ui";
import { site } from "@/content/site";

export default function FinalCta() {
  return (
    <section className="relative overflow-hidden bg-charcoal py-32 text-ivory sm:py-44">
      <Reveal draw className="pointer-events-none absolute inset-x-0 bottom-0 mx-auto w-full max-w-[90rem] text-gold/20">
        <Arches className="h-auto w-full" />
      </Reveal>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{ background: "radial-gradient(ellipse 60% 60% at 50% 45%, var(--color-charcoal) 30%, transparent 100%)" }}
      />
      <div className="relative mx-auto flex max-w-4xl flex-col items-center px-4 text-center sm:px-8">
        <Reveal draw>
          <Crest className="h-24 w-24" />
        </Reveal>
        <Reveal delay={100}>
          <h2 className="display mt-12 text-[3.4rem] sm:text-7xl">
            Your trading journey doesn&apos;t have to be <em className="text-gold">a solo one.</em>
          </h2>
        </Reveal>
        <Reveal delay={200}>
          <p className="mx-auto mt-8 max-w-xl text-lg leading-relaxed text-ivory/70">
            Connect with people who understand your profession. Exchange ideas. Challenge yourself. Build
            relationships. Grow beyond the markets.
          </p>
        </Reveal>
        <Reveal delay={300} className="mt-12">
          <Button href="/membership/apply" variant="light">
            Apply for Membership
          </Button>
        </Reveal>
        <Reveal delay={400} className="mt-20">
          <p className="flex flex-col gap-1 font-serif text-2xl italic text-gold sm:flex-row sm:gap-4 sm:text-3xl">
            {site.philosophy.map((p) => (
              <span key={p}>{p}</span>
            ))}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
