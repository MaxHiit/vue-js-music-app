// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore, Timestamp } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getStorage, ref } from 'firebase/storage';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyCrRK4PDCUCpI3bBkeH3ZGNhHkl685CfbU',
	authDomain: 'vue-js-music-app.firebaseapp.com',
	projectId: 'vue-js-music-app',
	storageBucket: 'vue-js-music-app.appspot.com',
	messagingSenderId: '539804248732',
	appId: '1:539804248732:web:43f5af46338ef26db09b59'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

// Initialize Cloud Storage and get a reference to the service
const storage = getStorage(app);

const timestamp = () => Timestamp.now();

export { db, auth, storage, timestamp };
