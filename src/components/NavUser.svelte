<script lang="ts">
	import NavItem from './NavItem.svelte';

	const currentUser = undefined;
</script>

{#if currentUser !== undefined}
	<NavItem item={{ content: '🧑 John Smith', url: '/profile' }} />
{:else}
	<NavItem item={{ content: 'Sign in', url: '/signin' }} />
{/if}
