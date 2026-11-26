"use client";

/**
 * Analytics track() shim (registry item: use-analytics).
 * Single override point: the SITE defines `window.wlrTrack(event, payload)`
 * once (GTM dataLayer push, Measurement Protocol relay, or a stub). No
 * vendor SDK is hardcoded into components (ANALYTICS.md component-first).
 * Privacy rule: NEVER pass PII as parameters — opaque/hashed IDs only.
 */

export type WlrEventName =
  | "content_interaction"
  | "navigation_interaction"
  | "form_interaction"
  | "error_interaction"
  | "user_interaction"
  | "feature_interaction";

declare global {
  interface Window {
    wlrTrack?: (event: string, payload: Record<string, unknown>) => void;
  }
}

export function track(event: WlrEventName | string, payload: Record<string, unknown> = {}): void {
  if (typeof window === "undefined") return;
  if (typeof window.wlrTrack === "function") {
    window.wlrTrack(event, payload);
  }
}
