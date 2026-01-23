import React from "react";
import { motion } from "framer-motion";

interface DataStreamProps {
  count?: number;
  speed?: number;
  color?: string;
}

const DataStream: React.FC<DataStreamProps> = ({
  count = 20,
  speed = 2,
  color = "rgba(0, 240, 255, 0.4)",
}) => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {Array.from({ length: count }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-px"
          style={{
            left: `${(i / count) * 100}%`,
            height: `${Math.random() * 30 + 10}%`,
            background: `linear-gradient(to bottom, transparent, ${color}, transparent)`,
            filter: "blur(0.5px)",
          }}
          initial={{
            y: "-100%",
            opacity: 0,
          }}
          animate={{
            y: "200vh",
            opacity: [0, 0.8, 0.8, 0],
          }}
          transition={{
            duration: speed + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
};

export default DataStream;
