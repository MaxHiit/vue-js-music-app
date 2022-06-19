<template>
	<form class="form flex flex-col" @submit.prevent="handleSubmit">
		<h2 class="form-title">Create Playlist</h2>
		<input type="text" class="input-text" v-model="title" required :placeholder="titlePlaceholder" />
		<textarea
			cols="30"
			rows="10"
			class="input-text"
			v-model="description"
			required
			:placeholder="descriptionPlaceholder"
		></textarea>

		<label>Upload playlist cover image</label>
		<input type="file" @change="handleChange" />
		<div class="error">{{ fileError }}</div>

		<div class="error"></div>
		<button class="btn">Create</button>
	</form>
</template>

<script>
import { ref } from 'vue';
import useStorage from '@/composables/useStorage';
import useCollection from '@/composables/useCollection';
import getUser from '@/composables/getUser';
import { timestamp } from '@/firebase/config';

export default {
	name: 'createPlaylist',

	setup() {
		const { filePath, url, uploadImage } = useStorage();
		const { error, addNewDoc } = useCollection('playlists');
		const { user } = getUser();

		const title = ref('');
		const titlePlaceholder = ref('Playlist title');
		const description = ref('');
		const descriptionPlaceholder = ref('Playlist description...');
		const file = ref(null);
		const fileError = ref(null);

		const handleSubmit = async () => {
			if (file.value) {
				await uploadImage(file.value);
				await addNewDoc({
					title: title.value,
					description: description.value,
					userId: user.value.uid,
					userName: user.value.displayName,
					coverUrl: url.value,
					filePath: filePath.value,
					songs: [],
					createdAt: timestamp()
				});

				if (!error.value) {
					console.log('playlist added');
				}
			}
		};

		// allowed filte type
		const fileTypes = ['image/png', 'image/jpeg'];

		const handleChange = (e) => {
			const selectedFile = e.target.files[0];

			if (selectedFile && fileTypes.includes(selectedFile.type)) {
				file.value = selectedFile;
				fileError.value = null;
			} else {
				file.value = null;
				fileError.value = 'Please select an image file (png or jpg)';
			}
		};

		return {
			title,
			titlePlaceholder,
			description,
			descriptionPlaceholder,
			handleSubmit,
			handleChange,
			fileError
		};
	}
};
</script>

<style></style>
