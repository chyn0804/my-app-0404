"use client";

import { useEffect } from "react";

export default function ClickLogger() {
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const logEl = target.closest('[data-log="true"]');

      if (!logEl) return;

      const label = logEl.getAttribute("data-log-label") || "unknown";

      // 콘솔 로그 확인
      console.log("[로그 자동 전송]", {
        label,
        path: window.location.pathname,
        time: new Date().toISOString(),
      });

      // 실제 서버 전송 예시
      fetch("/api/log", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          event: "click",
          label,
          pathname: window.location.pathname,
          timestamp: new Date().toISOString(),
        }),
      });
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return null;
}
