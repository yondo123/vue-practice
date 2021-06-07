<template lang="en">
    <header>
        <a href="/" class="app-logo">
            <h1>Hacker News</h1>
        </a>
        <nav class="menu">
            <router-link to="news">News</router-link>
            <router-link to="ask">Ask</router-link>
            <router-link to="job">Jobs</router-link>
        </nav>
    </header>
</template>
<script>
export default {};
</script>
<style scoped>
.menu .router-link-exact-active {
  color: #fff;
  font-weight: 700;
}
</style>