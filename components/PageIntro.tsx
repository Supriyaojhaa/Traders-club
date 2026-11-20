import type { ReactNode } from "react";
import { Eyebrow } from "./ui";

export default function PageIntro({ label, title, children }: { label: string; title: ReactNode; children?: ReactNode }) {
  return (
    <section className="bg-ivory pb-20 pt-40 sm:pt-48">
      <div className="mx-auto max-w-[96rem] px-4 sm:px-6 lg:px-10">
        <Eyebrow className="rise">{label}</Eyebrow>
        <h1 className="display rise mt-10 max-w-6xl text-[2.25rem] text-ink sm:text-5xl lg:text-[3.5rem]" style={{ animationDelay: "150ms" }}>
          {title}
        </h1>
        {children && (
          <div className="rise mt-8 max-w-2xl text-sm leading-relaxed text-muted" style={{ animationDelay: "300ms" }}>
            {children}
          </div>
        )}
      </div>
    </section>
  );
}
