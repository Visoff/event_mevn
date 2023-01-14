<template>
    <div class="calendar_parent">
        <calendar />
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
.calendar_parent {
    width: calc(100% - 3rem);
    aspect-ratio: 1;
    padding: .5rem;
    margin: 1rem;

    background-color: #ffffff40;
    border-radius: 1rem;
}
</style>