export function BridgeAbstract({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 800 300"
      fill="none"
      aria-hidden="true"
      className={className}
      preserveAspectRatio="xMidYMid meet"
    >
      <g stroke="currentColor" strokeWidth="1" opacity="0.5">
        <path d="M0 220H800" />
        <path d="M0 232H800" opacity="0.4" />
        <path d="M120 220V300M400 220V300M680 220V300" opacity="0.5" />
      </g>
      <path
        d="M20 220C160 60 320 60 400 140C480 220 640 60 780 220"
        stroke="var(--orange)"
        strokeWidth="2"
      />
      <g stroke="var(--steel)" strokeWidth="1" opacity="0.6">
        {Array.from({ length: 26 }).map((_, i) => {
          const x = 30 + i * 29;
          const t = i / 25;
          const y = 220 - Math.abs(Math.sin(t * Math.PI * 2)) * 120;
          return <line key={i} x1={x} y1={y} x2={x} y2={220} />;
        })}
      </g>
      <g fill="var(--orange)">
        <circle cx="400" cy="140" r="4" />
        <circle cx="20" cy="220" r="3" />
        <circle cx="780" cy="220" r="3" />
      </g>
    </svg>
  );
}