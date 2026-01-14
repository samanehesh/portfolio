"use client";

import { useCallback } from "react";
import Particles from "react-tsparticles";
import type { Engine } from "tsparticles-engine";
import { loadSlim } from "tsparticles-slim"; 
const Stars = () => {
    const particlesInit = useCallback(async (engine: Engine) => {
        await loadSlim(engine);
    }, []);

    const particlesOptions = {
        background: {
            color: {
                value: "#ffffff", 
            },
        },
        fullScreen: {
            enable: false, 
        },
        particles: {
            number: {
                value: 100, 
                density: {
                    enable: true,
                    value_area: 800, 
                },
            },
            color: {
                value:'#505050', 
            },
            shape: {
                type: "circle", 
            },
            opacity: {
                value: 1,
                random: false,
                anim: {
                    enable: true,
                    speed: 1,
                    opacity_min: 0.1, 
                    sync: false,
                },
            },
            size: {
                value: 3, 
                random: true,
                anim: {
                    enable: true,
                    speed: 4,
                    size_min: 0.3, 
                    sync: false,
                },
            },
            move: {
                enable: true,
                speed: 0.2, 
                direction: "none" as const, 
                random: true,
                straight: false,
                outModes: "out" as const, 
            },
        },
    };

    return <Particles id="tsparticles" className="particles-container" init={particlesInit} options={particlesOptions} />;
};

export default Stars;
