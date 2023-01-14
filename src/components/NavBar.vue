<template>
    <div class="NavBar">
        <nav>
            <NavButton v-for="(el, i) in frames" :key="el" :setActiveFrame="setActiveFrame" :id="i" :name="el.name" :active="i == activeFrame" :icon="el.icon" />
        </nav>
        <div class="placeholder"></div>
    </div>
</template>

<script>
import NavButton from './NavButton.vue'

export default {
    props:["frames", "activeFrame", "setActiveFrame"],
    components:{
        NavButton
    },
    data() {
        return {
            list:[1, 2, 3, 4, 5]
        }
    }
}
</script>

<style>
.NavBar .placeholder {
    display: block;
    width: 100%;
    height: 3.75rem;
}
.NavBar nav {
    position: fixed;
    bottom: 0;
    left: 0;

    width: 100%;
    height: 3.75rem;

    display: grid;
    grid-auto-flow: column;
    align-items: center;
    justify-content: space-evenly;

    background-color: #311D83;
}
</style>