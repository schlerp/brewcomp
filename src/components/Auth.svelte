<script lang="ts">
	import { supabase } from '$lib/supabaseClient';
	import InlineAlert from './InlineAlert.svelte';

	let loading: boolean = false;
	let email: string;

	const handleLogin = async () => {
		try {
			loading = true;
			const { error } = await supabase.auth.signIn({ email });
			if (error) throw error;
			alert('Check your email for the login link!');
		} catch (error) {
			alert(error.error_description || error.message);
		} finally {
			loading = false;
		}
	};
</script>

<form on:submit|preventDefault={handleLogin}>
	<div class="form">
		<h1 class="header">Sign in</h1>
		<p class="description">Sign in via magic link with your email below</p>
		<div class="form-control">
			<input class="inputField" type="email" placeholder="Your email" bind:value={email} />
		</div>
		<div class="form-control">
			<input
				type="submit"
				class="button block"
				value={loading ? 'Loading' : 'Send magic link'}
				disabled={loading}
			/>
		</div>
		<InlineAlert>
			<strong>Magic Link:</strong> A link will be emailed to your provided email to either sign in, or
			continue creating your profile!
		</InlineAlert>
	</div>
</form>
