<template>
        <main v-bind:class="{popup : this.$store.state.popupFlag}">
            <h2 class="hide">Recent POST</h2>
            <ol class="list">
                <li class="post-list" v-for="(item) in this.$store.state.boardList" :key="item.id">
                    <details>
                        <summary>{{item.message}}</summary>
                        <p>{{item.message}}</p>
                    </details>
                    <div class="post-info">
                        <p><span class="author">{{item.id}}</span> | <span class="date">{{formatDate(item.date)}}</span></p>
                    </div>
                </li>
            </ol>
        </main>
</template>

<script>
export default {
    data() {
    },
    methods: {
        formatDate(date){
            return `${date.substr(0,4)}.${date.substr(4,2)}.${date.substr(6,2)}`;
        }
    }
}
</script>

<style>

</style>