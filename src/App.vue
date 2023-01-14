<template>
    <div class="main">
        <frame_father :activeFrame="activeFrame" />
    </div>
    <NavBar v-if="show_navigation" :frames="frames" :activeFrame="activeFrame" :setActiveFrame="setActiveFrame" />
</template>

<script>
const axios = require("axios")
axios.get("https://visoff.ru/api/")

import NavBar from './components/NavBar.vue'
import frame_father from './components/frames/frame_father.vue'

export default {
  name: 'App',
  components: {
    frame_father,
    NavBar,
},
data() {
    return {
        show_navigation:true,
        frames:[
            {
                name:"Лента",
                icon:"https://visoff.ru/ecosystem/svg/arrow.svg"
            },
            {
                name:"Чаты",
                icon:"https://visoff.ru/ecosystem/svg/arrow.svg"
            },
            {
                name:"Qr",
                icon:"https://visoff.ru/ecosystem/svg/arrow.svg"
            },
            {
                name:"Расписание",
                icon:"https://visoff.ru/ecosystem/svg/arrow.svg"
            },
            {
                name:"Провиль",
                icon:"https://visoff.ru/ecosystem/svg/arrow.svg"
            }
        ],
        activeFrame:3,
        user_id:null
    }
},
mounted() {
    console.log(localStorage)
    if (localStorage.CityHeroes_user_id) {this.user_id = localStorage.CityHeroes_user_id}
},
methods:{
    setActiveFrame(x) {
        this.activeFrame = x
    }
}
}
</script>

<style>
#app {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    overflow: auto;
    display: flex;
}

div.main {
    height: calc(100vh - 3.75rem);
    width: 100vw;
    position: relative;
    top: 0;
    left: 0;
}
</style>
