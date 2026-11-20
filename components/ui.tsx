import Link from "next/link";
import type { ReactNode } from "react";

type BtnProps = {
  href: string;
  children: ReactNode;
  variant?: "solid" | "outline" | "light";
  className?: string;
};

export function Button({ href, children, variant = "solid", className = "" }: BtnProps) {
  const base =
    "group inline-flex items-center justify-center gap-3 px-7 py-4 eyebrow text-[0.68rem]! transition-colors duration-500";
  const styles = {
    solid: "bg-ink text-ivory hover:bg-bronze",
    outline: "border border-charcoal/40 text-charcoal hover:border-bronze hover:text-bronze",
    light: "border border-gold/60 text-ivory hover:bg-gold hover:text-ink",
  };
  return (
    <Link href={href} className={`${base} ${styles[variant]} ${className}`}>
      {children}
      <span aria-hidden className="inline-block transition-transform duration-500 group-hover:translate-x-1">
        →
      </span>
    </Link>
  );
}

export function Eyebrow({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <p className={`eyebrow section-label ${className}`}>
      {children}
    </p>
  );
}

export function Diamond({ className = "" }: { className?: string }) {
  return (
    <span aria-hidden className={`flex items-center justify-center gap-3 text-gold ${className}`}>
      <span className="h-px w-16 bg-current" />
      <span className="h-1.5 w-1.5 rotate-45 bg-current" />
      <span className="h-px w-16 bg-current" />
    </span>
  );
}

export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-[96rem] px-4 sm:px-6 lg:px-10 ${className}`}>{children}</div>;
}
