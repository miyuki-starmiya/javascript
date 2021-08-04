<template>
    <div>
        <h1>Home</h1>
        <button @click="toUmamusume">ウマ娘ページ</button>
    </div>
</template>

<script>
export default ({
    methods: {
        toUmamusume() {
            this.$router.push('uma');
        }
    },
})
</script>


