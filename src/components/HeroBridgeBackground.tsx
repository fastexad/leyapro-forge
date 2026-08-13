const particles = [
  { left: "12%", top: "18%", size: "2px", delay: "0s", duration: "8s" },
  { left: "22%", top: "72%", size: "1px", delay: "1.2s", duration: "10s" },
  { left: "34%", top: "42%", size: "2px", delay: "2.4s", duration: "9s" },
  { left: "48%", top: "28%", size: "1px", delay: "3.1s", duration: "11s" },
  { left: "58%", top: "64%", size: "2px", delay: "0.8s", duration: "12s" },
  { left: "69%", top: "21%", size: "1px", delay: "2.1s", duration: "8.5s" },
  { left: "76%", top: "78%", size: "2px", delay: "3.6s", duration: "10.5s" },
  { left: "88%", top: "45%", size: "1px", delay: "1.6s", duration: "9.5s" },
  { left: "93%", top: "16%", size: "2px", delay: "4.2s", duration: "13s" },
  { left: "41%", top: "86%", size: "1px", delay: "2.8s", duration: "8s" },
];

export function HeroBridgeBackground() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
      <div className="absolute inset-0 bg-graphite-deep" />

      <img
        src="/hero-bridge.png"
        alt=""
        loading="eager"
        fetchPriority="high"
        decoding="async"
        className="absolute right-0 top-0 h-full w-full lg:w-[86%] object-cover object-center lg:object-right opacity-85"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-graphite-deep via-graphite-deep/86 to-graphite-deep/10" />
      <div className="absolute inset-0 bg-gradient-to-t from-graphite-deep via-transparent to-graphite-deep/45" />
      <div className="absolute right-0 bottom-0 w-[80%] h-[80%] bg-gradient-radial from-orange/12 via-copper/5 to-transparent blur-3xl pointer-events-none" />

      <div className="tech-grid pointer-events-none absolute inset-0 opacity-15" />
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-20">
        <div className="absolute top-[15%] w-full h-px bg-orange/30" />
        <div className="absolute top-[75%] w-full h-px bg-steel/30" />
        <div className="absolute left-[25%] h-full w-px bg-orange/30" />
        <div className="absolute left-[65%] h-full w-px bg-steel/30" />
        <div className="absolute top-10 left-10 text-[8px] font-mono text-white/20">
          LAT 46.3476 / LON 48.0336
        </div>
        <div className="absolute bottom-10 right-10 text-[8px] font-mono text-white/20 uppercase tracking-widest">
          Structural Analysis v4.2
        </div>
      </div>

      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {particles.map((particle) => (
          <span
            key={`${particle.left}-${particle.top}`}
            className="hero-particle absolute rounded-full bg-orange/25"
            style={{
              left: particle.left,
              top: particle.top,
              width: particle.size,
              height: particle.size,
              animationDelay: particle.delay,
              animationDuration: particle.duration,
            }}
          />
        ))}
      </div>
    </div>
  );
}
