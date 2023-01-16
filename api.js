setup = (app) => {
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
}

module.exports = {
    setup
}