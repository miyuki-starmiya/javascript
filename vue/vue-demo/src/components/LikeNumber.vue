<template>
	<div>
		<p>いいね({{horse}})</p>
		<p>いいね({{halfNumber}})</p>
		<button @click="increment">+1</button>
	</div>
</template>

<script>
export default {
	data: function() {
		return {
			number: 12,
		}
	},
	props: ['horse'],
	computed: {
		halfNumber() {
			return this.number / 2
		}
	},
	methods: {
    increment() {
			this.number += 1
		}
	}
}

</script>

<style>

</style>
