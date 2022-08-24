<script lang="ts">
	import { config } from '../config';
	import { extraPageTitle } from '$lib/pageTitleStore';
	import { onMount } from 'svelte';

	let pageTitle: string;
	pageTitle = config.clubName;

	$: {
		pageTitle = config.clubName;
		pageTitle = pageTitle + ($extraPageTitle !== '' ? ` - ${$extraPageTitle}` : '');
		console.log('pageTitle reactive:', pageTitle);
	}

	onMount(() => {
		document.title = pageTitle;
	});
</script>

<svelte:head>
	<title>{pageTitle}</title>
</svelte:head>
