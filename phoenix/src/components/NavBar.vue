<template>
    <div class="nav">
        <h1>Phoenix</h1>
        <ul>
        <li>
            <router-link to="/">Home</router-link>
        </li>
        <li>
            <router-link to="/about">About</router-link>
        </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'NavBar'
}
</script>

<style scoped>
.nav {
    background-color: #1A4589;
    border-bottom: 1px solid #eee;
    height: 40px;
    line-height: 40px;
    padding: 0 20px;
}
</style>