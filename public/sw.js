const staticCacheName = 's-app-v3';
const dynamicCacheName = 'd-app-v3';

const assetUrls = [
    '/',
    './index.html',
    '../src/index.js',
    '../src/App.js',
    '../src/layouts/MainLayout.jsx',
    '../src/pages/Home.jsx',
    '../src/pages/Contact.jsx',
    '../src/pages/Portfolio.jsx',
    '../src/router/Router.jsx',
];

self.addEventListener('install', async (event) => {
    try {
        const cache = await caches.open(staticCacheName);
        await cache.addAll(assetUrls);
        console.log('Service worker: Assets cached');
    } catch (error) {
        console.error('Service worker: Cache installation failed', error);
    }
});

self.addEventListener('activate', async (event) => {
    try {
        const cacheNames = await caches.keys();
        await Promise.all(
            cacheNames
                .filter((name) => name !== staticCacheName && name !== dynamicCacheName)
                .map((name) => caches.delete(name))
        );
        console.log('Service worker: Cache cleared');
    } catch (error) {
        console.error('Service worker: Cache activation failed', error);
    }
});

self.addEventListener('fetch', (event) => {
    const { request } = event;
    event.respondWith(cacheFirst(request));
});

async function cacheFirst(request) {
    try {
        const cachedResponse = await caches.match(request);
        if (cachedResponse) {
            console.log('Service worker: Cache hit', request.url);
            return cachedResponse;
        }

        console.log('Service worker: Cache miss, fetching from network', request.url);
        const dynamicCache = await caches.open(dynamicCacheName);
        const networkResponse = await fetch(request);
        dynamicCache.put(request, networkResponse.clone());
        return networkResponse;
    } catch (error) {
        console.error('Service worker: Fetch failed, returning fallback', error);
        const cachedResponse = await caches.match('/index.html');
        return cachedResponse;
    }
}
