<template>
    <header>
        <h2 class="py-8 h-16 bg-red-600 text-white text-center text-2xl">FIFA World Cup Asian qualifiers</h2>
    </header>
    <nav>
        <ul class="py-4ß h-8 bg-red-600 text-white">
            <li>
                <router-link to="/stand">Standing Table</router-link>
            </li>
            <li>
                <router-link to="/team">Team</router-link>
            </li>
        </ul>
    </nav>
</template>

<script>
export default {};
</script>

<style scoped>
nav > ul {
    display: flex;
    justify-content: space-around;
}

nav .router-link-active {
    border-bottom: 2px solid #fff;
    font-weight: 700;
}
</style>
