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
            return cachedResponse;
        }

        const dynamicCache = await caches.open(dynamicCacheName);
        const networkResponse = await fetch(request);

        dynamicCache.put(request, networkResponse.clone());
        return networkResponse;
    } catch (error) {
        const cachedResponse = await caches.match('/index.html');
        return cachedResponse;
    }
}
