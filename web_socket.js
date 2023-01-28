function setup(app) {
    const WebSocket = require("ws")
    const wss = new WebSocket.Server({noServer:true})

    app.ws = function(path, handler) {
        app.use(function(req, res, next) {
            if (req.url === path && req.headers.upgrade === 'websocket') {
                wss.handleUpgrade(req, req.socket, req.head, function done(ws) {
                    handler(ws, req);
                });
            } else {
                next();
            }
        });
    };

    app.ws("/", function(ws, req) {
        wss.emit("connection", ws, req)
    })
    
    wss.on("connection", function(ws) {
        console.log("websocket was connected")
        ws.on("message", function (message) {
            console.log(message.toString())
            ws.send("server echo "+message.toString())
        })
    })
}

module.exports = {setup}