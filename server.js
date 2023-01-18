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
client.connect().then(cur => {cursor = cur; global.CityHeroes_db = cur.db("CityHeroes"); on_mongo_connect()})

async function on_mongo_connect() {
    /*var timestamp = {
        start:new Date(),
        end:new Date()
    }
    timestamp.start.setHours(10)
    timestamp.start.setMinutes(0)
    timestamp.end.setHours(11)
    timestamp.end.setMinutes(0)
    var res = new oop.Schedule().import({event_id:1, date:new Date(), name:"Открытие", timestamp})
    res.pushToDb()*/
    var res = oop.Schedule.find.ByEventId(1)
    console.log(res)
    console.log("mongodb is connected")
}

const fs = require("fs")
const https = require("https")
const http = require("http")
const { time } = require("console")
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
})

app.post("/api/db/user/getBy/id", async function(req, res) {
    var body = req.body
    if (body.id == undefined) {
        res.send("Please send id")
        return
    }
    var user = await new oop.User().from_db(body.id)
    res.send(user)
})

app.post("/api/db/user/addTo/event", async function(req, res) {
    var body = req.body
    if (body.user == undefined || body.event == undefined) {
        res.send("Please send id")
        return
    }
    var event = await new oop.Event().from_db(body.event)
    if (!!(a = await oop.Event.registration.check_person(event, body.user))) {
        res.send("user was already in this event")
    } else {
        await oop.Event.registration.register_person(event, body.user)
        res.send(event)
    }
})


app.post("/api/db/user/addTo/team", async function(req, res) {
    var body = req.body
    if (body.user == undefined || body.team == undefined) {
        res.send("Please send id")
        return
    }
    var team = await new oop.Team().from_db(body.team)
    if (!!(a = await oop.Team.registration.check_person(team, body.user))) {
        res.send("user was already in this team")
    } else {
        await oop.Team.registration.register_person(team, body.user)
        res.send(team)
    }
})

app.post("/api/db/user/get/teams", async function(req, res) {
    var body = req.body
    if (body.id == undefined) {
        res.send("Please send id")
        return
    }
    var teams = await oop.User.find.teams(body.id)
    if (teams.length == 0) {
        res.send("user has no teams")
    } else {
        res.send(teams)
    }
})

app.post("/api/db/user/get/events", async function(req, res) {
    var body = req.body
    if (body.id == undefined) {
        res.send("Please send id")
        return
    }
    var events = await oop.User.find.events(body.id)
    if (events.length == 0) {
        res.send("user has no events")
    } else {
        res.send(events)
    }
})

app.post("/api/db/schedule/get/ByEventId", async function(req, res) {
    var body = req.body
    if (body.id == undefined) {
        res.send("Please send id")
        return
    }
    var schedule = await oop.Schedule.find.ByEventId(body.id)
    if (schedule.length == 0) {
        res.send("event has no schedule")
    } else {
        res.send(schedule)
    }
})

const https_server = https.createServer(ssl_cert, app)
const http_server = http.createServer(app)

https_server.listen(443, function() {
    console.log(`Express is running on port https`)
})

http_server.listen(80, function() {
    console.log(`Express is running on port http`)
})
