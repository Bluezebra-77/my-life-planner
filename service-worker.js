const CACHE = 'my-life-planner-v54d-recurring-workflow';
const APP_SHELL = [
  './',
  './index.html?v=54d',
  './style.css?v=54d',
  './app.js?v=54d',
  './manifest.json?v=54d',
  './icon-192.png',
  './icon-512.png',
  './HELP_GUIDE.html',
  './QUICK_START_GUIDE.pdf',
  './INSTALLATION_GUIDE.md',
  './DEVELOPER_HANDBOOK.pdf'
];
self.addEventListener('install', event => {
  self.skipWaiting();
  event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(APP_SHELL)));
});
self.addEventListener('activate', event => {
  event.waitUntil((async () => {
    const keys=await caches.keys();
    await Promise.all(keys.filter(key=>key.startsWith('my-life-planner-')&&key!==CACHE).map(key=>caches.delete(key)));
    await self.clients.claim();
  })());
});
self.addEventListener('fetch', event => {
  if(event.request.method!=='GET')return;
  const request=event.request;
  const isNavigation=request.mode==='navigate';
  event.respondWith((async()=>{
    try{
      const response=await fetch(isNavigation?new Request(request,{cache:'reload'}):request);
      if(response&&response.ok){const cache=await caches.open(CACHE);cache.put(request,response.clone()).catch(()=>{});}
      return response;
    }catch(error){
      const cached=await caches.match(request);if(cached)return cached;
      if(isNavigation)return (await caches.match('./index.html?v=54d'))||(await caches.match('./index.html'));
      throw error;
    }
  })());
});
self.addEventListener('message',event=>{if(event.data?.type==='SKIP_WAITING')self.skipWaiting();});
