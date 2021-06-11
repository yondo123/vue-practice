<template lang="en">
    <section class="comments" v-if="this.askDetail">
        <ul>
            <hacker-ask-comments-child :node="askDetail" :depth="0"></hacker-ask-comments-child>
        </ul>
    </section>
</template>
<script>
import HackerAskCommentsChild from '../components/HackerAskCommentsChild.vue';
import { mapGetters } from 'vuex';
export default {
    components : {
        HackerAskCommentsChild
    },
    computed : {
        ...mapGetters('ask', {askDetail : 'getAskDetail'})
    }
}
</script>
<style>
.comments {
    font-size: 1.2rem;
    border-top: 1px solid var(--font-accent-color);
    background-color: var(--board-color);
    margin : 0 10rem;
}

.comment-info dd {
    margin-left: 0;
}

.info dd {
    position: relative;
}

.info dd, .comments a {
    color : var(--font-accent-color);
}

.content dd {
    padding-top: 0.4rem;
    color : var(--font-normal-color);
}

.comment-info dt {
    display: none;
}

.tree-button button{
    position: absolute;
    left: 10%;
    top: 0;
    background-color: var(--board-color);
    border: none;
    cursor: pointer;
    padding: 0;
}
</style>