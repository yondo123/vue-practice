<template lang="en">
    <main>
        <dl class="detail" v-if="userInfo">
            <div>
                <dt>user&#58;</dt>
                <dl>{{userInfo.id}}</dl>
            </div>
            <div>
                <dt>created&#58;</dt>
                <dl class="created">{{userInfo.created}}</dl>
            </div>
            <div>
                <dt>likes&#58;</dt>
                <dl>{{userInfo.karma}}</dl>
            </div>
        </dl>
    </main>
</template>
<script>
import { mapGetters } from 'vuex';
export default {
    computed : {
        ...mapGetters('user', {userInfo : 'getUserInfo'})
    },
    created() {
        this.$store.dispatch('user/requestUserInfo', this.$route.params.id);
    }
}
</script>
<style>
.detail {
    color: var(--font-normal-color);
    font-weight: 500;
    font-size: 1.3rem;
}

.detail div{
    display: flex;
    line-height: 2rem;
}

.detail dt {
    padding : 0 0.5rem;
}

.detail dl {
    display: inline-block;
    width: auto;
    text-align: left;
    margin : 0;
}

.created {
    color : var(--font-accent-color);
    font-weight: 700;
}
</style>