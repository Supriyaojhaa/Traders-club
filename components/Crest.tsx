// Original club roundel. Placeholder monogram "PTC" until the final name is confirmed.
type Props = { className?: string; tone?: "gold" | "ivory" | "ink"; detailed?: boolean };

const tones = {
  gold: "var(--color-gold)",
  ivory: "var(--color-ivory)",
  ink: "var(--color-ink)",
};

const C = 100;
const pt = (r: number, deg: number) => {
  const a = (deg * Math.PI) / 180;
  return [C + r * Math.cos(a), C + r * Math.sin(a)] as const;
};

// One laurel branch following an arc around the monogram. side=1 → left, side=-1 → right (mirrored).
function Branch({ side }: { side: 1 | -1 }) {
  const r = 46;
  const start = 112; // near the bottom
  const end = 222; // up the side
  const steps = 8;
  const map = (deg: number) => (side === 1 ? deg : 180 - deg);
  const [sx, sy] = pt(r, map(start));
  const [ex, ey] = pt(r, map(end));
  const sweep = side === 1 ? 1 : 0;

  const leaves = [];
  for (let i = 0; i < steps; i++) {
    const deg = start + ((end - start) * (i + 0.5)) / steps;
    for (const dir of [1, -1]) {
      const [x, y] = pt(r + dir * 4.2, map(deg));
      // tangent direction (degrees) along travel, tilted outward/inward
      const tangent = side === 1 ? deg + 90 : 180 - deg - 90;
      const rot = tangent + dir * side * 28;
      const size = 1 - i * 0.05;
      leaves.push(
        <ellipse
          key={`${i}${dir}`}
          cx={x.toFixed(2)}
          cy={y.toFixed(2)}
          rx={(4.6 * size).toFixed(2)}
          ry={(1.7 * size).toFixed(2)}
          transform={`rotate(${rot.toFixed(1)} ${x.toFixed(2)} ${y.toFixed(2)})`}
          fill="currentColor"
        />
      );
    }
  }
  return (
    <g>
      <path
        d={`M ${sx.toFixed(2)} ${sy.toFixed(2)} A ${r} ${r} 0 0 ${sweep} ${ex.toFixed(2)} ${ey.toFixed(2)}`}
        fill="none"
        stroke="currentColor"
        strokeWidth="0.7"
      />
      {leaves}
    </g>
  );
}

export default function Crest({ className = "", tone = "gold", detailed = true }: Props) {
  const color = tones[tone];
  return (
    <svg
      viewBox="0 0 200 200"
      className={className}
      style={{ color }}
      role="img"
      aria-label="The Professional Traders Club emblem"
    >
      <defs>
        <path id="crest-top" d="M 24 100 A 76 76 0 0 1 176 100" />
        <path id="crest-bottom" d="M 18 100 A 82 82 0 0 0 182 100" />
      </defs>
      <circle cx="100" cy="100" r="96" fill="none" stroke="currentColor" strokeWidth="1" />
      <circle cx="100" cy="100" r="92" fill="none" stroke="currentColor" strokeWidth="0.5" />
      <circle cx="100" cy="100" r="66" fill="none" stroke="currentColor" strokeWidth="0.75" />
      {detailed && (
        <>
          <text
            fill="currentColor"
            style={{ fontFamily: "var(--font-sans)", fontSize: 8.4, letterSpacing: "0.2em", fontWeight: 600 }}
          >
            <textPath href="#crest-top" startOffset="50%" textAnchor="middle">
              THE PROFESSIONAL TRADERS CLUB
            </textPath>
          </text>
          <text
            fill="currentColor"
            style={{ fontFamily: "var(--font-sans)", fontSize: 7.4, letterSpacing: "0.3em", fontWeight: 600 }}
          >
            <textPath href="#crest-bottom" startOffset="50%" textAnchor="middle">
              TRADE · THINK · LIVE
            </textPath>
          </text>
          <path d="M 21 97 l 2.5 3 -2.5 3 -2.5 -3z" fill="currentColor" />
          <path d="M 179 97 l 2.5 3 -2.5 3 -2.5 -3z" fill="currentColor" />
        </>
      )}
      <Branch side={1} />
      <Branch side={-1} />
      <text
        x="100"
        y="109"
        textAnchor="middle"
        fill="currentColor"
        style={{ fontFamily: "var(--font-serif)", fontSize: 28, fontWeight: 500, letterSpacing: "0.05em" }}
      >
        PTC
      </text>
      <line x1="86" y1="118" x2="114" y2="118" stroke="currentColor" strokeWidth="0.6" />
      <path d="M100 72 l3 4 -3 4 -3 -4z" fill="currentColor" />
    </svg>
  );
}
