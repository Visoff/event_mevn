<template>
    <div class="schedule_event">
        <div class="name">{{ name }}</div>
        <div class="time">{{ time }}</div>
    </div>
</template>

<script>
export default {
    name:"schedule_event",
    props:["name", "time"]
}
</script>

<style>
div.schedule_event {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: fit-content;
    width: 100%;
    outline: 1px solid red;
}

div.schedule_event > div.name {
    font-size: 1.25rem;
}
div.schedule_event > div.time {
    font-size: 0.75rem;
}
</style>