// A55: analytics runtime bound at BUILD time from DB truth — the platform
// recorded this GA4 binding for the site (integrations.provider="ga4",
// environment="live", owner-accepted). An empty measurementId is the honest
// dormant state: dataLayer + gtag shim + wlrTrack still ship; gtag config
// fires ONLY when a real id exists. Never fabricated (D-017).
export const GA4_MEASUREMENT_ID = "" as const;

const ANALYTICS_ENVIRONMENT = "production";
const SCHEMA_VERSION = "2.0";

interface WlrAnalyticsState {
  schemaVersion: string;
  environment: string;
  measurementId: string;
  initialized: boolean;
  delegated?: boolean;
}

function initialState(environment: string, measurementId: string): WlrAnalyticsState {
  return { schemaVersion: SCHEMA_VERSION, environment, measurementId, initialized: false, delegated: false };
}

function findSection(el: Element, doc: Document): string {
  let node: Element | null = el;
  while (node && node !== doc.body) {
    const marker = node.getAttribute("data-attribute");
    if (marker) {
      if (marker === "header" || marker === "footer" || marker === "sidebar" || marker === "popup_form" || marker === "hero") {
        return marker === "hero" ? "hero" : marker;
      }
    }
    const tag = node.tagName ? node.tagName.toLowerCase() : "";
    if (tag === "header") return "header";
    if (tag === "footer") return "footer";
    if (tag === "aside") return "sidebar";
    if (tag === "dialog") return "popup_form";
    if (tag === "main") return "body";
    node = node.parentElement;
  }
  return "body";
}

function getCleanText(el: HTMLElement): string {
  const raw = (el.getAttribute("aria-label") || el.textContent || "").trim().replace(/\s+/g, " ");
  let text = raw;
  if (!text) {
    const img = el.querySelector("img[alt]") || (el.tagName && el.tagName.toLowerCase() === "img" ? el : null);
    const alt = img ? img.getAttribute("alt") : "";
    if (alt) text = alt.trim();
  }
  return text
    .replace(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g, "[REDACTED_EMAIL]")
    .replace(/(?:\+?\d{1,3}[-.\s]?)?\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}/g, "[REDACTED_PHONE]")
    .slice(0, 250);
}

function attachDomDelegation(doc: Document): void {
  if (!doc || typeof doc.addEventListener !== "function") return;

  doc.addEventListener(
    "click",
    (evt: Event) => {
      const rawTarget = evt.target && typeof (evt.target as any).closest === "function" ? (evt.target as HTMLElement) : null;
      const target = rawTarget?.closest?.(
        "button, a, [role='button'], [role='tab'], [data-attribute]"
      ) as HTMLElement | null;
      if (!target) return;

      const tag = target.tagName ? target.tagName.toLowerCase() : "";
      const role = target.getAttribute("role");
      let eventName = "content_interaction";
      let interactionType = "button_click";

      if (tag === "a") {
        const href = target.getAttribute("href") || "";
        if (href.startsWith("tel:")) {
          interactionType = "phone_click";
        } else if (href.startsWith("mailto:")) {
          interactionType = "email_click";
        } else if (target.closest("nav, [data-attribute='menu']")) {
          eventName = "navigation_interaction";
          interactionType = "link_click";
        } else {
          interactionType = "link_click";
        }
      } else if (tag === "button" || role === "button") {
        if (role === "tab" || target.closest("[role='tablist']")) {
          interactionType = "tab_click";
        } else {
          interactionType = "button_click";
        }
      } else {
        const marker = target.getAttribute("data-attribute");
        if (marker) interactionType = marker + "_click";
      }

      const section = findSection(target, doc);
      const clickText = getCleanText(target);
      const payload: Record<string, unknown> = {
        interaction_type: interactionType,
        event_section: section,
        click_text: clickText,
      };

      const compAttr = target.getAttribute("data-attribute");
      if (compAttr) payload.component_type = compAttr;
      const compName = target.getAttribute("data-analytics-name");
      if (compName) payload.component_name = compName;

      const w = typeof window !== "undefined" ? (window as typeof window & { wlrTrack?: (e: string, p?: Record<string, unknown>) => void }) : null;
      if (w && typeof w.wlrTrack === "function") {
        w.wlrTrack(eventName, payload);
      }
    },
    true
  );

  doc.addEventListener(
    "submit",
    (evt: Event) => {
      const rawTarget = evt.target && typeof (evt.target as any).closest === "function" ? (evt.target as HTMLElement) : null;
      const form = rawTarget?.closest?.("form") as HTMLFormElement | null;
      if (!form) return;

      const section = findSection(form, doc);
      const formId = form.getAttribute("data-analytics-form-id") || form.name || form.id || "form";
      const payload: Record<string, unknown> = {
        interaction_type: "form_submission",
        event_section: section,
        form_identifier: formId,
      };
      const formName = form.getAttribute("data-analytics-form-name") || form.getAttribute("aria-label");
      if (formName) payload.form_name = formName;

      const w = typeof window !== "undefined" ? (window as typeof window & { wlrTrack?: (e: string, p?: Record<string, unknown>) => void }) : null;
      if (w && typeof w.wlrTrack === "function") {
        w.wlrTrack("form_interaction", payload);
      }
      forwardLeadSubmission(form);
    },
    true
  );
}

function forwardLeadSubmission(form: HTMLFormElement): void {
  if (typeof fetch !== "function" || typeof form.querySelectorAll !== "function") return;
  try {
    const rawKey = form.getAttribute("data-wlr-form") || form.getAttribute("data-analytics-form-id") || form.getAttribute("name") || form.getAttribute("id") || "contact";
    const formKey = rawKey === "form" ? "contact" : rawKey.replace(/[^a-zA-Z0-9_-]/g, "_").slice(0, 64) || "contact";
    const fields: Record<string, string> = {};
    let honeypot = "";
    const controls = form.querySelectorAll("input, textarea, select");
    for (let i = 0; i < controls.length; i++) {
      const el = controls[i] as HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement;
      if (el.disabled) continue;
      const t = (el.type || "").toLowerCase();
      if (t === "submit" || t === "button" || t === "reset" || t === "image" || t === "password" || t === "file") continue;
      if ((t === "checkbox" || t === "radio") && !(el as HTMLInputElement).checked) continue;
      const rawName = el.name || el.id || el.getAttribute("aria-label") || el.getAttribute("placeholder") || t || `field_${i}`;
      const key = rawName.trim().slice(0, 80);
      if (!key) continue;
      if (key === "company_website" || el.hasAttribute("data-honeypot")) {
        honeypot = String(el.value || "");
        continue;
      }
      if (t === "hidden") continue;
      const val = String(el.value || "").slice(0, 2000);
      if (val.length > 0) fields[key] = val;
    }
    if (Object.keys(fields).length === 0) return;
    const w = window as unknown as { __WLR_LAUNCHPAD_ORIGIN__?: string; __WLR_SITE_ID__?: string };
    const loc = typeof location !== "undefined" ? location : null;
    const origin =
      w.__WLR_LAUNCHPAD_ORIGIN__ ||
      (loc && (loc.hostname === "localhost" || loc.hostname === "127.0.0.1") ? "http://localhost:3000" : "https://wlr-launchpad-blush.vercel.app");
    const siteRef = w.__WLR_SITE_ID__ || (loc ? loc.hostname : "unknown");
    fetch(`${origin}/api/leads/${encodeURIComponent(formKey)}/submit`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        siteId: siteRef,
        fields,
        ...(honeypot ? { honeypot } : {}),
        consentGranted: true,
        source: loc ? loc.href : undefined,
      }),
      keepalive: true,
    }).catch(() => {});
  } catch {
    // never break the page's own form UX
  }
}

export function bindAnalytics(): boolean {
  if (typeof window === "undefined") return false;
  const w = window as typeof window & {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
    __wlrAnalytics?: WlrAnalyticsState;
    wlrTrack?: (event: string, payload?: Record<string, unknown>) => void;
  };
  const layer = (w.dataLayer = w.dataLayer || []);
  const gtag = (w.gtag = w.gtag || function () { layer.push(arguments); });
  const state = (w.__wlrAnalytics = w.__wlrAnalytics || initialState(ANALYTICS_ENVIRONMENT, GA4_MEASUREMENT_ID));
  if (!state.initialized) {
    state.initialized = true;
    gtag("js", new Date());
    if (state.measurementId) gtag("config", state.measurementId);
  }
  w.wlrTrack = (event: string, payload: Record<string, unknown> = {}): void => {
    layer.push(Object.assign({}, payload, { event, _schema_version: state.schemaVersion, environment: state.environment }));
  };
  if (typeof document !== "undefined" && !state.delegated) {
    state.delegated = true;
    attachDomDelegation(document);
  }
  return true;
}

export function analyticsBootstrapScript(options: { environment?: string; measurementId?: string } = {}): string {
  const state = initialState(options.environment ?? ANALYTICS_ENVIRONMENT, options.measurementId ?? GA4_MEASUREMENT_ID);
  const transport = state.measurementId ? `gtag('config',${JSON.stringify(state.measurementId)});`: "";
  return [
    "window.dataLayer=window.dataLayer||[];",
    "var gtag=window.gtag=window.gtag||function(){window.dataLayer.push(arguments)};",
    `window.__wlrAnalytics=window.__wlrAnalytics||${JSON.stringify(state)};`,
    "window.wlrTrack=function(event,payload){var sticky=window.__wlrAnalytics;window.dataLayer.push(Object.assign({},payload||{},{event:event,_schema_version:sticky.schemaVersion,environment:sticky.environment}))};",
    `if(!window.__wlrAnalytics.initialized){window.__wlrAnalytics.initialized=true;gtag('js',new Date());${transport}}`,
    "if(typeof document!=='undefined'&&!window.__wlrAnalytics.delegated){",
    "window.__wlrAnalytics.delegated=true;",
    "function _sec(el){var n=el;while(n&&n!==document.body){var m=n.getAttribute('data-attribute'),t=n.tagName?n.tagName.toLowerCase():'';if(m){if(m==='header'||m==='footer'||m==='sidebar'||m==='popup_form'||m==='hero')return m==='hero'?'hero':m;}if(t==='header'||t==='footer'||t==='aside'||t==='dialog')return t==='aside'?'sidebar':t==='dialog'?'popup_form':t;if(t==='main')return 'body';n=n.parentElement;}return 'body';}",
    "function _txt(el){var r=(el.getAttribute('aria-label')||el.textContent||'').trim().replace(/\\s+/g,' ');if(!r){var i=el.querySelector('img[alt]')||(el.tagName&&el.tagName.toLowerCase()==='img'?el:null);if(i)r=(i.getAttribute('alt')||'').trim();}return r.replace(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}/g,'[REDACTED_EMAIL]').replace(/(?:\\+?\\d{1,3}[-.\\s]?)?\\(?\\d{3}\\)?[-.\\s]?\\d{3}[-.\\s]?\\d{4}/g,'[REDACTED_PHONE]').slice(0,250);}",
    "document.addEventListener('click',function(e){var t=e.target&&e.target.closest?e.target.closest('button,a,[role=\"button\"],[role=\"tab\"],[data-attribute]'):null;if(!t)return;var tag=t.tagName?t.tagName.toLowerCase():'',role=t.getAttribute('role'),ev='content_interaction',it='button_click';if(tag==='a'){var h=t.getAttribute('href')||'';if(h.indexOf('tel:')===0)it='phone_click';else if(h.indexOf('mailto:')===0)it='email_click';else if(t.closest('nav,[data-attribute=\"menu\"]')){ev='navigation_interaction';it='link_click';}else it='link_click';}else if(tag==='button'||role==='button'){if(role==='tab'||t.closest('[role=\"tablist\"]'))it='tab_click';else it='button_click';}else{var m=t.getAttribute('data-attribute');if(m)it=m+'_click';}var p={interaction_type:it,event_section:_sec(t),click_text:_txt(t)};var ca=t.getAttribute('data-attribute');if(ca)p.component_type=ca;var cn=t.getAttribute('data-analytics-name');if(cn)p.component_name=cn;if(window.wlrTrack)window.wlrTrack(ev,p);},true);",
    "function _fwd(f){if(typeof fetch!=='function'||typeof f.querySelectorAll!=='function')return;try{var rk=f.getAttribute('data-wlr-form')||f.getAttribute('data-analytics-form-id')||f.getAttribute('name')||f.getAttribute('id')||'contact';if(typeof rk!=='string')rk='contact';var fk=(rk==='form'?'contact':rk.replace(/[^a-zA-Z0-9_-]/g,'_').slice(0,64))||'contact';var fd={},hp='',cs=f.querySelectorAll('input,textarea,select');for(var i=0;i<cs.length;i++){var el=cs[i];if(el.disabled)continue;var t=(el.type||'').toLowerCase();if(t==='submit'||t==='button'||t==='reset'||t==='image'||t==='password'||t==='file')continue;if((t==='checkbox'||t==='radio')&&!el.checked)continue;var k=(el.name||el.id||el.getAttribute('aria-label')||el.getAttribute('placeholder')||t||('field_'+i)).trim().slice(0,80);if(!k)continue;if(k==='company_website'||el.hasAttribute('data-honeypot')){hp=String(el.value||'');continue;}if(t==='hidden')continue;var v=String(el.value||'').slice(0,2000);if(v.length>0)fd[k]=v;}if(Object.keys(fd).length===0)return;var loc=typeof location!=='undefined'?location:null;var orig=window.__WLR_LAUNCHPAD_ORIGIN__||(loc&&(loc.hostname==='localhost'||loc.hostname==='127.0.0.1')?'http://localhost:3000':'https://wlr-launchpad-blush.vercel.app');var sr=window.__WLR_SITE_ID__||(loc?loc.hostname:'unknown');fetch(orig+'/api/leads/'+encodeURIComponent(fk)+'/submit',{method:'POST',headers:{'content-type':'application/json'},body:JSON.stringify({siteId:sr,fields:fd,honeypot:hp||undefined,consentGranted:true,source:loc?loc.href:undefined}),keepalive:true}).catch(function(){});}catch(err){}}",
    "document.addEventListener('submit',function(e){var f=e.target&&e.target.closest?e.target.closest('form'):null;if(!f)return;var p={interaction_type:'form_submission',event_section:_sec(f),form_identifier:f.getAttribute('data-analytics-form-id')||f.name||f.id||'form'};var fn=f.getAttribute('data-analytics-form-name')||f.getAttribute('aria-label');if(fn)p.form_name=fn;if(window.wlrTrack)window.wlrTrack('form_interaction',p);_fwd(f);},true);",
    "}",
  ].join("");
}
