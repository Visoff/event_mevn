setup = (app) => {
    app.get("/api/", function(req, res) {
        res.send("Made by Visoff(ilya). If you find any bugs please contact me")
    })

    app.post("/api/db/", function(req, res) {
        console.log(req.body)
        res.send(req.body)
        //cursor.db("CityHeroes").collection("users").find().toArray().then(r => {res.send(r)})
    })
}

module.exports = {
    setup
}