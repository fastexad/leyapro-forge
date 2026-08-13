import { motion } from "framer-motion";

type SectionHeaderProps = {
  index?: string;
  eyebrow?: string;
  title: string;
  description?: string;
  light?: boolean;
};

export function SectionHeader({ index, eyebrow, title, description, light }: SectionHeaderProps) {
  return (
    <div className="max-w-3xl">
      <div className="flex items-center gap-4">
        {index && (
          <span className="text-[10px] label-mono text-orange flex items-center gap-2">
            <span className="w-4 h-[1px] bg-orange/50" />
            {index}
          </span>
        )}
        {eyebrow && (
          <span className="text-[10px] label-mono uppercase tracking-[0.3em] text-muted-foreground">
            {eyebrow}
          </span>
        )}
      </div>
      <motion.h2 
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className={`mt-4 text-3xl font-display font-bold sm:text-5xl uppercase tracking-tight ${light ? 'text-white' : 'text-foreground'}`}
      >
        {title}
      </motion.h2>
      <motion.div 
        initial={{ width: 0 }}
        whileInView={{ width: 64 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="mt-6 h-1 bg-orange" 
      />
      {description && (
        <p className="mt-8 text-lg text-muted-foreground leading-relaxed max-w-2xl">
          {description}
        </p>
      )}
    </div>
  );
}

