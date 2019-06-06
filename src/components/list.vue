<template>
	<v-card v-if="list.length">
		<v-list
			v-for="item in list"
			:key="item.show.id"
		>
			<v-container d-flex row>
				<router-link :to="{ name: 'item', params: { id: item.show.id } }">
					<v-card width="220px">
						{{ item.show.name }}
						<v-img
							:src="item.show.image && item.show.image.original || staticImgUrl"
							contain
						></v-img>
					</v-card>
				</router-link>
				<v-card-text>
					<div
						class="text-xs-left"
						v-html="item.show.summary"
					></div>
				</v-card-text>
			</v-container>
		</v-list>
	</v-card>
</template>

<script>
import axios from 'axios';

export default {
	data () {
		return {
			list: []
		};
	},
	computed: {
		staticImgUrl () {
			return 'https://static.tvmaze.com/images/no-img/no-img-portrait-text.png';
		}
	},
	watch: {
		$route: {
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
			}).then(({ data }) => this.list = data);
		}
	}
}
</script>
