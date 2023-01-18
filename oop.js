class User {
    constructor() {
        this.id = 0
        this.name = ""
        this.nickname = ""
        this.password = ""
    }

    async from_db(cursor, id) {
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

    update(cursor) {
        (async cursor => {
            var col = await global.CityHeroes_db.collection("users")
            var old = await col.findOne({"id":this.id})
            var update = {}
            if (old.name != this.name) {update.name = this.name}
            if (old.nickname != this.nickname) {update.nickname = this.nickname}
            if (old.password != this.password) {update.password = this.password}
            return await col.updateOne({"id":this.id}, {"$set":update})
        })(cursor)
    }
}

class Event{
    constructor() {
        this.id = 0
        this.name = ""
        this.date = new Date()
    }

    async from_db(cursor, id) {
        this.import(await global.CityHeroes_db.collection("events").findOne({id}))
        return this
    }
    
    import(obj) {
        this.id = obj.id != undefined ? obj.id : 0
        this.name = obj.name != undefined ? obj.name : ""
        this.date = obj.date != undefined ? obj.date : new Date()
        return this
    }

    update(cursor) {
        (async cursor => {
            var col = await global.CityHeroes_db.collection("events")
            var old = await col.findOne({"id":this.id})
            var update = {}
            if (old.name != this.name) {update.name = this.name}
            if (old.date != this.date) {update.date = this.date}
            return await col.updateOne({"id":this.id}, {"$set":update})
        })(cursor)
    }

    static registration={
        async check_person(cursor, event, person_id) {
            return await global.CityHeroes_db.collection("event_registration").findOne({event_id:event.id, person_id})
        },
        async register_person(cursor, event, person_id) {
            return await global.CityHeroes_db.collection("event_registration").insertOne({event_id:event.id, person_id})
        },
        async check_team(cursor, event, team_id) {
            return await global.CityHeroes_db.collection("event_registration").findOne({event_id:event.id, team_id})
        },
        async register_team(cursor, event, team_id) {
            return await global.CityHeroes_db.collection("event_registration").insertOne({event_id:event.id, team_id})
        }
    }
}

class Team{
    constructor() {
        this.id
        this.name
    }

    async from_db(cursor, id) {
        this.import(await global.CityHeroes_db.collection("teams").findOne({id}))
        return this
    }
    
    import(obj) {
        this.id = obj.id != undefined ? obj.id : 0
        this.name = obj.name != undefined ? obj.name : ""
        return this
    }

    update(cursor) {
        (async cursor => {
            var col = await global.CityHeroes_db.collection("teams")
            var old = await col.findOne({"id":this.id})
            var update = {}
            if (old.name != this.name) {update.name = this.name}
            return await col.updateOne({"id":this.id}, {"$set":update})
        })(cursor)
    }

    static registration={
        async check_person(cursor, team, person_id) {
            return await global.CityHeroes_db.collection("team_mates").findOne({team_id:team.id, person_id})
        },
        async register_person(cursor, team, person_id) {
            return await global.CityHeroes_db.collection("team_mates").insertOne({team_id:team.id, person_id})
        },
    }
}

module.exports = {
    User,
    Event,
    Team
}
