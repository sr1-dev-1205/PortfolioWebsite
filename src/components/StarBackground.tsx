
import React, { useEffect, useRef } from 'react';

const StarBackground: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animationFrameId: number;
        let stars: { x: number; y: number; radius: number; opacity: number; speed: number }[] = [];

        const handleResize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            initStars();
        };

        const initStars = () => {
            const isMobile = window.innerWidth < 768;
            const density = isMobile ? 4000 : 2500; // MUCH lower density on mobile
            const starCount = Math.floor((window.innerWidth * window.innerHeight) / density);

            stars = [];
            for (let i = 0; i < starCount; i++) {
                stars.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    radius: Math.random() * 1.5 + 0.1,
                    opacity: Math.random(),
                    speed: Math.random() * 0.2 + 0.05,
                });
            }
        };

        const drawStars = () => {
            if (!ctx || !canvas) return;
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = '#FFF';

            // Check if user prefers reduced motion
            const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

            stars.forEach((star) => {
                ctx.beginPath();

                // Performance: Draw tiny stars as rectangles (faster than arc)
                if (star.radius < 1) {
                    ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
                    ctx.fillRect(star.x, star.y, star.radius * 2, star.radius * 2);
                } else {
                    ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
                    ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
                    ctx.fill();
                }

                if (!prefersReducedMotion) {
                    // Move stars only if not reduced motion
                    star.y -= star.speed;

                    // Reset if off screen
                    if (star.y < 0) {
                        star.y = canvas.height;
                        star.x = Math.random() * canvas.width;
                    }

                    // Twinkle effect (less frequent for performance)
                    if (Math.random() > 0.995) {
                        star.opacity = Math.random();
                    }
                }
            });

            if (!prefersReducedMotion) {
                animationFrameId = requestAnimationFrame(drawStars);
            }
        };

        window.addEventListener('resize', handleResize);
        handleResize();
        drawStars();

        return () => {
            window.removeEventListener('resize', handleResize);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 z-0 pointer-events-none bg-space-900"
        />
    );
};

export default StarBackground;
