if (navigator.serviceWorker) {
    try {navigator.serviceWorker.register("/sw.js")} catch {}
    (async () => {
        var sw = await navigator.serviceWorker.ready
        try {
            var status = await navigator.permissions.query({ name: "periodic-background-sync" })
            if (status == "denied") {return}
            await sw.periodicSync.register("get-notified", {minInterval:1000/* 1 minute */})
            console.log("periodic sync has been set up")
        } catch {}
    })()
}