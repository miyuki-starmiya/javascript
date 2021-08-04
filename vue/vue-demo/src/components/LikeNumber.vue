<template>
	<div>
		<p>いいね({{ horse }})</p>
		<p>いいね({{ halfNumber }})</p>
		<p>Total number is {{ number }}</p>
		<button @click="increment">+1</button>
	</div>
</template>

<script>
export default {
	// 配列かハッシュで指定
	props: {
		horse: {
			type: String,
			default: "トウカイテイオー",
		},
		number: {
			type: Number,
			default: 10,
		}
	},
	computed: {
		halfNumber() {
			return this.number / 2
		}
	},
	methods: {
    increment() {
			// custom eventの作成
			this.$emit("my-click", this.number + 1);
		}
	},
}

</script>

<style>

</style>
