<template>
    <div style="width: 100%; height: 100%; padding: 1rem;">
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