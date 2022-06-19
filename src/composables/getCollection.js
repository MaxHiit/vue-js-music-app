import { ref, watchEffect } from 'vue';
import { db } from '@/firebase/config';
import { collection, query, orderBy, onSnapshot } from 'firebase/firestore';

const getCollection = (collectionName) => {
	const documents = ref(null);
	const error = ref(null);

	// register the firestore collectioon reeference
	let collectionRef = collection(db, collectionName);

	// create a specific query
	const q = query(collectionRef, orderBy('createdAt'));

	const unsub = onSnapshot(
		q,
		(querySnapshot) => {
			// browse the documents in the collection and add them in a table
			const results = [];
			querySnapshot.forEach((doc) => {
				// must wait for the server to create the timestamp & send it back
				results.push({ ...doc.data(), id: doc.id });
			});

			// update values
			documents.value = results;
			error.value = null;
		},
		(err) => {
			console.log(err.message);
			documents.value = null;
			error.value = 'could not fetch data';
		}
	);

	watchEffect((onInvalidate) => {
		// unsub from prev collection when watcher is stopped (component unmounted)
		onInvalidate(() => unsub());
	});

	return { documents, error };
};

export default getCollection;
