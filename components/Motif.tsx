import type { Pillar } from "@/content/site";

// Abstract line motifs — one per pillar. All strokes use pathLength=1 so they can "draw" in.
const common = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 0.8,
  pathLength: 1,
};

export default function Motif({ type, className = "" }: { type: Pillar["motif"]; className?: string }) {
  return (
    <svg viewBox="0 0 120 120" className={className} aria-hidden="true">
      {type === "floor" && (
        // Concentric rings — a gathering around a centre
        <g>
          {[14, 26, 38, 50].map((r) => (
            <circle key={r} cx="60" cy="60" r={r} {...common} />
          ))}
          {Array.from({ length: 12 }, (_, i) => {
            const a = (i / 12) * Math.PI * 2;
            return (
              <circle key={i} cx={60 + Math.cos(a) * 38} cy={60 + Math.sin(a) * 38} r="2.2" {...common} />
            );
          })}
        </g>
      )}
      {type === "innovation" && (
        // Grid with a tracing path — systems under scrutiny
        <g>
          {[20, 40, 60, 80, 100].map((v) => (
            <line key={"h" + v} x1="10" y1={v} x2="110" y2={v} {...common} strokeOpacity={0.35} />
          ))}
          {[20, 40, 60, 80, 100].map((v) => (
            <line key={"v" + v} x1={v} y1="10" x2={v} y2="110" {...common} strokeOpacity={0.35} />
          ))}
          <polyline points="20,100 20,80 40,80 40,60 60,60 60,40 80,40 80,20 100,20" {...common} strokeWidth={1.2} />
          <circle cx="100" cy="20" r="4" {...common} />
          <circle cx="20" cy="100" r="2" fill="currentColor" />
        </g>
      )}
      {type === "business" && (
        // Interlocking circles — relationships
        <g>
          <circle cx="45" cy="50" r="28" {...common} />
          <circle cx="75" cy="50" r="28" {...common} />
          <circle cx="60" cy="76" r="28" {...common} />
        </g>
      )}
      {type === "knowledge" && (
        // An open book of fanned pages
        <g>
          {[0, 6, 12, 18].map((o) => (
            <path key={"l" + o} d={`M60 92 C ${45 - o} ${86 - o / 2}, ${28 - o} ${86 - o / 2}, ${16 - o / 2} ${92 - o}`} {...common} />
          ))}
          {[0, 6, 12, 18].map((o) => (
            <path key={"r" + o} d={`M60 92 C ${75 + o} ${86 - o / 2}, ${92 + o} ${86 - o / 2}, ${104 + o / 2} ${92 - o}`} {...common} />
          ))}
          <line x1="60" y1="92" x2="60" y2="40" {...common} />
          <path d="M60 40 L56 28 L60 18 L64 28 Z" {...common} />
        </g>
      )}
      {type === "performance" && (
        // A ledger — ruled lines with a measured mark
        <g>
          <rect x="22" y="16" width="76" height="88" {...common} />
          {[32, 44, 56, 68, 80, 92].map((y) => (
            <line key={y} x1="30" y1={y} x2="90" y2={y} {...common} strokeOpacity={0.45} />
          ))}
          <line x1="44" y1="16" x2="44" y2="104" {...common} />
          <circle cx="78" cy="56" r="9" {...common} />
        </g>
      )}
      {type === "stillness" && (
        // A horizon with a rising sun and still water
        <g>
          <path d="M30 70 A 30 30 0 0 1 90 70" {...common} />
          <line x1="10" y1="70" x2="110" y2="70" {...common} />
          {[80, 88, 96].map((y, i) => (
            <line key={y} x1={30 + i * 10} y1={y} x2={90 - i * 10} y2={y} {...common} strokeOpacity={0.5} />
          ))}
        </g>
      )}
      {type === "conditioning" && (
        // An ascending arc of steps
        <g>
          <path d="M14 100 Q 60 100 106 20" {...common} />
          {[0, 1, 2, 3, 4].map((i) => (
            <rect key={i} x={20 + i * 18} y={92 - i * 16} width="10" height={8 + i * 16} {...common} strokeOpacity={0.5} />
          ))}
        </g>
      )}
      {type === "reflection" && (
        // A mirrored arch — looking inward
        <g>
          <path d="M34 60 L34 34 A 26 26 0 0 1 86 34 L86 60" {...common} />
          <path d="M34 60 L34 86 A 26 26 0 0 0 86 86 L86 60" {...common} strokeOpacity={0.4} />
          <line x1="16" y1="60" x2="104" y2="60" {...common} />
          <circle cx="60" cy="40" r="5" {...common} />
          <circle cx="60" cy="80" r="5" {...common} strokeOpacity={0.4} />
        </g>
      )}
    </svg>
  );
}
