<script context="module">
	export function preload({ params, query }) {
		return this.fetch(`categories.json`).then(r => r.json()).then(categories => {
			return {categories};
		});
	}
</script>

<script>
	import { hexToHSL } from "../../../modules/formatColor.mjs";
	export let categories
	categories.sort( (color1, color2) => {
		const hsl1 = hexToHSL(color1.nearestColor)
		const hsl2 = hexToHSL(color2.nearestColor)
		return hsl1[0] > hsl2[0] ? 1 : -1
	} )
</script>

<style>
    ul {
        list-style: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'/%3E");
        padding: 0;
        margin: 0;
    }
	li {
		padding: 0;
		margin: 0;
	}
	li a {
		display: block;
		padding: var(--s4);
		font: var(--f600);
		color: var(--neutral0);
		background-color: var(--c);
	}

	li a::after {
		content: ' ←';
		opacity: .00000001;
	}
	li a:focus::after {
		opacity: .999999999;
	}
	h1 {
   		padding: 5% 0 10%;
		font: var(--f800);
		margin: 0;
	}

</style>

<svelte:head>
	<title>colors</title>
</svelte:head>

<h1>Colors</h1>

<ul>
	{#each categories as category}
		<li>
			<a 
				style="--c: #{category.nearestColor}"
				href="/categories/{category.slug}"
			>
				{category.name}
			</a>
		</li>
	{/each}
</ul>