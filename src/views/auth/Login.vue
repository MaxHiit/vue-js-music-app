<template>
	<form class="form flex flex-col" @submit.prevent="handleSubmit">
		<h2 class="form-title">Login</h2>
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

		<button v-if="!isPending" type="submit" class="btn w-fit mt-8">Log In</button>
		<button v-if="isPending" disabled class="btn flex justify-start gap-2 w-fit mt-8">
			<RefreshIcon class="icon animate-spin w-5 h-5" />
			<span>Loading...</span>
		</button>
		<div class="flex items-center">
			<hr class="separator" />
			<span>or</span>
			<hr class="separator" />
		</div>
		<p class="text-lg text-center pb-2">Don't have an account?</p>
		<router-link :to="{ name: 'signup' }" class="m-auto flex">
			<button class="btn">
				<span>I don't have an account</span>
			</button>
		</router-link>
	</form>
</template>

<script>
import { ref } from 'vue';
import useAuth from '@/composables/useAuth';
import { RefreshIcon } from '@heroicons/vue/solid';

export default {
	name: 'login',
	components: {
		RefreshIcon
	},

	setup() {
		const { login, error, isPending } = useAuth();
		const email = ref('');
		const emailPlaceholder = ref('Email');
		const password = ref('');
		const passwordPlaceholder = ref('Password');

		const handleSubmit = async () => {
			const res = await login(email.value, password.value);
			if (!error.value) {
				console.log('user logged in');
			}
		};

		return {
			email,
			emailPlaceholder,
			password,
			passwordPlaceholder,
			handleSubmit,
			error,
			isPending
		};
	}
};
</script>

<style>
.form {
	border-radius: 20px;
	background: transparent;
	border: 2px solid #fff;
	padding: 2em;
	width: 500px;
	margin: 5em auto 0;
	box-shadow: 0 0 10px #fff, 0 0 20px #fff;
	animation: formGlowEffect 1s ease-in-out infinite alternate;
}

.form-title {
	font-size: 3em;
	text-align: center;
	padding-bottom: 1em;
}

.form .input-text:focus {
	background: #fff;
	color: #000;
}

@keyframes formGlowEffect {
	from {
		box-shadow: 0 0 10px #fff, 0 0 20px #fff;
	}
	to {
		box-shadow: 0 0 20px #fff, 0 0 40px #fff;
	}
}

.form span {
	flex: 0.3 1 0%;
	align-self: center;
	text-align: center;
	line-height: 1px;
	font-weight: 700;
	font-size: 18px;
	text-transform: uppercase;
}

.separator {
	margin: 2em 0px 2em;
	flex: 1 1 0%;
	border-top: 1px solid rgb(255, 255, 255);
}
</style>
