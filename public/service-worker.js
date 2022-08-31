var CACHE_NAME = 'pwa-task-manager';
var urlsToCache = ['/', '/list'];

// Install a service worker
self.addEventListener('install', (event) => {
	console.log('[WORKER.JS] - Opened cache - Outside event');
	console.log('[FETCH] - caches', caches);
	console.log('[FETCH] - caches.keys()', caches.keys());
	// Perform install steps
	event.waitUntil(
		caches.open(CACHE_NAME).then(function (cache) {
			console.log('[WORKER.JS] - Opened cache');
			return cache.addAll(urlsToCache);
		})
	);
});

// Cache and return requests
self.addEventListener('fetch', (event) => {
	console.log('[FETCH] - event.request', event.request);
	console.log('[FETCH] - caches', caches);
	console.log('[FETCH] - caches.keys()', caches.keys());

	event.respondWith(
		caches.match(event.request).then(function (response) {
			// Cache hit - return response
			console.log('[ CACHE-HIT ] ', response);
			if (response) {
				return response;
			}
			return fetch(event.request);
		})
	);
});

// Update a service worker
self.addEventListener('activate', (event) => {
	var cacheWhitelist = ['pwa-task-manager'];
	console.log('[ACTIVATE] - caches', caches);
	event.waitUntil(
		caches.keys().then((cacheNames) => {
			return Promise.all(
				cacheNames.map((cacheName) => {
					if (cacheWhitelist.indexOf(cacheName) === -1) {
						return caches.delete(cacheName);
					}
				})
			);
		})
	);
});
