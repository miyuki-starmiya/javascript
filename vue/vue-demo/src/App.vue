<template>
    <div>
        <LikeHeader></LikeHeader>
        <p>トウカイテイオー無敗でクラシック制覇への軌跡</p>
        <p>今日の一番ウマ娘</p>
        <h3>{{horse}}</h3>
        <LikeNumber v-bind:horse="horse"></LikeNumber>
        <LikeNumber horse="メジロマックイーン"></LikeNumber>
    </div>
</template>

<script>
import LikeHeader from "./components/LikeHeader.vue"

export default {
    data() {
        return {
            horse: 'ゴールドシップ'
        }
    },
    components: {
        LikeHeader: LikeHeader
    }
}
</script>

<!-- カプセル化されているからよりローカルの方が優先される -->
<style>
    h1 {
        border-bottom: 2px solid red;
    }
</style>
