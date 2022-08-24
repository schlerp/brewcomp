<script lang="ts">
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';
	import { supabase } from '$lib/supabaseClient';

	onMount(() => {
		let currentUser = supabase.auth.user();
		if (currentUser !== null) {
			supabase.auth.signOut();
			goto('/');
		}
	});
</script>
