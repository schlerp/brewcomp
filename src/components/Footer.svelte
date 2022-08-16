<script lang="ts">
	import { config } from '../config';
</script>

<footer>
	<span>{config.clubName} - {config.currentYear}</span>
	<span class="text-soft">Brew Comp {config.version}</span>
</footer>

<style>
	footer {
		background-color: var(--pal-bg-light);
		background-image: linear-gradient(var(--pal-bg-light), var(--pal-bg-soft));
		border-top: 1px solid grey;
		padding: var(--spacing);
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}
	@media only screen and (min-width: 1024px) {
		footer {
			padding-inline: calc(calc(100% - 1024px) / 2);
		}
	}
</style>
