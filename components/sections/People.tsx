import Reveal from "../Reveal";
import { Eyebrow } from "../ui";
import { people } from "@/content/site";

export default function People() {
  const loop = [...people, ...people];
  return (
    <section className="overflow-hidden bg-ink py-28 text-ivory sm:py-36">
      <div className="mx-auto max-w-[96rem] px-4 sm:px-6 lg:px-10">
        <Reveal>
          <p className="eyebrow text-[0.85rem]! tracking-[0.24em]! text-gold sm:text-[1rem]!">
            The People
          </p>
        </Reveal>
        <Reveal delay={100}>
          <h2 className="display mt-10 max-w-6xl text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem]">
            Different strategies. Different journeys.{" "}
            <em className="text-gold">One community.</em>
          </h2>
        </Reveal>
      </div>

      {/* Slow typographic marquee */}
      <div className="mt-20 border-y border-ivory/15 py-8" aria-hidden>
        <div className="marquee flex w-max gap-12 whitespace-nowrap">
          {loop.map((p, i) => (
            <span key={i} className="flex items-center gap-12 font-serif text-4xl italic text-ivory/80 sm:text-5xl">
              {p}
              <span className="h-2 w-2 rotate-45 bg-gold" />
            </span>
          ))}
        </div>
      </div>

      <div className="mx-auto mt-20 grid max-w-[96rem] gap-12 px-4 sm:px-8 lg:grid-cols-12 lg:px-10">
        <Reveal className="lg:col-span-5">
          <p className="font-serif text-2xl leading-snug text-ivory sm:text-3xl">
            The club is not restricted to one trading style or market segment.
          </p>
        </Reveal>
        <Reveal className="lg:col-span-6 lg:col-start-7" delay={120}>
          <p className="leading-relaxed text-ivory/65">
            Our members may trade differently, across different timeframes, instruments and approaches, but they share
            a common professional identity. They treat trading as a serious profession, and they value the company of
            others who do the same.
          </p>
          <ul className="mt-10 grid grid-cols-1 gap-x-8 sm:grid-cols-2">
            {people.map((p, i) => (
              <li key={p} className="flex items-baseline gap-4 border-b border-ivory/15 py-4 text-sm text-ivory/85">
                <span className="eyebrow text-[0.55rem]! text-gold">{String(i + 1).padStart(2, "0")}</span>
                {p}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
