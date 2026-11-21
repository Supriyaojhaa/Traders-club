import type { Pillar } from "@/content/site";

// Gilded, animated icons for the Club page pillar cards.
// Every stroked element uses pathLength=1 so the parent <Reveal draw> can draw it in.

type Motif = Pillar["motif"];

const r2 = (n: number) => Math.round(n * 100) / 100;

// Gear outline for the Innovation icon (8 teeth around 60,52)
const gearPath = (() => {
  const cx = 60;
  const cy = 52;
  const pts: string[] = [];
  for (let i = 0; i < 8; i++) {
    const base = (i * Math.PI) / 4;
    const seg: [number, number][] = [
      [base - 0.2, 13],
      [base + 0.2, 13],
      [base + 0.3, 9.5],
      [base + Math.PI / 4 - 0.3, 9.5],
    ];
    seg.forEach(([a, r]) => pts.push(`${r2(cx + Math.cos(a) * r)} ${r2(cy + Math.sin(a) * r)}`));
  }
  return `M${pts.join(" L")} Z`;
})();

// Candles for the Trading Floor icon: x, high, low, open, close (SVG y grows downward)
const candles = [
  { x: 30, hi: 78, lo: 98, o: 94, c: 84 },
  { x: 46, hi: 64, lo: 90, o: 70, c: 82 },
  { x: 62, hi: 54, lo: 82, o: 76, c: 62 },
  { x: 78, hi: 38, lo: 68, o: 60, c: 46 },
  { x: 94, hi: 22, lo: 52, o: 46, c: 30 },
];

// Glowing points that travel along each icon once it has drawn in
const sparks: Record<Motif, { d: string; dur: number; bounce?: boolean }[]> = {
  floor: [{ d: "M24 92 L44 76 L60 70 L78 50 L100 26", dur: 3.5 }],
  innovation: [{ d: gearPath, dur: 5 }],
  business: [
    { d: "M50 46 L36 60", dur: 2.4, bounce: true },
    { d: "M70 46 L84 60", dur: 2.4, bounce: true },
    { d: "M44 90 L76 90", dur: 3, bounce: true },
  ],
  knowledge: [{ d: "M60 34 L60 96", dur: 3, bounce: true }],
  performance: [{ d: "M22 84 A 38 38 0 0 1 98 84", dur: 4, bounce: true }],
  stillness: [{ d: "M60 18 A 44 44 0 1 1 59.9 18", dur: 10 }],
  conditioning: [{ d: "M12 90 H36 L42 80 L48 102 L56 66 L64 104 L70 90 H108", dur: 3 }],
  reflection: [{ d: "M40 104 V86 C 30 78 26 66 26 54 C 26 34 40 20 58 20 C 78 20 90 34 90 50 L 96 64 L 89 66 V76 C 89 82 84 86 78 86 H70 V104", dur: 7, bounce: true }],
};

export default function PillarIcon({ type, className = "" }: { type: Motif; className?: string }) {
  const id = `picon-${type}`;
  const s = {
    fill: "none",
    stroke: `url(#${id})`,
    strokeWidth: 2.2,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    pathLength: 1,
  };
  const soft = { ...s, strokeWidth: 1.4, strokeOpacity: 0.55 };
  const fillTint = { fill: `url(#${id})`, fillOpacity: 0.18 };

  return (
    <svg viewBox="0 0 120 120" className={`picon picon--${type} ${className}`} aria-hidden="true">
      <defs>
        <linearGradient id={id} gradientUnits="userSpaceOnUse" x1="10" y1="10" x2="110" y2="110">
          <stop offset="0%" stopColor="#f6e7c4" />
          <stop offset="50%" stopColor="#d8b878" />
          <stop offset="100%" stopColor="#a8783f" />
        </linearGradient>
      </defs>

      {type === "floor" && (
        // Candlestick chart with a rising trend
        <g>
          <path d="M16 16 V104 H108" {...soft} />
          {candles.map((k, i) => {
            const up = k.c < k.o;
            const top = Math.min(k.o, k.c);
            return (
              <g key={k.x} className="i-candle" style={{ animationDelay: `${3 + i * 0.2}s` }}>
                <line x1={k.x} y1={k.hi} x2={k.x} y2={k.lo} {...s} strokeWidth={1.4} />
                <rect
                  x={k.x - 5}
                  y={top}
                  width="10"
                  height={Math.abs(k.o - k.c)}
                  rx="1.5"
                  {...s}
                  {...(up ? { fill: `url(#${id})`, fillOpacity: 0.55 } : {})}
                />
              </g>
            );
          })}
          <path d="M24 92 L44 76 L60 70 L78 50 L100 26" {...s} strokeWidth={1.4} />
          <path d="M92 26 H100 V34" {...s} strokeWidth={1.6} />
        </g>
      )}

      {type === "innovation" && (
        // Lightbulb with a turning gear inside
        <g>
          <path
            d="M60 24 C 42 24 33 37 33 50 C 33 61 39 67 44 74 C 47 78 48 81 48 85 L72 85 C 72 81 73 78 76 74 C 81 67 87 61 87 50 C 87 37 78 24 60 24 Z"
            {...s}
            {...fillTint}
          />
          <path d="M49 93 H71" {...s} />
          <path d="M51 101 H69" {...s} />
          <path d="M55 108 H65" {...s} />
          <path d={gearPath} {...s} strokeWidth={1.6} className="i-gear" />
          <circle cx="60" cy="52" r="3.5" {...s} strokeWidth={1.4} className="i-gear" />
          {[-160, -125, -90, -55, -20].map((deg, i) => {
            const a = (deg * Math.PI) / 180;
            return (
              <line
                key={deg}
                x1={r2(60 + Math.cos(a) * 35)}
                y1={r2(52 + Math.sin(a) * 35)}
                x2={r2(60 + Math.cos(a) * 43)}
                y2={r2(52 + Math.sin(a) * 43)}
                {...s}
                className="i-ray"
                style={{ animationDelay: `${3 + i * 0.15}s` }}
              />
            );
          })}
        </g>
      )}

      {type === "business" && (
        // Three connected people — a network
        <g>
          {[
            [60, 30],
            [28, 74],
            [92, 74],
          ].map(([cx, cy], i) => (
            <g key={i} className="i-person" style={{ animationDelay: `${3 + i * 0.5}s` }}>
              <circle cx={cx} cy={cy - 8} r="8" {...s} {...fillTint} />
              <path d={`M${cx - 14} ${cy + 16} C ${cx - 14} ${cy + 3}, ${cx + 14} ${cy + 3}, ${cx + 14} ${cy + 16}`} {...s} />
            </g>
          ))}
          <path d="M50 46 L36 60" {...soft} />
          <path d="M70 46 L84 60" {...soft} />
          <path d="M44 90 L76 90" {...soft} />
        </g>
      )}

      {type === "knowledge" && (
        // Open book with a turning page
        <g>
          <path d="M60 34 C 48 26 30 26 16 30 V92 C 30 88 48 88 60 96 Z" {...s} {...fillTint} />
          <path d="M60 34 C 72 26 90 26 104 30 V92 C 90 88 72 88 60 96 Z" {...s} {...fillTint} />
          {[46, 56, 66, 76].map((y) => (
            <path key={"l" + y} d={`M26 ${y - 4} C 36 ${y - 6}, 44 ${y - 5}, 51 ${y - 1}`} {...soft} />
          ))}
          {[46, 56, 66, 76].map((y) => (
            <path key={"r" + y} d={`M69 ${y - 1} C 76 ${y - 5}, 84 ${y - 6}, 94 ${y - 4}`} {...soft} />
          ))}
          <path
            d="M60 34 C 72 26 90 26 104 30 V92 C 90 88 72 88 60 96 Z"
            {...s}
            strokeWidth={1.4}
            fill={`url(#${id})`}
            fillOpacity={0.35}
            className="i-page"
          />
          <path d="M38 10 L40 16 L46 18 L40 20 L38 26 L36 20 L30 18 L36 16 Z" {...s} strokeWidth={1.2} className="i-twinkle" />
          <path d="M84 6 L85.5 11 L90 12.5 L85.5 14 L84 19 L82.5 14 L78 12.5 L82.5 11 Z" {...s} strokeWidth={1.2} className="i-twinkle i-twinkle--b" />
        </g>
      )}

      {type === "performance" && (
        // Gauge with a sweeping needle
        <g>
          <path d="M22 84 A 38 38 0 0 1 98 84" {...s} />
          {Array.from({ length: 7 }, (_, i) => {
            const a = Math.PI + (i * Math.PI) / 6;
            return (
              <line
                key={i}
                x1={r2(60 + Math.cos(a) * 27)}
                y1={r2(84 + Math.sin(a) * 27)}
                x2={r2(60 + Math.cos(a) * 32)}
                y2={r2(84 + Math.sin(a) * 32)}
                {...s}
                strokeWidth={1.6}
              />
            );
          })}
          <line x1="60" y1="84" x2="60" y2="54" {...s} strokeWidth={2.6} className="i-needle" />
          <circle cx="60" cy="84" r="5" {...s} fill={`url(#${id})`} />
          {[0, 1, 2, 3].map((i) => (
            <rect
              key={i}
              x={39 + i * 12}
              y={108 - (5 + i * 3)}
              width="7"
              height={5 + i * 3}
              rx="1"
              {...s}
              strokeWidth={1.4}
              fill={`url(#${id})`}
              fillOpacity={0.4}
              className="i-bar"
              style={{ animationDelay: `${3 + i * 0.2}s` }}
            />
          ))}
        </g>
      )}

      {type === "stillness" && (
        // Lotus with a breathing aura
        <g>
          <circle cx="60" cy="62" r="44" {...soft} strokeOpacity={0.3} className="i-aura" />
          <path d="M60 84 C 40 86 24 78 18 66 C 32 64 48 70 60 84 Z" {...s} {...fillTint} className="i-petal i-petal--outer-l" />
          <path d="M60 84 C 80 86 96 78 102 66 C 88 64 72 70 60 84 Z" {...s} {...fillTint} className="i-petal i-petal--outer-r" />
          <path d="M60 82 C 44 80 34 66 34 50 C 46 52 56 62 60 82 Z" {...s} {...fillTint} className="i-petal i-petal--l" />
          <path d="M60 82 C 76 80 86 66 86 50 C 74 52 64 62 60 82 Z" {...s} {...fillTint} className="i-petal i-petal--r" />
          <path d="M60 36 C 71 50 71 70 60 82 C 49 70 49 50 60 36 Z" {...s} fill={`url(#${id})`} fillOpacity={0.35} />
          <path d="M30 96 H90" {...soft} className="i-water" />
          <path d="M42 104 H78" {...soft} className="i-water i-water--b" />
        </g>
      )}

      {type === "conditioning" && (
        // Dumbbell over a heartbeat line
        <g>
          <g className="i-lift">
            <path d="M36 44 H84" {...s} strokeWidth={3} />
            <rect x="20" y="30" width="9" height="28" rx="2" {...s} fill={`url(#${id})`} fillOpacity={0.45} />
            <rect x="29" y="35" width="7" height="18" rx="2" {...s} />
            <rect x="91" y="30" width="9" height="28" rx="2" {...s} fill={`url(#${id})`} fillOpacity={0.45} />
            <rect x="84" y="35" width="7" height="18" rx="2" {...s} />
          </g>
          <path d="M12 90 H36 L42 80 L48 102 L56 66 L64 104 L70 90 H108" {...s} strokeWidth={1.8} className="i-ecg" />
        </g>
      )}

      {type === "reflection" && (
        // A head in profile with a beating heart inside
        <g>
          <path
            d="M40 104 V86 C 30 78 26 66 26 54 C 26 34 40 20 58 20 C 78 20 90 34 90 50 L 96 64 L 89 66 V76 C 89 82 84 86 78 86 H70 V104"
            {...s}
            {...fillTint}
          />
          <circle cx="58" cy="52" r="8" {...s} strokeWidth={1.2} className="i-ping" />
          <circle cx="58" cy="52" r="8" {...s} strokeWidth={1.2} className="i-ping i-ping--b" />
          <path
            d="M58 64 C 46 56 44 46 50 42 C 54 40 57 42 58 45 C 59 42 62 40 66 42 C 72 46 70 56 58 64 Z"
            {...s}
            fill={`url(#${id})`}
            fillOpacity={0.55}
            className="i-heart"
          />
        </g>
      )}

      <g className="i-sparks">
        {sparks[type].map((sp, i) => (
          <circle key={i} r="2" fill="#fbf0d6">
            <animateMotion
              path={sp.d}
              dur={`${sp.dur}s`}
              begin={`${i * 0.8}s`}
              repeatCount="indefinite"
              {...(sp.bounce ? { keyPoints: "0;1;0", keyTimes: "0;0.5;1", calcMode: "linear" } : {})}
            />
          </circle>
        ))}
      </g>
    </svg>
  );
}
