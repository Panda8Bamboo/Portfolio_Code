document.addEventListener("DOMContentLoaded", () => {

    /* Preload assets */
    const screenAssets = [
        { href: "./assets/img/shen.jpg", type: "image" },
        { href: "./assets/witch.jpg", type: "image" },
        { href: "./assets/tether.jpg", type: "image" },
        { href: "./assets/img/wizard.png", type: "image" },
        { href: "./assets/img/fanart.jpg", type: "image" },
    ]
    let combinedAssets = [...screenAssets];
    if (window.matchMedia("(max-width: 767px)").matches) {
        const smallScreenAssets = [
            { href: "./assets/media/pixels.mp4", type: "video" },
            { href: "./assets/img/pixels.png", type: "image" },
        ];
        combinedAssets = combinedAssets.concat(smallScreenAssets);
    }
    combinedAssets.forEach(asset => {
        const link = document.createElement("link");
        link.rel = "preload";
        link.href = asset.href;
        link.as = asset.type;
        document.head.appendChild(link);
    });

    /* Caching */
    const CACHE_NAME = "my-cache-v1";
    const urlsToCache = ["/", "./src/input.css", "/index.html", "/styles.css", "./assets/js/main.js"];

    self.addEventListener("install", (event) => {
        event.waitUntil(
            (async () => {
                const cache = await caches.open(CACHE_NAME);
                await cache.addAll(urlsToCache);
                console.log("Assets cached during install.");
            })()
        );
    });

    self.addEventListener("fetch", (event) => {
        event.respondWith(
            (async () => {
                const cachedResponse = await caches.match(event.request);
                if (cachedResponse) {
                    console.log("Cache hit:", event.request.url);
                    return cachedResponse;
                }
                console.log("Cache miss, fetching:", event.request.url);
                return fetch(event.request);
            })()
        );
    });
});
