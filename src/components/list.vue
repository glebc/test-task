<template>
	<div id="list">
		<div
			v-for="item in list"
			:key="item.show.id"
		>
			<router-link :to="{ name: 'item', params: { id: item.show.id } }">
				{{ item.show.name }}
			</router-link>
		</div>

	</div>
</template>

<script>
import axios from 'axios';

export default {
	name: 'list',
	data () {
		return {
			list: []
		};
	},
	watch: {
		'$route': {
			handler () {
				this.getList();
			},
			immediate: true
		}
	},
	methods: {
		getList () {
			axios.get('http://api.tvmaze.com/search/shows', {
				params: {
					q: this.$route.query.search || ''
				}
			})
					.then(({ data }) => this.list = data);
		}
	}
}
</script>

<style scoped lang="scss">
</style>
