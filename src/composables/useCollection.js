import { ref } from 'vue';
import { db } from '@/firebase/config';
import { collection, addDoc } from 'firebase/firestore';

const useCollection = (collectionName) => {
	const error = ref(null);
	const isPending = ref(false);

	// add new document into firestore collection
	const addNewDoc = async (doc) => {
		error.value = null;
		isPending.value = true;

		try {
			await addDoc(collection(db, collectionName), doc);
			isPending.value = false;
		} catch (err) {
			console.log(err.message);
			error.value = 'could not send the message';
			isPending.value = false;
		}
	};

	return { error, addNewDoc };
};

export default useCollection;
