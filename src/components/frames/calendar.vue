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
        }
        return {
            calendar
        }
    }
}
</script>