<style>
	table {
		min-width: 100%;
		border-collapse: collapse;
	}
	td,th {
		background: var(--c2);
		color: var(--c1);
		padding: 0;
		border-top: 1px solid transparent;
		min-width:8rem;
	}
	td > * {
		padding: 0 5%;
	}
	[id="invert-color"]:checked ~ table th,
	[id="invert-color"]:checked ~ table td {
		background: var(--c1);
		color: var(--c2);
	}

</style>
<script>
	export let palette
    import ReportCard from '../components/ReportCard.svelte'
    const palettes = Object.values(palette)
</script>

<label for="invert-color">reverse colors</label>
<input id="invert-color" type="checkbox">
<table>
	<tbody>
		{#each palettes as p}
			{#if Array.isArray(p)}
				{#each p as color}
					<tr>
						<th style="--c1: {color.hex}; --c2: {color.a11y.white ? '#fff' : '#000'};">
							{color.name}
						</th>
						
						{#each palettes as palette}
							{#if Array.isArray(palette)}
								{#each palette as color2}
									<td style="--c1: {color.hex}; --c2:{color2.hex} ">
										<p>
											{color2.hex}<br>
                                            <ReportCard 
                                                color1={color.hex} 
                                                color2={color2.hex}
                                            ></ReportCard>
										</p>
									</td>
								{/each}
							{/if}
						{/each}
					</tr>
				{/each}
			{/if}
		{/each}
	</tbody>
</table>


