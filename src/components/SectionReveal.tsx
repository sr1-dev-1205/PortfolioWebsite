import React, { useEffect, useRef, ReactNode } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';

interface SectionRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  enableParallax?: boolean;
  parallaxOffset?: number;
}

const SectionReveal: React.FC<SectionRevealProps> = ({ 
  children, 
  className = '', 
  delay = 0,
  enableParallax = false,
  parallaxOffset = 50
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(
    scrollYProgress,
    [0, 1],
    enableParallax ? [parallaxOffset, -parallaxOffset] : [0, 0]
  );

  const opacity = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    [0, 1, 1, 0.3]
  );

  return (
    <motion.div
      ref={ref}
      style={enableParallax ? { y, opacity } : {}}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.16, 1, 0.3, 1]
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default SectionReveal;
