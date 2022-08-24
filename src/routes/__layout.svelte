<script lang="ts">
	import NavBar from '../components/NavBar.svelte';
	import Footer from '../components/Footer.svelte';
	import Sidebar from '../components/Sidebar.svelte';
	import HeadTitle from '../components/HeadTitle.svelte';
	import PageTransition from '../components/PageTransition.svelte';
</script>

<HeadTitle />

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
