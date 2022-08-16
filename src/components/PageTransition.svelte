<script>
	import { fly } from 'svelte/transition';
	export let url = '';
	const pageTransitionDuration = 500;
</script>

{#key url}
	<div
		class="content"
		in:fly={{ x: -10, duration: pageTransitionDuration, delay: pageTransitionDuration }}
		out:fly={{ x: 10, duration: pageTransitionDuration }}
	>
		<slot />
	</div>
{/key}
