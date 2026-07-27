const CACHE_VERSION = 'kindling-v1';
const CACHE_URLS = [
  '/',
  '/index.html',
  '/manifest.json'
];

// Install event: cache essential files
self.addEventListener('install', (event) => {
  console.log('Service Worker installing...');
  event.waitUntil(
    caches.open(CACHE_VERSION).then((cache) => {
      console.log('Caching essential files');
      return cache.addAll(CACHE_URLS).catch(() => {
        console.log('Some files could not be cached');
      });
    })
  );
  self.skipWaiting();
});

// Activate event: clean up old caches
self.addEventListener('activate', (event) => {
  console.log('Service Worker activating...');
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_VERSION) {
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// Fetch event: Network-first strategy for CDN, Cache-first for app shell
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Always go to network for API calls
  if (url.hostname !== location.hostname) {
    return;
  }

  // Cache-first strategy for app shell files
  if (request.method === 'GET') {
    event.respondWith(
      caches.match(request).then((cached) => {
        if (cached) {
          return cached;
        }
        
        return fetch(request).then((response) => {
          // Don't cache if not successful
          if (!response || response.status !== 200 || response.type === 'error') {
            return response;
          }

          // Clone and cache successful responses
          const responseClone = response.clone();
          caches.open(CACHE_VERSION).then((cache) => {
            cache.put(request, responseClone);
          });

          return response;
        }).catch(() => {
          // Return cached version or offline page
          return caches.match(request) || caches.match('/');
        });
      })
    );
  }
});

// Handle background sync for offline data
self.addEventListener('sync', (event) => {
  if (event.tag === 'sync-data') {
    event.waitUntil(
      // Sync any pending data when online
      Promise.resolve()
    );
  }
});

// Handle push notifications
self.addEventListener('push', (event) => {
  const data = event.data ? event.data.json() : {};
  const options = {
    body: data.body || 'Kindling notification',
    icon: '/data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 192"><defs><linearGradient id="g" x1="0" y1="1" x2="0" y2="0"><stop offset="0%" stop-color="%23B5502A"/><stop offset="55%" stop-color="%23D97A2E"/><stop offset="100%" stop-color="%23F0C270"/></linearGradient></defs><rect fill="%231C1A17" width="192" height="192" rx="45"/><path d="M96 30 C75 58 65 85 75 120 C65 115 60 100 58 85 C45 135 65 175 96 188 C70 170 72 140 96 110 C96 150 110 158 120 180 C150 160 165 120 140 80 C160 90 168 115 160 140 C180 95 170 45 140 20 C160 50 145 80 130 75 C145 45 140 15 96 30 Z" fill="url(%23g)"/></svg>',
    badge: '/data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 192"><circle fill="%23E8A648" cx="96" cy="96" r="96"/></svg>',
    tag: 'kindling-notification',
    requireInteraction: false,
  };

  event.waitUntil(
    self.registration.showNotification('Kindling', options)
  );
});

// Handle notification clicks
self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  event.waitUntil(
    clients.matchAll({ type: 'window' }).then((clientList) => {
      // Focus existing window if open
      for (const client of clientList) {
        if (client.url === '/' && 'focus' in client) {
          return client.focus();
        }
      }
      // Open new window if not open
      if (clients.openWindow) {
        return clients.openWindow('/');
      }
    })
  );
});
