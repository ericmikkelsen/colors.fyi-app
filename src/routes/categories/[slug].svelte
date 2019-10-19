<script context="module">
   export async function preload({ params, query }) {
		// the `slug` parameter is available because
		// this file is called [slug].svelte
		const res = await this.fetch(`categories/${params.slug}.json`);
		const data = await res.json();
        console.log(params)
		if (res.status === 200) {
			return { 
                    category: {
                        name: data.color.name,
                        slug: params.slug,
                        colors: data.colors
                    } 
                };
		} else {
			this.error(res.status, data.message);
		}
	}
</script>

<script>
    export let category;
    import { hexToHSL } from "../../../modules/formatColor.mjs";
    import Details from '../../components/Details.svelte'
    const HSLKey = (color) => {
        const hsl = hexToHSL(color)
        const h = Math.round((hsl[0] * 10)).toString();
        const s = Math.round((hsl[1] * 10)).toString();
        const l = Math.round((hsl[2] * 10)).toString();
        return l + h + s
    }

    const list = category.colors.reduce( (accumulator, color) => {
        const key = HSLKey(color)
        if(!accumulator[key]){
            accumulator[key] = []
        }
        accumulator[key].push(color)
		return accumulator
    }, {})
</script>

<style>
    h1 {
        font: var(--f800);
        padding: 5% 0 10%;
        margin:0;
    }
    ul {
        list-style: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'/%3E");
        padding: 0;
        margin: 0;
    }
    li {
        padding: 0;
    }
    li li {
        float: left;
        margin: 0;
        width: auto;
        padding: 0;
    }
    li a {
        background-color: var(--c);
        display: block;
        color: #fff;
        padding: var(--s4) var(--s4);
        width: auto;
        text-align: center;
        font: var(--f600);
        font-family: monospace;
        text-transform: uppercase;
    }
    :global(.Details--category) {
        display: inline-block;
        width: 100%;
    }
</style>

<svelte:head>
	<title>{category.slug}</title>
</svelte:head>

<h1 style="--c1:{category.slug}">{category.name}</h1>
<ul>
    {#each Object.values(list) as cols, index}
        <li>
            <Details 
                c1={'#'+cols[0]}
                c2={'#'+cols.slice(-1)[0]}
                modifier={'Details--category'}
                summaryText={category.name}{index + 1} 
            >
                <ul>
                    {#each cols as color}
                        <li>
                            <a style="--c: #{color}" href="/colors/{color}/">{color}</a>
                        </li>
                    {/each}
                </ul>
            </Details>
        </li>
    {/each}
</ul>