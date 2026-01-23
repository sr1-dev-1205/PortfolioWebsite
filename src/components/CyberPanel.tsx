import React from "react";
import { motion } from "framer-motion";

interface CyberPanelProps {
  children: React.ReactNode;
  className?: string;
  corner?: "tl" | "tr" | "bl" | "br" | "all";
  glowColor?: string;
  label?: string;
  status?: "active" | "standby" | "alert";
}

const CyberPanel: React.FC<CyberPanelProps> = ({
  children,
  className = "",
  corner = "all",
  glowColor = "rgba(0, 240, 255, 0.4)",
  label,
  status = "standby",
}) => {
  const statusColors = {
    active: "#39FF14",
    standby: "#00F0FF",
    alert: "#FF00AA",
  };

  const cornerSize = 16;

  const shouldShowCorner = (position: string) => {
    if (corner === "all") return true;
    return corner === position;
  };

  return (
    <div className={`relative group ${className}`}>
      {/* Main Panel */}
      <div className="relative cyber-panel rounded-sm overflow-hidden h-full">
        {/* Corner Notches */}
        {shouldShowCorner("tl") && (
          <div
            className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 transition-colors duration-300"
            style={{ borderColor: glowColor }}
          />
        )}
        {shouldShowCorner("tr") && (
          <div
            className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 transition-colors duration-300"
            style={{ borderColor: glowColor }}
          />
        )}
        {shouldShowCorner("bl") && (
          <div
            className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 transition-colors duration-300"
            style={{ borderColor: glowColor }}
          />
        )}
        {shouldShowCorner("br") && (
          <div
            className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 transition-colors duration-300"
            style={{ borderColor: glowColor }}
          />
        )}

        {/* Panel Label */}
        {label && (
          <div className="absolute top-0 left-6 transform -translate-y-1/2 px-3 py-1 bg-terminal-black border border-grid-line rounded-sm">
            <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-neon-cyan">
              {label}
            </span>
          </div>
        )}

        {/* Status Indicator */}
        <div className="absolute top-3 right-3 flex items-center gap-2">
          <motion.div
            className="w-2 h-2 rounded-full"
            style={{ backgroundColor: statusColors[status] }}
            animate={{
              opacity: [0.4, 1, 0.4],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <span className="font-mono text-[8px] uppercase tracking-widest text-gray-600">
            {status}
          </span>
        </div>

        {/* Content */}
        <div className="relative z-10">{children}</div>

        {/* Hover Glow Effect */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{
            background: `radial-gradient(circle at 50% 50%, ${glowColor} 0%, transparent 70%)`,
          }}
        />
      </div>
    </div>
  );
};

export default CyberPanel;
