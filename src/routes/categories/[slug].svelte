<script context="module">
	export async function preload({ params, query }) {
		// the `slug` parameter is available because
		// this file is called [slug].svelte
		const res = await this.fetch(`categories/${params.slug}.json`);
		const data = await res.json();

		if (res.status === 200) {
			return { 
                    category: {
                        slug: params.slug,
                        colors: data
                    } 
                };
		} else {
			this.error(res.status, data.message);
		}
	}
</script>

<script>
    export let category;
</script>

<style>
    h1 {
        font-size: 3rem;
        font-weight: 900;
    }
    ul {
        list-style: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'/%3E");
        padding: 0;
        margin: 0;
    }
    li {

        float: left;
        margin: 0;
        width: auto;
        min-width: 10%;
    }
    li a {
        display: block;
        color: #fff;
        padding: 2rem 0;
        width: auto;
        text-align: center;
    }
</style>

<svelte:head>
	<title>{category.slug}</title>
</svelte:head>

<h1 style="color: {category.slug}">{category.slug}</h1>

<div class='content'>
    <ul>
        {#each category.colors as color}
            <li style="background-color:#{color}">
                <a href="/colors/{color}/">{color}</a>
            </li>
        {/each}
    </ul>
</div>
