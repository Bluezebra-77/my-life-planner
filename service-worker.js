const CACHE = "my-life-planner-v93-20260729";
const FILES = ["./","./index.html?v=9.3","./style.css?v=9.3","./app.js?v=9.3","./manifest.json?v=9.3","./icon-192.png","./icon-512.png"];
self.addEventListener("install",e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(FILES)).then(()=>self.skipWaiting())));
self.addEventListener("activate",e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener("message",e=>{if(e.data?.type==="SKIP_WAITING")self.skipWaiting()});
self.addEventListener("fetch",e=>{if(e.request.method!=="GET")return;const r=e.request;if(r.mode==="navigate"||r.destination==="document"){e.respondWith(fetch(r,{cache:"no-store"}).then(x=>{const y=x.clone();caches.open(CACHE).then(c=>c.put("./index.html?v=9.3",y));return x}).catch(()=>caches.match("./index.html?v=9.3")));return;}e.respondWith(fetch(r,{cache:"no-cache"}).then(x=>{if(x.ok){const y=x.clone();caches.open(CACHE).then(c=>c.put(r,y))}return x}).catch(()=>caches.match(r)))});
