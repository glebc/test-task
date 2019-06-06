<template>
	<v-content>
		<v-card
			v-if="item"
			class="mx-auto elevation-20"
			color="purple"
			dark
			style="max-width: 600px;"
		>
			<v-layout column>
				<v-card>
					<v-card-text class="purple darken-2">
						<a :href="item.officialSite" class="headline font-italic">{{ item.name }}</a>
						<div>{{ item.language }}</div>
						<div
							v-for="genre in item.genres"
							:key="genre"
							class="caption font-weight-thin font-italic"
						>
							{{ genre }}
						</div>
						<v-chip outline color="primary">
							{{ statuses[item.status] }}
						</v-chip>
					</v-card-text>
				</v-card>
				<v-img
					:src="item.image && item.image.original || staticImgUrl"
					class="shrink ma-2"
					contain
					height="250px"
					style="flex-basis: 250px"
				></v-img>
				<v-card-text class="text-xs-left" v-html="item.summary"></v-card-text>
			</v-layout>
			<v-divider dark></v-divider>
			<v-card-actions v-if="item.rating">
				<v-layout
					justify-center
					column
				>
					<span
						v-if="item.rating.average"
						class="grey--text text--lighten-2 title"
					>
						({{ item.rating.average }})
					</span>
					<v-rating
						v-model="item.rating.average"
						background-color="orange lighten-3"
						color="orange"
						length="10"
						readonly
						empty-icon="$vuetify.icons.ratingEmpty"
						half-increments
					></v-rating>
				</v-layout>
			</v-card-actions>
		</v-card>
		<v-layout row>
			<v-btn @click="$router.back()">back</v-btn>
		</v-layout>
	</v-content>
</template>

<script>
	import axios from 'axios';
	import statuses from './statuses.js';

	export default {
		data () {
			return {
				item: {},
				statuses
			}
		},
		computed: {
			staticImgUrl () {
				return 'https://static.tvmaze.com/images/no-img/no-img-portrait-text.png';
			}
		},
		watch: {
			$route: {
				handler () {
					this.getItem();
				},
				immediate: true
			}
		},
		methods: {
			getItem () {
				axios
					.get(`http://api.tvmaze.com/shows/${this.$route.params.id || ''}`)
					.then(({ data }) => this.item = data);
			}
		}
	}
</script>
