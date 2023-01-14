<template>
    <div class="calendar">
        <div v-for="row in calendar" :key="row" class="row">
            <div v-for="el in row" :key="el" class="el">{{ el }}</div>
        </div>
    </div>
</template>

<script>
export default {
    "name":"calendar-comp",
    data() {
        var calendar = []

        var cursor = new Date()
        cursor.setMonth(cursor.getMonth()+1)
        cursor.setDate(0)
        while (cursor.getDay() != 0) {cursor.setDate(cursor.getDate()+1)}
        var end = cursor

        cursor = new Date()
        cursor.setDate(1)
        while (cursor.getDay() != 1) {cursor.setDate(cursor.getDate()-1)}

        for (var i = 0; cursor <= end; i++) {
            if (i%7 == 0) {calendar.push([])}
            calendar[calendar.length-1].push(cursor.getDate())
            cursor.setDate(cursor.getDate()+1)
        }
        return {
            calendar
        }
    }
}
</script>

<style>
div.calendar {
    display: grid;
    grid-auto-flow: row;
    --gap: 1rem;
    gap: var(--gap);
}

div.row {
    display: grid;
    grid-auto-flow: column;
    gap: var(--gap);
}

div.el {
    display: grid;
    place-items: center;
}
</style>