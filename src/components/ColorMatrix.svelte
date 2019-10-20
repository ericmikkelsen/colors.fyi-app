<style>
	ol, ul, li {
		list-style: var(--list-style-none);
		padding: 0;
		margin: 0;
	}
	[id="invert-color"]:checked ~ table th,
	[id="invert-color"]:checked ~ table td {
		background: var(--c1);
		color: var(--c2);
	}
	.ColorMatrix__palette {
		padding: var(--s4)
	}
</style>
<script>
	export let palette
	import ReportCard from '../components/ReportCard.svelte'
    import Details from '../components/Details.svelte'
    const palettes = Object.values(palette)
</script>
<ul>
	{#each palettes as p}
		{#if Array.isArray(p)}
			<li>
				<ol>
					{#each p as color, index}
						<li>
							<Details 
								c1={color.hex}
								c2={color.hex}
								modifier={'Details--'}
								summaryText={p[5].name + ' ' + (index + 1)}
							>
								<div class="ColorMatrix__palette">
									{#each palettes as p2}
										{#if Array.isArray(p2)}
											{#each p2 as color2}
												<ReportCard 
													color1={color.hex} 
													color2={color2.hex}
												></ReportCard>
											{/each}
										{/if}
									{/each}
								</div>
							</Details>
						</li>
					{/each}
				</ol>
			</li>
		{/if}
	{/each}
</ul>


