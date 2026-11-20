import Reveal from "../Reveal";
import { Button, Eyebrow } from "../ui";
import { programme } from "@/content/site";

export default function Experiences({ standalone = false }: { standalone?: boolean }) {
  return (
    <section id="events" className={`bg-paper ${standalone ? "pt-40" : "pt-28 sm:pt-36"} pb-28 sm:pb-36`}>
      <div className="mx-auto max-w-[96rem] px-4 sm:px-6 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <Eyebrow>Experiences &amp; Events</Eyebrow>
          </Reveal>
          <Reveal className="lg:col-span-8" delay={100}>
            <h2 className="display text-[3.4rem] text-ink sm:text-7xl">
              More than membership. <em className="text-bronze">An ongoing experience.</em>
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
              Members can join a programme of live, online sessions that covers the markets, the craft,
              business and well-being. The schedule is shared with members after onboarding.
            </p>
          </Reveal>
        </div>

        {/* Programme listing */}
        <div className="mt-20 border-t border-ink">
          <div className="eyebrow hidden grid-cols-12 gap-6 border-b border-rule py-4 text-[0.58rem]! text-muted md:grid">
            <span className="col-span-1">No.</span>
            <span className="col-span-5">Session</span>
            <span className="col-span-3">Held in</span>
            <span className="col-span-2">Cadence</span>
            <span className="col-span-1 text-right">Format</span>
          </div>
          {programme.map((e, i) => (
            <Reveal
              key={e.name}
              delay={i * 60}
              className="group grid grid-cols-12 items-baseline gap-x-6 gap-y-2 border-b border-rule py-7 transition-colors duration-500 hover:bg-ivory md:py-8"
            >
              <span className="eyebrow col-span-2 text-[0.6rem]! text-gold md:col-span-1">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="display col-span-10 text-2xl text-ink transition-colors group-hover:text-bronze sm:text-3xl md:col-span-5">
                {e.name}
              </span>
              <span className="col-span-10 col-start-3 text-sm italic text-muted md:col-span-3 md:col-start-auto md:font-serif md:text-lg">
                {e.room}
              </span>
              <span className="col-span-6 col-start-3 text-sm text-charcoal md:col-span-2 md:col-start-auto">
                {e.cadence}
              </span>
              <span className="col-span-4 text-right md:col-span-1">
                <span className="eyebrow border border-gold/60 px-2 py-1 text-[0.52rem]! text-bronze">Online</span>
              </span>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-14 flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <p className="max-w-xl text-sm leading-relaxed text-muted">
            All experiences are currently held online. As the community grows, the club may also host in-person
            gatherings. Any such plans will be announced to members.
          </p>
          {!standalone && (
            <Button href="/events" variant="outline">
              View the Programme
            </Button>
          )}
        </Reveal>
      </div>
    </section>
  );
}
