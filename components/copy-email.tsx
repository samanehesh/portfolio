"use client";

import { useEffect, useRef, useState } from "react";
import { useTranslations } from "next-intl";

export function CopyEmail({ email }: { email: string }) {
  const t = useTranslations();
  const [status, setStatus] = useState<"idle" | "copied" | "failed">("idle");
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  useEffect(() => () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  }, []);

  function notify(next: "copied" | "failed") {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setStatus(next);
    timeoutRef.current = setTimeout(() => setStatus("idle"), 3000);
  }

  async function copy() {
    try {
      await navigator.clipboard.writeText(email);
      notify("copied");
    } catch {
      notify("failed");
    }
  }

  return <div className="copy-email">
    <button className="contact-email" type="button" onClick={copy} aria-label={t("copyEmail", { email })}>
      <span dir="ltr">{email}</span><span aria-hidden="true">⧉</span>
    </button>
    <span className="copy-toast" role="status" aria-atomic="true" data-visible={status !== "idle"}>{status === "copied" ? t("emailCopied") : status === "failed" ? t("emailCopyFailed") : ""}</span>
  </div>;
}
