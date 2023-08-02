const dynamicCacheName = 'd-app-v3';

const assetUrls = [
    '/',
    './index.html',
    '../src/index.js',
    '../src/App.js'
];

self.addEventListener('install', async () => {
    try {
        const cache = await caches.open(dynamicCacheName);
        await cache.addAll(assetUrls);
    } catch (error) {
        console.error('Service worker: Cache installation failed', error);
    }
});

self.addEventListener('activate', async () => {
    try {
        const cacheNames = await caches.keys();
        await Promise.all(
            cacheNames
                .filter((name) => name !== dynamicCacheName)
                .map((name) => caches.delete(name))
        );
    } catch (error) {
        console.error('Service worker: Cache activation failed', error);
    }
});

self.addEventListener('fetch', event => {
    const { request } = event

    if (!navigator.onLine && !request.url.includes('https://shomaqsudov-portfolio-backend')) {
        event.respondWith(cacheFirst(request))
    } else {
        // event.respondWith(networkFirst(request))
    }
})

async function cacheFirst(request) {
    const cached = await caches.match(request)
    return cached ?? await fetch(request)
}

async function networkFirst(request) {
    const cache = await caches.open(dynamicCacheName)
    try {
        const response = await fetch(request)
        await cache.put(request, response.clone())
        return response
    } catch (e) {
        const cached = await cache.match(request)
        return cached ?? await caches.match('/index.html')
    }
}