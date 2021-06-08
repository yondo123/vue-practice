<template lang="en">
    <main>
        <ol class="board">
            <li class="board-item" v-for="(item, index) in this.jobs" :key="index">
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
import {getJobs} from '../api/request.js'
export default {
    data() {
        return {
            jobs : []
        }
    },
    created() {
        getJobs()
            .then(response => {
                this.jobs = response.data;
            })
            .catch(error => {
                console.log(`ERROR :: [${error}]`);
            });
    },
}
</script>
<style scoped>
.post {
    padding : 0rem 0.8rem;
}
</style>