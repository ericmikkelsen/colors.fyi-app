<!-- <style>
	a {
		display: block;
		padding: 1rem 5%;
	}
</style> -->
<!-- <script>
	import { palette } from '../routes/store/index.js'
	const sketchColors = Object.values(palette).reduce( (accumulator, swatch) => {
		if(Array.isArray(swatch)){
			const colors = swatch.map( color => {
				return color.sketch
			} )
		}
	} ,[])
	const encode = str => {
		return 'data:text/plain;charset=utf-8,' + encodeURIComponent( str )
	}
	const sketch = {
		compatibleVersion: "1.4",
		pluginVersion: "1.4",
		colors: sketchColors,
	}
	const download = {
		json: encode( JSON.stringify(palette) ),
		sketch: encode( JSON.stringify(sketch) ),
	}

</script> -->

<!-- <a 
	download="colors-fyi.json"
	href="{download.json}"
>
	JSON
</a>
<a 
	download="colors-fyi-sketch.json"
	href="{download.sketch}"
>
	Sketch
</a> -->

<script context="module">
	export function preload({ params, query }) {
		return this.fetch(`./categories.json`).then(r => r.json()).then(categories => {
			return {categories}
		});
	}
</script>
<script>
	import { hexToHSL } from "../../modules/formatColor.mjs"
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
        padding: 0 0 0 5%;
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
		background: var(--c);
	}

	li a::after {
		content: ' ←';
		opacity: .00000001;
	}
	li a:focus::after {
		opacity: .999999999;
	}
	h1 {
   		padding: 5% 0 10% 5%;
		font: var(--f800);
		margin: 0;
	}

</style>

<svelte:head>
	<title>Colors.fyi</title>
</svelte:head>

<h1>Colors.fyi</h1>

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