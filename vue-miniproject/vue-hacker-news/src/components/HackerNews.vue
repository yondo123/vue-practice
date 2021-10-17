<template lang="en">
    <main>
        <ol class="board">
            <li class="board-item" v-for="(item, index) in this.newsList" :key="index">
                <div class="title">
                    <strong class="order">{{item.points}}.</strong>
                    <h2>{{ item.title }}</h2>
                </div>
                <div class="post">
                    <span>by </span>
                    <router-link v-bind:to="`/user/${item.user}`">
                        <span class="writer">{{ item.user }}</span>
                        <span class="posted"> {{ item.time_ago }}</span>
                    </router-link>
                </div>
            </li>
        </ol>
    </main>
</template>
<script>
import { mapGetters } from 'vuex';
export default {
  computed : {
    ...mapGetters('news', { newsList : 'getNewsList'})
  },
  created() {
      this.$store.dispatch('news/requestNewsList');
  }
};
</script>
<style scope>
</style>