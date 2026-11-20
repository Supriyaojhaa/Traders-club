import type { Metadata } from "next";
import PageIntro from "@/components/PageIntro";
import Crest from "@/components/Crest";
import { site } from "@/content/site";

export const metadata: Metadata = { title: "Contact" };

const field =
  "w-full border-0 border-b border-rule bg-transparent px-0 py-3 text-ink placeholder:text-muted/60 focus:border-bronze focus:outline-none focus:ring-0";

export default function ContactPage() {
  return (
    <>
      <PageIntro
        label="Contact"
        title={
          <>
            Correspondence <em className="text-bronze">welcome.</em>
          </>
        }
      >
        For questions about membership, the club or its programme, write to us and a member of the club will respond.
      </PageIntro>

      <section className="bg-ivory pb-32">
        <div className="mx-auto grid max-w-[96rem] gap-16 px-4 sm:px-8 lg:grid-cols-12 lg:px-10">
          <div className="lg:col-span-4">
            <p className="eyebrow text-[0.6rem]! text-bronze">Write to us</p>
            <a href={`mailto:${site.email}`} className="mt-4 block font-serif text-2xl text-ink hover:text-bronze">
              {site.email}
            </a>
            <Crest className="mt-16 h-32 w-32 opacity-80" />
          </div>

          {/* Front-end only for now; wire to email/Sheets in the forms phase */}
          <form className="border border-rule bg-paper p-8 sm:p-12 lg:col-span-7 lg:col-start-6" action={`mailto:${site.email}`} method="post" encType="text/plain">
            <div className="grid gap-10 sm:grid-cols-2">
              <label className="block">
                <span className="eyebrow text-[0.58rem]! text-muted">Full name</span>
                <input name="name" required className={field} autoComplete="name" />
              </label>
              <label className="block">
                <span className="eyebrow text-[0.58rem]! text-muted">Email</span>
                <input name="email" type="email" required className={field} autoComplete="email" />
              </label>
              <label className="block sm:col-span-2">
                <span className="eyebrow text-[0.58rem]! text-muted">Subject</span>
                <select name="subject" className={field} defaultValue="Membership">
                  <option>Membership</option>
                  <option>The programme</option>
                  <option>Partnerships</option>
                  <option>Something else</option>
                </select>
              </label>
              <label className="block sm:col-span-2">
                <span className="eyebrow text-[0.58rem]! text-muted">Message</span>
                <textarea name="message" rows={5} required className={`${field} resize-none`} />
              </label>
            </div>
            <button
              type="submit"
              className="eyebrow mt-12 bg-ink px-8 py-4 text-[0.66rem]! text-ivory transition-colors duration-500 hover:bg-bronze"
            >
              Send Message →
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
