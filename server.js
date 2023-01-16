const oop = require("./oop.js")

const express = require("express")
const app = express()
const cors = require("cors")
app.use(cors())

const WebSocket = require("ws")
const wss = new WebSocket.Server({noServer:true})
wss.on("connection", function(ws) {
    ws.on("message", function (message) {
        if (message.toString() == "keep alive") {ws.send(123); return;}
        console.log(message.toString())
        ws.send("123")
    })
})

app.use(function (req, res, next) {
    req.head = { ...req.headers}
    next()
})

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

const MongoClient = require("mongodb").MongoClient
var client = new MongoClient("mongodb://127.0.0.1:27017")

var cursor = undefined
client.connect().then(cur => {cursor = cur; on_mongo_connect()})

async function on_mongo_connect() {
    console.log("mongodb is connected")
}

const fs = require("fs")
const https = require("https")
const http = require("http")
const ssl_cert = {key: fs.readFileSync(__dirname+'/ssl/cert.key', 'utf8'), cert: fs.readFileSync(__dirname+'/ssl/cert.pem', 'utf8')}


const Vue_path = __dirname+"/dist/"

app.use(express.static(Vue_path))

app.get("/", function(req, res) {
    //res.send("send me money please!!!!!")
    res.sendFile(Vue_path+"index.html")
})



app.use(express.json())

app.get("/api/", function(req, res) {
    res.send("Made by Visoff(ilya). If you find any bugs please contact me")
})

app.post("/api/db/", function(req, res) {
    console.log(req.body)
    res.send(req.body)
    //cursor.db("CityHeroes").collection("users").find().toArray().then(r => {res.send(r)})
})

app.post("/api/db/select/user/byId", function(req, res) {
    var body = req.body
    if (body.id == undefined) {
        res.send("Please send id")
        return
    }
    var user = new oop.User().from_db(cursor, body.id)
    res.send(user)
})



const https_server = https.createServer(ssl_cert, app)
const http_server = http.createServer(app)

https_server.listen(443, function() {
    console.log(`Express is running on port https`)
})

http_server.listen(80, function() {
    console.log(`Express is running on port http`)
})
