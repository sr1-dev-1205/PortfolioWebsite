import React, { useEffect, useRef, useState } from 'react';

interface Particle {
  x: number;
  y: number;
  id: number;
  size: number;
  opacity: number;
  life: number;
  velocityX: number;
  velocityY: number;
  char?: string;
}

const CursorTrail: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef({ x: 0, y: 0 });
  const frameRef = useRef<number>(0);
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    // Track mouse position
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
      
      // Create new particle - binary/data stream effect
      if (isActive && Math.random() > 0.6) {
        const chars = ['1', '0', '▓', '▒', '░', '│', '╱', '╲'];
        particlesRef.current.push({
          x: e.clientX,
          y: e.clientY,
          id: Date.now() + Math.random(),
          size: Math.random() * 2 + 1,
          opacity: 1,
          life: 1,
          velocityX: (Math.random() - 0.5) * 0.3,
          velocityY: Math.random() * 1.5 + 0.5, // Fall down like terminal rain
          char: Math.random() > 0.5 ? chars[Math.floor(Math.random() * chars.length)] : undefined,
        });
      }
    };

    // Mouse enter/leave detection
    const handleMouseEnter = () => setIsActive(true);
    const handleMouseLeave = () => setIsActive(false);

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particlesRef.current = particlesRef.current.filter(particle => {
        // Update particle
        particle.x += particle.velocityX;
        particle.y += particle.velocityY;
        particle.life -= 0.015;
        particle.opacity = particle.life;

        if (particle.life <= 0) return false;

        // Draw particle - terminal/coder style
        if (particle.char) {
          // Draw character (binary/matrix style)
          ctx.font = `${particle.size * 6}px 'JetBrains Mono', monospace`;
          ctx.fillStyle = `rgba(0, 240, 255, ${particle.opacity})`;
          ctx.fillText(particle.char, particle.x, particle.y);
        } else {
          // Draw pixel/dot (retro terminal style)
          ctx.fillStyle = `rgba(57, 255, 20, ${particle.opacity * 0.8})`;
          ctx.fillRect(
            particle.x - particle.size,
            particle.y - particle.size,
            particle.size * 2,
            particle.size * 2
          );
        }

        // Draw subtle glow trail
        const gradient = ctx.createRadialGradient(
          particle.x, particle.y, 0,
          particle.x, particle.y, particle.size * 4
        );
        gradient.addColorStop(0, `rgba(0, 240, 255, ${particle.opacity * 0.3})`);
        gradient.addColorStop(1, `rgba(0, 240, 255, 0)`);
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size * 4, 0, Math.PI * 2);
        ctx.fill();

        return true;
      });



      frameRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, [isActive]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-50"
      style={{ mixBlendMode: 'normal' }}
    />
  );
};

export default CursorTrail;
