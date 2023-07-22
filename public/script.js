window.addEventListener('load', async () => {
    if ('serviceWorker' in navigator) {
        try {
            await navigator.serviceWorker.register('sw.js')
            console.log('Service worker register success')
        } catch (e) {
            console.log('Service worker register fail')
        }
    }
})