<template>
    <div class="frameFrather">
        <news v-if="activeFrame == 0" />
        <schedule v-if="activeFrame == 1" />
        <profile v-if="activeFrame == 2" />
    </div>
</template>

<script>
import news from "./news.vue"
import chats from "./chats.vue"
import schedule from "./schedule.vue"
import profile from "./profile.vue"

export default {
    props:["activeFrame"],
    components:{
        news,
        chats,
        schedule,
        profile
    }
}
</script>

<style>
div.frameFrather {
    position: static;
    width: 100%;
    height: 100%;
    background-color: #7180B9;
    z-index: 1000;
}
</style>