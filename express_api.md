# Path
```
https://visoff.ru/api/...
```
all requests are json post requests
# Database manipulation
## path
```
.../db/
```
## user
### getBy

#### **id**
```
id(id: int): User
```
returns user object by id provided

#### **emailPass**
```
none
```
returns user object by email and password provided

### addTo

#### **event**
```
event(user: int, event: id): Event || "user was already in this event"
```
adds user(by id) to event

#### **team**
```
team(user: int, team: id): Team || "user was already in this event"
```
adds user(by id) to team

### get

#### **teams**
```
teams(id: int): Team[]
```
sends list of teams this users is in

#### **events**
```
events(id: int): Event[]
```
sends list of events this users is in



## schedule

### get

#### **ByEventId**
```
ByEventId(id: int): Schedule[]
```
returns array of schedule elements by event id

#### **ByDate**
```
ByDate(date: Date): Schedule[]
```
returns array of schedule elements by date(time doesn't matter)

#### **ByDateTime**
```
ByDateTime(date: Date): Schedule[]
```
returns array of schedule elements by date(time matters)