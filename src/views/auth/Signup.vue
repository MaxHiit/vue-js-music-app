<template>
	<form class="form flex flex-col" @submit.prevent="handleSubmit">
		<h2 class="form-title">Signup</h2>
		<input
			type="text"
			class="input-text pl-4 rounded-lg"
			:placeholder="namePlaceholder"
			v-model="name"
		/>
		<input
			type="email"
			class="input-text pl-4 rounded-lg"
			:placeholder="emailPlaceholder"
			v-model="email"
		/>
		<input
			type="password"
			class="input-text pl-4 rounded-lg"
			:placeholder="passwordPlaceholder"
			v-model="password"
		/>

		<div v-if="error" class="error">
			{{ error }}
		</div>

		<button v-if="!isPending" type="submit" class="btn w-fit mt-8">Sign up</button>
		<button v-if="isPending" disabled class="btn flex justify-start gap-2 w-fit mt-8">
			<RefreshIcon class="icon animate-spin w-5 h-5" />
			<span>Loading...</span>
		</button>
		<div class="flex items-center">
			<hr class="separator" />
			<span>or</span>
			<hr class="separator" />
		</div>
		<p class="text-lg text-center pb-2">Already have an account ?</p>
		<router-link :to="{ name: 'login' }" class="m-auto flex">
			<button class="btn">
				<span>I already have an account</span>
			</button>
		</router-link>
	</form>
</template>

<script>
import { ref } from 'vue';
import useAuth from '@/composables/useAuth';
import { RefreshIcon } from '@heroicons/vue/solid';

export default {
	name: 'signup',
	components: {
		RefreshIcon
	},

	setup() {
		const { signup, error, isPending } = useAuth();
		const name = ref('');
		const namePlaceholder = ref('Display name');
		const email = ref('');
		const emailPlaceholder = ref('Email');
		const password = ref('');
		const passwordPlaceholder = ref('Password');

		const handleSubmit = async () => {
			const res = await signup(email.value, password.value, name.value);
			if (!error.value) {
				console.log('user signed up');
			}
		};

		return {
			name,
			namePlaceholder,
			email,
			emailPlaceholder,
			password,
			passwordPlaceholder,
			error,
			handleSubmit,
			isPending
		};
	}
};
</script>

<style></style>
