<template lang="en">
    <main>
        <ol class="board">
            <li class="board-item" v-for="(item, index) in this.news" :key="index">
                <div class="title">
                    <strong class="order">{{item.points}}.</strong>
                    <h2>{{ item.title }}</h2>
                </div>
                <div class="post">
                    <span>by </span>
                    <span class="writer">{{ item.user }}</span>
                    <span class="posted">{{ time_ago }}</span>
                </div>
            </li>
        </ol>
    </main>
</template>
<script>
import axios from 'axios';
export default {
    data() {
        return {
            news : []
        }
    },
    created() {
        axios.get('https://api.hnpwa.com/v0/news/1.json')
        .then(response =>{
            this.news = response.data;
        })
        .catch(erorr=>{
            console.log(`ERROR :: [${erorr}]`);
        });
    },
};
</script>
<style scope>
</style>