<template>
    <div class="schedule">
        <div class="calendar_parent">
            <calendar />
        </div>
    </div>
</template>

<script>
import calendar from './calendar.vue';

export default {
    components:{
        calendar
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

.calendar_parent {
    width: calc(100% - 3rem);
    aspect-ratio: 1;
    padding: .5rem;
    margin: 1rem;

    background-color: #ffffff40;
    border-radius: 1rem;
}
</style>