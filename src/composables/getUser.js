import { auth } from '@/firebase/config';
import { onAuthStateChanged } from 'firebase/auth';
import { ref } from 'vue';

const user = ref(auth.currentUser);

// listen if the user has changed
onAuthStateChanged(auth, (_user) => {
	user.value = _user;
});

const getUser = () => {
	return { user };
};

export default getUser;