<template>
    <div class="day_schedule">
        <schedule_event name="Открытие" time="10:00-11:00" />
        <schedule_event name="Открытие" time="10:00-11:00" />
        <schedule_event name="Открытие" time="10:00-11:00" />
        <schedule_event name="Открытие" time="10:00-11:00" />
        <schedule_event name="Открытие" time="10:00-11:00" />
    </div>
</template>

<script>
import schedule_event from './schedule_event.vue';

export default {
    name:"day_schedule",
    components:{schedule_event}
}
</script>