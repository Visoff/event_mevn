<template>
    <div class="NavButton" @click="click">
        <img v-if="false" :src="icon" :class="{active: active}">
        <div>{{ name }}</div>
    </div>
</template>

<script>
export default {
    props:["icon", "name", "active", "id", "setActiveFrame"],
    data() {
        return {
        }
    },
    methods:{
        click() {
            this.setActiveFrame(this.id)
        }
    }
}
</script>

<style>
.NavButton {
    width: 2.5rem;
    height: 100%;
    position: relative;
}

.NavButton img {
    position: absolute;
    top: .15rem;

    background-color: #ffffff40;
    border-radius: 50%;

    height: 2.5rem;
    aspect-ratio: 1;
}

.NavButton img.active {
    background-color: #ffffff80;
    outline: solid .1rem #00000080;
}

.NavButton div {
    position: absolute;
    bottom: .15rem;

    left: 50%;
    transform: translate(-50%, 0);
    font-size: .75rem;

    color: #ffffff;
}
</style>