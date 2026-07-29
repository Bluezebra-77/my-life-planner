const CACHE = "my-life-planner-v96-20260729";
const FILES = ["./","./index.html?v=9.6","./style.css?v=9.6","./app.js?v=9.6","./manifest.json?v=9.6","./icon-192.png","./icon-512.png"];
self.addEventListener("install",e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(FILES)).then(()=>self.skipWaiting())));
self.addEventListener("activate",e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener("message",e=>{if(e.data?.type==="SKIP_WAITING")self.skipWaiting()});
self.addEventListener("fetch",e=>{if(e.request.method!=="GET")return;const r=e.request;if(r.mode==="navigate"||r.destination==="document"){e.respondWith(fetch(r,{cache:"no-store"}).then(x=>{const y=x.clone();caches.open(CACHE).then(c=>c.put("./index.html?v=9.6",y));return x}).catch(()=>caches.match("./index.html?v=9.6")));return;}e.respondWith(fetch(r,{cache:"no-cache"}).then(x=>{if(x.ok){const y=x.clone();caches.open(CACHE).then(c=>c.put(r,y))}return x}).catch(()=>caches.match(r)))});
