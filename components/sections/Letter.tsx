import Crest from "../Crest";
import Reveal from "../Reveal";
import { Diamond, Eyebrow } from "../ui";
import { letter } from "@/content/site";

export default function Letter({ standalone = false }: { standalone?: boolean }) {
  const places = letter.body.filter((p) => p.place);
  const firstPlace = letter.body.findIndex((p) => p.place);

  return (
    <section id="vision" className={`relative bg-sand/60 ${standalone ? "pt-40" : "pt-28"} pb-28 sm:pb-36`}>
      <div className="mx-auto max-w-[96rem] px-4 sm:px-6 lg:px-10">
        {/* Section heading */}
        <div className="grid gap-10 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <Eyebrow>Our Vision</Eyebrow>
          </Reveal>
          <Reveal className="lg:col-span-8" delay={100}>
            <h2 className="display text-5xl text-ink sm:text-6xl md:text-7xl lg:text-[5.5rem]">{letter.heading}</h2>
            <p className="mt-6 font-serif text-2xl italic text-bronze">{letter.subheading}</p>
          </Reveal>
        </div>

        {/* The letter sheet */}
        <Reveal className="relative mx-auto mt-20 max-w-4xl">
          <article className="relative border border-rule bg-paper px-6 py-14 shadow-[0_30px_80px_-40px_rgba(60,45,20,0.35)] sm:px-16 sm:py-20">
            {/* inner hairline frame */}
            <div aria-hidden className="pointer-events-none absolute inset-3 border border-rule/70 sm:inset-4" />

            <header className="relative flex items-start justify-between gap-6 border-b border-rule pb-8">
              <div>
                <p className="eyebrow text-[0.6rem]! text-bronze">An Open Letter</p>
                <p className="mt-2 text-sm text-muted">From the club, to every serious trader</p>
              </div>
              <Crest className="h-16 w-16 shrink-0" detailed={false} />
            </header>

            <div className="relative mt-12 font-serif text-[1.3rem] leading-[1.75] text-charcoal sm:text-[1.45rem]">
              <p className="mb-8 italic text-ink">{letter.salutation}</p>

              {letter.body.map((p, i) => {
                if (p.place) {
                  if (i !== firstPlace) return null;
                  return (
                    <ol key="places" className="my-12 space-y-6 border-l border-gold/60 pl-6 sm:pl-10">
                      {places.map((pl, j) => (
                        <Reveal as="li" key={j} delay={j * 120} className="flex gap-5">
                          <span className="eyebrow mt-3 w-7 shrink-0 text-[0.58rem]! text-gold">
                            {["I", "II", "III", "IV"][j]}
                          </span>
                          <span>
                            <strong className="font-semibold text-ink">A place</strong>
                            {pl.text.replace(/^A place/, "")}
                          </span>
                        </Reveal>
                      ))}
                    </ol>
                  );
                }
                if (p.pull) {
                  return (
                    <Reveal key={i} as="blockquote" className="my-14 text-center">
                      <Diamond className="mb-6" />
                      <p className="display text-3xl italic text-bronze sm:text-4xl">{p.text}</p>
                      <Diamond className="mt-6" />
                    </Reveal>
                  );
                }
                return (
                  <p key={i} className={i === 0 ? "mb-8 text-[1.9rem] leading-snug text-ink sm:text-[2.2rem]" : "mb-6"}>
                    {p.text}
                  </p>
                );
              })}

              <div className="mt-14 flex flex-col items-center border-t border-rule pt-12 text-center">
                <p className="display text-4xl italic text-ink sm:text-5xl">{letter.closing}</p>
                <Reveal draw className="mt-10 text-gold">
                  <Crest className="h-28 w-28" />
                </Reveal>
              </div>
            </div>
          </article>
        </Reveal>
      </div>
    </section>
  );
}
