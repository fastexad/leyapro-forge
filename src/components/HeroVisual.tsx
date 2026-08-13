import { motion, useSpring, useTransform, MotionValue } from "framer-motion";
import { BridgePerspective } from "./BridgePerspective";

interface HeroVisualProps {
  mouseX: MotionValue<number>;
  mouseY: MotionValue<number>;
  y2: MotionValue<number>;
}

export function HeroVisual({ mouseX, mouseY, y2 }: HeroVisualProps) {
  const springConfig = { damping: 25, stiffness: 150 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [5, -5]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-5, 5]), springConfig);
  const translateX = useSpring(useTransform(mouseX, [-0.5, 0.5], [-20, 20]), springConfig);

  return (
    <div className="relative h-[500px] lg:h-[700px] flex items-center justify-center w-full">
      <motion.div
        style={{ 
          rotateX, 
          rotateY,
          x: translateX,
          y: y2
        }}
        className="relative w-full h-full flex items-center justify-center perspective-[1000px]"
      >
        {/* The Bridge Silhouette */}
        <BridgePerspective className="w-[120%] h-auto text-steel/40 drop-shadow-[0_0_30px_rgba(255,120,40,0.1)]" />
        
        {/* Sandblasting Dust Effect (Bottom Right) */}
        <motion.div 
          className="absolute -bottom-10 right-0 w-[300px] h-[200px] bg-gradient-radial from-orange/10 to-transparent blur-3xl"
          animate={{
            opacity: [0.3, 0.5, 0.3],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 5, repeat: Infinity }}
        />
      </motion.div>

      {/* Floating UI Elements */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1 }}
        className="absolute top-1/4 right-0 panel p-4 bg-black/60 border-orange/20 backdrop-blur-md hidden xl:block"
      >
        <p className="text-[9px] label-mono text-orange mb-2">PROCESS_MONITOR: ACTIVE</p>
        <div className="flex gap-1">
          {[...Array(12)].map((_, i) => (
            <div key={i} className={`h-3 w-1 ${i < 8 ? 'bg-orange' : 'bg-white/10'}`} />
          ))}
        </div>
        <p className="text-[10px] text-white mt-3 font-bold">AKZ_PROGRESS: 84%</p>
      </motion.div>
    </div>
  );
}
