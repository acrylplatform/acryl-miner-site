var cacheVersion = 1;
var currentCache = {
    offline: 'offline-cache' + cacheVersion
};
var offlineUrl = 'offline-page.html';

self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open(currentCache.offline).then(function(cache) {
            return cache.addAll([
                '',
                'index.html',
                'browserconfig.xml',
                'style.css',
                'acrylminer.js',
                'bootstrap.min.js',
                'jquery.easing.min.js',
                'jquery.inputmask.bundle.js',
                'jquery-3.3.1.min.js',
                // 'img/acryl.svg',
                // 'img/acryl-logo-white.svg',
                // 'img/all-in.svg',
                // 'img/bitcoin.svg',
                // 'img/black-block-bg.svg',
                // 'img/bussines.svg',
                // 'img/check-image.svg',
                // 'img/checked.svg',
                // 'img/client.png',
                // 'img/client.webp',
                // 'img/data.svg',
                // 'img/download.svg',
                // 'img/download-orange.svg',
                // 'img/favicon.svg',
                // 'img/fb.svg',
                // 'img/ino.svg',
                // 'img/logo-orange.svg',
                // 'img/lpos.svg',
                // 'img/menu.svg',
                // 'img/miner.svg',
                // 'img/miner-bg.jpg',
                // 'img/miner-bg.webp',
                // 'img/miner-top.jpg',
                // 'img/miner-top.webp',
                // 'img/mining.svg',
                // 'img/motivation.svg',
                // 'img/nergy.svg',
                // 'img/new.svg',
                // 'img/noda.jpq',
                // 'img/noda.webp',
                // 'img/not-check.svg',
                // 'img/nxt.svg',
                // 'img/one-miner.png',
                // 'img/one-miner.webp',
                // 'img/partner-bg.jpg',
                // 'img/partner-bg.webp',
                // 'img/sale.svg',
                // 'img/scheme.svg',
                // 'img/scheme-mobile.svg',
                // 'img/team.svg',
                // 'img/terms-bg.jpg',
                // 'img/terms-bg.webp',
                // 'img/tools.svg',
                // 'img/top-450.jpg',
                // 'img/top-450.webp',
                // 'img/top-800.jpg',
                // 'img/top-800.webp',
                // 'img/top-1200.jpg',
                // 'img/top-1200.webp',
                // 'img/top-2560.jpg',
                // 'img/top-2560.webp',
                // 'img/top-3840.jpg',
                // 'img/top-3840.webp',
                // 'img/top-5120.jpg',
                // 'img/top-5120.webp',
                // 'img/twitter.svg',
                // 'img/waves.svg',
                // 'img/youtube.svg',
                offlineUrl
            ]);
        })
    );
});
self.addEventListener('fetch', function(event) {
    // request.mode = navigate isn't supported in all browsers
    // so include a check for Accept: text/html header.
    if (event.request.mode === 'navigate' || (event.request.method === 'GET' && event.request.headers.get('accept').includes('text/html'))) {
    event.respondWith(
        fetch(event.request.url).catch(function(error) {
            // Return the offline page
            return caches.match(offlineUrl);
})
);
}
else{
    // Respond with everything else if we can
    event.respondWith(caches.match(event.request)
        .then(function (response) {
            return response || fetch(event.request);
        })
    );
}
});