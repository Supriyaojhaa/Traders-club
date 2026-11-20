import Link from "next/link";
import Motif from "../Motif";
import Reveal from "../Reveal";
import { Eyebrow } from "../ui";
import { pillars } from "@/content/site";

export default function Pillars() {
  return (
    <section id="club" className="bg-ivory py-28 sm:py-36">
      <div className="mx-auto max-w-[96rem] px-4 sm:px-6 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <Eyebrow>The Club</Eyebrow>
          </Reveal>
          <Reveal className="lg:col-span-8" delay={100}>
            <h2 className="display text-[2.25rem] text-ink sm:text-5xl lg:text-[3.5rem]">
              Eight pillars. <em className="text-bronze">One way of life.</em>
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
              The club is built around eight distinct experiences, spanning the craft of trading, the business around
              it, and the body and mind that sustain it. All are held online, so members can take part wherever they
              are based.
            </p>
          </Reveal>
        </div>

        <div className="mt-20 grid border-l border-t border-rule sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((p, i) => (
            <Reveal key={p.slug} delay={(i % 4) * 90} className="border-b border-r border-rule">
              <Link
                href={`/club#${p.slug}`}
                className="group relative flex h-full flex-col p-8 transition-colors duration-700 hover:bg-paper sm:p-10"
              >
                <div className="flex items-start justify-between">
                  <span className="font-serif text-5xl text-gold/80">{p.numeral}</span>
                  <Motif
                    type={p.motif}
                    className="h-16 w-16 text-bronze/70 transition-transform duration-1000 group-hover:scale-110 group-hover:text-bronze"
                  />
                </div>
                <h3 className="display mt-12 text-[1.6rem] text-ink">{p.name}</h3>
                <p className="mt-3 font-serif text-lg italic text-bronze">{p.tagline}</p>
                <p className="mt-5 text-sm leading-relaxed text-muted">{p.description[0]}</p>
                <span className="eyebrow mt-auto pt-8 text-[0.58rem]! text-charcoal transition-colors group-hover:text-bronze">
                  Discover <span aria-hidden>→</span>
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
