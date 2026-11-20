import Reveal from "../Reveal";
import { Button, Eyebrow } from "../ui";
import { eligibility, process, site } from "@/content/site";

export default function Membership({ standalone = false }: { standalone?: boolean }) {
  return (
    <section id="membership" className={`bg-ivory ${standalone ? "pt-40" : "pt-28 sm:pt-36"} pb-28 sm:pb-36`}>
      <div className="mx-auto max-w-[96rem] px-4 sm:px-6 lg:px-10">
        <Reveal>
          <Eyebrow>Membership</Eyebrow>
        </Reveal>
        <Reveal delay={100}>
          <h2 className="display mt-10 max-w-6xl text-[3.4rem] text-ink sm:text-7xl">
            Not every trader needs to be a member.{" "}
            <em className="text-bronze">But every serious trader deserves a community.</em>
          </h2>
        </Reveal>

        <div className="mt-20 grid gap-16 lg:grid-cols-12">
          {/* Eligibility */}
          <Reveal className="lg:col-span-5">
            <p className="text-lg leading-relaxed text-muted">
              We are building a community of individuals who treat trading as a serious profession. Membership is
              selective, with eligibility based on active trading capital and an application and verification
              process.
            </p>

            <div className="mt-12 border border-rule bg-paper p-8 sm:p-10">
              <p className="eyebrow text-[0.6rem]! text-bronze">Eligibility</p>
              <ul className="mt-6 space-y-5">
                {eligibility.map((e) => (
                  <li key={e} className="flex gap-4 text-[0.95rem] leading-relaxed text-charcoal">
                    <span aria-hidden className="mt-2.5 h-1.5 w-1.5 shrink-0 rotate-45 bg-gold" />
                    {e}
                  </li>
                ))}
              </ul>
              <p className="mt-8 border-t border-rule pt-6 font-serif text-lg italic text-muted">
                {site.eligibilityFull}
              </p>
            </div>
          </Reveal>

          {/* Process */}
          <div className="lg:col-span-6 lg:col-start-7">
            <p className="eyebrow text-[0.6rem]! text-bronze">The Application Process</p>
            <ol className="relative mt-8">
              <span aria-hidden className="absolute bottom-6 left-[1.35rem] top-6 w-px bg-rule" />
              {process.map((s, i) => (
                <Reveal as="li" key={s.title} delay={i * 110} className="relative flex gap-8 pb-10 last:pb-0">
                  <span className="relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-gold bg-ivory font-serif text-lg text-bronze">
                    {i + 1}
                  </span>
                  <div className="pt-1.5">
                    <h3 className="display text-3xl text-ink">{s.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">{s.body}</p>
                  </div>
                </Reveal>
              ))}
            </ol>
            <Reveal className="mt-14">
              <Button href="/membership/apply">Apply for Membership</Button>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
