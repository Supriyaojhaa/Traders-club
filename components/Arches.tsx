// Architectural line drawing: a colonnade of arches. Used behind the hero and in the final CTA.
export default function Arches({ className = "" }: { className?: string }) {
  const arches = [0, 1, 2, 3, 4];
  const w = 160;
  const p = { fill: "none", stroke: "currentColor", strokeWidth: 0.7, pathLength: 1 };
  return (
    <svg viewBox="0 0 860 520" className={className} aria-hidden="true" preserveAspectRatio="xMidYMax meet">
      {/* entablature */}
      <line x1="10" y1="40" x2="850" y2="40" {...p} />
      <line x1="10" y1="52" x2="850" y2="52" {...p} />
      <line x1="10" y1="516" x2="850" y2="516" {...p} />
      {arches.map((i) => {
        const x = 30 + i * w;
        const inner = 26;
        return (
          <g key={i}>
            {/* outer arch + column */}
            <path d={`M ${x} 516 L ${x} 200 A ${w / 2} ${w / 2} 0 0 1 ${x + w} 200 L ${x + w} 516`} {...p} />
            {/* inner arch */}
            <path
              d={`M ${x + inner} 516 L ${x + inner} 210 A ${w / 2 - inner} ${w / 2 - inner} 0 0 1 ${x + w - inner} 210 L ${x + w - inner} 516`}
              {...p}
              strokeOpacity={0.55}
            />
            {/* keystone */}
            <path d={`M ${x + w / 2 - 6} ${120} L ${x + w / 2 + 6} 120 L ${x + w / 2 + 4} 134 L ${x + w / 2 - 4} 134 Z`} {...p} />
            {/* capital */}
            <line x1={x - 6} y1="200" x2={x + inner + 6} y2="200" {...p} />
          </g>
        );
      })}
      <line x1={30 + 5 * w - 26 - 6} y1="200" x2={30 + 5 * w + 6} y2="200" {...p} />
    </svg>
  );
}
