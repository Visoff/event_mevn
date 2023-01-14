<template>
    <div class="schedule">
        <div class="calendar_parent">
            <calendar />
        </div>
        <div class="day_schedule_parent">
            <day_schedule />
        </div>
    </div>
</template>

<script>
import calendar from './calendar.vue';
import day_schedule from './day_schedule.vue';

export default {
    components:{
        calendar,
        day_schedule
    },
    name:"schedule-page"
}
</script>

<style>
.schedule {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.calendar_parent, .day_schedule_parent {
    width: calc(100% - 3rem);
    aspect-ratio: 1;
    padding: .5rem;
    margin: 1rem;

    background-color: #ffffff40;
    border-radius: 1rem;
}

div.day_schedule_parent {
    background-color: #00000040;
    aspect-ratio: unset;
    height: fit-content;
    max-height: calc(100% - 100vw - 2.25rem);
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    overflow-y: scroll;
}
</style>