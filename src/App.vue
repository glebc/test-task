<template>
	<div id="app">
		<v-app>
			<v-container
				:fill-height="$route.path === '/'"
				align-center
				justify-center
				text-xs-center
				column
			>
				<v-form
					ref="form"
					@submit.prevent="search"
				>
					<v-text-field
						v-model="searchQuery"
						:rules="searchRules"
						required
					></v-text-field>
					<v-btn type="submit">search</v-btn>
				</v-form>
				<router-view />
			</v-container>
		</v-app>
	</div>
</template>

<script>
export default {
	data () {
		return {
			searchQuery: this.$route.query.search || '',
			searchRules: [
				v => !!v || 'Please type something'
			]
		}
	},
	methods: {
		search () {
			this.$refs.form.validate();
			this.$router.push({ name: 'list', query: { search: this.searchQuery } });
		}
	}
}
</script>
