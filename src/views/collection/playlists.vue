<template>
	<h1>Playlist View</h1>
	<div v-if="error" class="error">Could not fetch the data</div>
	<div v-if="documents">
		<div class="flex gap-8">
			<template v-for="playlist in documents" :key="playlist.title">
				<Card :playlist="playlist" />
			</template>
		</div>
	</div>
</template>

<script>
import getCollection from '@/composables/getCollection';
import Card from '@/components/Card.vue';

export default {
	name: 'PlaylistsView',
	components: { Card },
	setup() {
		const { documents, error } = getCollection('playlists');

		return { documents, error };
	}
};
</script>

<style></style>
