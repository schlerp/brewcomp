<script lang="ts">
	import type { NavItemDefinition } from '../types';
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';
	import { createEventDispatcher } from 'svelte';

	export let item: NavItemDefinition;

	const dispatch = createEventDispatcher();

	function onClick() {
		goto(item.url);
		dispatch('clicked', { item });
	}

	let className: string;
	$: className = item.url === $page.url.pathname ? 'active' : '';
</script>

<a on:click|preventDefault={onClick} href={item.url} class={className}>
	{item.content}
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
