import Crest from "../Crest";
import Reveal from "../Reveal";
import ScrollLetter from "../ScrollLetter";
import { Diamond } from "../ui";
import { letter } from "@/content/site";

export default function Letter({ standalone = false }: { standalone?: boolean }) {
  const places = letter.body.filter((p) => p.place);
  const firstPlace = letter.body.findIndex((p) => p.place);
  // The Vision page owns the page's h1; on the home page it's a section h2.
  const Heading = standalone ? "h1" : "h2";

  return (
    <section id="vision" className={`relative bg-sand/60 ${standalone ? "pt-40" : "pt-28"} pb-28 sm:pb-36`}>
      <div className="mx-auto max-w-[96rem] px-4 sm:px-6 lg:px-10">
        {/* Heading + description on the left, letter on the right */}
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <Reveal className="lg:sticky lg:top-32">
              <p className="eyebrow section-label">Our Vision</p>
              <Heading className="display mt-8 text-[2.25rem] text-ink sm:text-5xl lg:text-[2.75rem] xl:text-[3.25rem]">
                {letter.heading}
              </Heading>
              <p className="mt-6 font-serif text-xl italic text-bronze">{letter.subheading}</p>
            </Reveal>
          </div>
          <div className="lg:col-span-7">{renderSheet()}</div>
        </div>
      </div>
    </section>
  );

  function renderSheet() {
    return (
        /* The letter sheet, delivered rolled and sealed */
        <Reveal className="relative">
          <ScrollLetter>
          <article className="relative border border-rule bg-paper px-6 py-14 shadow-[0_30px_80px_-40px_rgba(60,45,20,0.35)] sm:px-16 sm:py-20">
            {/* inner hairline frame */}
            <div aria-hidden className="pointer-events-none absolute inset-3 border border-rule/70 sm:inset-4" />

            <header className="relative flex items-start justify-between gap-6 border-b border-rule pb-8">
              <div>
                <p className="eyebrow text-[0.95rem]! font-extrabold! text-bronze sm:text-[1.1rem]!">An Open Letter</p>
                <p className="mt-2 text-sm text-muted">From the club, to every serious trader</p>
              </div>
              <Crest className="h-16 w-16 shrink-0" detailed={false} />
            </header>

            <div className="relative mt-12 text-justify hyphens-auto font-serif text-[1.05rem] leading-[1.8] text-charcoal sm:text-[1.15rem]">
              <p className="mb-8 italic text-ink">{letter.salutation}</p>

              {letter.body.map((p, i) => {
                if (p.place) {
                  if (i !== firstPlace) return null;
                  return (
                    <ol key="places" className="my-12 space-y-6 border-l border-gold/60 pl-6 sm:pl-10">
                      {places.map((pl, j) => (
                        <Reveal as="li" key={j} delay={j * 120} className="flex gap-5">
                          <span className="eyebrow mt-3 w-7 shrink-0 text-[0.58rem]! text-gold">
                            {j + 1}
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
                      <p className="display text-2xl italic text-bronze sm:text-3xl">{p.text}</p>
                      <Diamond className="mt-6" />
                    </Reveal>
                  );
                }
                return (
                  <p key={i} className={i === 0 ? "mb-8 text-[1.4rem] leading-snug text-ink sm:text-[1.6rem]" : "mb-6"}>
                    {p.text}
                  </p>
                );
              })}

              <div className="mt-14 flex flex-col items-center border-t border-rule pt-12 text-center">
                <p className="display text-3xl italic text-ink sm:text-4xl">{letter.closing}</p>
                <Reveal draw className="mt-10 text-gold">
                  <Crest className="h-28 w-28" />
                </Reveal>
              </div>
            </div>
          </article>
          </ScrollLetter>
        </Reveal>
    );
  }
}
