<template lang="en">
    <main>
        <ol class="board">
            <li class="board-item" v-for="(item, index) in this.jobList" :key="index">
                <div class="title">
                    <h2>{{ item.title }}</h2>
                </div>
                <div class="post">
                    <span>by {{item.domain}} </span>
                    <span class="posted">{{ item.time_ago }}</span>
                </div>
            </li>
        </ol>
    </main>
</template>
<script>
import { mapGetters } from 'vuex';
export default {
    computed : {
        ...mapGetters('job', {jobList : 'getJobList'})
    },
    created() {
        this.$store.dispatch('job/requestJobList');
    },
}
</script>
<style scoped>
.post {
    padding : 0rem 0.8rem;
}
</style>