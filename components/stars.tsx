// "use client";

// import { useCallback } from "react";
// import Particles from "react-tsparticles";
// import { loadFull } from "tsparticles";
// import { Engine } from "tsparticles-engine"; // Import the Engine type

// const Stars = () => {
//     const particlesInit = useCallback(async (engine: Engine) => {
//         // Load the full tsparticles bundle
//         await loadFull(engine);
//     }, []);

//     const particlesOptions = {
//         background: {
//             color: {
//                 value: "#000", // Background color (set to black for a night sky)
//             },
//         },
//         fullScreen: {
//             enable: true, // Enable full-screen particles
//         },
//         particles: {
//             number: {
//                 value: 100, // Number of stars
//                 density: {
//                     enable: true,
//                     value_area: 800,
//                 },
//             },
//             color: {
//                 value: "#ffffff", // Star color
//             },
//             shape: {
//                 type: "circle", // Shape of the particles
//             },
//             opacity: {
//                 value: 1,
//                 random: false,
//                 anim: {
//                     enable: true,
//                     speed: 1,
//                     opacity_min: 0.1, // Fading effect
//                     sync: false,
//                 },
//             },
//             size: {
//                 value: 3, // Size of the stars
//                 random: true,
//                 anim: {
//                     enable: true,
//                     speed: 4,
//                     size_min: 0.3, // Shimmering effect
//                     sync: false,
//                 },
//             },
//             move: {
//                 enable: true,
//                 speed: 0.2, // Slow movement
//                 direction: "none",
//                 random: true,
//                 straight: false,
//                 outModes: {
//                     default: "out", // Allow particles to go out of bounds
//                 },
//             },
//         },
//     };

//     return <Particles id="tsparticles" init={particlesInit} options={particlesOptions} />;
// };

// export default Stars;
