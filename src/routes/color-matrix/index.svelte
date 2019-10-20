<style>
	h1 {
   		padding: 5% 0 10%;
		font: var(--f800);
		margin: 0;
	}

</style>
<script>
    import ColorMatrix from '../../components/ColorMatrix.svelte'
	import { palette } from '../store/index.js'
</script>

<svelte:head>
	<title>Colors.fyi</title>
</svelte:head>
<h1>Your Colors</h1>
<ColorMatrix palette="{palette}"></ColorMatrix>

