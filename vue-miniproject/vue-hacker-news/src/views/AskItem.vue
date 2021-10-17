<template lang="en">
<div>
    <hacker-ask-item></hacker-ask-item>
    <hacker-ask-comments></hacker-ask-comments>
</div>
</template>
<script>
import HackerAskItem from '../components/HackerAskItem.vue';
import HackerAskComments from '../components/HackerAskComments.vue';
export default {
    components : {
        HackerAskItem,
        HackerAskComments
    },
    created() {
        this.$store.dispatch('ask/requestAskDeatil', this.$route.params.id);
    }
}
</script>
<style>
    
</style>