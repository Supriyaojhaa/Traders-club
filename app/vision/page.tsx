import type { Metadata } from "next";
import Letter from "@/components/sections/Letter";
import FinalCta from "@/components/sections/FinalCta";
import Reveal from "@/components/Reveal";
import { site } from "@/content/site";

export const metadata: Metadata = { title: "Our Vision" };

const beliefs = [
  { word: "Trade Better.", body: "Sharpen your craft through honest conversation, scrutiny of ideas and the experience of those who have walked the path." },
  { word: "Think Better.", body: "Build the emotional awareness, discipline and clarity that the profession quietly demands of every trader." },
  { word: "Live Better.", body: "Treat your health, your relationships and your ventures beyond the screen as part of professional life." },
];

export default function VisionPage() {
  return (
    <>
      <Letter standalone />
      <section className="bg-ivory py-28 sm:py-36">
        <div className="mx-auto max-w-[96rem] px-4 sm:px-6 lg:px-10">
          <p className="eyebrow section-label text-center">Our Philosophy</p>
          <h2 className="display mx-auto mt-8 max-w-4xl text-center text-[3.4rem] text-ink sm:text-7xl">
            {site.positioning}
          </h2>
          <div className="mt-20 grid border-t border-rule md:grid-cols-3">
            {beliefs.map((b, i) => (
              <Reveal key={b.word} delay={i * 120} className="border-b border-rule p-8 md:border-b-0 md:border-r md:last:border-r-0 sm:p-12">
                <span className="eyebrow text-[0.6rem]! text-gold">{["I", "II", "III"][i]}</span>
                <h3 className="display mt-6 text-5xl italic text-ink">{b.word}</h3>
                <p className="mt-5 leading-relaxed text-muted">{b.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <FinalCta />
    </>
  );
}
