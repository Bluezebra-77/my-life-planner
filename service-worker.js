const CACHE = "my-life-planner-v9-20260729";
const FILES = ["./","./index.html?v=9","./style.css","./app.js","./manifest.json","./icon-192.png","./icon-512.png"];
self.addEventListener("install", event => { event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(FILES)).then(() => self.skipWaiting())); });
self.addEventListener("activate", event => { event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(key => key !== CACHE).map(key => caches.delete(key)))).then(() => self.clients.claim())); });
self.addEventListener("message", event => { if (event.data?.type === "SKIP_WAITING") self.skipWaiting(); });
self.addEventListener("fetch", event => {
  if (event.request.method !== "GET") return;
  const req = event.request;
  const isPage = req.mode === "navigate" || req.destination === "document";
  if (isPage) {
    event.respondWith(fetch(req, { cache:"no-store" }).then(response => { const copy=response.clone(); caches.open(CACHE).then(c=>c.put("./index.html?v=9",copy)); return response; }).catch(() => caches.match("./index.html?v=9")));
    return;
  }
  event.respondWith(fetch(req, { cache:"no-cache" }).then(response => { if(response.ok){ const copy=response.clone(); caches.open(CACHE).then(c=>c.put(req,copy)); } return response; }).catch(() => caches.match(req)));
});
