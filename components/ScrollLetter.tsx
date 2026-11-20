"use client";

import { useEffect, useId, useRef, useState, type ReactNode } from "react";
import Crest from "./Crest";

type Stage = "rolled" | "breaking" | "unrolling" | "open";

const BREAK_MS = 750;

/**
 * An old-style rolled letter: two curled paper rolls tied with a ribbon and a wax seal.
 * Clicking breaks the seal, drops the ribbon and unrolls the sheet downward.
 */
export default function ScrollLetter({ children }: { children: ReactNode }) {
  const [stage, setStage] = useState<Stage>("rolled");
  const [unrollMs, setUnrollMs] = useState(3000);
  const sheetRef = useRef<HTMLDivElement>(null);
  const id = useId();
  const sheetId = `${id}-sheet`;

  const stageRef = useRef<Stage>("rolled");
  stageRef.current = stage;
  const rootRef = useRef<HTMLDivElement>(null);

  const open = () => {
    if (stageRef.current !== "rolled") return;
    stageRef.current = "breaking";
    const sheet = sheetRef.current;
    if (!sheet) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      sheet.style.height = "auto";
      return setStage("open");
    }

    setStage("breaking");
    window.setTimeout(() => {
      // Unroll at a steady, readable pace (~650px/s), whatever the letter's length.
      const full = sheet.scrollHeight;
      const ms = Math.min(5200, Math.max(2400, (full / 650) * 1000));
      setUnrollMs(ms);
      setStage("unrolling");
      sheet.style.transitionDuration = `${ms}ms`;
      requestAnimationFrame(() => {
        sheet.style.height = `${full}px`;
      });
      window.setTimeout(() => {
        sheet.style.height = "auto"; // let it reflow freely on resize
        setStage("open");
      }, ms + 50);
    }, BREAK_MS);
  };

  // Until it's clicked, the letter stays rolled. If the reader instead keeps scrolling until the
  // letter has slid 75% of the way up the screen, it opens by itself.
  const openRef = useRef(open);
  openRef.current = open;
  useEffect(() => {
    const SLIDE = 0.50;
    const el = rootRef.current;
    if (!el) return;
    // Where the letter sat when the page loaded; if it's already high on screen (e.g. on /vision),
    // the reader must still scroll 75% of a screen before it auto-opens.
    const startTop = el.getBoundingClientRect().top;
    const onScroll = () => {
      if (stageRef.current !== "rolled") return;
      const vh = window.innerHeight;
      const threshold = Math.min(vh * (1 - SLIDE), startTop - vh * SLIDE);
      if (el.getBoundingClientRect().top <= threshold) openRef.current();
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);


  const sealed = stage === "rolled" || stage === "breaking";

  return (
    <div
      ref={rootRef}
      className={`scroll-letter relative mx-auto ${sealed ? "is-sealed" : ""}`}
      data-stage={stage}
      style={{ ["--unroll-ms" as string]: `${unrollMs}ms` }}
    >
      {/* Top curl */}
      <div aria-hidden className="scroll-roll scroll-roll--top" />

      {/* The sheet; its height grows from 0 as it unrolls */}
      <div id={sheetId} ref={sheetRef} className="scroll-sheet" style={{ height: 0 }} inert={sealed}>
        <div className="mx-[0.6rem] sm:mx-4">{children}</div>
      </div>

      {/* Bottom curl — travels down as the paper unrolls */}
      <div aria-hidden className={`scroll-roll scroll-roll--bottom ${stage === "unrolling" ? "is-rolling" : ""}`} />

      {/* Ribbon + wax seal, shown while closed */}
      {sealed && (
        <button
          type="button"
          onClick={open}
          aria-expanded={false}
          aria-controls={sheetId}
          aria-label="Break the seal and open the letter"
          className="scroll-seal-btn group absolute inset-x-0 top-0 z-10 flex cursor-pointer items-center justify-center"
        >
          <span aria-hidden className="scroll-ribbon" />
          <span aria-hidden className="scroll-seal">
            <span className="scroll-seal__half scroll-seal__half--l">
              <SealFace />
            </span>
            <span className="scroll-seal__half scroll-seal__half--r">
              <SealFace />
            </span>
          </span>
        </button>
      )}

      {stage === "rolled" && (
        <p aria-hidden className="eyebrow mt-16 text-center text-bronze/80 animate-pulse">
          Click the seal to open the letter
        </p>
      )}
    </div>
  );
}

function SealFace() {
  return (
    <span className="scroll-seal__face">
      <Crest className="h-[62%] w-[62%] opacity-80" tone="ivory" detailed={false} />
    </span>
  );
}
