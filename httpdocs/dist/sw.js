self.addEventListener("install", event => {
    console.log("service worker is on the grind")
    event.waitUntil(caches.open("links").then(cache => {
        return cache.addAll([
            "./",
            "./manifest.json"
        ])
    }))
})

self.addEventListener("fetch", event => {
    event.respondWith((async () => {
        var cache = await caches.open("links")
        var req = event.request
        var res = await cache.match(req)
        if (res == undefined) {
            cache.add(req)
            return fetch(req)
        } else {
            return res
        }
    })())
})

self.addEventListener("periodicsync", event => {
    if (event.tag == "get-notified") {
        event.waitUntil(console.log(123))
    }
})