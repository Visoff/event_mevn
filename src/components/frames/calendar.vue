<template>
    <div class="calendar">
        <div v-for="row in calendar" :key="row">
            <div v-for="el in row" :key="el">{{ el }}</div>
        </div>
    </div>
</template>

<script>
export default {
    "name":"calendar-comp",
    data() {
        var calendar = []
<<<<<<< HEAD

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
=======
        var cursor = new Date(); cursor.setDate(1)
        var month = cursor.getMonth()
        while (cursor.getDay() != 1) {
            cursor.setDate(cursor.getDate()-1)
        }
        var x = 0
        var y = 0
        while (cursor.getMonth() == month) {
            if (calendar[x] == undefined) {calendar[x] = []}
            y = 0
            while (cursor.getDay() != 1) {
                calendar[x][y] = cursor.getDate()
                y++
            }
            x++
>>>>>>> 87103525a1cf32ca84fc7f2fa63b4c494b97c91d
        }
        return {
            calendar
        }
    }
}
</script>