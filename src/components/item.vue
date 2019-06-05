<template>
	<div>
		<button @click="$router.back()">back</button>
		{{ item }}
	</div>
</template>

<script>
	import axios from 'axios';

	export default {
		data () {
			return {
				item: null
			}
		},
		watch: {
			'$route': {
				handler () {
					this.getItem();
				},
				immediate: true
			}
		},
		methods: {
			getItem () {
				axios.get(`http://api.tvmaze.com/shows/${this.$route.params.id || ''}`)
						.then(({ data }) => this.item = data);
			}
		}
	}
</script>

<style scoped>

</style>
