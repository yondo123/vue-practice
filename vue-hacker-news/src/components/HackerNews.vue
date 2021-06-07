<template lang="en">
    <main>
        <ol class="board">
            <li class="board-item">
                <div class="title">
                    <strong class="order">1.</strong>
                    <h2>A New Future For Icanzip</h2>
                </div>
                <div class="post">
                    <span>by </span>
                    <span class="writer">yondo123</span>
                    <span class="posted">6 hours ago</span>
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
            this.news = response;
        })
        .catch(()=>{

        });
    },
};
</script>
<style scope>
</style>