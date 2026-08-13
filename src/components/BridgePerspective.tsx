import { motion } from "framer-motion";

interface BridgePerspectiveProps {
  className?: string;
}

export function BridgePerspective({ className }: BridgePerspectiveProps) {
  return (
    <svg
      viewBox="0 0 1000 600"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      preserveAspectRatio="xMidYMax slice"
    >
      <defs>
        <linearGradient id="metal-glow" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="rgba(255, 120, 40, 0)" />
          <stop offset="50%" stopColor="rgba(255, 120, 40, 0.4)" />
          <stop offset="100%" stopColor="rgba(255, 120, 40, 0)" />
        </linearGradient>
        
        <filter id="glow">
          <feGaussianBlur stdDeviation="2" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        
        <mask id="dust-mask">
          <radialGradient id="dust-gradient" cx="50%" cy="100%" r="50%">
            <stop offset="0%" stopColor="white" stopOpacity="0.4" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </radialGradient>
        </mask>
      </defs>

      {/* Main Girders - Perspective from below */}
      <g className="bridge-structure">
        {/* Far Girder */}
        <motion.path
          d="M200 550 L950 250 L950 270 L200 580 Z"
          stroke="rgba(148, 163, 184, 0.2)"
          strokeWidth="1"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
        />
        
        {/* Near Main Girder */}
        <motion.path
          d="M0 600 L850 150 L850 190 L0 650 Z"
          fill="rgba(15, 23, 42, 0.8)"
          stroke="currentColor"
          strokeWidth="2"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
        
        {/* Perspective Trusses */}
        {[...Array(10)].map((_, i) => (
          <motion.line
            key={i}
            x1={i * 80}
            y1={600 - i * 45}
            x2={i * 80 + 20}
            y2={550 - i * 45}
            stroke="currentColor"
            strokeWidth="1"
            opacity="0.3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.3 }}
            transition={{ delay: 0.5 + i * 0.1 }}
          />
        ))}

        {/* Diagonal Bracing */}
        <motion.path
          d="M50 570 L130 525 M210 480 L290 435 M370 390 L450 345 M530 300 L610 255"
          stroke="url(#metal-glow)"
          strokeWidth="3"
          filter="url(#glow)"
        />
      </g>

      {/* Surface Details / Rivets */}
      <g opacity="0.2">
        {[...Array(20)].map((_, i) => (
          <circle key={i} cx={i * 40} cy={600 - i * 22} r="1.5" fill="currentColor" />
        ))}
      </g>
    </svg>
  );
}
