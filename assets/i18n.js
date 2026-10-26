/* Arabic for the lab.
   Each page keeps its English markup. When Arabic is on (?lang=ar, or the switch in the top bar,
   remembered per browser), this file loads the shared dictionary (assets/ar-common.js) and the
   page's own one (<page>/ar.js), flips the page to right-to-left and swaps English text for Arabic,
   including text the page writes later and labels drawn on canvas charts.

   Dictionaries call LabAr.add({ "English": "عربي", ... }, [[/regex/, "replacement $1"], ...]).
   Keys are matched after collapsing whitespace. A key may be a whole element's inner HTML
   (for sentences with <b> or links inside) or a single text run. */
(function () {
  'use strict';
  var KEY = 'labLang', root = document.documentElement;
  var q = null; try { q = new URLSearchParams(location.search).get('lang'); } catch (e) {}
  var lang = q === 'ar' || q === 'en' ? q : null;
  try { if (lang) localStorage.setItem(KEY, lang); else lang = localStorage.getItem(KEY); } catch (e) {}
  var AR = lang === 'ar';
  var script = document.currentScript, base = script ? script.src.replace(/assets\/i18n\.js.*$/, '') : '../';
  var dict = Object.create(null), html = Object.create(null), pats = [], done = new WeakMap(), arVals = new Set();
  var debug = /i18ndebug/.test(location.search), missing = window.__i18nMissing = new Set();
  function norm(s) { return s.replace(/\s+/g, ' ').trim(); }
  window.LabAr = {
    on: AR,
    add: function (d, p) {
      for (var k in d) { var n = norm(k); if (/[<&]/.test(k)) html[n] = d[k]; else dict[n] = d[k]; arVals.add(norm(d[k])); }
      (p || []).forEach(function (x) { pats.push(x); });
      if (ready) run(document.body);
    },
    t: function (s) { return tr(s); }
  };
  function tr(s) {
    if (!AR || s == null) return s;
    var n = norm(String(s)); if (!n || !/[A-Za-z]/.test(n)) return s;
    var hasAr = /[\u0600-\u06FF]/.test(n);
    if (dict[n] != null) return keepSpace(s, dict[n]);
    for (var i = 0; i < pats.length; i++) { var m = n.match(pats[i][0]); if (m) { var r = pats[i][1]; return keepSpace(s, typeof r === 'function' ? r.apply(null, m) : n.replace(pats[i][0], r)); } }
    if (debug && !hasAr && !arVals.has(n)) missing.add(n);
    return s;
  }
  function keepSpace(orig, out) { var a = orig.match(/^\s*/)[0], b = orig.match(/\s*$/)[0]; return a + out + b; }

  // the switch in the top bar, on every page, in both languages
  function addSwitch() {
    var nav = document.querySelector('.labbar nav'); if (!nav || nav.querySelector('.langsw')) return;
    var a = document.createElement('a'); a.className = 'langsw'; a.setAttribute('data-noar', ''); a.href = '?lang=' + (AR ? 'en' : 'ar');
    a.lang = AR ? 'en' : 'ar'; a.textContent = AR ? 'English' : 'عربي';
    a.addEventListener('click', function (e) {
      e.preventDefault(); try { localStorage.setItem(KEY, AR ? 'en' : 'ar'); } catch (x) {}
      var u = new URL(location.href); u.searchParams.delete('lang'); location.href = u.toString();
    });
    nav.appendChild(a);
  }
  if (!AR) { if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', addSwitch); else addSwitch(); return; }

  root.lang = 'ar'; root.dir = 'rtl'; root.classList.add('ar');
  var f = document.createElement('link'); f.rel = 'stylesheet';
  f.href = 'https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Arabic:wght@400;500;600;700&family=Reem+Kufi:wght@600;700&display=swap';
  document.head.appendChild(f);
  var st = document.createElement('style');
  st.textContent = 'html.ar body,html.ar input,html.ar select,html.ar textarea,html.ar button{font-family:"IBM Plex Sans Arabic",var(--font-body),sans-serif}' +
    'html.ar h1,html.ar h2,html.ar h3,html.ar .labbar .home{font-family:"IBM Plex Sans Arabic",var(--font-display),sans-serif;letter-spacing:0}' +
    'html.ar .label,html.ar .mono,html.ar .k{letter-spacing:0;font-family:"IBM Plex Sans Arabic",var(--font-mono),sans-serif}' +
    'html.ar .labbar nav{font-family:"IBM Plex Sans Arabic",var(--font-mono),sans-serif}html.ar .labbar .home .nm{font-family:"Reem Kufi",var(--font-ar),sans-serif}' +
    'html.ar canvas,html.ar svg,html.ar .leaflet-container,html.ar input[type=number],html.ar input[type=range],html.ar code,html.ar pre,html.ar .ltr{direction:ltr}' +
    'html.ar .fact{border-left:0;border-right:2px solid var(--sat-a);padding-left:0;padding-right:12px}' +
    'html.ar .go{display:inline-block}';
  document.head.appendChild(st);

  var SKIP = { SCRIPT: 1, STYLE: 1, NOSCRIPT: 1, CODE: 1, PRE: 1, TEXTAREA: 1 };
  var BLOCK = /^(P|LI|H1|H2|H3|H4|LABEL|DT|DD|TD|TH|SUMMARY|FIGCAPTION|SMALL|SPAN|A|BUTTON|B|STRONG|EM|DIV|OPTION|LEGEND)$/;
  var ATTR = ['placeholder', 'title', 'aria-label', 'alt'];
  function skip(el) { return el.closest && el.closest('[data-noar],[translate="no"],.leaflet-control-attribution'); }
  function doEl(el) {
    if (!el || el.nodeType !== 1 || SKIP[el.tagName] || skip(el)) return;
    ATTR.forEach(function (a) { var v = el.getAttribute(a); if (v && /[A-Za-z]/.test(v)) { var t = tr(v); if (t !== v) el.setAttribute(a, t); } });
    if (el.tagName === 'INPUT' && /^(button|submit|reset)$/.test(el.type) && el.value) { var tv = tr(el.value); if (tv !== el.value) el.value = tv; }
    if (BLOCK.test(el.tagName) && el.children.length && el.children.length < 12) {
      var h = norm(el.innerHTML);
      if (html[h] != null && done.get(el) !== h) { el.innerHTML = html[h]; done.set(el, norm(el.innerHTML)); return; }
    }
    for (var c = el.firstChild; c; c = c.nextSibling) { if (c.nodeType === 3) doText(c); else if (c.nodeType === 1) doEl(c); }
  }
  function doText(n) {
    var v = n.nodeValue; if (!v || !/[A-Za-z]/.test(v)) return;
    var p = n.parentNode; if (!p || SKIP[p.nodeName] || (p.closest && skip(p))) return;
    var t = tr(v); if (t !== v) n.nodeValue = t;
  }
  function run(node) { if (node) { if (node.nodeType === 3) doText(node); else doEl(node); } }

  // canvas charts and dialogs
  ['fillText', 'strokeText'].forEach(function (m) {
    var o = CanvasRenderingContext2D.prototype[m];
    CanvasRenderingContext2D.prototype[m] = function (s) { var c = this.canvas; if (typeof s === 'string' && s.length > 1 && !(c && c.closest && c.closest('[data-noar]')) && !(c && c.dataset && 'noar' in c.dataset)) arguments[0] = tr(s); return o.apply(this, arguments); };
  });
  ['alert', 'confirm', 'prompt'].forEach(function (m) { var o = window[m]; window[m] = function (s) { arguments[0] = tr(s); return o.apply(window, arguments); }; });

  var ready = false, pending = 2;
  function load(src) {
    var s = document.createElement('script'); s.src = src;
    s.onload = s.onerror = function () { if (--pending === 0) start(); };
    document.head.appendChild(s);
  }
  load(base + 'assets/ar-common.js');
  load('ar.js');
  // hide the English flash until the dictionaries are in (with a safety timeout)
  var hide = document.createElement('style'); hide.textContent = 'body{visibility:hidden}'; document.head.appendChild(hide);
  setTimeout(function () { hide.remove(); }, 1500);
  function start() {
    var go = function () {
      ready = true;
      var home = document.querySelector('.labbar .home');
      if (home) home.innerHTML = 'مختبر <span class="nm">مريم</span>';
      document.title = tr(document.title.replace(/ · Mariam's Lab$/, '')) + (/ · Mariam's Lab$/.test(document.title) ? ' · مختبر مريم' : '');
      if (document.title === "Mariam's Lab") document.title = 'مختبر مريم';
      run(document.body); addSwitch(); hide.remove();
      new MutationObserver(function (ms) {
        ms.forEach(function (m) {
          if (m.type === 'characterData') doText(m.target);
          else if (m.type === 'attributes') doEl(m.target);
          else m.addedNodes.forEach(run);
        });
      }).observe(document.body, { childList: true, subtree: true, characterData: true, attributes: true, attributeFilter: ATTR });
    };
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', go); else go();
  }
})();
