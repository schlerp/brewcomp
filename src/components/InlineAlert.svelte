<script lang="ts">
	export let alertIcon: string = '💡';
</script>

<div class="inline-alert">
	<span class="alert-icon">{alertIcon}</span>
	<small>
		<slot />
	</small>
</div>

<style>
	.inline-alert {
		display: flex;
		flex-direction: row;
		align-items: center;
		font-family: var(--font-heading);
		color: var(--pal-font-content);
		margin-block: 2rem;
	}
	small {
		position: relative;
	}
	.alert-icon {
		font-size: 2rem;
		padding-inline: 1rem;
	}
</style>
