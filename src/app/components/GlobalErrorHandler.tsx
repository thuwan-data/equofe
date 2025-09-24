"use client";

import { useEffect } from "react";

export default function GlobalErrorHandler() {
  useEffect(() => {
    const isFullStoryFetchError = (message?: string, filename?: string, stack?: string) => {
      if (!message) return false;
      if (!message.includes("Failed to fetch")) return false;
      const hay = (filename || "" + stack || "").toLowerCase();
      return (
        hay.includes("fullstory") ||
        hay.includes("fs.js") ||
        hay.includes("edge.fullstory") ||
        hay.includes("fullstory.com")
      );
    };

    const onError = (ev: ErrorEvent) => {
      try {
        if (isFullStoryFetchError(ev.message, ev.filename, ev.error?.stack)) {
          // Suppress this external fetch error (no-op to avoid noisy HMR/runtime errors)
          ev.preventDefault();
          // eslint-disable-next-line no-console
          console.warn("Suppressed external FullStory fetch error:", ev.message, ev.filename);
        }
      } catch (e) {
        // ignore
      }
    };

    const onUnhandledRejection = (ev: PromiseRejectionEvent) => {
      try {
        const reason = ev.reason as any;
        const message = reason?.message || String(reason || "");
        const stack = reason?.stack || "";
        if (isFullStoryFetchError(message, undefined, stack)) {
          ev.preventDefault();
          // eslint-disable-next-line no-console
          console.warn("Suppressed external FullStory unhandled rejection:", message);
        }
      } catch (e) {
        // ignore
      }
    };

    window.addEventListener("error", onError);
    window.addEventListener("unhandledrejection", onUnhandledRejection);

    return () => {
      window.removeEventListener("error", onError);
      window.removeEventListener("unhandledrejection", onUnhandledRejection);
    };
  }, []);

  return null;
}
