<script context="module">
	export function preload({ params, query }) {
		return this.fetch(`categories.json`).then(r => r.json()).then(categories => {
			return {categories};
		});
	}
</script>

<script>
	export let categories;
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
		display: inline-block;
		padding: 0;
		font-size: 3rem;
		font-weight: 900;
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
				style="color: {category.slug}"
				href="/categories/{category.slug}"
			>
				{category.slug}
			</a>
		</li>
	{/each}
</ul>