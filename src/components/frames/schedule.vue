<template>
    <div style="width: calc(100% - 2rem); aspect-ratio: 1; padding: 1rem;">
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