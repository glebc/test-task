import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';

// components
import list from './components/list';
import item from './components/item';

Vue.config.productionTip = false;

Vue.use(VueRouter);

let router = new VueRouter({
	mode: 'history',
	routes: [
		{
			path: '/list',
			name: 'list',
			component: list,
			props: (route) => ({ query: route.query.q })
		},
		{
			path: '/list/:id(\\d+)',
			name: 'item',
			component: item
		}
	],
	scrollBehavior () {
		return new Promise(resolve => {
			setTimeout(() => {
				resolve({ x: 0, y: 0 });
			}, 0);
		});
	}
});

new Vue({
	router,
	render: h => h(App),
}).$mount('#app')
