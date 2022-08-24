<script lang="ts">
	import NavItem from './NavItem.svelte';
	import { supabase } from '$lib/supabaseClient';
	import Fa from 'svelte-fa/src/fa.svelte';
	import { faUser, faLock, faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';
	import Profile from './Profile.svelte';

	let currentUser = supabase.auth.user();
</script>

{#if currentUser !== null}
	<NavItem url={'/profile'}><Fa icon={faUser} /> Profile</NavItem>
	<NavItem url={'/signout'}><Fa icon={faArrowRightFromBracket} /> Sign out</NavItem>
{:else}
	<NavItem url={'/signin'}><Fa icon={faLock} /> Sign in</NavItem>
{/if}
