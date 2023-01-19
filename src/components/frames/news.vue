<template>
    <div class="news">
        <div v-for="post in posts" :key="post">{{ post }}</div>
    </div>
</template>

<script>
//const axios = require("axios")
export default {
    name:"news-page",
    data() {
        return {
            posts:["hello", "it is I"]
        }
    },
    mounted() {
        /*axios.get("https://visoff.ru:8080/api/db/select/posts").then(response => {
            this.posts = response.data
        })*/
    }
}
</script>

<style>

</style>