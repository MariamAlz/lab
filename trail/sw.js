// Keeps the trail page and the map tiles you've already looked at, so they still show without signal.
var PAGE = 'trail-page-v1', TILES = 'trail-tiles-v1', MAX = 3000;
var SHELL = ['./', '../assets/site.css', '../assets/vendor/leaflet/leaflet.js', '../assets/vendor/leaflet/leaflet.css'];
self.addEventListener('install', function (e) { e.waitUntil(caches.open(PAGE).then(function (c) { return c.addAll(SHELL); }).then(function () { return self.skipWaiting(); })); });
self.addEventListener('activate', function (e) { e.waitUntil(self.clients.claim()); });
self.addEventListener('fetch', function (e) {
  var u = new URL(e.request.url);
  if (e.request.method !== 'GET') return;
  if (/tile\.openstreetmap\.org|tile\.opentopomap\.org/.test(u.hostname)) {
    e.respondWith(caches.open(TILES).then(function (c) {
      return c.match(e.request).then(function (hit) {
        if (hit) return hit;
        return fetch(e.request).then(function (r) {
          if (r.ok || r.type === 'opaque') { c.put(e.request, r.clone()); c.keys().then(function (k) { if (k.length > MAX) c.delete(k[0]); }); }
          return r;
        });
      });
    }));
    return;
  }
  if (u.origin === location.origin) {
    e.respondWith(fetch(e.request).then(function (r) { var cp = r.clone(); caches.open(PAGE).then(function (c) { c.put(e.request, cp); }); return r; }).catch(function () { return caches.match(e.request); }));
  }
});
