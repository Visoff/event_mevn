class User {
    constructor() {
        this.id = 0
        this.name = ""
        this.nickname = ""
        this.password = ""
        this.details = {}
        this.friends = []
    }

    async from_db(cursor, id) {
        this.import(await cursor.db("CityHeroes").collection("users").findOne({id}))
        return this
    }

    import(obj) {
        this.id = obj.id != undefined ? obj.id : 0
        this.name = obj.name != undefined ? obj.name : ""
        this.nickname = obj.nickname != undefined ? obj.nickname : ""
        this.password = obj.password != undefined ? obj.password : ""
        this.details = obj.details != undefined ? obj.details : {}
        this.friends = obj.friends != undefined ? obj.friends : []
        return this
    }

    update(cursor) {
        (async cursor => {
            var col = await cursor.db("CityHeroes").collection("users")
            var old = await col.findOne({"id":this.id})
            var update = {}
            if (old.name != this.name) {update.name = this.name}
            if (old.nickname != this.nickname) {update.nickname = this.nickname}
            if (old.password != this.password) {update.password = this.password}
            if (old.details != this.details) {update.details = this.details}
            if (old.friends != this.friends) {update.friends = this.friends}
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
        this.import(await cursor.db("CityHeroes").collection("events").findOne({id}))
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
            var col = await cursor.db("CityHeroes").collection("events")
            var old = await col.findOne({"id":this.id})
            var update = {}
            if (old.name != this.name) {update.name = this.name}
            if (old.date != this.date) {update.date = this.date}
            return await col.updateOne({"id":this.id}, {"$set":update})
        })(cursor)
    }
}

module.exports = {
    User,
    Event
}
