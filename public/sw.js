const cacheData = 'telegram-react';
const apiCache = 'api-data';


self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(cacheData).then((cache) => {
            return cache.addAll([
                'static/js/bundle.js',
                '/index.html',
                '/',
            ]);
        })
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((cachedResponse) => {
            if (cachedResponse && !navigator.onLine) {
                return cachedResponse;
            }

            if (event.request.url.includes("messages")) {
                return fetchAndCacheJson(event.request);
            }


            return fetch(event.request).catch((error) => {
                console.error('Fetch error:', error);
            });
        })
    );
});



function fetchAndCacheJson(request) {
    return fetch(request).then((networkResponse) => {
        const clonedResponse = networkResponse.clone();

        caches.open(apiCache).then((cache) => {
            cache.put(request, clonedResponse);
        });

        return networkResponse;
    }).catch((error) => {
        console.error('JSON fetch error:', error);
        return new Response('JSON fetch error: Unable to fetch the resource.');
    });
}