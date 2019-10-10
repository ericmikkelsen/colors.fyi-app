<style>

</style>
<script>
    import ColorMatrix from '../../components/ColorMatrix.svelte'
	import { palette } from '../store/index.js'
</script>

<svelte:head>
	<title>Colors.fyi</title>
</svelte:head>

<ColorMatrix palette="{palette}"></ColorMatrix>

