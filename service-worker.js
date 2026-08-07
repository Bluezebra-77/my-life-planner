const APP_VERSION = '54e';
const CACHE = `my-life-planner-v${APP_VERSION}-pwa-reliability`;
const APP_SHELL = [
  './index.html',
  './style.css?v=54e',
  './app.js?v=54e',
  './manifest.json?v=54e',
  './version.json',
  './icon-192.png',
  './icon-512.png',
  './HELP_GUIDE.html',
  './QUICK_START_GUIDE.pdf',
  './INSTALLATION_GUIDE.md',
  './DEVELOPER_HANDBOOK.pdf'
];

self.addEventListener('install', event => {
  // Activate new releases immediately. The activation handler then refreshes open app clients.
  self.skipWaiting();
  event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(APP_SHELL)));
});

self.addEventListener('activate', event => {
  event.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys.filter(key => key.startsWith('my-life-planner-') && key !== CACHE).map(key => caches.delete(key)));
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
      const cached = await caches.match(request);
      if (cached) return cached;
      if (isNavigation) return (await caches.match('./index.html')) || Response.error();
      throw error;
    }
  })());
});

self.addEventListener('message', event => {
  if (event.data?.type === 'SKIP_WAITING') self.skipWaiting();
  if (event.data?.type === 'GET_VERSION') event.source?.postMessage({ type: 'PLANNER_WORKER_ACTIVE', version: APP_VERSION });
});
