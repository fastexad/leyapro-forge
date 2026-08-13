import { motion, useSpring, useTransform, MotionValue } from "framer-motion";
import heroAsset from "@/assets/hero-bridge.png.asset.json";

interface HeroBridgeBackgroundProps {
  mouseX: MotionValue<number>;
  mouseY: MotionValue<number>;
  y2: MotionValue<number>;
}

export function HeroBridgeBackground({ mouseX, mouseY, y2 }: HeroBridgeBackgroundProps) {
  const springConfig = { damping: 25, stiffness: 150 };
  
  // Subtle parallax for the main image
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [2, -2]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-2, 2]), springConfig);
  const translateX = useSpring(useTransform(mouseX, [-0.5, 0.5], [-10, 10]), springConfig);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      {/* 1. Base Layer: Technical Grid */}
      <div className="tech-grid pointer-events-none absolute inset-0 opacity-15" />
      
      {/* 2. Main Image Layer with Parallax */}
      <motion.div
        style={{ 
          rotateX, 
          rotateY,
          x: translateX,
          y: y2
        }}
        className="absolute inset-0 perspective-[1000px]"
      >
        <div className="relative w-full h-full">
          <img 
            src={heroAsset.url} 
            alt="Bridge Infrastructure" 
            loading="eager"
            fetchPriority="high"
            className="absolute right-0 top-0 h-full w-full lg:w-[85%] object-cover object-center lg:object-right opacity-80"
          />
          
          {/* 3. Gradient Overlays for readability and depth */}
          {/* Left-to-right dark gradient for text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-graphite-deep via-graphite-deep/80 to-transparent z-10" />
          
          {/* Bottom-to-top dark gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-graphite-deep via-transparent to-transparent z-10" />
          
          {/* Radial Orange/Copper Glow */}
          <div className="absolute right-0 bottom-0 w-[80%] h-[80%] bg-gradient-radial from-orange/10 via-copper/5 to-transparent blur-3xl z-10 pointer-events-none" />
        </div>
      </motion.div>

      {/* 4. Blueprint / Technical Lines Overlay */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-20 z-20">
        <div className="absolute top-[15%] w-full h-[1px] bg-orange/30" />
        <div className="absolute top-[75%] w-full h-[1px] bg-steel/30" />
        <div className="absolute left-[25%] h-full w-[1px] bg-orange/30" />
        <div className="absolute left-[65%] h-full w-[1px] bg-steel/30" />
        
        {/* Subtle coordinate markers */}
        <div className="absolute top-10 left-10 text-[8px] font-mono text-white/20">LAT 46.3476 / LON 48.0336</div>
        <div className="absolute bottom-10 right-10 text-[8px] font-mono text-white/20 uppercase tracking-widest">Structural Analysis v4.2</div>
      </div>
      
      {/* 5. Dust / Sandblasting Particles */}
      <div className="absolute inset-0 z-20 pointer-events-none overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-orange/20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: Math.random() * 2 + 1,
              height: Math.random() * 2 + 1,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, 15, 0],
              opacity: [0, 0.4, 0]
            }}
            transition={{
              duration: Math.random() * 8 + 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>
    </div>
  );
}
