import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';

// components
import list from './components/list';
import item from './components/item';

Vue.config.productionTip = false;

Vue.use(Vuetify);
Vue.use(VueRouter);

let router = new VueRouter({
	mode: 'history',
	routes: [
		{
			path: '/list',
			name: 'list',
			component: list
		},
		{
			path: '/list/:id(\\d+)',
			name: 'item',
			component: item
		}
	]
});

new Vue({
	router,
	render: h => h(App),
}).$mount('#app')
