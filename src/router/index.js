/**
 * router/index.ts
 *
 * Automatic routes for `./src/pages/*.vue`
 */

// Composables
import { createRouter, createWebHistory } from 'vue-router'
import DashboardView from '@/pages/Dashboard.vue'
import PageView from '@/pages/Page.vue'
import AdminView from '@/pages/Admin.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
  	{
	  	path: '/dashboard',
	  	name: 'dashboard',
	  	component: DashboardView
  	},
  	{
	 	path: '/page' ,
	 	name: 'page',
	 	component: PageView,
	 	props: route => ({ id: route.query.id })
	},
	{
	 	path: '/admin' ,
	 	name: 'admin',
	 	component: AdminView,
	 	props: route => ({ admin_key: route.query.admin_key })
	}
  ],
  scrollBehavior() {
	return {top:0};
  }
})

router.beforeEach((to, from, next) => {
	const allowedRoutes = ['dashboard', 'page', 'admin'];
	
	if (!allowedRoutes.includes(to.name)) {
		return next({name: 'dashboard'});
	}
	
	return next()	
})	
	

export default router
