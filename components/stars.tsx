"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import Particles from "react-tsparticles";
import type { Engine, RecursivePartial, IOptions } from "tsparticles-engine";
import { loadSlim } from "tsparticles-slim";
import { useTheme } from "next-themes";

const Stars = () => {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  const particlesOptions: RecursivePartial<IOptions> = useMemo(() => {
    const isDark = resolvedTheme === "dark";

    return {
      fullScreen: { enable: false },
      background: { color: { value: isDark ? "#000000" : "#ffffff" } },
      particles: {
        number: { value: 100, density: { enable: true, value_area: 800 } },
        color: { value: isDark ? "#ffffff" : "#505050" }, // stars
        shape: { type: "circle" },
        opacity: {
          value: 1,
          animation: { enable: true, speed: 1, minimumValue: 0.1, sync: false },
        },
        size: {
          value: 3,
          random: { enable: true, minimumValue: 0.3 },
          animation: { enable: true, speed: 4, sync: false },
        },
        move: {
          enable: true,
          speed: 0.2,
          random: true,
          straight: false,
          outModes: { default: "out" },
        },
      },
      detectRetina: true,
    };
  }, [resolvedTheme]);

  if (!mounted) return null;

  return (
    <Particles
      id="tsparticles"
      className="particles-container"
      init={particlesInit}
      options={particlesOptions}
    />
  );
};

export default Stars;

