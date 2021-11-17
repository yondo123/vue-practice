<template>
        <header v-bind:class="{popup : this.$store.state.popupFlag}">
            <a href="#">
                <i class="fas fa-4x fa-envelope"></i>
                <h1>Welcome to VUE-POST BOX.</h1>
                <strong>write your message.</strong>
            </a>
            <button type="button" @click="togglePopup">Write</button>
        </header>
</template>

<script>
import {mapMutations} from 'vuex'
export default {
    methods:{
        ...mapMutations({
            togglePopup : 'onPopup'
        })
    }
}
</script>

<style>
</style>