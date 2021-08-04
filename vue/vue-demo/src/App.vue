<template>
    <div>
        <nav>
            <ul>
                <li><router-link to="/">Home</router-link></li>
                <li><router-link to="/users">Users</router-link></li>
                <li><router-link to="/uma">Uma</router-link></li>
            </ul>
        </nav>
        <router-view></router-view>
    </div>
</template>

<script>
</script>

<!-- カプセル化されているからよりローカルの方が優先される -->
<style>
</style>
