import type { Metadata } from "next";
import PageIntro from "@/components/PageIntro";
import PillarIcon from "@/components/PillarIcon";
import Reveal from "@/components/Reveal";
import People from "@/components/sections/People";
import FinalCta from "@/components/sections/FinalCta";
import { pillars } from "@/content/site";

export const metadata: Metadata = { title: "The Club" };

export default function ClubPage() {
  return (
    <>
      <PageIntro
        label="The Club"
        title={
          <>
            Eight pillars. <em className="text-bronze">One way of life.</em>
          </>
        }
      >
        <span className="text-base">
          The club is built around eight distinct experiences, each with its own purpose. All of them are held online,
          so members can take part wherever they are based.
        </span>
      </PageIntro>

      {/* Index */}
      <nav aria-label="Pillars" className="border-y border-rule bg-paper">
        <div className="mx-auto flex max-w-[96rem] gap-8 overflow-x-auto px-4 py-5 sm:px-6 lg:px-10">
          {pillars.map((p) => (
            <a key={p.slug} href={`#${p.slug}`} className="eyebrow shrink-0 text-[0.58rem]! text-muted hover:text-bronze">
              <span className="text-gold">{p.numeral}</span>&nbsp;&nbsp;{p.name.replace("The ", "")}
            </a>
          ))}
        </div>
      </nav>

      {pillars.map((p, i) => {
        const dark = i % 2 === 1;
        return (
          <section
            key={p.slug}
            id={p.slug}
            className={`scroll-mt-20 py-24 sm:py-32 ${dark ? "bg-sand/50" : "bg-ivory"}`}
          >
            <div className="mx-auto grid max-w-[96rem] items-center gap-14 px-4 sm:px-8 lg:grid-cols-12 lg:px-10">
              <Reveal
                draw
                className={`flex justify-center lg:col-span-5 ${i % 2 === 1 ? "lg:order-2 lg:col-start-8" : ""}`}
              >
                <div className="pillar-frame group relative flex aspect-square w-full max-w-sm items-center justify-center overflow-hidden border border-gold/40 bg-ink">
                  <div aria-hidden className="pillar-frame__glow absolute inset-0" />
                  <div aria-hidden className="absolute inset-3 border border-gold/25" />
                  <span aria-hidden className="pillar-corner pillar-corner--tl" />
                  <span aria-hidden className="pillar-corner pillar-corner--tr" />
                  <span aria-hidden className="pillar-corner pillar-corner--bl" />
                  <span aria-hidden className="pillar-corner pillar-corner--br" />
                  <span className="display absolute left-6 top-4 text-5xl text-gold/60">{p.numeral}</span>
                  <PillarIcon
                    type={p.motif}
                    className="relative h-3/5 w-3/5 transition-transform duration-1000 group-hover:scale-105"
                  />
                </div>
              </Reveal>
              <Reveal className={`lg:col-span-6 ${i % 2 === 1 ? "lg:order-1" : "lg:col-start-7"}`} delay={120}>
                <p className="eyebrow section-label">Pillar {p.numeral}</p>
                <h2 className="display mt-6 text-[2rem] text-ink sm:text-[2.5rem]">{p.name}</h2>
                <p className="mt-4 font-serif text-lg italic text-bronze">{p.tagline}</p>
                {p.description.map((d) => (
                  <p key={d} className="mt-6 text-base leading-relaxed text-muted">
                    {d}
                  </p>
                ))}
                <ul className="mt-8 flex flex-wrap gap-2">
                  {p.formats.map((f) => (
                    <li key={f} className="eyebrow border border-rule px-3 py-2 text-[0.55rem]! text-charcoal">
                      {f}
                    </li>
                  ))}
                </ul>
                {p.note && (
                  <p className="mt-8 border-l-2 border-gold pl-5 text-sm leading-relaxed text-charcoal">
                    <span className="eyebrow mb-2 block text-[0.55rem]! text-bronze">Our commitment</span>
                    {p.note}
                  </p>
                )}
              </Reveal>
            </div>
          </section>
        );
      })}

      <People />
      <FinalCta />
    </>
  );
}
