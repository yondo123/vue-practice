<template lang="en">
    <main class="question" v-if="askDetail">
        <h1 class="question-title">{{ askDetail.title }}</h1>
        <div class="question-history">{{ askDetail.points }} points by <router-link v-bind:to="`/user/${askDetail.user}`">{{askDetail.user}}</router-link></div>
        <div class="question-content" v-html="askDetail.content"></div>
    </main>
</template>
<script>
import { mapGetters } from 'vuex';
export default {
    computed : {
        ...mapGetters('ask', {askDetail : 'getAskDetail'})
    }
}
</script>
<style>
.question {
    text-decoration: none;
    color: var(--font-normal-color);
    padding: 0.5rem 1rem;
}

.question-history, .question-content {
    font-size: 1.2rem;
}

.question-title {
    font-size: 1.2rem;
    font-weight: 600;
}

.question-history {
    font-size: 1.1rem;
}

.question-content {
    padding : 1rem 0;
}
</style>