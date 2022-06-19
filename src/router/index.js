import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Login from '../views/auth/Login.vue';
import Signup from '../views/auth/Signup.vue';
import Playlists from '../views/collection/playlists.vue';
import CreatePlaylist from '../views/playlists/CreatePlaylist.vue';

const routes = [
	{
		path: '/',
		name: 'home',
		component: Home
	},
	{
		path: '/auth/login',
		name: 'login',
		component: Login
	},
	{
		path: '/auth/signup',
		name: 'signup',
		component: Signup
	},
	{
		path: '/collection/playlists',
		name: 'playlists',
		component: Playlists
	},
	{
		path: '/playlists/create',
		name: 'createPlaylist',
		component: CreatePlaylist
	}
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes
});

export default router;
