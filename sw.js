    var CACHE_NAME = 'my-site-cache-v1';
    var urlsToCache = [
        '/',
        'manifest.json',
        'browserconfig.xml',
        'css/style.css',
        'js/acrylminer.js',
        'js/sw.js',
        's/fs.js'
        // 'https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css',
        // 'https://code.jquery.com/jquery-3.3.1.min.js',
        // 'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js',
        // 'https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js',
        // 'https://cdnjs.cloudflare.com/ajax/libs/jquery.inputmask/3.3.4/jquery.inputmask.bundle.min.js',
        // 'https://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.4.1/jquery.easing.min.js'
    ];
    self.addEventListener('install', function(event) {
        console.log('download');
        event.waitUntil(
            caches.open(CACHE_NAME)
                .then(function(cache) {
                    console.log('Opened cache');
                    return cache.addAll(urlsToCache);
                })
        );
    });
self.addEventListener('activate', function(event) {
    console.log('activate');
});
self.addEventListener('fetch', function(event) {
    console.log('server request');
});
