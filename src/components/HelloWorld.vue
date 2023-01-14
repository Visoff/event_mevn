<template>
    <div class="message">
        <p>{{ text }}</p>
    </div>
</template>

<script>
    export default {
        props:["text"],
        data() {
            return {
            }
        }
    }
</script>

<style>
    .message {
        color: red;
    }
</style>
