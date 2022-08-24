<script lang="ts">
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';
	import { createEventDispatcher } from 'svelte';

	export let url: string;

	const dispatch = createEventDispatcher();

	function onClick() {
		goto(url);
		dispatch('clicked', url);
	}

	let className: string;
	$: className = url === $page.url.pathname ? 'active' : '';
</script>

<a on:click|preventDefault={onClick} href={url} class={className}>
	<slot />
</a>

<style>
	a {
		text-decoration: none;
		color: var(--pal-dark);
		background-color: var(--pal-bg-light);
		padding: calc(var(--spacing) * 1);
		display: inline-block;
		border: none;
	}
	a.active {
		background-color: var(--pal-bg-soft);
	}
	a:hover {
		background-color: var(--pal-bg-soft);
	}
	@media only screen and (max-width: 40em) {
		a {
			width: max-content;
			text-align: center;
		}
		a.active {
			background-color: var(--pal-bg-light);
			position: relative;
		}
		a.active::before {
			content: '🍻';
			position: absolute;
			left: -1em;
		}
	}
</style>
