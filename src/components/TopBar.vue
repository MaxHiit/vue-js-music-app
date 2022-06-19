<template>
	<header class="sticky top-0 h-[64px] pt-[1em]">
		<div class="flex justify-between">
			<div class="flex items-center gap-4">
				<div @click="handlePrev">
					<ChevronLeftIcon class="icon w-7 h-7" />
				</div>
				<div @click="handleNext">
					<ChevronRightIcon class="icon w-7 h-7" />
				</div>
				<div class="relative w-full">
					<form @submit.prevent="handleSubmit">
						<input
							v-model="search"
							type="text"
							name="search"
							:placeholder="inputPlaceholder"
							class="topbar__search-input input-text"
						/>
						<button type="submit" class="topbar__search-button absolute top-1/2 left-0 pl-3">
							<SearchIcon class="icon w-5 h-5" />
						</button>
					</form>
				</div>
			</div>

			<template v-if="!user">
				<router-link :to="{ name: 'login' }">
					<button class="btn">
						<span>Login</span>
					</button>
				</router-link>
			</template>
			<template v-else>
				<button @click="handleLogout" class="btn">
					<span>Logout</span>
				</button>
			</template>
		</div>
	</header>
</template>

<script>
import { ChevronLeftIcon, ChevronRightIcon, SearchIcon } from '@heroicons/vue/solid';
import { useRouter } from 'vue-router';
import { ref } from 'vue';
import useAuth from '@/composables/useAuth';
import getUser from '@/composables/getUser';

export default {
	name: 'topbar',
	components: {
		ChevronLeftIcon,
		ChevronRightIcon,
		SearchIcon
	},

	setup() {
		const { logout } = useAuth();
		const { user } = getUser();
		const router = useRouter();
		const search = ref('');
		const inputPlaceholder = 'Search for song';

		const handlePrev = () => {
			router.go(-1);
		};

		const handleNext = () => {
			router.go(1);
		};

		const handleSubmit = () => {
			console.log(search.value);
		};

		const handleLogout = async () => {
			await logout();
			console.log('user logged out');
			router.push({ name: 'home' });
		};

		return {
			handlePrev,
			handleNext,
			handleSubmit,
			handleLogout,
			search,
			inputPlaceholder,
			user
		};
	}
};
</script>

<style>
.topbar__search-button {
	transform: translateY(-50%);
}
</style>
