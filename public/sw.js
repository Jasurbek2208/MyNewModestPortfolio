const dynamicCacheName = 'd-app-v3';

const assetUrls = [
    'index.html',
    '../src/App.jsx',
    '../src/index.js',
    '../src/pages/Home.jsx',
    '../src/store/index.js',
    '../src/pages/Contact.jsx',
    '../src/router/Router.jsx',
    '../src/pages/Portfolio.jsx',
    '../src/router/constants.js',
    '../src/pages/auth/Login.jsx',
    '../src/layouts/MainLayout.jsx',
    '../src/pages/admin/AddPost.jsx',
    '../src/components/loader/Loader.jsx',
    '../src/components/navbar/Navbar.jsx',
    '../src/components/footer/Footer.jsx',
    '../src/components/postPreview/PostPreview.jsx',
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
    const url = new URL(request.url)

    if (url.origin === location.origin) {
        event.respondWith(cacheFirst(request))
    } else {
        event.respondWith(networkFirst(request))
    }
})

async function cacheFirst(request) {
    const cached = await caches.match(request)
    return cached ?? await fetch(request)
}

async function networkFirst(request) {
    const cache = await caches.open(dynamicCacheName)
    try {
        if(!navigator.onLine) return

        const response = await fetch(request)
        console.log(response);

        if (response && response.status === 200 && response.url.includes('/portfolios')) {
            await cache.put(request, response.clone())
        }
        return response
    } catch (e) {
        console.log(e);
        const cached = await cache.match(request)
        console.log(cached ?? await caches.match('/index.html'));
        return cached ?? await caches.match('/index.html')
    }
}