/**
 * WLR Targeting Agent (ANN-1) — observation + outline ONLY.
 *
 * Loaded on every generated page, but INERT by default: zero listeners, zero
 * messages, zero effect until a valid target token wakes it. Three-wall
 * security is STRUCTURAL (spec A10), never prompt-convention:
 *
 *   Wall 1 — one-time key: the agent wakes only when the page URL carries a
 *     ?wlr_target= token whose ECDSA P-256 signature verifies against the
 *     embedded platform public key AND whose expiry is in the future. A
 *     forged or expired token is structurally dead (never listens, never
 *     reports). Single-use is enforced SERVER-side at activation (the
 *     console consumes the token; replay is refused — the agent cannot and
 *     does not persist anything).
 *   Wall 2 — origin allowlist: every message the agent accepts is checked
 *     against the SIGNED platform origin inside the token payload
 *     (event.origin === payload.origin). Hostile parents and cloned pages
 *     get silence. The origin cannot be tampered: it is inside the signed
 *     payload.
 *   Wall 3 — self-termination: the agent kills itself at token expiry, on a
 *     wlr:end command from the platform origin, or on page unload — it
 *     detaches every listener, clears outlines, and nulls its state. It
 *     persists NOTHING in the site.
 *
 * The agent NEVER mutates site state: its only DOM effect is a transient
 * outline (wire mode = highlight only, A9) that it removes itself. It never
 * fetches, never stores, never touches cookies or history.
 */
(function () {
  "use strict";
  if (window.__wlrTargetAgent) return;

  // Platform public key (SPKI, base64). Verification-only: knowing it does
  // not let anyone sign tokens — it only proves payloads came from the
  // platform holding the private key.
  var PUB_SPKI_B64 = "MFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAE2ts0TOFWrOwRAKZ+8x8sSsuo+6PGgkaxF2zD1MIcmGpnLrLVDSv041VS+vdpbekQqfdQSJeZErHgkp8NIfd53w==";

  var state = null; // { payload, timer, onClick, onMessage, onKill, armed }
  var OUTLINE = "2px solid #7c3aed";
  var WIRE_MS = 1200;

  function b64urlToBytes(s) {
    var b64 = s.replace(/-/g, "+").replace(/_/g, "/");
    while (b64.length % 4) b64 += "=";
    var bin = atob(b64);
    var bytes = new Uint8Array(bin.length);
    for (var i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i);
    return bytes;
  }

  function clearOutlines() {
    var marked = document.querySelectorAll("[data-wlr-wire]");
    for (var i = 0; i < marked.length; i++) {
      marked[i].removeAttribute("data-wlr-wire");
      marked[i].style.outline = marked[i].getAttribute("data-wlr-wire-prev") || "";
      marked[i].removeAttribute("data-wlr-wire-prev");
    }
  }

  function kill() {
    if (!state) return;
    if (state.timer) clearTimeout(state.timer);
    document.removeEventListener("click", state.onClick, true);
    window.removeEventListener("message", state.onMessage, false);
    window.removeEventListener("message", state.onArm, false);
    window.removeEventListener("beforeunload", state.onKill);
    clearOutlines();
    state = null;
    window.__wlrTargetAgent = { killed: true };
  }

  /** Minimal structural path: tag[.data-wlr-id]:nth-of-type, anchored at the
   *  nearest [data-wlr-id] ancestor when present (querySelector-able). */
  function selectorPath(el) {
    var anchorEl = el.closest ? el.closest("[data-wlr-id]") : null;
    var parts = [];
    var cur = anchorEl || el;
    while (cur && cur.nodeType === 1 && parts.length < 14) {
      var seg = cur.tagName.toLowerCase();
      var wlr = cur.getAttribute("data-wlr-id");
      if (wlr) seg += '[data-wlr-id="' + wlr + '"]';
      else if (cur.id) seg += "#" + cur.id;
      else {
        var parent = cur.parentElement;
        if (parent && parent.children.length > 1) {
          var idx = 1;
          var n = cur.previousElementSibling;
          while (n) { idx++; n = n.previousElementSibling; }
          seg += ":nth-of-type(" + idx + ")";
        }
      }
      parts.unshift(seg);
      if (wlr) break; // anchored — the path is relative to the anchor
      cur = cur.parentElement;
    }
    if (anchorEl && anchorEl !== el) {
      // relative child path from the anchor down to the clicked element
      var rel = [];
      cur = el;
      while (cur && cur !== anchorEl && rel.length < 8) {
        var s = cur.tagName.toLowerCase();
        var p = cur.parentElement;
        if (p) {
          var sibs = [];
          for (var j = 0; j < p.children.length; j++) {
            if (p.children[j].tagName === cur.tagName) sibs.push(p.children[j]);
          }
          if (sibs.length > 1) s += ":nth-of-type(" + (sibs.indexOf(cur) + 1) + ")";
        }
        rel.unshift(s);
        cur = p;
      }
      if (rel.length > 0) return parts[0] + " > " + rel.join(" > ");
    }
    return parts.join(" > ");
  }

  function viewportLabel() {
    return window.innerWidth >= 1024 ? "desktop-1440" : "mobile-390";
  }

  function postToParent(msg) {
    if (window.parent && window.parent !== window) {
      // fired only AT the signed origin — any other window gets nothing
      window.parent.postMessage(msg, state ? state.payload.origin : "/");
    }
  }

  function buildReport(el) {
    var r = el.getBoundingClientRect();
    var anchorEl = el.closest ? el.closest("[data-wlr-id]") : null;
    return {
      __wlr: true,
      type: "wlr:report",
      selector: {
        anchor: anchorEl ? anchorEl.getAttribute("data-wlr-id") : null,
        path: selectorPath(el),
      },
      boundingBox: {
        x: Math.round(r.x), y: Math.round(r.y),
        width: Math.round(r.width), height: Math.round(r.height),
      },
      route: location.pathname,
      viewport: viewportLabel(),
      viewportWidth: window.innerWidth,
      viewportHeight: window.innerHeight,
    };
  }

  function outline(el) {
    clearOutlines();
    el.setAttribute("data-wlr-wire", "1");
    el.setAttribute("data-wlr-wire-prev", el.style.outline || "");
    el.style.outline = OUTLINE;
    setTimeout(function () {
      el.removeAttribute("data-wlr-wire");
      el.style.outline = el.getAttribute("data-wlr-wire-prev") || "";
      el.removeAttribute("data-wlr-wire-prev");
    }, WIRE_MS);
  }

  function findByPath(path) {
    try {
      var el = document.querySelector(path);
      if (el) return el;
    } catch (e) { /* invalid selector — never guess */ }
    return null;
  }

  async function boot() {
    var m = location.search.match(/[?&]wlr_target=([^&]+)/) || (location.hash || "").match(/wlr_target=([^&]+)/);
    if (!m) return; // INERT: no token — no listeners, no messages, nothing
    var token = decodeURIComponent(m[1]);
    var payload = null;
    try {
      var parts = token.split(".");
      if (parts.length !== 2) return;
      var payloadBytes = b64urlToBytes(parts[0]);
      var sigBytes = b64urlToBytes(parts[1]);
      payload = JSON.parse(new TextDecoder().decode(payloadBytes));
      if (!payload || payload.v !== 1 || typeof payload.origin !== "string" || payload.origin.length === 0 || typeof payload.exp !== "number") return;
      if (Date.now() > payload.exp) return; // expired — structurally dead
      var rawKey = b64urlToBytes(PUB_SPKI_B64);
      var key = await crypto.subtle.importKey("spki", rawKey, { name: "ECDSA", namedCurve: "P-256" }, false, ["verify"]);
      var ok = await crypto.subtle.verify({ name: "ECDSA", hash: "SHA-256" }, key, sigBytes, payloadBytes);
      if (!ok) return; // forged — silence
    } catch (e) {
      return; // any malformed token = silence
    }

    state = { payload: payload, timer: null, onClick: null, onMessage: null, onArm: null, onKill: null, armed: false };

    state.onMessage = function (event) {
      if (!state || !state.armed) return;
      if (event.origin !== state.payload.origin) return; // Wall 2 — silence
      var msg = event.data;
      if (!msg || msg.__wlr !== true) return;
      if (msg.type === "wlr:wire") {
        var el = msg.path ? findByPath(msg.path) : null;
        if (el) outline(el);
      } else if (msg.type === "wlr:end") {
        kill();
      }
    };

    state.onArm = function (event) {
      if (event.origin !== payload.origin) return; // Wall 2
      var msg = event.data;
      if (!msg || msg.__wlr !== true) return;
      if (msg.type === "wlr:armed") {
        window.removeEventListener("message", state.onArm, false);
        if (!state) return;
        state.armed = true;
        document.addEventListener("click", state.onClick, true);
        postToParent({ __wlr: true, type: "wlr:armed:ack" });
      }
    };

    state.onClick = function (event) {
      if (!state || !state.armed) return;
      var el = event.target;
      if (!el || el.nodeType !== 1) return;
      var report = buildReport(el);
      report.tokenThread = state.payload.thread;
      postToParent(report);
    };

    state.onKill = function () { kill(); };

    var remaining = payload.exp - Date.now();
    state.timer = setTimeout(kill, Math.max(0, remaining)); // Wall 3 — expiry

    window.addEventListener("message", state.onArm, false);
    window.addEventListener("message", state.onMessage, false);
    window.addEventListener("beforeunload", state.onKill);
    postToParent({ __wlr: true, type: "wlr:hello", thread: payload.thread });
  }

  window.__wlrTargetAgent = { active: false };
  boot();
})();
