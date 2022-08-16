<script lang="ts">
	import NavBar from '../components/NavBar.svelte';
	import Footer from '../components/Footer.svelte';
	import Sidebar from '../components/Sidebar.svelte';
	import { config } from '../config';
	import PageTransition from '../components/PageTransition.svelte';
</script>

<svelte:head>
	<title>Brew Comp - {config.clubName}</title>
</svelte:head>

<div>
	<NavBar />
	<div class="wrapper">
		<PageTransition>
			<slot />
		</PageTransition>
		<Sidebar />
	</div>
</div>
<Footer />

<style>
	div.wrapper {
		display: flex;
		flex-direction: row;
		padding: 2em;
	}
	@media only screen and (min-width: 60em) {
		div.wrapper {
			padding-inline: calc(calc(100% - 55em) / 2);
		}
	}
</style>
