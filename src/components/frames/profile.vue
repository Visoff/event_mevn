<template>
    <div class="profile-page">
        <div class="upper">
            <icon></icon>
            <div class="name">{{ user.name }}</div>
        </div>
        <div class="details">
            По образованию: лох
        </div>
        <div class="quick-interactions">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    </div>
</template>

<script>
const axios = require("axios")

export default {
    name:"profile-page",
    data() {
        return {
            user:{
                icon:undefined,
                name:"Викештий"
            }
        }
    },
    mounted() {
        axios.get("https://visoff.ru/api/db/select/user/").then(response => {
            //this.user = response.data[0]
            console.log(response.data)
        })
    }
}
</script>

<style>
    .profile-page {
        width: 100%;
        height: 100%;
    }

    div.upper {
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 0 .25rem;
        gap: .5rem;
    }
    
    div.upper > icon {
        display: block;
        background-color: #2E1760;
        width: 7.94rem;
        aspect-ratio: 1;
        border-radius: 50%;
    }

    div.upper > div.name {
        font-size: 1.25rem;
        color: whitesmoke;
    }

    div.details {
        margin-top: 1rem;
        background-color: #ffffff40;
        border-radius: 1rem;
        padding: 1rem;
    }

    div.quick-interactions {
        margin-top: 1rem;
        display: grid;
        grid-auto-flow: column;
        place-items: center;
    }
    
    div.quick-interactions > div {
        width: 4rem;
        aspect-ratio: 1;
        border-radius: 1rem;
        background-color: #ffffff40;
    }
</style>