<template>
	<div id="search">
		<input v-model="searchQuery">
		<button @click="search">search</button>
	</div>
</template>

<script>

export default {
	name: 'search',
	data() {
		return {
			searchQuery: ''
		}
	},
	methods: {
		search () {
			this.$store.dispatch('searchShow', this.searchQuery);
			this.$router.push({name: 'list'});
		}
	}
}
</script>

<style scoped lang="scss">
</style>
