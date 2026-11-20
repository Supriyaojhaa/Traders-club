import type { Metadata } from "next";
import Link from "next/link";
import Crest from "@/components/Crest";

export const metadata: Metadata = { title: "Member Login" };

export default function LoginPage() {
  return (
    <section className="flex min-h-[100svh] items-center justify-center bg-sand/50 px-4 pb-20 pt-36">
      <div className="relative w-full max-w-md border border-rule bg-paper px-8 py-14 text-center sm:px-12">
        <div aria-hidden className="pointer-events-none absolute inset-3 border border-rule/70" />
        <Crest className="mx-auto h-24 w-24" />
        <p className="eyebrow section-label mt-10">Members&apos; Area</p>
        <h1 className="display mt-4 text-[3.4rem] text-ink sm:text-7xl">Opening soon.</h1>
        <p className="mt-5 text-[0.8rem] leading-relaxed text-muted">
          The members&apos; area is being prepared. Approved members will receive access details and onboarding
          instructions directly.
        </p>
        <div className="mt-10 flex flex-col gap-3">
          <Link
            href="/membership/apply"
            className="eyebrow bg-ink py-4 text-[0.64rem]! text-ivory transition-colors duration-500 hover:bg-bronze"
          >
            Apply for Membership
          </Link>
          <Link href="/" className="eyebrow py-3 text-[0.6rem]! text-muted hover:text-bronze">
            Return Home
          </Link>
        </div>
      </div>
    </section>
  );
}
