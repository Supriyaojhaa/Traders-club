import type { Metadata } from "next";
import PageIntro from "@/components/PageIntro";
import { site, eligibility } from "@/content/site";

export const metadata: Metadata = { title: "Apply for Membership" };

// Placeholder until the client's application form is shared.
export default function ApplyPage() {
  return (
    <>
      <PageIntro
        label="Apply for Membership"
        title={
          <>
            An invitation to <em className="text-bronze">serious traders.</em>
          </>
        }
      >
        {site.eligibilityFull}
      </PageIntro>
      <section className="bg-ivory pb-32">
        <div className="mx-auto max-w-3xl px-4 sm:px-8">
          <div className="border border-rule bg-paper p-8 sm:p-14">
            <p className="eyebrow text-[0.6rem]! text-bronze">Before you begin</p>
            <ul className="mt-6 space-y-4">
              {eligibility.map((e) => (
                <li key={e} className="flex gap-4 leading-relaxed text-charcoal">
                  <span aria-hidden className="mt-2.5 h-1.5 w-1.5 shrink-0 rotate-45 bg-gold" />
                  {e}
                </li>
              ))}
            </ul>
            <div className="mt-12 border-t border-rule pt-10 text-center">
              <p className="font-serif text-xl italic text-ink">The application form opens shortly.</p>
              <p className="mt-3 text-sm text-muted">
                To register your interest in the meantime, write to{" "}
                <a href={`mailto:${site.email}`} className="text-bronze underline underline-offset-4">
                  {site.email}
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
