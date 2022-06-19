import { ref } from 'vue';
import {
	createUserWithEmailAndPassword,
	updateProfile,
	signInWithEmailAndPassword,
	signOut
} from 'firebase/auth';
import { auth } from '@/firebase/config';

const error = ref(null);
const isPending = ref(false);

// login function
const login = async (email, password) => {
	error.value = null;
	isPending.value = true;
	try {
		const res = await signInWithEmailAndPassword(auth, email, password);
		error.value = null;
		isPending.value = false;
		return res;
	} catch (err) {
		console.log(err.message);
		error.value = 'Incorrect login credentials';
		isPending.value = false;
	}
};

// logout function
const logout = async () => {
	error.value = null;
	isPending.value = true;

	try {
		await signOut(auth);
		isPending.value = false;
	} catch (err) {
		console.log(err.message);
		error.value = err.message;
		isPending.value = false;
	}
};

// signup function
const signup = async (email, password, displayName) => {
	error.value = null;
	isPending.value = true;

	try {
		const res = await createUserWithEmailAndPassword(auth, email, password);

		if (!res) {
			throw new Error('Could not complete the signup');
		}

		await updateProfile(res.user, { displayName });

		error.value = null;
		isPending.value = false;
		return res;
	} catch (err) {
		console.log(err.message);
		error.value = err.message;
		isPending.value = false;
	}
};

const useAuth = () => {
	return { error, isPending, login, logout, signup };
};

export default useAuth;
