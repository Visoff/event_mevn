<template>
    <div class="month_name">
        <div>
            {{ new Date().toLocaleString("ru", {month:"long"}) }}
        </div>
        <div>
            <div class="prev">\</div>
            <div class="next">/</div>
        </div>
    </div>
    <div class="calendar">
        <div class="row">
            <div class="ele">Пн</div>
            <div class="ele">Вт</div>
            <div class="ele">Ср</div>
            <div class="ele">Чт</div>
            <div class="ele">Пт</div>
            <div class="ele hol">Сб</div>
            <div class="ele hol">Вс</div>
        </div>
        <div v-for="row in calendar" :key="row" class="row">
            <div v-for="el in row" :key="el" :class="(() => {var a = ''; if (el.current) {a+=' current'}; return 'el'+a})()">{{ el.date }}</div>
        </div>
    </div>
</template>

<script>
export default {
    "name":"calendar-comp",
    data() {
        var calendar = []

        var cursor = new Date()
        var month = cursor.getMonth()
        cursor.setMonth(cursor.getMonth()+1)
        cursor.setDate(0)
        while (cursor.getDay() != 0) {cursor.setDate(cursor.getDate()+1)}
        var end = cursor

        cursor = new Date()
        cursor.setDate(1)
        while (cursor.getDay() != 1) {cursor.setDate(cursor.getDate()-1)}

        for (var i = 0; cursor <= end; i++) {
            if (i%7 == 0) {calendar.push([])}
            calendar[calendar.length-1].push({date:cursor.getDate(), current:cursor.getMonth()==month})
            cursor.setDate(cursor.getDate()+1)
        }
        return {
            calendar
        }
    }
}
</script>

<style>
div.month_name {
    padding: 0 .5rem;
    display: flex;
    flex-direction: row;
    width: calc(100% - 1rem);
    align-items: center;
    justify-content: space-between;
    gap: 1.5rem;
    font-size: 1.25rem;
}

div.month_name > div:last-child {
    display: flex;
    flex-direction: row;
    gap: .25rem;
}

div.calendar {
    height: 100%;
    width: 100%;
    display: grid;
    grid-auto-flow: row;
    place-items: center;
}

div.row {
    width: 100%;
    display: grid;
    grid-auto-flow: column;
    place-items: center;
}

div.ele.hol {color: red;}
div.el, div.ele {
    display: grid;
    place-items: center;
}

div.el:not(.current) {
    color: #BFBFBF;
}
</style>