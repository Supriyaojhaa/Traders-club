import type { Metadata } from "next";
import Membership from "@/components/sections/Membership";
import FinalCta from "@/components/sections/FinalCta";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = { title: "Membership" };

const faqs = [
  {
    q: "Does the club give trading tips or signals?",
    a: "No. The club does not provide investment advice, recommendations, buy/sell calls or signals, and makes no promise of profits. It exists so that serious traders can learn from one another.",
  },
  {
    q: "Is the club online?",
    a: "Yes. All sessions and experiences are currently held online, so members can take part wherever they are based in the country.",
  },
  {
    q: "How is trading capital verified?",
    a: "As part of your application, you may be asked to complete a verification step. Details are shared during the application process and are handled confidentially.",
  },
  {
    q: "Will my P&L be shared with other members?",
    a: "Only if you choose to share it. P&L submissions are voluntary, confidential and accessible only to authorised people. Your financial information is never displayed without your explicit consent.",
  },
  {
    q: "Who runs the wellness and therapy sessions?",
    a: "Mental wellness and therapy sessions are conducted by appropriately qualified professionals, with clear confidentiality and consent practices.",
  },
];

export default function MembershipPage() {
  return (
    <>
      <Membership standalone />
      <section className="bg-paper py-28 sm:py-32">
        <div className="mx-auto grid max-w-[96rem] gap-14 px-4 sm:px-8 lg:grid-cols-12 lg:px-10">
          <div className="lg:col-span-4">
            <p className="eyebrow section-label">Questions</p>
            <h2 className="display mt-6 text-[3.4rem] text-ink sm:text-7xl">Before you apply.</h2>
          </div>
          <div className="lg:col-span-8">
            {faqs.map((f, i) => (
              <Reveal key={f.q} delay={i * 60}>
                <details className="group border-b border-rule py-7 [&_summary::-webkit-details-marker]:hidden">
                  <summary className="flex cursor-pointer items-baseline justify-between gap-6 font-serif text-2xl text-ink">
                    {f.q}
                    <span aria-hidden className="text-gold transition-transform duration-500 group-open:rotate-45">+</span>
                  </summary>
                  <p className="mt-4 max-w-2xl leading-relaxed text-muted">{f.a}</p>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <FinalCta />
    </>
  );
}
