<template>
    <div style="width: calc(100% - 2rem); height: calc(100% - 2rem); padding: 1rem;">
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