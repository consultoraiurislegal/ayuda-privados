const CACHE_NAME = 'privados-legal-v2';
const urlsToCache = [
  './',
  './index.html'
];

// Instala el Service Worker y guarda en caché
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
  );
});

// Responde con la caché si no hay internet (ideal para el Táchira)
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        return response || fetch(event.request);
      })
  );
});
