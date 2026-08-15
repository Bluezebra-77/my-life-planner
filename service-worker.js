const APP_VERSION = '54yR1';
const CACHE = `my-life-planner-v${APP_VERSION}-transition-safe`;

// Keep installation deliberately small. Optional guides/documents are NOT pre-cached:
// one missing optional file must never prevent a new service worker from activating.
const CORE_ASSETS = [
  './index.html',
  './style.css?v=54yR1',
  './app.js?v=54yR1',
  './manifest.json?v=54yR1',
  './version.json',
  './icon-192.png',
  './icon-512.png'
];

self.addEventListener('install', event => {
  self.skipWaiting();
  event.waitUntil((async () => {
    const cache = await caches.open(CACHE);
    // Cache each asset independently so a single failed request cannot abort installation.
    await Promise.allSettled(CORE_ASSETS.map(async asset => {
      try {
        const response = await fetch(asset, { cache: 'reload' });
        if (response && response.ok) await cache.put(asset, response.clone());
      } catch (_) {}
    }));
  })());
});

self.addEventListener('activate', event => {
  event.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys
      .filter(key => key.startsWith('my-life-planner-') && key !== CACHE)
      .map(key => caches.delete(key)));
    await self.clients.claim();
    const clients = await self.clients.matchAll({ type: 'window', includeUncontrolled: true });
    for (const client of clients) {
      client.postMessage({ type: 'PLANNER_WORKER_ACTIVE', version: APP_VERSION });
    }
  })());
});

self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;
  const request = event.request;
  const url = new URL(request.url);
  const isNavigation = request.mode === 'navigate';
  const isVersionProbe = url.pathname.endsWith('/version.json');

  if (isVersionProbe) {
    event.respondWith(fetch(request, { cache: 'no-store' }));
    return;
  }

  // Network first: an online installed app should never stay pinned to an old shell.
  event.respondWith((async () => {
    try {
      const networkRequest = isNavigation ? new Request(request, { cache: 'reload' }) : request;
      const response = await fetch(networkRequest);
      if (response && response.ok) {
        const cache = await caches.open(CACHE);
        cache.put(request, response.clone()).catch(() => {});
      }
      return response;
    } catch (error) {
      const cached = await caches.match(request, { ignoreSearch: isNavigation });
      if (cached) return cached;
      if (isNavigation) {
        return (await caches.match('./index.html', { ignoreSearch: true })) || Response.error();
      }
      throw error;
    }
  })());
});

self.addEventListener('message', event => {
  if (event.data?.type === 'SKIP_WAITING') self.skipWaiting();
  if (event.data?.type === 'GET_VERSION') {
    event.source?.postMessage({ type: 'PLANNER_WORKER_ACTIVE', version: APP_VERSION });
  }
});
