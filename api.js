function setup(app) {
    oop = require("./oop.js")
    app.get("/api/", function(req, res) {
        res.send("Made by Visoff(ilya). If you find any bugs please contact me. Telegram: @VisoffOwner (maybe I'll change this cringie name)")
    })
    
    app.post("/api/db/", function(req, res) {
        console.log(req.body)
        res.send({request:req.body, dude:123456})
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
    
    app.post("/api/db/schedule/get/ByDate", async function(req, res) {
        var body = req.body
        if (body.date == undefined) {
            res.send("Please send date")
            return
        }
        var schedule = await oop.Schedule.find.ByDate(newDate(body.date))
        if (schedule.length == 0) {
            res.send("there is no schedule on that day")
        } else {
            res.send(schedule)
        }
    })
    
    app.post("/api/db/schedule/get/ByDateTime", async function(req, res) {
        var body = req.body
        if (body.date == undefined) {
            res.send("Please send date")
            return
        }
        var schedule = await oop.Schedule.find.ByDateTime(newDate(body.date))
        if (schedule.length == 0) {
            res.send("there is no schedule on that time")
        } else {
            res.send(schedule)
        }
    })
}

module.exports = {setup}