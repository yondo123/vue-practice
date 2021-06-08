<template lang="en">
    <main>
        <ol class="board">
            <li class="board-item" v-for="(item, index) in this.asks" :key="index">
                <div class="title">
                    <strong class="order">{{index + 1}}.</strong>
                    <h2>{{ item.title }}</h2>
                </div>
                <div class="post">
                    <span>{{item.points}} points by </span>
                    <span class="writer">{{ item.user }}</span>
                    <span class="posted">{{ item.time_ago }}</span>
                </div>
            </li>
        </ol>
    </main>
</template>
<script>
import { getAsk } from '../api/request.js'
export default {
    data() {
        return {
            asks : []    
        }
    },
    created() {
        getAsk()
            .then(response =>{
                this.asks = response.data;
            })
            .catch(error => {
                console.log(`ERROR :: [${error}]`);
            });
    }
}
</script>
<style>
</style>