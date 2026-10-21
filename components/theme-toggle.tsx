"use client";
import { useEffect, useState } from "react";
export function ThemeToggle({ label }: { label: string }) {
  const [dark, setDark] = useState(false);
  useEffect(() => {
    const syncTheme = () => setDark(document.documentElement.dataset.theme === "dark");
    syncTheme();
    window.addEventListener("portfolio:theme-ready", syncTheme);
    return () => window.removeEventListener("portfolio:theme-ready", syncTheme);
  }, []);
  function toggle() {
    const next = !dark; setDark(next); document.documentElement.dataset.theme = next ? "dark" : "light";
    try { localStorage.setItem("theme", next ? "dark" : "light"); } catch {}
  }
  return <button className="theme-toggle" type="button" onClick={toggle} aria-label={label} aria-pressed={dark}><span aria-hidden="true">☀</span><span aria-hidden="true">☾</span><i /></button>;
}
