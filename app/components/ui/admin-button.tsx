"use client";

import { useEffect, useState } from "react";

export function AdminButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let cancelled = false;
    fetch("/api/admin-eligible", { credentials: "same-origin" })
      .then((r) => (r.ok ? r.json() : { eligible: false }))
      .then((d) => {
        if (!cancelled && d?.eligible) setVisible(true);
      })
      .catch(() => {});
    return () => {
      cancelled = true;
    };
  }, []);

  if (!visible) return null;

  return (
    <a
      href="/admin"
      aria-label="Panel admin"
      style={{
        position: "fixed",
        top: 18,
        right: 18,
        zIndex: 50,
        display: "inline-flex",
        alignItems: "center",
        gap: 6,
        padding: "8px 12px",
        borderRadius: 999,
        fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace",
        fontSize: 11,
        letterSpacing: "0.06em",
        textTransform: "uppercase",
        color: "#fde68a",
        textDecoration: "none",
        background:
          "linear-gradient(135deg, rgba(245, 158, 11, 0.18), rgba(168, 85, 247, 0.18))",
        border: "1px solid rgba(245, 158, 11, 0.45)",
        boxShadow: "0 6px 20px -6px rgba(245, 158, 11, 0.4)",
        backdropFilter: "blur(12px) saturate(160%)",
      }}
    >
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
      Panel admin
    </a>
  );
}
