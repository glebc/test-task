<template>
	<div id="app">
		<form @submit.prevent="search">
			<input v-model="searchQuery" required>
			<button type="submit">search</button>
		</form>

		<router-view />
	</div>
</template>

<script>
export default {
	data () {
		return {
			searchQuery: this.$route.query.search || ''
		}
	},
	methods: {
		search () {
			this.$router.push({ name: 'list', query: { search: this.searchQuery } });
		}
	}
}
</script>
