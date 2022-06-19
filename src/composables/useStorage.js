import { ref } from 'vue';
import { storage } from '@/firebase/config';
import { ref as ref_storage, uploadBytes, getDownloadURL } from 'firebase/storage';
import getUser from './getUser';

const { user } = getUser();

const useStorage = () => {
	const error = ref(null);
	const url = ref(null);
	const filePath = ref(null);

	const uploadImage = async (file) => {
		filePath.value = `covers/${user.value.uid}/${file.name}`;
		const storageRef = ref_storage(storage, filePath.value);
		try {
			const res = await uploadBytes(storageRef, file);
			console.log(res);
			const urlValue = await getDownloadURL(res.ref);
			console.log(urlValue);
			url.value = urlValue;
		} catch (err) {
			console.log(err);
			error.value = err.message;
		}
	};

	return {
		url,
		filePath,
		error,
		uploadImage
	};
};

export default useStorage;
