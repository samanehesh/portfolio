"use client";

import { useCallback } from "react";
import Particles from "react-tsparticles";
import type { Engine } from "tsparticles-engine";
import { loadSlim } from "tsparticles-slim"; // Ensure tsparticles-slim is installed

const Stars = () => {
    const particlesInit = useCallback(async (engine: Engine) => {
        // Load the slim version of tsparticles
        await loadSlim(engine);
    }, []);

    const particlesOptions = {
        background: {
            color: {
                value: "#ffffff", // Background color (white)
            },
        },
        fullScreen: {
            enable: false, // Enable full-screen particles
        },
        particles: {
            number: {
                value: 100, // Number of stars
                density: {
                    enable: true,
                    value_area: 800, // Density of particles
                },
            },
            color: {
                value:'#505050', // Star color (light gray)
            },
            shape: {
                type: "circle", // Particle shape (circle for stars)
            },
            opacity: {
                value: 1,
                random: false,
                anim: {
                    enable: true,
                    speed: 1,
                    opacity_min: 0.1, // Fading effect
                    sync: false,
                },
            },
            size: {
                value: 3, // Size of the stars
                random: true,
                anim: {
                    enable: true,
                    speed: 4,
                    size_min: 0.3, // Size change for shimmer effect
                    sync: false,
                },
            },
            move: {
                enable: true,
                speed: 0.2, // Slow movement
                direction: "none" as const, // Use "none" as a valid MoveDirection
                random: true,
                straight: false,
                outModes: "out" as const, // Ensure "out" is treated as a valid OutMode
            },
        },
    };

    return <Particles id="tsparticles" className="particles-container" init={particlesInit} options={particlesOptions} />;
};

export default Stars;
