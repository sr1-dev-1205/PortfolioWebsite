import React, { useRef, useMemo, Suspense, useEffect } from 'react';
import { Canvas, useFrame, useLoader, ThreeEvent } from '@react-three/fiber';
import { Preload } from '@react-three/drei';
import * as THREE from 'three';
import moonImg from '../Assets/textures/moon.jpg';

interface PlanetProps {
    className?: string;
    isPaused?: boolean;
}

// Physics constants tuned for "heavy" Apple-like feel
const BASE_SPIN = 0.05;        // Slower, more majestic base spin
const DRAG_SENSITIVITY = 0.25; // Drastically reduced for controlled, weighty drag
const INERTIA_DAMPING = 3.0;   // Higher damping = faster settle, less "floaty"

const Moon = React.memo(({ isPaused }: { isPaused: boolean }) => {
    const groupRef = useRef<THREE.Group>(null);
    const colorMap = useLoader(THREE.TextureLoader, moonImg);

    // Physics state
    const state = useRef({
        isDragging: false,
        previousMouseX: 0,
        velocity: BASE_SPIN,
        targetVelocity: BASE_SPIN,
    });

    const prefersReducedMotion = useMemo(() =>
        typeof window !== 'undefined' &&
        window.matchMedia('(prefers-reduced-motion: reduce)').matches,
        []);

    const handlePointerDown = (e: ThreeEvent<PointerEvent>) => {
        state.current.isDragging = true;
        state.current.previousMouseX = e.clientX;
        document.body.style.cursor = 'grabbing';
        e.stopPropagation();
    };

    const handlePointerUp = () => {
        state.current.isDragging = false;
        document.body.style.cursor = 'auto';
        state.current.targetVelocity = BASE_SPIN;
    };

    const handlePointerMove = (e: ThreeEvent<PointerEvent>) => {
        if (!state.current.isDragging) return;

        const deltaX = e.clientX - state.current.previousMouseX;
        state.current.previousMouseX = e.clientX;

        // Apply drag sensitivity multiplier
        state.current.targetVelocity = deltaX * DRAG_SENSITIVITY;

        e.stopPropagation();
    };

    useEffect(() => {
        const onUp = () => handlePointerUp();
        window.addEventListener('pointerup', onUp);
        window.addEventListener('pointercancel', onUp);
        return () => {
            window.removeEventListener('pointerup', onUp);
            window.removeEventListener('pointercancel', onUp);
        };
    }, []);

    useFrame((_, delta) => {
        if (!groupRef.current) return;
        if (isPaused) return;

        const s = state.current;
        const target = (prefersReducedMotion && !s.isDragging) ? 0 : s.targetVelocity;

        // Smoothly dampen velocity
        s.velocity = THREE.MathUtils.damp(
            s.velocity,
            target,
            INERTIA_DAMPING,
            delta
        );

        // Frame-rate independent rotation
        groupRef.current.rotation.y += s.velocity * delta;
    });

    // Optimization: Keep geometry 40x40 - balanced for mobile
    const moonGeometry = useMemo(() => new THREE.SphereGeometry(2.5, 40, 40), []);

    return (
        <group
            ref={groupRef}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onPointerLeave={handlePointerUp}
        >
            <mesh geometry={moonGeometry}>
                <meshStandardMaterial
                    map={colorMap}
                    bumpMap={colorMap}
                    bumpScale={0.12} // Increased bump for deep, tactile craters
                    roughness={0.9}  // High roughness = dusty, non-shiny lunar dust
                    metalness={0.0}  // No metalness avoids plastic look
                    color="#cccccc"  // Natural grey tone, avoiding "chalky" white
                />
            </mesh>
            {/* Subtle atmospheric rim - reusing geometry */}
            <mesh geometry={moonGeometry} scale={[1.02, 1.02, 1.02]}>
                <meshBasicMaterial
                    color="#000000" // Dark backing to smooth edges against space
                    transparent
                    opacity={0.0}
                    side={THREE.BackSide}
                />
            </mesh>
            {/* Note: Removed the fake glow mesh to ensure sharp realism as requested, 
                 relying on lighting for edge definition instead */}
        </group>
    );
});

const PlanetScene = React.memo(({ isPaused }: { isPaused: boolean }) => (
    <>
        {/* Cinematic & Realistic Lighting Setup */}

        {/* Very low ambient light to create deep shadows in craters (high contrast) */}
        <ambientLight intensity={0.03} />

        {/* Main Light: Grazing angle (side-lit) to emphasize texture and bumps */}
        <directionalLight
            position={[8, 1, 3]}
            intensity={2.8}
        />

        {/* Rim Light: Cool blue backlight for subtle silhouette separation */}
        <pointLight
            position={[-5, 2, -6]}
            intensity={0.8}
            color="#aaddff"
        />

        <Moon isPaused={isPaused} />
    </>
));

const Planet: React.FC<PlanetProps> = ({ className = '', isPaused = false }) => {
    return (
        <div
            className={`relative rounded-full overflow-hidden ${className} transition-opacity duration-500 aspect-square transform-gpu isolate`}
            style={{ touchAction: 'none' }}
        >
            <Canvas
                camera={{ position: [0, 0, 6], fov: 45 }}
                dpr={[1, 1.5]}
                gl={{
                    antialias: true,
                    alpha: true,
                    powerPreference: "default",
                    preserveDrawingBuffer: false,
                    stencil: false,
                    depth: true
                }}
            >
                <Suspense fallback={null}>
                    <PlanetScene isPaused={isPaused} />
                    <Preload all />
                </Suspense>
            </Canvas>
        </div>
    );
};

export default React.memo(Planet);
