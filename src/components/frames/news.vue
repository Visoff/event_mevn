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
div.news {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: red;
}
</style>