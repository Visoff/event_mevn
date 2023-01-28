const express = require("express")
const app = express()
const cors = require("cors")
app.use(cors())

app.use(function (req, res, next) {
    req.head = { ...req.headers}
    next()
})

require("./web_socket.js").setup(app)

const MongoClient = require("mongodb").MongoClient
var client = new MongoClient("mongodb://127.0.0.1:27017")

var cursor = undefined
client.connect().then(cur => {cursor = cur; global.CityHeroes_db = cur.db("CityHeroes"); on_mongo_connect()})

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

require("./api.js").setup(app)

const https_server = https.createServer(ssl_cert, app)
const http_server = http.createServer(app)

https_server.listen(443, function() {
    console.log(`Express is running on port https`)
})

http_server.listen(80, function() {
    console.log(`Express is running on port http`)
})
