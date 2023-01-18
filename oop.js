class User {
    constructor() {
        this.id = 0
        this.name = ""
        this.nickname = ""
        this.password = ""
    }

    async from_db(id) {
        this.import(await global.CityHeroes_db.collection("users").findOne({id}))
        return this
    }

    import(obj) {
        this.id = obj.id != undefined ? obj.id : 0
        this.name = obj.name != undefined ? obj.name : ""
        this.nickname = obj.nickname != undefined ? obj.nickname : ""
        this.password = obj.password != undefined ? obj.password : ""
        return this
    }

    update() {
        (async () => {
            var col = await global.CityHeroes_db.collection("users")
            var old = await col.findOne({"id":this.id})
            var update = {}
            if (old.name != this.name) {update.name = this.name}
            if (old.nickname != this.nickname) {update.nickname = this.nickname}
            if (old.password != this.password) {update.password = this.password}
            return await col.updateOne({"id":this.id}, {"$set":update})
        })()
    }

    static find={
        async teams(id) {
            var teams = await global.CityHeroes_db.collection("team_mates").find({"person_id":id}).toArray()
            var team_ids = []
            teams.forEach(el => {
                team_ids.push(el["person_id"])
            });
            return await global.CityHeroes_db.collection("teams").find({"id":{$in: team_ids}}).toArray()
        },
        async events(id) {
            var events = await global.CityHeroes_db.collection("event_registration").find({"person_id":id}).toArray()
            var event_ids = []
            events.forEach(el => {
                event_ids.push(el["person_id"])
            });
            return await global.CityHeroes_db.collection("events").find({"id":{$in: event_ids}}).toArray()
        }
    }
}

class Team{
    constructor() {
        this.id
        this.name
    }

    async from_db(id) {
        this.import(await global.CityHeroes_db.collection("teams").findOne({id}))
        return this
    }
    
    import(obj) {
        this.id = obj.id != undefined ? obj.id : 0
        this.name = obj.name != undefined ? obj.name : ""
        return this
    }

    update() {
        (async () => {
            var col = await global.CityHeroes_db.collection("teams")
            var old = await col.findOne({"id":this.id})
            var update = {}
            if (old.name != this.name) {update.name = this.name}
            return await col.updateOne({"id":this.id}, {"$set":update})
        })()
    }

    static registration={
        async check_person(team, person_id) {
            return await global.CityHeroes_db.collection("team_mates").findOne({team_id:team.id, person_id})
        },
        async register_person(team, person_id) {
            return await global.CityHeroes_db.collection("team_mates").insertOne({team_id:team.id, person_id})
        },
    }
}

class Event{
    constructor() {
        this.id = 0
        this.name = ""
        this.date = new Date()
    }

    async from_db(id) {
        this.import(await global.CityHeroes_db.collection("events").findOne({id}))
        return this
    }
    
    import(obj) {
        this.id = obj.id != undefined ? obj.id : 0
        this.name = obj.name != undefined ? obj.name : ""
        this.date = obj.date != undefined ? obj.date : new Date()
        return this
    }

    update() {
        (async () => {
            var col = await global.CityHeroes_db.collection("events")
            var old = await col.findOne({"id":this.id})
            var update = {}
            if (old.name != this.name) {update.name = this.name}
            if (old.date != this.date) {update.date = this.date}
            return await col.updateOne({"id":this.id}, {"$set":update})
        })()
    }

    static registration={
        async check_person(event, person_id) {
            return await global.CityHeroes_db.collection("event_registration").findOne({event_id:event.id, person_id})
        },
        async register_person(event, person_id) {
            return await global.CityHeroes_db.collection("event_registration").insertOne({event_id:event.id, person_id})
        },
        async check_team(event, team_id) {
            return await global.CityHeroes_db.collection("event_registration").findOne({event_id:event.id, team_id})
        },
        async register_team(event, team_id) {
            return await global.CityHeroes_db.collection("event_registration").insertOne({event_id:event.id, team_id})
        }
    }
}

class Schedule{
    constructor() {
        this.event_id = 0
        this.name = ""
        this.timestamp = {
            start:new Date().getTime(),
            end:new Date().getTime()
        }
    }

    import(obj) {
        this.event_id = obj.event_id != undefined ? obj.event_id : this.event_id
        this.name = obj.name != undefined ? obj.name : this.name
        this.timestamp = obj.timestamp != undefined ? {
            start:obj.timestamp.start != undefined ? (typeof obj.timestamp.start == "int" ? obj.timestamp.start : obj.timestamp.start.getTime()) : this.timestamp.start,
            end:obj.timestamp.end != undefined ? (typeof obj.timestamp.end == "int" ? obj.timestamp.end : obj.timestamp.end.getTime()) : this.timestamp.end
        } : this.timestamp
        return this
    }

    export() {
        return {
            event_id:this.event_id,
            name:this.name,
            timestamp:this.timestamp
        }
    }

    static find={
        async ByEventId(event_id) {
            return await global.CityHeroes_db.collection("event_schedule").find({event_id}).toArray()
        },
        async ByDate(date) {
            var time = date.getTime()
            return await global.CityHeroes_db.collection("event_schedule").find({start:{$gte:time}, end:{$lte:time}}).toArray()
        }
    }

    async pushToDb() {
        return await global.CityHeroes_db.collection("event_schedule").insertOne(this.export())
    }
}

module.exports = {
    User,
    Event,
    Team,
    Schedule
}
