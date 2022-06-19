<template>
	<nav class="navbar">
		<ul class="navbar__list h-full">
			<li class="navbar__list__item h-auto">
				<UserIcon class="icon" />
			</li>

			<div class="navbar__list__items mt-10">
				<li class="navbar__list__item">
					<router-link :to="{ name: 'home' }">
						<HomeIcon class="icon navbar__list__item-icon" />
					</router-link>
				</li>
				<li class="navbar__list__item py-10">
					<router-link :to="{ name: 'playlists' }">
						<CollectionIcon class="icon navbar__list__item-icon" />
					</router-link>
				</li>
				<li class="navbar__list__item">
					<MusicNoteIcon class="icon navbar__list__item-icon" />
				</li>
			</div>
		</ul>
	</nav>
</template>

<script>
import { UserIcon, HomeIcon, CollectionIcon, MusicNoteIcon } from '@heroicons/vue/solid';
export default {
	components: {
		UserIcon,
		HomeIcon,
		CollectionIcon,
		MusicNoteIcon
	},
	setup() {
		return {};
	}
};
</script>

<style>
.navbar {
	grid-area: navbar__view;
	width: 120px;
	padding: 1em 2em;
}

.navbar__list {
	display: flex;
	flex-direction: column;
	align-items: stretch;
}

.navbar__list__item a.router-link-active.router-link-exact-active {
	width: 100%;
	display: block;
	border-right: 2px solid #fff;
}
</style>
