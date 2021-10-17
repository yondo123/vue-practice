<template>
        <header v-bind:class="{popup : popupFlag}">
            <a href="#">
                <i class="fas fa-4x fa-envelope"></i>
                <h1>Welcome to VUE-POST BOX.</h1>
                <strong>write your message.</strong>
            </a>
            <button type="button" @click="togglePopup">Write</button>
        </header>
</template>

<script>
export default {
    data() {
        return {
            popup : true,
        }
    },
    props: ["popupFlag"],
    methods:{
        togglePopup(){
            this.$emit('popStatus');
        }
    }
}
</script>

<style>
</style>