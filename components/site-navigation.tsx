"use client";

import { useEffect, useRef, useState } from "react";
import { useTranslations } from "next-intl";

export function SiteNavigation() {
  const t = useTranslations();
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string | null>("top");
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const offset = parseFloat(getComputedStyle(document.documentElement).scrollPaddingTop) || 0;
      let current: string | null = "top";
      for (const id of ["about", "projects", "contact"]) {
        const section = document.getElementById(id);
        if (section && section.getBoundingClientRect().top <= offset + 24) {
          current = id;
        }
      }
      const contact = document.getElementById("contact");
      const atBottom = window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 4;
      if (atBottom && contact && contact.getBoundingClientRect().top < window.innerHeight) {
        current = "contact";
      }
      setActive(current);
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    const observer = new ResizeObserver(schedule);
    observer.observe(document.body);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      observer.disconnect();
    };
  }, []);

  return <div className="site-navigation" onKeyDown={(event) => {
    if (event.key === "Escape" && open) {
      setOpen(false);
      toggleRef.current?.focus();
    }
  }}>
    <button ref={toggleRef} className="menu-toggle" type="button"
      aria-label={t(open ? "closeMenu" : "openMenu")}
      aria-expanded={open} aria-controls="main-navigation"
      onClick={() => setOpen(!open)}>
      <span aria-hidden="true" /><span aria-hidden="true" /><span aria-hidden="true" />
    </button>
    <nav id="main-navigation" className={`nav${open ? " is-open" : ""}`} aria-label={t("navigationLabel")}>
      {([ ["top", "home"], ["about", "about"], ["projects", "projects"], ["contact", "contact"] ] as const).map(([id, label]) =>
        <a key={id} className={active === id ? "active" : undefined}
          aria-current={active === id ? "location" : undefined}
          href={`#${id}`} onClick={() => { setActive(id); setOpen(false); }}>
          {t(`nav.${label}`)}
        </a>
      )}
    </nav>
  </div>;
}
