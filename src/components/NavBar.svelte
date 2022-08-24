<script lang="ts">
	import NavItem from './NavItem.svelte';
	import type { NavItemDefinition } from '../types';
	import NavUser from './NavUser.svelte';

	const navList: NavItemDefinition[] = [
		{ content: 'Home', url: '/' },
		{ content: 'Info', url: '/info' },
		{ content: 'Volunteers', url: '/volunteers' },
		{ content: 'Sponsors', url: '/sponsors' },
		{ content: 'Contact', url: '/contact' },
		{ content: 'Register', url: '/register' }
	];

	let showNav: boolean = false;

	function toggleShowNav() {
		showNav = !showNav;
	}
	function hideMenu() {
		showNav = false;
	}
</script>

<nav>
	<div id="menuToggle" on:click={toggleShowNav}>
		<span class="bar" />
		<span class="bar" />
		<span class="bar" />
	</div>
	<div id="nav-left" class={showNav ? 'active' : ''}>
		{#each navList as item}
			<NavItem url={item.url} on:clicked={hideMenu}>
				{item.content}
			</NavItem>
		{/each}
	</div>
	<div id="nav-right">
		<NavUser />
	</div>
</nav>

<style>
	#menuToggle {
		display: none;
		width: 1.5em;
		height: 1.2em;
		padding: calc(var(--spacing) * 1.5);
	}
	#menuToggle span.bar {
		height: 4px;
		width: 100%;
		background-color: var(--pal-font-soft);
	}
	nav {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		background-color: var(--pal-bg-light); /* fallback */
		background-image: var(--pal-bg-soft);
		border-bottom: 1px solid grey;
	}
	/* for wide screens */
	@media only screen and (min-width: 60em) {
		nav {
			padding-inline: calc(calc(100% - 55em) / 2);
		}
	}
	/* for small screens */
	@media only screen and (max-width: 40em) {
		#menuToggle {
			display: flex;
			flex-direction: column;
			justify-content: space-between;
		}
		#nav-left {
			display: none;
			align-items: center;
		}
		#nav-left.active {
			display: flex;
			flex-direction: column;
			margin-top: calc(var(--spacing) * 2.5);
		}
	}
</style>
