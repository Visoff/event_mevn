<template>
    <div class="news">
        <div v-for="post in posts" :key="post"><div class="icon"></div>{{ post }}</div>
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
}

div.news > div {
    position: relative;
    margin: 1rem;
    margin-left: 2.5rem;
    margin-bottom: 2.5rem;
    padding: 0.25rem;
    background-color: #ffffff40;
    padding-bottom: 1.75rem;
}

div.news > div::before {
    content: "";
    position: absolute;
    bottom: -1.5rem;
    left: -1.5rem;
    width: 3rem;
    aspect-ratio: 1;
    background-color: #00000040;
    border-radius: 50%;
}

div.news > div > div.icon {
    position: absolute;
    bottom: -1.5rem;
    left: -1.5rem;
    width: 3rem;
    aspect-ratio: 1;
    background-image: url("https://visoff.ru/assets/svg/CityHeroes_Icon.svg");
    background-position: 0;
    background-size: 100%;
}
</style>