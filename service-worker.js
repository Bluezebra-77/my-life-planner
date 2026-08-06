const CACHE = 'my-life-planner-v54cR22-update-recovery';
const APP_SHELL = [
  './',
  './index.html?v=54cR2',
  './style.css?v=54cR2',
  './app.js?v=54cR2',
  './manifest.json?v=54cR2',
  './icon-192.png',
  './icon-512.png',
  './HELP_GUIDE.html',
  './QUICK_START_GUIDE.pdf',
  './INSTALLATION_GUIDE.md',
  './DEVELOPER_HANDBOOK.pdf',
  './recover-v54cR2.html'
];

self.addEventListener('install', event => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE).then(cache => cache.addAll(APP_SHELL))
  );
});

self.addEventListener('activate', event => {
  event.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(
      keys
        .filter(key => key.startsWith('my-life-planner-') && key !== CACHE)
        .map(key => caches.delete(key))
    );
    await self.clients.claim();
    const clients = await self.clients.matchAll({ type: 'window', includeUncontrolled: true });
    for (const client of clients) client.postMessage({ type: 'UPDATE_RECOVERY_ACTIVE', version: '54cR2' });
  })());
});

self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;
  const request = event.request;
  const isNavigation = request.mode === 'navigate';

  event.respondWith((async () => {
    try {
      const networkRequest = isNavigation
        ? new Request(request, { cache: 'reload' })
        : request;
      const response = await fetch(networkRequest);
      if (response && response.ok) {
        const cache = await caches.open(CACHE);
        cache.put(request, response.clone()).catch(() => {});
      }
      return response;
    } catch (error) {
      const cached = await caches.match(request);
      if (cached) return cached;
      if (isNavigation) {
        return (await caches.match('./index.html?v=54cR2')) || (await caches.match('./index.html'));
      }
      throw error;
    }
  })());
});

self.addEventListener('message', event => {
  if (event.data?.type === 'SKIP_WAITING') self.skipWaiting();
  if (event.data?.type === 'RECOVER_UPDATE') {
    event.waitUntil((async () => {
      const keys = await caches.keys();
      await Promise.all(keys.filter(key => key.startsWith('my-life-planner-') && key !== CACHE).map(key => caches.delete(key)));
      self.skipWaiting();
    })());
  }
});
