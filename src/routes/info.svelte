<script lang="ts">
	import { formatAsCurrency } from '../utils';
	import { onMount } from 'svelte';
	import type { CompetitionDefinition, BeerStyle } from '../types';

	let comp: CompetitionDefinition = {
		name: 'End of Year Competition (2022)',
		description:
			'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?',
		date: new Date(),
		entryOpenDate: new Date(),
		entryCloseDate: new Date(),
		entryFee: 10,
		entryCurrency: 'AUD',
		regOpenDate: new Date(),
		regCloseDate: new Date(),
		officialOpenDate: new Date(),
		officialCloseDate: new Date(),
		awardsDate: new Date(),
		allowedStyles: []
	};
	let feeString: string = `${comp.entryFee} ${comp.entryCurrency}`;
	onMount(() => {
		feeString = formatAsCurrency(comp.entryFee, comp.entryCurrency);
	});
</script>

<h1>{comp.name} - Info</h1>

<p>{comp.description}</p>

<h2>Account Registration</h2>
<p>
	Account creation available between <span class="highlight"
		>{comp.regOpenDate.toLocaleDateString()}</span
	>
	and
	<span class="highlight">{comp.regCloseDate.toLocaleDateString()}</span>.
</p>
<p>
	Judge and Steward expressions of interest open until: <span class="highlight"
		>{comp.officialCloseDate.toLocaleDateString()}</span
	>.
</p>

<h2>Entry Registration</h2>
<p>
	Entries for <span class="highlight">{comp.name}</span> is available between
	<span class="highlight">{comp.regOpenDate.toLocaleDateString()}</span>
	and <span class="highlight">{comp.regCloseDate.toLocaleDateString()}</span>.
</p>

<h2>Entry Fee</h2>
<p>
	The price per entry is <span class="highlight">{feeString}</span>.
</p>

<style>
	span.highlight {
		font-weight: bold;
		color: var(--pal-font-highlight);
	}
</style>
