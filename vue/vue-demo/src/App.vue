<template>
    <div id="app">
        <nav>
            <ul>
                <li><router-link to="/">Home</router-link></li>
                <li><router-link to="/users">Users</router-link></li>
                <li><router-link to="/uma">Uma</router-link></li>
                <li><router-link to="/board">Board</router-link></li>
            </ul>
        </nav>
        <router-view></router-view>
    </div>
</template>

<script>
</script>

<!-- カプセル化されているからよりローカルの方が優先される -->
<style>
#app {
    text-align: center;
}
</style>
